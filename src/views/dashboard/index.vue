<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
            >操作按钮</el-button>
          </div>

        </el-card>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
            >操作按钮</el-button>
          </div>
          <userList />
        </el-card></div></el-col>

    </el-row>

  </div>
</template>

<script>
import userList from '@/echarts/userList.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Dashboard',
    components: {
        userList
    },
    computed: {
        ...mapGetters(['name'])
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
