<template>
    <div class="Userinfo">
        <div class="exam-button">
            <klf-input v-model="name" placeholder="姓名"></klf-input>
            <klf-input v-model="sex" placeholder="性别"></klf-input>
        </div>
    </div>
</template>
<script>
    import KlfInput from '@/components/KlfInput'
    export default {
        components:{KlfInput},
        data(){
            return {
                sex:'',
                name:'',
            }
        },
        created(){
        },
        methods:{
        }
    }
</script>
<style lang="scss" scoped>
@import '../../assets/css/var.scss';
@import '../../assets/css/mixin.scss';
</style>
