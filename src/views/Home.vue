<template>
  <div class="home">
    <!-- {{$store.getters.changeContent}}
    {{$store.getters.changeContent}}
    {{backColor}}
    {{changeTime}} -->
    <ul>
      <li v-for="item in goods">{{item.name}}</li>
    </ul>
    <task-header></task-header>
    <div class="container">
      <task-add></task-add>
      <task-list></task-list>
    </div>
    <transition name="slide">
      <task-mask v-show="$store.state.toggleMask"></task-mask>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import taskHeader from 'components/taskHeader'
import taskMask from 'components/taskMask'
import taskAdd from 'components/taskAdd'
import taskList from 'components/taskList'
export default {
  name: 'Home',
  components: {
    taskHeader,
    taskMask,
    taskAdd,
    taskList
  },
  computed: {
    ...mapState([
      'backColor',
      'goods'
    ]),

    ...mapGetters([
      'changeTime'
    ])
  },
  created() {
    console.log(this)
    // console.log(this.$store.getters.changeContent)
    // this.changeBackColor('red')
    // this.$store.dispatch('getProducts')
    this.getProducts()
  },

  methods: {
    ...mapMutations([
      'changeBackColor'
    ]),

    ...mapActions([
      'getProducts'
    ])
  }
}
</script>
<style lang="scss" scoped>
  .home{
    height: 100%;
    position: relative;
  }
  .slide-enter-active, .slide-leave-active {
    transition: transform .5s;
  }
  .slide-enter, .slide-leave-to {
    transform: translate(-100%);
  }
  .container {
    padding: 0 10px;
  }
</style>
