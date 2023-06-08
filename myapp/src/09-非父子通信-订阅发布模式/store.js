// 调度中心

export default {
  dataList: [],

  // 订阅
  subscribe (cb) {
    this.dataList.push(cb);
  },

  // 发布
  publish (value) {
    this.dataList.forEach(cb => cb(value));
  }

};