<template>
<div class="carousel">
  <van-swipe :autoplay="3000" indicator-color="red">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image.pic" class="img"/>
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
import {carousel} from "@/api/find";
export default {
  name: "carousel",
  data() {
    return {
      images: [],
    };
  },
  //获取轮播的数据
 async created() {
    const res = await carousel()
   //将获取的数据放到images里面
   this.images = res.data.banners
  }
}
</script>

<style scoped lang="less">
.carousel{
  margin: 100px 29px 29px 29px;
  .img{
    width: 100%;
    height: 300px;
    border-radius: 20px;
  }
}
</style>