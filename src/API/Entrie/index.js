import request from "@/services";

// 全部数据API
export const getentireListAPI = (offset = 0, size = 20) => (request.get({
  url: '/entire/list',
  params: {
    offset,
    size
}}))