## JSON 可以表示三种类型的值:
- 简单值:
  - 表示数值：5  
  - 表示字符串：“hello wrold”注表示字符串时必须使用双引号
- 对象:
  - {“name”:“mi”,”age”:24}
    - 与JavaScript对象有两处不同: 
    - 1.是没有声明变量 
    - 2.是没有末尾的分号json对象中属性必须带引号 
    - 3.对象里的值可以嵌套对象。
- 数组:
 - Json数组表示：[25,”hi”,true]和json对象一样json里也没有分号和变量

## json对象
- 1.Stringify()方法用于把javscript对象序列化为json字符串
  - 语法 var newjson=json.Stringify(需要转换的数据)在转换的的过程中所有的函数原型都会被忽略，值为undefined的属性也会被跳过。

- 2.Stringify()
  - 除了序列化的js对象以外还可以接受两个参数，这两个参数用于指定以不同方式序列化对象，第一个参数是过滤器，可以是一个数组也可以是一个函数，第二个参数是一个选项表示是否在json字符串中保留缩进

- 3.Parse()方法用于把json字符串解析为原生js值；
  - 如果该方法传给的不是有效的json则会抛出错误，Parse()也可以接受另一个参数，该参数是一个函数，该函数接受两个参数，一个是键（属性），一个是值

- 4.toJSON()方法
  - 可以给对像定义tojson()方法让其返回自身的json数据格式。
