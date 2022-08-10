<template>
  <div class="posttion">
    <div class="top"></div>
  <div class="navbar">
    <div class="left">
      <router-link to="/list">
        <span><i class="iconfont text_none">&#xe62f;</i></span>
      </router-link>
    </div>
    <div class="center">
      <router-link to="/mine">
        <span class="text_none">我的</span>
      </router-link>
      <router-link to="/">
        <span class="text_none">发现</span>
      </router-link>
      <router-link to="/yuncun">
        <span class="text_none">云村</span>
      </router-link>
      <router-link to="/video">
        <span class="text_none">视频</span>
      </router-link>
    </div>
    <div class="right">
      <router-link to="/search">
        <span class="text_none"><i class="iconfont">&#xe622;</i></span>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
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
.posttion{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background: #ffffff;
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 29px;
    color: black;
    .left{
      .text_none{
        color: black;
      }
    }
    .center{
      .text_none{
        color: black;
      }
      span{
        font-size: 35px;
        margin: 0 13px;
      }
    }
    .right{
      .text_none{
        color: black;
      }
    }
  }
}
</style>