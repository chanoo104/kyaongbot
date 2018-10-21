//KyBot 5.1 beta release build, rgb / firefox

const scriptName = "Ky_core.js";
eval(DataBase.getDataBase('moment'));

var ver = '5.1.1.2_beta'
var updatecode = ''

let timeBoot = moment();
const blank = '‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭\n\n\n'

let firstLoad = true
let command = '';
let description = '';
let commandList = new Array();
let descriptionList = new Array();
let userGroup = ['admin', 'manager', 'member'];

let temp = {};
let ThreadManager = new Object();
ThreadManager.i = new Object();
temp.hanQuizValid = new Object();
temp.hanR = new Object();
temp.hanN = new Object();

const welcomeMessage = ('\n처음 오신 분이라면 공지를 참조하여 인증하시고,\n기존 멤버인데 부계정으로 들어오신 것이거나 프로필을 수정하신 것이라면 원래 계정의 인증센터에 아무 말이나 친 후 !인증 <식별코드> 를 입력해 주세요.(<> 괄호는 제외)\인증을 거치지 않으면 일부 기능 이용이 불가능합니다.')


if (DataBase.getDataBase('KyBot') == null) DataBase.setDataBase('KyBot', JSON.stringify(new Object()));
const Ky = JSON.parse(DataBase.getDataBase('KyBot'));

Ky.g = Ky.g || new Object(); //Group 객체
Ky.g.tempAuth = Ky.g.tempAuth || new Object(); //임시 인증 데이터
Ky.g.tempHash = Ky.g.tempHash || new Object(); //임시 인증 데이터
Ky.c = Ky.c || new Object(); //Core 객체


/*아이디어노트

group, room 별 명령어 지원 설정
manageCp
manageGp
한 명령어로 연동 이거 뭐라하더라 중재자패턴인가





*/





const UPDATE = {};
UPDATE.saveData = function(msg) { //파일에 내용을 저장하는 함수
	try {
		var file = new java.io.File(sdcard + '/kbot/response.js');
		var fos = new java.io.FileOutputStream(file);
		var str = new java.lang.String(msg);
		fos.write(str.getBytes());
		fos.close();
	} catch (e) {
		Log.debug(e + ' At:' + e.lineNumber);
	}
};

function getHtml(text) {
    var content = new java.io.ByteArrayOutputStream();
    android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(text)).getEntity().writeTo(content);
    content.close();
    var str = String(content.toString());
    return str;
}


var manageDB = function() {
	return {
		loadAll: function() {

		}
	}
}


var manageCp = (function() {
	return {
		check: function(params, i) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
			icode = i || icode;
			return Ky.g[group].m[icode].cp;
		},
		add: function(params, point, i) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
			icode = i || icode;
			Ky.g[group].m[icode].cp += 0
			return Ky.g[group].m[icode].cp += Number(point);
			
		}
	};
})();


var manageMember = (function() {
	return {
		//icodeMigration: function(group, sender) {

		//}
		memberMigration: function(params) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;

		},
		hashMigration: function(params) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;

		}
	};
})();

var miniGame = (function() {
	return {

	};
})();


function getHash(params) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	return java.lang.String(imageDB.getProfileImage()).hashCode();
}

function makeAuthID() {
	var text = "";
	var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 6; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

var Group = (function() { //Group 생성자 | ex) Ky.g[group] = new Group(group);
	function Group() {
		this.counter = new Object();
		this.counter.total = 0;
		this.r = new Object();
		this.m = new Object();
		this.tempM = new Object();
		this.roomList = new Array();
		this.admin = new Array();
	};
	return Group;
})();

var Room = (function() { //Room 생성자
	function Room(params) {
		let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params
		this.groupName = group;
		Ky.g[group].roomList.push(room);
	}
	Room.prototype.botOn = true;
	return Room;
})();

var Member = (function() { //Member 생성자
	function Member(params) {
		let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params
		this.memberData = [[], []];
		this.memberData[0].push(sender);
		this.memberData[1].push(hash);
		this.counter = new Object();
		this.counter.total = 0;
		this.type = userGroup[userGroup.length - 1];
		this.warningW = 0;
		this.cp = 0;
		this.gp = 0;
	};
	return Member;
})();

function randomIcode(params) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params
	var possible = "0123456789";
	while (true) {
		var text = "";
		for (var i = 0; i < 4; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
		if (Ky.g[group].m[String(text)] === undefined) break;
	}
	return text;
}

function memberCounter(params) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	var t = moment().format('YYMMDDHH');
	Ky.g[group].m[icode].counter.timeList = Ky.g[group].m[icode].counter.timeList || new Array();
	Ky.g[group].m[icode].counter.list = Ky.g[group].m[icode].counter.list || new Array();
	var timeList = Ky.g[group].m[icode].counter.timeList;
	if (timeList.indexOf(t) == -1) timeList.push(t);
	Ky.g[group].m[icode].counter.list[timeList.indexOf(t)] = Ky.g[group].m[icode].counter.list[timeList.indexOf(t)] || 0;
	Ky.g[group].m[icode].counter.list[timeList.indexOf(t)]++;
	Ky.g[group].m[icode].counter.total = Ky.g[group].m[icode].counter.total || 0;
	Ky.g[group].m[icode].counter.total++;
	//replier.reply(Ky.g[group].m[icode].counter.total);
}




