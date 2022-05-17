---
title: ES6
date: 2022-3-13
author: Aavin
categories: 
 - 前端笔记
tags: 
 - ES6
 - JavaScript
---
### 1.ES

ES全称 **EcmaScript**，是脚本语言的规范，而平时经常编写的**JavaScript**，是EcmaScript的**一种实现**，所以ES新特性其实指的就是**JavaScript 的新特性**。

为什么要学习新特性?

- 语法简洁，功能丰富
- 框架开发应用，Vue、React
- 前端开发职位要求

什么是ECMAScript?

ECMAScript是由Ecma国际通过ECMA-262标准化的脚本程序设计语言。

### 2.let

let 用来声明变量，和 var 一样，**let 的特性：**

```js
//声明变量
let a,b,c;
let d = 100;

//1.变量不能重复声明
let star ="罗志祥";
let star ='小猪'; //报错


//2.块级作用域  ES5里面作用域分为：全局,函数,eval
//{}里面的代码为一个块
{
    let girl ='周扬青';
}
console.log(girl);//报错

//var没有块级作用域
{
    var girl ='周扬青';
}
console.log(girl);//周扬青

//if else while for 里面的代码也是块
for(let i=0;i<10;i++){}
console.log(i);//报错

//而
for(var i=0;i<10;i++){}
console.log(i);//10

//3.不存在变量提升
console.log(str); //报错
let str = '';

//4.不影响作用域链
{
    let school ='尚硅谷';
    function fn(){
        console.log(school);
    }
    fn();//尚硅谷
}
```

练习：点击修改背景颜色

```js
//获取div元素对象
let items = document.getElementsByclassName( 'item');
//遍历并绑定事件
for(var i = 0;i<items.length;i++){
    items[i].onclick = function(){
        //修改当前元素的背景颜色
        //this.stylebackground ='pink'; //正确写法
        items[i].style.background = 'pink'; //能不能这样？
    }
}

/*
用var声明i会报错，因为var没有块级作用域，i是全局变量，
循环执行完i==items.length，当点击函数点击响应函数里面
的i要到函数作用域外找，找到的i==items.length，故报错
*/

//这样改
for(let i = 0;i<items.length;i++){
    items[i].onclick = function(){
        items[i].style.background = 'pink'; 
    }
}

//执行过程
{
    let i=0;
    items[i].onclick = function(){
        items[i].style.background = 'pink'; 
    }   
    //点击时向外找i，i在此块作用域有效
}

{
    let i=1;
    items[i].onclick = function(){
        items[i].style.background = 'pink'; 
    }   
    //点击时向外找i，i在此块作用域有效
}

{
    let i=2;
    items[i].onclick = function(){
        items[i].style.background = 'pink'; 
    }   
    //点击时向外找i，i在此块作用域有效
}

//...
```

> 引用《ECMAScript入门》-- 阮一峰

使用let，声明的变量仅在块级作用域内有效，当前的 i 只在本轮循环有效，所以**每次都是一个新的变量**。

可能你会问，如果每一轮循环的变量 i 都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值。

这是因为JavaScript引擎内部会记住上一轮循环的值，初始化本轮的变量 i 时，就在上一轮循环的基础上进行计算。

**题外话**：for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部则是一个单独的子作用域。

### 3.const

const 用于声明常量，**const 特性：**

```js
//声明常量
const SCHOOL ="尚硅谷';

//1.一定要赋初始值
const A;//error

//2.一般常量使用大写(潜规则)
const A = 100;

//3.常量的值不能修改
SCHOOL = 'ATGUIGU';//error

//4.块级作用域
{
	const PLAYER = 'UZI';
}
console.log(PALYER); //error

//5.对于数组和对象的元素或属性修改，不算做对常量的修改，不会报错，因为常量保存的地址没有发生变化。
const TEAM=["UZI", "MXLG" , "Ming" , "Letme"];
TEAM.push('Meiko'); 

//引用变量保存地址值
TEAM = 100;//error
TEAM = {};//error
```

### 4.顶层对象的属性

顶层对象，在浏览器环境指的是 `window` 对象，在 Node 指的是 `global` 对象。**ES5 之中，顶层对象的属性与全局变量是等价的。**

```js
window.a = 1;
a // 1

a = 2;
window.a // 2
```

上面代码中，顶层对象的属性赋值与全局变量的赋值，是同一件事。

顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，`window`对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。

ES6 为了改变这一点，一方面规定，为了保持兼容性，**`var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。**也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。

```js
var a = 1;

// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```

上面代码中，全局变量`a`由`var`命令声明，所以它是顶层对象的属性；全局变量`b`由`let`命令声明，所以它不是顶层对象的属性，返回`undefined`。

### 5.globalThis 对象

JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。

- 浏览器里面，顶层对象是`window`，但 Node 和 Web Worker 没有`window`。
- 浏览器和 Web Worker 里面， **`self`也指向顶层对象** ，但是 Node 没有`self`。
- Node 里面，顶层对象是`global`，但其他环境都不支持。

同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用`this`关键字，但是有局限性。

- **全局环境中，`this`会返回顶层对象。但是，Node.js 模块中`this`返回的是当前模块，ES6 模块中`this`返回的是`undefined`。**
- 函数里面的`this`，如果函数不是作为对象的方法运行，而是单纯作为函数运行，`this`会指向顶层对象。但是，严格模式下，这时`this`会返回`undefined`。
- 不管是严格模式，还是普通模式，`new Function('return this')()`，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么`eval`、`new Function`这些方法都可能无法使用。

综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。

```javascript
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```

