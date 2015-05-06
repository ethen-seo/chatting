/**
 *  채팅존 클라이언트
 *  @author youngil.seo
 *  @since 2015.04.24
 */

/**
 * api 모듈
 */
define("api",["jquery"],function($){
	var api = {
			/**
			 * 
			 */
			getGroup : function(){
				
			},
			/**
			 * 
			 */
			getMember : function(){
				
			},
			/**
			 * 
			 */
			getMemberList : function(){
				
			},
			/**
			 * 
			 */
			getSession : function(){
				
			},
			/**
			 * 
			 */
			getSync : function(){
				
			},
			/**
			 * 
			 */
			getMessage : function(){
				
			}	
			
	}
	return api;
});
/**
 * util 모듈
 */
define("util",["jquery"],function($){
	var date = new Date();
	var util = {
			/**
			 * 
			 */
			replaceStr : function(txt){
				var str;
				str = txt.replace(new RegExp(),'');
				return str;
			},
			/**
			 * 시간 정보
			 */
			getTimeString : function(){
				var time = date.toLocaleTimeString().split(":");
				return time[0] + time[1];
			},
			/**
			 * 요일 정보
			 */
			getDateString : function(){
				var week = new Array('일', '월', '화', '수', '목', '금', '토');			
				return '' + week[date.getDay()] + '요일';
			},
			/**
			 * 날짜 정보
			 */
			getFullDateString : function(){
				var year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate;
				return year + '년 ' + month + '월 '+ day + '일';
			}
	}
	return util;
});
/**
 * socket 통신 모듈
 */
define("webSocket",[],function(){
	var socket,
		host = "ws://localhost:8080/chatting/tttSocket"; 
		
	var ws = {
			connect : function(){
				try {
					socket = new WebSocket(host);
					socket.onopen = function(){  
		                console.log('Socket Status:' +socket.readyState + '(open)');  
		             }  
		  
		            socket.onmessage = function(msg){  
		            	console.log('Received:' + msg.data );  
		              }  
		  
		              socket.onclose = function(){  
		            	  console.log('Socket Status:' + socket.readyState +'(Closed)');  
		              }           
		  
				} catch (e) {
					// TODO: handle exception
					console.log('socket connect Error');
				}
			},
			send : function(msg){
				if( msg == "" ){
					console.log('메시지가 없음');
					return false;
				}
				socket.send(msg);
			}
	}
	return ws;
});
/**
 * 메시지 템플릿
 */
define("text!templates/messageTemplate.html",[],function(){
	return '<% var StringUtil = require(\'util/customStringUtil\');\t%>\n<% var BandUtil = require(\'util/bandUtil\');\t%>\n  <span class="pf_img"><img width="48" height="48" alt="<%- writer.name%>" src="<%- BandUtil.replaceHttpsRes(writer.face)%>"></span>\n  <span class="pf_name"><span class="author"><%- writer.name%></span> <span class="pf_nick"><%-writer.description%></span></span>\n  <div class="msg<%-msgOption%>">\n    <div class="msg_main">\n      <p class="_message_body_wrap">\n      \t<%=messageBody%>\n      </p>\n      <% if (reportable) { %>\n      <a href="#" class="chat_report _report_button"><%-G.STR(\'pcweb.chat.chatmessage.btn.report\') %></a>\n      <% } %>\n      <span class="msg_aside"><span class="read"><% if(message.read_count > 1){ %> <%-G.STR(\'pcweb.chat.chatmessage.label.read_count\',message.read_count - 1)%> <%}; %></span><span class="time"><%-G.getDisplayTime(new Date(message.created_at*1), \'H\') %></span></span>\n    </div>\n  </div>';
});
/**
 * 이벤트 템플릿
 */
define("text!templates/eventTemplate.html",[],function(){
	return "";
});
/**
 * 멤버 리스트 템플릿
 */
define("text!templates/memberListTemplate.html",[],function(){
	return "";
});
/**
 * 멤버 아이템 템플릿
 */
