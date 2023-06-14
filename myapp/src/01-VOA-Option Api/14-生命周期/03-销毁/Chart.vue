<template>
  <div>
    <button @click="handleClick">改变图标宽度</button>
    <div id="main" :style="{ width, height: '400px' }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      obj: {},
      width: '100%',
    };
  },
  methods: {
    handleClick() {
      this.width = '800px';
      this.myChart = null;
      this.$nextTick(() => {
        console.log('nextTick'); // nextTick在updated后面执行
        this.myChart.resize();
      });
    },
  },
  created() {
    this.obj = {
      title: {
        text: 'ECharts 入门示例2',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    this.myChart.setOption(this.obj);
    // 监听浏览器窗口的变化
    window.onresize = () => {
      console.log('resize');
      this.myChart.resize();
    };
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated', this.width);
    // 改变echarts图表的大小
    // this.myChart.resize();
  },
  unmounted() {
    // 卸载
    window.onresize = null;
  },
};
</script>
