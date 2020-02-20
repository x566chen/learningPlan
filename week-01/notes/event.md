# Events
## 事件冒泡
- 当点击div时，执行顺序如：div->body->html->document
## 事件捕获
- 事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点放到最后.执行顺序与冒泡大致相反
## DOM事件流
- “DOM2级事件”规定事件流包括三个阶段：事件捕获阶段，处于目标阶段和事件冒泡阶段
## 事件处理程序
- 事件就是用户或浏览器自身执行的某种动作，而对应的相应事件的函数就是事件处理程序（或叫事件监听器）
- 添加事件的操作：addEventListiner()
- 删除事件的操作：removeEventListiner()
- 所有DOM都包含这两个方法，并且接受三个参数:
  - 1.要处理的事件名
  - 2.作为事件处理的函数
  - 3.一个布尔值，如果是true，表示在捕获阶段调用处理函数，如果是false，表示在冒泡阶段调用处理函数
  - P.S.而且不像DOM0中的onclick只能绑定一次，DOM2级的时间可以绑定多个

- target、currentTarget、this
  -  在事件处理的程序内部，this始终等于currentTarget，而target则包含事件的实际目标。
    ```javascript
    document.body.onclick = function(event){
      alert(evnet.currentTarget == document.body); //ture
      alert(this == document.body); //ture
      alert(evnet.target == document.getElementById('myBtn')); //ture
    }
    ```
## 事件委托
- 事件委托利用了事件的冒泡，只指定了一个事件处理程序，来管理某一类型的所有事件。
  ```javascript
  <ul id="myLinks">
      <li id='goSomewhere'>go somewhere</li>
      <li id='goSomething'>go something</li>
      <li id='sayHi'>say hi</li>
  </ul>
  <script>
      var list = document.getElementById('myLinks');
      list.addEventListiner('click', function(event){
          var target = event.target;
          switch(target){
              case 'goSomeWhere': 
                  alert('gosomeWhere')
                  break;
              case 'goSomething': 
                  alert('goSomething')
                  break;
              case 'sayHi': 
                  alert('sayHi')
                  break;
          }
      },false)
  </script>
  ```

