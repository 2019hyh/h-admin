<template>
  <div id="userList" />
</template>

<script>
import echarts from 'echarts'
export default {
    name: '',
    components: {
    },
    directives: {},
    filters: {},
    extends: {},
    mixins: {},
    props: {},
    data() {
        return {
            option: {
                title: {
                    text: '世界人口总量',
                    subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六']
                },
                series: [{
                    name: '总用户',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                }
                ] }
        }
    },
    computed: {},
    watch: {},
    methods: {
        initData() {
            var userList = echarts.init(document.getElementById('userList'))

            userList.setOption = this.data.option
        }
    }
}
</script>

<style lang="scss" scoped></style>
