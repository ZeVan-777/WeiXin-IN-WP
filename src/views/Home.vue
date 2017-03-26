<template>
    <div>
        <top-nav></top-nav>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import TopNav from './TopNav'

export default {
	components: {
        TopNav
    },
  beforeRouteEnter (to, from, next) {
		next(vm => {
					vm.$bus.emit('setMenu', true);
				})
	},
  beforeRouteLeave (to, from, next) {
    this.$bus.emit('setMenu', false);
    next();
  }
}
</script>

<style>

</style>

