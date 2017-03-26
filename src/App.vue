<template>
  <div id="app">
    <router-view></router-view>
    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
  import BottomMenu from './views/BottomMenu'

  export default {
		data () {
			return {}
		},
		components: {
			BottomMenu
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
    margin-bottom: 34px;
    background-color: fade(black, 10%);
  }
</style>
