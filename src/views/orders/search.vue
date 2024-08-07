<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Date">
          <el-date-picker
            v-model="date_range"
            type="daterange"
            align="right"
            start-placeholder="Start Date"
            end-placeholder="End Date">
          </el-date-picker>
        </el-form-item>
    <el-row>

      <el-col :span="4"><div class="grid-content bg-purple-light">
        <el-form-item label="Status">
          <el-select v-model="form.region" clearable>
            <el-option label="New" value="shanghai"></el-option>
            <el-option label="Fulfill" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div></el-col>

      <el-col :span="4"><div class="grid-content bg-purple-light">
        <el-form-item label="Order ID">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </div></el-col>

      <el-col :span="4"><div class="grid-content bg-purple">
        <el-form-item label="SKU">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </div></el-col>

      <el-col :span="4"><div class="grid-content bg-purple-light">
        <el-form-item label="SKU">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </div></el-col>

      <el-col :span="4"><div class="grid-content bg-purple">
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">Search</el-button>
        </el-form-item>
        
      </div></el-col>
    </el-row>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        date_range: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>