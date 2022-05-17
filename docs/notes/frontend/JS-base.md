---
title: JS基础
date: 2022-1-13
author: Aavin
categories: 
 - 前端笔记
tags: 
 - JavaScript
---
### 1. Null 与 Undefined类型

Null类型值只有 `null`  ，`null `专门表示为空的对象：

```javascript
var oj = null;
console.log(typeof oj);//"Object"
```

Undefined 只有 `undefined`，声明未赋值的变量：

```javascript
var ud = undefined;
//var ud;
console.log(typeof ud);//"undefined"
```

---

### 2.NaN

NaN 属于数值类型，任何涉及 NaN 的操作都会返回 `NaN`：

```javascript
console.log(NaN == NaN);//false
console.log(isNaN(NaN));//true
console.log(isNaN("100"));//true,转为100
console.log(isNaN("ggg"));//false
console.log(isNaN("true"));//ture，转为1
```

---

### 3.方法和函数

方法：在类里面的函数。

函数：在类外面的函数。

```javascript
function func1(){
    console.log("我是函数");
}
func1();

var obj = {
    fun:function(){
        console.log("我是obj的方法")
    }
}
obj.fun();//我是obj的方法
```

---

### 4.常用函数声明方式

```js
var func1 = new Function("语句...");      //很少用

var func2 = function(形参1,...){语句...}; //注意分号

function func3(形参1,...){语句...}       //没有分号
```

---

### 5.立即执行函数

```javascript
//函数定义完，立即执行，往往只会执行一次
(funtion(){
 	alert("ff");
})();
```

---

### 6.对象定义

```javascript
//先定义再指定属性
var obj = {};
obj.name = "kkk";

//定义时指定属性
var obj = {
    name:"ddd",
    age:90,
    gender:"male",
    test:{} //obj.test是对象
};//注意分号

//属性名可以带双引号
var obj = {
    "name":"ddd",
    "age":90,
    "gender":"male",
    "test":{} //obj.test是对象
};//注意分号
```

---

### 7.方法

```js
//一种写法
var obj = {};
obj.setName = function(){
    obj.name = "hh";
}

//另一种写法
var obj = {
    age: 99,
  
    setName: function(){
    			obj.name = "hh";
			},
  
    // 可以省略function
    say(){
        console.log(this.name)
    },
    gender: "男"
};

//调用方法,属性名作为函数名
obj.setName();
```

将外部函数作为方法：

```js
var f = function(){
    obj.name = "hh";
};
var obj = {
    age: 99,
    setName:f,  //f是外部函数名
    gender: "男"
};
//调用方法,属性名作为函数名
obj.setName();
```

---

### 8.枚举对象中的属性

```js
var obj = {
    age: 99,
    setName: function(){
    			obj.name = "hh";
			},
    gender: "男"
};
/*
语法：
for(var 变量 in 对象){
  
}
*/
//对象中有几个属性，for...in语句执行就几次，每次执行时会将对象的属性名字赋给变量
for(var i in obj){
    console.log(i);//输出属性名
    console.log(obj.i);//undefined，n不是obj属性名，不能引用变量，只能引用obj属性名
    console.log(obj[i]);//输出属性值
}
```

---

### 9.作用域

> **全局作用域**

```
直接编写在
```

`script` 标签中的JS代码，都在全局作用域。

```
全局作用域在页面打开时创建，在页面关闭时销毁。
```

```
在全局作用域有一个全局对象window，它代表的是一个浏览器的窗口，由浏览器创建可以直接使用。
```

```

```

**在全局作用域中，创建的变量（函数）都会作为window对象的属性（方法）保存，`window.变量名 （函数名）`** 。

```

```

**变量的声明提前：**使用var关键字声明的变量，会在所有代码执行之前被声明**（如果用var声明变量时赋值，只是声明提前但不提前该赋值,）**，如果声明变量不使用var，则变量不会被声明提前：

```javascript
console.log(a);//undefined
var a = 10;

console.log(b);//报错
b = 10 ;

console.log(c);//undefined
var a = 10;
```

**函数声明提前：**

```javascript
//该函数会在所有代码执行前被创建，声明提前了

fun1(); //
function fun1(){
  
}

//该方式不会提前
fun2(); //报错
var fun2 = function(){
  
}
```

全局作用域中的变量都是全局变量，在页面任意部分都可以访问。

> **函数（局部）作用域**

调用函数时，创建函数作用域，函数执行完毕销毁。

每调用一次函数就会创建一个新的函数作用域，它们之间相互独立。

**函数作用域中可以使用全局变量**，全局作用域不能访问局部变量。

**就近原则：当在函数作用域中操作一个变量时，它会先在自身作用域中寻找，如果有就用，没有就往上一级作用域（不一定是全局作用域）找，直到找到全局作用域，没有就报错 。**

**在函数作用域中使用与自身作用域重名的变量，可以这样使用  ` window.变量名`**  。

**在函数作用域中也有声明提前的特性，**使用`var`关键字声明的变量，会在**函数中**所有代码执行之前被声明，**不用`var`声明就不会提前** ：

```javascript
var a = 10;
function fun(){
    console.log(a);//undefined，声明提前但未赋值
    var a = 30;
}
function fun1(){
    console.log(a);//10，不提前
    a = 30;
}
```

**在函数作用域中，不使用var声明的变量，如果全局作用域没有声明则会成为全局变量，若有声明，则就是该全局变量** ：

```javascript
var a = 10 ;
function fun(){
    a = 40;
    d = 40;
}
console.log(a,b);//40 40
```

**在函数作用域中，使用*var*声明的变量是局部变量，尽管与全局变量重名也不会影响该全局变量（变量赋值时也要就近原则找变量）**：

```js
var a = 10;
function fun(){
     console.log(a);
     var a = 30;  //这里修改的是局部变量a
}   
fun();//undefined，声明提前但未赋值
console.log(window.a);//10,a未改变
```

**定义形参相当于在函数作用域中声明了变量** ：

```javascript
var x = 10;
function f(x){
    console.log(x);
}
f();//undefined

//相当于
var x = 10;
function f1(x){
    var x;
    console.log(x);
}
f1();//undefined

```

---

### 10.this

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this，this指向的是一个对象，这个对象我们称为函数执行的上下文对象。

根据函数的**调用方式**的不同，this会指向不同的**对象** ：

- **以函数形式调用时，this永远都是`window`**
- **以方法形式调用时，this就是调用方法的对象**

  ```js
  var name = "猪八戒";
  function f(){
      console.log(this.name);
  }
  var obj = {
      say:f,
      name:"孙悟空"
  };
  f();      //猪八戒
  obj.say();  //孙悟空
  ```

`this`的用处，看区别：

```js
var name = "沙悟净";
function sayName(){
    console.log(name);
}
var obj1 = {
    say:sayName,
    name:"猪八戒"
};
var obj2 = {
    say:sayName,
    name:"孙悟空"
};

//name都在全局作用域，都输出“沙悟净”
sayName();
obj1.say();
obj2.say();

//只需修改console.log(name); => console.log(this.name); 就可以输出各自name属性
```

### 11.相等运算符

**`==`** ，如果两个值不同类型，则会自动进行类型转换，转换为相同类型再比较，如：

```js
"1"==1   //true
true == "1" //true
null == "0" //false
undefined == null  //true
NaN不与任何值相等包括本身，要isNaN()判断
```

`!=` 也要自动类型转换。

**`===`   全等，`!==`  不全等，不会做自动类型转换，类型不同false** 。

---

### 12.使用工厂方法创建对象

提取相同属性封装起来，再调用创建对象：

```javascript
function createPerson(name, age, gender){
    //创建一个新对象
    var obj = Object();
    //添加属性
    obj.name = name;
    obj.age = age; 
    obj.gender = gender;
    return obj;
}
var obj1 = createPerson('猪八戒', 188, '男');
var obj2 = createPerson('孙悟空', 180, '男');
```

---

### 13.构造函数

使用工厂方法创建对象都是Object类型，无法区分多种类型的对象 。

创建构造函数，专门创建某一类型对象：

```javascript
/*
创建方式和普通函数无太大区别，构造函数通常大写字母开头;

普通函数直接调用，构造函数要用 new 关键字调用，不加new 就是普通函数;

构造函数执行流程：
	1.立刻创建一个新对象
	2.将新建的对象设置为函数中的 this 参数，在构造函数中使用 this 来引用新的对象
	3.逐行执行函数中的代码
	4.将新对象作为返回值返回

使用同一个构造函数创建的对象，是一类对象，也将构造函数称为一个类，该构造函数创建的对象称为该类(构造函数)的实例。
*/
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//this赋给per
var per = new Person('zhu', 19, '男');

//使用 instanceof 可以检查一个对象是否是一个类的实例
console.log(per instanceof Person);//true
```

`console.log(任何对象  instanceof  Object);//true`

---

### 14.this 的情况总结

根据函数的**调用方式**的不同，this会指向不同的**对象**：

- 以函数形式调用时，this永远都是`window`
- 以方法形式调用时，this就是调用方法的对象
- **以构造函数的形式调用时，this 就是新创建的那个对象**

---

### 15.构造函数改造

