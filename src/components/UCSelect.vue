<template>
    <div id="app">
        <!-- 第一層 -->
        <b-form-group>
            <b-row align-h="start">
            <b-col cols="4"  >
                <b-form-input id="parentId" v-model="number" placeholder="Enter parent id"></b-form-input>
            </b-col>
            <b-col cols="2">
                <b-button type="submit"  v-on:click="searchByParentId" >Submit</b-button>
            </b-col>
            </b-row>
        </b-form-group>
            <b-row align-h="start">
                <b-col>
                    <b-form-select  v-model="selected" :options="options" v-on:change="renew(selected)"></b-form-select>
                </b-col>
            <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
                <b-col>
                    <b-form-select  v-model="childselected" :options="childoptions" ></b-form-select>
                </b-col>
            </b-row>

    </div>
</template>
<script>
    import{parentdata} from '../resource'
    
    export default{
            el:"#app",
            data(){
                return{
                    number: '',
                    msg:"hello vue",
                    parent:[],
                    secLayer:Object,
                    thirdLayer:Object,
                    selected:null,
                    options:[],
                    childselected:null,
                    childoptions:[]
                    
                }
            },
            methods:{
                getAll(){
                    parentdata.find({id:""}).then(res=>{
                        let jsonObj=res.json();
                        const arr=[]
                        for(let key in jsonObj){
                            console.log(key);
                            arr.push(jsonObj[key]);
                        }
                    })
                },            
                searchByParentId(){
                    this.id=document.getElementById("parentId").value;
                    this.selected=this.number;
                    parentdata.find({id:this.id}).then(res=>{
                        // console.log(res.body);
                        this.childoptions=[];
                        for(let key in res.body){
                            let option=this.makeOption(key,res.body);
                            this.childoptions.push(option);
                        }
                    })
                },
                renew(selected){
                    let childs=[];
                    for(let i in this.parent){
                        if(this.parent[i].id===Number(selected)){
                            //sort parent children by id asc
                            this.parent[i].children=this.parent[i].children.sort(function(a,b){
                                return a.id>b.id?1:-1;
                            })
                            childs=this.parent[i].children;
                        }
                    }
                    let arr=[];
                    for(let i=0 ;i<childs.length;i++){
                        let option=this.makeOption(i,childs)
                        arr.push(option);
                    }
                    this.childoptions=arr;
                },
                makeOption(index,arr){
                    let option={text:'name',value:Number};
                    option.text=arr[index].name;
                    option.value=arr[index].id;
                    return option;
                },
                getAll2(){
                    this.$http.get(`https://uc-selectdb-default-rtdb.firebaseio.com/users.json`)
                    .then(res=>{
                        return res.json();
                    })
                    .then(data=>{
                        for(let i in data){
                          console.log(data[i]);
                          let option=this.makeOption(i,data);
                          this.options.push(option);
                        }                        
                    })
                }
            },
            watch:{
                selected:function(val){
                    this.renew(val);
                }
            },
            created(){
                // this.getAll();
                this.getAll2();
            }
        }
</script>
