<template>
    <div class="sellproductinfo">
        <div class="exam-button">
            <klf-input v-model="name" placeholder="产品名称" @blur="nameCheck" @focus="nameFocus"></klf-input>
            <klf-input v-model="price" placeholder="产品价格" @blur="nameCheck" @focus="nameFocus"></klf-input>
            <klf-input format="textarea" v-model="des" placeholder="产品介绍" @blur="nameCheck" @focus="nameFocus"></klf-input>
            <klf-upload :uploadList="list"></klf-upload>
            <div class="save-button">
                <klf-button name="保存" @click="saveInfo()"></klf-button>
            </div>
        </div>
    </div>
</template>
<script>
    import KlfInput from '@/components/KlfInput'
    import KlfUpload from '@/components/KlfUpload'
    import KlfButton from '@/components/KlfButton'
    export default {
        components:{KlfInput,KlfUpload,KlfButton},
        data(){
            return {
                name:'',
                des:'',
                price:'',
                list:[]
            }
        },
        created(){
        },
        methods:{
            nameCheck(){

            },
            nameFocus(){

            },
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