[ES2020](https://github.com/tc39/proposal-global) 在语言标准的层面，引入`globalThis`作为顶层对象。也就是说，**任何环境下，`globalThis`都是存在的，都可以从它拿到顶层对象，指向全局环境下的`this`。**

垫片库[`global-this`](https://github.com/ungap/global-this)模拟了这个提案，可以在所有环境拿到`globalThis`。

### 6.变量的解构赋值

ES6允许按照一定模式从数组和对象中提取值，对**变量**进行赋值，这被称为**解构赋值**。

```js
//1．数组的解构(很少用)
const F4=["小沈阳","刘能","赵四","宋小宝"];
let [xiao,liu,zhao,song] = F4; //相当于声明四个变量并赋值
console.lpg(xiao);
console.log(liu);
console.log(zhao);
console.log(song);

//2．对象的解构
const zhao = {
    name:"赵本山",
    age:'不详'，
    xiaopin: function(){
        console.log("我可以演小品");

    }
};
let {name,age,xiaopin} = zhao;//声明三个变量并赋值
console.log(name);
console.log(age);
console.log(xiaopin);
xiaopin();
```

**对象的解构与数组有一个重要的不同**。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，**变量必须与属性同名**，才能取到正确的值。

### 7.模板字符串

ES6 引入**新**的声明字符串的方式：\`string`

```js
//1.声明
let str = `i am string`

//2.内容中可以直接出现换行符,而''和""不可以
let str2 = '<ul>
				<li></li>';//ereor
let str3 = `<ul>
				<li></li>`;//yes

//3.变量拼接 ${value}
let str4 = `${str3}模板字符串`;
```

### 6.对象简写

ES6允许在大括号里面，直接写入**变量和函数**，作为对象的属性和方法，这样的书写更加简洁。

```js
let name = 'nnn';
let func = function(){
    console.log(this.name)
}

//对象
const obj = {
    name,
    age:18,
    func,
    ff:function(){
  
    }
}
```

### 8.箭头函数

ES6允许使用「箭头」( => ) 定义函数。

```js
//声明函数
let f = function(){
  
}

//箭头函数
let f2 = (a,b) => {
  
}

//调用函数
f2(9,0);

//箭头函数特性

//1.this是静态的． this始终指向函数声明时所在作用域下的 this 的值，也不能用call aplly改变。
function getName(){
    console.log(this.name);
}
let getName2 = () =>{
    console.log(this.name);
}
//设置 window对象的 name属性
window.name ="尚硅谷";
const school = {
    name: "ATGUIGU"
}
//直接调用
getName();//尚硅谷
getName2();
//call方法调用
getName.call(school);//ATGUIGU
getName2.call(school);//尚硅谷


//2.不能作为构造实例化对象
let Person = (name,age) =>{
    this.name = name;
    this.age = age;
}
let me = new Person( "xiao" ,30);//error
console.log(me);

//3.不能使用arguments 变量
let fn = ()=>{
	console.log(arguments);
}
fn(1,2,3);//error

//4.箭头函数的简写
//1）省略小括号，当形参有且只有一个的时候
let add = n =>{
	return n + n;
}
console.log(add(90));//180

//2)省略花括号，当代码体只有一条语句的时候,此时 return必须省,而且语句的执行结果就是函数的返回值
let pow = n => n*n;
console.log(pow(9));//81 
```

- 箭头函数应用

  ```js
  //1.点击div 2s后颜色变成『粉色』
  let ad = document.getElementById("ad");
  ad.addEventListener("click",function(){
      console.log(this);//ad
      setTimeout(function(){
          //此时setTimeout作为函数，由window调用，this指向window
          this.style.backgroundColor = "pink"; 
      },2000);
  });

  //修改
  let ad = document.getElementById("ad");
  ad.addEventListener("click",function(){
      console.log(this);//ad,此作用域下的this为ad
      setTimeout(() => {
          //此作用域下定义该匿名箭头函数，此时this为ad
          this.style.backgroundColor = "pink"; 
      },2000);
  });
  ```

  ```js
  //2.从数组中返回偶数的元素
  const arr = [1, 6, 9, 10, 100, 25];
  const result = arr.filter(function (item) {
      if (item % 2 === 0) {
          return true;
      } else {
          return false;
      }
  });
  console.log(result);


  //用箭头函数
  const result2 = arr.filter( item => item%2 === 0 ); //牛逼
  ```
- **箭头函数不适用场景**

  箭头函数**适合**与 `this` 无关的回调，比如定时器、数组的方法回调。

  箭头函数**不适合**与 `this` 有关的回调，比如事件回调、对象的方法。

  第一个场合是定义对象的方法，且该方法内部包括`this`。

  ```js
  const cat = {
    lives: 9,
    jumps: () => {
      this.lives--;
    }
  }
  ```

  `cat.jumps()`方法是一个箭头函数，这是错误的。调用`cat.jumps()`时，如果是普通函数，该方法内部的`this`指向`cat`；如果写成上面那样的箭头函数，使得`this`指向全局对象，因此不会得到预期结果。这是因为**对象不构成单独的作用域**，导致`jumps`箭头函数定义时的作用域就是全局作用域。

  第二个场合是需要动态`this`的时候，也不应使用箭头函数。

  ```js
  var button = document.getElementById('press');
  button.addEventListener('click', () => {
    this.classList.toggle('on');
  });
  ```

### **9.回调函数中的this**

- 对于定时器函数

  普通函数： 100ms后执行时，this指向window对象。

  ```js
  function foo() {
  	setTimeout(function() {
  			console.log(this);
  			console.log("id: ",this.id);
  		}, 100);
  }
  var id=21;

  foo();    //this指向window对象， 21   
  foo.call({id:42});//this指向window对象，21 
  ```

  箭头函数：

  ```js
  function foo() {
  	setTimeout(() =>{
  		 console.log(this);
  		 console.log("id: ",this.id);
  	}, 100);
  }
  var id=21;
  foo();           //this指向window
  foo.call({id:42});    //this指向{id：42}对象
  ```

  **箭头函数：this是在定义时生效的，this总是指向函数定义生效时所在的对象。**
- 对于事件处理函数

  普通函数

  ```js
  var handler = {
      id: '123456',
      init: function () {
          document.addEventListener('click', function (e) {
              this.doSomething(e.type);//this指向window对象，所以会出错
          }, false);
      },
      doSomething: function (type) {
          console.log("handler" + type + "for" + this.id);
      }
  };

  handler.init();
  ```

  箭头函数

  ```js
  var handler={
      id:'123456',
      init:function () {
          document.addEventListener('click', (e)=> {
              this.doSomething(e.type); //this指向handler
          },false);
      },
      doSomething:function (type) {
          console.log("handler"+type+"for"+this.id);
      }
  };

  handler.init();
  ```
- 对于自定义函数

  ```js
  var o = {
      name:"o",
      log:function(callback){   //当作c1函数

          //此函数作用域下，this -> o

          callback();
      }
  };

  var name = "w"

  o.log(function(){			 //当作c2函数
      console.log(this.name);
  });  //w
  ```

  c1作用域的`this -> o`，c2要在c1作用域下执行，而c2运行时浏览器也会传递一个this，此时`this 默认-> window`。
- 小结

  **对于回调函数中的this对象。对于普通函数，this指向调用时所在的对象（即window对象），事件处理函数中的回调函数的this则指向调用该事件处理函数的对象。对于箭头函数，this指向定义生效时所在的对象。**
- **继续探究**

首先先说下正常的 this 指向问题

什么是 this：自动引用正在调用当前方法的 . 前的对象。

**this指向的三种情况**

1. `obj.fun()`   fun 中的 `this->obj` ，自动指向.前的对象
2. `new Fun()`   Fun 中的 `this->正在创建的新对象`，new 改变了函数内部的 this 指向，导致 this 指向实例化 new 的对象
3. `fun() 和匿名函数自调`   `this默认->window`，函数内部的 this，this 默认是指向 window 的。

再说回调函数中的 this 指向问题，我们先来看一个例子

```js
var Bob={
    sname:"鲍勃",
    friends:["Jack","Rose","Tom","Jerry"],
    intr(){
        this.friends.forEach(function(ele){
            console.log(this.sname+"认识"+ele);
     	});
 	}
}
Bob.intr();

/*
undefined认识Jack
undefined认识Rose 
undefined认识Tom 
undefined认识Jerry
*/
```

**回调函数中的this默认是指向window的，因为本质上是在另一个函数内callback( )，相当于函数嵌套调用，并没有 . 前的对象调用。但对于事件处理函数，this指向调用该函数的对象。**

```js
//一般回调函数运行本质
//情况1
function f(callback){
  
    //this -> window
  
    callback();
}
f(function(){
    //这里浏览器也会传一个this，this -> window
});

//情况2
var obj = {
    f: function (callback) {

        //this -> obj

        callback();
    }
}
obj.f(function () {
    //这里浏览器也会传一个this，this -> window
});
```

如何解决？

使用箭头函数

```javascript
var Bob={
    sname:"鲍勃",
    friends:["Jack","Rose","Tom","Jerry"],
    intr(){
      this.friends.forEach(ele=>{
          console.log(this.sname+"认识"+ele);
      });
    }
}
Bob.intr();
/*
鲍勃认识Jack 
鲍勃认识Rose
鲍勃认识Tom 
鲍勃认识Jerry
*/
```

**可以看出箭头函数内的this自动指向了回调函数外层的 this 。**

箭头函数中的 this:

　　**函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。**

　　this 指向的固定化，并不是因为箭头函数内部有绑定 this 的机制，实际原因是**箭头函数根本没有自己的 this，导致内部的 this 就是外层代码块的 this**。正是因为它没有 this，所以也就不能用作构造函数。

也可使用bind永久绑定this：

```javascript
 var Bob={
    sname:"鲍勃",
    friends:["Jack","Rose","Tom","Jerry"],
    intr(){
      this.friends.forEach(function(friend){
           console.log(this.sname+"认识"+friend);
      }.bind(this));
    }
}
Bob.intr();  
```

- **总结（重要重要重要）**

  回调函数中的`this`对象，

  **1.对于普通回调函数，函数体内的 `this` 默认是指向`window`的。因为本质上是在另一个函数或方法内执行 `callback()`，浏览器会给`callback`所在的函数传递`this`，也会给`callback`传递`this`(默认 -> window)，相当于函数嵌套调用，并没有 . 前的对象调用，`callback`里面的`this`默认指向`window`。但对于事件处理函数，`this`指向调用该函数的对象，可能原理是这样 `callback.bind(this)()`，这里的`this`指向外层函数的 this 。**

  **2.对于箭头回调函数，函数体内的 `this` 对象，就是定义生效时所在的作用域的`this`对象，而不是使用时所在的对象。原因是箭头函数根本没有自己的 `this`，浏览器不给它传`this`，箭头函数里使用 `this` 要到沿着作用域往上找，导致内部的 this 就是外层代码块的 `this` 。**
- **彻底理解箭头函数中的`this`对象**

  箭头函数根本没有自己的 `this`，浏览器不给它传`this`，而给普通函数传`this`，箭头函数里使用 `this` 要沿着作用域往上找，导致内部的 this 就是外层代码块的 `this` 。

```js
var name = "window"

var obj = {
    name:"obj"
}

function f(){
    obj.f2 = ()=>{
        console.log(this.name); //this -> window
        obj.f3 = ()=>{
            console.log(this.name); //this -> window
        }
        obj.f3()
    }
    obj.f2()
  
    obj.f4 = function(){
        console.log(this.name); ////this -> obj
    }
    obj.f4();
}
f()
obj.f2()
obj.f3()

//输出五个window和一个obj
```

**记住：箭头函数里的 `this` 要沿着作用域链往上找。普通函数才有this！**

### 10.函数参数默认值

ES6允许给函数参数赋值初始值。

```js
//1.形参初始值 具有默认值的参数,一般位置要靠后(潜规则)
function add(a,b,c=10){
    return a + b + c;
}
let result = add(1,2);
console.log(result);//13

//2．与解构赋值结合
function connect({host="127.0.0.1", username,password, port}){
	console.log(host)
	console.log(username)
	console.log(password)
	console.log(port)
}
connect({
    host: 'localhost',
    username: "root",
    password: "root",
    port:3306
});

```

### 11.rest 参数

ES6 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```js
//求和函数
function add(...values) {  //values就是rest参数
  let sum = 0;
  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10  
```

下面是一个 rest 参数代替`arguments`变量的例子。

```js
// arguments变量的写法
function sortNumbers() {
  return Array.from(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
```

`arguments`对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用`Array.from`先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。下面是一个利用 rest 参数改写数组`push`方法的例子。

```js
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3); 
```

**注意**，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

```js
// 报错
function f(a, ...b, c) {
  // ...
}
```

函数的`length`属性，不包括 rest 参数。

```js
(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1
```

### 12.扩展运算符

**…** 扩展运算符能将**数组**转换为逗号分隔的**参数序列**，用在函数调用，而 rest 参数用于函数定义。

```js
const tfboys =['易样千玺',"王源",'王俊凯'];

function chunwan(){
    console.log(arguments.length);
}

chunwan(tfboys);//1
chunwan(...tfboys);//3
```

扩展运算符用处

```js
//1.数组合并
const arr1 = [1,6];
const arr2 = [7,9];

const arr3 = [...arr1,...arr2]; //[1,6,7,9]

//2.数组的克隆
const arr4 = [...arr3]; //[1,6,7,9]

//如果arr3元素有引用类型，那么这是浅拷贝

//3.将伪数组转为真正的数组,也可以转arguments
const divs = document.querySelectorAll('div');
const divArr = [...divs];
console.log(divArr);//[div,div,...]

```

### 14.Symbol

ES6引入了一种新的原始数据类型Symbol，表示**独一无二**的值。它是JavaScript语言的第七种数据类型，是一种类似于字符串的数据类型。

Symbol特点:

1) Symbol 的值是唯一的，**用来解决命名冲突的问题**
2) Symbol值**不能**与其他数据进行运算
3) Symbol定义的对象属性**不能**使用 for...in 循环遍历，但是可以使用
   Reflect.ownKeys来获取对象的所有键名

