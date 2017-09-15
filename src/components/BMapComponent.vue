<template>
    <div id="allmap" v-bind:style="mapStyle"></div>
</template>
<script>
import { Toast } from 'mint-ui'
export default{
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
    data:function(){
        return{
            mapStyle:{
                width:'100%',
                height:this.mapHeight +'px'
            },
            longit:this.longitude,
            latit:this.latitude,
            list:this.addressList || []
        }
    },
    mounted(){
        var _this = this;
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(this.longit,this.latit);
        map.centerAndZoom(point,30);

        var geolocation = new BMap.Geolocation();
        var geoc = new BMap.Geocoder();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                geoc.getLocation(r.point, function(rs){
                    var addComp = rs.surroundingPois;
                    for (var i = 0; i < addComp.length; i++) {
                        _this.list.push(addComp[i]);
                    }
                });
            }else{
                    Toast({
                        message:'定位失败',
                        duration:1000,
                    })
            }
        },{enableHighAccuracy: true})
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
<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 去掉地图左下角的百度LOGO */
  .anchorBL {
    display:none
  }
</style>