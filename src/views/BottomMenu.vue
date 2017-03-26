<template>
    <div class="bottom-menu">
        <mu-bottom-sheet :open="isPopup" @close="toggle" :sheetClass="{farther: isIcon}">
            <mu-list v-for="item in menuInfo.items" :key="item.name">
                <mu-list-item :title="item.name"></mu-list-item>
            </mu-list>
        </mu-bottom-sheet>
        <div class="permanent-nav" @click="toggle" :style="{height: fixedHeight + 'px'}">
            <div class="bottom-horiz">
                <template v-for="icon in menuInfo.icons">
                    <div class="bottom-icon">
                        <div class="circle">
                            <mu-icon :value="icon.name"></mu-icon>
                            <p class="icon-title" v-if="isPopup">{{ icon.title }}</p>
                        </div>
                    </div>
                </template>
                <!--<div class="circle">-->
                    <!--<mu-icon value="search"></mu-icon>-->
                <!--</div>-->
            </div>
            <mu-icon value="more_horiz" class="more" :class="{only : !menuInfo.icons}"></mu-icon>
        </div>
    </div>
</template>

<script>
    export default {
      props: [
      	'menuInfo'
      ],
      data () {
        return {
          isPopup: false,
          fixedHeight: 24,
          isIcon: false
        }
      },
      methods: {
		toggle () {
		  this.isPopup = !this.isPopup;
          this.fixedHeight += this.isPopup ? 10 : -10;
		}
      },
      watch: {
        menuInfo: function (val){
          this.isIcon = !!val.icons;
          this.fixedHeight = this.isIcon ? 34 : 24;

        }
      }
	}
</script>

<style lang="less">
    .mu-bottom-sheet{
        margin-bottom: 34px;

    }

    .farther {
        margin-bottom: 44px;
    }

    .permanent-nav{
        position: fixed;
        bottom: 0;
        width: 100%;

        background-color: fade(grey, 10%);
        z-index: 99999999;

        transition: height .45s cubic-bezier(.23,1,.32,1);

        .bottom-horiz{
            display: flex;
            justify-content: center;
        }

        .bottom-icon{
            display: flex;
            justify-content: center;
            align-items: center;

            margin: 5px 3%;

            font-size: 1px;
        }

        .circle{
            @diameter: 24px;
            width: @diameter;
            height: @diameter;
            border-radius: 50%;
            border: solid 2px white;

            display: flex;
            flex-direction: column;
            justify-content:flex-end;
            align-items: center;

            .mu-icon{
                font-size: 17px;
            }

            p.icon-title{
                position: absolute;
                bottom: 0;
                padding: 0;
                margin: 0;

                transform: scale(0.6, 0.6);
            }
        }

        .more{
            @mr: 2%;

            position: absolute;
            top: 0;
            right: @mr;

            &.only{
                position: static;
                float: right;
                margin-right: @mr;
            }
        }
    }
</style>