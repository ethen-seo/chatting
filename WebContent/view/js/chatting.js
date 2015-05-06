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
				var data = [
				            {"thumbnail":"../../design/html_noinc/images/post/thumb.jpg","name":"친구1"},
				            {"thumbnail":"http://s.cmstatic.net/pcweb/res/153600/images/template/profile_60x60.gif?type=s75","name":"친구2"}
				           ];
				return data;
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
define("util",["jquery","tmpl"],function($){
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
			},
			template : function(el,template,data){
				$(template).tmpl(data).appendTo(el);
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
define("view_messageTemplate",["jquery","api","text!templates/messageTemplate.html"],function($,a,t){
	var view = {
		initialize : function(){
			
		}	
	};
	return view;
});
/**
 * 이벤트 템플릿
 */
define("text!templates/eventTemplate.html",[],function(){
	return '<div class="log_inner">\n    <p class="_message_body_wrap"><%-message%></p>\n    <span class="lt"></span><span class="rt"></span><span class="lb"></span><span class="rb"></span>\n</div>';
});
define("view_eventTemplate",["jquery","api","text!templates/eventTemplate.html"],function($,a,t){
	var view = {
		initialize : function(){
			
		}	
	};
	return view;
});
/**
 * 멤버 아이템 템플릿
 */
define("text!templates/memberItemTemplate.html",[],function(){
    return '<script type="text/x-jquery-tmpl"><li><img src="${thumbnail}" class="profile" alt="" width="44" height="44">\n<span class="member_name">${name}</span>\n<a href="#" class="go_chat">1 : 1</a></li></script>';
});
define("view_memberItemTemplate",["jquery","util","api","text!templates/memberItemTemplate.html"],function($,u,a,t){
	var view = {
			initialize : function(){
				var el = $("ul.member_list"),
					data = a.getMemberList();
				u.template(el,t,data);	
			}	
	};
	return view;
});
/**
 * 멤버 리스트 템플릿
 */
define("text!templates/memberListTemplate.html",[],function(){
	return '<!-- 멤버 리스트 컨테이너  -->\n<div class="member_list">\n\t<div class="header_chating">\n      <h1 class="name_chating">대화 멤버</h1>\n    </div>\n    <div class="member_main">\n      <ul class="member_list">\n      </ul>\n    </div>\n    <div class="confirm_box">\n      <button class="btn_confirm" href="#"><span>완료</span></a>\n    </div>\n    <div class="deemed"></div>\n</div>';
});
define("view_memberListTemplate",["jquery","api","text!templates/memberListTemplate.html"],function($,a,t){
	var view = {
			initialize : function(){
				$("._contents_body").html(t);
			}	
	};
	return view;
});
/**
 * 대화상대초대 컨테이너
 */
define("text!templates/inviteTemplate.html",[],function(){
    return '      <div class="header_chating">\n        <h1 class="name_chating">대화 상대 선택</h1>\n\t\t<div class="pop_form">\n           <div class="band_select _custom_selector_wrap">\n            <a href="#" class="selected_name _custom_selector_selected">&nbsp;</a>\n            <ul class="band_list _custom_selector_list_wrap" style="display:none">\n            </ul>\n          </div>\n          <div class="member_search">\n          \t<input type="text" id="search_input" name="search_input" placeholder="멤버검색" class="search_input">\n            <button class="search_x"><img src="http://s.cmstatic.net/pcweb/res/153600/images/chat/input_x.gif" alt="" width="17" height="17" /></button>\n            <button type="submit" class="search_submit"><img src="http://s.cmstatic.net/pcweb/res/153600/images/chat/search_submit.png" alt="" width="18" height="18" /></button>\n          </div>\n        </div>\n      </div>\n      <div class="chat_layer_main">\n        <form method="post" action="#">\n          <div class="member_main">\n          \t<div class="_member_list_wrap">\n          \t</div>\n            \n\t\t\t\n          </div>\n\t\t  <div class="_selected_member_wrap">\n\t\t  </div>\n          <div class="confirm_box">\n            <button type="button" class="btn_cancel"><span>취소</span></button>\n            <button type="sutmit" class="btn_confirm"><span>초대</span></button>\n          </div>\n        </form>\n        <div class="dim"></div>\n      </div>';
});
define("view_inviteTemplate",["jquery","api","text!templates/inviteTemplate.html"],function($,a,t){
	var view = {
			initialize : function(){
				
			}
	};
	return view;
});
/**
 * 대화상대 초대 멤버 
 */
define("text!templates/invitableMemberTemplate.html",[],function(){
    return '<script type="x-jquery-tmpl"><img src="${thumbnail}" class="profile" alt="" width="44" height="44">\n<span class="member_name">${name}</span>\n<span class="check_wrap">\n\t<input type="checkbox" id="check_member_${cid}" name="check_member_${cid}" value="">\n\t<label class="check_member" for="check_member_${cid}">\n\t\t<span class="checkbox_fake"></span>1:1\n\t</label>\n</span></script>';
});
define("view_invitableMemberTemplate",["jquery","api","text!templates/invitableMemberTemplate.html"],function($,a,t){
	var view = {
			initialize :  function(){
				
			}
	}
	return view;
});


define("common_chatting",["jquery","event","util"],function(){
	
});

/**
 * view 모듈
 */
define("view",["jquery","api","text!templates/messageTemplate.html","text!templates/eventTemplate.html","view_memberListTemplate","view_memberItemTemplate"],function($,a,b,c,d,e){
	var view = {
			displayMemberList : function(){
				d.initialize();
				e.initialize();
			},
			displayThumbnail : function(){
				
			},
			displayMessage : function(){
				
			},
			displayInvite : function(){
				
			},
			displaySync : function(){
				
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
 * event callback 모듈
 */
define("callback",["jquery","webSocket","view"],function($,ws,v){
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
				v.displayMemberList();
			},
			//대화초대 버튼
			inviteBtnClick : function(e){
				v.displayInvite();
			},
			//대화삭제 버튼
			clearBtnClick : function(e){
				e.preventDefault();
				//TODO : 서버로 대화삭제 여부 전송해야함. 이후에 대화 싱크를 위해서
				$(".chat_list").html("");
				$(".pop_setting").trigger("click");
			},
			//대화방 나가기 버튼
			exitBtnClick : function(e){
				//TODO : 서버로 대화방 나가기 여부 전송해야함.
				window.close();
			},
			//썸네일 클릭
			thumbnailClick : function(e){
				v.displayThumbnail();
			},
			//전송버튼 표출
			showSendBtn : function(e){
				var msg = $(".msg_input").val();
				if( msg.length == 0 ){					
					$(".msg_sutmit").css("opacity","0");
				} else {
					$(".msg_sutmit").css("opacity","1");
				}
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
				$(".msg_sutmit").css("opacity","0");
				v.displayMessage();
			},
			//파일전송
			sendFile : function(e){
				
			}
			
	}
	return callback;
});
/**
 * event 모듈
 */
define("event",["jquery","callback"],function($,callback){
	var event = {
			addEvent : function(el,type,callback){
				$(el).on(type,callback);
			},
			initEvent : function(){
				/**
				 * 상단 네비게이션 버튼 클릭 이벤트
				 */
				this.addEvent(".pop_setting","click",callback.headBtnClick);
				/**
				 * 대화멤버 버튼 클릭 이벤트
				 */
				this.addEvent(".chat_member","click",callback.memberBtnClick);
				/**
				 * 대화초대 버튼 클릭 이벤트
				 */
				this.addEvent(".invite_friends","click",callback.inviteBtnClick);
				/**
				 * 대화삭제 버튼 클릭 이벤트
				 */
				this.addEvent(".delete_chat","click",callback.clearBtnClick);
				/**
				 * 대화방 나가기 버튼 클릭 이벤트
				 */
				this.addEvent(".quit_chatroom","click",callback.exitBtnClick);
				/**
				 * 썸네일 클릭 이벤트
				 */
				this.addEvent(".pf_img","click",callback.thumbnailClick);
				/**
				 * 채팅 메시지 입력시 전송버튼 표출 이벤트
				 */
				this.addEvent(".msg_input","keyup",callback.showSendBtn);
				/**
				 * 전송 버튼 클릭 이벤트
				 */
				this.addEvent(".msg_sutmit","click",callback.sendMsg);
				/**
				 * 엔터 키 입력 이벤트
				 */
				this.addEvent(".msg_input","keyup",callback.sendMsg);
				/**
				 * 파일 전송 이벤트
				 */
				this.addEvent("","click",callback.sendFile);
			}
	}
	return event;
});
define("common_chatting",["jquery","event","util"],function(){
	
});
/**
 * chatting 모듈
 */
define(["event","webSocket"],function(e,ws){
	var chatting = {
			init : function(){
				e.initEvent();
				ws.connect();
				
			}
	}
	return chatting;
});