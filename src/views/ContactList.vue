<template>
<div class="contacts" >
    <scroll ref="scroller"
    :on-refresh="refresh" refreshText="">
            <mu-list-item v-for="item in defaults" :key="item.title"
                          :title="item.title" disableRipple>
                <mu-icon slot="left" :value="item.icon" :style="{backgroundColor: item.bgColor}"></mu-icon>
            </mu-list-item>
            <mu-list-item v-for="(item, i) in addAlphaList" :key="i"
                          :title="item.avatar ? item.title : ''" disableRipple>
                <mu-avatar slot="left" :src="item.avatar" v-if="item.avatar"></mu-avatar>
                <template v-else>
                    <div class="alpha">
                        {{ item.title }}
                </div>
                </template>
            </mu-list-item>
    </scroll>
    <div class="alphaAnchor">

    </div>
</div>
</template>

<script>
    import ContactList from '../data.contactList.json'

    export default {
    	data () {
    		return {
              contactList: ContactList,
              alphaList: [],
              defaults: [
                {title: "朋友推荐信息", icon: "person_add", bgColor: '#ffc107'},
                {title: "群聊", icon: "people", bgColor: '#2e7d32'},
                {title: "标签", icon: "local_offer", bgColor: '#303f9f'},
                {title: "公众账号", icon: "record_voice_over", bgColor: '#1565c0'}
              ]
            }
        },
        computed: {
          // only use filter at {{ Mustache }} and v-bind
          addAlphaList () {
            var alphabet = this.alphaList;
            var outList = [];
            this.contactList.forEach((item) => {
                var alpha = item.title.charAt(0);
                if(!alphabet.includes(alpha)) {
					alphabet.push(alpha);
					outList.push({title: alpha});
                }
                outList.push(item);
            });

            return outList;
          }
        },
      methods: {
    		refresh () {
                this.$refs.scroller.finishPullToRefresh()
            }
      }
    }
</script>

<style lang="less">
    .contacts{
        .spinner-holder {
            visibility: hidden;
        }

        .mu-icon{
            color: white;
            display: block;
            font-size: 30px;
            padding: 5px;
            background-clip: border-box;
        }

        .mu-item-wrapper{
            padding: 5px;
        }

        .mu-item {

        }

        .alpha{
            @color: lightgreen;
            font-size: 24px;
            padding-left: 2px;
            border: 2px solid @color;
            color: @color;
            width: 40px;
            height: 40px;
            margin: -13px 0;
        }
    }
</style>