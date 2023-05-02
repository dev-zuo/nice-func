# 钉钉官网动效

## 动画分解

- 两侧/上下不同颜色方块（20 个 div 左右）
  - 第一阶段，从底部到视口中间
  - 第二阶段，视口固定，两边散开
- 中间钉钉 icon、slogan 文案（2 个核心元素）
  - 第一阶段：从小 => 大，从 0.x 倍变到 1 倍
  - 第二阶段：中间一段时滚动时，只 y 轴上升，大小基本固定，1倍 => 1.05缩放
  - 第三阶段：继续放大到消失（上移）
- 功能图标从中心点展开（14个(图片icon+名称) + 上面文案x2）
  - 第一阶段：两边的 8 个元素先逐渐展开
  - 第二阶段：中间的 6 个开始展开、两边的 4 个先逐渐展开
  - 第三阶段：最中间的两个上线展开、显示全部图标文案
- 底部背景 three.js 波浪，出现并缓慢上升

难点：

- 基本以上所有的 div （40 个左右）都要添加动画，而且大部分方向、速率还不一样，需要一个个设置、调试
- 动画曲线不是线性的，分阶段、分先后顺序，很难控制
- 需要与页面滚动相结合
  - 假设滚动距离 1000px

## 相关工具

贝塞尔动画曲线在线调试工具：[cubic-bezier](https://cubic-bezier.com/#.39,.27,.73,.87)

## 程序化监听动画曲线

先用一个元素做测试

宽度调到 1400px，选择一个元素，滚动，记录动画属性值，与对应滚动距离

```js
window.innerWidth // 1400
document.querySelector('.animation--ColorBox1--wSkwbZ9.animation--basePosition--FGeKxsr').style.cssText
// 'opacity: 0.4; transform: translate3d(1e-05px, 1e-05px, -67px);'
// xx.style.opacity // '0.4'
// style.transform // translate3d(1e-05px, 1e-05px, -67px)

document.documentElement.scrollTop // 滚动距离
```

监听元素变化，获取 scrollTop 与 style 值

```js
let square1 = document.querySelector('.animation--ColorBox1--wSkwbZ9.animation--basePosition--FGeKxsr')

let recordList = []
window.addEventListener('scroll', e => {
    let scrollTop = document.documentElement.scrollTop
    let cssText = square1.style.cssText
    recordList.push({
        scrollTop,
        cssText
    })
    console.log(JSON.stringify(recordList, null, 2))
})
```

将 transform 值切换出 x,y,z

```js
let str = 'translate3d(1e-05px, 1e-05px, -156px)'

str.split('(')[1].split(')')[0] 
// 1e-05px, 1e-05px, -156px
str.split('(')[1].split(')')[0].split(',')
// ['1e-05px', ' 1e-05px', ' -156px']
str.split('(')[1].split(')')[0].split(',').map(item => {
    return Number(item.trim().split('px')[0])
})
// [0.00001, 0.00001, -156]
let [transX, transY, transZ] = str.split('(')[1].split(')')[0].split(',').map(item => {
    return Number(item.trim().split('px')[0])
})
// transX 0.00001
// transY 0.00001
// transZ -156
```

完整代码

```js
let square1 = document.querySelector('.animation--ColorBox1--wSkwbZ9.animation--basePosition--FGeKxsr')

let recordList = []
window.addEventListener('scroll', e => {
    let scrollTop = document.documentElement.scrollTop
    let cssText = square1.style.cssText
    let transformText = square1.style.transform
    let opacity = square1.style.opacity - 0
    let [transX, transY, transZ] = getTransformXyz(transformText)
    recordList.push({
        scrollTop,
        cssText,
        transX,
        transY,
        transZ,
        opacity
    })
    console.log(JSON.stringify(recordList, null, 2))
    console.log(recordList)
})

function getTransformXyz(str) {
    // [0.00001, 0.00001, -156]
    let  xyzArr = str.split('(')[1].split(')')[0].split(',').map(item => {
        return Number(item.trim().split('px')[0])
    })
    return  xyzArr
}
```

从控制台数据后，怎么自动下载到本地 json 文件中

1-14 ICON 元素

```bash
01 02 03 04 05 06 07
08 09 10 11 12 13 14

# step1
# 周边 8 个元素 y: 112 => 130 => 0,  x: n => 0, z: 不变，opacity: 0 => 1
01 02 -- -- -- 06 07
08 09 -- -- -- 13 14

# step2
01 02 03 -- 05 06 07
08 09 10 -- 12 13 14
# 3、5、10、12 到达 1394 滚动距离时
# x 155 => 0、Y 134 => 0、opacity 0 => 1

# step3
01 02 03 04 05 06 07
08 09 10 11 12 13 14
# 4、11 到达 1470 滚动距离时
# Y 134 => 0、opacity 0 => 1
```
