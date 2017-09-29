<template>
    <div class="socketchart">
    </div>
</template>
<script>
    import store from '@/store/store'
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.apisocket.init();
            this.apisocket.submit("您好");
            this.apisocket.getMessageFromServerInfo();
            this.apisocket.getOnlineCount();
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/css/var.scss';
</style>
