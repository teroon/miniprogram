//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    avatarUrl:'',

  },
  


  upload_img() {
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          const src = res.tempFilePaths[0]
          //将选择的图传至upload页处理
          wx.navigateTo({
            url: `../upload/upload?src=${src}`
          })
        }
      })
  },

  headimgHD:function (imageUrl) {
    imageUrl = imageUrl.split('/');        //把头像的路径切成数组
    //把大小数值为 46 || 64 || 96 || 132 的转换为0
    if (imageUrl[imageUrl.length - 1] && (imageUrl[imageUrl.length - 1] == 46 || imageUrl[imageUrl.length - 1] == 64 || imageUrl[imageUrl.length - 1] == 96 || imageUrl[imageUrl.length - 1] == 132)) {
        imageUrl[imageUrl.length - 1] = 0;
    }
    imageUrl = imageUrl.join('/');   //重新拼接为字符串
    return imageUrl;
  },



  get_user_avatar(){
    app.globalData.img_type='bg';
    app.globalData.bg_img=this.headimgHD(app.globalData.bg_img)
    console.log(app.globalData.bg_img);
    wx.downloadFile({
      url: app.globalData.bg_img,
      success: function(res) {
      console.log(app.globalData.bg_img);
    }
    })

    wx.navigateTo({
      url: `../canvas/canvas`
      })
  }




})