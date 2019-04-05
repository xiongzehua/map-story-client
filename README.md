## api文档
##### 后台地址
193.112.87.169

##### 注册

request

```shell
POST /api/signup
```

```json
{
    "userEmail": "test1@nju.com",
    "userPassword": "qwe123",
    "userName": "测试用户"
}
```

response

```json
{
    "status": 0, // 0-成功 1-权限不够 2-格式非法
    "data": {
    	"userToken": "ae123asqere21asdsa3",
    	"userId": 3,
    	"userEmail": "test1@nju.com",
    	"userName": "测试用户1"
	}
}
```



##### 登陆

request

```shell
POST /api/signin
```

```json
{
    "userEmail": "test1@nju.com",
    "userPassword": "qwe123"
}
```

response

```json
{
    "status": 0, // 0-成功 1-权限不够 2-格式非法
    "data": {
    	"userToken": "ae123asqere21asdsa3",
    	"userId": 3,
    	"userEmail": "test1@nju.com",
    	"userName": "测试用户1"
	}
}
```

##### 创建项目
request

```shell
POST /api/project/create
```
```json
{
    "userToken": "ae123asqere21asdsa3",
    "projectTitle": "项目题目",
    "projectContent": "项目说明"
    
}
```
```json
{
    "status": 0, // 0-成功 1-权限不够 2-格式非法
    "data": null
}
```

##### 删除项目
request

```shell
POST /api/project/delete
```
```json
{
    "userToken": "ae123asqere21asdsa3",
    "projectId": 3,
    
}
```
```json
{
    "status": 0, // 0-成功 1-权限不够 2-格式非法
    "data": null
}
```

##### 项目列表

request

```shell
POST /api/project/list
```

```json
{
    "userToken": "ae123asqere21asdsa3"
}
```

response

```json
{
    "status": 0, // 0-成功 1-权限不够 2-格式非法
    "data": [
        {
          "projectId": 3,
          "projectTitle": "项目题目",
          "projectContent": "项目说明",
          "ownerId": 3,
          "ownerEmail": "test1@nju.com",
          "ownerName": "测试用户1"
        },
        {
          
        }
    ]
}
```



##### 获取项目数据详情

request

```shell
POST /api/project/get
```

```json
{
    "userToken": "ae123asqere21asdsa3",
    "projectId": 3
}
```

response

```json
{
    "status": 0, // 0-成功 1-权限不够 2-格式非法
    "data": {
        "ownerId": 3,
        "ownerEmail": "test1@nju.com",
        "ownerName": "测试用户1",
        "contributors": [
            {
				        "contributorId": 4,
    			      "contributorEmail": "test2@nju.com",
    			      "contributorName": "测试用户2"
        	  },
			      {
          
        	  }
        ],
        "projectId": "项目id",
    	  "projectTitle": "项目题目",
    	  "projectContent": "项目说明",
    	  "projectCards": [ 
            [ { "content": "card1" }, { "content": "card2" }, { "content": "card3" }, { "content": "card4" } ], 
            [ { "content": "card1" }, { "content": "card2" }, { "content": "card3" }, { "content": "card4" } ] 
		    ]
	}
}
```



##### 更新项目数据
"cards"后的内容不需要解析，就当成一个字符串
request

```shell
POST /api/project/update
```

```json
{
    "userToken": "ae123asqere21asdsa3",
    "projectId": 3,
    "projectTitle": "项目题目",
    "projectCards": "项目说明",
    "cards": [ 
        [ { "content": "card1" }, { "content": "card2" }, { "content": "card3" }, { "content": "card4" } ], 
		    [ { "content": "card1" }, { "content": "card2" }, { "content": "card3" }, { "content": "card4" } ] 
	  ]
}
```

response

```json
{
    "status": 0, // 0-成功 1-权限不够 2-格式非法
    "data": null
}
```

##### 添加协作者

request

```shell
POST /api/contributor/create
```

```json
{
    "userToken": "ae123asqere21asdsa3",
    "projectId": 3,
    "contributorId": 6
}
```

response

```json
{
    "status": 0, // 0-成功 -1失败 1-权限不够 2-格式非法 
    "data": null
}
```

##### 删除协作者

request

```shell
POST /api/contributor/delete
```

```json
{
    "userToken": "ae123asqere21asdsa3",
    "projectId": 3,
    "contributorId": 6
}
```

response

```json
{
    "status": 0, // 0-成功 -1失败 1-权限不够 2-格式非法 
    "data": null
}
```
