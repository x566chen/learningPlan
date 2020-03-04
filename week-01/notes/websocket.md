## WebSocket
- 服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
- 其他特点包括：
  - 建立在 TCP 协议之上，服务器端的实现比较容易。
  - 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
  - 数据格式比较轻量，性能开销小，通信高效。
  - 可以发送文本，也可以发送二进制数据。
  - 没有同源限制，客户端可以与任意服务器通信。
  - 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
    - ws://example.com:80/some/path

  ```javascript
  var ws = new WebSocket("wss://echo.websocket.org");

  ws.onopen = function(evt) { 
    console.log("Connection open ..."); 
    ws.send("Hello WebSockets!");
  };

  ws.onmessage = function(evt) {
    console.log( "Received Message: " + evt.data);
    ws.close();
  };

  ws.onclose = function(evt) {
    console.log("Connection closed.");
  };
  ```
## readyState属性
- CONNECTING：值为0，表示正在连接。
- OPEN：值为1，表示连接成功，可以通信了。
- CLOSING：值为2，表示连接正在关闭。
- CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

## webSocket.onopen
- onopen属性，用于指定连接成功后的回调函数。
  ```javascript
  ws.onopen = function () {
    ws.send('Hello Server!');
  }
  ```
- addEventListener方法: 指定多个回调函数
  ```javascript
  ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
  });
  ```
## webSocket.onclose
- 实例对象的onclose属性，用于指定连接关闭后的回调函数。
  ```javascript
  ws.onclose = function(event) {
    var code = event.code;
    var reason = event.reason;
    var wasClean = event.wasClean;
    // handle close event
  };

  ws.addEventListener("close", function(event) {
    var code = event.code;
    var reason = event.reason;
    var wasClean = event.wasClean;
    // handle close event
  });
  ```
## webSocket.onmessage
- 实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。
  ```javascript
  ws.onmessage = function(event) {
    var data = event.data;
    // 处理数据
  };

  ws.addEventListener("message", function(event) {
    var data = event.data;
    // 处理数据
  });
  ```
- 注意，服务器数据可能是文本，也可能是二进制数据（blob对象或Arraybuffer对象）。

  ```javascript
  ws.onmessage = function(event){
    if(typeof event.data === String) {
      console.log("Received data string");
    }

    if(event.data instanceof ArrayBuffer){
      var buffer = event.data;
      console.log("Received arraybuffer");
    }
  }
  ```
- 除了动态判断收到的数据类型，也可以使用binaryType属性，显式指定收到的二进制数据类型。

  ```javascript
  // 收到的是 blob 数据
  ws.binaryType = "blob";
  ws.onmessage = function(e) {
    console.log(e.data.size);
  };

  // 收到的是 ArrayBuffer 数据
  ws.binaryType = "arraybuffer";
  ws.onmessage = function(e) {
    console.log(e.data.byteLength);
  };
  ```
## webSocket.send()
- 实例对象的send()方法用于向服务器发送数据。
- 发送文本的例子。

```javascript
ws.send('your message');
```
- 发送 Blob 对象的例子。

```javascript
var file = document
  .querySelector('input[type="file"]')
  .files[0];
ws.send(file);
```
- 发送 ArrayBuffer 对象的例子。

## webSocket.bufferedAmount
- 实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。

  ```javascript
  var data = new ArrayBuffer(10000000);
  socket.send(data);

  if (socket.bufferedAmount === 0) {
    // 发送完毕
  } else {
    // 发送还没结束
  }
  ```
## webSocket.onerror
- 实例对象的onerror属性，用于指定报错时的回调函数。

  ```javascript
  socket.onerror = function(event) {
    // handle error event
  };
  socket.addEventListener("error", function(event) {
    // handle error event
  });
  ```

