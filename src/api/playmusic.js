import request from '@/utils/request'

// 获取播放音乐url
export function playmusicurl(data){
    return request({
        url:`/song/url?id=${data}`,
        methods:'GET'
    })

}