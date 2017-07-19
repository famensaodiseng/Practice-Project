# 图书管理功能接口文档
## 查询图书列表数据
- 接口地址 http://localhost/grid/bookInfo.php
- 请求类型 post
- 请求参数 flag=0 查询信息标志位
- 响应结果
```json
[
  {
    "id": "27",
    "bookName": "三国演义",
    "bookAuthor": "罗贯中",
    "recommend": "是",
    "category": "文学 ",
    "bookDesc": "军阀混战的年代"
  },
  {
    "id": "26",
    "bookName": "西游记",
    "bookAuthor": "吴承恩",
    "recommend": "是",
    "category": "文学 ",
    "bookDesc": "佛教与道教的斗争"
  }
]
```
## 添加图书信息
- 接口地址 http://localhost/grid/bookInfo.php
- 请求类型 post
- 请求参数 
    + flag=1 添加信息标志位
    + bookName 图书名称
    + bookAuthor 图书作者
    + recommend 是否推荐（1表示推荐；2表示不推荐）
    + category[] 分类（1表示计算机，2表示文学，3表示会计；category属性必须加上[],用于后端php获取多个选型数据）
    + bookDesc 图书描述信息
- 响应结果 同[查询图书列表数据]接口

## 删除图书信息
- 接口地址 http://localhost/grid/bookInfo.php
- 请求类型 post
- 请求参数 
    + flag=2 删除信息标志位
    + id 删除数据的id
- 响应结果 同[查询图书列表数据]接口

## 根据id查询图书信息
- 接口地址 http://localhost/grid/bookInfo.php
- 请求类型 post
- 请求参数 
    + flag=3 根据id查询信息标志位
    + id 查询id
- 响应结果
```json
{
  "id":"22",
  "bookName":"abc",
  "bookAuthor":"www",
  "recommend":"1",
  "category":"1",
  "bookDesc":"aaad"
}
```

## 更新图书信息
- 接口地址 http://localhost/grid/bookInfo.php
- 请求类型 post
- 请求参数 
    + id 所更新数据的id
    + flag=4 更新信息标志位
    + bookName 图书名称
    + bookAuthor 图书作者
    + recommend 是否推荐（1表示推荐；2表示不推荐）
    + category[] 分类（1表示计算机，2表示文学，3表示会计；category属性必须加上[],用于后端php获取多个选型数据）
    + bookDesc 图书描述信息
- 响应结果 同[查询图书列表数据]接口

postman
