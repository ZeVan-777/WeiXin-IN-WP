<template>
    <div class="nearby bg-container">
        <div class="main" style="width: 100%"></div>
        <div class="others">
            <div class="nears"></div>
            <div class="nears"></div>
            <div class="nears"></div>
            <div class="nears"></div>
        </div>
    </div>
</template>

<script>
export default {
	data () {
		return {
			nears: [
				{
					title: "扫一扫",
					img: ''
				},
				{
					title: "摇一摇",
					img: ''
				},
				{
					title: "附近的人",
					img: ''
				},
				{
					title: "游戏中心",
					img: ''
				}
			]
		}
	}
}
</script>

<style lang="less">
    .nearby {
        &.bg-container{
            background-color: #424242;
            bottom: 24px;
        }

        .others {
            height: percentage(2/3);
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }

        .main {
            height: percentage(1/3);
            background-color: black;
        }

        .nears {
            height: percentage(1/2);
            /* 小于最小像素 1px 也无法渲染，大屏幕可添加媒体查询适应 */
            width: 49.8%;
            padding: 0;

            margin: 1px 0 0;

            background-color: black;
        }
    }
</style>