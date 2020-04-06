<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>{{ option.title.text }}</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div id="userList" />
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
                    text: '世界人口总量',
                    show: false
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
                    width: '100%',
                    height: '80%',
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
    mounted() {
        this.initData('userList', this.option)
    },
    methods: {
        initData(id, data) {
            console.log(this.$echarts)
            const userList = this.$echarts.init(document.getElementById(id))

            userList.setOption(data)

            window.addEventListener('resize', function() {
                userList.resize()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#userList{
width:96%;
    height:300px;
}

</style>
