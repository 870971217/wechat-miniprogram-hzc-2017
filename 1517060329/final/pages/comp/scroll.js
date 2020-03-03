// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
      image:"/pages/image/t0.png",
      name: "中锋",
      last: "Center-forward"
    }, {
        image: "/pages/image/t1.png",
        name: "小前锋",
        last: "周琦"
    }, {
        image: "/pages/image/t2.png",
        name: "大前锋",
        last: "Power forward"
    }, {
        image: "/pages/image/t3.png",
        name: "控球后卫",
        last: "Point guard"
    }, {
        image: "/pages/image/t4.png",
        name: "得分后卫",
        last: "Point guard"
    }, {
        image: "/pages/image/t5.png",
        name: "替补中锋",
        last: "Substitute Center"
    }, {
        image: "/pages/image/t6.png",
        name: "替补前锋",
        last: "Substitute forward"
    }, {
      image: "/pages/image/t7.png",
      name: "替补后卫",
      last: "Substitute guard"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
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

  onEnd: function () {
    
    var that = this;
    var data = that.data;
    that.setData({
      isEnd: true /*,
      messages: data.messages.concat([{
        name: "Tom",
        last: "Hello!"
      }, {
        name: "john",
        last: "yes."
      }]) */
    });

  }
})