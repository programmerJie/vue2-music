<template>
  <div id="app">
    <router-view></router-view>
    <playmusic></playmusic>
  </div>
</template>
<script>
import playmusic from "@/components/playmusic";
export default {
  name:'App',
  components:{playmusic},
}
</script>

<style lang="less">
</style>
