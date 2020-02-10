## 基本概念
### 操作符
- 前置递增/递减和后置递增/递减区别：前置递增/递减是发生在语句被求值之前，而后置则是在之后。
  ```javascript
    var age =29;
    var anotherAge = --age + 2;
    alert(age); //29;
    alert(anotherAge);//30;
    var num =29;
    var anotherAge = age-- + 2;//31
  ```
### for-in 语句
- 迭代语句，枚举对象的属性。
  ```javascript
    for (property in expression) statement
  ```
### label + break + continue
- label: 添加标签，以便以后使用。
- break: 跳出当前循环并且执行后面的语句。
- continue: 跳出当前循环并继续下一个循环。

### switch语句
  ```javascript
    switch (expression) {
      case value: statement
        break;
      case value: statement
        break;
      case value: statement
        break;
    }
  ```
### 函数
- return可以不带任何返回值。适用于需要函数停止执行并且不需要返回值的情况下。（返回undefined）


