## typeof 和 instanceof
- typeof 验证基本数据类型
- instanceof 验证引用数据类型

## 引用类型
- 引用类型的值是一个对象，保存在堆内存中
- 复制引用类型的值时复制的是它的指针，最终两个变量指向同一个对象


## 延长作用域链

- try-catch 语句的catch块
- with语句
  这两个语句都在作用域链的前端添加一个变量对象。

```javascript
function build(){
  var qs = "?debug=true";
  with(location){
    var url = href + qs//都为location的属性，如location.href
  }
  return url;
}

```

## 解除引用
- 适用于全局变量，手动设置为null解除。局部变量会在离开局部环境时自动解除。
- 解除不意味着自动回收该值所占的内存，而是让这个值脱离执行环境，以便垃圾收集器下次将其回收。

