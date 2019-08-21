<template>
 <div>
   <span v-for="(item, idx) in users" :key="idx">
     {{item.name}}
   </span>
 </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  components: {

  },
  created () {
    let users = Array.from({ length: 100000 }, (item, index) => ({ name: index }))
    this.users = Object.freeze(users)
  }
}
</script>

<style>

</style>
