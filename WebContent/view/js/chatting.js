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
	var util = {
			/**
			 * 
			 */
			replaceStr : function(){
				
			},
			/**
			 * 
			 */
			getDateString : function(){
				
			}
	}
	return util;
});
/**
 * socket 통신 모듈
 */
define("webSocket",[],function(){
	var ws = {
			
	}
	return ws;
});
/**
 * 메시지 템플릿
 */
define("text!templates/messageTemplate.html",[],function(){
	return "";
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
define("callback",["jquery"],function($,e){
	var callback = {
			
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
				e.addEvent("","",callback);
				/**
				 * 대화멤버 버튼 클릭 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 대화초대 버튼 클릭 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 대화삭제 버튼 클릭 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 대화방 나가기 버튼 클릭 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 썸네일 클릭 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 채팅 메시지 입력시 전송버튼 표출 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 전송 버튼 클릭 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 엔터 키 입력 이벤트
				 */
				e.addEvent("","",callback);
				/**
				 * 파일 전송 이벤트
				 */
				e.addEvent("","",callback);
				
			}
	}
	return chatting;
});