<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>{{ option.title.text }}</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div id="Builder" />
  </el-card>

</template>

<script>
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
                    text: '阶梯瀑布图',
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function(params) {
                        var tar
                        if (params[1].value !== '-') {
                            tar = params[1]
                        } else {
                            tar = params[0]
                        }
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
                    }
                },
                legend: {
                    data: ['支出', '收入']
                },
                grid: {
                    width: '90%',
                    height: '80%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    splitLine: { show: false },
                    data: (function() {
                        var list = []
                        for (var i = 1; i <= 11; i++) {
                            list.push('11月' + i + '日')
                        }
                        return list
                    }())
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '辅助',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
                    },
                    {
                        name: '收入',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
                    },
                    {
                        name: '支出',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'bottom'
                        },
                        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
                    }
                ]
            }
        }
    },
    computed: {},
    watch: {},
    mounted() {
    // 生命周期钩子：模板编译、挂载之后（此时不保证已在 document 中）
        this.Builder('Builder', this.option)
    },

    methods: {
        Builder(id, data) {
            console.log(this.$echarts)
            const builder = this.$echarts.init(document.getElementById(id))

            builder.setOption(data)
            window.addEventListener('resize', function() {
                builder.resize()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#Builder{
    width:96%;
    height:300px;
}
</style>
