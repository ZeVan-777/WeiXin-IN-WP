<template>
    <div>
        <mu-list class="person-info">
            <mu-list-item disableRipple>
                ZeVan
            </mu-list-item>
        </mu-list>
        <mu-list v-for="(part, i) in parts" :key="'part' + i">
            <mu-list-item v-for="(item, i) in part.items" disableRipple :key="i">
                {{item.title}}
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {
	data () {
		return {
			parts: [
              {
              	items: [
                  {title: "相册"},
                  {title: "收藏"},
                  {title: "钱包"},
                  {title: "卡包"}
                ]
              },
              {
                items: [
                  {title: "表情"}
                ]
              }
            ]
        }
    }
}
</script>

<stlye lang="less">

</stlye>