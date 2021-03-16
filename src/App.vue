<template>
  <div >
    Hello Vue!
    <form-vue></form-vue>
  </div>
</template>

<script>
import From from'./components/FormList.vue';

export default {
  components:{
    'form-vue':From
  }
}
</script>