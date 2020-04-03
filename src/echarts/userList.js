var echarts = require('echarts')

var userList = echarts.init(document.getElementById('box'))

userList.setOption({
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
    ]
})
