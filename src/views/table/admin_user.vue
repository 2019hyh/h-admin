<template>
  <el-row>
    <el-col :span="22" :offset="1"><div class="grid-content bg-purple-dark">

      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="250"
        border
      >
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        />
        <el-table-column
          prop="province"
          label="省份"
          width="120"
        />
        <el-table-column
          prop="city"
          label="市区"
          width="120"
        />
        <el-table-column
          prop="address"
          label="地址"
          width="300"
        />
        <el-table-column
          prop="zip"
          label="邮编"
          width="120"
        />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          layout="total, sizes, prev, pager, next, jumper"

          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div></el-col>
  </el-row>

</template>
<script>
export default {
    data() {
        return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4

        }
    },
    computed: {

    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row)
        },
        handleDelete(index, row) {
            console.log(index, row)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        }

    }

}
</script>
<style lang="scss" scoped>

.el-row{
    padding:20px 0;
}
</style>
