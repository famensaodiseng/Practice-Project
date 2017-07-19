# 评论查询接口
## 查询评论信息
- 接口地址 http://localhost/comment/data.php
- 请求方式 get
- 请求参数
    + last 最新页码（数据加载的次数），从0开始
    + amount 每页数据条数（每次加载数据的条数）
- 响应数据 (**如果返回值为1表示没有更多内容了，否则返回如下内容**)
```json
[
    {
        "id":"6",
        "nickname":"Jerry",
        "content":"\u51e0\u7ecf \u98ce\u96e8\u5c71\u66f4\u7fe0,\u5e38\u7ecf\u98ce\u971c\u83ca\u66f4\u9999",
        "imgpath":"g5.jpg",
        "time":"2017-02-04 13:21:37"
    },{
        "id":"5",
        "nickname":"Tom",
        "content":"\u5c71\u91cd\u6c34\u590d\u7591\u65e0\u8def\uff0c\u67f3\u6697\u82b1\u660e\u53c8\u4e00\u6751",
        "imgpath":"g4.jpg",
        "time":"2017-02-03 13:21:34"
    }
]
```
