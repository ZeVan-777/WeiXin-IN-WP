<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style lang="less">
  @import "../node_modules/muse-ui/less/colors.less";

  .mu-tabs{
    background-color: @grey800;
  }

  .mu-tab-active{
    color: @green500
  }
</style>
