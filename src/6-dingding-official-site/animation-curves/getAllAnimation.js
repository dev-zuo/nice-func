let recordList = []

window.addEventListener('scroll', e => {
    // 获取当前页面滚动位置
    let scrollTop = document.documentElement.scrollTop;
    // 获取钉钉官网动画关键父元素节点
    let parentEl = document.querySelector('.animation--DD--TXpK1af')
    // 获取 14 个 icon 元素列表
    let iconListEl = document.querySelector('.animation--cardBox--v5vdO9y')
    let nodes = [...parentEl.childNodes, ...iconListEl.childNodes]
    let animationElementList = []
    nodes.forEach(item => {
        let cssText = item.style.cssText
        let transformText = item.style.transform
        let opacity = item.style.opacity - 0
        let [transX, transY, transZ] = getTransformXyz(transformText)
        animationElementList.push({
            className: item.className,
            cssText,
            transX,
            transY,
            transZ,
            opacity
        })
    })
   
    recordList.push({
        scrollTop,
        animationElementList
    })
    console.log(JSON.stringify(recordList, null, 2))
    console.log(recordList)
})

function getTransformXyz(str) {
    if (!str) {
        return ['', '', '']
    }
    // [0.00001, 0.00001, -156]
    let  xyzArr = str.split('(')[1].split(')')[0].split(',').map(item => {
        return Number(item.trim().split('px')[0])
    })
    return  xyzArr
}