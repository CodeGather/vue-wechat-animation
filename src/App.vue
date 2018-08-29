<template>
  <div id="app">
    <transition :name="'vux-switch-' + (switchStatus === 'forward' ? 'in' : 'out')">
      <keep-alive>
      <router-view class="router-view" ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import { mapState,mapActions} from 'vuex'
  import Vue from "vue"
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components : {

    },
    computed:{
      ...mapState({
        switchStatus: state => state.mutations.switchStatus,
      })
    },
  }
</script>

<style scoped>
  #app{
    width: 100%;
    height:100%;
  }
  .vux-switch-out-enter-active,
  .vux-switch-out-leave-active,
  .vux-switch-in-enter-active,
  .vux-switch-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-switch-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-switch-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-switch-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-switch-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>

<style>
  body,html{
    width:100%;
    height:100%;
  }
  *{
    margin:0;
  }
</style>