```javascript
//构造函数
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function(){
        alert(this.name);
    }
}
/*
所有实例的sayName方法都是唯一的;

上面构造函数有问题，调用一次构造函数就创建一个新的方法，调1000000次建1000000次，占用内存;

改造：将sayName方法在全局作用域定义. 
*/
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = fun
}
function fun(){
        alert(this.name);
}

/*
又产生一个新问题：在全局作用于定义函数，污染全局作用域的命名空间，而且在全局作用域中也很不安全，下面《16》点解决
*/
```

### 16.原型对象

> 原型 `prototype`

每创建一个函数(函数是个对象)，解析器都会向函数中添加一个**属性 prototype** ，这个属性对应着(指向)一个对象，这个对象就是所谓的**原型对象**。

```js
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = fun;
}
function fun(){
        alert(this.name);
}

var per1 = new Person('zz', 10, 'male');
var per2 = new Person('zz', 10, 'male');

console.log(Person.prototype);//object
```

如果函数作为普通函数调用，prototype 没有任何作用；**作为构造函数调用，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，可以通过 `__proto__` (前后两个下划线)来访问该属性。**

```javascript
/*
Person.prototype 和 per.__proto__ 指向同一个原型对象

Person.prototype --> 原型对象 <-- per.__proto__
*/

console.log(Person.prototype == per1.__proto__);//true
console.log(Person.prototype == per2.__proto__);//true
console.log(per1.__proto__ == per2.__proto__);//true
```

原型对象相当于一个**公共的区域**，同一个类的所有实例都可以访问这个原型对象，可以将对象中共有的内容统一设置到原型对象中。

**当访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有直接使用，如果没有就去原型对象中寻找，如果找到则直接使用。**

向 Person 的原型添加属性 age ：

```js
function Person(name, gender){
    this.name = name;
    this.gender = gender;
}

var per1 = new Person('zz', 'male');
var per2 = new Person('zzi', 'male');

Person.prototype.age = 100;
console.log(per1.__proto__.age);//100,去原型找
console.log(per2.__proto__.age);//100,去原型找
//原型相当于一个公共的区域，同一个类的实例都可以访问
```

向 Person 的原型添加方法 ：

```js
function Person(name, gender){
    this.name = name;
    this.gender = gender;
}

var per1 = new Person('zz', 'male');
var per2 = new Person('zzi', 'male');

Person.prototype.sayName = function(){
    console.log(this.name);
};

//去原型找
per1.sayName();//zz
per2.sayName();//zzi
```

**向原型添加公共方法即可解决《15》点的问题，不影响全局作用域。**

**使用 in 检查对象是否含有某个属性时，如果对象没有但是原型中有，也会返回 true，可以使用对象的 hasOwnProperty() 方法来判断对象自身是否有该属性，**hasOwnProperty 是**该对象的原型的原型的属性**（方法）。

```js
Person.prototype.oj = "rr";
console.log("oj" in per1);//true
console.log(per1.hasOwnProperty("oj"));//false
console.log(per1.__proto__.hasOwnProperty("hasOwnProperty"));//false
```

**原型对象也是对象，所以它也有原型。**当我们使用一个对象的属性或方法时，会现在自身中寻找，自身中如果有，则直接使用，如果没有则去原型对象中寻找，如果原型对象中有，则使用，**如果没有则去原型的原型中寻找，直到找到Object对象的原型，Object的原型没有原型，如果在Object中依然没有找到，则返回undefined**

```js
console.log(per1.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));//true
```

### 17.垃圾回收

程序运行会产生垃圾，垃圾影响程序运行速度，要有垃圾回收机制。

```js
var o = new Object();
o = null;
 
//产生垃圾

o = null;//JS自动回收
```

JS自动回收垃圾，不用人为干预，只要把不再使用的对象设置为 null 。

### 18.数组

数组创建：

```js
var arr = new Array();

/*
arr.length：获取连续数组长度

arr.length = 数值：可以截断数组或延长数组长度

向数组最后一个位置添加元素：arr[arr.length] = 值 
*/

//使用字面量创建数组
var arr1 = [1,2,4,9];

//构造函数创建
var arr2 = new Array(10,10,8,9,33);

//注意区分
var arr3 = [10];//arr1只有一个元素10
var arr4 = new Array(10);//创建一个数组长度为10的数组
```

元素类型：

```javascript
//可以混合数据类型
var arr = [19,'ggg',true,null,undefined,1.9];

//也可以是对象
var o = {name:"dee"};
var arr1 = [{name:'dd',age:20},{name:'dd',age:20},{name:'dd',age:20},o];

//也可以是函数
var arr2 = [function(){alert(2);},1,2];
arr2[0]();//调用

//也可以是数组
var arr3 = [[1,2,3],[5,6,78],4,'ww'];

//可以是变量
let a = 1, b
let arr = [a,b]
console.log(arr) //[1]
```

### 19.数组方法

```js
var arr = ["ddd","8fj","rrr"];

/*
push(元素1,元素2,...)方法
可以在数组末尾添加一个或多个元素，并返回新数组长度
*/
arr.push("ed","se");
console.log(arr.push("6y"));// 6

/*
concat() 连接两个或多个数组，并返回已连接数组的副本，对原数组无影响，参数可以是数组和元素。

copyWithin() 将数组中的数组元素复制到指定位置或从指定位置复制。

entries() 返回键/值对数组迭代对象。

every()	检查数组中的每个元素是否通过测试。

fill() 用静态值填充数组中的元素。

filter() 使用数组中通过测试的每个元素创建新数组。

find() 返回数组中第一个通过测试的元素的值。

findIndex()	返回数组中通过测试的第一个元素的索引。

forEach() 为每个数组元素调用函数，参数是函数，通常是匿名函数。

from() 从对象创建数组。

includes() 检查数组是否包含指定的元素。

indexOf() 在数组中搜索元素并返回其位置。

isArray() 检查对象是否为数组。

join() 将数组的所有元素连接成一个字符串返回，参数是连接符，不影响原数组。

keys() 返回 Array Iteration 对象，包含原始数组的键。

lastIndexOf() 在数组中搜索元素，从末尾开始，并返回其位置。

map() 使用为每个数组元素调用函数的结果创建新数组。

pop() 删除数组的最后一个元素，并返回该元素。

push() 将新元素添加到数组的末尾，并返回新的长度。

reduce() 将数组的值减为单个值（从左到右）。

reduceRight() 将数组的值减为单个值（从右到左）。

reverse() 反转数组中元素的顺序。

shift()	删除数组的第一个元素，并返回该元素。

slice()	选择数组的一部分，并返回新数组。

some() 检查数组中的任何元素是否通过测试。

splice() 从数组中添加/删除元素。

toString() 将数组转换为字符串，并返回结果。

unshift() 将新元素添加到数组的开头，并返回新的长度。

valueOf() 返回数组的原始值。

sort() 对数组的元素进行排序，影响原数组，按照Unicode编码排序，即首字母排序，对数字排序会产生错误。
*/

//sort()方法，按照Unicode编码排序，即首字母排序，对数字排序会产生错误。
/*
我们可以目己来指定排序的规则：
	我们可以在sort ( )添加一个回调函数，来指定排序规则，
回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数使用哪个元素调用不确定，但是肯定的是在数组中a一定在b前边。
-浏览器会根据回调函数的返回值来决定元素的顺序，
	如果返回一个大于0的值，则元素会交换位置；
	如果返回一个小于0的值，则元素位置不变；
	如果返回一个日，则认为两个元素相导，也不交换位置。

	如果需要升序排列，则返回a-b；
	如果需要降序排列，则返回b-a。


*/

var arr2 = [1,2,5,7,3,4,0,2,5];
arr2.sort(function(a,b){
     return a-b;   
});
```

### 20.数组 forEach() 方法

除了 `for` 循环遍历数组，还可以是 `forEach()` 方法，IE8及以下浏览器不支持，要兼容就用 for 循环遍历。

该方法的参数是函数，通常是匿名函数：

```js
var arr = [19,'ggg',true,null,undefined,1.9];

arr.forEach(function(){
    cosole.log("hhh");
});
/*
数组中有几个元素函数就会执行几次，每次执行时，浏览器会将遍历到的元素，以实参的形式传递进来，我们可以来定义形参，来读取这些内容
*/
arr.forEach(function(e){
   cosole.log(e);//19,'ggg',true,null,undefined,1.9
});
```

由我们创建但是不由我们调用的函数，称为回调函数，浏览器调用，如上面 `forEach` 方法的参数。

浏览器会在此回调函数 `function(e){cosole.log(e);}` 中传递三个参数：

- 第一个参数，就是当前正在遍历的元素；
- 第二个参数，就是当前正在遍历的元素的索引(下标)；
- 第三个参数，就是当前遍历的数组。

```js
var arr = ["猪八戒", "孙悟空", "沙悟净", "唐僧"];

arr.forEach(function(value, index, arr){
  
    console.log(value);//输出元素
  
    console.log(index);//输出元素索引
  
    console.log(arr);//输出整个数组
});
```

### 21.数组 slice 和 splice 方法

