<template>
  <div id="app">
    <router-view></router-view>
    <bottom-menu :menu-info="menuInfo" v-if="hasMenu"></bottom-menu>
  </div>
  </template>

  <script>
  import BottomMenu from './views/BottomMenu'
  import ConfigMenu from './config.menu'

  export default {
		data () {
			return {
              hasMenu: true
            }
		},
		components: {
			BottomMenu
		},
		computed: {
			menuInfo: function () {
				return ConfigMenu[this.$route.name];
			}
		},
        created () {
			this.$bus.on('setMenu', (hasMenu) => {
              this.hasMenu = hasMenu;
            });
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

  .mu-appbar{
    color: white;
    background-color: @grey900;
  }

  .mu-appbar-title {
    font-size: 28px;
  }
</style>
