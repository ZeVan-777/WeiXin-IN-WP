<template>
    <div>
        <top-nav @change="slideDirc = arguments[0] > 0 ? 'Left':'Right'"></top-nav>
        <transition mode="out-in"
            :enter-active-class="slideEnterCls"
            :leave-active-class="slideLeaveCls">
            <router-view class="fill-screen"
                         v-finger:swipe="swipe"
                         v-finger:press-move="pressMove.bind(this)">
            </router-view>
        </transition>
    </div>
</template>

<script>
import TopNav from './TopNav'

export default {
	components: {
      TopNav
    },
    data () {
		return {
          slideDirc: 'Left',
          animateCls: [
            {leave: 'animated slideOutLeft',enter: 'animated slideInRight'},
            {leave: 'animated slideOutRight',enter: 'animated slideInLeft'}
          ]
        }
    },
    computed: {
			slideEnterCls () {
				var clsList = this.animateCls[0];
				if ('Right' == this.slideDirc) {
					clsList = this.animateCls[1];
				}
				return clsList.enter;
			},
			slideLeaveCls () {
				var clsList = this.animateCls[0];
				if ('Right' == this.slideDirc) {
					clsList = this.animateCls[1];
				}
				return clsList.leave;
			}
		},
    methods: {
	    swipe (evt) {
	    	// Home tell slide Direction to top nav and set slide style
		    var dirc = evt.direction;
		    var indexOffset = 1;
            if("Right" == dirc){
		        indexOffset = -1;
            }
            this.$bus.emit('homeSlide', indexOffset);
            this.slideDirc = dirc;
		},
      pressMove (evt) {

      }
    }
}
</script>

<style>
.fill-screen{
    width: 100%;
    position: absolute;
    top: 54px;
    bottom: 0;
    background-color: black;
}
</style>

