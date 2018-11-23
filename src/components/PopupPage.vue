<template>
    <div class= "PopupBox">
        <div class= "navbarBox">
            <van-nav-bar title= "admin" fixed  class= "navbarTitle"/>
        </div>
        <div class="PopupCell">
            <van-cell v-for= "(item,index) in PopupData"
                      :key="index"
                      :title="item.title"
                      @click="cellClick(index,item.linkname)"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopupPage",
        props:{
            PopupData: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            cellClick(index,name) {
                this.$emit('popupCellClick', {index,name})
            }
        }
    }
</script>

<style scoped lang="less">
    .PopupBox{
        margin-top: 46px;
    }
    .navbarBox {
        .navbarTitle {
            background-color: #323542;
            color: #fff;
        }
    }
    .PopupCell{
        text-align: center;
    }
</style>