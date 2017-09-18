<template>
    <div class="productinfo">
		<div style="position: relative" class="productinfo-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
            <div class="productinfo-content">
                <mt-navbar v-model="orderselected">
                    <mt-tab-item id="1">详情</mt-tab-item>
                    <mt-tab-item id="2">评价</mt-tab-item>
                    <mt-tab-item id="3">售后</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="orderselected">
                    <mt-tab-container-item id="1">
                        详情
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                       评价
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                       售后
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>
<script>
	import { Swipe, SwipeItem,TabItem,Navbar,TabContainer,TabContainerItem } from 'mint-ui'
    import Vue from 'vue'
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    export default {
        components:{},
        data(){
            return {
                selected:'tab1',
                search_key:'',
                orderselected:"1"
            }
        },
    }
</script>
<style lang="scss" scoped>
@import '../../assets/css/var.scss';
@import '../../assets/css/mixin.scss';
</style>
