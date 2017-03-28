<template>
    <mu-tabs :value="activeTab" lineClass="hide" class="top-nav">
        <mu-tab v-for="(tab, i) in tabs" :value="tab.name" :key="i" :icon="tab.icon" @click="handleClick(i, tab.name)">
        </mu-tab>
    </mu-tabs>
</template>

<script>
	export default {
			name: 'top-nav',
			data () {
			    return {
			    	tabs: [
                      {name: "messages", icon: "chat_bubble_outline"},
                      {name: "contacts", icon: "contacts"},
					  {name: "nearby", icon: "near_me"},
					  {name: "personal", icon: "person_outline"},
                    ],
                  index: 0,
                  activeTab: this.$route.name,
                }
            },
      methods: {
        initIndex　() {
        	var routeName = this.$route.name;
            this.tabs.forEach((item, index) => {
            	if(item.name == routeName){
            		return index;
                }
            })
        },
		handleClick (i, name) {
			this.index = i;
			// active tab immediately after click tab
			this.activeTab = name;
        }
      },
      watch: {
        // slide router view base on index
		index (toIndex, fromIndex) {
		    var routeName = this.tabs[toIndex].name;
		    var maxIndex = this.tabs.length - 1;
		    this.activeTab = routeName;

		    var dirc = toIndex > fromIndex ? 1 : -1;
		    if(maxIndex == Math.abs(toIndex - fromIndex)){
		        dirc = -dirc;
            }

          this.$emit('change', dirc);
		  this.$router.replace({name: routeName});
        }
      },
      created () {
        this.$bus.on('homeSlide', (dirc) => {
        	var size = this.tabs.length;
            this.index = ((size + this.index) + dirc) % size;
        });
      }
    }
</script>

<style lang="less">
    .hide {
        visibility: hidden;
    }
    .top-nav {
        .mu-icon{
            font-size: 30px;
        }
    }
</style>