```js
var arr = ["猪八戒", "孙悟空", "沙悟净", "唐僧"];

/*
arr.slice(startIndex, endIndex) 截取选定区间的数组返回，该方法不会改变原数组，将截取到的数组封装到新数组中返回。
参数：
	- startIndex 开始位置，截取包含开始位置
	- endIndex 结束位置，截取不包含结束位置，可选
	-arr.slice(startIndex);截取startIndex---arr.length-1
	-参数也可以是负值，-1倒数第一，-2倒数第二...
*/

var arr2 = [];
arr2 = arr.slice(0,3);
console.log(arr2);//["猪八戒", "孙悟空", "沙悟净"]

/*
arr.splice(参数1, 参数2, 参数3, 参数4,...)将选定区间的数组删除，并将删除的元素封装成数组返回，还可以添加新元素，该方法会影响原数组。
参数（和slice有区别）：
	- 参数1 开始位置，删除包含开始位置
	- 参数2 删除元素的个数
	- 参数3及以后 新元素位置，新元素自动从开始位置索引逐个插入
当参数2为0，只插入新元素，从参数1位置开始插入，splice(index,0,Elem1,...);

当没有插入新元素，删除元素留下的空白位置会被后面的元素补上。
*/
arr.splice(0,1);
console.log(arr);//["孙悟空", "沙悟净", "唐僧"] 数组连续

arr.splice(0,0,"eo",'55',"0i");
console.log(arr);//["eo",'55',"0i", "沙悟净", "唐僧"]
```

### 22.数组去重

```js
//for暴力求解
function removeDuplicateElements (arr){
	for(var i=0 ; i<arr.length ; i++){
        //i及前面的元素已经去重
        for(var j=i+1; j<arr.length; j++){
            if(arr[j] == arr[i]){
                /*
                删除当前元素之后，后面的元素会向前移动使数组连续，
                但是j++指向被删除元素的后一个位置，会忽略被删除元素位置上的元素，
                所以要j--。
                */
                arr.splice(j--,1);
            }
        }
    }
    console.log(arr);
}
//时间复杂度 O(n²) 
```

### 23.函数对象的 call 和 apply 方法

call 和 apply 方法由函数对象调用。

````javascript
function fun(){
    alert("hello");
}

//1.当函数调用 call() 和 apply() 方法，都会调用函数执行，即函数会执行
fun();      //hello
fun.call(); //hello
fun.apply();//hello

//2.在调用call()和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this 

var name = "window";
function fun2(){
    alert(this.name);
}
var obj = {name:"obj"};
var obj2 = {name:"obj2"};
fun2();          //window
fun2.call(obj);  //obj
fun2.apply(obj2);//obj2

/*
3.区别：
- call()方法可以将实参在对象之后依次传递给调用它的函数
- apply()方法需要将实参封装到一个数组中统一传递给函数
*/
function fun3(a,b){ 
    alert("a = "+a+"   b = "+b);
}
fun3.call(obj,2,9);  //a = 2   b = 9
fun3.apply(obj,[3,1]);//a = 3   b = 1
````

### 24.this的情况总结

根据函数的**调用方式**的不同，this会指向不同的**对象**：

- 以函数形式调用时，this永远都是`window`
- 以方法形式调用时，this就是调用方法的对象
- 以构造函数的形式调用时，this 就是新创建的那个对象
- **使用call和apply调用时，this是指定的那个对象** ，见 23.2
- 给对象绑定事件函数，this 指向该对象

### 25.arguments

在调用函数时，浏览器每次都会传递进两个隐含的参数：

```
1.函数的上下文对象this
```

```
2.封装实参的对象arguments
```

arguments是个类数组对象，但不是数组对象，但也可以通过索引操作数据，也可以获取长度 。

在调用函数时，我们所传递的实参都会在 arguments 中保存，arguments.length 可以获取实参的长度。

```js
function fun(){
    console.log(arguments.length);
}
fun("ed", 0, 9, 2);//4
```

即使不定义形参，也可以通过 arguments 来使用实参，只不过比较麻烦，argument[0]第一个实参…

```js
function fun(){
    console.log(arguments[2]);
}
fun("ed", 0, 9, 2);//9
```

arguments 有一个属性 callee ，其对应一个函数对象，就是当前正在指向的函数对象。

```js
function fun(){
    console.log(arguments.callee == fun);
}
fun("ed", 0, 9, 2);//true
```

### 26.Date 对象

```javascript
var d = new Date();
console.log(d);//当前时间

//指定时间
var d2 = new Date(12/03/2021 10:08:07);
//日期格式  月/日/年 时:分:秒

//Date方法详见w3school手册

/*
getTime()
-获取当前日期对象的时间戳
-时间戳,指的是从格林威治标准时间的1970年1月1日，0时0分0秒到当前日期所花费的毫秒数（1s= 1000ms)
-计算机底层在保存时间时使用都是时间戳
*/
var d3 = new Date( "1/1/197e e:e:6");
time = d3.getTime();
console.log(time);//-28800000
//这是中文系统，用的是北京时间和起点有时差

//利用时间戳来测试代码的执行的性能
//获取当前的时间戳
var start = Date.now();
for(var i=e ; i<100 ; i++){
	console.log(i);
}
var end = Date.now();
console. log("执行了:"+(end - start)+"毫秒");//2ms
```

### 27.Math 对象

```js
/*
Math 不是构造函数
Math.PI 圆周率
Math.ceil(x) 向上取整
Math.floor(x) 向下取整
Math.round(x) 四舍五入
Math.round() 生成0-1，不包含0、1，随机数
Math.round()*x 生成0-x随机数
Math.max(x,y,z,...) 取最大值
Math.min(x,y,z,...) 取最小值
Math.pow(x,y) x的y次幂
Math.sqrt(x) 开方
*/

```

### 28.包装类

基本数据类型
String Number Boolean Null Undefined

引用数据类型
Object

```
在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象。
```

String()可以将基本数据类型字符串转换为String对象

Number()可以将基本数据类型的数字转换为Number对象

Boolean()可以将基本数据类型的布尔值转换为Boolean对象

对象可以添加属性，功能强大。

但是注意：我们在实际应用中不会使用基本数据类型的对象，
如果使用基本数据类型的对象,在做一些比较时可能会带来一些不可预期的结果。

方法和属性之能添加给对象,不能添加给基本数据类型当我们对一些基本数据类型的值去调用属性和方法时，浏览器会**临时**使用包装类将其转换为对象,然后在调用对象的属性和方法，调用完以后,在将其转换为基本数据类型。

```js
var str = 123;
var str2 = str.toString(); 
console.log(str2);//"123",string类型
console.log(typeof str2);//string

str2.hello = "nin";//转为String对象再添加属性

console.log(str2.hello);//undefined
//上面str2临时转为String对象，添加属性后又销毁，str2.hello又要转为对象，两次的hello属性不同。
```

---

### 29.字符串方法

在底层字符串以字符数组形式保存，有length属性。

```js
var str = "dheskfickx dk";
/*
str.charAt(index);返回字符串中指定位置（索引）的字符

str.charCodeAt(index);返回指定位置字符的Unicode编码

String.formCharCode(Unicode);根据字符编码获取字符，String对象调用

str.concat(str2,str3,...);连接字符串，作用和“+”号一样

str.indexOf();字符串是否有指定内容，如果字符串中含有该内容，则会返回其第一次出现的索引。如果没有找到指定的内容，则返回-1。可以指定一个第二个参数，指定开始查找的位置。

str.lastIndexOf();该方法的用法和indexOf()一样,不同的是indexOf是从前往后找,而lastIndexOf是从后往前找。也可以指定开始查找位置。

str.slice(startIndex,endIndex);和数组的slice方法一样，可以从字符串中截取指定的内容，不影响原字符串。

str.substring();可以用来截取一个字符串，不影响原字符串，可以slice()类似,参数:第一个:开始截取位置的索引(包括开始位置),第二个:结束位置的索引(不包括结束位置)。不同的是这个方法不能接受负值作为参数，如果传递了一个负值，则默认使用0，而且他还自动调整参数的位置，如果第二个参数小于第一个，则自动交换。

str.split(str2);可以将一个字符串拆分为一个数组,参数:
需要一个字符串作为参数，将会根据该字符串去拆分字符串。如果 str2 == "" ，则将每个元素拆分。

str.toUpperCase()将一个字符串转换为大写并返回

str.toLowerCase()将一个字符串转换为小写并返回
*/
```

---

### 29.正则表达式

```js
//创建正则表达式，语法：
var reg = new RegExp("正则表达式","匹配模式");//两个参数
var reg = new RegExp("正则表达式");//一个参数

/*
正则表达式的方法:test()
使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，如果符合则返回true，否则返回false
*/

var reg2 = new RegExp("a");//创建正则表达式
var str = "a";
var result = reg.test(str);//true

/*
在构造函数中可以传递一个匹配模式作为第二个参数,
可以是: "i" 忽略大小写; "g" 全局匹配模式。
*/
var reg3 = new RegExp("a","i");//创建正则表达式
```

```javascript
/*
使用字面量来创建正则表达式
语法: var 变量 = /正则表达式/匹配模式
*/
var reg = /a/i;

/*
 | == 或
[] == 里面的内容也是或，[abcd] == a|b|c|d
[a-z] 任意小写字母，[A-Z] 任意大写字母
[A-z] 任意字母
a[abc]d == aad|abd|acd
[^ab] 除了ab
[0-9] 任意数字
[^0-9] 除了数字
*/
```

