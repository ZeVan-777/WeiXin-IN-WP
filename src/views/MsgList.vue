<template>
<div>
    <mu-list v-if="msgList">
        <mu-list-item v-for="msg in msgList" :key="msg.title"
                      :title="msg.title" disableRipple>
            <mu-avatar slot="leftAvatar" :src="msg.avatar"/>
            <span slot="describe">{{ msg.lastMsg }}</span>
            <p slot="right">{{ msg.time|formatTime }}</p>
        </mu-list-item>
    </mu-list>
</div>
</template>

<script>
	import DataMsgList from '../data.msgList.json'
    import moment from 'moment'

    export default {
        data () {
            return {
                msgList: DataMsgList
            }
        },
      filters: {
        formatTime (val) {
            var now = moment();
            var time = moment(val);

            if(time.isSame(now, 'day')){
            	return time.format('hh:mm');
            }
            else if(now.subtract(1, 'day').isSame(time, 'day')){
            	return '昨天';
            }
            return time.format('YYYY MM-DD');
        }
      }
    }
</script>

<style>
    .mu-item-text{
        display: block;
        word-break:keep-all;
        white-space:nowrap;
        width: 90%;
    }

    .mu-item-right {
        position: absolute;
        right: 5%;
        width: 30%;
        justify-content: flex-end;
        align-items: flex-start;
    }

    .mu-avatar img {
        border-radius: 0;
    }
</style>