import io from 'socket.io-client';
const socketchat={
	socket:null,
	userinfo:{},
	msgArr:[],
	/**初始化websocket*/
	init:function(){
		//生成一个用户
		this.userinfo = this.getUerInfo();
		//连接websocket后台服务器
		this.socket = io.connect('http://localhost:3000');
		//告诉服务器有个新用户加入了
		this.socket.emit('login', this.userinfo);
	},
	/**生成一个用户*/
	getUerInfo:function(){
		var userinfo = {};
		userinfo.userid = new Date().getTime()+""+Math.floor(Math.random()*899+100);
		userinfo.username = "xiewei"+(new Date().getTime());
		return userinfo;
	},
	/**提交聊天消息内容*/
	submit:function(msg){
		if(msg != ''){
			let obj = {
				userid: this.userinfo.userid,
				username: this.userinfo.username,
				msg: msg,
				color: this.color
			};
			this.socket.emit('message', obj);
		}else{
			console.log('msg is null')
		}
		return false;
	},
	/**
	 * [getMessageFromServerInfo 获取从服务器传来的数据]
	 * @return {[type]} [description]
	 */
	getMessageFromServerInfo:function(){
		//监听消息发送
		this.socket.on('message', function(obj){
			console.log(obj)
		});
	},
	/**
	 * [getOnlineCount 获取在线用户的数据]
	 * @return {[type]} [description]
	 */
	getOnlineCount:function(){
		this.socket.on('login', function(obj){
			console.log(obj);
		});
	}
}
export default socketchat