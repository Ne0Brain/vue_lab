import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)

export const childrenId= Vue.resource(
    `https://uc-selectdb-default-rtdb.firebaseio.com/users.json`,{},{
        find:{
            method:'get',
            url:`https://uc-selectdb-default-rtdb.firebaseio.com/users.json`
        }
        
    }
)