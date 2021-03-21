//index.js
import CanvasDrag from '../../canvas-drag/canvas-drag';
const app = getApp();
Page({
    data: {
        graph: {},
    },
    
    doImgSecCheck: function () {
    var d = Date.now()
    wx.serviceMarket.invokeService({
        service: 'wxee446d7507c68b11',
        api: 'imgSecCheck',
        data: {
        "Action": "ImageModeration",
        "Scenes": ["PORN", "POLITICS", "TERRORISM"],
        "ImageUrl": app.globalData.bg_img,
        "ImageBase64": "",
        "Config": "",
        "Extra": ""
        },
    }).then(res => {
        console.log(JSON.stringify(res))
        wx.showModal({
        title: 'cost',
        content: (Date.now() - d) + ' ',
        })
    })
    },

    onAddImage() {
    wx.navigateTo({
        url: `../select/select`
        })
    },

    onExport() {
        CanvasDrag.export()
            .then((filePath) => {
                console.log(filePath);
                wx.previewImage({
                    urls: [filePath]
                })
                wx.saveImageToPhotosAlbum({
                    filePath:filePath,
                    success(res) {
                        wx.showToast({
                            title: '以及保存到本地',
                            icon: 'success',
                            duration: 2000
                          })
                     }
                  })
            })
            .catch((e) => {
                console.error(e);
            })
    },



     onClearCanvas:function(event){
        let _this = this;
        _this.setData({canvasBg:null});
        CanvasDrag.clearCanvas();
    },

    onUndo:function(event){
        CanvasDrag.undo();
    },

    onLoad:function(option) {
        console.log(option)
        console.log(app.globalData.img_type)
        var that=this;

        if(app.globalData.img_type == 'bg'){
            CanvasDrag.changeBgImage(app.globalData.bg_img);
        }
        if(app.globalData.img_type == 'fr'){
            CanvasDrag.changeBgImage(app.globalData.bg_img);
            wx.getImageInfo({
                src : app.globalData.fr_img,
                success : res => {
                this.setData({
                    graph: {
                        w: 120,
                        h: 120,
                        type: 'image',
                        url: res.path,
                    }
                });
                }
            });
        }
    }
    
});
