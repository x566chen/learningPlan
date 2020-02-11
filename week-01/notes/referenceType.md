## Array
- shift能够移除数组的第一个项并返回该项，同时将数组长度减1。
- unshift能够在数组前端添加任意个项并返回新数组的长度并返回新数组的长度。
- slice:
  - 删除，指定两个参数，要删除的第一项的位置和要删除的项数。
  - 插入，三个参数，起始位置，0，要插入的项
  - 替换，三个参数，起始位置，要删除的项数，和要插入的任意数量的项。插入的项数和删除的项数不必相等。
- 迭代方法

  - every 对数组每一项运行给定方法，每一项都是true则返回true
  - filter 对数组每一项运行给定方法，返回true项组成的数组
  - map 对数组每一项运行给定方法，返回函数操作结果组成的数组
  - forEach 对数组每一项运行给定方法，不返回结果。
  - some 对数组每一项运行给定方法，有一项是true则返回true

## function

- this: 引用的是函数据以执行的环境对象.
- caller: 保存着调用当前函数的函数的引用.
- apply, call, bind:
  - 为了改变函数运行时环境的上下文，即this的指向。
    ```javascript
    func.call(this, arg1, arg2);
    func.apply(this, [arg1, arg2])
    ```
  - bind()最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的this值.需要调用这个函数。

## String
- slice(起始位置,最后位置的后一个) 
- substring(起始位置,最后位置的后一个)  
- substr(起始位置,长度) 

## Math
- Math.ceil():向上取值
- Math.round():四舍五入
- Math.floor():向下取值




