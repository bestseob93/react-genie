/**
 * custom script main
 */
// Intent에 따른 분기
exports.handler = function (request,response) {
	// Intent 처리 분기
	switch(request['intent']) {
		// 인텐트 detail 처리 분기
		case 'detail':
			return intentHandler_detail(request,response);

		// 인텐트 main 처리 분기
		case 'main':
			return intentHandler_main(request,response);

		default :
			return null;
	}
}


/**
 * Common functions
 */
// 로그 출력 함수 : IDE의 오류 및 디버그 로그에서 확인 가능
function printLogMsg(logMsg) {
  var dateFormat = require('dateformat');
  var now = new Date();
  console.log(dateFormat(now, "yyyy-mm-dd HH:MM:ss") + " " + logMsg);
}

// request에 기존 발화(history) 존재 여부 확인 함수
function getRequestHistory(request) {
	var history_json = request.history;

	if(!history_json) {
    return null;
	}
	return history_json;
}

// request에서 기존 발화(history)의 frame_cdss를 가져오는 함수
function getReqeustHistoryFrameCDSS(request) {
	var History_json = getRequestHistory(request);

	if(!History_json) {
		printLogMsg("History 정보가 없습니다.");
    return null;
	}

	if(!History_json.TaskFrame) {
		printLogMsg("History json 파싱 중 오류가 발생했습니다.(history/TaskFrame)");
		return null;
	}

	return History_json.TaskFrame.frame_cdss;
}

// request에서 기존 발화(history)의 goal을 가져오는 함수
function getRequestHistoryGoal(request) {
	var HistoryFrameCDSS_json = getReqeustHistoryFrameCDSS(request);

	if(!HistoryFrameCDSS_json) {
		printLogMsg("History json 파싱 중 오류가 발생했습니다.(history/TaskFrame/frame_cdss)");
		return null;
	}

	return HistoryFrameCDSS_json.goal;
}

// request에서 기존 발화(history)의 CS를 가져오는 함수
function getHistoryCS_json(request) {
	var HistoryFrameCDSS_json = getReqeustHistoryFrameCDSS(request);

	if(!HistoryFrameCDSS_json) {
		printLogMsg("History json 파싱 중 오류가 발생했습니다.(history/TaskFrame/frame_cdss)");
		return null;
	}

	if(!HistoryFrameCDSS_json.CS) {
		printLogMsg("History json 파싱 중 오류가 발생했습니다.(history/TaskFrame/frame_cdss/CS)");
		return null;
	}

	return HistoryFrameCDSS_json.CS;
}

function getRequestHistoryCSValue_json(request, key) {
	var HistoryCS_json = getRequestHistoryCS_json(request);

	if(!HistoryCS_json) {
		printLogMsg("History json 파싱 중 오류가 발생했습니다.(history/TaskFrame/frame_cdss/CS)");
		return null;
	}

	for(var i=0;i<HistoryCS_json.length;i++) {
		switch(HistoryCS_json[i].Feature) {
				case key :
					return CS_json[i].Value;
		}
	}

	return null;
}

// request에서 기존 발화(history)의 action을 가져오는 함수
function getRequestHistoryAction_json(request) {
	var HistoryFrameCDSS_json = getRequestHistoryFrameCDSS(request);

	if(!HistoryFrameCDSS_json) {
		printLogMsg("History json 파싱 중 오류가 발생했습니다.(history/TaskFrame/frame_cdss)");
		return null;
	}

	if(!HistoryFrameCDSS_json.action) {
		printLogMsg("History json 파싱 중 오류가 발생했습니다.(history/TaskFrame/frame_cdss/action)");
		return null;
	}

	return HistoryFrameCDSS_json.action;
}

// request에서 NE를 가져오는 함수
function getRequestNE(request, ne_dicName) {
	var param = request.param;

	if(!param) {
		printLogMsg("Param 정보가 없습니다.");
    return null;
	}

	return param[ne_dicName];
}





/**
 * sample codes
 */

