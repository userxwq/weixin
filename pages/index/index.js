var app = getApp();
Page({
  data:{
    markers:[],
    controls: [{
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.windowWidth-30)/2,
        top:  (app.globalData.windowHeight - 30) / 2 - 35,
        width: 25,
        height: 25
      },
      clickable: false
    },
      {
        id: 1,
        iconPath: '/resources/center.png',
        position: {
          left: 40,
          top: app.globalData.windowHeight - 120,
          width: 30,
          height: 30
        },
        clickable: true
      }]
  },
  controltap(){
    this.mapCtx.moveToLocation()
  },
  onShow(){
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success:(res)=>{
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
   
    })
      wx.request({
        url: 'http://localhost:3000/list',
        header: {'content-tpe':'application/json'},
        success:(res)=>{
          this.data.markers=res.data.map((item)=>{
            return{
            iconPath: "/resources/"+item.type+".png",
              id: item.id,
                latitude: item.latitude,
                  longitude:item.longitude,
                    width: 30,
                      height:30  
            }
          
          })
      
          this.setData({
            markers: this.data.markers
          })
        }
      
      })
  },
  markertap(e) {
    console.log(e.markerId)
    wx.navigateTo({
    
     url: '/pages/detail/detail?id=' + e.markerId
    })
  },
  onReady:function(e){
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx=wx.createMapContext('map')
  },
  onShareAppMessage: function (res) {

    return {
      title: '交易平台',
      path: '/pages/index/index'
    }
  },
  go(){
    wx.navigateTo({
      url: '/pages/publish/publish'

    })
  },
  search(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})