## Ajax(Asynchronous Javascript + XML)
- 技术的核心是XMLHttpRequest对象,即: XHR。
- 虽然名字中包含XML，但它所指的仅仅是这种无须刷新页面即可从服务器端获取数据的技术，其通信与数据格式无关，并不一定是XML数据。
## XHR的用法
- 使用 XHR对象的时候，要调用的第一个方法是open()，它接受3个参数:
  - 要发送请求的类型，如: get/post
  - 请求的url
  - 是否异步发送请求，这个参数是一个布尔值
    ```javascript
    xhr.open('get', 'example.php', false)
    ```
  - 注意：open()方法的调用并不会真正发送请求，仅仅是启动一个请求以备发送! 另外，只能向同一个域中使用相同端口和协议的URL发送请求，否则，会出现错误。
  - 在执行open()方法之后，必须再调用send()方法，才会真正发起ajax请求。
    ```javascript
    xhr.open('get', 'example.txt', false);
    xhr.send(null);
    ```
- send():
  - 收到响应后，响应的数据会自动填充XHR对象的属性，相关的属性有:
  - responseText: 作为响应主体被返回的文本。
  - responseXML: 如果响应的内容类型是"text/xml"或者"application/xml"，那么这个属性中将保存着包含响应数据的XML DOM文档。
  - status: 响应的HTTP状态
  - statusText: HTTP状态的说明
  - 无论内容类型是什么，响应主体的内容都会保存到responseText属性中，而对于非XML数据而言，responseXML 属性的值将会是null。

  - P.S.收到响应后，一般来说，会先判断 status 是否为200，这是此次请求成功的标志。此时，responseText属性的内容已经就绪，而且在内容类型正确的情况下，responseXML也能够访问了。
  另外，状态码status如果是304，那么表示请求的资源没有被修改，可以直接使用浏览器中的缓存，当然，这样的响应也是有效的。
    ```javascript
    if( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 ){
        alert(xhr.responseText);
    }
    else{
        alert('fail! status:' + xhr.status);
    }
    ```

