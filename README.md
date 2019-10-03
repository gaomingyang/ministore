# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)


home.js
data内容
```
 productList: [{
      id: 1,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      name: 'Wallet',
      price: 100,
      source: 'CHINA',
    }, {
      id: 2,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
      name: 'Guitar',
      price: 200,
      source: 'SWEDEN',
    }, {
      id: 3,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product3.jpg',
      name: 'Stapler',
      price: 300,
      source: 'GERMANY',
    }, {
      id: 4,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product4.jpg',
      name: 'Leafy vegetables',
      price: 400,
      source: 'NEW ZEALAND',
    }, {
      id: 5,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product5.jpg',
      name: 'Compass',
      price: 500,
      source: 'USA',
    }], // Products List

```


detail.js
data:
```
product: {
      id: 2,
      image: 'https://product-1256088332.cos.ap-guangzhou.myqcloud.com/product2.jpg',
      name: 'Guitar',
      price: 480.50,
      source: 'SWEDEN'
    },
```


cart.js
data
```
cartList: [{
      id: 1,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      name: 'Wallet',
      price: '100.00',
      source: 'CHINA',
      count: 1,
    }, {
      id: 2,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
      name: 'Guitar',
      price: '200.00',
      source: 'SWEDEN',
      count: 3,
    }, {
      id: 3,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product3.jpg',
      name: 'Stapler',
      price: '300.00',
      source: 'GERMANY',
      count: 4,
    }, {
      id: 4,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product4.jpg',
      name: 'Leafy vegetables',
      price: '400.00',
      source: 'NEW ZEALAND',
      count: 2,
    }, {
      id: 5,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product5.jpg',
      name: 'Compass',
      price: '500.00',
      source: 'USA',
      count: 1,
    }],
    ```