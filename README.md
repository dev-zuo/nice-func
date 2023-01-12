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

