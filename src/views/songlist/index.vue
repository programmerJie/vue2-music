<template>
  <div class="songlist">
    <top :list="this.res" :user="this.user"></top>
    <contents :list="this.res" :music="this.music" ref="contents"></contents>
  </div>
</template>
<script>
import top from "@/views/songlist/components/top";
import contents from "@/views/songlist/components/contents";
import {songlist} from "@/api/songlist";
export default {
  name: "index",
  // 获取歌单列表
  async created() {
    //推荐歌单通过路由传递的id值给value
    const value = this.$route.query.id
    const res = await songlist(value)
    //获取歌单列表上面的的数据
    this.res = res.data.playlist
    //获取推荐歌单上面的用户信息
    this.user = res.data.playlist.creator
    //获取歌单列表歌曲和歌手
    console.log(this.music = res.data.playlist.tracks)
    this.music = res.data.playlist.tracks
  },
  data(){
    return {
      res:[],
      user:[],
      music:[],
    }
  },
  components:{top,contents},
}
</script>

<style scoped lang="less">

</style>