function memberCount(params, input, code) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	icode = code || icode;
	if (input.indexOf('-') != -1) {
		var from = moment(input.split('-')[0], ['YYMMDDHH', 'YYMMDD', 'YYDD', 'YY'], true);
		if (moment(input.split('-')[0], ['YYMMDDHH', 'YYMMDD', 'YYDD', 'YY'], true).isValid()) {} else return '숫자만 입력해 주세요.';
		var to = moment(input.split('-')[1], ['YYMMDDHH', 'YYMMDD', 'YYDD', 'YY'], true);
		if (to.isValid()) {
			if (input.split('-')[1].length == 2) to.endOf('year');
			if (input.split('-')[1].length == 4) to.endOf('month');
			if (input.split('-')[1].length == 6) to.endOf('day');
			if (input.split('-')[1].length == 8) to.endOf('hour');
		} else return '숫자만 입력해 주세요.';
		if (to.diff(from) < 0) return '시작 시간, 종료 시간 순으로 입력해 주세요.';
		if (to.diff(from.add(1, 'y')) > 0) return '최대 구간 길이는 1년입니다.';
		from.add(-1, 'y');
	} else {
		if (moment(input, ['YYMMDDHH', 'YYMMDD', 'YYDD', 'YY'], true).isValid()) {
			var from = moment(input, ['YYMMDDHH', 'YYMMDD', 'YYDD', 'YY'], true);
		} else return '숫자만 입력해 주세요.';
		var to = moment();
		if (to.diff(from) < 0) return '시작 시간은 현재 시간 이전이여야 합니다.';
	}

	var result = 0;
	var timeList = Ky.g[group].m[icode].counter.timeList || new Array();
	var t = from.format('YYMMDDHH');
	//replier.reply(t)
	var a1 = Number(t.slice(0, 2));
	var a2 = Number(t.slice(2, 4));
	var a3 = Number(t.slice(4, 6));
	var a4 = Number(t.slice(6, 8));
	//var a0 = Number(t.slice(0,6));
	for (i = 0; i < timeList.length; i++) {
		var t = timeList[i];
		//replier.reply(t)
		var b1 = Number(t.slice(0, 2));
		var b2 = Number(t.slice(2, 4));
		var b3 = Number(t.slice(4, 6));
		var b4 = Number(t.slice(6, 8));
		if (a1 <= b1) {
			if (a2 <= b2) {
				if (a3 <= b3) {
					if (a4 <= b4) {
						var start = i
						//replier.reply('✔')
						break;
					}
				}
			}
		}
	}
	if (typeof start == 'undefined') start = -1;
	if (start == -1) return 0;
	var n = start += 0
	var t = to.format('YYMMDDHH')
	var a1 = Number(t.slice(0, 2));
	var a2 = Number(t.slice(2, 4));
	var a3 = Number(t.slice(4, 6));
	var a4 = Number(t.slice(6, 8));
	for (i = n; i < timeList.length; i++) {
		var t = timeList[i];
		//replier.reply('t')
		var b1 = Number(t.slice(0, 2));
		var b2 = Number(t.slice(2, 4));
		var b3 = Number(t.slice(4, 6));
		var b4 = Number(t.slice(6, 8));
		if (a1 <= b1) {
			if (a2 <= b2) {
				if (a3 <= b3) {
					if (a4 <= b4) {
						var end = i
						break;
					}
				}
			}
		}
	}
	//replier.reply('end: ' + end)
	if (typeof end == 'undefined') end = timeList.length - 1;
	//replier.reply('start: ' + start);
	//replier.reply('end: ' + end)
	var list = Ky.g[group].m[icode].counter.list;
	for (i = start; i < end + 1; i++) {
		result += list[i];
		//replier.reply(timeList[i]);
	}
	//replier.reply('hi')

	//replier.reply( new Date().getTime()-timea)
	return result;
}

