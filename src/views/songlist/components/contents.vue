<template>
  <div class="contents">
    <div class="top">
      <div>
        <span><i class="iconfont">&#xe626;</i></span>
        <span>播放全部</span>
        <span>(共{{music.length}}首)</span>
      </div>
      <div>
        <span>+ </span>
        <span>收藏 </span>
        <span>({{list.subscribedCount}})</span>
      </div>
    </div>
    <div class="footer" v-for="(item,index) in music" :key="item.id">
      <div class="left" @click="play(music[index].id)">
        <span class="id">{{index+1}}</span>
        <div class="singer">
          <p>{{item.name}}</p>
          <div>
            <span>{{item.ar[0].name}}</span> -<span>{{item.al.name}}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <span v-show="item.mv!=0"><i class="iconfont">&#xe665;</i></span>
        <span><i class="iconfont">&#xe8c4;</i></span>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  name: "contents",
  props: ['list', 'user', 'music'],
  methods:{
    play(data){
      console.log(data)
      const value = data
      this.$store.commit('playmusicstate',value)
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

.contents {
  margin-top: 50px;

  .top {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #ffffff;
    div:nth-child(1) {
      width: 300px;
      height: 50px;
      line-height: 50px;
      margin-left: 16px;

      span:nth-child(1) {
        display: inline-block;
        margin-right: 15px;
        vertical-align: middle;
        font-weight: 400;
      }
      span:nth-child(2) {
        display: inline-block;
        font-size: 30px;
      }
      span:nth-child(3) {
        display: inline-block;
        color: grey;
        font-size: 26px;
      }
    }

    div:nth-child(2) {
      border: 1px solid white;
      background: red;
      color: white;
      padding: 20px;
      border-radius: 35px;
      margin-right: 16px;

      span:nth-child(1) {
        font-size: 26px;
      }

      span:nth-child(2) {
        font-size: 26px;
      }

      span:nth-child(3) {
        font-size: 26px;
      }
    }
  }

  .footer {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    .left {
      display: flex;
      width: 600px;
      height: 90px;
      .id {
        font-size: 30px;
        height: 90px;
        width: 60px;
        text-align: center;
        line-height: 90px;
        color: grey;
      }
      .singer{
        width: 540px;
        height: 90px;
        p{
          width: 535px;
          height: 38px;
          font-size: 30px;
          margin-top: 15px;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:1;
        }
        div{
          width: 535px;
          height: 29px;
          color: grey;
          font-size: 20px;
          margin-left: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:1;
        }
      }
      }
    }
    .right {
      span:nth-child(1) {
        display: inline-block;
        height: 90px;
        width: 60px;
        text-align: center;
        line-height: 90px;
      }
      span:nth-child(2) {
        display: inline-block;
        height: 90px;
        width: 60px;
        text-align: center;
        line-height: 90px;
        color: grey;
      }
    }
  .bottom{
    margin-bottom: 130px;
  }
  }
</style>