---

### 30.字符串和正则相关的方法

````js
/*
slpit()
 - 可以将字符串拆成一个数组
 - 方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串，更加灵活
 - str.split(/[A-z]/)根据任意字母将字符串拆分
 - 即使不指定全局模式也会全部拆分
*/
var str = "2he4jsjn5ndk9";
var result = str.split(/[A-z]/);//以字母为分割点
console.log(result);//[2,'',4,'','','',5,'','',9]
````

```js
/*
search()
 - 可以搜索字符串中是否含有指定内容
 - 如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
 - 它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串
 - 只会查找到第一个，即使全局模式
*/
var str = "hello abc hello aec afc" ;
//搜索字符串中是否含有abc或aec或afc
result = str.search(/a[bef]c/);
console. log(result);//6
```

```js
/*
match()
 - 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来，提第一个符合的
 - 默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索，我们可以设置正则表达式为全局匹配模式（g），这样就会匹配到所有的内容
 - match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果
*/
str = "1a2b3c4d5e6f7";
result = str.match(/[A-z]/g);//全局匹配
console.log(result);//[a,b,c,d,e];

str = "1a2b3c4d5e6f7B4dG";
result = str.match(/[A-z]/gi);//全局匹配，忽略大小写,gi/ig
console.log(result);//[a,b,c,d,e,B,d,G];

console.log(Array.isArray(result));//true
```

```javascript
/*
replace()
 - 可以将字符串中指定内容替换为新的内容，并返回新字符串，不影响原字符串
 - 参数:1.被替换的内容 2.新的内容
 - 默认替换第一个
*/
var str = "abc";
var result = str.replace("a","OOO");
console.log(result);//OOObc

//全部替换，不区分大小写
var result = str.replace(/a/gi,"OOO");

//全部删除，不区分大小写
var result = str.replace(/a/gi,"");
```

---

### 31.正则表达式语法

```js
/*
量词
 - 通过量词可以设置一个内容连续出现的次数
 - {n}正好出现n次，reg = /a{n}/a连续出现n次
 - 量词只对它前边的一个内容起作用,/ab{8}/ 只对b起作用，可以用括号把ab括起来就对ab起作用
 - {m,n} 出现m-n次
 - {m, } 出现m次以上
 - a+ == {1, }  a至少出现一次
 - a* == {0, }  0以上
 - a? == {0,1}  0-1个
*/
var str2 = "aaba";
var reg = /a{3}/;
console.log(reg.test(str2));//false
console.log(reg.test("aaabd"));//true

var reg2 = /(ab){1}/;
console.log(reg2.test("aaabd"));//true
```

```js
/*
检查一个字符串是否以a开头
 - ^a  以a开头，和[^a]不一样
 - a$  以a结尾
 - ^a$ 字符串只能是a
 - ^a|a$ a开头或a结尾
*/

/*
检查手机号
1.以1开头
2.第二位3-9任意数字
3.三位以后任意数字9个
*/
var phReg = /^1[3-9][0-9]{9}$/;
//错误写法
var phReg = /1[3-9][0-9]{9}/;
```

```js
/*
检查一个字符串中是否含有.
 - .表示任意字符
 - 在正则表达式中使用\作为转义字符 
 - \．来表示.
 - \\表示\
注意:使用构造函数时，由于它的参数是一个字符串，而\是字符串中转义字符，如果要使用\则需要使用\\来代替
*/
var reg = /\./; //一个斜杆
var reg2 = new RegExp("\\.");//两个斜杆
```

```js
/*
/\w/  任意字母、数字、_ <=> [A-z0-9_]
/\W/  除了字母、数字、_ <=> [^A-z0-9_]
/\d/  任意数字 <=> [0-9]
/\D/  除了数字 <=> [^0-9]
/\s/  空格
/\S/  除了空格
/\b/  单词边界
/\B/  除了单词边界
*/

//检查字符串是否有child
var reg = /\bchild\b/;//独立的单词
console.log(reg.test("hello child"));
```

```js
//去除字符串中前后的空格，用""替换空格
var str = "   x     xjxjk   ";
var str2 = str.replace(/\s/g,"");//字符串中间的空格也没了
console.log(str2);//xxjxjk


var str3 = str.replace(/^\s*/,"");//去除开头多个空格
console.log(str3);//x     xjxjk   ,

var str4 = str.replace(/\s*$/,"");//去除末尾多个空格
console.log(str3);//   x     xjxjk

var str5 = str.replace(/\s*$|^\s*/g,"");//+g去除开头末尾多个空格
console.log(str5);//xxjxjk
```

```js
/*
邮件正则
电子邮件
hello .nihao@abc.com. cn
任意字母数字下划线.任意字母数字下划线@任意字母数字.任意字母（2-5位).任意字母（2-5位)
*/
var emailReg = /^\w{3,}(\.[\w_])*@[A-z0-9]+\.[A-z]{2,5}(\.[A-z]{2,5}){1,2}$/;
```

---

### 32.DOM

**DOM**，文档对象模型，JS用来操作网页的。

文档：文档表示的就是整个的HTML网页文档 。

对象：对象表示将网页中的每一个部分都转换为了一个对象。

模型：使用模型来表示对象之间的关系，这样方便我们获取对象。

**节点：**文档节点：整个HTML文档；元素节点:HTML文档中的HTML标签；属性节点∶元素的属性；文本节点：HTML标签中的文本内容。

```html
<p id = "paraId" > this is a par</p>
   |<--属性节点-->|<--文本节点-->|
|<-------------元素节点------------>|
```

浏览器已经为我们提供**文档节点对象（document）**这个对象是 window 属性，可以在页面中直接使用，文档节点代表的是整个网页。

---

### 33.事件

事件绑定方式

```html
//直接绑定
<button id = "btn" onclik="alert("dss")">按钮</button>

<script>
    //与标签分离绑定
    //获取按钮对象
    var btn = document.getElementById( "btn");
    /*
    可以为按钮的对应事件绑定处理函数的形式来响应事件,
    这样当事件被触发时，其对应的函数将会被调用
    */
    //绑定一个单击事件
    //像这种为单击事件绑定的函数，我们称为单击响应函数
    btn.onclick = function(){
        alert("你还点~~~");
    };
</script>
```

---

### 34.文档的加载

浏览器在加载一个页面时，是按照自上向下的顺序加载的。读取到一行就运行一行，如果将script标签写到页面的上边，在代码执行时，页面还没有加载，**页面没有加载DOM对象也没有加载**，会导致无法获取到DOM对象。下面写法是报错的：

```html
<head>
    <script>
        //获取按钮对象
        var btn = document.getElementById( "btn");
        //像这种为单击事件绑定的函数，我们称为单击响应函数
        btn.onclick = function(){
            alert("你还点~~~");
        };
	</script>
</head>
<body>
    <button id = "btn" onclik="alert("dss")">按钮</button>
</body>
```

**script 要写到文档最后**：

```html
<head>

</head>
<body>
    <button id = "btn" onclik="alert("dss")">按钮</button>
  
    <script>
        //获取按钮对象
        var btn = document.getElementById( "btn");
        //绑定单击响应函数
        btn.onclick = function(){
            alert("你还点~~~");
        };
	</script>
</body>
```

如果想把 script 写在文档前面，需要用到 onload 事件，**onload事件会在整个页面加载完成之后才触发**，支持该事件的 JS 对象有 image、layer、window，只能绑定给 window。为window绑定一个onload事

```html
<head>
    <script>
    //文档加载完触发该事件
    window.onload = function(){
        //获取按钮对象
        var btn = document.getElementById( "btn");
        //绑定单击响应函数
        btn.onclick = function(){
            alert("你还点~~~");
        };
    }
	</script>
</head>
<body>
    <button id = "btn" onclik="alert("dss")">按钮</button>
</body>
```

该事件对应的响应函数将会在页面加载完成之后执行，这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了。

**script 写到文档后面网页性能最优。**

---

### 35.DOM查询一

获取元素节点，通过 `document` 对象调用：

`getElementById()` 通过id属性获取**一个**元素节（**id唯一**）点对象；

`getElementsByTagName()`通过**标签名**获取**一组**元素节点对象，会返回类数组对象；

`getElementsByName()`通过**name属性**获取**一组**元素节点对象，会返回类数组对象。

`innerHTML`用于获取元素内部的HTML代码的，对于自结束标签没有HTML代码。innerText 该属性可以获取元素内部的文本内容，它和innerHTML类似，不同的是它会自动将html去除。

如果需要读取元素节点属性,直接使用  `元素.属性名`，class 属性不能采用这种方式 `元素.class`，要这样 `元素.className`。

---

### 36.DOM查询二

获取元素节点的**子节点**，节点包括很多，通过具体的元素节点调用：

`getElementsByTagName()`—方法，返回当前节点的指定标签名后代节点，`document` 的该方法查询范围是整个文档；

`childNodes`—属性，表示当前节点的所有子节点；

`firstChild`—属性，表示当前节点的第一个子节点；

