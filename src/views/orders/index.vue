<template>
  <div class="app-container">
    <search-component />
    <el-table
      v-loading="listLoading"
      :data="dataTable"
      element-loading-text="Loading"
      border
      highlight-current-row
      stripe
      row-key="id"
    >
      
      <el-table-column align="center" label="Date" min-width="120" prop="date">
      </el-table-column>

      <el-table-column align="center" label="Status" min-width="80" prop="status">
      </el-table-column>

      <el-table-column align="center" label="OrderID" min-width="180" prop="order_id">
      </el-table-column>

      <el-table-column align="center" label="SKU" min-width="180" prop="sku">
      </el-table-column>

      <el-table-column align="center" label="Style" min-width="80" prop="style">
      </el-table-column>

      <el-table-column align="center" label="Color" min-width="80" prop="color">
      </el-table-column>

      <el-table-column align="center" label="Size" min-width="50" prop="size">
      </el-table-column>

      <el-table-column align="center" label="Qua" min-width="50">
        <template slot-scope="scope">
          <p>{{ scope.row.total_quantity }}</p>
          <p>{{ scope.row.quantity }}</p>
        </template>
      </el-table-column>

      <el-table-column label="Customer" align="center" min-width="180">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>Name: Maddie Williams</p>
            <p>Addr: 53** *** ****, Hu****,Michigan,United States, 49247</p>
            <p>Phone: (+1)517*****92</p>
            <div slot="reference" class="name-wrapper">
              <el-button slot="reference">Maddie Williams</el-button>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Tracking ID" min-width="180" prop="tracking_id">
      </el-table-column>

      <el-table-column align="center" label="Base Cost" min-width="100">
        <template slot-scope="scope">
          <p>{{ scope.row.total_base_cost }}</p>
          <p>{{ scope.row.base_cost }}</p>
        </template>
      </el-table-column>

      <el-table-column align="center" label="EST Amn" min-width="100">
        <template slot-scope="scope">
          <p>{{ scope.row.total_est_amount }}</p>
          <p>{{ scope.row.est_amount }}</p>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Shop" min-width="100" prop="size">
        Anh Do
      </el-table-column>

      <el-table-column label="Action" min-width="150" align="center">
        <template slot-scope="scope">
          <el-row v-if="typeof(scope.row.children) == 'undefined'">
            <el-col :span="12"><div class="grid-content bg-purple"><update-component /></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"><el-button type="danger" icon="el-icon-delete" circle></el-button></div></el-col>
          </el-row>
      </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import { getList } from '@/api/table'
import UpdateComponent from './update'
import SearchComponent from './search'

export default {
  components: {
    UpdateComponent,
    SearchComponent
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      dialogVisible: false,
      dataTable: [
        {
          id: 1,
          date: '24/07/2024',
          status: 'fulfill',
          order_id: 576679746340032801,
          customer_name: 'Maddie Williams',
          tracking_id: 'A40579-CT-3809453',
          total_quantity: 3,
          total_base_cost: 100,
          total_est_amount: 200,
          children: [
            {id: 4, sku: '1729546371832648296', style: 'Comfort Color', color: 'Yellow', size: '3XL', quantity: 1, base_cost: 10, est_amount: 20},
            {id: 5, sku: '1729546371832648292', style: 'Comfort Color', color: 'White', size: '3XL', quantity: 1, base_cost: 10, est_amount: 20},
            {id: 6, sku: '1729546371832648293', style: 'Comfort Color', color: 'Red', size: '3XL', quantity: 1, base_cost: 10, est_amount: 20},
          ]
        },
        {
          id: 2,
          date: '24/07/2024',
          status: 'fulfill',
          order_id: '576679746340032801',
          customer_name: 'Maddie Williams',
          sku: '1729546371832648291',
          style: 'Comfort Color',
          color: 'Yellow',
          quantity: 1,
          tracking_id: 'A40579-CT-3809453',
          size: '3XL',
          base_cost: 23.5,
          est_amount: 156
        }
      ]
    }
  },
  created() {
    this.fetchData()
    console.log('===', Object.keys(this.dataTable[0].children).length)
    console.log(this.dataTable[0].children)
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done();
        }).catch(_ => {});
    }
  }
}
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
