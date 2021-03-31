<template>
    <div id="task-header" :style="{
        background: $store.state.backColor
    }">
        <h2>学习记事本</h2>
        <i class="iconfont iconmenu" @click="showMask"></i>
    </div>
</template>

<script>
export default {
    name: '',
    data() { 
        return {

        }
    },
    created() {

    },
    methods:{
        showMask() {
            this.$store.commit('changeMask')
        }
    },
}
</script>

<style scoped lang="scss">
#task-header{
    height: 70px;
    h2 {
        line-height: 70px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    color: #fff;
    width: 100%;
    position: relative;
    i{
        position: absolute;
        top: 20px;
        right: 10px;
        font-size: 30px;
    }
}
</style>