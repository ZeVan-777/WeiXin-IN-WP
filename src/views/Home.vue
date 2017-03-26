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
        TopNav
    }
}
</script>

<style>

</style>

