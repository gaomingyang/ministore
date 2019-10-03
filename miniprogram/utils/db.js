const util = require('./util')
const db = wx.cloud.database({
  env: 'store-fxd5i'
})

module.exports = {
  // 未调用云函数，直接查云数据库
  getProductList(){
    return db.collection('product').get()
  },

  // 调用云函数，在云函数里查询数据库
  getProductDetail(id){
    return wx.cloud.callFunction({
      name: 'productDetail',
      data: {
        id: id
      },
    })
  },

  addToCart(data) {
    return util.isAuthenticated()
      .then(() => {
        console.log('调用云函数addtocart')
        return wx.cloud.callFunction({
          name: 'addToCart',
          data,
        })
      }).catch(err => {
        console.log('失败信息：')
        console.log(err)

        wx.showToast({
          icon: 'none',
          title: 'Please Login First'
        })
        return {}
      })
  },

  addToOrder(data) {
    return util.isAuthenticated()
    .then(()=>{
      return wx.cloud.callFunction({
        name: 'addToOrder',
        data,
      })
    })
    .catch(err => {
      console.log(err)
      
        wx.showToast({
          icon: 'none',
          title: 'Please Login First'
        })
        return {}
      })
  },

  getOrders() {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getOrders',
        })
      })
      .catch(() => {
        wx.showToast({
          icon: 'none',
          title: 'Please Login First'
        })
        return {}
      })
  },
  
  getCart() {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getCart',
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: 'Please Login First'
        })
        return {}
      })
  },

  updateCart(list) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'updateCart',
          data: {
            list,
          },
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: 'Please Login First'
        })
        return {}
      })
  },

  addReview(data) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'addReview',
          data,
        })
      }).catch(() => {
        wx.showToast({
          icon: 'none',
          title: 'Please Login First'
        })
        return {}
      })
  },

  getReviews(productId) {
    return db.collection('review').where({
      productId,
    }).get()
  },

  uploadImage(imgPath) {
    return wx.cloud.uploadFile({
      cloudPath: `review/${util.getId()}`,
      filePath: imgPath,
    })
  },
}