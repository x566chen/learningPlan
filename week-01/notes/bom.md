## 全局变量与window变量:
- 在全局声明的变量就是全局变量，可以在window引用，并且成为window的属性和方法。
- 但是全局变量没有delete操作，window属性有。

## 窗口关系和框架:
- top和window、parent、self区别：
  - top对象始终只想最高层的框架，也就是浏览器窗口;
  - window只是指向当前编写代码所在框架。
  - parent对象始终指向当前框架的上层框架
  - self对象它始终指向window
  - 这些对象都是window的属性，所以可以用window.parent和window.top来访问上层和顶层，所以可以连起来访问如window.parent.parent.frames[0]

  ## 用户检测
  - 能力检测的目标不是识别特定的浏览器，而是识别浏览器的能力。在可能的情况下，要尽量使用typeof进行能力检测。在浏览器环境下测试任何对象的某的特性是否存在，要使用下面的函数。

  



