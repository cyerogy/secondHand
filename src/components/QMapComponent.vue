<template>
    <div class="bmapcomponent">
        <iframe id="geoPage" width=0 height=0 frameborder=0  style="display:none;" scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=Y6XBZ-JGG3X-CRS4R-TRXAE-V36W5-MPFIX&referer=http://www.second.com"></iframe> 
        <div id="container" v-bind:style="mapStyle"></div>
    </div>
</template>
<script>
    export default {
        props:{
            // 地图在该视图上的高度
            mapHeight:{
                type:Number,
                default:500
            },
            // 经度
            longitude:{
                type:Number,
                default:116.404
            },
            // 纬度
            latitude:{
                type:Number,
                default:39.915
            },
            description:{
                type:String,
                default:'天安门'
            },
            addressList: {
                type: Array
            }
        },
        data(){
            return{
                mapStyle:{
                    width:'100%',
                    height:this.mapHeight +'px'
                },
                longit:this.longitude,
                latit:this.latitude,
                searchService:null,
                list:this.addressList || [],
                unique_list:[]
            }
        },
        methods:{
        },
        mounted(){
            this.loading = true;
            var self = this;
            var loc;
            var map;
            window.addEventListener('message', function(event) {
                loc = event.data; // 接收位置信息
                if(loc  && loc.module == 'geolocation') {
                    self.loading = false;
                    self.city_name = loc.city;
                    var center = new qq.maps.LatLng(loc.lat, loc.lng);
                    //创建地图
                    var map = new qq.maps.Map(document.getElementById('container'),{
                        center: center,
                        zoom: 20
                    });
                    //给定位的坐标添加标注
                    var marker = new qq.maps.Marker({
                        position: center,
                        radius: 2,
                        map: map
                    });
                    self.searchService = new qq.maps.SearchService({
                        complete : function(results){
                            var pois = results.detail.pois;
                            for (var i = 0; i < pois.length; i++) {
                                if(self.unique_list.indexOf(pois[i].name) == -1){
                                    self.list.push({'title':pois[i].name});
                                    self.unique_list.push(pois[i].name);
                                }
                            }
                        }
                    });
                    self.searchService.searchNearBy("公交站",center,2000);
                }
            },true)
        },
        watch: {
            addressList: {
                handler(val) {
                    this.list = val
                },
                deep: true
            }
        }
    }
</script>