**Symbol 值通过`Symbol()`函数生成。**

```js
//创建Symbol
let s = Symbol();
console.log(s, typeof s); //Symbol "symbol" 

//Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
let s2 = Symbol("尚硅谷");
let s3 = Symbol('尚硅谷');
s2 === s3 //false

// Symbol.for创建
let s4 = Symbol.for('尚硅谷');
let s5 = Symbol.for('尚硅谷');
s4 === s5 //true

//不能与其他数据进行运算
let s6 = s > 100;//error
```

js数据类型：undefined、string、symbol、object、null、number、boolean.

对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。**这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖**

```js
//向对象中添加方法,独一无二的 up down

let game ={...}
game.up = function(){} //这样安全，game对象不确定是否有up属性

//声明一个对象
let methods = {
    up: Symbol(),
    down: Symbol()
};
//给game添加方法
game[methods.up] = function(){
    console.log("我可以改变形状");
}
game[methods.down] = function(){
    console.log("我可以快速下降!!");
}
console.log(game);

//声明一个对象
let s1 = Symbol('say'), s2 = Symbol('zibao');

let youxi = {
    name:"狼人杀",
    [s1]: function(){
        console.log("我可以发言")
    },
    [s2]:function(){
        console.log('我可以自爆');
    }
}

//使用
youxi[s1]();
youxi[s2]();
```

### 15.迭代器

迭代器(Iterator)是一种**接口**，为各种不同的数据结构提供统一的**访问机制**。任何数据结构只要部署Iterator接口(js对象里面的一个属性：Symbol.iterator)，就可以完成**遍历**操作。

(1)ES6创造了一种新的遍历命令 **for...of 循环**，lterator接口主要供for...of 消费

```js
//声明一个数组
const xiyou =['唐僧","孙悟空','猪八戒",沙僧"];
//使用for...of 遍历数组
for(let v of xiyou){   //v保存元素值
    console.log(v); //'唐僧","孙悟空','猪八戒",沙僧"
}

//使用for...in 遍历数组
for(let v in xiyou){   //v保存元素索引
    console.log(v); //0 1 2 3
}

console.log(xiyou[Symbol.iterator]) //ƒ values() { [native code] }
```

**(2)原生具备iterator接口的数据(可用for of遍历)**

**Array、Arguments、Set、Map、String、TypedArray、NodeList**

**(3)工作原理**

(a) 创建一个指针对象，指向当前数据结构的起始位置；

```js
//声明一个数组
const xiyou =["唐僧","孙悟空",'猪八戒','沙僧'];

//创建指针对象
let iterator = xiyou[Symbol.iterator]();
```

(b) 第一次调用该对象的next方法，指针自动指向数据结构的第一个成员；

(c) 接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员；

**(d) 每调用next方法返回一个包含value和 done属性的对象。**done表示遍历是否完成。

```js
//调用对象的next方法
console.log(iterator.next()); //{value:"唐僧",done:false}
console.log(iterator.next()); //{value:"孙悟空",done:false}
console.log(iterator.next()); //...
console.log(iterator.next()); //...
console.log(iterator.next()); //{value:undefined,done:true}
```

**注：需要自定义遍历数据的时候，要想到迭代器。**

> **自定义遍历数据(迭代器应用)**

```js
//声明一个对象
const banji ={
    name:"终极一班",
    stus:[
        'xiaoming',
        'xiaoning',
        'xiaotian',
        'knight'
    ]
}

//用for ... of遍历：需求：每次返回对象里数组的成员
for(let v of banji){
    console.log(v); 
} //error , 没有部署迭代器

//用forEach() 不符合面向对象思想
banji.stus.forEach((el, index, arr)=>{
    //el 当前遍历的元素
    //index 当前遍历元素的下标
    //arr 当前遍历的数组
});
```

部署迭代器

```js
const banji = {
    name: "终极一班",
    stus: [
        'xiaoming',
        'xiaoning',
        'xiaotian',
        'knight'
    ],
    [Symbol.iterator]() {   //加入该方法，用来创建指针对象
        //索引变量
        let index = 0;

        return {
            next: () => {
                if (index < this.stus.length) { //this -> banji
                    return { value: this.stus[index++], done: false } //this -> banji , 对象方法里的this才指向该对象
                } else return { value: undefined, done: true }
            }
        }
    }
}

//用for ... of遍历：需求：每次返回对象里数组的成员
for (let v of banji) {
    console.log(v);
} //error , 没有部署迭代器
```

