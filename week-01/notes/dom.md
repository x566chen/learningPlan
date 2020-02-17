## DOM + DOM扩展
- DOM是针对HTML和XML文档的一个API(应用程序接口)。
- 文档节点是每个文档的根结点。文档节点只有一个子节点，即&#60;html&#62;元素=文档元素。
- 在HTML中文档元素始终是&#60;html&#62;元素,在XML中,任何元素都可能成为文档元素。

## node级
- DOM1 级定义了一个 Node 接口,该接口将由 DOM 中的所有节点类型实现。

## nodeName 和 nodeValue 属性
- 对于元素节点， nodeName 中保存的始终都是元素的标签名，而 nodeValue 的值则始终为 null 。

## 节点关系
- 每个节点都有一个 childNodes 属性，其中保存着一个 NodeList 对象。 NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。
请注意，虽然可以通过方括号语法来访问 NodeList 的值，而且这个对象也有length 属性，但它并不是 Array 的实例。

- 对 arguments 对象使用 Array.prototype.slice() 方法可以将其转换为数组
  ```javascript
  var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);
  ```
- 每个节点都有一个 parentNode 属性，该属性指向文档树中的父节点。包含在 childNodes 列表中的所有节点都具有相同的父节点，因此它们的 parentNode 属性都指向同一个节点。此外，包含在childNodes 列表中的每个节点相互之间都是同胞节点。通过使用列表中每个节点的 previousSibling和 nextSibling 属性，可以访问同一列表中的其他节点。列表中第一个节点的 previousSibling 属性值为 null ，而列表中最后一个节点的 nextSibling 属性的值同样也为 null.
- 如果列表中只有一个节点，那么该节点的 nextSibling 和 previousSibling 都为 null 。
- normalize()方法: 处理文档树中的文本节点。由于解析器的实现或 DOM 操作等原因，可能会出现文本节点不包含文本，或者接连出现两个文本节点的情况。当在某个节点上调用这个方法时，就会在该节点的后代节点中查找上述两种情况。如果找到了空文本节点，则删除它；如果找到相邻的文本节点，则将它们合并为一个文本节点.

## 文档信息
- 这些属性提供了 document 对象所表现的网页的一些信息
- title:
  ```javascript
  var originalTitle = document.title;
  document.title = "New page title";
  ```
- 网页的请求有关的属性URL 、 domain 和 referrer: URL 属性中包含页面完整的 URL（即地址栏中显示的 URL）， domain 属性中只包含页面的域名，而 referrer属性中则保存着链接到当前页面的那个页面的 URL。
- URL 与 domain 属性是相互关联的。例如，如果 document.URL 等于 http://www.wrox.com/WileyCDA/，那么 document.domain 就等于 www.wrox.com。在这 3 个属性中，只有 domain 是可以设置的。但由于安全方面的限制，也并非可以给 domain 设置任何值。如果 URL 中包含一个子域名，例如 p2p.wrox.com，那么就只能将 domain 设置为 “wrox.com”（URL 中包含 “www” ，如 www.wrox.com 时，也是如此）。不能将这个属性设置为 URL 中不包含的域.

## 查找元素
- Document 类型为此提供了两个方法： getElementById() 和getElementsByTagName()
- 如果页面中多个元素的 ID 值相同， getElementById() 只返回文档中第一次出现的元素。
- getElementsByTagName()：这个方法接受一个参数，即要取得元素的标签名，而返回的是包含零或多个元素的NodeList。
- namedItem()：使用这个方法可以通过元素的 name特性取得集合中的项。
  ```javascript
  /*html
  <img src="myimage.gif" name="myImage">
  */
  var myImage = images.namedItem("myImage");
  //或者
  var myImage = images["myImage"];
  ```
- 要想取得文档中的所有元素，可以向 getElementsByTagName() 中传入 “*” 。在 JavaScript 及 CSS中，星号（ * ）通常表示“全部”.
- HTMLDocument 类型才有的方法，是getElementsByName() 。顾名思义，这个方法会返回带有给定 name 特性的所有元素。

## DOM 一致性检测
- DOM1 级只为 document.implementation 规定了一个方法，即 hasFeature() 。这个方法接受两个参数：要检测的 DOM 功能的名称及版本号。如果浏览器支持给定名称和版本的功能，则该方法返回 true 
  ```javascript
  var hasXmlDom = document.implementation.hasFeature("XML", "1.0");
  ```
## 文档写入
-  write() 、 writeln() 、 open() 和 close() 。其中， write() 和 writeln()方法都接受一个字符串参数，即要写入到输出流中的文本。 write() 会原样写入，而 writeln() 则会在字符串的末尾添加一个换行符（ \n ）。open() 和 close() 分别用于打开和关闭网页的输出流。

## Element元素
- html元素:
  - id ，元素在文档中的唯一标识符。
  - title ，有关元素的附加说明信息，一般通过工具提示条显示出来。
  - lang ，元素内容的语言代码，很少使用。
  - dir ，语言的方向，值为 “ltr” （left-to-right，从左至右）或 “rtl” （right-to-left，从右至左），也很少使用。
  - className ，与元素的 class 特性对应，即为元素指定的CSS类。没有将这个属性命名为 class ，是因为 class 是 ECMAScript 的保留字
- 取得特性:
  - getAttribute()
  - setAttribute()
  - removeAttribute() 

