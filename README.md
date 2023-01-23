# nice-func

 Try to achieve nice function in the web page.

## Demo

### MacBook Pro 新品发布官网动画效果实现(2023年01月)

![2-1-macbook-pro-video-1.gif](./src/images/2-1-macbook-pro-video-1.gif)

原始链接：[MacBook Pro 14 英寸和 MacBook Pro 16 英寸 - Apple (中国大陆)](https://www.apple.com.cn/macbook-pro-14-and-16/)

Code
- [canvas-animation](./src/2-macbook-pro-animation-2023-01/canvas-animation.html)
- [video-animation](./src/2-macbook-pro-animation-2023-01/video-animation.html)


芯片滚动高光动画

![2-3-macbook-pro-chip.gif](./src/images/2-3-macbook-pro-chip.gif)

批量获取图片
```js
// batch-index.js
// M2 pro 芯片切换动画 0000.jpg => 0052.png
// https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/m2_pro/medium/medium_0051.jpg

// M2 max 芯片切换
// https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/m2_max/medium/medium_0000.jpg

const axios = require('axios');
const fs = require('fs')
const path = require('path')

/**
 * 获取静态图片链接
 * @param {*} mode m2_pro 或 m2_max
 * @param {*} numStr '00' => '52'
 */
let getFileUrl = (mode, numStr) => `https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/${mode}/medium/medium_00${numStr}.jpg`

const downloadImgFromUrl = (mode, fileUrl) => {
    axios.get(fileUrl, {
        responseType: 'arraybuffer'
    })
      .then(function (response) {
        // handle success
        let fileNameArr = fileUrl.split('/')
        let fileName = fileNameArr[fileNameArr.length - 1]
        fs.writeFileSync(path.resolve(__dirname, `./download/${mode}/${fileName}`), response.data)
        console.log('下载完成')
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
}

for (let i = 0, len = 52; i <= len; i++) {
    let numStr = i + ''
    if (numStr.length < 2) {
        numStr = `0${numStr}` // 0 => '00', 9 => '09'
    }
    downloadImgFromUrl('m2_pro', getFileUrl('m2_pro', numStr))
    downloadImgFromUrl('m2_max', getFileUrl('m2_max', numStr))
}
```

canvas 播放帧动画，参考：[滚动条控制播放的canvas逐帧动画](https://www.cnblogs.com/acttan/p/16334229.html)

video 动画注意点：muted 才能 autoplay，循环播放视频 loop，如果不支持自动播视频有图片占位

```html
<video src="./images/large.mp4" muted autoplay loop style="width: 100%;"></video>
```

视频文字遮罩，启停视频按钮

![2-2-macbook-pro-video-mask.gif](./src/images/2-2-macbook-pro-video-mask.gif)

```html
<body>
  <div class="gray-mask" style="width: 100%; min-width: 800px;position: relative;">
      <video src="./images/medium.mp4" muted autoplay loop style="width: 100%;"></video>
      <div style="position: absolute;top: 30px;right:30px;color:#f5f5f7;font-size: 30px;">
          最高 19 核图形处理器
      </div>
      <div style="position: absolute;bottom: 100px;left:30px;color:#f5f5f7;font-size: 30px;">
          支持外接多达两台显示器
      </div>

      <div class="inline-media-ui" style="position: absolute;bottom: 22px;right: 22px;cursor: pointer;">
          <div class="play-pause-button" data-aria-playing="暂停野兽视频" style="width: 32px;height: 32px;;">
              <svg class="svg-icon pause-icon" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 85 85">
                  <path class="control-path circle-opaque" d="M42.5,2.5a40,40,0,1,1-40,40A40,40,0,0,1,42.5,2.5Z"
                      fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4px" stroke-linejoin="round">
                  </path>
                  <path class="control-fill pause-line"
                      d="M50,28.25a2,2,0,0,1,2,2v24a2,2,0,1,1-4,0v-24A2,2,0,0,1,50,28.25Z"></path>
                  <path class="control-fill pause-line"
                      d="M35,28.25a2,2,0,0,1,2,2v24a2,2,0,1,1-4,0v-24A2,2,0,0,1,35,28.25Z"></path>
              </svg>
              <svg class="svg-icon play-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85"
                  style="opacity: 1;z-index: 2;display: none">
                  <path class="control-path circle-opaque" d="M42.5,2.5a40,40,0,1,1-40,40A40,40,0,0,1,42.5,2.5Z"
                      fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4px" stroke-linejoin="round">
                  </path>
                  <path class="control-fill play-shape"
                      d="M55.73,41.55a1.34,1.34,0,0,1,0,1.48,1.16,1.16,0,0,1-.52.52L35.27,56.1a1.33,1.33,0,0,1-.74.15,1.54,1.54,0,0,1-1.48-1.48v-25a1.25,1.25,0,0,1,.22-.74,1.16,1.16,0,0,1,.52-.52,1.25,1.25,0,0,1,.74-.22,2.19,2.19,0,0,1,.74.15L55.21,41a2,2,0,0,1,.52.59">
                  </path>
              </svg>
          </div>
      </div>
  </div>
  <script>
    /* 视频开始、暂停 */
    document.querySelector('.pause-icon').onclick = (e) => {
        document.querySelector('.gray-mask video').pause();
        document.querySelector('.pause-icon').style.display = 'none'
        document.querySelector('.play-icon').style.display = 'block'
    }
    document.querySelector('.play-icon').onclick = () => {
        document.querySelector('.gray-mask video').play();
        document.querySelector('.play-icon').style.display = 'none'
        document.querySelector('.pause-icon').style.display = 'block'
    }
  </script>
</body>
```

滑动切换按钮，纯 css，黑色背景很关键，不然效果出不来。核心代码如下：

![2-4-macbook-pro-btn-switch.gif](./src/images/2-4-macbook-pro-btn-switch.gif)

```html
<style>
/* 白色背景 */
.tabnav-item-1.current~.tabnav-highlight {
    transform: translateX(0%);
}
.tabnav-item-2.current~.tabnav-highlight {
    transform: translateX(100%);
}

/* 添加过渡效果 */
.tabnav-highlight {
  transition: .2s ease-out;
}
</style>

<script>
// 点击事件切换 .current
document.querySelectorAll('ul li').forEach(item => {
  item.onclick = (e) => {
    document.querySelectorAll('ul li').forEach(item => item.classList.remove('current') )
    item.classList.toggle('current')
  }
})
</script>
```

### vivo iQOO Neo7 向下滚动切换手机颜色效果

![vivo-scroll-switch-phone-color.gif](./src/images/1-vivo-scroll-switch-phone-color.gif)

原始链接：[iQOO Neo7 - vivo官方网站](https://www.vivo.com.cn/vivo/iqooneo7/)

Code

- [scale-phone-to-middle-when-scroll](./src/1-vivo-scroll-switch-phone-color/scale-phone-to-middle-when-scroll.html)
- [switch-phone-color-when-scroll](./src/1-vivo-scroll-switch-phone-color/switch-phone-color-when-scroll.html)

图片从上到下滚动时，位置切换

```js
transform: translate(695px, 575px) scale(2.5, 2.5);
transform: translate3d(55.8193px, 46.1814px, 0px) scale(1.1205, 1.1205);
transform: translate(0px, 0px);
```

GSAP (GreenSock Animation Platform) <https://github.com/greensock/GSAP>

发音 [gi:s 'æp] 鸡丝哎婆

Getting Started with GSAP <https://greensock.com/get-started/#creatingAnAnimation>

```js
gsap.fromTo(".phone-wrap img", { x: 695,y: 575, scale: 2.5,}, {x: 0, yy: 0, scale: 1});
```

scroll 滚动与 gsap 动画结合，使用 [gasp ScrollTrigger 插件](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

Simple example

```js
gsap.to(".box", {
  scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
  x: 500
});
```

Advanced example

```js
let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".container",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      }
    }
  });

// add animations and labels to the timeline
tl.addLabel("start")
  .from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
  .addLabel("color")
  .from(".box", {backgroundColor: "#28a92b"})
  .addLabel("spin")
  .to(".box", {rotation: 360})
  .addLabel("end");
```

参考：[使用GSAP实现滚动条交互动画](https://jbea.cn/archives/304.html)

```js
 scrollTrigger: {
    trigger: ".demo",
    /*
        * ⚠ start: 表示动画开始执行节点
        * ⚠ end: 表示动画执行结束
        * 参数1: 表示当前这个元素的开始执行动画的起点
        *      【0：就是当前这个元素的顶端位置】
        *      【正数：当前这个元素根据顶端位置进行向下偏移】
        *      【负数：当前这个元素根据顶端位置进行向上偏移】
        * 
        * 参数2: 表示当前滚动条的起点执行位置
        *      【0：浏览器最顶端】
        *      【正数：向下偏移】
        *      【负数：向上偏移】
        * 当两个位置重合时，动画开始执行/结束
        * 此处的位置可以使用像素单位，完全可以自定义
        */
    start: '0% 60%', 
    end: '100% 10%',
    markers: true, // 绘制开始位置和结束位置的线条
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    pin: true // 动画执行期间，动画元素不跟随页面进行滚动，动画执行结束后，恢复滚动
}
```