/**
// 샘플 인텐트(ShowMenuList) 처리 함수
function intentHandler_ShowMenuList(request,response) {

	// 로그를 출력하는 공통 함수
	// 이 함수를 통해 로그를 출력하면, IDE나 통합 Simulator의 오류 및 디버그 로그 창에 표시됩니다.
	printLogMsg("intentHandler_ShowMenuList가 호출되었습니다.");

	// UserMesg는 사용자 발화문으로 받은 발화문을 그대로 입력합니다.
  // CDSS Response-"UserMesg"는 DSS Response-"dialogframe/utter/uword"로 출력됩니다.
  // ex) 미래에셋에서 미국 시황 정보 알려줘
	response["UserMesg"] = request["reqmsg"];

	// NE 구분
	var menuType = getRequestNE(request, "MenuType");
	var menuListType = getRequestNE(request, "MenuListType");
	var number = getRequestNE(request, "Number");

	// NE가 MenuType
	if(menuType) {

		// viewtype은 노출 유형으로 아래의 값을 가질 수 있습니다.
		//  - A : 3rd Party사 앱(그외)
		//  - T : 음성 응답
		//  - U : Confirm UI
		//  - S : SELECT UI
		// CDSS Response-"viewtype"은 DSS Response-"dialogframe/utter/action/serviceId/viewtype"에 출력됩니다.(action은 첫번째 action)
		// 여기서는 App에 전달하지 않고, 추가로 질의를 받아야 하므로, 음성 응답만 진행하므로, "T"로 세팅하니다.
		response["viewtype"] = "S";

		// SysTemplate는 시스템응답문으로 입력한 값으로 음성으로 출력됩니다.
		// CDSS Response-"SysTemplate"은 DSS Response-"dialogframe/utter/action/mesg"에 출력됩니다. (action은 첫번째 action)
		// 여기서는 추가 질의를 입력받아야 하므로, 해당 문의 음성을 입력합니다.
		response["SysTemplate"] = "세트메뉴, 단품메뉴, 추가메뉴 중에 어떤 메뉴를 조회 하시겠습니까?";

		// CS는 클라이언트와 사전에 약속된 정보 전달을 위해 사용합니다.
		// 사전에 약속된 Key값은 Feature에 정의하고, 그에 대한 값은 Value에 정의합니다.
		// CDSS Response-"CS"는 DSS Response-"dialogframe/utter/action/serviceId/CS"에 출력됩니다. (action은 첫번째 action, Feature의 값이 Name으로 Value의 값이 Value로)
		// ( [ {"Feature":"City", "Value":"서울" }, {"Feature":"Weather", "Value":"맑음" }] -> {"City":"서울", "Weather":"맑음" }
		// 여기서는 추가 질문을 하고 있으므로, 별도로 정보를 넘기지 않습니다.
		// response["CS"] = ;

		//action
		// CDSS Response-action -> DSS Response-dialogframe/utter/action (action은 두번째 action부터 생성, action 내 속성은 action tag 하위로 생성)
		// response["action"] = [
							{"odr" : "1", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "2", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "3", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "4", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							];

	}
	//NE가 menuListType
	else if(menuListType) {

		// 여기서는 질의 해석 결과를 App으로 전달해야 하므로, "A"로 세팅합니다.
		response["viewtype"] = "A";

		// 여기서는 선택된 메뉴 목록 타입에 따른 메뉴 목록을 출력하므로, 그에 맞는 음성을 입력합니다.
		response["SysTemplate"] = menuListType + "에는 어떤 메뉴들이 있는지 알려 드립니다.";

		// 여기서는 3rd Party App에서 인지할 수 있도록, 메뉴 목록 타입을 전달합니다.
		response["CS"] = [
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""}
		  			];

		// action은 반복적인 개체를 전달할 때 유용합니다. 역시 클라이언트와 각 속성 키값은 사전에 약속이 되어 있어야 합니다.
		// CDSS Response-"action"은 DSS Response-"dialogframe/utter/action"에 출력됩니다. (action은 두번째 action부터 생성, action 내 속성은 action tag 하위로 생성)
		// 여기서는 전달할 목록 데이터가 없으므로, 별도로 정보를 넘기지 않습니다.
		// response["action"] = [
							{"odr" : "1", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "2", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "3", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "4", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							];

	}
	//NE가 Number
	else if(number) {

		HistoryGoal = getRequestHistoryGoal(request);
		HistoryNE = getRequestHistoryCSValue_json(request, "MenuType");

		if(!HistoryGoal || !HistoryNE)
			return "Fail";
		else if(HistoryGoal!="ShowMenuList")
			return "Fail";

		// 여기서는 질의 해석 결과를 App으로 전달해야 하므로, "A"로 세팅합니다.
		response["viewtype"] = "A";

		switch(number) {
			case '일번' :
				menuListType = "단품메뉴";
				break;
			case '이번' :
				menuListType = "세트메뉴";
				break;
			case '삼번' :
				menuListType = "추가메뉴";
				break;
			default:
				return "Fail";
		}

		// 여기서는 선택된 메뉴 목록 타입에 따른 메뉴 목록을 출력하므로, 그에 맞는 음성을 입력합니다.
		response["SysTemplate"] = menuListType + "에는 어떤 메뉴들이 있는지 알려 드립니다.";

		// 여기서는 3rd Party App에서 인지할 수 있도록, 메뉴 목록 타입을 전달합니다.
		response["CS"] = [
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""}
		  			];

		// action은 반복적인 개체를 전달할 때 유용합니다. 역시 클라이언트와 각 속성 키값은 사전에 약속이 되어 있어야 합니다.
		// CDSS Response-"action"은 DSS Response-"dialogframe/utter/action"에 출력됩니다. (action은 두번째 action부터 생성, action 내 속성은 action tag 하위로 생성)
		// 여기서는 전달할 목록 데이터가 없으므로, 별도로 정보를 넘기지 않습니다.
		// response["action"] = [
							{"odr" : "1", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "2", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "3", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "4", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							];

	}
	else
		return "Fail";

	return "Success";
}

//샘플 인텐트(ShowMenu) 처리 함수
function intentHandler_ShowMenu(request,response) {

	printLogMsg("intentHandler_ShowMenu가 호출되었습니다.");

	// NE 확인
	var menuName = getRequestNE(request, "Menu");

	if(!menuName)
		return "Fail";

	// 여기서는 질의 해석 결과를 App으로 전달해야 하므로, "A"로 세팅합니다.
	response["viewtype"] = "A";

	// 여기서는 메뉴 조회를 바로 하면 되므로, 그에 맞는 음성을 입력합니다.
	response["SysTemplate"] = menuName + "에 대해서 알려드립니다.";

	// 여기서는 3rd Party App에서 인지할 수 있도록, 메뉴명을 전달합니다.
	response["CS"] = [
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""}
		  			];

	// 여기서는 전달할 목록 데이터가 없으므로, 별도로 정보를 넘기지 않습니다.
	// response["action"] = [
							{"odr" : "1", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "2", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "3", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "4", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							];

	return "Success";
}

//샘플 인텐트(OrderMenu) 처리 함수
function intentHandler_OrderMenu(request,response) {

	printLogMsg("intentHandler_OrderMenu가 호출되었습니다.");

	response["UserMesg"] = request["reqmsg"];

	// NE 구분
	var menuName = getRequestNE(request, "Menu");
	var menuConfirm = getRequestNE(request, "MenuConfirm");

	// NE가 MenuName
	if(menuName) {

		// 여기서는 App에 전달하지 않고, 확인 질의를 받아야 하므로, 음성 응답만 진행하므로, "T"로 세팅합니다.
		response["viewtype"] = "U";

		// 여기서는 추가 질의를 입력받아야 하므로, 해당 문의 음성을 입력합니다.
		response["SysTemplate"] = menuName + " 메뉴를 주문하시겠습니까?";

		// 여기서는 확인 질문을 하고 있으므로, 별도로 정보를 넘기지 않습니다.
		//	response["CS"] = [
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""}
		  			];

	}
	// NE가 MenuConfirm
	else if(menuConfirm) {

		// 이전 질문이 "메뉴 주문"인지 확인
		HistoryGoal = getRequestHistoryGoal(request);
		menu = getRequestHistoryCSValue_json(request, "Menu");

		if(!HistoryGoal || !menu)
			return "Fail";
		else if(HistoryGoal!="OrderMenu")
			return "Fail";

		// 부정
		if(menuConfirm=="아니") {
			// 주문을 하지 않으므로 음성으로 안내만 하므로, "T"로 세팅합니다.
			response["viewtype"] = "A";

			// 여기서는 주문 취소 안내 음성을 입력합니다.
			response["SysTemplate"] = menuName + " 메뉴 주문을 취소하셨습니다.";

			// 여기서는 주문 취소이므로 별도로 정보를 넘기지 않습니다.
			// response["CS"] = ;

		}
		// 긍정
		else {
			// 여기서는 질의 해석 결과를 App으로 전달해야 하므로, "A"로 세팅합니다.
			response["viewtype"] = "A";

			// 여기서는 주문 안내 음성을 입력합니다.
			response["SysTemplate"] = menuName + " 메뉴 주문을 진행합니다.";

			// 여기서는 3rd Party App에서 인지할 수 있도록, 주문하는 메뉴를 전달합니다.
			response["CS"] = [
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""},
						{"Feature" : "", "Value" : ""}
		  			];

		}
	}
	else
		return "Fail";

	// 여기서는 전달할 목록 데이터가 없으므로, 별도로 정보를 넘기지 않습니다.
	// response["action"] = [
							{"odr" : "1", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "2", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "3", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							{"odr" : "4", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
							];

	return "Success";
}

*/

/**
 * intent handler functions
 */
function intentHandler_detail(request,response) {
	var result = "Type1";

	response["UserMesg"] = request["reqmsg"];

	// response["viewtype"] = "";

	// response["SysTemplate"] = "";

	// response["CS"] = [
	//				{"Feature" : "", "Value" : ""},
	//				{"Feature" : "", "Value" : ""},
	//				{"Feature" : "", "Value" : ""}
	//			  ];

	// response["action"] = [
	//							{"odr" : "1", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							{"odr" : "2", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							{"odr" : "3", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							{"odr" : "4", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							];

	return result;
}

function intentHandler_main(request,response) {
	var result = "Type1";

	response["UserMesg"] = request["reqmsg"];

	// response["viewtype"] = "";

	// response["SysTemplate"] = "";

	// response["CS"] = [
	//				{"Feature" : "", "Value" : ""},
	//				{"Feature" : "", "Value" : ""},
	//				{"Feature" : "", "Value" : ""}
	//			  ];

	// response["action"] = [
	//							{"odr" : "1", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							{"odr" : "2", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							{"odr" : "3", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							{"odr" : "4", "mesg" : "", "actGroup" : "", "actType" : "", "serviceId" : ""}, 
	//							];

	return result;
}

