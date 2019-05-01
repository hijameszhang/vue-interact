<template>
 <div class="container">
   <div class="box" ref='box'>

   </div>
 </div>
</template>

<script>
import snapping from '@/utils/snapping'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    let $el = this.$refs.box
    snapping($el)
  }
}
</script>

<style lang="less" scoped>
.container{
  height: 400px;
  background-color: #ccc;
  .box{
    width: 40%;
    background-color: #29e;
    color: #fff;
    font-size: 1.2em;
    border-radius: 4px;
    padding: 2%;
    box-sizing: border-box;
    touch-action: none;
}
}
</style>
