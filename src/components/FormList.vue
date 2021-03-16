<template>
    <div> form vue
        <form>
            <input type="text" placeholder="name" v-model="user.name">
            <input type="email" placeholder="email" v-model="user.email"> 
            
            <div> Name:{{user.name}}</div>
            <div> Email:{{user.email}}</div>
        </form>
        <button  @click="send"> send</button>

    </div>
</template>
<script>

    export default{
        data(){
            return{
                user:{
                    name:"",
                    email:""
                },


            }
        },
        methods:{
            send(){
                this.$http.post('https://vuejs-vue-resource-7468b-default-rtdb.firebaseio.com/data.json',this.user).then(res=>{
                    console.log(res)
                },error=>{tconsole.log(error)})
                // console.log(this.user);
            }
        }
    }
</script>
