import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', 
  output: {
    file: 'dist/bundle.js', 
    format: 'cjs', 
    sourcemap: true,
  },
  plugins: [
    resolve(),      
    commonjs(),    
    json(),         
    terser()       
  ],
};
