<template>
    <div class="index">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="tab1">
                <div class="Index-swipe">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>1</mt-swipe-item>
                        <mt-swipe-item>2</mt-swipe-item>
                        <mt-swipe-item>3</mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="header-button"><klf-button name="买" type="default" @click="gotoList()"></klf-button></div>
                <div class="header-button">
                    <klf-button name="卖" @click="gotosell()"></klf-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <div style="height: 150px">
                    <mt-search v-model="search_key"></mt-search>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
                <mt-navbar v-model="orderselected">
                    <mt-tab-item id="1">未完成</mt-tab-item>
                    <mt-tab-item id="2">已完成</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="orderselected">
                    <mt-tab-container-item id="1">
                        44
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                       2 
                    </mt-tab-container-item>
                </mt-tab-container>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">
                <div class="userinfo-header">
                    <img src="/static/img/bg-avatar.png"/>
                </div>
                <div class="div-bgcolor " style="margin-top:0px ">
                    <div class="basic-css" @click="gotoUser()">资料完善</div>
                    <div class="basic-css">签到有礼</div>
                </div>
                <div class="div-bgcolor ">
                    <div class="basic-css" @click="gotoMessage()">我的消息</div>
                    <div class="basic-css">我的收藏</div>
                    <div class="basic-css" @click="gotoAddress()">常用地址</div>
                </div>
                <div class="div-bgcolor">
                    <div class="basic-css">帮助中心</div>
                    <div class="basic-css" @click="gotoFeedback()">我要反馈</div>
                    <div class="basic-css">请赐我评分吧</div>
                    <div class="basic-css">设置</div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="tab1">
                首页
            </mt-tab-item>
            <mt-tab-item id="tab2">
                搜索
            </mt-tab-item>
            <mt-tab-item id="tab3">
                订单
            </mt-tab-item>
            <mt-tab-item id="tab4">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    import KlfButton from '@/components/KlfButton'
    import { Tabbar, TabItem,TabContainer,TabContainerItem,Search,Navbar,Swipe, SwipeItem } from 'mint-ui'
    import Vue from 'vue'
    import store from '@/store/store'
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    Vue.component(Search.name, Search);
    Vue.component(Navbar.name, Navbar);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
        components:{KlfButton},
        data(){
            return {
                selected:store.index_select_id,
                search_key:'',
                orderselected:"1"
            }
        },
        created(){
            console.log(this)
        },
        methods:{
            gotosell(){
                this.$router.push("/Index/Sell");
            },
            gotoAddress(){
                this.$router.push("/User/Address");
            },
            gotoList(){
                this.$router.push("/Index/List");
            },
            gotoUser(){
                this.$router.push("/User/Info");
            },
            gotoFeedback(){
                this.$router.push("/User/Feedback");
            },
            gotoMessage(){
                this.$router.push("/User/Message");
            }
        },
        watch: {
            selected(new_val,old_val){
                this.store.index_select_id = new_val;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/css/var.scss';
</style>
