## 引用类型
- object类型:
- 创建object实例的方式有两种.第一种是使用new操作符后跟Object构造函数.
  ```javascript
  varperson = new Object();
  person.name = "Nicholas";
  person.age = 29；
  ```
- 另一种方式是使用对象字面量表示法.
  ```javascript
  var person = {
  name:"Nicholas",
  age:29
  };
  ```
- constructor:
  ```javascript
  function Person(){};
    
    Person.prototype = {
        constructor: Person,     //重设constructor属性
        name: 'Lily',
        age: 17,
        job: 'Teacher',
        sayName: function(){
            alert(this.name);
        }
    }; 
  ```
## 继承
- 1.原型链继承: 利用原型让一个引用类型继承另一个引用类型的属性和方法.
  ```javascript
  A.prototype = new B();
  ```
- 2.借用构造函数继承: 在子类型构造函数的内部调用超类型构造函数,通过 apply()和 call()实现.
  ```javascript
  function Sub(){
    Sup.call(this);　
  }
  ```
- 3.组合继承


