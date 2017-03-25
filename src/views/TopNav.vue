<template>
    <mu-tabs :value="activeTab" @change="handleTabChange" lineClass="hide">
        <mu-tab value="messages" icon="chat_bubble_outline" href="#/messages"/>
        <mu-tab value="contacts" icon="contacts" href="#/contacts"/>
        <mu-tab value="nearby" icon="near_me" href="#/nearby"/>
        <mu-tab value="personal" icon="person_outline" href="#/personal"/>
    </mu-tabs>
</template>

<script>


	export default {
      name: 'top-nav',
      data () {
        return {
          activeTab: 'messages'
        }
      },
      methods: {
	    handleTabChange (val) {
          this.activeTab = val;
        }
      }
    }
</script>

<style>
    .hide {
        visibility: hidden;
    }
</style>

