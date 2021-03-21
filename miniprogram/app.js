//app.js
App({
  onLaunch: function() {
  },
  globalData: {
    fr_img:'',
    bg_img:'',
    img_type:'',
    userInfo:null,
    sysInfo:null,
    windowW:null,
    windowH:null
  },



  //启动
  onLaunch: function () {
    // 获取用户信息
   this.getUserInfo();
   this.getSys();
  },
  //获取用户信息
 getUserInfo:function(cb){
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo
            that.globalData.bg_img=res.userInfo.avatarUrl
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
      }
    })
  },
  //获取手机信息
  getSys:function() {
    var that = this;
    //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    wx.getSystemInfo({
    success: function(res) {

//设置变量值
      that.globalData.sysInfo=res;
      that.globalData.windowW=res.windowWidth;
      that.globalData.windowH=res.windowHeight;
    }
    })
  }
})