function lolStat(nick) {
	var mmr = true,
		unranked = false
	try {
		var doc = org.jsoup.Jsoup.connect("http://www.op.gg/summoner/userName=" + nick).header("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7").get();
		try {
			var doc1 = org.jsoup.Jsoup.connect("http://www.op.gg/summoner/ajax/mmr/summonerName=" + nick).header("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7").get();
		} catch (e) { //결과값을 찾을수 없으면
			mmr = false
		}
		if (doc.select('div.Tier').get(0).text() == 'Unranked') unranked = true
		var arr = [];
		for (i = 0; i < 3; i++) {
			if (doc.select('.ChampionBox:eq(' + i + ') a').text() == '') break;
			arr.push(' ' + doc.select('.ChampionBox:eq(' + i + ') a').text());
			arr.push(' : ');
			arr.push(doc.select('.ChampionBox:eq(' + i + ') div.title').text());
			arr.push(', KDA ');
			arr.push(doc.select('.ChampionBox:eq(' + i + ') span.KDA').text());
			arr.push(', ');
			arr.push(doc.select('.ChampionBox:eq(' + i + ') div[title=승률]').text());
			arr.push('\n');
		}
		var list = arr.join(''),
			arr = [];
		arr.push('[' + doc.select("div.SummonerName").text() + ']\n');
		if (!unranked) arr.push(doc.select('div.LadderRank').text() + '\n');
		arr.push('| LV ' + doc.select('span[class=Level tip]').text() + ' | ');
		if (!unranked) { arr.push(doc.select('div.Tier').get(0).text() + ' | ' + doc.select('div.LP').get(0).text() + ' |') } else arr.push('Unranked |')
		if (doc.select('div div span.Item').text() != '') arr.push('\n[ ' + doc.select('div div span.Item').text() + ' ]');
		arr.push('\n\n》최근 20게임 전적\n ' + doc.select('div.WinRatioTitle span.win').text() + '승 ' + doc.select('div.WinRatioTitle span.lose').text() + '패, ' + doc.select('div.WinRatioTitle b').text());
		if (!unranked) arr.push('\n》솔랭 전적\n ' + doc.select('div.WinLose').get(0).text());
		arr.push('\n》MOST 챔피언\n' + list);
		if (mmr) arr.push('\n예상 MMR : ' + doc1.select('td.MMR').text() + '\n예상 티어 : ' + doc1.select('td.TierRankString').text());
		if (mmr)
			if (doc1.select('div.TipStatus').text() != '') arr.push('\n' + doc1.select('div.TipStatus').text());
		return arr.join('')
	} catch (e) { //결과값을 찾을수 없으면
		return ("전적 정보가 없습니다.");
	}
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId) {
	let params = { //함수용 통합 매개변수
		get room() { return room; },
		get msg() { return msg; },
		get sender() { return sender; },
		get isGroupChat() { return isGroupChat; },
		get replier() { return replier; },
		get imageDB() { return imageDB; },
		get packageName() { return packageName; },
		get threadId() { return threadId; }
	}
	
	commandList = new Array();
	descriptionList = new Array();

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Authentification // 신규 데이터 생성, 인증 발급
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//개인톡 인증
	if (isGroupChat == false) {
		if (msg in Ky.g) {
			var group = msg;
		} else if (sender in Ky.g.tempAuth) {
			var group = Ky.g.tempAuth[sender];
		} else return;
		if (sender in Ky.g[group].tempM) {
			var authID = makeAuthID();
			Ky.g[group].tempM[sender].authID = authID;
			Ky.g.tempAuth[authID] = group;
			Ky.g.tempHash[authID] = getHash(params);
			replier.reply('인증코드:');
			replier.reply(authID);
			replier.reply('닉네임:');
			replier.reply(sender);
			replier.reply('인증코드를 복사해서 공지에 있는 2차 인증센터에 들어갈때 <<카카오프렌즈>> 선택 후 <<닉네임에 붙여넣으세요>>. 방에 입장한 후에는 닉네임을 복사해서 그대로 붙여넣어 채팅을 보내면 인증이 완료됩니다.\n헷갈리지 마세요. <<닉네임을 인증코드로>> 하셔야 합니다. <<닉네임을 인증코드>>. 다시 한번 말하지만 난독하지 마세요. 카카오프렌즈 닉네임을 인증코드로, 들어가서 채팅으로 원래 사용중인 닉네임을 입력하세요. 실수하면 아주 귀찮아집니다.');
			replier.reply('ex) 홍길동, a1b2c3 이면 인증방 들어갈때 닉네임을 카카오프렌즈 선택하고 닉네임을 a1b2c3으로 하고, 들어가서 채팅창에 홍길동 엔터');
		} else if (msg in Ky.g[group].tempM) {
			if (sender == Ky.g[group].tempM[msg].authID) {
				Object.defineProperty(params, "group", { get: function() { return group; } });
				Object.defineProperty(params, "hash", { get: function() { return hash; } });
				var icode = randomIcode(params);
				var hash = Ky.g.tempHash[sender];
				var authID = sender;
				sender = msg;
				replier.reply(sender);
				Ky.g[group].m[icode] = new Member(params);
				Ky.g[group].m[icode].authID = authID;
				Ky.g[group] = Ky.g[group] || new Object(params);
				if (Object.keys(Ky.g[group].m).length == 1) {
					Ky.g[group].m[icode].type = userGroup[0];
					replier.reply('최초 관리자로 등록되었습니다.');
				}
				replier.reply('인증 성공. 데이터베이스가 정상적으로 생성되었습니다. 이제 자유로운 캬옹봇 사용이 가능합니다.')
				replier.reply('■■주의: 이 방에서 나가지 마세요. 추후 인증에 필요합니다. 임시인증은 안나가셔도 됩니다.■■')
				replier.reply('식별코드: ' + icode)
				delete Ky.g[group].tempM[msg];
			} else replier.reply('인증 실패, 다시 시도해 보세요. 캬옹봇은 당신의 닉네임을 [' + sender + ']로 인식하고 있습니다. 현재 사용중인 닉네임과 인식되는 닉네임이 다르다면 나갔다 들어와 보시고, 그래도 똑같다면 관리자에게 연락하세요.')
		}
		return;
	}

	//단체톡 시작
	var roomFullName = room;
	var group = room.split('_')[0];
	var room = roomFullName.split('_')[1];
	var hash = getHash(params);




	Object.defineProperty(params, "group", { get: function() { return group; } });
	Object.defineProperty(params, "hash", { get: function() { return hash; } });

	Ky.g[group] = Ky.g[group] || new Group(params);
	Ky.g[group].r[room] = Ky.g[group].r[room] || new Room(params);
	if (Ky.g[group].roomList.indexOf(room) == -1) Ky.g[group].roomList.push(room);

	for (i = 0; i < Ky.g[group].roomList[i]; i++) {
		if (Ky.g[group].r[Ky.g[group].roomList[i]].botOn == false) return;
	}

	var unAuthed = false;
	
	var exist = false;
	Object.keys(Ky.g[group].m).map(function(objectKey, index) {
		if (Ky.g[group].m[objectKey].memberData[0].indexOf(sender) != -1 && Ky.g[group].m[objectKey].memberData[0].indexOf(sender) == Ky.g[group].m[objectKey].memberData[1].indexOf(hash)) exist = objectKey;
	});
	if (exist == false) {
		Ky.g[group].tempM[sender] = Ky.g[group].tempM[sender] || new Object();
		Ky.g[group].tempM[sender].alert = Ky.g[group].tempM[sender].alert || 't';
		if ('mayBe' in Ky.g[group].tempM[sender]) {
			if (msg == Ky.g[group].tempM[sender].authCode) {
				Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].memberData[0].push(sender);
				Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].memberData[1].push(hash);
				replier.reply('계정 인증이 완료되었습니다.');
				delete Ky.g[group].tempM[sender];
			} else {
				if (msg == '!인증취소') {
					delete Ky.g[group].tempM[sender].mayBe;
					delete Ky.g[group].tempM[sender].authCode;
					replier.reply('인증이 취소되었습니다.');
				} else replier.reply('인증센터로 전송된 인증번호를 입력해 주세요. 인증번호가 오지 않는다면 인증센터에 아무 말이나 친 후 !인증취소 후 재인증해보시고, 그래도 안되거나 다른 문제가 있다면 관리자에게 문의하세요.');
			}
		} else if (msg.substr(0, 4) == '!인증 ' && Ky.g[group].m[msg.substr(4)] !== undefined) {
			var aCode = makeAuthID();
			Ky.g[group].tempM[sender].mayBe = msg.substr(4);
			Ky.g[group].tempM[sender].authCode = aCode;
			Api.replyRoom(Ky.g[group].m[msg.substr(4)].authID, aCode);
			Api.replyRoom(group + '_관리방', '[' + sender + ']\n인증코드: ' + aCode);

			replier.reply('인증코드가 인증센터로 전송되었습니다.');
		} else if (Ky.g[group].tempM[sender].alert == 't') {
			replier.reply('[' + sender + ']님 어서오세요.\n아래 내용을 펼쳐 안내를 확인하세요.' + blank + welcomeMessage);
			Ky.g[group].tempM[sender].alert = 'f';
		}
		var unAuthed = true;
	}
	if (unAuthed == true) {
		var icode = 'unauth'
	} else var icode = exist;
	
	Object.defineProperty(params, "icode", { get: function() { return icode; } });

	if (icode != 'unauth' && Ky.g[group].m[icode].counter.total == 0) replier.reply('[' + sender + ']님,' + group + ' 캬옹봇 인증이 완료되었습니다. 공지 또는 홈페이지에서 명령어를 확인하세요. <!식별코드> 로 식별코드를 확인하세요.')

	try {
		if (msg.indexOf("!eval ") == 0) {
			replier.reply(eval(msg.substring(6)))
		}
	} catch (e) {
		replier.reply("eval 실행 중 오류 발생!\n오류 메시지 : " + e.message)
	}

	Ky.g[group].r[room].enabled = Ky.g[group].r[room].enabled || new Object();

	Ky.g[group].r[room].enabled.generalSys = Ky.g[group].r[room].enabled.generalSys || true;
	if (Ky.g[group].r[room].enabled.generalSys == true) {
		generalSys(params);
	}
	
	Ky.g[group].r[room].enabled.manageSys = Ky.g[group].r[room].enabled.manageSys || true;
	if (Ky.g[group].r[room].enabled.manageSys == true) {
		manageSys(params);
	}
	
	Ky.g[group].r[room].enabled.pDBSys = Ky.g[group].r[room].enabled.pDBSys || true;
	if (Ky.g[group].r[room].enabled.pDBSys == true) {
		pDBSys(params);
	}

	Ky.g[group].r[room].enabled.cpSys = Ky.g[group].r[room].enabled.cpSys || true;
	if (Ky.g[group].r[room].enabled.cpSys == true) {
		cpSys(params);
	}

	Ky.g[group].r[room].enabled.miniGameSys = Ky.g[group].r[room].enabled.miniGameSys || true;
	if (Ky.g[group].r[room].enabled.miniGameSys == true) {
		miniGameSys(params);
	}

	Ky.g[group].r[room].enabled.miscSys = Ky.g[group].r[room].enabled.miscSys || true;
	if (Ky.g[group].r[room].enabled.miscSys == true) {
		miscSys(params);
	}

	Ky.g[group].r[room].enabled.memberCounter == Ky.g[group].r[room].enabled.memberCounter || true;
	if (icode != 'unauth') {
		if (Ky.g[group].r[room].enabled.memberCounter == true) {
			memberCounter(params);
		}

		Ky.g[group].r[room].enabled.dateSys = Ky.g[group].r[room].enabled.dateSys || true;
		if (Ky.g[group].r[room].enabled.dateSys == true) {
			dateSys(params);
		}

	}



	firstLoad = false;



}




