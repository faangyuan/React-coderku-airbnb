// Node中 path模块 path路径 
const path = require('path')

// path resolve 解析 (pth.resolve解析路径) (xxx, xx)路径拼接
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: { // alias 别名
       // @映射src路径
      '@': resolve('src'),
      'components': resolve('src/components'),
    }
  }
}