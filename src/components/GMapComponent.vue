<template>
    <div class="amap-page-container">
        <el-amap vid="amapDemo">
            <el-amap-marker v-for="marker in markers" :position="marker.position">
            </el-amap-marker>
        </el-amap>
    </div>
</template>

<style>
.amap-demo {
    height: 300px;
}
</style>

<script>
import AMap from 'vue-amap';
import Vue from 'vue'
Vue.use(AMap);
export default {
    data() {
        return {
            markers: []
        };
    },
    mounted() {
        // 初始化vue-amap
        AMap.initAMapApiLoader({
            // 申请的高德key
            key: '391bce147bbc5f1e452e870d042c9d2b',
            // 插件集合
            plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor']
        });
        // 姑且N为2
        // 这样地图上就添加了两个人
        this.markers = [
            {
                position: [121.5273285, 31.21515044]
            }, {
                position: [121.5273286, 31.21515045]
            }
        ];
    }
};
</script>