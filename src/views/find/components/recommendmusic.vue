<template>
  <div class="recommendmusic">
    <hr>
    <div class="recommendmusictop">
      <div class="title">
        <div class="left">
          推荐歌单
        </div>
        <div class="right">
          歌单广场
        </div>
      </div>
      <div class="content">
        <van-row type="flex" justify="space-between" gutter="8">
          <van-col span="8" v-for="item in list" :key="item.id" class="list">
            <router-link :to="{path:'/songlist',query:{id:item.id}}">
              <van-image
                  lazy-load
                  fit="cover"
                  :src="item.picUrl"
                  class="img"/>
              <div class="position">
                <span><i class="iconfont">&#xe600;</i></span>
                <span>{{ count(item.playCount) }}</span>
              </div>
              <p>{{ item.name }}</p>
            </router-link>
          </van-col>
        </van-row>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import {recommendmusic} from "@/api/find";

export default {
  name: "recommendmusic",
  data() {
    return {
      list: []
    }
  },
  //获取推荐歌单的数据
  async created() {
    const res = await recommendmusic()
    // 将获取推荐歌单的数据放到list
    this.list = res.data.result
  },
  methods: {
    count(result) {
      if (result >= 100000000) {
        return (result / 100000000).toFixed(0) + '亿'
      } else if (result >= 10000) {
        return (result / 10000).toFixed(0) + '万'
      } else {
        return result
      }
    }
  }
}
</script>

<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.recommendmusic {
  hr {
    margin-top: 20px;
    background: #eeeeee;
  }
  .recommendmusictop {
    margin: 29px;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .left {
        font-size: 37px;
        font-weight: 700;
      }

      .right {
        border: 1px solid #808080;
        border-radius: 21px;
        padding: 6px 10px;
        font-size: 20px;
      }
    }

    .content {
      .list {
        position: relative;
        margin-bottom: 20px;
      }

      .img {
        width: 100%;
        height: 200px;
      }

      p {
        font-size: 25px;
        color: black;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .position {
        font-size: 20px;
        position: absolute;
        top: 2%;
        right: 4%;
        color: white;
      }
    }

  }

  .footer {
    margin-bottom: 150px;
  }
}
</style>