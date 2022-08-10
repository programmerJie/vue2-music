import request from "@/utils/request";

//获取轮播图数据
export function carousel(){
    return request({
        url:'/banner?type=2',
        methods:'GET'
    })
}
//获取推荐歌单
export function recommendmusic(){
    return request({
        url:'/personalized?limit=6',
        methods:'GET'
    })
}