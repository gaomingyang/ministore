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
  // 另一种方式
  // const user = event.userInfo.openId

  const productList = event.list || []
  const isCheckout = !!event.isCheckout
  //!!号一般用来将后面的表达式强制转换为布尔类型的数据(boolean) ，也就是只能是true 或者 false

  await db.collection('order').add({
    data: {
      user,
      createTime: +new Date(),
      productList,
    },
  })

  if (isCheckout) {
    // if it's checked out from cart
    await db.collection('cart').where({
      productId: db.command.in(productList.map(product => product.productId))
    }).remove()
  }

  

  return {}

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}