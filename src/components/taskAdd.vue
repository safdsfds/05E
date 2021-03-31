<template>
    <div id="task-add">
        <input type="text" placeholder="代办事项" v-model="content" @keyup.enter="add"> 
        <button :style="{
                 background: $store.state.backColor
        }">提交</button>
    </div>
</template>

<script>
export default {
    name: '',
    data() { 
        return {
            content: '',
        }
    },
    created() {

    },
    methods:{
        add() {
            let obj = {
                content: this.content,
                status: 1, // 假设任务状态为1表示未完成的任务 2表示已完成的任务 3表示已取消的任务
                id: new Date().getTime(),
                check: false
            }
            this.$store.commit('addTask', obj)
            this.content = ''
        }
    },
}
</script>

<style scoped lang="scss">
    #task-add {
        text-align: center;
        height: 80px;
        padding-top: 20px;
        input {
            width: 250px;
            height: 40px;
            border: 1px solid #999;
            vertical-align: middle;
            margin-right: 10px;
            border-radius: 6px;
            padding-left: 10px;
            font-size: 20px;
        }
        input::placeholder {
            font-size: 20px;
        }
        button{
            width: 70px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border: none;
            vertical-align: middle;
            font-size: 20px;
            color: #fff;
            border-radius: 6px;
        }
    }
</style>