### 16.生成器

生成器**(gnerator)**其实就是一个特殊的函数，生成器函数是ES6提供的一种**异步编程解决方案**，语法行为与传统函数**完全不同**。异步编程以前的解决方案：纯回调函数   node   fs   ajax  mongadb  ，回调函数一层套一层形成**回调地狱**。

- 生成器函数声明和调用

````js
//生成器函数

//声明
function * gen(){
    console.log("hello gnerator");
}
let iterator = gen(); //生成迭代器对象

//调用,通过调用next方法来执行函数体
iterator.next()

//生成器内部可以出现yield语句：生成器函数代码分隔符，语法: yield  字面量/表达式;
function * gen(){
  
    //第一段代码
    console.log("1");
    yield "a";
  
  
    //第二段代码
    console.log("2");
    yield "b";
  
  
    //第三段代码
    console.log("3");
    yield "c";
  
  
    //第四段代码
    console.log("4"); 
}

let i = gen();

//调用一次代码执行一段代码

//运行第一段
//i.next();//1

//运行第二段
//i.next();//2

//运行第三段
//i.next();//3

//...

console.log(i.next());//{value:"a",done:false}
console.log(i.next());//{value:"b",done:false}
console.log(i.next());//{value:"c",done:false}
console.log(i.next());//{value:undefined,done:true}

//遍历
for(let v of gen()){  //每次返回yield后面的字面量或表达式结果
    console.log(v);//a b c
}
````

- 生成器函数的参数传递

```js
function* gen(arg){
  
    console.log(arg);
  
    let one = yield 111;
    console.log(one)
  
    let two = yield 222;
    console.log(two)
  
    let three = yield 333;
    console.log(three)
}
//执行获取迭代器对象
let iterator = gen('AAA');

//yield后面字面量或表达式结果会作为next返回值对象中value的值
console.log(iterator.next());// AAA  {value:111,done:false}

//next方法可以传入实参,第二个next方法的参数将作为第一个yield语句整体的返回值，下面同理
console.log(iterator.next('BBB'));// BBB {value:222,done:false}

//第三个next的参数作为第二个yield语句返回值
console.log(iterator.next('CCC'));// CCC {value:333,done:false}

console.log(iterator.next('DDD'));// DDD {value:222,done:false}
```

- 生成器函数实例

1.异步编程：文件操作、网络操作(ajax, request)、数据库操作…

```js
//需求：1s后控制台输出111  2s后输出222  3s后输出333
//传统回调函数嵌套
//回调地狱：一层套一层，代码缩进不断往前推进(横向伸展)
setTimeout(() =>{
    console.log(111);
    setTimeout(() =>{
        console.log(222);
        setTimeout(() =>{
            console.log(333);
        },3000);
    },2000);
},1000);

//如果后续还有其他需求要嵌套，那么会嵌套很多层：回调地狱

//用生成器函数
function one() {
    setTimeout(() => {
        console.log(111);
        //执行下一段代码
        iterator.next();
    }, 1000)
}
function two() {
    setTimeout(() => {
        console.log(222);
        iterator.next();
    }, 2000)
}
function three() {
    setTimeout(() => {
        console.log(333); 
        iterator.next();
    }, 3000)
}
function* gen() {
    yield one(); 
    yield two(); 
    yield three();
}
//调用生成器函数
let iterator = gen();
iterator.next();
```

2.模拟获取：用户数据、订单数据、商品数据（有顺序要求）

```js
function getUsers() {
    setTimeout(() => {
        let data = "用户数据";
        //调用next方法,运行第二段代码,并且将数据传入,data作为第一个yield语句的返回值,下面同理
        iterator.next(data);
    }, 1000);
}
function getOrders() {
    setTimeout(() => {
        let data = '订单数据';
        iterator.next(data);
    }, 1000)
}
function getGoods() {
    setTimeout(() => {
        let data = '商品数据';
        iterator.next(data);
    }, 1000)
}
function * gen() {

    let users = yield getUsers();
    console.log(users)
    let orders = yield getOrders();
    console.log(orders)
    let goods = yield getGoods();
    console.log(goods)
}

let iterator = gen();

//运行第一段代码
iterator.next();


/*输出：
用户数据
订单数据
商品数据
*/
```

### **17.Promise**

`Promise` 是ES6引入的**异步编程的新解决方案**。语法上 `Promise` 是一个**构造函数**，用来**封装异步操作**并可以获取其**成功或失败**的结果。

1) `Promise` 构造函数: `Promise (excutor){}`
2) `Promise.prototype.then`方法
3) `Promise.prototype.catch`方法

- Promise 基本使用

```js
//实例化 Promise对象
const p = new Promise((resolve, reject)=>{
    // resolve  解决  函数类型的数据  将promise对象的状态设置为『成功』
    // reject   拒绝  函数类型的数据  将 promise对象的状态设置为『失败』

    setTimeout(()=> {
        let data ='数据库中的用户数据';
        //resolve
        resolve(data);//成功时调用
  
        let err = '数据读取失败';
        //reject(err);  //失败时调用 
    }), 1000);
});

//调用promise对象的 then方法
p.then((value)=> { //成功时调用此回调函数，形参value获取resolve的实参
    console.log(value);
},(reason)=> {//失败时调用此回调函数，形参reason获取reject的实参
    console.error(reason);
});
```

- Promise 封装读取文件

```js
//1．引入 fs模块
const fs = require('fs');

//2．调用方法读取文件
fs.readFile('./resources/为学.md ' , (err, data)=>{
    //如果失败，则抛出错误
    if(err) throw err;
    //如果没有出错，则输出内容
    console.log(data.toString()); 
});

//3．使用 Promise封装
const p = new Promise((resolve, reject)=>{
    fs.readFile(" ./resources/为学.md" , (err,data)=>{
        //判断如果失败
        if(err) reject(err);
  
        //如果成功
        resolve(data);
});
p.then((value)=>{
    console.log(value.toString());
}, (reason)=>{
    console.log("读取失败!!")   
});
```

- Promise封装AJAX请求

```js
//接口地址:https: / /api.apiopen.top/getJoke
//1.创建对象
const p = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
  
    //设置响应体数据的类型，json会自动转换成对象或数组
    //xhr.responseType = 'json';
  
    //2.初始化
    xhr.open("GET", "https:https://api.apiopen.top/getJoke");
    //3.发送
    xhr.send();
    //4．绑定事件,处理响应结果
    xhr.onreadystatechange = function () {
        //判断
        if (xhr.readyState === 4) {
            //判断响应状态码20日-299
            if (xhr.status >= 200 && xhr.status < 300) {
                //表示成功
                //console.log(xhr.response);
                resolve(xhr.response);
            } else {
                //如果失败
                //console.error(xhr.status);
                reject(xhr.status)
            }
        }
    }
});


//此时，数据处理转到此处，不用在原来的回调函数再做其他操作
p.then((value) => {
    console.log(value)
}, (reason) => {
    console.log(reason)
});
```

- `Promise.prototype.then`方法

```js
//创建promise 对象
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('用户数据');
        //reject('出错啦');
    }, 1000)
});
//调用then方法 then 方法的返回结果是 Promise 对象，对象状态(PromiseState)和PromiseResult值 由回调函数的执行结果决定

//1.如果回调函数中返回的结果是非 promise 类型的数据，状态(PromiseState)为成功，返回值为对象的PromiseResult的值

//2.如果回调函数中返回的结果是 promise 类型的数据(记为p2),则p2的状态(PromiseState)和成功或失败值(PromiseResult)决定整体的状态(PromiseState)和成功或失败值(PromiseResult)。

//3.抛出错误,状态PromiseState为拒绝/失败，PromiseResult为抛出的数据
const result = p.then(value => {
    console.log(value);  //用户数据
    //1．非promise类型的属性
    return 'ok'
  
    //2.是 promise对象
    //return new Promise((resolve, reject)=>{
        //resolve( "ok " );
        //reject( 'error ');
	//});

    //3.抛出错误
    //throw new Error('出错啦!");
    //throw '出错啦!';    //PromiseResult:'出错啦!'

},reason => {
    console.warn(reason); //出错啦
});

//输出结果
console.log(result);
/*
Promise   
	[[Prototype]]: Promise  
	[[PromiseState]]: "fulfilled"  //状态
	[[PromiseResult]]: "ok"   //成功值
*/


//链式调用，可以不写失败的情况
p.then(value=>{
    //异步任务1
}).then(value=>{
    //异步任务2
}).then(value=>{
    //异步任务3
});

//链式调用解决回调地狱
```

