<template>
  <div >
    Hello Vue!
    <app-server></app-server>
    <query-valid></query-valid>
  </div>
</template>

<script>
import Home from'./components/Home.vue';
import QueryValidation from './components/QueryValidation.vue';
export default {
  components:{
    'app-server':Home,
    'query-valid':QueryValidation
  }
}
</script>