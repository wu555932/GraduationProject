<template>
    <div class="seatinfo">
        预约座位：<el-input class="reserve" v-model="reserve"></el-input>
        空闲座位：<el-input class="free" v-model="free"></el-input>
    </div>
</template>

<script>
export default {
    name:'SeatInfo',
    components:{},
    data() {
        return {
           reserve:'',
           free:'' 
        }
    },
    methods:{

    },
    created:{
        
    }
}
</script>

<style lang="scss" scoped>
.seatinfo {
    .reserve {
        display: inline-block;
        width: 100px;
    }
    .free {
        display: inline-block;
        width: 100px;
    }
}
</style>