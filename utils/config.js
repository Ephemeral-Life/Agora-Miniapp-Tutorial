const APPID = "1bb49036a02345ab9036e18314dae6b2";

if (APPID === "") {
  wx.showToast({
    title: `请在config.js中提供正确的appid`,
    icon: 'none',
    duration: 5000
  });
}

module.exports = {
  APPID: APPID
}
