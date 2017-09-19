<template>
    <div class="messageinfo">
        <div class="div-bgcolor" v-for="(item, index) in messagelist" style="margin-top:5px">
            <div class="message-info">
                <div class="message-title">{{ item.title }}<span class="message-span">2017-09-11 10:50:10</span></div>
                <div class="message-content">{{ item.content }}</div>
                <div class="message-content" v-if="item.is_reply == 2">回复内容：{{ item.reply_content }}</div>
                <div class="message-foot" v-if="item.is_reply != 1">
                    <a v-if="item.is_reply == 0" @click="showReply(index)">回复</a>
                    <span v-if="item.is_reply == 2">已回复</span>
                </div>
                <div v-if="item.is_reply == 1">
                    <klf-input format="textarea" v-model="item.reply_content" placeholder="回复内容" @blur="nameCheck" @focus="nameFocus"></klf-input>
                    <klf-button v-if="item.is_reply == 1" name="回复" @click="saveInfo(index)"></klf-button>
                </div>
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
                messagelist:[]
            }
        },
        created(){
            this.messagelist.push({title:'消息一',content:'消息一消息一消息一消息一消息一消息一消息一消息一消息一消息一消息一消息一消息一消息一消息一消息一',is_reply:0,reply_content:''})
            this.messagelist.push({title:'消息二',content:'消息二消息二消息二消息二消息二消息二消息二消息二消息二消息二消息二消息二消息二消息二消息二消息二',is_reply:0,reply_content:''})
        },
        methods:{
            showReply(index){
                this.messagelist[index].is_reply = 1;
            },
            saveInfo(index){
                this.messagelist[index].is_reply = 2;
            }
        }
    }
</script>