- Promise 练习

```js
//引入fs模块
const fs = require("fs");

fs.readFile('./res/为学1.md', (err, data1) => {
    fs.readFile('./res/为学2.md', (err, data2) => {
        fs.readFile('./res/为学3.md ', (err, data3) => {
            let result = data1 + '\r\n' + data2 + '\r\n' + data3;
            console.log(result);
        });
    });
});

//使用promise实现
const p = new Promise((resolve, reject) => {
    fs.readFile("./res/为学1.md", (err, data_1) => {
        resolve(data_1);
    });
});

p.then(data_1=>{
    return new Promise((resolve, reject)=>{
        fs.readFile("./res/为学2.md", (err, data_2) => {
            resolve([data_1,data_2]);
        });
    })
}).then(data_12=>{
    return new Promise((resolve, reject)=>{
        fs.readFile("./res/为学3.md", (err, data_3) => {
            resolve([data_12,data_3]);
        });
    })
}).then(data_123=>{
    console.log(data_123.join('\r\n'))
})
```

- `Promise.prototype.catch`方法

```js
const p = new Promise((resolve， reject)=>{
    setTimeout(()=>{
        //设置p对象的状态为失败，并设置失败的值
        reject("出错啦!");
    },1000)
});
// p.then(function(value){}, function(reason){ 
// 		console.error(reason);
// });
p.catch(function(reason){  //catch 是个语法糖
    console.warn(reason);
});
//"出错啦!"
```

### 18.Set - 集合

ES6提供了新的数据结构 Set(集合）。它类似于数组，但**成员的值都是唯一的**，集合实现了iterator接口，所以可以使用**扩展运算符**和 **`for...of`** 进行遍历，集合的属性和方法:

1) `size` 返回集合的元素个数
2) `add` 增加一个新元素，返回当前集合
3) `delete` 删除元素，返回boolean值
4) `has` 检测集合中是否包含某个元素，返回boolean值
5) `clear` 清空集合，返回undefined

```js
//声明一个set
let s = new Set();
console.log(s, typeof s); //Set(0){}  "object"

//自动去重
let s2 = new Set(['大事儿','小事儿', '好事儿','坏事儿','小事儿']);
console.log(s2); //{'大事儿','小事儿', '好事儿','坏事儿'}

//元素个数
s2.size  //4

//添加新的元素
s2.add('喜事儿');

//删除元素
s2.delete('坏事儿');

//检测
console.log (s2.has('好事儿'));//true

//清空
s2.clear();//Set(0){}
```

- 集合实践

```js
let arr = [1,2,3,4,5,4,3,2,1];

//1.数组去重
let result1 = [...new Set(arr)];

//2.交集
let arr2 = [4,5,6,5,6];
let result2 = [...new Set(arr)].filter(item =>
    	//筛选交集元素                            
    	new Set(arr2).return s2.has(item)
	}
});

//3.并集
let arr3 = [1,2,3], arr4 = [4,6,7,8], arr5 = [6,3,0]
//Array
//let result3 = [...new Set([...arr3, ...arr4, ...arr5])]
//Set
let result3 = new Set([...arr3, ...arr4, ...arr5])

//4.差集  S1 - S2 = S1 - (S1交S2)
let result2 = [...new Set(arr)].filter(item =>    
    	!(new Set(arr2).return s2.has(item));
}
```

### 19.Map - 键值对集合

ES6提供了Map数据结构。它类似于对象，也是**键值对的集合**。**但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。**Map也实现了iterator接口，所以可以使用**扩展运算符**和 **for ...of** 进行遍历。Map的属性和方法:

1) `size` 返回 Map 的元素个数
2) `set(key, value)` 增加一个新元素，返回当前Map
3) `get(key)` 返回键名对象的键值
4) `has(key) ` 检测Map中是否包含某个元素，返回boolean值
5) `delete(key)` 删除元素
6) `clear` 清空集合，返回undefined

```js
for(let v of map){
    console.log(v); //[key, value]
}
```

Map 与 Array

```js
let kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]
```

### 20.class - 类

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6 的class可以看作只是一个**语法糖**，它的绝大部分功能，ES5都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
知识点:

1) `class `声明类
2) `constructor` 定义构造函数初始化
3) `extends` 继承父类
4) `super ` 调用父级构造方法
5) `static `定义静态方法和属性
6) 父类方法可以重写

```js
//构造函数
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.call = function(){
    console.log(this.name)
}
let p = new Person("zz", 18, '女');
p.call();

// class
class Phone{
    //构造方法名字不能修改
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
    //方法必须使用该语法，不能使用ES5的对象完整形式
    call(){
        console.1og("我可以打电话!!");
    }
    //call:function(){}  //error
}

//实例化对象
let iphone = new Phone("iphone", 2999);
console.log(iphone);//{brand:"iphone",price:2999}
iphone.call(); //我可以打电话!!
```

- class 静态成员

  给构造函数对象添加的属性称为**静态成员**，其实例对象不能访问。在类里面，**静态成员属于类**而不属于实例对象

```js
//构造函数
function Phone() {

}

//给构造函数对象添加的属性  静态成员
Phone.name = '手机';
Phone.change = function () {
    console.log("我可以改变世界");
}

//给原型对象添加属性
Phone.prototype.size = '5.5inch';

let nokia = new Phone();
console.log(nokia.name); //undefined
// nokia.change();  //error
console.log(nokia.size); //5.5inch

//类
class Phone {
    //静态属性
    static name = '手机';
    static change() {
        console.log('我可以改变世界');
    }
}
let nokia = new Phone();
console.log(nokia.name);//undefined
console.log(Phone.name);//手机
```

- ES5构造函数继承 - 组合继承

```js
function Person(name，age) {
    this.name = name
    this.age = age
}

Person. prototype. setName = function (name) {
    this. name = name
}

function Student(name, age, price) {
    Person.call(this, name, age) // 相当于: this. Person(name, age)，为了得到属性
    this.price = price;
}
Student.prototype = new Person(); //为了能看到父类型的方法
Student.prototype.constructor = Student; //修正constructor属性
Student.prototype.setPrice = function (price) {
    this.price = price;
}

var s = new Student('Tom', 20, 1400);
console.log(s.name, s.age, s.price);
```

- ES6类继承

````js
class Phone {
    //构造方法
    constructor(brand, price) {
        this.brand = brand; 
        this.price = price;
    }
    //父类的成员属性
    call() {
        console.log("我可以打电话!!");
    }
    f(){
  
    }
}
class SmartPhone extends Phone {
    //构造方法
    constructor(brand, price, color, size) {
        super(brand, price); //调用父类constructor
        this.color = color;
        this.size = size;
    }
    photo(){
        console.log("pp");
    }
  
    //重写父类方法
    f(){
        //...
    }
}

let p = new SmartPhone('iphone', 5999, 'pink', '6.0inch')
p.call();//调用父类方法
````

- class 中 `getter` 和 `setter` 设置

  与 ES5 一样，在“类”的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

```js
class MyClass {
  constructor() {
    // ...
  }
  get prop() {  //访问prop属性调用此函数，返回值为 return 返回值
    return 'getter';
  }
  set prop(value) { //修改prop属性时调用此函数，判断修改值value是否合法
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```

### 21.  数值扩展

