import path from 'path'

import { build } from 'esbuild'

const packages = ['globby']

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
