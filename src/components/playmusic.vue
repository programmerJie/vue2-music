<template>
  <div class="position">
    <div class="playmusic">
      <div class="left">
        <van-image
            round
            fit="cover"
            lazy-load
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            class="img"/>
        <div>
          <p>逆战</p>
          <p>张杰</p>
        </div>
      </div>
      <div class="right">
        <span v-if="dui" @click="play"><i class="iconfont">&#xe626;</i></span>
        <span v-if="cuo" @click="pause"><i class="iconfont">&#xe629;</i></span>
        <span><i class="iconfont">&#xe640;</i></span>
      </div>
      <audio ref="audio" :src="song.url" @ended="complete()"></audio>
    </div>
  </div>
</template>
<script>
import {playmusicurl} from "@/api/playmusic";

export default {
  name: "playmusic",
  props: ['list', 'user', 'music'],
  data() {
    return {
      dui: true,
      cuo: false,
      song: [],
      id:405998841
    }
  },
  //获取播放歌曲的url
  async created() {
    const res = await playmusicurl(this.id)
    // console.log(this.$store.state.palymusic)
    // 获取歌曲的url
    console.log(res.data.data[0])
    this.song = res.data.data[0]
  },
  methods: {
    //歌曲播放
    play() {
      this.$refs.audio.play()
      this.dui = false
      this.cuo = true
    },
    //歌曲暂停
    pause() {
      this.$refs.audio.pause()
      this.cuo = false
      this.dui = true
    },
    //歌曲是否播放完成，播放完成就显示播放图标
    complete() {
      this.dui =true
      this.cuo = false
    }
  },
}
</script>

<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 50px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.position {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  .playmusic {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;

    audio {
      margin-top: 50px;
    }

    .left {
      display: flex;
      width: 580px;
      height: 90px;

      .img {
        display: inline-block;
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin-top: 5px;
        margin-left: 10px;
      }

      div {
        width: 490px;
        height: 90px;

        p:nth-child(1) {
          font-size: 30px;
          margin-top: 10px;
          margin-left: 5px;
        }

        p:nth-child(2) {
          font-size: 20px;
          color: grey;
          margin-top: 10px;
          margin-left: 5px;
        }
      }
    }

    .right {
      display: flex;

      span:nth-child(1) {
        display: inline-block;
        height: 90px;
        width: 80px;
        line-height: 80px;
        text-align: center;
        margin-top: 5px;
      }

      span:nth-child(2) {
        display: inline-block;
        height: 90px;
        width: 80px;
        line-height: 80px;
        text-align: center;
        margin-top: 5px;
      }
    }
  }
}
</style>