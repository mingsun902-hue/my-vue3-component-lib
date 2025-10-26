import { execSync } from 'child_process'
import path from 'path'

function getChangedPackages() {
  // 直接比较最近两次提交
  const diff = execSync('git diff --name-only HEAD^ HEAD', { encoding: 'utf-8' })
  console.log('🔍 Changed files:')
  console.log(diff)

  const pkgs = new Set()

  diff
    .split('\n')
    .map((f) => f.trim()) // 去掉多余空格和回车符
    .filter((f) => f && f.startsWith('packages/')) // 只取 packages 目录下
    .filter((f) => !f.includes('/dist/')) // 🚫 忽略 dist 文件变化
    .forEach((f) => {
      const parts = f.split('/')
      if (parts.length > 1) pkgs.add(parts[1])
    })

  return [...pkgs]
}

function buildPackages(pkgs) {
  if (pkgs.length === 0) {
    console.log('✅ No changed packages, skip build.')
    return
  }

  console.log(`📦 Changed packages: ${pkgs.join(', ')}`)
  for (const pkg of pkgs) {
    console.log(`🚀 Building package: ${pkg}`)
    execSync(`pnpm --filter ${pkg} run build`, {
      stdio: 'inherit',
      cwd: path.resolve(process.cwd()),
    })
  }
}

buildPackages(getChangedPackages())
