// pages/form/form.js
Page({

  /**
   * ҳ��ĳ�ʼ����
   */
  data: {
    text: "Ф���",
    paragh:"xyh"
  },

  /**
   * �������ں���--����ҳ�����
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'formData',
      success: function (res) {
        console.log(res.data)
        that.setData({
          text: res.data.text,
          paragh: res.data.paragh
        });
      }
    })
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

  doSubmit: function (e) {
    console.dir(e)
    var that = this;
    var text = e.detail.value.text;
    var paragh = e.detail.value.paragh;

    wx.setStorage({
      key: "formData",
      data: {
        text: text,
        paragh: paragh
      }
    })
  }
})