function commandChk(params, c, a, d) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	if (icode == 'unauth' && a != 'all') {
		return false;
	}
	if (icode != 'unauth') {
		if (a != 'all') {
			if (userGroup.indexOf(a) < userGroup.indexOf(Ky.g[group].m[icode].type)) return false;
		}
		Ky.g[group].r[room].enabled[c] = Ky.g[group].r[room].enabled[c] || true;
		if (Ky.g[group].r[room].enabled[c] == false) {
			return false;
		}
	}
	Ky.g[group].counter[c] = Ky.g[group].counter[c]++ || 0;
	if (msg == '!명령어') {
		commandList.push(c);
		descriptionList.push(d);
	}
	return true;
}
let c, a, d;

function generalSys(params) {
	//일반 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '!테스트';
		a = 'all';
		d = '테스트입니다.';
		if (commandChk(params, c, a, d) == false) {
			replier.reply('false');
			break loop;
		}
		if (msg == c) {
			replier.reply('✔');
		}
	}

}

function manageSys(params) {
	//관리용 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	/*
	loop: {
		c = '!업데이트';
		a = 'admin';
		d = '캬옹봇을 온라인에서 업데이트합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		UPDATE.saveData(getHtml('https://raw.githubusercontent.com/chanoo104/kyaongbot/master/response.js'));
		replier.reply("[업데이트 코멘트]\n" + getHtml("https://github.com/chanoo104/kyaongbot/commit/master").split('<p class="commit-title">')[1].split("</p>")[0].trim());
		Api.reload();
		if (error == false) {
			replier.reply('업데이트 성공!')
		} else if (error == true) {
			replier.reply('업데이트 실패..')
		}
	}
*/
loop: {
	c = '!리로드';
	a = 'admin';
	d = '캬옹봇을 온라인에서 업데이트합니다.';
	if (commandChk(params, c, a, d) == false) break loop;
	if (msg == c) {
		Api.reload();
		replier.reply('리로드 성공!');
	}
}

loop: {
	c = '!세이브';
	a = 'admin';
	d = '캬옹봇을 온라인에서 업데이트합니다.';
	if (commandChk(params, c, a, d) == false) break loop;
	if (msg == c) {
		replier.reply("진행중...");
		DataBase.setDataBase(JSON.stringify(Ky), "KyBot_backup0");
	}
}
loop: {
	c = '!로드';
	a = 'admin';
	d = '캬옹봇을 온라인에서 업데이트합니다.';
	if (commandChk(params, c, a, d) == false) break loop;
	if (msg == c) {
		replier.reply("백업 진행중...");
		Ky = JSON.parse(DataBase.getDataBase("KyBot_backup0"));
	}
}
}