`lastChild`—属性，表示当前节点的最后一个子节点；

调用方法：`tag.getElementsByTagName()，tag.childNodes……`

`childNodes` 属性会获取包括文本节点在内的**所有子节点**，根据DOM标准，**标签间空白也会当成文本节点**。**注意:** 在IE8及以下的浏览器中，不会将空白文本当成子节点。

`children` 属性可以获耳当前元素的所有**子元素**。

---

获取父节点和**兄弟节点**，通过具体的节点调用

parentNode -- 属性，表示当前节点的父**节点**

previousSibling--属性，表示当前节点的前一个兄弟**节点**

nextSibling--属性，表示当前节点的后一个兄弟**节点**

---

### 37.DOM查询三

```js
//给id属性的元素绑定单击响应函数
//将相同操作封装起来
function myClick(idName,fun){
    var btn = document.getElementById(idName);
    btn.onclick = fun ;
}

window.onload = function(){
    //给id = btn1的按钮绑定单击事件，要用到回调函数作为单击响应函数
    myClick("btn1",function(){
        alert("I am btn1");
    });
};
```

```js
//全选练习
function myClick(id,fun){
    //绑定单击响应函数
    var btn = document.getElementById(id);
    btn.onclick = fun ;
}
window.onload = function(){
  
    //给全选按钮添加单击响应函数
    myClick("checkAllBtn",function(){
        //获取name="items"的复选框
        var items = document.getElementsByName("items");
        for(var i=0;i<items.length;i++){
            //选中
            items[i].checked = true;
        }
    });
  
    //给不全选按钮添加单击响应函数
    myClick("checkAllNoBtn",function(){
        //获取name="items"的复选框
        var items = document.getElementsByName("items");
        for(var i=0;i<items.length;i++){
            //不选中
            items[i].checked = false;
        }
    });
  
    //反选
    myClick("checkRevBtn",function(){
        //获取name="items"的复选框
        var items = document.getElementsByName("items");
        for(var i=0;i<items.length;i++){
            //反选
            items[i].checked = !(items[i].checked);
        }
    });
}
```

### 38.DOM查询四

```js
//获取body标签
var body = document.getElementsByTagName( "body")[0];

//在document中有一个属性body，它保存的是body的引用
var body = document.body ;

//document.documentElement保存的是html根标签
var html = document.documentElement;

//document.all代表页面中所有的元素
var all = document.all;
//或者
all = document.getE1ementsByTagName("*");
```

```js
//根据元素的class属性值查询一组元素节点对象,但是该方法不支持IE8及以下的浏览器
var box = document.getElementsByClassName("box");

/*
document.querySelector()
	需要一个选择器的字符串作为参数，可以根据一个CSS选择器来查询一个元素节点对象。
	虽然IE8中没有getElementsByClassName()但是可以使用querySelector()代替。
	使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，那么它只会返回第一个。
*/
var divs = document.querySelector(".box1 div");//找div.box1下的div

/*
document.querySelectorAll()
	该方法和querySelector()用法类似，不同的是它会将符合条件的元素封装到一个数组中返回。
	即使符合条件的元素只有一个,它也会返回数组。
*/

var box1 = document.querySelectorAll(".box1");
```

### 39.DOM增删改

```js
/*
来document.createElement( )可以用于创建一个元素节点对象，它需要一个标签名作为参数，将会根据该标签名创建元素节点对象，并将创建好的对象作为返回值返回
*/
var li = document.createE1ement( "li");

/*
document.createTextNode("string")可以用来创建一个文本节点对象,需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回
*/
var gzText =  document. createTextNode("广州");

//将gzText设置li的子节点
/*
appendChild()
-向一个父节点中添加一个新的子节点
-用法:父节点.appendChild(子节点);
*/
li.appendChild(gzText);

/*
insertBefore( )
-可以在指定的子节点前插入新的子节点
-语法:
	父节点.insertBefore(新节点,旧节点);
*/

/*
replacechild( )
-可以使用指定的子节点替换已有的子节点
-语法:父节点.replaceChild(新节点,旧节点);
*/

/*
removeChild()
-可以删除一个子节点
-语法:父节点.removeChild(子节点);
-常用获取父节点的方法:
	子节点.parentNode.removeChild(子节点);
*/

```

常用获取父节点的方法：`子节点.parentNode.removeChild(子节点);`

```js
//读取元素内部的HTML代码
var e = getElementById("idName");
var result = e.innerHTML;
console.log(result);

/*
使用innerHTML也可以完成DOM的增删改的相关操作
一般我们会两种方式结合使用
*/
//city.innerHTML+= "<li>广州</li>";
//创建一个li
var city = document.getElementById("city");
var li = document.createElement("li");
//向li中设置文本
li.innerHTML = "广州";
//将li添加到city中
city.appendChild(li);

```

### 40.删除表格记录 (练习)

```js
window.onload = function(){
    /*
    点击超链接以后，超链接会跳转页面，这个是超链接的默认行为，但是此时我们不希望出现默认行为，可以通过在响应函数的最后 return false来取消默认行为，或者设置 a 的 href 属性为javascript:;。
    */
    //给每个超链接添加单击响应函数
    var allA = document.getElementsByTagName("a");
    for(var i=0;i<allA.length;i++){
        allA[i].onclick = function(){
            //点击超链接以后需要删除超链接所在的那行
            //这里我们点击那个超链接this就是谁，这相当于给每个a的onclick属性添加方法，点击的时候方法被调用。
            //获取当前tr
        	var tr = this.parentNode.parentNode;
        
            //获取记录名
            var name = getElementsByTagName("td")[0].innerHTML;
        
        	//删除之前弹出一个提示框
        	/*
        	 confirm( )用于弹出一个带有确认和取消按钮的提示框需要一个字符串作为参数，该字符串将会作为提示文字显示出来工*如果用户点击确认则会返回true，如果点击取消则返回false
        	*/
            var flag = confirm("确认删除"+name+ "吗?");
            if(flag){
                //删除tr行
            	tr.parentNode.removechild(tr);
            }
        	return false;
    	};
    }
};

//添加记录...

//修改记录...
```

**注意：上面的 this 不能替换成 allA[i]**，for 循环会在页面加载完成之后立即执行，而响应函数会在超链接被点击时才执行，当响应函数执行时，for 循环早已执行完毕，而此时 i 的值一直是 allA.length 。

### 41.DOM操作CSS

通过JS修改元素的样式：`元素.style.样式名 = 样式值`，样式值是**字符串**。通过 `style` 属性设置和读取的都是**内联样式**，无法读取样式表中的样式 。

```js
/*
	注意:如果CSS的样式名中含有 - ，这种名称在JS中是不合法的比如background-color，需要将这种样式名修改为驼峰命名法，去掉-，然后将-后的首字母大写，如 backgroundColor 。
	我们通过style属性设置的样式都是内联样式，而内联样式有较高的优先级，所以通过JS修改的样式往往会立即显示，但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，所以尽量不要为样式添加 !important 。

*/

var box1 = document.getElementById("box1");
box1.style.width = "100px";
box1.style.backgroundColor = "#bfa";
```

读取元素当前使用的样式：`元素.currentStyle.样式名`，只有IE支持。

```js
//通过 style 无法读取样式表中的样式.
/*
currentStyle 它可以用来读取当前元素正在显示的样式。如果当前元素没有设置该样式，则获取它的默认值。
*/
alert(box1.currentStyle.backgroundColor);//#bfa
```

在其他浏览器中可以使用 getComputedStyle( )这个方法来获取元素**当前显示的样式**。

```js
/*
需要两个参数
	第一个:要获取样式的元素
	第二个:可以传递一个伪元素，一般都传null
该方法会返回一个对象，对象中封装了当前元素对应的样式，样式作为该对象的属性和属性值。可以通过对象.样式名来读取样式。
	如果获取的样式没有设置，则会获取到真实的值，而不是默认值比如:没有设置width，它不会获取到auto，而是一个长度，和currentStyle的一个区别。
*/
var obj = getComputedStyle(box1,null);
alert(obj.width);

```

通过currentStyle和getComputedStyle()读取到的样式都是只读的，不能修改，如果要修改必须通过style属性。

### 42.获取样式兼容性处理

以后处理兼容性也是这个思路。

```js
/*
定义一个函数，用来获取指定元素的当前的样式参数:
    obj要获取样式的元素 
    name要获取的样式名
*/
function getStyle(obj,name){
    //正常浏览器的方式
    //return getComputedStyle(obj,null)[name];//变量引用要用[]
    //IE8的方式
    //return obj.currentStyle[name];

    /*
    //改写
    if(window.getComputedstyle){
        //这里要加window，这是window的属性，不加当成全局变量
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedstyle(obj , nul1)[name];}else{
		//工E8的方式，没有getComputedstyle()方法
         return obj.currentStyle[name];
		}
    */
  
    return window.getComputedStyle?getComputedStyle(obj , null)[name] : obj.currentStyle[name];
}
```

### 43.其他样式相关属性