```js
//0.Number.EPSILON是JavaScript表示的最小精度
//EPSILON属性的值接近于 2.2204460492503130808472633361816E-16 (-16次方)
function equal(a, b){
    if(Math.abs(a-b)<Number.EPSILON){
        return true;
    }else{
        return false;
    }
}
console.log(0.1 + 0.2);//0.30000000000000004
console.log(0.1 + 0.2 === 0.3);//false  浮点数计算有误差
console.log(equal(0.1 + 0.2, 0.3));//true

//1.二进制(0b开头)和八进制(0o开头)
let b = 0b0101; //二进制
let o = 0o0101; //八进制
let x = 0x0101; //十六进制

//2.Number.isFinite检测一个数值是否为有限数
Number.isFinite(100);  //true
Number.isFinite(100/0);//false

//3.Number.isNaN检测一个数值是否为NaN
Number.isNaN(123);//false

//4.Number.parseInt Number.parseFloat字符串转整数
console.log(Number.parseInt('52113141ove'));
console.log(Number.parseFloat('3.1415926神奇'));

//5.Number.isInteger判断一个数是否为整数
Number.isInteger(5) //true
Number.isInteger(2.5)  //false

//6.Math.trunc将数字的小数部分抹掉
Math.trunc(3.5) //3

//7.Math.sign判断一个数到底为 正数(1)  负数(-1)  还是零(0)
Math.sign(1) //1
Math.sign(-1)//-1
Math.sign(0) //0
```

> 为什么 0.1  +  0.2  !==  0.3 ?

0.1的二进制格式是：0.0001100011....，这是一个**二进制无限循环小数**，但计算机内存有限，我们不能用储存所有的小数位数。那么在精度与内存间如何取舍呢？

**在某个精度点直接舍弃**。当然，代价就是，0.1 在计算机内部根本就不是精确的 0.1，而是一个有舍入误差的 0.1。当代码被编译或解释后，0.1 已经被四舍五入成一个与之很接近的计算机内部数字，以至于计算还没开始，一个很小的舍入错误就已经产生了。这也就是 0.1 + 0.2 不等于0.3 的原因。

### 22.对象方法扩展

````js
//1. object.is 判断两个值是否完全相等
Object.is(120,120);//true 
Object.is(NaN,NaN);//true
NaN === NaN ; //false

//2. object.assign 对象的合并
const config1 = {
    host:'localhost',
    port: 3306 ,
    name:'root',
    pass:'root',
    test:'test'
};
const config2 = {
    host:'http://atguigu.com',
    port: 3306,
    name:'atguigu.com',
    pass:'iloveyou'
}
Object.assign(config1, config2); //如果属性名一样，后者会覆盖前者
Object.assign(config1, config2)===config1 // true
Object.assign(config1, config2)===config2 // false


//3. object.setPrototypeOf设置原型对象object.getPrototypeof 获取原型对象
const school = {
    name: '尚硅谷'
}
const cities = {
    xiaoqu: ['北京',' 上海'，'深圳']
}
Object.setPrototype0f(school, cities);
console.log(Object.getPrototypeOf(school));//cities
console.log(school);

````

### 23.模块化

模块化是指将一个大的程序文件，拆分成许多小的文件(模块)，然后将小文件组合起来。

模块化的**优势**有以下几点：防止命名冲突、代码复用、高维护性。

**`script` 标签引入的 `js` 文件会有命名冲突。**

**ES6之前**的模块化规范有：

`CommonJS => NodeJS、Browserify`

`AMD => requireJS`

`CMD => seaJS`

> **ES6模块语法**

模块功能主要由两个命令构成：`export` 和 `import`

- **`export` 命令用于规定模块的对外接口**
- **`import` 命令用于输入其他模块提供的功能**

```js
//定义模块 js/m1.js

//暴露数据
export let str = "OOO";
export function f(){
    console.log("I am g");
}

//未暴露的数据
let ob = {
    dd:"ii"
}
```

```html
<script>
    //引用m1.js
    import * as m1 from "./js/m1.js"
    console.log(m1.str) //OOO
    m1.ob //undefined
</script>
```

**文件路径必须以  `/   ./   ../` 开头。**

**注意：**Node.js 的CommonJS模块化：暴露 `module.exports/exports` 、引入 `require`

- `export` 暴露方法

```js
//1.分别暴露数
export let str = "OOO";
export function f(){
    console.log("I am g");
}
```

```js
//2.统一暴露
let a = '0'
function f(){
    //...
}

export {a, f}; //用到ES6对象属性简写法

//可以用as关键字重命名，旧名和新名都可以引用变量
export {
	a as b, 
    f as g
};
```

```js
//3.默认暴露 m3.js

//暴露对象  也可以暴露变量函数
export default{
    name:"kk"
    set: function(name){
        this.name=name
    }
}

//引用 .html
import * as m2 from "./js/m2.js"
m2.default.set("jj")
```

- `import` 导入模块

```js
//1. 通用的导入方式
import * as m1 from "./js/m1.js";

//2.对象解构赋值形式
import {school, teach} from "./js/m1.js"; 

import {school as sh, teach} from "./js/m2.js";

//引入变量重名，可以用as关键字改别名

//引入默认模块  将 default 改别名 因为不能直接用default
import {default as m3} from './js/m3.js"
console.log(m3)

//3.简便形式  针对默认暴露模块
import m3 from "./js/m3.js'
```

- 浏览器使用模块的方法

```html
<!--方法一: 直接在script导入其他模块，要加type = "module"-->
<script type = "module">
	import m3 from "./js/m3.js' 
  
    //...
    //在标签里写代码，会使html文档体积变大
  
</script>
```

```js
//方法二，在入口js文件使用其他模块，再引进html文档里，要加type = "module"

//app.js 入口js文件
//模块引入
import * as m1 from './m1.js';
import * as m2 from './m2.js';
import * as m3 from "./m3.js" ;
console.log(m1);
console.log(m2);
console.log (m3);


//把app.js 引进  script.src方式引进哦！！！
//<script type = "module" src = "./js/app.js"></script>
//在app.js里面写代码，html体积小
```

- `babel` 对ES6模块化代码转换

  为了兼容性，需要将ES6代码转为ES5代码。

  1.安装工具`babel-cli babel-preset-env browserify` (打包工具，项目中用`webpack`)，在项目根目录执行命令：

  ```bash
  > npm init --yes   #初始化项目
  > npm i babel-cli babel-preset-env browserify -D  #安装工具，-D开发依赖
  ```

  2.运行`babel`命令

  ```bash
  > npx babel src/js -d dist/js --presets=babel-preset-env
  # src/js 装js模块的文件夹，dist/js 转换后的js文件夹
  ```

  3.打包(**转换后的js文件不能直接运行**)

  ```bash
  > npx browserify dist/js/app.js -o dist/bundle.js 
  # dist/js/app.js -> dist/bundle.js  引用 <script type = "module" src = "dist/bundle.js"></script>
  ```

  4.当 `src/js/app.js` 发生改变，`dist/bundle.js` 不会更新，所以要重新执行第二第三步。
- **浏览器环境下使用 NPM 包**

  1.安装 jQuery 包

  ```bash
  > npm i jquery
  ```

  2.导入 jQuery 包

  ```js
  //app.js
  //修改背景颜色为粉色
  //引入jq包
  import $ from 'jquery';   // 和 const $ = require("jquery"); 等价
  $('body').css('background', 'pink' );
  ```

  3.babel转码

  ```bash
  > npx babel src/js -d dist/js --presets=babel-preset-env
  ```

  4.打包

  ```bash
  > npx browserify dist/js/app.js -o dist/bundle.js 
  ```

  5.引入

  ```html
  <script type = "module" src = "dist/bundle.js"></script>
  ```

### 24.ES7 新特性

- `Array.prototype.includes()`
  Includes方法用来检测数组中是否包含某个元素，返回布尔类型值。

  ```js
  const arr = [1,2,8];
  arr.includes(2);//true
  arr.includes(9);//false
  ```
- 3.2.指数操作符
  在ES7中引入指数运算符 `**` ，用来实现幂运算，功能与`Math.pow()` 结果相同

  ```js
  2 ** 5  //2^5
  ```

### 25.ES8 新特性

