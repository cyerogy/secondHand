<template>
	<div class="input" :class="{'input-disabled':disabled}">
		<input v-if="format=='input'" :type="type" 
		:value="currentValue"
		@input="handleInput"
		@blur="handleBlur"
		@focus="handleFocus"
		v-bind="$props"
		>
		<textarea v-else-if="format=='textarea'"	
		:value="currentValue"
		@input="handleInput"
		@blur="handleBlur"
		@focus="handleFocus"
		v-bind="$props">
		</textarea>
	</div>
</template>
<script>
	// let UE = require('UE')
	export default{
		props:{
			value:{
				type:[String,Number]
			},
			rows:{
				type:Number,
				default:8
			},
			format:{
				type:String,
				default:'input'
			},
			disabled:[Boolean,String],
			placeholder:String,
			type:String
		},
		components:{
		},
		data(){
			return {
				currentValue:this.value.trim(),
			}
		},
		computed:{
		},
		watch:{
			value(val){
				this.currentValue = val
			}
		},
		methods:{
			handleInput(e){
				this.$emit('input',event.target.value.trim())
				this.setCurrentValue(event.target.value.trim())
			},
			fullInput(){
				
			},
			handleFocus(e){
				this.$emit('focus', e);
			},
			handleBlur(e){
				this.$emit('blur',e)
			},
			setCurrentValue (value){
				if(value === this.currentValue) return ;
				this.currentValue =value.trim()
			}
		},
		created(){
		},
		beforeDestroy(){
		},
		directives:{
			focus:{
				inserted:function(el){
					el.focus()
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/css/var.scss';
	@import '../assets/css/mixin.scss';
	.input {
		width: 100% ;
		// margin: 0 0 30rem/$base 0;
	}
	.input + .input {
		margin:4rem/$base  0 0  0;
	}
	.input input{
		-webkit-appearance:none;
		width: 100%;
		border: none;
		height: 10rem/$base;
		background: $whiteColor;;
		box-shadow: none;
		@include font-dpr(14px);
		padding: 0 5rem/$base;
	}
	.input textarea {
		width: 100%;
		border-radius: 4px;
		border: 1px solid #ccc;
		background: $whiteColor;
		font-family: $fontStack;
		@include font-dpr(14px);
		height: 100%;
		resize: none;
		padding: 0 5rem/$base;
	}
</style>