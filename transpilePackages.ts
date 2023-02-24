import path from 'path'
import fs from 'fs'

import { build } from 'esbuild'

const packages = fs.readdirSync(
  path.resolve('packages'), {
    withFileTypes: true
  })
  .filter(item => item.isDirectory())
  .map(item => item.name)

for (const pkg of packages) {
  const pkgPath = path.resolve('packages', pkg)

  build({
    bundle: true,
    entryPoints: [`${pkgPath}/index.ts`],
    legalComments: 'none',
    logLevel: 'info',
    minify: true,
    outfile: `${pkgPath}/dist/index.js`,
    platform: 'node',
    sourcemap: true,
    target: 'node18',
  })
}
