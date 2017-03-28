<template>
    <div class="personal">
        <mu-list class="person-info">
            <mu-list-item title="ZeVan" disableRipple>
                <mu-avatar slot="left"
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLvelbU6eVZKg2eTGjPvET39bwngCJ3GNMYnL4qTO86URa53Z9_A">
                </mu-avatar>
            </mu-list-item>
        </mu-list>
        <mu-list v-for="(part, i) in parts" :key="'part' + i">
            <mu-list-item v-for="(item, i) in part.items" disableRipple :key="i" :title="item.title" class="others">
                <mu-icon slot="left" :value="item.icon"></mu-icon>
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
                  {title: "相册", icon: "collections"},
                  {title: "收藏", icon: "save"},
                  {title: "钱包", icon: "local_atm"},
                  {title: "卡包", icon: "confirmation_number"}
                ]
              },
              {
                items: [
                  {title: "表情", icon: "mood"}
                ]
              }
            ]
        }
    }
}
</script>

<style lang="less">
    .personal {
        .border{
            border: 1px grey;
        }

        .mu-list {
            background-color: #424242;
            background-clip: border-box;
            .border();
            border-style: solid;
            margin-top: 15px;
            padding: 0;
        }

        .others {
            .mu-item{
                .border();
                border-bottom-style: solid;

            }


            .mu-icon{
                font-size: 36px;
                color: cornflowerblue;
            }

            &:last-child .mu-item{
                border-bottom-style: none;
            }
        }

        .person-info {
            padding: 20px 0;
            .mu-avatar{
                transform: scale(1.3);
            }
            .mu-item {
                padding-top: 20px;
                padding-bottom: 20px;
            }
        }
    }

</style>