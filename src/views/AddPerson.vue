<template>
    <div class="add-person">
        <mu-appbar title="添加朋友"></mu-appbar>
        <mu-list>
            <mu-list-item title="搜号码" disableRipple>
                <mu-icon slot="left" value="person"/>
            </mu-list-item>
            <mu-list-item title="添加手机联系人" disableRipple>
                <mu-icon slot="left" value="contact_phone"/>
            </mu-list-item>
            <mu-list-item title="添加微信公众号" disableRipple>
                <mu-icon slot="left" value="toys"/>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.add-person {
    .mu-item.show-left {
        padding-left: 52px;
    }
    .mu-icon {
        color: #4caf50;
    }
}
 
</style>