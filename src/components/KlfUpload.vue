<template>
	<div class="upload">
		<div class="upload-file float-left" v-for="(item,index) in list" :key="index">
			<img :src="item.filepath" :alt="item.file_name">
		</div>
		<div style="clear:both"></div>
		<div class="upload-file">
			<a id="select_file"><p><i class="iconfont">&#xe649;</i></p></a>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '../assets/css/var.scss';
@import '../assets/css/mixin.scss';
.upload-file{
	position:relative;
    width: 182rem/$base;
    height: 182rem/$base;
    line-height: 182rem/$base;
    margin-right: 20rem/$base;
    margin-top: 20rem/$base;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 2px dashed $borderColor;
    background-color: $whiteColor;
}
.upload-file a p i{
	@include font-dpr(50px);
}
.upload-file img{
	width: 100%;
    height: 100%;
}
.float-left{
	float:left;
}
</style>
<script>
export default {
	props: {
		max: {
			type: [Number, String],
			default: 5
		},
		uploadList: {
			type: Array
		},
		id: {
			type: String
		},
		index: {
			type: Number
		}
	},
	data() {
		return {
			option: {},
			list:this.uploadList || [],
		}
	},
	methods: {

	},
	mounted() {
		var _this = this.list;
		var uploader = new plupload.Uploader({
            browse_button : 'select_file', //触发文件选择对话框的按钮，为那个元素id
            url : '/Api/upload.php', //服务器端的上传页面地址
            filters: {
                mime_types : [ //只允许上传图片格式的文件
                    { title : "Image files", extensions : "gif,jpg,jpeg,bmp,png" }
                ],
                max_file_size : '400kb', //最大只能上传400kb的文件
            },
            //是否多选
            multi_selection: false,
            multiple_queues:true,
            unique_names:true,
            resize : {},
        });
        uploader.init();

        //绑定各种事件，并在事件监听函数中做你想做的事
	    uploader.bind('FilesAdded',function(uploader,files){
	        //每个事件监听函数都会传入一些很有用的参数，
	        //我们可以利用这些参数提供的信息来做比如更新UI，提示上传进度等操作
	        uploader.start();
	    });
	    uploader.bind('UploadProgress',function(uploader,file){
	        //每个事件监听函数都会传入一些很有用的参数，
	        //我们可以利用这些参数提供的信息来做比如更新UI，提示上传进度等操作
	    });
		uploader.bind('FileUploaded',function(uploader,file,responseObject){
	        //上传成功之后的操作
	        var res = JSON.parse(responseObject.response);
	        if(res.status == 70000){
	        	_this.push(res.message);
	        }
	    });
	},
	watch: {
		uploadList: {
			handler(val) {
				this.list = val
			},
			deep: true
		}
	}
}
</script>