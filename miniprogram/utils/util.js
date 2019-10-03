module.exports = {
  priceFormat(price) {
    return parseFloat(Math.round(price * 100) / 100).toFixed(2)
  },

  getUserInfo() {
    //先调用微信的设置接口，并在调用成功后判断授权信息。如果显示 "false"，无授权，暂时不做任何处理；如果授权信息显示 “true”，代表用户同意授权个人信息，那么就去获取用户信息。获取信息成功后，进行用户信息的赋值，并返回。
    return new Promise((resolve, reject) => {

      this.isAuthenticated().then(()=>{
        wx.getUserInfo({
          success(res) {
            const userInfo = res.userInfo
            resolve(userInfo)
          }
        })
      }).catch(()=>{
        reject()
      })
    })
  },

  //判断用户是否授权
  //拿到用户的授权信息时返回 resolve()，没有拿到返回 reject()。
  isAuthenticated() {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo'] === true) {
            resolve()
          } else {
            reject()
          }
        }
      })
    })
  },

  formatTime(time, reg) {
    const date = typeof time === 'string' || typeof time === 'number' ? new Date(time) : time;
    const map = {};
    map.yyyy = date.getFullYear();
    map.yy = ('' + map.yyyy).substr(2);
    map.M = date.getMonth() + 1
    map.MM = (map.M < 10 ? '0' : '') + map.M;
    map.d = date.getDate();
    map.dd = (map.d < 10 ? '0' : '') + map.d;
    map.H = date.getHours();
    map.HH = (map.H < 10 ? '0' : '') + map.H;
    map.m = date.getMinutes();
    map.mm = (map.m < 10 ? '0' : '') + map.m;
    map.s = date.getSeconds();
    map.ss = (map.s < 10 ? '0' : '') + map.s;

    return reg.replace(/\byyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s\b/g, $1 => {
      return map[$1];
    });
  },

  getId() {
    return Math.floor((1 + Math.random()) * 0x100000000).toString(16).slice(1)
  },
}