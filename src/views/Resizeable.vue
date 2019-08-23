<template>
<div>
  <div class="container">
    <div class="demo1">

    </div>

    <div class="demo2">

    </div>

    <div class="demo3">

    </div>
  </div>
  <div class="other">

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
    resizeable('.container > div', 3)
  }
}
</script>

<style lang="less" scoped>
.container{
  position: relative;
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  background-color: #555;
  z-index: 1;
  > div{
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 200px;
    touch-action: none;
    box-sizing: border-box;
  }
  .demo1{
    left: 0;
    top: 0;
    background-color:aquamarine;
  }
  .demo2{
    left: 80%;
    top: 0;
    background-color: antiquewhite;
  }
  .demo3{
    left: 50%;
    top: 0;
    background-color: yellowgreen;
  }
}
.other{
  display: block;
  position: relative;
  width: 100%;
  height: 200px;
  left: 0;
  top: -20px;
  background-color:thistle;
  z-index: 2;
}
</style>
