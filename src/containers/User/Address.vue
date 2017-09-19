<template>
    <div class="address">
        <q-map :mapHeight="300" :addressList="list"></q-map>
        <div class="span-div">您附近的标志性建筑：</div>
        <div class="div-bgcolor " style="margin-top:0px ">
            <div class="basic-css" v-if="list.length > 0" v-for="(item, index) in list">{{ item.title }}</div>
            <div v-if="list.length == 0">定位中</div>
        </div>
    </div>
</template>
<script>
    //import BMap from '@/components/BMapComponent'
    import QMap from '@/components/QMapComponent'
    export default {
        //components:{BMap},
        components:{QMap},
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
