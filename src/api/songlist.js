import request from "@/utils/request";

//获取歌单列表
export function songlist(data){
    return  request({
        url:`/playlist/detail?id=${data}`,
        methods:'GET'
    })
}
