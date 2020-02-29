## 闭包
- 一句话可以概括：闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数的作用域不会被释放。

## 类的创建和继承
- 类的创建（es5）：new一个function，在这个function的prototype里面增加属性和方法。
  ```javascript
  function Animal (name) {
  this.name = name || 'Animal';
  this.sleep = function(){
  console.log(this.name + '正在睡觉！');
  }
  }
  Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
  };
  //这样就生成了一个Animal类，实力化生成对象后，有方法和属性。
  ```
- 类的继承——原型链继承: 原型链继承
  ```javascript
  function Cat(){ }
  Cat.prototype = new Animal();
  Cat.prototype.name = 'cat';
  //　Test Code
  var cat = new Cat();
  console.log(cat.name);
  console.log(cat.eat('fish'));
  console.log(cat.sleep());
  console.log(cat instanceof Animal); //true
  console.log(cat instanceof Cat); //true
  ```
- 介绍: 在这里我们可以看到new了一个空对象,这个空对象指向Animal并且Cat.prototype指向了这个空对象，这种就是基于原型链的继承。
- 特点：基于原型链，既是父类的实例，也是子类的实例
- 缺点：无法实现多继承

- 构造继承：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
  ```javascript
  function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
  }
  // Test Code
  var cat = new Cat();
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // false
  console.log(cat instanceof Cat); // true
  ```
- 特点：可以实现多继承
- 缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法。

- 实例继承和拷贝继承
  - 实例继承：为父类实例添加新特性，作为子类实例返回
  - 拷贝继承：拷贝父类元素上的属性和方法

- 组合继承：相当于构造继承和原型链继承的组合体。通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
  ```javascript
  function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
  }
  Cat.prototype = new Animal();
  Cat.prototype.constructor = Cat;
  // Test Code
  var cat = new Cat();
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // true
  console.log(cat instanceof Cat); // true
  ```
  - 特点：可以继承实例属性/方法，也可以继承原型属性/方法
  - 缺点：调用了两次父类构造函数，生成了两份实例

- 寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性
  ```javascript
  function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
  }
  (function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = Animal.prototype;
  //将实例作为子类的原型
  Cat.prototype = new Super();
  })();
  // Test Code
  var cat = new Cat();
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // true
  console.log(cat instanceof Cat); //true
  ```
## 解决异步回调地狱
- promise、generator、async/await
## 前端中的事件流
- 事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。
  - 事件捕获阶段
  - 处于目标阶段
  - 事件冒泡阶段
- addEventListener：addEventListener 是DOM2 级事件新增的指定事件处理程序的操作，这个方法接收3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。
- IE只支持事件冒泡。
## 如何让事件先冒泡后捕获
- 在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。

## 事件委托
- 简介：事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。
- 举例：最经典的就是ul和li标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加。
- 好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

## 图片的懒加载和预加载
- 预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
- 懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
- 两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
- 懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

## mouseover和mouseenter的区别
- mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout
- mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

## new
- new 操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象。

## clientHeight，offsetHeight，scrollHeight，clientTop，scrollTop
- clientHeight：表示的是可视区域的高度，不包含border和滚动条
- offsetHeight：表示可视区域的高度，包含了border和滚动条
- scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
- clientTop：表示边框border的厚度，在未指定的情况下一般为0
- scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

## 异步加载js的方法
- defer：只支持IE如果您的脚本不会改变文档的内容，可将 defer 属性加入到&#60;script&#62;标签中，以便加快处理文档的速度。因为浏览器知道它将能够安全地读取文档的剩余部分而不用执行脚本，它将推迟对脚本的解释，直到文档已经显示给用户为止。
- async，HTML5属性仅适用于外部脚本，并且如果在IE中，同时存在defer和async，那么defer的优先级比较高，脚本将在页面完成时执行。
创建script标签，插入到DOM中

## Ajax解决浏览器缓存问题
- 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
- 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
- 在URL后面加上一个随机数： "fresh=" + Math.random()。
- 在URL后面加上时间搓："nowtime=" + new Date().getTime()。
- 如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。

##  js的节流和防抖（防抖（Debouncing）和节流（Throttling））
- 防抖技术即是可以把多个顺序地调用合并成一次，也就是在一定时间内，规定事件被触发的次数。
```javascript
// 简单的防抖动函数
function debounce(func, wait, immediate) {
    // 定时器变量
    var timeout;
    return function() {
        // 每次触发 scroll handler 时先清除定时器
        clearTimeout(timeout);
        // 指定 xx ms 后触发真正想进行的操作 handler
        timeout = setTimeout(func, wait);
    };
};
// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
    console.log("Success");
}
// 采用了防抖动
window.addEventListener('scroll',debounce(realFunc,500));
// 没采用防抖动
window.addEventListener('scroll',realFunc);
```


