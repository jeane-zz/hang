//app.js
App({
  // 生命周期函数，监听小程序初始化
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  // 监听小程序显示
  onShow: function() {
    console.log('小程序启动了~~')
  },
  // 监听小程序隐藏
  onHide: function() {
    console.log('小程序隐藏了')
  },
  // 监听错误
  onError: function(err){
    console.log(err)
    console.log('出问题了啊')
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    tips: "这是用来进行测试的 tips"
  }
})

Page({
  
})