<template>
  <div>
<!--    导航栏-->
    <navbar></navbar>
<!--    //轮播图-->
    <carousel></carousel>
    <!--  列表-->
    <list></list>
<!--    推荐歌单-->
    <recommendmusic></recommendmusic>
  </div>
</template>

<script>
import carousel from "@/views/find/components/carousel";
import navbar from "@/components/navbar";
import list from "@/views/find/components/list";
import Recommendmusic from "@/views/find/components/recommendmusic";
import playmusic from "@/components/playmusic";
export default {
  name: "index",
  components: {Recommendmusic, navbar,carousel,list},
}
</script>

<style scoped>

</style>