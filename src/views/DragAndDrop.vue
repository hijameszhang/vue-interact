<template>
 <div class="box">
    <div class="no-drop drag-drop" ref="no">no drop</div>
    <div class="yes-drop drag-drop" ref="yes">yes drop</div>

    <div class="container">
      <div id="outer-dropzone" class="dropzone">
        outer-dropzone
      </div>
      <div id="inner-dropzone" class="dropzone">
        inner-dropzone
      </div>
    </div>
 </div>
</template>

<script>
import dragAndDrop from '@/utils/dragAndDrop'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    let $yes = this.$refs.yes
    dragAndDrop($yes)
  }
}
</script>
<style lang="less" scoped>
.box{
  display: block;
  width: 100%;
  height: 500px;
  background-color: #ccc;
  .no-drop, .yes-drop{
    display: inline-block;
    position: relative;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background-color:aquamarine;
    z-index: 99;
  }
  .yes-drop{
    width: 20px;
    height: 20px;
  }
}
.container{
  display: inline-block;
  position: relative;
  width: 400px;
  height: 300px;
  padding: 20px;
  background-color: #ddd;
  z-index: 10;

  #outer-dropzone {
    position: absolute;
    left: 0;
    top: 0;
    height: 140px;
    border: 1px solid #fafafa;
  }

  #inner-dropzone {
    position: absolute;
    left: 5%;
    top: 10%;
    width: 60%;
    height: 80px;
    border: 1px solid #0071ff;
  }
}

.dropzone {
  background-color: #ccc;
  border: dashed 4px transparent;
  border-radius: 4px;
  margin: 10px auto 30px;
  padding: 10px;
  width: 80%;
  transition: background-color 0.3s;
}

.drop-active {
  border-color: #aaa;
}

.drop-target {
  background-color: #29e;
  border-color: #fff;
  border-style: solid;
}

.drag-drop {
  display: inline-block;
  min-width: 40px;
  padding: 2em 0.5em;

  color: #fff;
  background-color: #29e;
  border: solid 2px #fff;

  touch-action: none;
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);

  transition: background-color 0.3s;
}

.drag-drop.can-drop {
  color: #000;
  background-color: #4e4;
}
</style>
