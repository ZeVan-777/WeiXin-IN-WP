<template>
    <div class="bottom-menu">
        <mu-bottom-sheet :open="isPopup" @close="toggle">
            <mu-list>
                <mu-list-item title="设置"></mu-list-item>
            </mu-list>
        </mu-bottom-sheet>
        <div class="permanent-nav" @click="toggle">
            <div class="bottom-horiz">
                <div class="circle">
                    <mu-icon value="person_add"></mu-icon>
                </div>
                <div class="circle">
                    <mu-icon value="search"></mu-icon>
                </div>
            </div>
            <mu-icon value="more_horiz" class="more"></mu-icon>
        </div>
    </div>
</template>

<script>
	import MuIconButton from "../../node_modules/muse-ui/src/iconButton/iconButton";
    export default {
      props: [
      	'popup'
      ],
      data () {
        return {
            isPopup: false
        }
      },
      computed: {

      },
      methods: {
		toggle () {
		    this.isPopup = !this.isPopup;
		}
      }
	}
</script>

<style lang="less">
    .permanent-nav{
        position: fixed;
        bottom: 0;
        width: 100%;

        background-color: fade(black, 10%);
        z-index: 99999999;

        .bottom-horiz{
            display: flex;
            justify-content: center;
        }

        .circle{
            @diameter: 24px;
            width: @diameter;
            height: @diameter;
            border-radius: 50%;
            border: solid 2px white;

            display: flex;
            justify-content: center;
            align-items: center;

            margin: 5px 3%;

            .mu-icon{
                font-size: 17px;
            }
        }

        .more{
            position: absolute;
            top: 0;
            right: 2%;
        }
    }
</style>