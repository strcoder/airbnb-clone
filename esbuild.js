require('dotenv').config();

const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
  minify: true,
  bundle: true,
  platform: 'node',
  target: ['node14.16'],
  outfile: 'dist/index.js',
  plugins: [sassPlugin()],
  entryPoints: ['src/server/index.tsx'],
}).catch((e) => console.error(e.message));

esbuild.build({
  minify: true,
  bundle: true,
  target: 'es6',
  plugins: [sassPlugin()],
  outfile: 'dist/public/index.js',
  entryPoints: ['src/frontend/index.tsx'],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.API_URL': `"${process.env.API_URL}/"`,
    // 'process.env.STRIPE_PUBLIC_KEY': `"${process.env.STRIPE_PUBLIC_KEY}"`,
  },
}).catch((e) => console.error(e.message));