```js
/*
clientWidth  clientHeight
    -这两个属性可以获取元素的可见宽度和高度
    -这些属性都是不带 px 的，返回都是一个数字，可以直接进行计算
    -会获取元素宽度和高度，包括内容区和内边距
    -这些属性都是只读的，不能修改，只能通过 style 属性修改
*/

/*
offsetWidth offsetHeight
	-获取元素的整个的宽度和高度，包括内容区、内边距和边框，也不带 px
*/

/*
offsetParent
    -可以用来获取当前元素的定位父元素
    -会获取到离当前元素最近的开启了定位 position 的祖先元素（包含块）
    -如果所有的祖先元素都没有开启定位，则返回body
*/

/*
offsetLeft
	-当前元素相对于其定位父元素的水平偏移量
offsetTop
	 -当前元素相对于其定位父元素的垂直偏移量
*/

/*
scrollWidth scrollHeigght
-可以获取元素整个滚动区域的宽度和高度
scrollLeft
-可以获取水平滚动条滚动的距离
scrol1Top
-可以获取垂直滚动条滚动的距离
*/

/*
当满足scrollHeight - sdrollTop == clientHeight 说明垂直滚动条滚动到底了
当满足scrollWidth - scrollLeft == clientWidth说明水平滚动条滚动到底

该功能可以强制让用户阅读
*/
```

练习：强制让用户阅读协议，demo38

```html

当满足scrollHeight - scrollTop == clientHeight 说明垂直滚动条滚动到底了
当满足scrollwidth - scrollLeft == clientWidth说明水平滚动条滚动到底

该功能可以强制让用户阅读
*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #info{
            width:200px;
            height:150px;
            overflow:auto;
            margin:0 auto;
            background-color: #bfa;
            padding: 10px;
        }
        div{
            margin: 10px ;
            text-align: center;

        }
    </style>
    <script>
        window.onload = function(){
            var inputs = document.getElementsByTagName("input");
            var info = document.getElementById("info");
            var btn = document.getElementsByName("btn")[0];
            info.onscroll = function(){
                if(info.scrollHeight-info.scrollTop == info.clientHeight){
                    inputs[0].disabled = false;
                    inputs[1].disabled = false;
                }
            };

            var html = document.getElementsByTagName("body")[0];
            btn.onclick = function(){
                if(inputs[0].checked==true)
                    html.innerHTML = "<p style='font-size:100px;text-align:center'>已完成注册</p>";
                else 
                    alert("请勾选!");
            };

        };
    </script>

</head>
<body>
    <h3><center>欢迎注册</center></h3>
    <p id="info">
        Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.
    </p>
    <div>
        <input type="checkbox" name="同意，继续注册！" disabled="disabled"/>同意，继续注册！
        <input type="button" name="btn" value="注册" disabled="disabled"/>
    </div>

</body>
</html>
```

### 43.事件

当事件的响应函数被触发时，**浏览器每次都会将一个事件对象作为实参传递进响应函数，在事件对象中封装了当前事件相关的一切信息，**比如:鼠标的坐标、键盘哪个按键被按下、鼠标滚轮滚动的方向...，传递一个形参**(就是该事件对象)**可以使用这些信息。

```html
<!--demo39-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #box1{
            border: 1px solid black;
            width: 400px;
            height: 200px;
            margin: 20px auto;
        }
        #box2{
            border: 1px solid black;
            width: 400px;
            height: 50px;
            margin: 10px auto;
            line-height: 50px;
            text-align: center;
        }
    </style>
</head>
<body>
    <script>
        /*
        onmousemove
        -该事件将会在鼠标在元素中移动时被触发
        事件对象
        -当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数，在事件对象中封装了当前事件相关的一切信息，比如:鼠标的坐标  键盘哪个按键被按下  鼠标滚轮滚动的方向...
        */
        window.onload = function(){
            var box1 = document.getElementById("box1");
            var box2 = document.getElementById("box2");
            box1.onmousemove = function(event){
                //clientX可以获取鼠标指针的水平坐标，不包括px
                //cilentY可以获取鼠标指针的垂直坐标，不包括px
                //pageX和pageY可以获取鼠标相对于当前页面的坐标，但是这个两个属性在IE8中不支持，所以如果需要兼容工E8，则不要使用
                //在工E8中，响应函数被触发时，浏览器不会传递事件对象，在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的。window.event.clientX,...
                //处理兼容性
                /*
                if(!event){
                    event = window.event;
                }
                */
                event = event || window.event;
            
                var x = event.clientX;
                var y = event.clientY;
                box2.innerHTML = "x = " + x + " , y = " + y;
            };
        };  
    </script>
  
    <!-- 移动鼠标 -->
    <div id="box1"></div>

    <!-- 显示鼠标坐标 -->
    <div id="box2"></div>
</body>
</html>
```

事件对象的属性

```js

```

### 44.事件冒泡

所谓的冒泡（Bubble）指的就是事件的向上传导，当**后代元素**上的事件被触发时，其**祖先元素**的**相同事件**也会被触发，反之则不然。

```js
//box2是box1的子元素
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box1");

box1.onclick = function(){
    alert("我是box1");
};
box2.onclick = function(){
    alert("我是box2");
};
//点击box2时box1的点击事件也会触发，往上传递
```

在开发中大部分情况冒泡都是**有用**的，如果不希望发生事件冒泡可以通过**事件对象**来取消冒泡。可以将**事件对象**的cancelBubble设置为true，即可取消冒泡。

```js
box2.onclick = function(event){
    event = event|| window.event;
    alert("我是box2");
    //取消冒泡
    event.cancelBubble = true;
};
```

### 45.事件的委派

事件的委派，指将事件统一绑定给元素的**共同的祖先元素**，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。

事件委派是利用了**事件的冒泡**，通过委派可以减少事件绑定的次数，提高程序的性能

```html
<script>
    window.onload = function(){
        //添加新链接
        var ul = document.getElementsByTagName("ul")[0];
        var btn = document.getElementById("btn");
        btn.onclick = function(){
        
            var li = document.createElement("li");
            li.innerHTML = "<a href = 'javascript:;'class = 'link'>新链接</a>";
            ul.appendChild(li);
        };
  
        /*
        为每一个超链接都绑定一个单击响应函数
		这里我们为每一个超链接都绑定了一个单击响应函数，这种操作比较麻烦，而且这些操作只能为已有的超链接设置事件，而新添加的超链接必须重新绑定
        */
        //获取所有的a
        var allA = document.getElementsByTagName( "a");
        //遍历
        /*
        for(var i=0 ; i<allA.length ; i++){
            allA[i].onclick = function(){
            	alert("我是a的单击响应函数!!!");
        	};
        }
		*/
    	/*
		*我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加白
		我们可以尝试将其绑定给元素的共同的祖先元素
		*/
         ul.onclick = function(event){
         
             //如果触发事件的对象是我们期望的元素，则执行否则不执行，通过事件对象处理
             event = event || window.event;
             /*
             target，event中的target表示的触发事件的对象
             */
             if(event.target.className == "link" ){
				alert("我是ul的单击响应函数");
			}
             //alert("我是a的单击响应函数!!!");
         };
   };
</script>

<ul>
    <li><a href = "javascript:;"class = "uu">超链接一</a></li>
    <li><a href = "javascript:;"class = "link">超链接一</a></li>
    <li><a href = "javascript:;"class = "link">超链接二</a></li>
    <li><a href = "javascript:;"class = "link">超链接三</a></li>
    <li><a href = "javascript:;"class = "link">超链接四</a></li>
    <li><a href = "javascript:;"class = "link">超链接五</a></li>
</ul>
<button id = "btn">添加超链接</button>
```

### 46.事件的绑定

使用对象.事件=函数的形式绑定响应函数，它只能同时为一个元素的一个事件绑定一个响应函数,不能绑定多个，如果绑定了多个，则**后边会覆盖掉前边**的。**addEventListener()，通过这个方法也可以为元素绑定响应函数。**使用addEventListener()可以同时为一个元素的**相同事件同时绑定多个响应函数**。

```js
var btn = document.getElementById("btn");
/*
btn.onclick = function(){
    alert(1);
};
//会覆盖第一个响应函数
btn.onclick = function(){
    alert(2);
};
*/
/*
addEventListener()通过这个方法也可以为元素绑定响应函数
参数:
    1.事件的字符串，不要加 on ，如onclick -> click
    2.回调函数，当事件触发时该函数会被调用
    3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false
使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，这样当事件被触发时，响应函数将会按照函数的绑定顺序执行。

这个方法不支持工E8及以下的浏览器。
*/
btn.addEventListener("click" ,function(){
	alert(1);
},false);
btn.addEventListener("click" ,function(){
	alert(2);
},false);
btn.addEventListener("click" ,function(){
	alert(3);
},false);

/*
attachEvent( )
在IE8及以下可以使用attachEvent()来绑定事件
参数：
    1.事件的字符串，要加 on
    2.回调函数
这个方法也可以同时为一个事件绑定多个处理函数，不同的是它是后绑定先执行，执行顺序和addEventListener()相反
*/
btn.attachEvent("onclick",function(){
    alert("4");
})

//定义一个函数，用来为指定元素绑定响应函数
/*
addEventListener()中的this，是绑定事件的对象attachEvent()中的this，是window
要在 这两个方法 使用this时，需要统一两个方法this
*/
/*
bind函数的参数:
    obj 要绑定事件的对象
    eventStr 事件的字符串（不要on）
    callback 回调函数
*/

function bind(obj,eventStr,callback){
    if(obj.addEventListener){
		//大部分浏览器兼容的方式
		obj.addEventListener(eventStr,callback, false);
    }else{
		//IE8及以下
         //this是谁,由调用方式决定,callback.call(obj)
		obj.attachEvent( "on"+ eventStr,function(){
            //在匿名函数中调用回调函数
            //当函数调用 call() 和 apply() 方法，都会调用函数执行，即函数会执行，见23.
            callback.call(obj);
         });
	}

}

//绑定事件
bind(btn,"click",function(){
    alert(this);//所有浏览器都是button对象了
});
```

