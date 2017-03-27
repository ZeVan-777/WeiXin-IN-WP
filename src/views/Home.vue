<template>
    <div>
        <top-nav></top-nav>
        <keep-alive>
            <router-view class="fill-screen"></router-view>
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
.fill-screen{
    width: 100%;
    position: absolute;
    top: 54px;
    bottom: 0;
    left: 0;
    background-color: black;
}
</style>