- `async`和`await`
  `async`和`await`两种语法结合可以让异步代码像同步代码一样。
- async函数

  `async` 函数的返回值为`promise`对象，不管 return 什么都是返回 promise对象；
  `promise`对象的结果由`async`函数执行的返回值决定。

  ```js
  async function  f(){
      //返回字符串
      //return 'FF'
      //1.return的不是一个 Promise 类型的对象，那么async函数返回的结果就是成功Promise对象

      //2.抛出错误，那么async函数返回的结果是一个失败的Promise
      //throw new Error('出错啦!');

      //3.return的如果是一个 Promise 对象, 这种情况居多, 如果该 Promise 对象是成功的，那么async函数就是成功Promise对象，反之亦然。
      return new Promise((resolve, reject)=>{
          resolve("成功的数据")
      })
  }
  console.log(f());
  /*返回字符串
  Promise
  	[[Prototype]]: Promise
  	[[PromiseState]]: "fulfilled"
  	[[PromiseResult]]: "FF"
  */

  const res = f();
  //调用then方法
  res.then(value => {
      console.log(value)
  }, reason =>{
      //console.warn(reason)
      console.error(reason)
  });
  ```
- `await`表达式

  `await`必须写在`async`函数中；

  `await`右侧的表达式一般为 `promise`对象；

  **`await`语句返回的是`promise`成功的值；**

  `await`的`promise`失败了，就会抛出异常，需要通过`try...catch`捕获处理。

  ```js
  //创建promise 对象
  const p = new Promise((resolve, reject) => {
      resolve("用户数据");
  })

  const p2 = new Promise((resolve, reject) => {
      reject("出错啦");
  })

  // await 要放在async 函数中.
  async function main() {
      let result = await p;
      console.log(result);

      try{
          await p2;
      }catch(err){
          console.error(err);
      }  
  }
  //调用函数
  main(); //用户数据   x出错啦
  ```
- `async`和`await`结合读文件

  ```js
  const fs = require("fs");

  //读取为学1
  function readW1() {
      return new Promise((resolve, reject) => {
          fs.readFile("./res/为学1.md", (err, data)=>{
              //如果失败
              if (err) reject(err);
              //如果成功
              resolve(data);
          });
      });
  }

  //读取为学2
  function readW2() {
      return new Promise((resolve, reject) => {
          fs.readFile("./res/为学2.md", (err, data)=>{
              //如果失败
              if (err) reject(err);
              //如果成功
              resolve(data);
          });
      });
  }

  //读取为学3
  function readW3() {
      return new Promise((resolve, reject) => {
          fs.readFile("./res/为学3.md", (err, data)=>{
              //如果失败
              if (err) reject(err);
              //如果成功
              resolve(data);
          });
      });
  }

  async function main(){
      try{
          //获取文件内容
          let w1 = await readW1();
          let w2 = await readW2();
          let w3 = await readW3();
          console.log(w1.toString());
      }catch(err){
          console.log(err);
      }
  }
  main();
  //以上代码非常像同步代码!
  ```
- `async`和`await`结合发AJAX请求

  ```js
  //接口地址:https://api.apiopen.top/getJoke
  //发送AJAX请求
  function send(url) {
      return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          //3.发送
          xhr.send();
          //4．绑定事件,处理响应结果
          xhr.onreadystatechange = function () {
              //判断
              if (xhr.readyState === 4) {
                  //判断响应状态码20日-299
                  if (xhr.status >= 200 && xhr.status < 300) {
                      //表示成功
                      //console.log(xhr.response);
                      resolve(xhr.response);
                  } else {
                      //如果失败
                      //console.error(xhr.status);
                      reject(xhr.status)
                  }
              }
          }
      });
  }

  async function main(url) {
      let result = await send(url);
      console.log(result);
  }

  main("https://api.apiopen.top/getJoke");
  ```
- ES8对象方法扩展

  ```js
  //声明对象
  const school = {
      name:"尚硅谷",
      cities:['北京','上海','深圳'],
      xueke: ['前端', 'Java', '大数据','运维']
  };
  //1.获取对象所有的键
  console.log(Object.keys(school));//["name","cities","xueke"]

  //2.获取对象所有的值
  console.log(Object.values(school));//["尚硅谷",['北京','上海','深圳'],['前端', 'Java', '大数据','运维']]

  //3.entries 将对象转为二维数组
  console.log(Object.entries(school));
  //该方法方便创建Map
  const map = new Map(Object.entries(school));
  console.log(map);

  //4.对象属性的描述对象
  console.log(Object.getOwnPropertyDescriptors(school));
  const.obj = Object.create(null, {
      name: {
          //设置值
          value: '尚硅谷',
          //属性特性
          writable: true ,
          configurable:true,
          enumerable:true
      }
  });

  ```

### 26.ES9新特性

- 扩展运算符和 rest 参数

  Rest 参数与spread扩展运算符在ES6 中已经引入，不过ES6 中只针对于数组，在ES9中为**对象**提供了像数组一样的 `rest` 参数和扩展运算符`...`  。

  ```js
  function connect({host, port, ...user}){
      console.log(host);
      console.log(port);
      console.log(user);
  }
  connect({
      host: '127.0.0.1',
      port:3306,
      username :'root',
      password: 'root'
  });
  //127.0.0.1
  //3306
  //{username :'root',password: 'root'}


  const o = {
      n:1,
      m:0,
      b:"oo"
  }
  //...o => n:1 , M:0

  const o2 = {
      b:"j"
  }

  const o3 ={...o,...o2} 
  /*
  {
      "n": 1,
      "m": 0,
      "b": "j",  //属性相同，后者覆盖前者
      "k": 90
  }
  */
  Object.assign(o, o2); //上面效果和该方法效果一样，如果属性名一样，后者会覆盖前者
  ```
- 正则扩展 - 命名捕获分组

  ````js
  /*正则：
  .	查找单个字符，除了换行和行结束符。
  n*	匹配任何包含零个或多个 n 的字符串。
  n?	匹配任何包含零个或一个 n 的字符串。
  */

  //声明一个字符串
  let str = '<a href= "http://www.atguigu.com" >尚硅谷</a>'
  //提取url与「标签文本」 => 称为捕获
  const reg = /<a href="(.*)">(.*)<\/a>/;
  //执行
  const result = reg.exec(str);

  console.log(result);
  //['<a href= "http://www.atguigu.com" >尚硅谷</a>', "http://www.atguigu.com", "尚硅谷"]


  //有了分组之后
  let str1 = '<a href= "http://www.atguigu.com" >尚硅谷</a>'
  const reg2 = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
  const result2 = reg2.exec(str2);
  console.log(result2);
  /*
  (3) ['<a href="http://www.atguigu.com">尚硅谷</a>', 'http://www.atguigu.com', '尚硅谷', index: 0, input: '<a href="http://www.atguigu.com">尚硅谷</a>', groups: {…}]
  0: "<a href=\"http://www.atguigu.com\">尚硅谷</a>"
  1: "http://www.atguigu.com"
  2: "尚硅谷"
  groups: {url: 'http://www.atguigu.com', text: '尚硅谷'}
  index: 0
  input: "<a href=\"http://www.atguigu.com\">尚硅谷</a>"
  length: 3
  */

  //groups 分组  更加方便提取捕获的数据  便于维护
  console.log(result2.groups.url);
  console.log(result2.groups.text);
  ````
- 正则扩展 - 反向断言

  ```js
  /*
  正则exec方法 检索字符串中指定的值。返回找到的值，并确定其位置。
  ?=n	匹配任何其后紧接指定字符串 n 的字符串。
  ?!n	匹配任何其后没有紧接指定字符串 n 的字符串。

  .	查找单个字符，除了换行和行结束符。
  n*	匹配任何包含零个或多个 n 的字符串。
  n?	匹配任何包含零个或一个 n 的字符串。
  */

  //声明字符串
  let str = 'JS5211314你知道么555啦啦啦';

  //提取555
  //正向断言 (?=n)  判断数字后面是否是字符串 n
  //根据数字后面是不是'啦'提取数字
  const reg = /\d+(?=啦)/;
  const result = reg.exec(str);
  console. log(result); 

  //反向断言 (?<=n)  判断数字前面是否是字符串 n
  const reg = /(?<=么)\d+/;
  const result = reg.exec(str);
  console . log (result);

  ```
