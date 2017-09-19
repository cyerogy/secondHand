<template>
	<div :type="type ? type : 'primary'" class="input-btn">
		<button type="button" @click="todo">{{name ? name : '提交'}}</button>
	</div>
</template>
<script>
	export default{
		props:['name','type'],
		methods:{
			todo(){
				if(this.type=='disabled') return ;
				this.$emit('click');
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/css/var.scss';
	@import '../assets/css/mixin.scss';
	div {
		width: 100%;
		// margin: 50rem/$base 0;
	}
	div>button{
		width: 100%;
		height: 10rem/$base;
		border: none;
		@include font-dpr(18px);
		color: #fff;
	}
	div:active>button{
		opacity: .4;
	}
	div[type='primary']>button{
		background: $successColor;
	}
	div[type='danger']>button{
		background: #e36a61;
	}
	div[type='default']>button{
		background: #fff;
		color: $fontColor;
		border: 1px solid #c8c8c8;
	}
	div[type='success']>button{
		background: $whiteColor;
		color: $successColor;
		border: 1px solid $successColor;
	}
	div[type='disabled']>button{
		opacity: .3;
	}
	div[type='disabled']>button{
		background: $successColor;
		color: #fff;
	}
	div[type='disabled']:active>button{
		opacity: .3;
	}
</style>