# HTTP 协议

## 关于 HTTP 协议（HyperText Transfer Protocol，超文本协议）

HTTP 是客户端浏览器或其他程序与 WEB 服务器之间的应用层通信协议

- HTTP 的头域：通用头、请求头、响应头、和实体头

- 响应消息：

  - 1xx：信息响应类
  - 2xx：成功响应类
  - 3xx：重定向响应类
  - 4xx：客户端错误
  - 5xx：服务端错误

### HTTP 状态码

1. 消息
   > 这一类型的状态码，表示请求已被接受，需要继续处理。这类响应屎临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应
   - 100 Continue
   - 101 Switching Protocols
   - 102 Processing
2. 成功
   > 这一类型的状态码，代表请求已成功被服务器接收、理解、并接受
   - 200 OK （请求成功）
   - 201 Created （请求已经被实现）
   - 202 Accepted （服务器已接受请求，但尚未处理）
   - 203 Non-Authoritative Information （服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝）
   - 204 No Content （服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息）
   - 205 Reset Content （服务器已经成功处理了请求，且没有返回任何内容）
   - 206 Partial Content （服务器已经成功处理了部分 GET 请求）
   - 207 Multi-Status （由 WebDAV(RFC 2518)扩展的状态码，代表之后的消息将是一个 XML 消息，并且可能依照之前的子请求数量的不同，包含一个系列独立的响应代码）
3. 重定向
   > 这类状态码代码需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明
   - 300 Multiple Choices （被请求的资源有一系列可供选择的回馈的信息）
   - 301 Moved Permanently （被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URL 之一）
   - 302 Move Temporarily （请求的资源临时从不同 URL 响应请求）
   - 303 See Other （对应当前请求的响应可以在另一个 URL 上被找到，而且客户端应当采用 GET 的方式访问那个资源）
   - 304 Not Modified （如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码）
   - 305 Use Proxy （被请求的资源必须通过指定的代理才能访问）
   - 306 Switch Proxy （在最新版的规范中不使用）
   - 307 Temporary Redirect （请求的资源临时从不同的 URI 响应请求）
4. 请求错误

   > 这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个 HEAD 请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。

   - 400 Bad Request （1.语义有误，当前请求无法被服务端理解 2.请求参数有误）
   - 401 Unauthorized （当前请求需要用户验证）
   - 402 Payment Required （是为了将来可能的需求而预留的）
   - 403 Forbidden （服务器已经理解请求，但是拒绝执行它）
   - 404 Not Found （请求失败，请求所希望得到的资源未被在服务器发现）
   - 405 Method Not Allowed （请求行中指定的请求方法不能被用于请求相应的资源）
   - 406 Not Acceptable （请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体）
   - 407 Proxy Authentication Required （与 401 响应类似，只不过客户端必须在代理服务器上进行身份验证）
   - 408 Request Timeout （请求超时）
   - 409 Conflict （由于和被请求的资源的当前状态之间存在冲突，请求无法完成）
   - 410 Gone （被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址）
   - 411 Length Require （服务器拒绝在没有定义 Content-length 头的情况下接受请求）
   - 412 Precondition Failed （服务器在验证在请求的头字段中给出先决条件时，没能满足其中一个或多个
   - 413 Request Entity Too Large （服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围）
   - 414 Request-URI Too Long （请求的 URI 长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务）
   - 415 Unsupported Media Type （对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器所支持的格式，因此请求被拒绝）
   - 416 Requested Range Not Satisfiable （如果请求中包含了 Range 请求头，并且 Range 中指定的任何数据范围都与当前资源的可用范围不重合，同时请求中又没有定义 If-Range 请求头，那么服务器就应当返回 416 状态码）
   - 417 Expectation Failed (在请求头 Expect 中指定的预期的内容无法被服务器满足)
   - 418 I'm a teapot
   - 421 Too Many Connections （从当前客户端所在的 IP 地址到服务器的连接数超过了服务器许可的最大范围）
   - 422 Unprocessable Entity （请求格式正确，但是由于含有语义错误，无法响应）
   - 423 Locked （当前资源被锁定）
   - 424 Failed Dependency （由于之前的某个请求发生的错误，导致当前请求失败）
   - 425 Too Early （状态码 425 Too Early 代表服务器不愿意冒风险来处理该请求，原因是处理该请求可能会被“重放”，从而造成潜在的重放攻击）
   - 426 Upgrade Required （客户端应当切换到 TLS/1.0)
   - 449 Retry With （由微软扩展，代表请求应当在执行完适当的操作后进行重试）

5. 服务器错误 （5、6 开头）
   > 这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。
   - 500 Internal Server Error （服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理）
   - 501 Not Implemented （服务器不支持当前请求所需要的某个功能）
   - 502 Bad Gateway （作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应）
   - 503 Service Unavailable（由于临时服务器维护或者过载，服务器当前无法处理请求）
   - 504 Gateway Timeout （作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器或者辅助服务器收到响应）
   - 505 HTTP Version Not Supported （服务器不支持，或者拒绝支持子啊请求中使用的 HTTP 版本）
   - 506 Variant Also Negotiates （被请求的协商变元资源被配置为在透明内容协商中使用自己，因此在一个协商处理中不是一个合适的重点）
   - 507 Insufficient Storage （服务器无法存储完成请求所必须的内容）
   - 509 Bandwidth Limit Exceeded （服务器达到带宽限制）
   - 510 Not Extended （获取资源所需要的策略并没有被满足）
   - 600 Unparseable Response Headers （源站没有返回响应头部，只返回实体内容）
