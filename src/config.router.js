import Home from './views/Home.vue'
import MsgList from './views/MsgList.vue'

export default [
	{
		path: '/', component: Home,
		children: [
			{path: 'messages', component: MsgList},
			{path: 'contacts', component: {template: '<div>hehe</div>'}},
			{path: 'nearby', component: MsgList},
			{path: 'personal', component: MsgList}
		]
	}
]
