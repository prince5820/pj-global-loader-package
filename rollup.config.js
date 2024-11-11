import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    name: 'pj-global-loader'
  },
  external: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@mui/material', 'axios'],
  plugins: [typescript({ tsconfig: 'tsconfig.json' })]
})