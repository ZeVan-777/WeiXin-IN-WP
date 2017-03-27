import Home from './views/Home.vue'
import MsgList from './views/MsgList.vue'
import ContactList from './views/ContactList.vue'
import Nearby from './views/Nearby.vue'
import Personal from './views/personal.vue'

import AddPerson from './views/AddPerson.vue'

export default [
	{
		path: '/', component: Home,
		children: [
			{path: 'messages', name: 'messages', component: MsgList},
			{path: 'contacts', name: 'contacts', component: ContactList},
			{path: 'nearby', name: 'nearby', component: Nearby},
			{path: 'personal', name: 'personal', component: Personal}
		]
	},
	{
		path: '/add',
		component: AddPerson
	}
]