function pDBSys(params) {
	//미니게임 제외 개인 데이터 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '!식별코드';
		a = 'member';
		d = '자신의 식별코드를 확인합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('[' + sender + ']\n' + icode);
		}
	}



	//이런식으로



}

function cpSys(params) {
	//미니게임 제외 포인트 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '.채팅보상';
		a = 'member';
		d = '채팅 1개당 포인트를 1씩 증가시킵니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		Ky.g[group].m[icode].cp++;
	}

	loop: {
		c = '!포인트';
		a = 'member';
		d = '자신의 포인트를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('[' + sender + ']\n' + manageCp.check(params));
		}
	}
}

function miniGameSys(params) {
	//미니게임 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '.랜덤문자';
		a = 'member';
		d = '일정 확률로 포인트를 보상으로 하는 글자 입력 퀴즈를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		//이거 나중에 변수 통합시키는게 좋을듯
		//출력 랜덤이랑 일반 구분, 포인트 랜덤으로 퀴즈맞춘후에 돌려서 주기
		temp.hanQuizValid[room] = temp.hanQuizValid[room] || false
		if (msg == '!랜덤문자') {
			var ram = Math.floor(Math.random() * 55);
			if (temp.hanQuizValid[room] == false) {
				var hanram = [];
				for (var i = 0; i < 5; i++) {
					hanram.push(String.fromCharCode(44031 + Math.ceil(11172 * Math.random())));
					var invChar = ''
					for (var k = 0; k < Math.round(Math.random() * 90 + 10); k++) invChar += String.fromCharCode(8237)
					hanram.push(invChar)
				}
				temp.hanR[room] = hanram.join('').replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, "")

				temp.hanN[room] = hanram.join('')
				replier.reply(String.fromCharCode(0) + "[돌발 퀴즈!]\n가장 먼저 주어진 글자를 입력!\n" + temp.hanN[room])
				temp.hanQuizValid[room] = true;
				ThreadManager.i[room] = new java.lang.Thread(new java.lang.Runnable() {
					run: function() {
						try {
							java.lang.Thread.sleep(30000);
							replier.reply(String.fromCharCode(0) + '타임어택 종료!');
							temp.hanQuizValid[room] = false;
						} catch (e) {}
					}
				});
				ThreadManager.i[room].start();
			}

		}

		if (msg == temp.hanR[room] && temp.hanQuizValid[room] == true) {
			ThreadManager.i[room].interrupt();
			temp.hanQuizValid[room] = false
			replier.reply("[" + sender + "]\n정답!")
			// DB.p[scode].pt += 100
		} else if (msg.indexOf(String.fromCharCode(8237)) != -1 && temp.hanQuizValid[room] == true) {
			replier.reply("응 복붙충 안속아")
		}
	}
	
	loop: {
		c = '!가위 / 바위 / 보';
		let cmd = ['!가위', '!바위', '!보'];
		a = 'member';
		d = '봇과 포인트를 걸고 가위바위보를 합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (cmd.indexOf(msg.split(' ')[0]) != -1) {
			Ky.g[group].rpsValidTime = Ky.g[group].rpsValidTime || [0, 7, 12, 22];
			if (Ky.g[group].rpsValidTime.indexOf(new Date().getHours()) == -1 || new Date().getMinutes() < 30) {
				replier.reply('가위바위보 가능 시간이 아닙니다.' + JSON.stringify(Ky.g[group].rpsValidTime) + '시 30분~ 에만 이용 가능합니다.');
				break loop;
			}
			var p = msg.substr(msg.split(' ', 1)[0].length+1);
			if (! /^[0-9]+$/.test(p) || p.indexOf('0') == 0 || p<50 || p>1000) {
				replier.reply('50~1000 사이의 자연수를 입력해 주세요.');
				break loop;
			}
			
			var r = Math.floor(Math.random()*3)
			let m = ['가위', '바위', '보', '가위', '바위'];
			if (r == 0) {
				replier.reply('[' + sender + '] ' + m[cmd.indexOf(msg.split(' ')[0])+2] + '! 》승리\n+' + p + 'cp');
				manageCp.add(params, p);
			}
			if (r == 1) {
				replier.reply('[' + sender + '] ' + m[cmd.indexOf(msg.split(' ')[0])+1] + '! 》패배\n-' + p + 'cp');
				manageCp.add(params, -p);
			}
			if (r == 2) {
				replier.reply('[' + sender + '] ' + m[cmd.indexOf(msg.split(' ')[0])] + '! 》무승부\n포인트가 반환됩니다.');
			}
		}
	}
}

