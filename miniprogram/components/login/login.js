// components/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取 userInfo 的 <button> 在 login 里。所以需要把 userInfo 从 login 传递到 个人中心页面 里，这就用到了组件 triggerEvent 方法
    onTapLogin(event) {
      const loginDetail = {
        userInfo: event.detail.userInfo
      }
      this.triggerEvent('onLogin', loginDetail)
    },
  }
})
