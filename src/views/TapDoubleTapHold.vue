<template>
 <div>
    <div class="tap-target" ref="tapTarget"></div>
 </div>
</template>

<script>
import tapDoubleTapHold from '@/utils/tapDoubleTapHold'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    let $tapTarget = this.$refs.tapTarget
    tapDoubleTapHold($tapTarget)
  }
}
</script>

<style lang="less" scoped>
.tap-target {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 14em;
  height: 16em;
  padding: 1em;
  margin: 10% auto;

  border-radius: 100%;

  font-size: 1.125em;
  text-align: center;
  color: #fff;
  background-color: #29e;

  cursor: pointer;
  touch-action: none;

  transition: all 0.3s;
}

.tap-target.switch-bg {
  background-color: #f40;
}

.tap-target.large {
  -webkit-transform: scale(1.25);
  transform: scale(1.25);
}

.rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
