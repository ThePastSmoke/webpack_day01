import { tab } from './tab'
import { marquee } from './marquee'
tab()
marquee()

// 引入css
import "./style/index.css"
import "./style/index.less"

// 引入图片
import gifSrc from "./assets/1.gif"
import gpngSrc from "./assets/logo_small.png"
const gif = document.createElement('img')
const png = document.createElement('img')
gif.src = gifSrc
png.src = gpngSrc
document.body.appendChild(gif)
document.body.appendChild(png)

// 引入字体图标文件
import './assets/fonts/iconfont.css'


const fn = () => {
    console.log('你好');
}
console.log(fn);

import app from "./app.vue"

