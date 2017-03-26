<template>
    <mu-tabs :value="activeTab" @change="handleTabChange" lineClass="hide" disableRipple>
        <mu-tab value="messages" icon="chat_bubble_outline" href="#/messages"/>
        <mu-tab value="contacts" icon="contacts" href="#/contacts"/>
        <mu-tab value="nearby" icon="near_me" href="#/nearby"/>
        <mu-tab value="personal" icon="person_outline" href="#/personal"/>
    </mu-tabs>
</template>

<script>
	export default {
			name: 'top-nav',
			methods: {
				handleTabChange (val) {
					this.activeTab = val;
				}
			},
      computed: {
        activeTab () {
        	return this.$route.name;
        }
      }
    }
</script>

<style>
    .hide {
        visibility: hidden;
    }
</style>

