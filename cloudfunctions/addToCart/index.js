// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database({
  env: 'store-fxd5i',
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const user = wxContext.OPENID
  const productId = event._id

  // 查询过去此人的购物车记录中有没有，有的话更新数量，没有则创建
  const cartRes = await db.collection('cart').where({
    productId,
    user,
  }).get()
  const cartList = cartRes.data

  if (!cartList.length) {
    await db.collection('cart').add({
      data: {
        productId,
        count: 1,
        user,
        image: event.image,
        name: event.name,
        price: event.price,
      },
    })
  } else {
    const count = cartList[0].count + 1
    await db.collection('cart').doc(cartList[0]._id).update({
      data: {
        count,
      },
    })
  }

  return {}



  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}