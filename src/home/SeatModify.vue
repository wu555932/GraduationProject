<template>
    <div class="seatmodify">
        <h1>座位数量修改</h1>
        自习室选择：<el-select v-model="value1"  placeholder="请选择自习室">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.label"
      :value="item.id">
    </el-option>
  </el-select>
    </div>
</template>

<script>
export default {
    name:'SeatModify',
    components:{},
    data() {
        return {
            value1:"",
            options:''
        }
    },
    methods:{
        showinfo() {
            let seatinfo = JSON.parse(localStorage.getItem('seatinfo'))
                this.options = seatinfo;
        }
    },
    created() {
        this.showinfo()
    }
}
</script>

<style lang="scss" scoped>
.seatmodify {
    position:relative;
    h1 {
        position:absolute;
        left: 40%;
        top:-30px
    }
}
</style>