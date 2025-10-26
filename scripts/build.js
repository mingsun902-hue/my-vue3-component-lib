import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

/**
 * 1️⃣ 自动检测改动包
 */
function getChangedPackages() {
  // 自动判断 main/master
  let baseBranch = 'origin/master'

  const diff = execSync(`git diff --name-only ${baseBranch}`, { encoding: 'utf-8' })
  const packages = new Set()

  diff.split('\n').forEach((file) => {
    if (file.startsWith('packages/')) {
      const pkg = file.split('/')[1]
      packages.add(pkg)
    }
  })
  return [...packages]
}

/**
 * 2️⃣ 计算依赖排序
 * 按 package.json 中 dependencies 的关系，确定构建顺序
 */
function sortByDependencies(changed) {
  const pkgRoot = path.resolve('packages')
  const dependencyMap = {}

  fs.readdirSync(pkgRoot).forEach((dir) => {
    const pkgPath = path.join(pkgRoot, dir, 'package.json')
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
      dependencyMap[dir] = Object.keys(pkg.dependencies || {})
    }
  })

  // 简单拓扑排序
  return changed.sort((a, b) => {
    if (dependencyMap[a]?.includes(b)) return 1
    if (dependencyMap[b]?.includes(a)) return -1
    return 0
  })
}

/**
 * 3️⃣ 执行构建
 */
function buildPackages(packages) {
  packages.forEach((pkg) => {
    console.log(`🚀 Building: ${pkg}`)
    execSync(`pnpm --filter ${pkg} run build`, { stdio: 'inherit' })
  })
}

/**
 * 主流程
 */
const changed = getChangedPackages()
if (changed.length === 0) {
  console.log('✅ No changed packages, skip build.')
  process.exit(0)
}

const sorted = sortByDependencies(changed)
console.log(`📦 Changed packages: ${sorted.join(', ')}`)
buildPackages(sorted)
