<template>
    <div class="ChangePassword">
        <div class= "navbarBox" >
            <van-nav-bar title= "修改密码"
                         @click-left="onClickLeftArrow"
                         fixed
                         class= "navbarTitle"
            >
                <van-icon name= "arrow-left" slot= "left" class= "navbarLeft"/>
            </van-nav-bar>
        </div>
        <div class="ChangeCell">
            <van-cell-group>
                <van-field
                        v-model="oldPassword"
                        type="password"
                        label="原密码"
                        placeholder="请输入原始密码"
                        required
                />
                <van-field
                        v-model="newPassword"
                        type="password"
                        label="新密码"
                        placeholder="请输入密码"
                        required
                />
                <van-field
                        v-model="affPassword"
                        type="password"
                        label="确认密码"
                        placeholder="请输入密码"
                        required
                        ref="affPassword"
                        @blur="affPasswordBlur"
                />
            </van-cell-group>
        </div>
        <div class="ChangeButton">
            <van-button  type="primary" size="large">确认</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangePassword",
        data() {
            return {
                oldPassword: '',
                newPassword: '',
                affPassword: ''
            }
        },
        methods: {
            onClickLeftArrow() {
                this.$router.go(-1)
            },
            affPasswordBlur() {
                if(this.affPassword !== this.newPassword) {
                    // Toast.fail('新密码与确认密码不一致')
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .ChangePassword {
        margin: 50px 0 60px;
        .navbarBox {
            .navbarTitle {
                height: 50px;
                line-height: 50px;
                background-color: #323542;
                color: #fff;
                .navbarLeft {
                    color: #fff;
                }
            }
        }
        .ChangeCell {
            padding: 10px 10px 0;
        }

        .ChangeButton {
            padding: 20px 10px 0 ;
        }
    }

</style>