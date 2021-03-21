// pages/select/select.js
const app = getApp();
var _tousList = [{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E4%B8%A5%E8%82%83%E5%A2%A8%E9%95%9C.png'
}, 
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E4%BA%BA%E7%89%A9%E8%8A%B1%E7%BA%B9.png'
}, 
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E5%91%B5%E5%91%B5%E5%A2%A8%E9%95%9C.png'
}, 
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E5%AE%98%E5%B8%BD1.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E5%AE%98%E5%B8%BD2.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E6%89%8B%E4%B8%B21.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E6%89%8B%E4%B8%B22.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E6%89%8B%E5%8A%BF1.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E6%89%8B%E5%8A%BF2.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E6%96%87%E5%AE%98%E5%B8%BD.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E6%9C%95%E5%BF%83%E5%AF%92%E4%B9%8B%E6%9E%81%E6%89%87.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E6%9C%95%E7%94%9A%E6%83%B3%E4%BD%A0%E6%89%87.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E7%8E%8B%E5%86%A0.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E7%A5%A5%E4%BA%911.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E7%A5%A5%E4%BA%912.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E7%BF%A1%E7%BF%A0%E6%89%8B%E4%B8%B2.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E8%BE%AB%E5%AD%90%E5%B8%BD.png'
},
{
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/1%EF%BC%9A1%E8%B4%B4%E7%BA%B8/%E9%97%AD%E5%85%B3%E4%B8%AD%E5%8F%A3%E7%BD%A9.png'
},

]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    touList: _tousList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击选项进入详情页
  detail: function (e) {
    // console.log(e)
    var touNum = e.currentTarget.dataset.tounum
    // console.log(yangzhiNum)
    switch (touNum) {
      case 0:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[0].coverImgUrl
        wx.navigateTo({
          url: `../canvas/canvas`
        })
        break;
      case 1:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[1].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 2:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[2].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 3:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[3].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 4:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[4].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 5:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[5].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 6:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[6].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 7:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[7].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 8:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[8].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 9:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[9].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;     
            case 0:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[0].coverImgUrl
        wx.navigateTo({
          url: `../canvas/canvas`
        })
        break;
      case 1:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[1].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 2:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[2].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 3:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[3].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 4:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[4].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 5:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[5].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 6:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[6].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 7:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[7].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 8:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[8].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break;
      case 9:
        app.globalData.img_type='fr';
        app.globalData.fr_img = _tousList[9].coverImgUrl
        wx.navigateTo({
          url: "../canvas/canvas"
        })
        break; 
        case 10:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[10].coverImgUrl
          wx.navigateTo({
            url: `../canvas/canvas`
          })
          break;
        case 11:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[11].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 12:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[12].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 13:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[13].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 14:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[14].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 15:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[15].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 16:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[16].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 17:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[17].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 18:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[18].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;
        case 19:
          app.globalData.img_type='fr';
          app.globalData.fr_img = _tousList[19].coverImgUrl
          wx.navigateTo({
            url: "../canvas/canvas"
          })
          break;       
      default:
      //do nothing
    }
    
  },

})