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
    }
}
</script>

<style>

</style>

