var defaultItems = [
	{
		name: '设置'
	}
];

export default {
	messages: {
		items: [
			{
				name: '关闭夜间模式'
			}
		].concat(defaultItems)
	},
	contacts: {
		icons: [
			{
				name: 'person_add',
				title: '添加朋友'
			},
			{
				name: 'search',
				title: '搜索'
			}
		],
		items: defaultItems
	},
	nearby: {
		items: defaultItems
	},
	personal: {
		items: defaultItems
	}
}