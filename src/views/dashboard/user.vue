<template>
  <el-card class="box-card">
    <div style="margin-bottom: 10px;">
      <el-row>
        <el-col :span="18"><div class="grid-content bg-purple">
          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"><span>{{ username }}</span></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
              <el-button icon="el-icon-refresh" circle @click="reload()" />
            </div></el-col>
          </el-row>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">
          <el-badge v-if="total_new_orders > 0" :value="total_new_orders" class="item">
            <el-button>New Orders</el-button>
          </el-badge>
        </div></el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">
        <div slot="header" class="clearfix" style="margin-bottom: 20px;">
          <!-- <i class="el-icon-user"></i><span>Hiệp</span> -->
        </div>
        <div class="component-item">
          <div :style="{zIndex:1,height:'150px',width:'150px'}" class="pan-item">
            <div class="pan-info">
              <div class="pan-info-roles-container">
                123
                <slot />
              </div>
            </div>
            <!-- eslint-disable-next-line -->
            <div v-bind:style="{ 'background-image': 'url(' + backgroundimagelink + ')' }" class="pan-thumb"></div>
          </div>
        </div>
      </div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple-light">
        <el-table v-loading="loading" style="width: 100%" :data="tableData" show-summary>
          <el-table-column prop="name" label="Shop" width="200" />
          <el-table-column prop="products" label="Products" />
          <el-table-column prop="orders" label="Orders" />
        </el-table>
      </div></el-col>
    </el-row>
  </el-card>
</template>
<script>
import { getOrders, getProducts } from '@/api/table'
import { Message } from 'element-ui'
export default {
  name: 'UserComponent',
  props: {
    username: { type: String, default: 'Noname' },
    shops: { type: Array, default() { return [] } },
    backgroundimagelink: { type: String, default: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191' }
  },
  data() {
    return {
      tableData: [],
      loading: true,
      total_new_orders: 0
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    reload() {
      Message({
        message: 'reload ' + this.username,
        type: 'success',
        duration: 5 * 1000
      })
      this.loadData()
    },
    async loadData() {
      if (this.shops) {
        this.loading = true
        this.tableData = []
        this.total_new_orders = 0
        for (let i = 0; i < this.shops.length; i++) {
          const orders_resp = await getOrders({ shop_id: this.shops[i].id, limit: 50, page: 1 })
          const products_res = await getProducts({ multi_profile_id: this.shops[i].multi_profile_id, limit: 1, page: 1 })
          this.tableData.push({
            name: this.shops[i].name,
            products: products_res.data.total_count,
            orders: orders_resp.total
          })
          if (orders_resp.data.length > 0) {
            for (let k = 0; k < orders_resp.data.length; k++) {
              if (orders_resp.data[k].items.length > 0) {
                for (let v = 0; v < orders_resp.data[k].items.length; v++) {
                  if (!orders_resp.data[k].items[v].note) {
                    this.total_new_orders += 1
                  } else {
                    if (orders_resp.data[k].items[v].note) {
                      if (orders_resp.data[k].items[v].note.toLowerCase() !== 'done') {
                        this.total_new_orders += 1
                      }
                    }
                  }
                }
              }
            }
          }
        }
        this.loading = false
      }
    }
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
.pan-item {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: default;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.pan-info-roles-container {
  padding: 20px;
  text-align: center;
}

.pan-thumb {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  transform-origin: 95% 40%;
  transition: all 0.3s ease-in-out;
}

/* .pan-thumb:after {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  top: 40%;
  left: 95%;
  margin: -4px 0 0 -4px;
  background: radial-gradient(ellipse at center, rgba(14, 14, 14, 1) 0%, rgba(125, 126, 125, 1) 100%);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);
} */

.pan-info {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
}

.pan-info h3 {
  color: #fff;
  text-transform: uppercase;
  position: relative;
  letter-spacing: 2px;
  font-size: 18px;
  margin: 0 60px;
  padding: 22px 0 0 0;
  height: 85px;
  font-family: 'Open Sans', Arial, sans-serif;
  text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
}

.pan-info p {
  color: #fff;
  padding: 10px 5px;
  font-style: italic;
  margin: 0 30px;
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

.pan-info p a {
  display: block;
  color: #333;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 1px;
  padding-top: 24px;
  margin: 7px auto 0;
  font-family: 'Open Sans', Arial, sans-serif;
  opacity: 0;
  transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s;
  transform: translateX(60px) rotate(90deg);
}

.pan-info p a:hover {
  background: rgba(255, 255, 255, 0.5);
}

.pan-item:hover .pan-thumb {
  transform: rotate(-110deg);
}

.pan-item:hover .pan-info p a {
  opacity: 1;
  transform: translateX(0px) rotate(0deg);
}
</style>
