// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputvalue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  search(){
   wx.request({
     url: 'http://localhost:3000/list',
     data: {
       q: this.data.inputvalue //模糊查询
     },
     header: {'connect-type':'application/json'},
     method: 'GET',
     success:(res)=>{
       console.log(res)
      this.setData({
     list:res.data
      })
     }
    
   })
  },
  go(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.id
    })
  },
})