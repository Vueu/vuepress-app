---
title: CSS
date: 2022-1-5
author: Aavin
categories: 
 - 前端笔记
tags: 
 - CSS
---
### 1.复合选择器

1. 交集选择器：`选择器1选择器2......`，元素选择器与元素选择器之间有空格，如果有元素选择器必须放开头。

2) 并集选择器：`选择器1, 选择器2, ......`。

---

### 2.选择器权重（优先级）

1. 设置相同属性时发生冲突。
2. 高 -->低：内联样式->id->类和伪类->元素：

   ```
   内联样式：1000
   ```

   ```
   id选择器：100
   ```

   ```
   类和伪类：10
   ```

   ```
   元素选择器：1
   ```
3. 比较优先级，要把所有选择器优先级叠加：`div p.os#an{ } 或<div> <p class = "os" id="an"> </p> </div> = 1+1+10+100`。
4. 分组选择器分开算，多个次级的选择器权重叠加永远不会超过高级的选择器权重，如：`class = "a b c d e f g h i j k l m n"< id = "a"`。
5. 如果优先级一样，则使用代码在最下面的。
6. 通配选择器优先级为0，继承样式无优先级，比通配选择器还低：

   `{color:color1}`

   `p{color:color2}`

   `<p> <span> ddd </span></p> ，ddd显示color1`
7. 在某个样式后面加 !important 可以获取最高优先级甚至超过内联样式，慎用。

   `p{color：color1 !important ; ...}`

---

### 3.像素 px

1. 显示器（屏幕）实际上由一个一个小小的点组成，也就是像素
2. 不同显示器像素大小不一样，200px（200个像素）在不同屏幕显示不一样
3. **百分比：**将样式设置为相对于父元素的百分比，子元素可以根据父元素大小变化

---

### 4.长度单位em和rem

1. em根据自身元素字体大小变化，1em = 1 font-size，计算机默认字体为 16px
2. rem根据根元素（html）字体大小变化

---

### 5.RGB值

1. 根据三种颜色浓度调配RGB(Red, Green, Blue)
2. 颜色值0-255
3. RGB(0,0,0)黑色，`RGB(255,255,255)`白色
4. RGBA值，在RGB基础上增加一位透明度0-1，1表示完全不透明，0表示完全透明，如`RGBA(0,0,0,0.7)`
5. 十六进制RGB，#红色绿色蓝色，颜色值00-ff，如`#00ffff`，如果每个颜色值都两两重复，可以简写，如`#00ffaa->#0fa`，但`#abffff`不能简写

---

### 6.盒子模型

1. 边框宽度、内边距影响盒子大小
2. 多个属性合起来写没有顺序问题，如`border: solid red 10px;` 和 `border:red 10px solid; `效果一样 ，有特殊需求通过`boder-xxx-xxx:none;`（不设置）完成，其他样式一样
3. 盒子宽度计算：`border-right-with + border-left-with + padding-right + padding-left + with`
4. 外边距影响盒子位置，影响实际占用空间
5. 外边距设置负值向相反方向移动

---

### 7.元素的水平方向的布局，margin-right

```css
css:
<style>
.outer{
    width:800px; height:200px;
    border:10px red solid; 
}
.inner{
    width:200px; height:200px;
    background-color: #bfa;
}
</style>

html:
<div class="outer"><div class="inner"></div></div>

```

1. 元素在其父元素中水平方向的位置由以下几个属性共同决定:`css margin-left border-left padding-left width padding-right border-right margin-right`
2. 一个元素在其父元素中，水平布局必须要满足以下的等式
   `margin-left+border-left+padding-left+width+padding-rieht+border-right+margin-rieht =其父元素内容区的宽度(必须满足)`
   `0+0+0+200+0+0+0=800`
   `0+0+0+200+0+0 800 `
   以上等式必须满足，如果相加结果使等式不成立，则称为过渡约束，则等式会自动调整
3. 调整的情况:
   如果这七个值中没有为auto的情况，则浏览器会自动调整margin-right值以使等式满足，这七个值中有三个值和设置为auto：`width margin-left maring-right`
