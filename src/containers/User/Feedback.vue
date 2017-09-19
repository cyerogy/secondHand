<template>
    <div class="feedbackinfo">
        <div class="exam-button">
            <klf-input v-model="contact" placeholder="联系方式"></klf-input>
            <klf-input format="textarea" v-model="des" placeholder="反馈内容"></klf-input>
            <klf-input format="textarea" v-model="proposal" placeholder="宝贵建议"></klf-input>
            <div class="save-button">
                <klf-button name="保存" @click="saveInfo()"></klf-button>
            </div>
        </div>
    </div>
</template>
<script>
    import KlfInput from '@/components/KlfInput'
    import KlfButton from '@/components/KlfButton'
    export default {
        components:{KlfInput,KlfButton},
        data(){
            return {
                contact:'',
                des:'',
                proposal:''
            }
        },
        created(){
        },
        methods:{
            saveInfo(){
                console.log(this.list)
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../../assets/css/var.scss';
@import '../../assets/css/mixin.scss';
</style>