define("text!templates/memberItemTemplate.html",[],function(){
	return "";
});
define("common_chatting",["jquery","event","util"],function(){
	
});
/**
 * view 모듈
 */
define("view",["jquery"],function($){
	var view = {
			displayMemberList : function(){
				
			},
			displayThumbnail : function(){
				
			},
			displayMessage : function(){
				
			},
			displayInvite : function(){
				
			}
	}
	return view;
});
/**
 * data model 모듈
 */
define("model",[],function(){
	var model = {
			
	}
	return model;
});
/**
 * event 모듈
 */
define("event",["jquery"],function($){
	var event = {
			addEvent : function(el,type,callback){
				$(el).on(type,callback);
			}
	}
	return event;
});
/**
 * event callback 모듈
 */
define("callback",["jquery","webSocket"],function($,ws){
	var callback = {
			//상단 네비게이션
			headBtnClick : function(e){
				var menu = $(".pop_menu"), 
					ds = menu.css("display");
				if( ds == "none" ){
					menu.css("display","block");
				} else {
					menu.css("display","none");
				}
			},
			//대화멤버 버튼
			memberBtnClick : function(e){
				
			},
			//대화초대 버튼
			inviteBtnClick : function(e){
				
			},
			//대화삭제 버튼
			clearBtnClick : function(e){
				//TODO : 서버로 대화삭제 여부 전송해야함. 이후에 대화 싱크를 위해서
				$(".chat_list").html("");
			},
			//대화방 나가기 버튼
			exitBtnClick : function(e){
				//TODO : 서버로 대화방 나가기 여부 전송해야함.
				window.close();
			},
			//썸네일 클릭
			thumbnailClick : function(e){
				
			},
			//전송버튼 표출
			showSendBtn : function(e){
				$(".msg_sutmit").css("opacity","1");
			},
			//전송버튼클릭, 엔터키입력
			sendMsg : function(e){
				var msg = $(".msg_input").val();
				if( e.type == "click" ){
					ws.send(msg);
				} else {
					if( e.keyCode == "13" ){
						ws.send(msg);
					} else {
						return false;
					}
				}
				$(".msg_input").val("");
			},
			//파일전송
			sendFile : function(e){
				
			}
			
	}
	return callback;
});
define("common_chatting",["jquery","event","util"],function(){
	
});
/**
 * chatting 모듈
 */
define(["event","callback"],function(e,callback){
	var chatting = {
			init : function(){
				/**
				 * 상단 네비게이션 버튼 클릭 이벤트
				 */
				e.addEvent(".pop_setting","click",callback.headBtnClick);
				/**
				 * 대화멤버 버튼 클릭 이벤트
				 */
				e.addEvent(".chat_member","click",callback.memberBtnClick);
				/**
				 * 대화초대 버튼 클릭 이벤트
				 */
				e.addEvent(".invite_friends","click",callback.inviteBtnClick);
				/**
				 * 대화삭제 버튼 클릭 이벤트
				 */
				e.addEvent(".delete_chat","click",callback.clearBtnClick);
				/**
				 * 대화방 나가기 버튼 클릭 이벤트
				 */
				e.addEvent(".quit_chatroom","click",callback.exitBtnClick);
				/**
				 * 썸네일 클릭 이벤트
				 */
				e.addEvent(".pf_img","click",callback.thumbnailClick);
				/**
				 * 채팅 메시지 입력시 전송버튼 표출 이벤트
				 */
				e.addEvent(".msg_input","change",callback.showSendBtn);
				/**
				 * 전송 버튼 클릭 이벤트
				 */
				e.addEvent(".msg_sutmit","click",callback.sendMsg);
				/**
				 * 엔터 키 입력 이벤트
				 */
				e.addEvent(".msg_input","keyup",callback.sendMsg);
				/**
				 * 파일 전송 이벤트
				 */
				e.addEvent("","click",callback.sendFile);
				
			}
	}
	return chatting;
});