import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import styleImport,{AntdResolve} from 'vite-plugin-style-import'
//路劲配置 爆红安装 npm i -D @types/node
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(),
    styleImport({resolves:[AntdResolve()],}),
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }

  }
})