> **回调函数**

被传递给另一个函数作为参数的函数叫作回调函数。

```js
function fun(callback){
    callback();
}
fun(function(){
    alert(this); //window
});
```

### 47.事件的传播

关于事件的传播网景公司和微软公司有不同的理解：

微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。

网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后在向内传播给后代元素。

W3C综合了两个公司的方案，将事件传播分成了三个阶段：

1.捕获阶段，在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件

2.目标阶段，事件捕获到目标元素,捕获结束开始在目标元素上触发事件

3.冒泡阶段，事件从目柯元素向他的祖先元素传递，依次触发祖先元素上的事件

**如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true。**一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false。

IE8及以下的浏览器中没有捕获阶段。

### 48.拖拽

```html
<style>
#box{
     width: 100px;
     height: 100px;
     position: absolute;
     background-color: #bfa;
     left: 0;
     top: 0;
}
</style>
<body>
    <div id="box"></div>
</body>
```

拖拽一

```js
window.onload = function(){
    /*
    拖拽box元素-拖拽的流程
	1.当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
	2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
	3.当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
	*/
    var box = document.getElementById("box");
    box.onmousedown = function(){
        document.onmousemove = function(event){
            event = event||window.event;
            box.style.left = event.clientX + "px";
            box.style.top = event.clientY + "px";
            document.onmouseup = function(){
                document.onmousemove = null;
                box.onmouseup = null;
            };
        };
    };
};
```

拖拽二，上面鼠标只能在固定在左上角，下面鼠标固定在用户点击的地方

```js
window.onload = function(){
    var box = document.getElementById("box");
    //封装
    function drag(obj){
        /*
        拖拽box元素-拖拽的流程
        1.当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
        2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
        3.当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
        */
        obj.onmousedown = function(event){

            //当调用一个元素的setCapture()方法以后，这个元素将会把下一次所有的鼠标按下相关的事件捕获到自身上
            //设置box捕获所有鼠标按下的事件，IE8支持，解决兼容性
            obj.setCapture && box.setCapture();
            event = event || window.event;
            // div的偏移量 鼠标.clientx -元素.offsetLeft
            // div的偏移量 鼠标.clientY -元素.offsetTop
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;
            document.onmousemove = function(event){
                event = event||window.event;
                obj.style.left = event.clientX - ol + "px";
                obj.style.top = event.clientY - ot + "px";

            };
            document.onmouseup = function(){
                document.onmousemove = null;
                obj.onmouseup = null;

                //当鼠标松开时，取消对事件的捕获
                obj.setCapture && obj.releaseCapture();
            };
            /*
            当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，此时会导致拖拽功能的异常，这个是浏览器提供的默认行为。
            如果不希望发生这个行为，则可以通过return false来取消默认行为。但对IE8不起作用，IE8要用setCapture()方法解决。
            */
            return false;
        };
    }
    //给box绑定拖拽
    drag(box);
};
```

### 49.&& 和 || 短路运算符

> && 运算

JS中的“与”属于短路的与，如果第一个值false，则不会看第二个值。

```js
//第一个值为false，不会检查第二个值
false && alert("dd");//没有弹窗

//第一个值为true，会检查第二个值
true && alert("gg");//gg
```

如果逻辑与运算符左边的值布尔转换后为true，那么返回右边的值（不管右边的值是真还是假）。

```js
var a = 5 && 6;
console.log(a); //返回的结果为 6
```

如果逻辑与运算符左边的值布尔转换后为false，那么返回左边的值，但是当逻辑与的左边为 null/NaN/undefined ，结果就会得到null/NaN/undefined。

```js
var a = false && 6;
console.log(a); //返回的结果为 false
```

> || 运算

JS中的“或”属于短路的或，如果第一个值false，则不会看第二个值。

```js
//第一个值为false，会检查第二个值
false && alert("dd");//dd

//第一个值为true，不会检查第二个值
true && alert("gg");//没有弹窗
```

如果逻辑或运算符左边的值布尔转换后为false，那么返回右边的值（不管右边的值是真还是假）。

```js
var a = false || 6;
console.log(a); //返回的结果为 6
```

如果逻辑或运算符左边的值布尔转换后为true，那么返回左边的值，如果**两个操作数**都是是null/NaN/undefined,返回null/NaN/undefined。

```js
var a = true || 6;
console.log(a); //返回的结果为 true
```

### 50.鼠标滚轮事件

onmousewheel鼠标滚轮滚动的事件，会在滚轮滚动时触发，但是火狐不支持该属性。在火狐中需要使用DOMMouseScroll来绑定滚动事件，注意该事件需要通过addEventListener( )函数来绑定。

```js
//判断鼠标滚轮滚动的方向
//event.wheelDelta可以获取鼠标滚轮滚动的方向，向上滚120，向下滚–120
//wheelDelta这个值我们不看大小，只看正负。火狐不支持，火狐用event.detail判断，上负下正。
window.onload = function(){
    var b1 = document.getElementById("box1");
    b1.onmousewheel = function(event){
        //向上滚变短，向下变长
        event.wheelDelta > 0 ? b1.style.height = "100px":b1.style.height = "500px";
        return false;
    };
    /*
    当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，这是浏览器的默认行为，如果不希望发生，则可以取消默认行为
return false
    */
    /*
    使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false需要使用event来取消默认行为event.preventDefault()
但是IE8不支持event.preventDefault();这个玩意，如果直接调用会报错
    */
};
```

### 51.键盘事件

```js
window.onload = function(){
  	/*
  	键盘事件:
		1.onkeydown 按键被按下，对于onkeydown来说如果一直按着某个按键不松手，则事件会—直触发。当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，其他的会非常的快，这种设计是为了防止误操作的发生。
		2.onkeyup按键被松开，松开一次触发一次。
	键盘事件—般都会绑定给一些可以获取到焦点的对象或者是document
  	*/  
    /*
    可以通过 event.keycode 来获取按键的编码，通过它可以判断哪个按键被按下
    */
    /*
    除了keycode，事件对象中还提供了几个属性altKey 
ctrlKey shiftKey这个三个用来判断alt ctrl 和shift是否被按下，如果按下则返回true，否则返回false
    */
    //获取input
    var input = document.getElementsByTagName( "input")[e];
    input.onkeydown = function(){
        //console.log("按键被按下了");
        //在文本框中输大内容，属于onkeydown的默认行为
        //如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中
        //return false;
    
        event = event || window.event;
        //console.log( event. keycode) ;//数字48 - 57
        //使文本框中不能输入数字
        if(event.keyCode >= 48 && event.keycode <= 57){
            //在文本框中输入内容，属于onkeydown的默认行为
            //如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中
            return false;
        }
    };
};
```

### 52.键盘移动div

```js
//使div可以根据不同的方向键向不同的方向移动
//按左键，div向左移;按右键，div向右移;...
window.onload = function(){
    //移动速度
    var sp = 10;
    var box1 = document.getElementById("box1");
    //绑定按键事件
    document.onkeydown = function(event){
    event = event || window.event;
    switch(event.keyCode) {
        case 37:
                box1.style.left = box1.offsetLeft - sp + "px";break;
        case 39:
                box1.style.left = box1.offsetLeft + sp + "px";break;
        case 38:
                box1.style.top = box1.offsetTop - sp + "px";break;
        case 40:
                box1.style.top = box1.offsetTop + sp + "px";break;
    }
    };
};
```

### 53.BOM

浏览器对象模型，BOM可以使我们通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作

BOM对象：

**window**，代表的是整个浏览器的窗口，同时window也是网页中的**全局对象**。

**navigator**，代表的当前浏览器的信息.，通过该对象可以来识别不同的浏览器。

**location**，代表当前浏览器的地址栏信息，**通过Location可以获取地址栏信息**，或者操作浏览器跳转页面。

**history**，代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页而且该操作只在当次访问时有效。

**screen**，代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息 。

这些BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用。window.history == history.

### 54.Navigator

Navigator，代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器。由于历史原西，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了。

—般我们只会使用userAgent来判断浏览器的信息。userAgent等价浏览器。

userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息.的内容,不同的浏览器会有不同的userAgent。

谷歌：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36

火狐：Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0

```js
//判断 navigator.userAgent 是什么浏览器
var reg1 = /Firefox/i;
var reg2 = /Chrome/i;
var reg3 = /Msie/i;//IE10及以下
//在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了
if(reg1.test(navigator.userAgent)){
    console.log("Firefox");
}else if(reg2.test(navigator.userAgent)){
    console.log("Chrome");
}if(reg3.test(navigator.userAgent)){
    console.log("IE");
}
```

