<template>
    <div>
        <div>新增</div>
        <form id="commentForm" v-on:submit.prevent="onSubmit">
            <fieldset>
                <p>
                    <label for="name">Name (最多100字元)</label>
                    <input id="name" type="text" minlength="1" maxlength="100" v-model="body.name" placeholder="name" required>
                </p>
                <p>
                    <label for="code">code (最多60字元) </label>
                    <input  id="code" type="text" name="code" minlength="1" maxlength="60" placeholder="code" v-model="body.code" required>
                    <a v-if="codeDup">已被使用</a>
                </p>
                <p>
                    <label for="desc1">描述 (最多300字元)</label>
                    <input id="desc1" type="text" name="desc1" maxlength="300" placeholder="desc" v-model="body.desc" >
                </p>
                <p>
                    <label for="enableTure">true </label>
                    <input id="enableTure" type="radio" name="enable" :value="true" v-model="body.enable">
                </p>
                <p>
                    <label for="enableFalse">false </label>
                    <input id="enableFalse" type="radio" name="enable" :value="false" v-model="body.enable">
                </p>
                <div>radio 需要加:value才是傳入值(true or false)，沒有:則是字串，傳入值藉由v-model同步body</div>
                <input type="submit"   value="新增" @click="send">
            </fieldset>
        </form>
        <div> body: {{body}}</div>
    </div>
</template>

<script>
import  'jquery-validation'
// import {inputAuthen} from '../resource'
import $ from 'jquery'

export default {
    data(){
        return{
            msg:'hel',
            body:{
                name:null,
                code:null,
                desc:null,
                enable:true
            },
            existcode:[],
            codeDup:false
        }
    },
    methods:{
        send(){
            var validator=$('#commentForm').validate();
            if(validator.form()){
                alert('valid success');
                //post request here 
            }else{
                alert('invalid');
            }
        },
        onSubmit(){}
    },
    beforeUpdate(){
        this.codeDup=this.existcode.includes(this.body.code);//check code dup
    }
}

</script>
