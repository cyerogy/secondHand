<template>
    <div class="index">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="ordered">
                <mt-navbar v-model="orderselected">
                    <mt-tab-item id="1">我是卖家</mt-tab-item>
                    <mt-tab-item id="2">我是买家</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="orderselected">
                    <mt-tab-container-item id="1">
                        交易成功的卖家产品
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                       交易成功的买家产品
                    </mt-tab-container-item>
                </mt-tab-container>
            </mt-tab-container-item>
            <mt-tab-container-item id="ordering">
                <mt-navbar v-model="orderselected">
                    <mt-tab-item id="1">我是卖家</mt-tab-item>
                    <mt-tab-item id="2">我是买家</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="orderselected">
                    <mt-tab-container-item id="1">
                        交易中的卖家产品
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                       交易中的买家产品
                    </mt-tab-container-item>
                </mt-tab-container>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="ordered">
                交易成功
            </mt-tab-item>
            <mt-tab-item id="ordering">
                交易中
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    import KlfButton from '@/components/KlfButton'
    import { Tabbar, TabItem,TabContainer,TabContainerItem,Navbar } from 'mint-ui'
    import Vue from 'vue'
    import store from '@/store/store'
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    Vue.component(Navbar.name, Navbar);
    export default {
        components:{KlfButton},
        data(){
            return {
                selected:"ordered",
                search_key:'',
                orderselected:"1"
            }
        },
        created(){
        },
        beforeRouteLeave(to, from, next){
            this.store.index_select_id = "tab4";
            next();
        },
        methods:{
        },
        watch: {
            selected(new_val,old_val){
                this.selected = new_val;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/css/var.scss';
</style>