function miscSys(params) {
	//잡다한 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '!견적생성';
		a = 'member';
		d = '부품 이름들을 대충 엔터로 구분해 입력하면 다나와 견적을 반환합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.split("\n")[0] == "!견적생성") {
			var est = new Object();
			est.code = new Array();
			est.quan = new Array();

			replier.reply("파싱 중...");
			for (var i = 0; i < (msg.match(/\n/g) || []).length; i++) {
				var input = msg.split("\n")[(i + 1)].replace(/ /gi, '+')
				if (input.indexOf("*") == 1) {
					if (Number.isInteger(Number(input.split("*")[0])) == true) {
						est.quan.push(input.split("*")[0])
						input.slice(0, 2)
					} else {
						replier.reply("[" + (i + 2) + "번째 줄] \n잘못된 입력입니다.")
						break loop;
					}
				} else {
					est.quan.push("1")
				}
				var p = Utils.getWebText("https://www.google.co.kr/search?&q=site:prod.danawa.com/info/?pcode=+" + input).split('http://prod.danawa.com/info/?pcode=')[1]
				if (typeof p == "undefined") {
					replier.reply("[" + (i + 2) + "번째 줄] \n잘못된 입력입니다.")
					break loop;
				}
				var p = p.split('"')[0].split("&")[0];
				if (Number.isInteger(Number(p)) == true) {
					est.code.push(p)
				} else {
					replier.reply("[" + (i + 2) + "번째 줄] \n잘못된 입력입니다.")
					break loop;
				}
			}
			replier.reply("http://micro.danawa.com/product/wishList?productSeq=" + est.code.join([separator = ',']) + "&count=" + est.quan.join([separator = ',']))
		}
	}

	loop: {
		c = '!롤전적';
		a = 'all';
		d = '해당 닉네임을 가진 리그오브레전드 유저의 OP.GG 전적을 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.substr(0, c.length + 1) == c + ' ') {
			replier.reply(lolStat(msg.substring(c.length + 1)));
		}
	}
	
	loop: {
		c = '!실검';
		a = 'all';
		d = '네이버 실시간검색어 1-20위를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			var r = org.jsoup.Jsoup.connect("https://www.naver.com/?mobile").get().select('span[class=ah_k]');
			var list = [];
			for (i = 1; i < 21; i++) { list.push(i + '. ' + r.get(i).text() + '\n') }
			replier.reply(list.join('').slice(0, -1))
		}
	}
	
	loop: {
		c = '!날씨';
		a = 'all';
		d = '주요 지역의 날씨를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=날씨"); //네이버 검색에서 파싱
			var data2 = data.split("전국날씨</strong>"); // 자르기
			var data3 = data2[1].split("특보");
			var data4 = data3[0].replace(/(<([^>]+)>)/g, "");
			data4 = data4.trim();
			data4 = data4.replace(/  /g, ""); //태그 제거
			data4 = data4.replace(/도씨/g, "℃"); //화씨
			data4 = data4.replace(/ /g, ", "); //태그제거
			replier.reply("[현재 날씨]\n" + data4); //보내기
		}
	}
	loop: {
		c = '!차트';
		a = 'all';
		d = '네이버뮤직 음원 차트를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			var charts = [];
			chart = Utils.getWebText("http://m.music.naver.com/listen/top100.nhn?domain=DOMESTIC")
			for (var i = 1; i < 51; i++) {
				var a = chart.split("<span class=\"rank\">")[i].split("</span>")[0];
				var b = chart.split("<strong class=\"tit\"> ")[i].split("</strong>")[0];
				var c = chart.split("<span class=\"stit\">")[i].split("</span>")[0];
				charts.push("순위 : " + a + "\n제목 : " + b + "\n아티스트(앨범) : " + c);
			}
			replier.reply("▼ 전체보기 클릭 ▼" + blank + charts.join("\n=============\n"))
		}
	}
	loop: {
		c = '!비트코인';
		a = 'all';
		d = '주요 암호화폐의 KorBit 기준 시세를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			btc = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw")).last)
			bch = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=bch_krw")).last)
			btg = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=btg_krw")).last)
			eth = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=eth_krw")).last)
			etc = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=etc_krw")).last)
			xrp = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=xrp_krw")).last)
			ltc = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=ltc_krw")).last)
			zil = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=zil_krw")).last)
			replier.reply("[암호화폐 시세]\n▣비트코인 :: " + bit + "원\n" + "▣비트코인 캐시 :: " + bch + "원\n" + "▣비트코인 골드 :: " + btg + "원\n" + "▣이더리움 :: " + eth + "원\n" + "▣이더리움 클래식 :: " + etc + "원\n" + "▣리플 :: " + xrp + "원\n" + "▣라이트코인 :: " + ltc + "원\n" + "▣질리카 :: " + zil + "원")
		}
	}
	loop: {
		c = '!네이버';
		a = 'all';
		d = '네이버에서 해당 내용을 검색합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.substr(0, c.length + 1) == c + ' ') {
			replier.reply('https://search.naver.com/search.naver?query=' + msg.substring(c.length + 1));
		}
	}
	loop: {
		c = '!단어';
		a = 'all';
		d = '네이버에서 해당 내용을 검색합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.substr(0, c.length + 1) == c + ' ') {
			try {
                    var u = Utils.getWebText("http://krdic.naver.com/search.nhn?query=" + msg.substr(c.length + 1));
                    var a = u.split("<ul class=\"lst3\">")
                    var b = a[1].split("</ul>")
                    var c = b[0].replace(/(<([^>]+)>)/g, "");
                    c = c.replace(/발음재생/g, "")
                    c = c.replace(/단어장 저장/g, "")
                    c = c.replace(/매우중요/g, "")
                    c = c.replace(/유의어/g, "\n\n유의어")
                    c = c.trim()
                    c = c.replace(/\n         /g, "")
                    c = c.replace(/  /g, "\n")
                    c = c.replace(/\n\n\n/g, "")
                    replier.reply("[" + msg.substr(3) + " 검색 결과]\n\n" + c)
                } catch (e) {
            replier.reply("단어 정보가 없습니다. 다시 입력해보세요.");
            }
		}
	}
	
	if (msg == '!명령어') {
		var r = String('》KyaongBot_' + ver + '\n■명령어 목록■' + blank);
		for (i=0; i<commandList.length; i++) {
			r += '》' + commandList[i] + '\n';
			r += descriptionList[i];
			r += '\n';
		}
		replier.reply(r)
	}
	
	
	

}

function dateSys(params) {
	//날짜 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;

}



function onStartCompile() {
	/*컴파일 또는 Api.reload호출시, 컴파일 되기 이전에 호출되는 함수입니다.
	 *제안하는 용도: 리로드시 자동 백업*/
	DataBase.setDataBase('KyBot', JSON.stringify(Ky));
	Api.gc();
}
