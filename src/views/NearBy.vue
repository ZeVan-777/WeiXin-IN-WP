<template>
    <div class="nearby bg-container">
        <div class="main" style="width: 100%">
            <mu-list>
                <mu-list-item title="朋友圈">
                    <mu-icon slot="left" value="camera"></mu-icon>
                </mu-list-item>
            </mu-list>
        </div>
        <div class="others">
            <a class="nears" v-for="(near, i) in nears" :key="i">
                <mu-icon :value="near.icon"></mu-icon>
                <p class="title">{{ near.title }}</p>
            </a>
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
					icon: 'flip'
				},
				{
					title: "摇一摇",
                    icon: 'screen_rotation'
				},
				{
					title: "附近的人",
                    icon: 'wc'
				},
				{
					title: "游戏中心",
					icon: 'gamepad'
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

            .mu-list{
                padding-left: 10%;
                height: 100%;
                display: flex;
                align-items:center;
            }
            .mu-item-title{
                font-size: 20px;
            }
        }

        .nears {
            height: percentage(1/2);
            /* 小于最小像素 1px 也无法渲染，大屏幕可添加媒体查询适应 */
            width: 49.8%;
            padding: 0;

            margin: 1px 0 0;

            background-color: black;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content:center;

            * {
                text-align: center;
            }
            .mu-icon{
                color: cornflowerblue;
            }
            .title{
                margin-top: 5px;
                color: white;
            }


        }

        .mu-icon {
            font-size: 40px;
        }
    }
</style>