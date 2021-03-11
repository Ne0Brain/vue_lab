<template>
    <div>
        <div> server status:{{status}}</div>
        <button @click="changeStatus">change status</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            status:'critical'
        }
    },
    methods:{
        changeStatus:function(){
            this.status='normal'
        }
    }

}
</script>