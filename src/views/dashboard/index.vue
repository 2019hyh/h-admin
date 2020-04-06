<template>

  <el-row class="row-bg" justify="space-around" align="middle">

    <el-col :span="10" :md="10" :sm="22" :xs="22" :offset="1"><div class="grid-content bg-purple">

      <userList />

    </div>

    </el-col>
    <el-col :span="10" :md="10" :sm="22" :xs="22" :offset="1"><div class="grid-content bg-purple">

      <Builder />

    </div></el-col>
  </el-row>

</template>

<script>
import userList from '@/echarts/userList.vue'
import Builder from '@/echarts/builder.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Dashboard',
    components: {
        userList,
        Builder
    },
    computed: {
        ...mapGetters(['name'])
    }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
