import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

console.log(execSync(`git diff --name-only HEAD~1`, { encoding: 'utf-8' }))

function getBaseBranch() {
  try {
    execSync('git fetch origin master --depth=1', { stdio: 'ignore' })
    return 'origin/master'
  } catch {
    try {
      execSync('git fetch origin main --depth=1', { stdio: 'ignore' })
      return 'origin/main'
    } catch {
      console.log('⚠️ No remote branch detected, fallback to HEAD~1')
      return 'HEAD~1'
    }
  }
}

function getChangedPackages() {
  const base = getBaseBranch()
  let diff
  try {
    diff = execSync(`git diff --name-only ${base}`, { encoding: 'utf-8' })
  } catch (err) {
    console.log('⚠️ git diff failed, fallback to last commit')
    diff = execSync('git diff --name-only HEAD~1', { encoding: 'utf-8' })
  }

  const packages = new Set()
  diff.split('\n').forEach((file) => {
    if (file.startsWith('packages/')) {
      const pkg = file.split('/')[1]
      packages.add(pkg)
    }
  })
  return [...packages]
}

function buildPackages(packages) {
  if (packages.length === 0) {
    console.log('✅ No changed packages, skip build.')
    return
  }

  console.log(`📦 Changed packages: ${packages.join(', ')}`)
  packages.forEach((pkg) => {
    console.log(`🚀 Building ${pkg}...`)
    execSync(`pnpm --filter ${pkg} run build`, { stdio: 'inherit' })
  })
}

buildPackages(getChangedPackages())
