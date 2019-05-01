<template>
  <div class="home">
    <div class="item">
      hello james home
    </div>
    <div class="item" >
      item1111
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GenInteract from '@/utils/dragging'

export default {
  name: 'home',
  components: {

  },
  mounted () {
    // target elements with the "draggable" class
    GenInteract('.item')
  }
}
</script>
<style lang="less" scoped>
.home{
  display: block;
  position: relative;
  width: 80%;
  height: 600px;
  margin: 0 auto;
  background-color: #ccc;
  .item{
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid blue;
    width: 200px;
    height: 100px;
    background-color:aquamarine;
    touch-action: none
  }
}
</style>
