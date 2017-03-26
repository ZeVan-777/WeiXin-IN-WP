<template>
  <div id="app">
    <router-view></router-view>
    <bottom-menu :menu-info="menuInfo"></bottom-menu>
  </div>
  </template>

  <script>
  import BottomMenu from './views/BottomMenu'
  import ConfigMenu from './config.menu'

  export default {
    data () {
    return {

  }
  },
  components: {
  BottomMenu
  },
  computed: {
  menuInfo: function () {
  return ConfigMenu[this.$route.name]
  }
  }
  }
  </script>


<style lang="less">
  @import "../node_modules/muse-ui/less/colors.less";

    .mu-tabs{
      background-color: @grey800;
    }

    .mu-tab-link{
      color: @grey500;
    }

    .mu-tab-active{
      color: @green500;
    }

    .mu-bottom-sheet {
      background-color: fade(grey, 10%);
    }
</style>
