<template>
  <div class="list">
    <div>
      <span><i class="iconfont">&#xe65b;</i></span>
      <span>每日推荐</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe637;</i></span>
      <span>歌单</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe6c5;</i></span>
      <span>排行榜</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe636;</i></span>
      <span>电台</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe607;</i></span>
      <span>私人FM</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "list"
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

.list {
  width: 100%;
  display: flex;
  height: 150px;

  div {
    //background: red;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    span:nth-child(1){
      width: 80px;
      height: 80px;
      background: red;
      line-height: 80px;
      text-align: center;
      margin-bottom: 15px;
      border-radius: 50%;
      color: white;
    }
    span:nth-child(2){
      font-size: 20px;
    }
  }
}
</style>