import Home from './views/Home.vue'
import MsgList from './views/MsgList.vue'
import ContactList from './views/ContactList.vue'
import AddPerson from './views/AddPerson.vue'

export default [
	{
		path: '/', component: Home,
		children: [
			{path: 'messages', name: 'messages', component: MsgList},
			{path: 'contacts', name: 'contacts', component: ContactList},
			{path: 'nearby', name: 'nearby', component: MsgList},
			{path: 'personal', name: 'personal', component: MsgList}
		]
	},
	{
		path: '/add',
		component: AddPerson
	}
]