如果通过UserAgent不能判断，还可以通过一些浏览器中特有的对象，来判断浏览器的信息，比如:ActiveXObject只有IE有。

```js
//判断IE,IE11不支持这样判断
alert(window.ActiveXObject ? "i am IE.":"i am not IE.");

//兼容处理
alert("ActiveXObject" in window ? "i am IE.":"i am not IE.");
```

### 55.History

history对象可以用来操作浏览器向前或向后翻页。

length属性，可以获取到当成访问的链接数量。back()方法可以用来回退到上一个页面，作用和浏览器的回退按钮一样。forward()方法可以跳转下一个页面，作用和浏览器的前进按钮—样。

```js
window.onload = function(){
  	var btn01 = document.getElementById("btn01");
    var btn02 = document.getElementById("btn02");
    //点击按钮回到上一页
    btn01.onclick = function(){
        history.back();
    };
    //点击按钮跳到下一页
    btn02.onclick = function(){
        history.forward();
    };
};
```

go()方法可以用来跳转到指定的页面，它需要一个整数作为参数，1∶表示向前跳转─个页面，相当于forward ( )；2∶表示向前跳转两个页面；-1∶表示向后跳转一个页面；-2∶表示向后跳转两个页面。

```js
btn02.onclick = function(){
	//回退两个页面
     history.go(-2);
};
```

### 56.Location

Location该对象中封装了浏览器的地址栏的信息。

```js
//如果直接打印location，则可以获取到地址栏的信息(当前页面的完整路径)
alert(location);

//如果直接将location属性修改为一个完整的路径，或相对路径则我们页面会自动跳转到该路径，并且会生成历史记录
location = "http://ww.baidu.com";

//assign()用来跳转到其他的页面，作用和直接修改location一样
location.assign("http://www.baidu.com");

//reload()用于重新加载当前页面，作用和刷新按钮一样
location.reload();
//如果在方法中传递一个true，作为参数，则会强新清空缓存刷新页面
location.reload(true);

//replace( )可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，不会生成历史记录，不能使用回退按钮回退
location.reload("http://www.baidu.com");
```

### 57.定时器

JS的程序的执行速度是非常非常快的，如果希望一段程序，可以每间隔一段时间执行一次，可以使用定时调用。

setInterval() 定时调用，可以将一个函数，每隔一段时间执行一次，参数:

1.回调函数，该函数会每隔一段时间被调用一次。

2.每次调用间隔的时间，单位是毫秒ms。

返回值：返回一个Number类型的数据，这个数字用来作为定时器的唯一标识。clearInterval()可以用来关闭一个定时器，方法中需要一个定时器的标识作为参数，这样将关闭标识对应的定时器clearInterval(timer)。

```js
var count = document.getElementById("count");
var num = 1;

//定时器
var timer = setInterval(function(){
    count.innerHTML = num++;
    if(num == 11){
        //11时，关闭定时器
        clearInterval(timer);
    }
},100);

/*
clearInterval()可以接收任意参数，如果参数是一个有效的定时器的标识，则停止对应的定时器如果参数不是一个有效的标识，如null/undefined等，则什么也不做
*/
```

> 图片切换练习

```html
<script>
    window.onload = function(){
        var b1 = document.getElementById("btn01");
        var b2 = document.getElementById("btn02");
        var img = document.getElementById("img");
        var imgArr = ["img/a.jpg","img/b.jpg","img/c.jpg","img/d.jpg","img/e.jpg","img/f.jpg"];
        var i=0;
        var timer;
        /*
        目前，我们每点击一次按钮，就会开启一个定时器，
        点击多次就会开启多个定时器，这就导致图片的切换速度过快，
        并且我们只能关闭最后一次开启的定时器
        */
        b1.onclick = function(){
            //解决办法：在开启定时器之前，需要将当前元素上的其他定时器关闭。
            clearInterval(timer);
            timer = setInterval(function(){
                img.src = imgArr[i++%imgArr.length];
            },1000);
        };
        b2.onclick = function(){
            clearInterval(timer);
        };
    };
</script>
<div style="text-align: center;margin-top: 100px;margin-left: auto;">
    <img id = "img"src="img/a.jpg" alt=""width="600px"/>
</div>
<div style="text-align: center;margin: 20px;">
    <button id="btn01">开始</button>
    <button id="btn02">停止</button>
</div>
```

### 58.延时调用

延时调用一个函数不马上执行，而是隔一段时间以后在执行，而且**只会执行一次**。

延时调用和定时调用的区别，定时调用会执行多次，而**延时调用只会执行一次**。

延时调用和定时调用实际上是可以互相代替的，在开发中可以根据自己需要去选择。

```js
var timer = setTimeout(function(){
	console.log(num++);
}, 3000);
//使用clearTimeout()来关闭一个延时调用
clearTimeout(timer);
```

### 59.类的操作

通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面这样的执行的性能是比较差的，而且这种形式当我们要修改多个样式时，也不太方便。

```js
/*
我希望一行代码，可以同时修改多个样式。
我们可以通过修改元素的class属性来间接的修改样式，
这样一来,我们只需要修改一次，即可同时修改多个样式，
浏览器只需要重新渲染页面一次，性能比较好并且这种方式，
可以使表现和行为进一步的分离。
*/
//修改box的class属性
box.className = "b2";
```

定义一个函数，用来向一个元素中添加指定的class属性值，参数:obj要添加class属性的元素，cn要添加的class名

```js
function addClass(obj, cn){
    //不加空格会连在一起
    obj.className += " "+cn;
};
```

添加前要判断是否存在该类

```js
function hasClass(obj, cn){
	//创建正则
    //注意单词边界
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
};

function addClass(obj, cn){
    //添加前要判断
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }
};
```

删除一个元素中的指定的class属性

```js
function removeClass(obj,cn){
    //创建正则
    var reg = new RegExp("\\b" + cn + "\\b");
    //删除class
    obj.className = obj.className.replace(reg, "");
};
```

toggleClass可以用来切换一个类

```js
//如果元素中具有该类，则删除，如果元素中没有该类，则添加
function toggleClass(obj,cn){
    //判断obj中是否含有cn
    if(hasClass(obj , cn)){
        //有，则删除
        removeClass(obj , cn);
    }else{
        //没有，则添加
        addClass(obj , cn);
	}
};
```

### 60.JSON

JS中的对象只有JS自己认识，其他的语言都不认识。

JSON就是一个**特殊格式的字符串**，这个字符串可以被任意的语言所识别，并且可以转换为任意语言中的对象，SON在开发中主要用来数据的交互。

JSON  :   JavaScript Object Notation  JS对象表示法。JSON和JS对象的格式一样，只不过JSON字符串中的属性名**必须加双引号**。

```js
//创建一个对象
var obj = {"name":"孙悟空", "age": 18, "gender":"男"};

//JSON对象
var obj = '{"name":"孙悟空", "age":18, "gender":"男"}';

//JSON数组
var arr ='[1,2,3, "hello" ,true]';
```

JSON分类：对象{ } ，数组[ ] 。JSON中允许的值：**字符串、数值、布尔值、null、对象、数组。**

```js
var arr2 ='[{"name" :"孙悟空" , "age" :18, "gender" :"男"}, {"name" :"孙悟空" , "age":18, "gender":"男"}]';

var obj2 ='{"arr":[1,2,3]}';
```

将JSON字符串转换为JS中的对象：在JS中，为我们提供了一个工具类，就叫JSON，这个对象可以帮助我们将一个JSON转换为JS对象，也可以将一个JS对象转换成JSON。

```js
/*
json -->js对象
	JSON.parse(),可以将以JSON字符串转换为JS对象，它需要一个JSON字符串作为参数，会将该字符串转换为JS对象并返回。
*/
var obj2 ='{"arr":[1,2,3]}';
console.log(JSON.parse(obj2).arr);//[1,2,3]

var arr ='[1,2,3, "hello" ,true]';
console.log(JSON.parse(arr)[2]);//3

/**
* JS对象---> SONSON .stringify()
* 可以将一个JS对象转换为JSON字符串
* 需要一个js对象作为参数，会返回一个JSON字符串 
**/
var obj = {name:"孙悟空", age:18, gender:"男"};
console.log(JSON.stringify(obj));//{"name":"孙悟空", "age":18, "gender":"男"}

//JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错。

/*
eval()这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回。如果使用eval()执行的字符串中含有{},它会将{}当成是代码块，如果不希望将其当成代码块解析，则需要在字符串前后各加一个()。
*/
/*
eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码，但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患

*/

var str2 ="alert('hello');";
eval(str2);//弹窗

var str = '{"name":"孙悟空", "age":18, "gender":"男"}';
//eval()将执行结果返回
var obj = eval("(" + str + ")");
```

如果需要兼容IE7及以下的JSON操作，则可以通过引入一个外部的js文件来处理。

```html
<!--json2.js在demo/js下-->
<script src="js/json2.js"></script>
<!--在json2.js下创建JSON对象-->
```

### 屏幕提取文字方法：QQ上线，Ctrl + Alt + O
