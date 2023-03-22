import request from "@/services"

// 高性价比房源API
export const getGoodpriceAPI = () => (request.get({ url: "/home/goodprice" }))

// 高分房源API
export const getHighscoreAPI = () => (request.get({ url: '/home/highscore' }))

// 折扣房源API
export const getDiscountAPI = () => (request.get({ url: '/home/discount' }))

// 推荐房源API
export const getHotrecommenddestAPI = () => (request.get({ url: '/home/hotrecommenddest' }))

// 向往的城市
export const getLongforAPI = () => (request.get({ url: '/home/longfor' }))

// plus房源
export const getPlusAPI = () => (request.get({ url: '/home/plus'}))