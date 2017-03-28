<template>
    <div>
        <top-nav @change="slideDirc = arguments[0] > 0 ? 'Left':'Right'"></top-nav>
        <transition :enter-active-class="slideEnterCls" :leave-active-class="slideLeaveCls"
            mode="out-in">
            <keep-alive>
                <router-view class="fill-screen"
                             v-finger:swipe="swipe"
                             v-finger:press-move="pressMove.bind(this)">
                </router-view>
            </keep-alive>
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
          ],
          pressMoveDeltaX: 0
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
	    	// only need to know the swipe distance
	    	var deltaX = this.pressMoveDeltaX;
            var viewStyle = this.getViewElement().style;

	    	this.pressMoveDeltaX = 0;
			viewStyle.left = '0px';

			if(Math.abs(deltaX) < 135){
            	viewStyle.transition = 'left 0.5s ease-out';
            	return;
            }


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
        this.pressMoveDeltaX += evt.deltaX;
        this.getViewElement().style.left = this.pressMoveDeltaX + 'px';
      },
      getViewElement () {
        var children = this.$el.children;
		return children[children.length-1];
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

