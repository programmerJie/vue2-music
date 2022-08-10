<template>
  <div class="top">
    <van-image
        lazy-load
        fit="cover"
        :src="list.coverImgUrl"
    class="img"/>
    <div class="top_top">
      <div>
        <span @click="goback"><i class="iconfont">&#xe697;</i></span>
        <span>歌单</span>
      </div>
      <div>
        <span><i class="iconfont">&#xe622;</i></span>
        <span><i class="iconfont">&#xe8c4;</i></span>
      </div>
    </div>
    <div class="clear"></div>
    <div class="center">
      <div class="left">
        <van-image
            lazy-load
            fit="cover"
            :src="list.coverImgUrl"
            class="img"/>
        <div class="position">
          <span><i class="iconfont">&#xe600;</i></span>
          <span>{{ count(list.playCount)}}</span>
        </div>
      </div>
      <div class="right">
        <p>{{list.name}}</p>
        <div>
          <div class="user">
            <van-image
                round
                lazy-load
                fit="cover"
                :src="user.avatarUrl"
                class="imgse"/>
            <span>{{user.nickname}} ></span>
          </div>
          <div>{{list.description}}  ></div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="footer">
      <div>
        <span><i class="iconfont">&#xe763;</i></span>
        <span>{{list.commentCount}}</span>
      </div>
      <div>
        <span><i class="iconfont">&#xe86e;</i></span>
        <span>{{list.shareCount}}</span>
      </div>
      <div>
        <span><i class="iconfont">&#xe668;</i></span>
        <span>下载</span>
      </div>
      <div>
        <span><i class="iconfont">&#xe669;</i></span>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  props: ['list','user'],
  methods:{
    goback(){
      this.$router.go(-1)
    },
    count(result){
      if(result>=100000000){
        return (result/100000000).toFixed(0)+'亿'
      }else if(result>=10000){
        return (result/10000).toFixed(0)+'万'
      }else{
        return result
      }
    }
  }
}
</script>

<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 40px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.top{
  position: relative;
  .clear{
    clear: both;
  }
  .img{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 500px;
    filter: blur(60px);
  }
  .top_top{
    padding: 29px;
    font-size: 40px;
    color: white;
    cursor: pointer;
    div:nth-child(1){
      float: left;
      span:nth-child(2){
        margin-left: 20px;
      }
    }
    div:nth-child(2){
      float: right;
      span:nth-child(1){
        margin-right: 25px;
      }
    }
  }
  .center{
    .left{
      position: relative;
      float: left;
      .img{
        width: 200px;
        height: 230px;
        margin-left: 30px;
        margin-top: 30px;
        position: relative;
        filter: blur(0);
      }
      .position{
        position: absolute;
        top: 13%;
        right: 4%;
        color: white;
        span:nth-child(1) i{
          font-size: 20px;
        }
        span:nth-child(2){
          font-size: 20px;
        }
      }
    }
    .right{
      float: right;
      p{
        height: 65px;
        width: 330px;
        color: white;
        font-size: 26px;
        margin-top: 35px;
        margin-bottom: 10px;
        font-weight: 700;
      }
      div{
        .user{
          width: 350px;
          height: 60px;
          margin-top: 20px;
          margin-bottom: 20px;
          .imgse{
            width: 50px;
            height: 50px;
            float: left;
            line-height: 60px;
            vertical-align: middle;
            margin-right: 5px;
          }
          span{
            float: left;
            font-size: 26px;
            line-height: 60px;
            margin-top: 5px;
            margin-left: 5px;
          }
        }
        div{
          width: 470px;
          height: 55px;
          color: white;
          font-size: 20px;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
        }
      }
    }
  }
  .footer{
    display: flex;
    height: 90px;
    width: 100%;
    margin-top: 40px;
    div{
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      color: white;
      span:nth-child(1) i{
        font-size: 50px;
      }
      span:nth-child(2){
        font-size: 25px;
        margin-top: 10px;
      }
    }
    div:hover{
      cursor: pointer;
    }
  }
}
</style>