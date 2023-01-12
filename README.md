# nice-func

 Try to achieve nice function in the web page.

## Demo

### vivo iQOO Neo7 向下滚动切换手机颜色效果

![vivo-scroll-switch-phone-color.gif](./images/vivo-scroll-switch-phone-color.gif)

链接：[iQOO Neo7 - vivo官方网站](https://www.vivo.com.cn/vivo/iqooneo7/)



图片从上到下滚动时，位置切换

transform: translate(695px, 575px) scale(2.5, 2.5);

transform: translate3d(55.8193px, 46.1814px, 0px) scale(1.1205, 1.1205);

transform: translate(0px, 0px);



GSAP (GreenSock Animation Platform) https://github.com/greensock/GSAP

Getting Started with GSAP https://greensock.com/get-started/#creatingAnAnimation

#### img 标签和 div background image 都可以显示图片，使用 css 背景图片加载图片有什么好处

css 设置图片可以通过媒体查询指定不同的分辨率使用不用的图片

```css
@media (max-width: 1440px)
.iqooneo7-color .umx-stickyBox .color-box .umx-figure .f-mask figure.umx-f1 {
    background-image: url(../images/iqooneo7-color-img1-md.png);
    background-size: 461px 605px;
    background-position: center;
    background-repeat: no-repeat;
    width: 461px;
    height: 605px;
}

@media (max-width: 1600px)
.iqooneo7-color .umx-stickyBox .color-box .umx-figure .f-mask figure.umx-f1 {
    background-image: url(../images/iqooneo7-color-img1-lg.png);
    background-size: 491px 644px;
    background-position: center;
    background-repeat: no-repeat;
    width: 491px;
    height: 644px;
}
```

gsap ScrollTrigger 插件，scroll 滚动结合 gsap 动画

[使用GSAP实现滚动条交互动画](https://jbea.cn/archives/304.html)

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
                    markers: true,   //绘制开始位置和结束位置的线条
                    scrub: true,       //表示动画可以重复执行改成false表示只执行一次
                    pin: true           //动画执行期间，页面不进行滚动，动画执行结束后，页面恢复滚动
                }
```





