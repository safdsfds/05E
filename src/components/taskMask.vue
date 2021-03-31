<template>
    <div id="task-mask" @click="closeMask">
        <ul>
            <li :style="{
                 background: $store.state.backColor
            }" @click.stop="changeBack">切换主题</li>
            <li :style="{
                 background: $store.state.backColor
            }">下载数据</li>
            <li :style="{
                 background: $store.state.backColor
            }">导入数据</li>
            <li :style="{
                 background: $store.state.backColor
            }">编辑数据</li>
            <li :style="{
                 background: $store.state.backColor
            }">清空数据</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    data() { 
        return {
            colors: ['red', 'blue', 'green', 'yellow', '#f39a96']
        }
    },
    created() {

    },
    methods:{
        closeMask() {
            this.$store.commit('changeMask')
        },

        changeBack() {
            
            this.$store.commit('changeBackColor', this.colors[Math.round(Math.random()*4)])
        }
    },
}
</script>

<style scoped lang="scss">
#task-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.1);
    ul{
        width: 70%;
        height: 100%;
        padding: 100px 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        li {
            color: #fff;
            padding: 10px 15px;
            border-radius: 6px;
            font-size: 26px;
        }
    }
}
</style>