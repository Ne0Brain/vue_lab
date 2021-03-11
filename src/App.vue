<template>
  <div >
    Hello Vue!
    <app-server></app-server>
  </div>
</template>

<script>
import Home from'./components/Home.vue';

export default {
  components:{
    'app-server':Home
  }
}
</script>