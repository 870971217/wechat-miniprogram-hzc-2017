// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * ҳ��ĳ�ʼ����
   */
  data: {
    isEnd: false,
    messages: [{
      name: "����",
      last: "���ã�"
    }, {
      name: "����",
      last: "���ã�"
    }, {
      name: "����",
      last: "���ã�"
    }, {
      name: "����",
      last: "���ã�"
    }, {
      name: "����",
      last: "���ã�"
    }, {
      name: "����",
      last: "���ã�"
    }, {
      name: "����",
      last: "���ã�"
    }]
  },

  /**
   * �������ں���--����ҳ�����
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * �������ں���--����ҳ�������Ⱦ���
   */
  onReady: function () {

  },

  /**
   * �������ں���--����ҳ����ʾ
   */
  onShow: function () {

  },

  /**
   * �������ں���--����ҳ������
   */
  onHide: function () {

  },

  /**
   * �������ں���--����ҳ��ж��
   */
  onUnload: function () {

  },

  /**
   * ҳ������¼�������--�����û���������
   */
  onPullDownRefresh: function () {

  },

  /**
   * ҳ�����������¼��Ĵ�����
   */
  onReachBottom: function () {

  },

  /**
   * �û�������ϽǷ���
   */
  onShareAppMessage: function () {

  },

  onEnd: function () {
    console.log("onEnd")
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