## Text类型
- document.createTextNode():创建新文本节点，这个方法接受一个参数——要插入节点中的文本.
- normalize():
  ```javascript
  var element = document.createElement("div");
  element.className = "message";
  var textNode = document.createTextNode("Hello world!");
  element.appendChild(textNode);
  var anotherTextNode = document.createTextNode("Yippee!");
  element.appendChild(anotherTextNode);
  document.body.appendChild(element);
  alert(element.childNodes.length); //2
  element.normalize();
  alert(element.childNodes.length); //1
  alert(element.firstChild.nodeValue); // "Hello world!Yippee!"
  ```
- splitText() 。这个方法会将一个文本节点分成两个文本节点，即按照指定的位置分割 nodeValue 值(这个方法会返回一个新文本节点，该节点与原节点的parentNode 相同)
  ```javascript
  var element = document.createElement("div");
  element.className = "message";
  var textNode = document.createTextNode("Hello world!");
  element.appendChild(textNode);
  document.body.appendChild(element);
  var newNode = element.firstChild.splitText(5);
  alert(element.firstChild.nodeValue); //"Hello"
  alert(newNode.nodeValue); //" world!"
  alert(element.childNodes.length); //2
  ```
## comment类型
- Comment 类型与 Text 类型继承自相同的基类，因此它拥有除 splitText() 之外的所有字符串操作方法。与 Text 类型相似，也可以通过 nodeValue 或 data 属性来取得注释的内容。
- 没有子节点。

## CDATASection 类型
- CDATASection 类型只针对基于 XML 的文档，表示的是 CDATA 区域。与 Comment 类似，CDATASection 类型继承自 Text 类型，因此拥有除 splitText() 之外的所有字符串操作方法。
  ```javascript
  <div id="myDiv"><![CDATA[This is some content.]]></div>
  ```
## DocumentType 类型
- 在 DOM1 级中， DocumentType 对象不能动态创建，而只能通过解析文档代码的方式来创建。支持它的浏览器会把DocumentType 对象保存在document.doctype 中。DOM1 级 描 述 了DocumentType 对象的3个属性：name、entities和notations。

## DocumentFragment 类型
  ```javascript
  var fragment = document.createDocumentFragment();
  ```
- 文档片段继承了 Node 的所有方法，通常用于执行那些针对文档的 DOM操作。

## Attr 类型
- Attr 对象有 3 个属性:
  - name: 特性名称（与 nodeName 的值相同）
  - value: 特性的值（与 nodeValue 的值相同）
  - specified:是一个布尔值，用以区别特性是在代码中指定的，还是默认的。
## 操作表格
  ```javascript
  var table = document.createElement("table");
  table.border = 1;
  table.width = "100%";
  //创建 tbody
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  // 创建第一行
  tbody.insertRow(0);
  tbody.rows[0].insertCell(0);
  tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
  tbody.rows[0].insertCell(1);
  tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));
  // 创建第二行
  tbody.insertRow(1);
  tbody.rows[1].insertCell(0);
  tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2"));
  tbody.rows[1].insertCell(1);
  tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));
  //将表格添加到文档主体中
  document.body.appendChild(table);
  ```
## NodeList
- 应该尽量减少访问 NodeList 的次数。因为每次访问 NodeList ，都会运行一次基于文档的查询。所以，可以考虑将从 NodeList 中取得的值缓存起来.

## 选择符API
- querySelector() 方法接收一个 CSS 选择符，返回与该模式匹配的第一个元素.
  ```javascript
  //取得 body 元素
  var body = document.querySelector("body");
  //取得 ID 为"myDiv"的元素
  var myDiv = document.querySelector("#myDiv");
  //取得类为"selected"的第一个元素
  var selected = document.querySelector(".selected");
  //取得类为"button"的第一个图像元素
  var img = document.body.querySelector("img.button");
  ```
- querySelectorAll(): 返回的是所有匹配的元素而不仅仅是一个元素。这个方法返回的是一个 NodeList 的实例。
- matchesSelector(): 这个方法接收一个参数，即 CSS 选择符，如果调用元素与该选择符匹配，返回 true ；否则，返回 false.

## 元素遍历
- Element Traversal API 为 DOM 元素添加了以下 5 个属性。
  - childElementCount ：返回子元素（不包括文本节点和注释）的个数。
  - firstElementChild ：指向第一个子元素； firstChild 的元素版。
  - lastElementChild ：指向最后一个子元素； lastChild 的元素版。
  - previousElementSibling ：指向前一个同辈元素； previousSibling 的元素版。
  - nextElementSibling ：指向后一个同辈元素； nextSibling 的元素版。
## HTMLDocument 的变化
- readyState 属性. Document 的 readyState 属性有两个可能的值：
  - loading ，正在加载文档.
  - complete ，已经加载完文档.
- head 属性: 使用 document.head ，否则仍然使用 getElementsByTagName() 方法.
## 自定义数据属性
- HTML5规定可以为元素添加非标准的属性，但要添加前缀 data- ，目的是为元素提供与渲染无关的信息，或者提供语义信息。这些属性可以任意添加、随便命名，只要以 data- 开头即可.
  ```javascript
  <div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
  ```
- 添加了自定义属性之后，可以通过元素的 dataset 属性来访问自定义属性的值。
  ```javascript
  var div = document.getElementById("myDiv");
  //取得自定义属性的值
  var appId = div.dataset.appId;
  var myName = div.dataset.myname;
  //设置值
  div.dataset.appId = 23456;
  div.dataset.myname = "Michael";
  //有没有"myname"值呢？
  if (div.dataset.myname){
  alert("Hello, " + div.dataset.myname);
  }
  ```
- Element Traversal，为 DOM 元素定义了额外的属性，让开发人员能够更方便地从一个元素跳到另一个元素。之所以会出现这个扩展，是因为浏览器处理 DOM 元素间空白符的方式不一样。








