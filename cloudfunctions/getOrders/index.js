// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// const db = cloud.database()
const db = cloud.database({
  env: 'store-fxd5i',
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const user = wxContext.OPENID

  // 订单列表
  const orderRes = await db.collection('order').where({
    user,
  }).get()
  const orderList = orderRes.data

  return orderList

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}