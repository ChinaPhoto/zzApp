<template>
    <div>
        <van-collapse v-model="activeNames" accordion>
            <van-collapse-item
                    v-for= "(item,index) in collapseDate"
                    :title= "item.title"
                    :key="index"
                    :name="item.name"
            >
                <!-- 每次点击 需要传递的参数主要  header 名字  里面所需要的传递的所有的参数 -->
                <van-cell
                        v-for= "(val, num) in item.array"
                        is-link
                        to= "ApplicationProcess"
                        :title="val.name"
                        :key="num" />
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    export default {
        name: "collapse",
        props:{
            collapseDate:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                activeNames: '1'
            }
        },
        // mounted () {
        //     console.log(this.collapseDate)
        // }
    }
</script>

<style scoped lang="less">
    .top {


    }
</style>