<template>
    <div class="index">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="tab1">
                <div class="header-button"><klf-button name="买" type="default"></klf-button></div>
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
                <div class="div-bgcolor">
                    <div><i class="iconfont">&#xe649;</i><a>帮助中心</a></div>
                    <div><i class="iconfont">&#xe649;</i><a>我要反馈</a></div>
                    <div><i class="iconfont">&#xe649;</i><a>请赐我评分吧</a></div>
                    <div><i class="iconfont">&#xe649;</i><a>设置</a></div>
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
    import { Tabbar, TabItem,TabContainer,TabContainerItem,Search,Navbar } from 'mint-ui'
    import Vue from 'vue'
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    Vue.component(Search.name, Search);
    Vue.component(Navbar.name, Navbar);
    export default {
        components:{KlfButton},
        data(){
            return {
                selected:'tab1',
                search_key:'',
                orderselected:"1"
            }
        },
        methods:{
            gotosell(){
                this.$router.push("/Index/Sell");
            },
            selectTable(type){
                console.log(type)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/css/var.scss';
</style>