- 正则扩展 - dotAll模式

  dot 点的意思，正则里的元字符，除换行符以外的任意单个字符。

  ```js
  let str =`
  <ul>
      <li>
          <a>肖生克的救赎</a>
          <p>上映日期: 1994-09-10</p>
      </li>
      <li>
          <a>阿甘正传</a> 
          <p>上映日期: 1994-07-06</p>
      </li>
  </ul>` ;
  //声明正则
  // const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/;
  const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;//最后模式修正符s要加，这时候 . 匹配任意字符。g是全局匹配
  //执行匹配
  const result = reg.exec(str);
  console.1og(result);

  //提取所有结果
  let res;
  while(res = reg.exec(str)){
      console.log(res);
  }
  ```

### 27.ES10新特性

- 对象扩方法 `Object.fromEntries`

  该方法的参数是二维数组或者 Map 类型，作用是把参数转为对象。

  ```js
  //二维数组
  const result = Object.fromEntries([
  	[ 'name', '尚硅谷'],
  	[ 'xueke', 'Java,大数据，前端，云计算']
  ]);

  //Map
  const m = new Map();
  m.set( 'name', 'ATGUIGU');
  const result = Object.fromEntries(m); 
  console.log(result);

  //ES8 的 Object.entries 方法  将对象转为二维数组
  const arr = object. entries({
  	name:'尚硅谷'
  });
  console. log(arr); 

  ```
- 字符串方法扩展 `trimStart` 和 `trimEnd`

  ```js
  /*
  trim 清除字符串左右两侧的空格
  trimStart  左侧
  trimEnd  右侧
  */

  let str = "   ilo  hns    ";
  console.log(str.trim()+'\n'+str.trimStart()+'\n'+str.trimEnd());
  /*
  "ilo  hns"
  "ilo  hns    "
  "   ilo  hns"
  */
  ```
- 数组方法扩展`flat`与`flatMap`

  ```js
  //flat 平
  //将多维数组转化为低维数组, 打平数组
  //参数为深度h，整数   三维 -> 一维: h = 3-1
  const arr = [1,2,3,4,[5,6,[7,8,9]]]
  arr.flat(2) //[1,2,3,4,5,6,7,8,9]

  //flatMap = flat + map 方法，把map方法返回的数组打平。
  arr.flatMap(item => [item*10])
  ```
- `Symbol.prototype.description`

  用来获取 Symbol 描述字符串。

  ```js
  //创建Symbol
  let s = Symbol('尚硅谷');

  console.log(s.description);//尚硅谷
  ```

### 28.ES11新特性

- 私有属性

  ```js
  class Person{ 
      //公有属性
      name ;
      //私有属性
      #age;
      #weight;
      //构造方法
      constructor(name, age, weight){
          this.name = name;
          this.#age = age;
          this.#weight = weight ;
      }
  	intro(){
          console. log(girl.#age);
      }
  }
  //实例化
  const girl = new Person('晓红'，18, '45kg');
  console. log(girl.name);
  console. log(girl.#age);//error
  console. log(girl); 

  girl.intro() //晓红
  ```
- **`Promise.allSettled` 方法**

  接收一个元素都是 Promise 对象的数组，得到每个 Promise 对象的状态，该方法永远返回一个成功的 Promise 对象。

  ```js
  //声明两个promise对象
  const p1 = new Promise((resolve, reject)=>{
      setTimeout(()=>{
      resolve('商品数据- 1');
  },1000)
  });
  const p2 = new Promise((resolve, reject)=>{
      setTimeout(()=>{
      // resolve('商品数据- 2');
      reject('出错啦!');
  }, 1000)
  });
  //调用allsettled 方法
  const result = Promise.allSettled([p1, p2]);
  console.log(result) 
  /*
  Promise
  	[[Prototype]]: Promise
  	[[PromiseState]]: "fulfilled"
  	[[PromiseResult]]: Array(2)
  		0: {status: 'fulfilled', value: '商品数据- 1'}
  		1: {status: 'rejected', reason: '出错啦!'}
  		length: 2
  		[[Prototype]]: Array(0)
  */

  ```
- **`Promise.all` 方法**

  该方法和`Promise.allSettled`很像，都接收一个 Promise  对象数组arr， 返回一个 Promise 对象，不同的是`Promise.all` 方法根据每一个对象决定返回成功或失败的 Promise 对象，若arr里每个对象都是成功的那么`Promise.all` 返回成功的 Promise 对象，如果arr里有一个失败，那么返回的是一个失败的 Promise 对象，错误值就是arr里失败对象的错误值。

  ```js
  //声明两个promise对象
  const p1 = new Promise((resolve, reject)=>{
      setTimeout(()=>{
      resolve('商品数据- 1');
  },1000)
  });
  const p2 = new Promise((resolve, reject)=>{
      setTimeout(()=>{
      // resolve('商品数据- 2');
      reject('p2出错啦!');
  }, 1000)
  });
  //调用allsettled 方法
  const result = Promise.all([p1, p2]);
  console.log(result) //p2失败啦!
  ```

上面两个 Promise 方法用于批量异步任务，每个任务都要成功，则用**`Promise.all` 方法**，一个成功就行，则用 **`Promise.allSettled` 方法**。

- `String.prototype.matchAll`方法

  该方法用来得到批量正则匹配结果。

  ```js
  let str =`
  <ul>
      <li>
          <a>肖生克的救赎</a>
          <p>上映日期: 1994-09-10</p>
      </li>
      <li>
          <a>阿甘正传</a> 
          <p>上映日期: 1994-07-06</p>
      </li>
  </ul>` ;

  const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;

  //while提取所有结果
  let res;
  const data = [];
  while(res = reg.exec(str)){
      console.log(res);
      data.push({title:result[1],time:result[2]})
  }

  //用 matchAll 方法
  //调用方法
  const result = str.matchAll(reg);

  // 可迭代
  // for(let v of result){
  // 	   console.log(v);
  // }
  const arr =[...result];
  console.log(arr);
  ```
- 可选链操作符 `?.`

  如果想获取深度比较大的对象里的数据，`?.`可以免去层层判断。

  ```js
  function main(config){
  	//传统获取数据  需要判断有没有传进数据
      const dbHost = config&&config.db&&config.db.host;

      //可选链操作符
      const dbHost = config?.db?.host;

  }

  main({
  	db: {
  		host: '192.168.1.100' ,
  		username: 'root'
  	},
      cache: {
      	host: '192.168.1.200',
          username: 'admin'
      }
  });
  ```
- 动态 `import`

  ES6 模块化是静态 `import`，把所有需要用到的模块都一次性`import`，实现懒加载，影响加载速度。ES11则是按需`import`。

  ```js
  //app.js
  // 静态导入
  // import* as m1 from "./hello.js";

  // 获取元素
  const btn = document.getElementById( "btn" );
  btn.onclick = function()i
      import( './hello.js').then(module =>{

          //module就是hello.js模块
          module.hello();
      );
  };
  ```
  ```js
  //hello.js

  export hello(){

  }
  ```
- BigInt

  ```js
  //大整型, 后面加n
  let big = 2000n;
  let m = 100;

  console.log(typeof big) //"bigint"

  BigInt(m) //将整数转为bigint

  //大数值运算
  let max = Number.MAX_SAFE_INTEGER;
  console.log(max);
  console.log(max + 1);
  console.log(max + 2);//出错

  //要转为大数运算
  console.log(BigInt(max));
  console.log(BigInt(max) + BigInt(1));
  console.log(BigInt(max) + BigInt(2));
  //BigInt 不能直接和 Int 运算
  ```
- globalThis

  **始终指向全局对象**，无论执行环境是什么。

  ```js
  //Node.js
  console.log(globalThis) //global

  //浏览器
  console.log(globalThis) //window
  ```
