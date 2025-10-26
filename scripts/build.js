// scripts/build.js
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const packagesDir = path.resolve('./packages')
const changedPkgs = new Set()

function safeExec(cmd) {
  try {
    return execSync(cmd).toString()
  } catch {
    return ''
  }
}

// ✅ 尝试用 git diff 检测改动
let diffOutput = safeExec('git diff --name-only HEAD origin/main')

if (!diffOutput) {
  console.log('⚠️ 当前不是 git 仓库，使用文件修改时间检测改动。')
  const now = Date.now()
  fs.readdirSync(packagesDir).forEach((pkg) => {
    const pkgPath = path.join(packagesDir, pkg)
    const files = fs.readdirSync(pkgPath, { recursive: true })
    for (const file of files) {
      const filePath = path.join(pkgPath, file)
      const stat = fs.statSync(filePath)
      // 检查过去 10 分钟内有修改的文件
      if (now - stat.mtimeMs < 10 * 60 * 1000) {
        changedPkgs.add(pkg)
        break
      }
    }
  })
} else {
  diffOutput.split('\n').forEach((line) => {
    const match = line.match(/^packages\/([^/]+)\//)
    if (match) changedPkgs.add(match[1])
  })
}

if (changedPkgs.size === 0) {
  console.log('✅ 没有检测到改动包，跳过构建。')
  process.exit(0)
}

console.log(`📦 检测到改动包: ${[...changedPkgs].join(', ')}`)

for (const pkg of changedPkgs) {
  console.log(`🚀 构建 ${pkg}...`)
  execSync(`pnpm --filter ./packages/${pkg} run build`, { stdio: 'inherit' })
}

console.log('✅ 增量构建完成。')
