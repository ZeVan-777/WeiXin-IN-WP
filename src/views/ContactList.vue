<template>
    <mu-list v-if="contactList">
        <mu-list-item v-for="item in contactList"
            :title="item.title" disableRipple>
        </mu-list-item>
    </mu-list>
</template>

<script>
    import ContactList from '../data.contactList.json'

    export default {
    	data () {
    		return {
    			contactList: []
            }
        },
      created() {
    		this.contactList = ContactList;
      }
    }
</script>