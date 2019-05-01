<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home'}">dragging</router-link> |
      <router-link :to="{name: 'about'}">About</router-link> |
      <router-link :to="{name: 'dragAndDrop'}">dragAndDrop</router-link> |
      <router-link :to="{name: 'resizeable'}">resizeable</router-link> |
      <router-link :to="{name: 'tapDoubleTapHold'}">tapDoubleTapHold</router-link> |
      <router-link :to="{name: 'snapping'}">snapping</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
