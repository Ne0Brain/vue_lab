<template>
  <div >
    Hello Vue!
    <uc-select>uc-select</uc-select>
  </div>
</template>

<script>
import UCSelect from './components/UCSelect.vue'

export default {
  components: { 'uc-select':UCSelect }
  
}
</script>