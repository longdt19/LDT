<template>
  <div class="dashboard-container" style="margin-top: 20px;">
    <el-row style="margin-left: 20px; margin-right: 20px;" :gutter="10">
      <el-col :span="12"><div class="grid-content bg-purple">
        <user-component username="Hiệp" :shops="shops_hiep" backgroundimagelink="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191" />
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <user-component username="Long" :shops="shops_long" backgroundimagelink="https://images.hcmcpv.org.vn/res/news/2024/02/24-02-2024-ve-su-dung-co-dang-va-hinh-anh-co-dang-cong-san-viet-nam-A3C3304C.jpg" />
      </div></el-col>
    </el-row>

    <el-row style="margin-left: 20px; margin-right: 20px; margin-top: 20px" :gutter="10">
      <el-col :span="12"><div class="grid-content bg-purple">
        <user-component username="Phương Anh" :shops="shops_phuonganh" backgroundimagelink="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191" />
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <user-component username="Chi" :shops="shops_chi" backgroundimagelink="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191" />
      </div></el-col>
    </el-row>

    <el-row style="margin-left: 20px; margin-right: 20px; margin-top: 20px; margin-bottom: 20px" :gutter="10">
      <el-col :span="12"><div class="grid-content bg-purple">
        <user-component username="Nghĩa" :shops="shops_nghia" backgroundimagelink="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191" />
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <user-component username="Boom" :shops="shops_bom" backgroundimagelink="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191" />
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import UserComponent from './user'
import { SHOPS_LONG, SHOPS_HIEP, SHOPS_PHUONGANH, SHOPS_CHI, SHOPS_NGHIA, SHOPS_BOM } from '@/utils'

export default {
  name: 'Dashboard',
  components: {
    UserComponent
  },
  data() {
    return {
      shops_hiep: null,
      shops_long: null,
      shops_phuonganh: null,
      shops_chi: null,
      shops_nghia: null,
      shops_bom: null
    }
  },
  created() {
    this.shops_long = SHOPS_LONG
    this.shops_hiep = SHOPS_HIEP
    this.shops_phuonganh = SHOPS_PHUONGANH
    this.shops_chi = SHOPS_CHI
    this.shops_nghia = SHOPS_NGHIA
    this.shops_bom = SHOPS_BOM
  }
}
</script>

<style lang="scss" scoped>

</style>
