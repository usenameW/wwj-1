import { render } from 'preact'

//import ReactDOM from 'react-dom/client'
//样式引入顺序
//初始化样式一般放在最前面
import  "reset-css"
//UI框架样式


//全局样式使用@符号须在tsconfig.json里配置 
//import "./assets/styles/global.scss"
import "@/assets/styles/global.scss"
//组件的样式
import {App} from './app.tsx'


render(<App />, document.getElementById('app') as HTMLElement)
