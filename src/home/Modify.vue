<template>
    <div class="modify">
        学号:<el-input v-model="id" class="sid"></el-input>
            <el-button type="primary" class="btn">查询</el-button>
            <template >
                <div class="reserveinfo" v-show="show">
                    专业:<el-input v-model="major"  class="input"></el-input> 
                    学号:<el-input v-model="sid"    class="input"></el-input>
                    姓名：<el-input v-model="name"  class="input"></el-input> 
                    预约时间：<el-input v-model="start"  class="input1"></el-input>
                    终止时间：<el-input v-model="end"  class="input1"></el-input>
                </div>
            </template>
    </div>
</template>

<script>
export default {
    name:'Modify',
    components:{},
    data() {
        return {
            id:'',
            major:'',
            sid:'',
            name:'',
            start:'',
            end:'',
            show:false
        }
    }
}
</script>

<style lang="scss" scoped>
.modify {
    .sid {
        display: inline-block;
        width: 300px;
    }
    .btn {
        margin-left: 20px;
    }
    .input {
        display: block;
        width: 300px;
    }
    .input1 {
        display: inline-block;
        width: 300px;
    }
}
</style>