// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database({
  env: 'store-fxd5i',
})
// 云函数入口函数
exports.main = async (event, context) => {
  const id = event.id
  console.log('cloud id:'+id)


  // product detail
  //第一行await 表示是异步请求，返回一个promise
  //加了 await 是说等请求结束，返回一个 promise，再赋值给 productRes

  const productRes = await db.collection('product').doc(id).get()
  const product = productRes.data

  // get the total count of reviews for current product
  const reviewCountRes = await db.collection('review').where({
    productId: id,
  }).count()
  product.reviewCount = reviewCountRes.total

  // get the first review of current product
  const firstReviewRes = await db.collection('review').where({
    productId: id,
  }).limit(1).get()
  product.firstReview = firstReviewRes.data[0]

  return product

  

}