4. 如果某个值为auto，则会自动调整为auto的那个值以使等式成立

   `  0+0+0+auto+0+0+0=800 auto=800`

   ` 0+0+0+auto+0+0+200=800 auto=600`

   ` 200+0+0+auto+0+0+200=800 auto=400`

   `auto + 200+ 9+200 800 auto = 400`

   ` auto+0+0+200+0+0+auto=800 auto = 300`
5. 如果将一个宽度和一个外边距设置为auto，则宽度会调整到最大，设置为auto的外边距会自动为0
6. 如果将三个值都设置为auto，则外边距都是o，宽度最大
7. 如果将两个外边距设置为auto，宽度固定值，则会将外边距设置为相同的值，所以我们经常利用这个特点来使一个元素在其父元素中**水平居中**示例:
   `width:xxxpx; margin:0 auto;`
8. auto可以调整为负值

---

### 8.垂直布局

1. 默认情况下（不设置height）父元素高度height被内容撑开
2. 子元素大小超过父元素大小，子元素会溢出，也就是在父元素外面显示，***在父元素使用overflow*** 处理溢出的子元素，可以**设置为auto**根据需要生成滚动条

---

### 9.外边距重叠

1. 垂直相邻的外边距会发生重叠（折叠）
2. 垂直外边距的重叠(折叠
3. 兄弟元素之间
   兄弟元素间的相邻垂直外边距会取两者之间的较大值(两者都是正值)特殊情况:

   - 如果相邻的外边距一正一负，则取两者的和
   - 如果相邻的外边距都是负值，则取两者中绝对值较大的
   - 兄弟元素之间的外边距的重普，对于开发是有利的，所以我们不需要进行处理
4. 父子元素之间

   - 父子元素间相邻外边距，子元素的会传递给父元素(上外边距)
   - 父子外边距的折叠会影响到页面的布局，必须要进行处理
   - 处理方法
     - 外层元素添加padding
     - 外层元素 `overflow:hidden/auto`;
     - 外层元素透明边框 `border:1px solid transparent;`
     - 内层元素绝对定位 `postion: absolute;`
     - 内层元素 加`float:left;或display:inline-block;`

---

### 10.行内元素的盒子模型

1. **行内元素不可以设置width和height**
2. 可以设置padding，但垂直方向padding不会影响页面布局（不折叠）
3. 可以设置border，但垂直方向border不会影响页面布局
4. 可以设置margin，但垂直方向margin不会影响页面布局（不折叠）

---

### 11.display 用来设置元素显示的类型

可选值: `display:xxx;`

1. inline 将元素设置为行内元素
2. **block 将元素设置为块元素**
3. inline-block 将元素设置为行内块元素，行内块元素，既可以设置宽度和高度又不会独占一行
4. table 将元素设置为一个表格
5. none 元素不在页面中显示，不会占用页面位置

---

### 12.visibility 用来设置元素的显示状态

可选值:

1. visible 默认值，元素在页面中正常显示
2. hidden 元素在页面中隐藏 不显示，但是依然占据页面的位置

---

### 13.浏览器默认样式

1. 默认样式会影响页面布局
2. 通常PC端要清楚默认样式

```css
/* 通常做法 */
*{
    margin:0;
    padding:0;
}
ul{
    list-style:none;
}
```

3. 标准开发要引入reset.css，对应的link标签要置于其他link标签之首

---

### 14.图片大小

图片大小一般只设置宽或高：100%

---

### 15.盒子大小

1. box-sizing:conten-box;：width和height设置内容区大小
2. box-sizing:border-box;：width和height设置内容区+边框+内边距大小

### 16.盒子轮廓、阴影和圆角

1. box-shadow 用来设置元素的阴影效果，阴影不会影响页面布局

   - 第一个值 水平偏移量 设置阴影的水平位置 正值向右移动 负值相反
   - 第二个值 垂直偏移量 设置阴影的水平位置正值向下移动 负值相反
   - 第三个值 阴影的模糊半径
   - 第四个值 阴影的颜色
   - box-shadow: 0px 0px 50px RGBA(0,0,0,.3);
2. outline 用来设置元素的轮廓线，用法和border一模一样
   轮廓和边框不同的点，就是轮廓不会影响到可见框的大小
3. border-radius:xxxpx;设置圆角半径

### 17.浮动float

1. 通过浮动 可以使一个元素向其父元素的左侧或右侧移动
   使用 float 属性来设置**子元素**的浮动
2. 可选值:
   - none 默认值 ，元素不浮动
   - left 元素向左浮动
   - right 元素向右浮动
3. 注意，元素设置浮动以后，**水平布局的等式**便不需要强制成立
4. 元素设置浮动以后，会完全从文档流中脱离，不再占用文档流的位置，所以元素下边的还在文档流中的元素会自动向上移动
5. 浮动的特点:
   - 浮动元素会完全脱离文档流，不再占据文档流中的位置
   - 设置浮动以后元素会向父元素的左侧或右侧移动，
   - 浮动元素默认不会从父元素中移出
   - 浮动元素向左或向右移动时，不会超过它前边的其他浮动元素
   - 如果浮动元素上边是一个非浮动元素，那么它无法上移
   - 浮动元素不会超过它上边的兄弟浮动元素，最多就是和它一样高
   - 浮动不会盖住文字，实现文字环绕图片
   - 元素设置浮动后，将会从文档流脱离，元素一些特点会失效改变
6. 浮动的作用就是实现水平布局
7. 脱离文档流的元素的特点
   - 块级元素
     - 块元素不再独占一行
     - 块元素高度和宽度默认都被内容撑开
   - 行内元素
     - 行内元素变成块级元素，特点和块元素一样
   - 脱离文档流后，不需要再区分块和行内元素

### 18.高度塌陷与BFC（重点）

1. 父元素默认情况（不设置width和height）下，height由子元素内容撑开
2. 当子元素设置为float后，子元素脱离文档流，父元素高度不再由子元素撑开，导致父元素高度丢失，也就是高度塌陷
3. 处理高度塌陷：
   - 父元素高度写死，不常用
   - 开启BFC
4. BFC(Block Formatting Context)块级格式化环境
   - BFC是一个CSS中的一个隐含的属性，可以为一个元素开启BFC开启BFC，该元素会变成一个**独立的布局区域**，元素开启BFC后的特点:
     - 1.**开启BFC的元素不会被浮动元素所覆盖**
     - 2.**开启BFC的元素子元素和父元素外边距不会重叠（父元素内外属于不同布局区域）**
     - 3.**开启BFC的元素可以包含浮动的子元素**（如div等块级元素）
   - 可以通过一些特殊方式来开启元素的BFC:
     - 1、设置元素的浮动float:XXX;(**不推荐**)
     - 2、设置元素为行内块元素display:inline-block;(**不推荐**)
     - 3、设置元素的overflow为非visible值
       - 常用方式，将overflow设置为hidden

### 19.clear清除浮动影响

```css
. box1{
    width: 200px; height:200px;
    background-color: #bfa; 
    float: left;
}
. box3{
    width: 200px; height:200px;
    background-color: orange; 
}
```

1. 由于box1的浮动，导致box3位置上移，也就是box3收到了box1浮动的影响，位置发生了改变
2. 如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过**clear属性**来清除浮动元素对当前元素所产生的影响
3. clear
   - 作用:清除浮动元素对当前元素所产生的影响
   - 可选值:
     - left 清除左侧浮动元素对当前元素的影响
     - right 清除右侧浮动元素对当前元素的影响
     - both
       清除影响最大影响的一侧
   - 原理：
     - 设置清除浮动之后，浏览器自动为当前元素设置上外边距，以使其不受浮动元素的影响

### 20.更完美开启BFC

1. 方法一：在浮动元素后添加内容为空的非浮动元素
   (这里是.box3)

```html
<style>
.box1{
    border: 10px red solid;
    /* overflow: hidden; */
}
. box2{
    width:100px; height:100px;
    background-color: ■#bfa; 
    float: left;
}
. box3{
	clear: both;
}
</style>

<div class="box1">
    <div class="box2"></div>
    <div class="box3"></div>
</div>
```

缺点：还是不完美，不能用结构上的技术解决视觉上的问题，应该由CSS解决

2. 方法二：通过伪元素::after解决

```html
<style>
.box1{
    border: 10px Ored solid;
    /* overflow: hidden; */
}

. box2{
    width:100px; height:100px;
    background-color: ■#bfa; 
    float: left;
}

/*在元素最后添加伪元素，类似的有::before，在元素最前添加伪元素*/.
.box1::after{  
    content:""; 
    clear: both;
    display:block;/*默认情况下after伪元素为行内元素，不独占一行，要转换为块元素*/
}
</style>
<div class="box1">
	<div class="box2"></div>
</div>
```

完美！！！！！

### **21.解决父子元素上外边距重叠**

在父元素最前添加伪元素::after：

```css
/*父元素.box*/.
.box::before{
    content:"";
    display:table;/*用table最完美*/
}
```

### 22.同时解决边距重叠和高度塌陷

```css
.clearfix::before,
.clearfix::after{
    content:"";
    display:table;
    clear:both;
}
```

### 23.position布局手段

1. 可选值：

   - static 默认值，不开启定位
   - relative 相对定位
   - absolute 绝对定位
   - fixed 固定定位
   - sticky 粘滞定位
2. 相对定位 relative

   - 没有设置偏移量元素不移动
   - 相对定位定位位置参照物就是它自己
   - 相对定位会提升元素层级，覆盖其他元素
   - 相对定位不会让元素脱离文档流
   - 相对定位不会改变元素的性质，行内还是行内，块还是块
3. 偏移量设置（**只对**开启position的元素有用，和margin不同），有正负值

   - top 定位元素和定位位置上边的距离
   - bottom 定位元素和定位位置下边的距离
   - left 定位元素和定位位置左边的距离
   - right 定位元素和定位位置右边的距离
4. 绝对定位 absolute

   - 偏移量不设置**位置**不变
   - 元素从文档流脱离
   - 元素的性质改变，行内变成块，块的宽高被内容撑开
   - 提升层级
   - **相对于它的包含块定位**
   - 包含块：离当前元素最近的**开启了定位的祖先块元素**
   - 如果全部祖先块元素没有开启定位，就相对html定位
   - 水平布局：在原本等式上加上left和right==包含块宽度，如果发生过度约束（9个值加起来不满足等式），如果都没有auto，那么自动调整right如果有则调整auto值，可设置auto：margin、width、left、right，**可通过设置margin:0 auto;left:0;right:0;实现此元素在包含块水平居中**
   - 垂直布局：top+margin-top+border-top+padding-top+height+padding-bottom+border-bottom+margin-bottom+bottom=包含块高度 (必须满足)，**可通过设置margin:auto 0;top:0;bottom:0;实现此元素在包含块垂直居中**
   - **可设置margin:auto auto;top:0;bottom:0;left:0;right:0;实现元素在包含块水平垂直居中**
5. 固定定位 fixed

   - 大部分特点和绝对定位一样，唯一不同就是固定定位相对于浏览器视口进行定位；
   - 视口特点：大小固定不变，html可以变化；
   - 固定定位的元素不会随鼠标滚动，可以把一些元素固定在视口，如广告。
6. 粘滞定位 sticky

   - 粘滞定位和relative相似，不同的是粘滞定位，元素随鼠标滚动到达一定位置就固定不动，相对body定位。

### 24.元素层级

1. 开启了**定位**的元素，可以通过**z-index属性**指定元素层级
2. z-index**整数**为参数，谁越大优先显示谁
3. 祖先元素的层级再高也不会盖住后代元素

### 25.从服务器找字体

```css
@font-face{
    font-family:;/*设置字体名称*/
  
    src:url();/*字体链接*/
}
```

### 25.图标字体(iconfont)

1. 在网页中经常需要使用一些图标，可以通过图片来引入，
   但是图片大小本身比较大，并且非常的不灵活
   所以在使用图标时，我们还可以将图标直接设置为字，然后通过font-face的形式来对字体进行引入这样我们就可以通过使用字体的形式来使用图标
2. 字体图标可以改颜色和大小不失真
3. font awesome使用步骤（图标库）
   1.下载 https://fontawesome.com/
   2.解压
   3.将css和webfonts移动到项目中（同一目录下）
   4.将all.css引入到网页中 ./css/all.css
   5.直接通过类名使用图标，class="fas/fab  字体类"，字体类在zeal/fontawesome找

### 26.文本

1. 水平对齐text-align

   - left 左对齐
   - right 右对齐
   - center 居中
   - justify 两端对齐
2. 垂直对齐vertical-align

   - baseline 基线对齐，默认值
   - top 顶部对齐
   - bottom 底部对齐
   - middle 居中对齐
3. text-decoration 修饰文本

   - none 啥也没有
   - underline 下划线
   - line-through 删除线
   - overline 上划线
4. white-space 如何处理空白

   - normal 正常
   - nowrap 不换行
   - pre 保留空白
5. 超出文本省略号

```CSS
    .box{
        width:100px;
        white-space:nowrap; 
        overflow:hidden;
        text-overflow: ellipsis;/*省略号*/
    }
```

### 27.背景

1. `background-repeat` 背景重复
   - repeat 默认值，背景会沿着x，y方向重复
   - repeat-x
   - repeat-y
   - no-repeat 不重复
2. background-position 背景位置
   - top left bottom center
   - 同时指定两个值，不指定默认center，xxx:center center;
   - 还可以设置偏移量：xxx:10px 10px;(水平方向 垂直方向)
3. background-clip 背景范围
   - border-box 默认值，背景会出现在边框
   - padding-box 背景只出现在内容区和内边距
   - content-box 背景只出现在内容区

### 28.渐变background-image

1. 线性渐变
   - `background-image:linear-gradient(to right 颜色1,颜色2,...);`向右渐变，其他一样
   - `background-image:linear-gradient(70deg 颜色1,颜色2,...);`向70°渐变；
   - 可以写很多颜色
   - 指定分布颜色 `background-image:linear-gradient(70deg 颜色1 xxxpx,颜色2 xxxpx,...);`
2. 径向渐变
   - `radial-gradient();`默认形状根据元素形状计算
   - `radial-gradient(形状/大小 at pos1 pos2 color1,color2);`

### 29.表单

form属性，action 必须要有，表单要提交的服务器地址

```html
    <form action="demo15.html">
  
        <!-- 
            文本框 
            数据要提交的服务器，必须要为元素指定一的name属性
        -->
        <input type="text"name="userName">
        <br>
        <!-- 密码框-->
         <input type="password"name =  "gg">
        <br>
        <!-- 提交按钮 -->
        <input type="submit" value="注册">
        <br>
        <!-- 
            单选按钮 
            像这种选择框，必须要指定一个value属性，
            value属性最终作为用户填写的值传递给服务器,
            checked将按钮设置默认选中
        -->
        <input type="radio" name="gg" name="a"> 
  
        <input type="radio" name="gg" name="b" checked> 
        <br>
        <!-- 复选框 -->
        <input type="checkbox" name="a" value="A">
        <input type="checkbox" name="a" value="B">
        <input type="checkbox" name="a" value="C">

        <!-- 下拉列表 -->

        <select name="hh" >
            <option value="i">一</option>
            <option value="ii">二</option>
            <option value="iii">三</option>
        </select>
        <!-- 重置 -->
        <input type="reset" >
        <!-- 普通按钮 -->//
        <input type="buttom" value="按钮">
        <!-- 另一种写法 -->//
        <!-- 提交 -->//
        <button type="submit">提交</button>
        <button type="reset">重置</button>
        <butto type="button">按钮 </butto>
    </form>
```

### 30.过度

1. transition:all 2s;全部属性过渡2秒
2. transition-property:all/width,height;指定过渡变化属性
3. transition-duration:time;过渡持续时间（s,ms）

```css
.box{
    width:100px;
    height:100px;
}
.box:hover{
    width:300px;
    height:500px;
    transition:all 2s;
}
```

4. 指出要过度的属性，大部分属性支持过渡
5. `transition-timing-funtion`过度的时序函数

   - `ease` 默认值，慢速开始，先加速再减速
   - linear 匀速
   - ease-in 加速
   - ease-out 减速
   - ease-in-out 先加速后减速
   - cubic-bezier(xx,xx,xx,xx)指定时序函数：https://cubic-bezier.com
   - steps(number,end/start)分步执行过渡
   - 指定两个时间，第一个是过渡持续时间，第二个是延迟过渡时间

### 31.动画

```css
.box{
  /* 动画名称 */
  animation-name: Name;
  /* 动画持续时间 */
  animation-duration: time;
  /* 动画延迟时间 */ 
  animation-delay:time;
  /* 与过渡一样 */
  animation-timing-funtion:ease;
  /* 执行次数 */
  animation-iteration-count:次数/infinite(无限);
  /* 
  动画执行方向 
  normal 默认值 from --> to
  reverse to --> from
  alternate from-->to-->from
  alternate-reverse to-->from-->to
  */
  animation-direction:normal/reverse/alternate;
  /* 动画执行状态 */
  animation-play-state:running/paused;
  /* 
  动画填充模式
  none 回到原位置
  forwards 执行完停在结束位置
  backwards 动画延时等待，元素就会处于开始位置
  both 结合上面两者
  */
  animation-fill-mode:
}
@keyframes Name{
  /* 动画开始位置 */
  from{
    属性:xxx;
  }
  xx%{
  
  }
  /* 动画结束位置 */
  to{
    属性:yyy;
  }
}
```

### 32.平移变形

1. 变形不影响页面布局
2. transform: translateX(…px) / translateY(…px) / trandlateZ(…px) 沿着XYZ轴平移
3. 一种居中方式：

   ```css
   /*这种居中方式，只适用于元素的大小确定*/
   .box{
   	background-color: orange;
   	position: absolute;
   	top: 0;
   	left: 0;bottom: 0;right: 0;
   	margin: auto;
   }
   ```

   ```css
   /*这种居中方式，适用于元素的大小变化*/
   .box{
       background-color:#bfa;
       position:absolute;
       left:50%;/* 相对根元素定位 */
       transform:translateX(-50%) translateY(-50%);/* 左移自身宽度50%，垂直方向也一样 */
   }
   ```
4. Z轴平移

   视觉上盒子变大变小

   ```css
   html{
   	/*设置当前网页的视距为800px，人眼距离网页的距离*/
   	perspective: 80Bpx;
   }
   body{
   	border: 1px red solid;
   	background-color:  rgb(241，241，241);
   }
   .box1{
   	width: 20Bpx;height : 280px;
   	background-color:#bfa;margin: 200px auto;
       /*
       z轴平移，调整元素在z轴的位置，正常情况就是调整元素和人眼之间的距离，
       	距离越大，元素离人越近
       z轴平移属于立体效果（近大远小)，默认情况下网页是不支持透视，如果需要看见效果
       	必须要设置网页的视距
       */
   	transition: 2s;
   }
   body:hover .box1{
   transform: translatez(-200px);
   ```

### 33.旋转

```css
body : hover .box1{
    /*
    通过旋转可以使元素沿着×y或z旋转指定的角度
    	rotateX()
    	rotateY()
    	rotateZ()
    */
    transform: rotatez(45deg);/*沿着z轴旋转45度*/
}

```

要设置视距perspective，视觉上远小近大

```css
html{
	perspective: 800px;
}
body{
	border: 1px red solid;
	background-color: rgb(241，241，241);
}
.box1{
	width: 20opx;height: 208px;
	background-color:#bfa;margin: 208px auto;
	transition:2s;
}
body: hover .box1{
    /*通过旋转可以使元素沿着xy或z旋转指定的角度
    rotatex()
    rotateY()rotateZ()
    */
	/*transform: rotatez(.25turn);*/
    transform: rotatex(45deg);
}
```

### 34.缩放

1. transform: scale()/scaleX()/scaleY()/scaleZ()
2. scale() 双方向缩放

### 35.平移变形起点

transform-origin: ..px  ..px;

### 36.less

1. less是css的预处理语言，css的增强版
2. css原生也支持变量的设置，但兼容性不好

   ```css
   /* 定义变量: --变量名: 属性值; */
   html{
   	--color:#bfa;
       --leng:100px;
   }
   /* 引用变量: 属性: var(--变量名); */
   .box{
       color: var(--color);
       width: var(--leng);
   }
   /*计算函数*/
   .box2{
       width:calc(1000px/6);
   }
   ```
3. less支持变量、mixin等
4. 浏览器无法执行less，要转换成css

### 37.less变量

1. 语法：@变量名: 变量值 ;
2. 引用：直接使用：属性:  @变量名;  ， 作为类名：@{变量名}{  style  }，作为图片路径：@{变量名}/.jpg

   ```less
   //style.less
   @w:100px;
   @c:#bfa;
   @cN:box1;
   .box{
       width: @w;
       color: @c;
   }
   @{cN}{
       width: @w;
   }
   ```
3. 变量重名，会优先使用最下面的，一般情况下先定义后使用
4. &表示外层父元素

   ```less
   //less
   .box{
       &:hover{ }
   }
   //css
   .box:hover{ }
   ```
5. extend()扩展，对当前选择器基础上扩展样式（分组选择器）

   ```less
   //less
   .box1{style1}
   .box2:extend(box1){style2}
   //css
   .box1{style1}
   .box2{style1 style2}
   ```

### 38.less混合函数Mixins

```less
//less
.func(@bg-color, @width, @height){
    background-color:1px solid @bg-color;
    width:@width;
    height:@height;
}
//使用混合函数
div{
    func(#bfa, 100px, 200px);
    margin:0 auto;
}
```

### 39.flex弹性布局（重点，常用）

1. flex可以使元素具有弹性，让元素大小跟随页面的大小的改变而改变
2. flex用来替代 float 布局完成页面布局，减少了很多浮动带来的问题
3. **弹性容器**

   - 要使用弹性盒，必须先将一个元素设置为弹性容器
   - **通过display设置弹性容器**

     - display: flex; 设置块级弹性容器
     - display: inline-flex; 设置行内的弹性容器

   ```html
   <!-- ul是弹性容器，li是弹性元素-->
   <!-- css: ul{display: flex;} -->
   <ul>
       <li> gg</li>
   </ul>
   ```
4. **弹性元素**

   - 弹性元素的子元素是弹性元素（弹性项）
   - 弹性元素可以同时设置为弹性容器
5. **flex-direction: xxx;** 设置弹性元素的排列方式**（给弹性容器设置）**

   - row 默认值，水平排列（主轴：左向右，辅轴：上向下）
   - row-reverse  反向水平排列（主轴辅轴相反）
   - column 自上向下（主轴：上向下，辅轴：左向右）
   - column-reverse 相反
6. **flex-grow: 数值;**  指定弹性元素的伸展系数**（给弹性元素设置）**

   - 当父元素有多余空间时，子元素如何伸展，伸展比例
   - 父元素的剩余空间会按照比例进行分配
7. **flex-shrink: 数值;** 指定弹性元素的收缩系数**（给弹性元素设置）**

   - 当父元素没有足够空间时，如何对子元素进行收缩，收缩比例
8. **flex-wrap** 设置弹性元素是否在弹性容器中自动换行**（给弹性容器设置）**

   - nowrap 默认，不自动换行
   - wrap 沿着辅轴自动换行
   - wrap-reverse 沿着主轴反方向换行
9. **flex-flow : flex-direction  flex-wrap;** flex-direction 和flex-wrap的简写属性
10. **justify-content**  如何分配主轴上的空白空闲（主轴元素如何排列）**（给弹性容器设置）**

    - flex-start 元素沿着主轴起边排列
    - flex-end  元素沿着主轴终边排列
    - center 元素居中排列
    - space-around  空白分布到元素两侧
    - space-evenly 空白分布到元素单侧
    - space-between 分布到元素间
11. **align-items** 元素在辅轴上如何排列**（给弹性容器设置）**

    - 元素间的关系
      - stretch 默认值，将元素设置为相同的值
      - flex-start 元素不会拉伸，沿着辅轴起边对齐
      - flex-end 元素不会拉伸，沿着辅轴终边对齐
      - center 元素居中对齐
      - base-line 基线对齐
12. **align-content** 辅轴空白空间的分布，和justify-content属性值一样**（给弹性容器设置）**
13. **align-self** 用来覆盖弹性元素上的align-items，单独设置**（给弹性元素设置）**
14. **flex-basis: xxxpx;**  设置元素在主轴上的基础长度，可以是宽度或高度，auto 参考自身宽度或高度**（给弹性元素设置）**
15. **flex可以设置三个伸缩系数（给弹性元素设置）**

    - flex:  增长  缩减   基础;
    - 顺序不能错
    - flex:  flex-grow  flex-shrink  flex-basis;
    - flex:  initial;  ==  flex :  0  1  auto;
    - flex:  auto ;   ==  flex:  1  1  auto;
    - flex:  none;  ==  0  0  auto;  弹性元素没有弹性
16. **order: 数值;**  决定元素排列顺序，数值越大越靠前

### 40.补充line-height

**line-height: 父元素高度;**   将文字在父元素中**垂直居中**

### 41.像素

1. 物理像素：屏幕是由一个个发光的小点组成
2. 分辨率：1000 *  100 像素数量
3. css像素，写网页的是css像素
4. 浏览器要把css像素转换为物理像素
5. 默认情况下，1csspx = 1 物理px
6. 视口：显示网页的窗口
7. 默认下，视口 1920px(css像素，物理像素)  1:1
8. 放大两倍

   - 视口960px（css）
   - 1920px（物理）
   - 此时  1:2
9. 可以改变视口大小，改变css物理像素之比
10. 像素越小屏幕越清晰，手机像素远远小于计算机像素
11. 默认情况下，移动端 将视口宽度设置为980css像素，如果超过980px，移动端浏览器会缩放网页以完整显示网站
12. meta 设置视口大小

    ```html
    <meta name="viewport"content="width:100px"/>
    \<!-- 调整css与物理像素比100:750 \-->
    ```
13. 每款移动设备都有一个最佳像素比
14. 不同设备通用设置

    ```html
    <meta name="viewport"content="device-width，initial-scale=1.0">
    <!-- device-width 设备宽度 设置为完美视口-->
    ```

### 42.vw单位

1. 不同设备完美视口不同
2. 不同设备视口和像素比不同，所以100px在不同设备下意义不一样，移动端开发时，就不能用px来布局
3. vw表示视口的宽度（viewport width），100vw = 一个视口宽度，1vw=%1视口宽度
4. vw适配

   - 网页中最小字体12px，设置小于12px则自动设置为12px

     ```css
     html{
     	font-size: 5.333vw;
         /*
         视口宽度750px  
         （100vw/750 = 0.133333333vw = 1px）* 40 
         = 5.333vw
         */
     }
     /* 设置48vw * 35vw  */
     .box{
         width:1.2rem;
         height:0.875rem;
         /*
         	48 / 40
         	35 / 40
         */
     }
     ```

### 43.媒体查询

1. 响应式布局：网页可以根据不同设备或窗口大小呈现出不同效果
2. 响应布局关键是媒体查询，可以通过媒体查询给不同设备或设备不同状态设置不同样式
3. 使用：

   ```css
   @media 媒体类型1，媒体类型2，...{
   	样式；
   } 
   /* 逗号表示或 */
   ```
4. 媒体类型

   - all  所有设备
   - print  打印设备
   - screen  带屏幕的设备
   - speech  屏幕阅读器
5. 媒体特性

   - width  视口的宽度
   - height  视口的高度

     ```css
     /* 视口宽度为500px才生效 */
     @media (width:500px){
     	body{

     	}
     }
     ```
   - min-width 视口最小宽度
   - max-width 视口最大宽度
6. 样式切换的分界点，称为断点

   - 常用断点：

     < 768px  超小屏幕  max-width = 768px

     \> 768px  大屏幕  min-width = 768px

     \> 992px  中型屏幕  min-width = 992px

     \> 1200px 大屏幕   min-width = 1200px

     ```css
     /* 视口宽度大于500px小于8才生效 */
     @media (min-width:500px)and(max-width:800px){
         body{}
     }
     ```
