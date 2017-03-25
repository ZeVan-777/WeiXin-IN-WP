<template>
    <div>
        <top-nav></top-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import TopNav from './TopNav'

export default {
	components: {
		'top-nav': TopNav
    }
}
</script>

<style>

</style>

