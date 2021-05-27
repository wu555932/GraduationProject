<template>
    <div class="container">
        <div class="head"><h1>自习室</h1></div>
        <div class="body">
            <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="plain"
            class="tag"
            @click="change(item.id)"
            >{{item.label}}</el-tag>
        </div>
    </div>
</template>

<script>
export default {
    name:'Reserve',
    data() {
        return {
            items:[
                {type:'info',label:'自习室一',id:'1'},
                {type:'info',label:'自习室二',id:'2'},
                {type:'info',label:'自习室三',id:'3'},
                {type:'info',label:'自习室四',id:'4'},
                {type:'info',label:'自习室五',id:'5'},
                {type:'info',label:'自习室六',id:'6'},
                {type:'info',label:'自习室七',id:'7'},
                {type:'info',label:'自习室八',id:'8'},
                {type:'info',label:'自习室九',id:'9'},
                {type:'info',label:'自习室十',id:'10'},
                {type:'info',label:'自习室十一',id:'11'},
                {type:'info',label:'自习室十二',id:'12'},
                {type:'info',label:'自习室十三',id:'13'},
                {type:'info',label:'自习室十四',id:'14'},
                {type:'info',label:'自习室十五',id:'15'},
                {type:'info',label:'自习室十六',id:'16'},
                {type:'info',label:'自习室十七',id:'17'},
                {type:'info',label:'自习室十八',id:'18'},
                {type:'info',label:'自习室十九',id:'19'},
                {type:'info',label:'自习室二十',id:'20'},
                {type:'info',label:'自习室二十一',id:'21'},
                {type:'info',label:'自习室二十二',id:'22'},
                {type:'info',label:'自习室二十三',id:'23'},
                {type:'info',label:'自习室二十四',id:'24'},
                {type:'info',label:'自习室二十五',id:'25'},
                {type:'info',label:'自习室二十六',id:'26'},
                {type:'info',label:'自习室二十七',id:'27'},
                
            ]
        }
    },
    methods:{
        change() {
            this.$router.push('/user/seat')
        }
    }
    
}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    .head {
        position: absolute;
        top: -108px;
        left: 40%;
    }
    .body {
        position: absolute;
       
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .tag {
            // display: inline-block;
            width: 100px;
            height: 50px;
            text-align: center;
            margin:30px 30px;
           
        }

    }
}
</style>