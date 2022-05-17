---
title: Html
date: 2022-1-2
author: Aavin
categories: 
 - 前端笔记
tags: 
 - Html
---
### 1. \<meta>标签

元数据：给浏览器看

### 2. 相对路径

`./` 当前目录，`../ `当前目录上一级

### 3. 超链接

`<a href="ddgGd.com"target="_self"></a>` 当前页面打开

`<a href="ddgd.com"target="_blank"></a> `新页面打开

`<a href="#目标元素idName"></a>` 跳到指定id的 Element 所在位置，`href=" # + 目标元素idName"`， `<目标元素 id="idNam   e"></目标元素>`

### 4.块级元素和行内元素

- HTML 块级元素（block element）
  块级元素总是在新的行上开始，并尽可能地占据本行全部可用的宽度，独占一行，
  以下为常见的块级元素：

  ```html
  <address>, <article>, <aside>, <blockquote>,<canvas>, <dd>, <div>, <dl>, <dt>, <fieldset>,
  <figcaption>, <figure>, <footer>, <form>, <h1>~<h6>,
  <header>, <hr>, <li>, <main>, <nav>, <noscript>, <ol>, <output>,<p>, <pre>, <section>, <table>, <tfoot>, <ul>, <video>
  ```
- HTML 行内元素（inline element）
  相反，行内元素不会另起一行，它也只占用必要的宽度，根据内容大小调整，
  以下为常见的行级元素：

  ```html
  <a> <abbr> <acronym> <b> <bdo> <big> <br> ,
  <button> <cite> <code> <dfn> <em> <i> <img> ,
  <input> <kbd> <label> <map> <object> <q> ,
  <samp> <script> <select> <small> <span> <strong>,
   <sub> <sup> <textarea> <time> <tt> <var>
  ```
