## JSONP的缺点
- JSON只支持get，因为script标签只能使用get请求；
- JSONP需要后端配合返回指定格式的数据。

## 跨域（jsonp，ajax）
- JSONP：ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本，利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码，在src中进行了调用，这样实现了跨域。

## 如何实现跨域
- JSONP：通过动态创建script，再请求一个带参网址实现跨域通信。document.domain + iframe跨域：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。
- location.hash + iframe跨域：a与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。
- window.name + iframe跨域：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。
- postMessage跨域：可以跨域操作的window属性之一。
- CORS：服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求，前后端都需要设置。
- 代理跨域：起一个代理服务器，实现数据的转发

## dom
- 文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标志语言的标准编程接口。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为DOM。

## 关于dom的api
- 节点创建型API，页面修改型API，节点查询型API，节点关系型api，元素属性型api，元素样式型api等