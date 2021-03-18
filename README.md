
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
# install jquery and jquery-validation
npm i jquery

npm i jquery-validation 

知識點:
$('#formid').validate();會回傳validate 物件 ->var validator=$('#formid').validate();
validator.form();會回傳ture (驗證成功)，false(驗證失敗) 用於處理驗證結果
---------
request 傳送方式:
vue-resource 
    -> this.$http.get()....
import from resource.js(已將傳送資訊method(get，post)、url放置在resource)
    ->[import_name].[use_method].(body).then(success).catch(error)
跳轉
    this.$router.push({path:'/TestEmit',query:{id:`${lastid}`}}) (lastid 需要傳過去的參數值>?/TestEmit?id=lastid)。
接收上一頁url參數
    this.$route.query.id (ex: 接收id參數的值)
--------
待補router