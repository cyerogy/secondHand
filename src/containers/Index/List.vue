<template>
    <div class="list">
		<klf-scroll></klf-scroll>
        <div class="div-bgcolor ">
            <div @click="gotoInfo()">商品详情</div>
        </div>
    </div>
</template>
<script>
	import klfScroll from '@/components/klfScroll'
    export default {
        components:{klfScroll},
        data(){
            return {
                selected:'tab1',
                search_key:'',
                orderselected:"1"
            }
        },
        methods:{
            gotoInfo(){
                this.$router.push("/Product/Info")
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../../assets/css/var.scss';
@import '../../assets/css/mixin.scss';
</style>
