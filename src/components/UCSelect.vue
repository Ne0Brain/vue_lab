<template>
    <div id="app">
        <button v-on:click="getAll">get all</button>
        <!-- 第一層 -->
        <b-form-group>
            <b-row align-h="center">
            <b-col cols="4"  >
                <b-form-input id="parentId" v-model="number" placeholder="Enter parent id"></b-form-input>
                <div class="mt-2">Value: {{ number }}</div>
            </b-col>
            <b-col cols="2">
                <b-button type="submit"  v-on:click="searchByParentId">Submit</b-button>
            </b-col>
            </b-row>
            
        </b-form-group> -->


        <!-- -->
        <!-- <b-container>
        <b-row>
        <b-col cols="4">
            <b-list-group>
            <b-list-group-item button v-for="user in parent" :key="user.id" @click="secLayer=user">
                {{user.name}}
            </b-list-group-item >
            </b-list-group>
        </b-col> -->
        <!-- <div>選擇的第二層 {{secLayer}}</div> -->
        <!-- <b-col cols="5">
            <div v-for="user in parent" :key="user.id">
                <div v-if="secLayer.id===user.id">
                    <b-list-group>
                    <b-list-group-item button v-for="child in user.children" :key="child.id" @click="thirdLayer=child">
                        {{child.name}}
                        <div v-if="thirdLayer.id===child.id&& children.children">
                            <div v-for="item in children.children" :key="item"> {{item.id}}</div>
                        </div>
                    </b-list-group-item >
                    </b-list-group> 
                </div>
            </div>
        </b-col>
        </b-row>
        </b-container>
    </div>
</template>
<script>
    import{childrenId} from '../resource.js'
    
    export default{
            // el:"#app",
            data(){
                return{
                    number: '',
                    msg:"hello vue",
                    parent:[],
                    secLayer:Object,
                    thirdLayer:Object,
                    // users:[{id:1,name:'neo1',children:[]},{id:2,name:'neo2',children:[]},{id:3,name:'neo3',children:[]}]
                    users:[]
                    
                }
            },
            methods:{
                getAll(){
                    this.$http.get('https://uc-selectdb-default-rtdb.firebaseio.com/users.json')
                    .then(res=>{
                        return res.json();
                    })
                    .then(res=>{
                        const resultArray =[];
                        for(let key in res){
                            resultArray.push(res[key]);
                        }
                        this.parent=resultArray;
                    })
                },            
                // searchByParentId(){
                //     this.id=document.getElementById("parentId").value;
                //     childrenId.find({id:this.number}).then(res=>{
                //         console.log(res.data);
                //         this.parent=res.data;
                //     })
                // }
            }
        }
</script>
