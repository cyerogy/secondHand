<template>
    <div class="address">
        <b-map :mapHeight="800" :addressList="list"></b-map>
        <div class="span-div">您附近的标志性建筑：</div>
        <div class="div-bgcolor " style="margin-top:0px ">
            <div v-if="list.length > 0" v-for="(item, index) in list">{{ item.title }}</div>
            <div v-if="list.length == 0">定位中</div>
        </div>
    </div>
</template>
<script>
    import BMap from '@/components/BMapComponent'
    export default {
        components:{BMap},
        data(){
            return {
                list:[]
            }
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/css/var.scss';
</style>
