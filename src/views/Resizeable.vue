<template>
 <div class="container">
   <div class="demo" ref="resize-drag">

   </div>
 </div>
</template>

<script>
import resizeable from '@/utils/resizeable'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    let $resizeDragElement = this.$refs['resize-drag']
    resizeable($resizeDragElement)
  }
}
</script>

<style lang="less" scoped>
.container{
    position: relative;
    width: 100%;
    height: 600px;
    border: 1px solid #ccc;
  .demo{
    display:inline-block;
    width: 200px;
    height: 200px;
    touch-action: none;
    box-sizing: border-box;
    background-color:aquamarine;
}
}
</style>
