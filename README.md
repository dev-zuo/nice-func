# nice-func

 Try to achieve nice function in the web page.

## Demo

### vivo iQOO Neo7 向下滚动切换手机颜色效果

![vivo-scroll-switch-phone-color.gif](./src/images/1-vivo-scroll-switch-phone-color.gif)

原始链接：[iQOO Neo7 - vivo官方网站](https://www.vivo.com.cn/vivo/iqooneo7/)

Code

- [scale-phone-to-middle-when-scroll](/1-vivo-scroll-switch-phone-color/scale-phone-to-middle-when-scroll.html)
- [switch-phone-color-when-scroll](/1-vivo-scroll-switch-phone-color/switch-phone-color-when-scroll.html)

图片从上到下滚动时，位置切换

```js
transform: translate(695px, 575px) scale(2.5, 2.5);
transform: translate3d(55.8193px, 46.1814px, 0px) scale(1.1205, 1.1205);
transform: translate(0px, 0px);
```

GSAP (GreenSock Animation Platform) <https://github.com/greensock/GSAP>

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
