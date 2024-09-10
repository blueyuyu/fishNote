<!-- 网络 -->
304
HTTP 304 Not Modified 说明无需再次传输请求的内容，也就是说可以使用缓存的内容。这通常是在一些安全的方法（safe），例如GET 或HEAD 或在请求中附带了头部信息： If-None-Match 或If-Modified-Since。

常用于加载一些Get请求获取的资源，或者在前端项目
