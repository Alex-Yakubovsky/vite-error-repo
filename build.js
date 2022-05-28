const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')

require('esbuild').build({

    entryPoints: ['./src/App.tsx'],
    bundle: true,
    outfile: 'out.js',
    plugins: [pnpPlugin()]
}).catch(() => process.exit(1))
