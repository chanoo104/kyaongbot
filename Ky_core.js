//KyBot 5.1 beta release build, rgb / firefox

const scriptName = 'Ky_core.js';
eval(DataBase.getDataBase('moment'));

var ver = '5.1.5.1_beta';
var updatecode = '';

let timeBoot = moment();
const blank = '‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭\n\n\n';

var room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode;


let firstLoad = true;
let command = '';
let description = '';
let commandList = new Array();
let descriptionList = new Array();
let userGroup = ['admin', 'manager', 'member'];

let temp = {};
let ThreadManager = new Object();
ThreadManager.i = new Object();
let threadInterrupt = false;
temp.hanQuizValid = new Object();
temp.hanR = new Object();
temp.hanN = new Object();
var skip;

const welcomeMessage = ('\n자바스크립트 기반 채팅 봇(bot)인 캬옹봇입니다.\n캬옹봇은 인증을 하지 않아도 사용이 가능하지만, 개인별 DB를 포함한 대부분의 기능의 사용이 제한되어 있습니다.\n현재 사용 가능한 명령어를 확인하시려면 !명령어 라고 입력하세요.\n모든 기능을 사용하고 싶으시다면 간단한 인증이 필요합니다.\n처음 오신 분이라면 공지를 눌러서 새 창에서 펼치면 나오는 설명읆 참조하여 인증하시고,\n기존 멤버인데 부계정으로 들어오신 것이거나 프로필을 수정하신 것이라면 원래 계정의 인증센터에 아무 말이나 친 후 !인증 <식별코드> 를 입력해 주세요.(<> 괄호는 제외).')


if (DataBase.getDataBase('KyBot') == null) DataBase.setDataBase('KyBot', JSON.stringify(new Object()));
const Ky = JSON.parse(DataBase.getDataBase('KyBot'));

Ky.g = Ky.g || new Object(); //Group 객체
Ky.g.tempAuth = Ky.g.tempAuth || new Object(); //임시 인증 데이터
Ky.g.tempHash = Ky.g.tempHash || new Object(); //임시 인증 데이터
Ky.c = Ky.c || new Object(); //Core 객체
Ky.t = Ky.t || new Object();

/*아이디어노트

group, room 별 명령어 지원 설정
manageCp
manageGp
한 명령어로 연동 이거 뭐라하더라 중재자패턴인가





*/




//한글 분리 함수
String.prototype.toKorChars = function() { 
    var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
    var str = this, cnt = str.length, chars = [], cCode; 
    for (var i = 0; i < cnt; i++) { 
       cCode = str.charCodeAt(i); 
       if (cCode == 32) { continue; } // 한글이 아닌 경우 
       if (cCode < 0xAC00 || cCode > 0xD7A3) {
            chars.push(str.charAt(i)); 
            continue; 
       } 
       cCode = str.charCodeAt(i) - 0xAC00; 
       jong = cCode % 28; // 종성 
       jung = ((cCode - jong) / 28 ) % 21; // 중성 
       cho = (((cCode - jong) / 28 ) - jung ) / 21; // 초성 
       chars.push(cCho[cho], cJung[jung]); 
       if (cJong[jong] !== '') { 
          chars.push(cJong[jong]); 
       } 
    }
    return chars; 
}
function reboot()
{
   var su = java.lang.Runtime.getRuntime().exec("su");
   var dos = new java.io.DataOutputStream(su.getOutputStream());
   var dis = new java.io.DataInputStream(su.getInputStream());
   dos.writeBytes("id\n");
   dos.flush();
   var uid = dis.readLine();
   if(!uid)
   {
      Log.e("루트 권한 얻기 실패");
      return;
   }
   if(uid.indexOf("uid=0") == -1)
   {
      Log.e("루트 권한 거부됨 " + uid);
      return;
   }
   dos.writeBytes("reboot\n");
   dos.flush();
}
const UPDATE = {};
UPDATE.saveData = function (msg) { //파일에 내용을 저장하는 함수
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

function shortURL(text) {
	short = org.jsoup.Jsoup.connect('http://is.gd/create.php?format=simple&url=' + encodeURIComponent(text))
		.get()
		.text()
	return short;
}
Number.prototype.format = function(){
    if(this==0) return 0;

    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');

    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

    return n;
};

// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function(){
    var num = parseFloat(this);
    if( isNaN(num) ) return "0";

    return num.format();
};

function replaceAll(str, searchStr, replaceStr) {
	return str.split(searchStr).join(replaceStr);
}

function getHtml(text) {
	var content = new java.io.ByteArrayOutputStream();
	android.net.http.AndroidHttpClient.newInstance('userAgent').execute(new org.apache.http.client.methods.HttpGet(text)).getEntity().writeTo(content);
	content.close();
	var str = String(content.toString());
	return str;
}

function checkDetailUrl(data) {
	var regex = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;
	return regex.test(data);
}
var manageDB = function () {
	return {
		loadAll: function () {

		}
	}
}

function replyAllRoom(params, m) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	for (i=0; i<Ky.g[group].roomList.length; i++) {
		Api.replyRoom(group + '_' + Ky.g[group].roomList[i], m);
	}
}

var manageCp = (function () {
	return {
		check: function (params, i) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
			icode = i || icode;
			return Ky.g[group].m[icode].cp;
		},
		add: function (params, point, i) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
			icode = i || icode;
			Ky.g[group].m[icode].cp += 0
			return Ky.g[group].m[icode].cp += Number(point);

		}
	};
})();


var manageMember = (function () {
	return {
		//icodeMigration: function(group, sender) {

		//}
		memberMigration: function (params) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;

		},
		hashMigration: function (params) {
			let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;

		}
	};
})();

var miniGame = (function () {
	return {

	};
})();


function getHash(params) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	return java.lang.String(imageDB.getProfileImage()).hashCode();
}

function makeAuthID() {
	var text = '';
	var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < 6; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

var Group = (function () { //Group 생성자 | ex) Ky.g[group] = new Group(group);
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

var Room = (function () { //Room 생성자
	function Room(params) {
		let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
		this.groupName = group;
		Ky.g[group].roomList.push(room);
	}
	Room.prototype.botOn = true;
	return Room;
})();

var Member = (function () { //Member 생성자
	function Member(params) {
		let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
		this.profileData = new Object();
		this.profileData[sender] = new Array();
		this.profileData[sender].push(hash);
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
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	var possible = '0123456789';
	while (true) {
		var text = '';
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
			if (input.split('-')[1].length == 8) to.add(1, 'hour');
		} else return '숫자만 입력해 주세요.';
		if (to.diff(from, 'hours') < 1) return '시작 시간, 종료 시간 순으로 입력해 주세요.';
		if (to.diff(from.add(1, 'y')) > 0) return '최대 구간 길이는 1년입니다.';
		from.add(-1, 'y');
	} else {
		if (moment(input, ['YYMMDDHH', 'YYMMDD', 'YYDD', 'YY'], true).isValid()) {
			var from = moment(input, ['YYMMDDHH', 'YYMMDD', 'YYDD', 'YY'], true);
		} else return '숫자만 입력해 주세요.';
		var to = moment().add(1, 'hour');
		if (to.diff(from, 'hours') < 1) return '시작 시간은 현재 시간 이전이여야 합니다.';
	}

	var result = 0;
	var timeList = Ky.g[group].m[icode].counter.timeList || new Array();
	var tt = from.format('YYMMDDHH');
	//replier.reply(t)
	/*
	var a1 = Number(t.slice(0, 2));
	var a2 = Number(t.slice(2, 4));
	var a3 = Number(t.slice(4, 6));
	var a4 = Number(t.slice(6, 8));
	*/
	//var a0 = Number(t.slice(0,6));
	for (i = 0; i < timeList.length; i++) {
		var t = timeList[i];
		//replier.reply(t)
		/*
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
		*/
		if (tt <= t) {
			var start = i;
			break;
		}
	}
	if (typeof start == 'undefined') start = -1;
	if (start == -1) return 0;
	var n = start += 0
	var tt = to.format('YYMMDDHH')
	//replier.reply('to: ' + tt)
	for (i = n; i < timeList.length; i++) {
		var t = timeList[i];
		//replier.reply('t')
		if (tt <= t) {
			var end = i - 1;
			break;
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
		var doc = org.jsoup.Jsoup.connect('http://www.op.gg/summoner/userName=' + nick).header('Accept-Language', 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7').get();
		try {
			var doc1 = org.jsoup.Jsoup.connect('http://www.op.gg/summoner/ajax/mmr/summonerName=' + nick).header('Accept-Language', 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7').get();
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
		arr.push('[' + doc.select('div.SummonerName').text() + ']\n');
		if (!unranked) arr.push(doc.select('div.LadderRank').text() + '\n');
		arr.push('| LV ' + doc.select('span[class=Level tip]').text() + ' | ');
		if (!unranked) {
			arr.push(doc.select('div.Tier').get(0).text() + ' | ' + doc.select('div.LP').get(0).text() + ' |')
		} else arr.push('Unranked |')
		if (doc.select('div div span.Item').text() != '') arr.push('\n[ ' + doc.select('div div span.Item').text() + ' ]');
		arr.push('\n\n》최근 20게임 전적\n ' + doc.select('div.WinRatioTitle span.win').text() + '승 ' + doc.select('div.WinRatioTitle span.lose').text() + '패, ' + doc.select('div.WinRatioTitle b').text());
		if (!unranked) arr.push('\n》솔랭 전적\n ' + doc.select('div.WinLose').get(0).text());
		if (list.length > 1) arr.push('\n》MOST 챔피언\n' + list);
		if (mmr) arr.push('\n예상 MMR : ' + doc1.select('td.MMR').text() + '\n예상 티어 : ' + doc1.select('td.TierRankString').text());
		if (mmr)
			if (doc1.select('div.TipStatus').text() != '') arr.push('\n' + doc1.select('div.TipStatus').text());
		return arr.join('')
	} catch (e) { //결과값을 찾을수 없으면
		return ('전적 정보가 없습니다.');
	}
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId) {

	msg = msg.trim();
	room = room.trim();
	sender = sender.trim();

	let params = { //함수용 통합 매개변수
		get room() { return room },
		get msg() { return msg },
		get sender() { return sender },
		get isGroupChat() { return isGroupChat },
		get replier() { return replier },
		get imageDB() { return imageDB },
		get packageName() { return packageName },
		get threadId() { return threadId }
	}


	commandList = new Array();
	descriptionList = new Array();

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Authentification // 신규 데이터 생성, 인증 발급
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
	//개인톡 인증
	if (isGroupChat == false) {
		replier.reply('캬옹봇 인식 닉네임: [' + sender + ']\n현재 사용중인 닉네임과 인식되는 닉네임이 다르다면 나갔다 들어와 보시고, 그래도 똑같다면 관리자에게 연락하세요.')
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
			replier.reply('보안코드:');
			replier.reply(authID);
			replier.reply('닉네임:');
			replier.reply(sender);
			replier.reply('보안코드를 복사해서 공지에 있는 2차 인증센터에 들어갈때 <<카카오프렌즈>> 선택 후 <<닉네임에 붙여넣으세요>>. 방에 입장한 후에는 닉네임을 복사해서 그대로 붙여넣어 채팅을 보내면 인증이 완료됩니다.\n헷갈리지 마세요. <<닉네임을 보안코드로>> 하셔야 합니다. <<닉네임을 보안코드>>. 다시 한번 말하지만 난독하지 마세요. 카카오프렌즈 닉네임을 보안코드로, 들어가서 채팅으로 원래 사용중인 닉네임을 입력하세요. 실수하면 아주 귀찮아집니다.');
			replier.reply('ex) 홍길동, a1b2c3 이면 인증방 들어갈때 닉네임을 카카오프렌즈 선택하고 닉네임을 a1b2c3으로 하고, 들어가서 채팅창에 홍길동 엔터');
		} else if (msg in Ky.g[group].tempM) {
			if (sender == Ky.g[group].tempM[msg].authID) {
				Object.defineProperty(params, 'group', {
					get: function () {
						return group;
					}
				});
				Object.defineProperty(params, 'hash', {
					get: function () {
						return hash;
					}
				});
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
				replier.reply('■■주의: 이 방에서 나가지 마세요. 추후 인증에 필요합니다. 임시인증은 나가셔도 됩니다.■■')
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




	Object.defineProperty(params, 'group', { get: function () { return group } });
	Object.defineProperty(params, 'hash', { get: function () { return hash } });

	Ky.g[group] = Ky.g[group] || new Group(params);
	Ky.g[group].r[room] = Ky.g[group].r[room] || new Room(params);
	if (Ky.g[group].roomList.indexOf(room) == -1) Ky.g[group].roomList.push(room);

	for (i = 0; i < Ky.g[group].roomList[i]; i++) {
		if (Ky.g[group].r[Ky.g[group].roomList[i]].botOn == false) return;
	}

	var unAuthed = false;

	var exist = false;
	Object.keys(Ky.g[group].m).map(function (objectKey, index) {
		try {
			if (Ky.g[group].m[objectKey].profileData[sender] !== undefined) {
				if (Ky.g[group].m[objectKey].profileData[sender].indexOf(hash) != -1) exist = objectKey
			}
		} catch (e) {};
	});
	if (exist == false) {
		Ky.g[group].tempM[sender] = Ky.g[group].tempM[sender] || new Object();
		Ky.g[group].tempM[sender].alert = Ky.g[group].tempM[sender].alert || 't';
		if ('mayBe' in Ky.g[group].tempM[sender]) {
			if (msg == Ky.g[group].tempM[sender].authCode) {
				delete Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].memberData;
				Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].profileData = Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].profileData || new Object();
				Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].profileData[sender] = Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].profileData[sender] || new Array();
				Ky.g[group].m[Ky.g[group].tempM[sender].mayBe].profileData[sender].push(hash);
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
			Api.replyRoom(group + '_관리방', '[' + sender + ']\n인증코드: ' + aCode + '\n보안코드: ' + Ky.g[group].m[msg.substr(4)].authID);

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

	Object.defineProperty(params, 'icode', {
		get: function () {
			return icode;
		}
	});

	if (icode != 'unauth' && Ky.g[group].m[icode].counter.total == 0) replier.reply('[' + sender + ']님,' + group + ' 캬옹봇 인증이 완료되었습니다. <!명령어>로 명령어를 확인하세요. <!식별코드> 로 식별코드를 확인하세요.')
	Ky.g[group].counter = Ky.g[group].counter || {};
	Ky.g[group].counter.total = Ky.g[group].counter.total || 0;



	Ky.g[group].r[room].enabled = Ky.g[group].r[room].enabled || new Object();

	//대화형 입력 방식을 위한 프리셋
	/*
	
	*/
	//명령어 세트(set) 실행기

	preSys(params);
	Ky.g[group].miniGame = Ky.g[group].miniGame || {};
	if (icode != 'unauth') Ky.g[group].m[icode].miniGame = Ky.g[group].m[icode].miniGame || {};

	Ky.g[group].r[room].enabled.generalSys = Ky.g[group].r[room].enabled.generalSys || 'true';
	if (Ky.g[group].r[room].enabled.generalSys == 'true') {
		generalSys(params);
	}

	Ky.g[group].r[room].enabled.manageSys = Ky.g[group].r[room].enabled.manageSys || 'true';
	if (Ky.g[group].r[room].enabled.manageSys == 'true') {
		manageSys(params);
	}

	Ky.g[group].r[room].enabled.pDBSys = Ky.g[group].r[room].enabled.pDBSys || 'true';
	if (Ky.g[group].r[room].enabled.pDBSys == 'true') {
		pDBSys(params);
	}

	Ky.g[group].r[room].enabled.cpSys = Ky.g[group].r[room].enabled.cpSys || 'true';
	if (Ky.g[group].r[room].enabled.cpSys == 'true') {
		cpSys(params);
	}

	Ky.g[group].r[room].enabled.miniGameSys = Ky.g[group].r[room].enabled.miniGameSys || 'true';
	if (Ky.g[group].r[room].enabled.miniGameSys == 'true') {
		miniGameSys(params);
	}

	Ky.g[group].r[room].enabled.miscSys = Ky.g[group].r[room].enabled.miscSys || 'true';
	if (Ky.g[group].r[room].enabled.miscSys == 'true') {
		miscSys(params);
	}

	Ky.g[group].r[room].enabled.memberCounter = Ky.g[group].r[room].enabled.memberCounter || 'true';
	if (icode != 'unauth') {
		if (Ky.g[group].r[room].enabled.memberCounter == 'true') {
			memberCounter(params);
		}
	}

	Ky.g[group].r[room].enabled.backGroundSys = Ky.g[group].r[room].enabled.backGroundSys || 'true';
	if (Ky.g[group].r[room].enabled.backGroundSys == 'true') {
		backGroundSys(params);
	}

	var t = moment().format('YYMMDDHH');
	Ky.g[group].counter.timeList = Ky.g[group].counter.timeList || new Array();
	Ky.g[group].counter.list = Ky.g[group].counter.list || new Array();
	var timeList = Ky.g[group].counter.timeList;
	if (timeList.indexOf(t) == -1) timeList.push(t);
	Ky.g[group].counter.list[timeList.indexOf(t)] = Ky.g[group].counter.list[timeList.indexOf(t)] || 0;
	Ky.g[group].counter.list[timeList.indexOf(t)]++;

	firstLoad = false;



}




function commandChk(params, c, a, d) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	if (icode == 'unauth' && a != 'all') {
		//replier.reply('이 기능을 사용하려면 인증이 필요합니다. 인증 방법은 공지사항을 참조하세요.');
		return false;
	}
	if (icode != 'unauth') {
		if (a != 'all') {
			if (userGroup.indexOf(a) < userGroup.indexOf(Ky.g[group].m[icode].type)) return false;
		}
		Ky.g[group].r[room].enabled[c] = Ky.g[group].r[room].enabled[c] || 'true';
		if (Ky.g[group].r[room].enabled[c] == 'false') {
			//replier.reply('이 방에서 사용이 제한된 기능입니다.');
			return false;
		}
	}
	if (msg == '!명령어' && d.length > 0) {
		commandList.push(c);
		descriptionList.push(d);
	}
	if (icode != 'unauth' && skip != true) {
		if (Ky.g[group].m[icode].status != c && Ky.g[group].m[icode].status != 'default') {
			return false;
		}
	}
	Ky.g[group].counter[c] = Ky.g[group].counter[c] || 0;
	if (msg.indexOf(c) == 0) {
		Ky.g[group].counter[c]++;
	}
	return true;
}
let c, a, d;

function preSys(params) {
	//일반 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '대화형 명령어 프리셋';
		a = 'member';
		d = '';
		skip = true;
		if (commandChk(params, c, a, d) == false) break loop;
		Ky.g[group].m[icode].status = Ky.g[group].m[icode].status || 'default';
		if (msg == '!취소') Ky.g[group].m[icode].status = 'defalut';
		skip = false;
	}
	loop: {
		c = 'lastActive 프리셋';
		a = 'member';
		d = '';
		if (commandChk(params, c, a, d) == false) break loop;
		if (Ky.g[group].m[icode].lastActive === undefined) {
			Ky.g[group].m[icode].lastActive = [];
		}
		var p = Ky.g[group].m[icode].lastActive.indexOf(sender);
		if (p == -1 && p != 0) Ky.g[group].m[icode].lastActive.unshift(sender);
		if (p != -1 && p != 0) {
			Ky.g[group].m[icode].lastActive.splice(p, 1);
			Ky.g[group].m[icode].lastActive.unshift(sender);
		}
		if (msg == '!취소') Ky.g[group].m[icode].status = 'defalut';
	}
}







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

	loop: {
		c = '!최근로그';
		a = 'all';
		d = '채팅삭제 박제용 명령어';
		if (msg.split(' ')[0] == c) {
			var n = msg.substr(msg.split(' ', 1)[0].length + 1);
			if (!/^[0-9]+$/.test(n) || n.indexOf('0') == 0 || n > 50) {
				replier.reply('50 이하의 자연수를 입력해 주세요.');
				break loop;
			}
			n --;
			if (n>Ky.g[group].r[room].recentLog.icode.length-1) n = Ky.g[group].r[room].recentLog.icode.length-1;
			var char = ('▼전체보기 클릭▼' + blank);
			for (i=n; i>=0; i--) {
				char += '\n》';
				if (Ky.g[group].r[room].recentLog.icode[i] != 'unauth') {
					char += Ky.g[group].m[Ky.g[group].r[room].recentLog.icode[i]].lastActive[0];
				} else char += Ky.g[group].r[room].recentLog.sender[i];
				char += '\n';
				char += Ky.g[group].r[room].recentLog.msg[i];
				char += '\n';
			}
			replier.reply(char);
		}
	}
	loop: {
		c = '!최근코드';
		a = 'all';
		d = '최근 대화 인원의 코드 출력 명령어';
		if (msg == c) {
			var char = [];
			for (i=14; i>=0; i--) {
				if (char.indexOf(Ky.g[group].r[room].recentLog.icode[i]) == -1) {
					char.push(Ky.g[group].r[room].recentLog.icode[i]);
					char.push(' - ')
					if (Ky.g[group].r[room].recentLog.icode[i] != 'unauth') {
						char.push(Ky.g[group].m[Ky.g[group].r[room].recentLog.icode[i]].lastActive[0]);
					} else char += Ky.g[group].r[room].recentLog.sender[i];
					char.push('\n')
				}
			}
			replier.reply(char.join('').slice(0, -1));
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
		replier.reply('[업데이트 코멘트]\n' + getHtml('https://github.com/chanoo104/kyaongbot/commit/master').split('<p class='commit-title'>')[1].split('</p>')[0].trim());
		Api.reload();
		if (error == false) {
			replier.reply('업데이트 성공!')
		} else if (error == true) {
			replier.reply('업데이트 실패..')
		}
	}
*/


	loop: {
		c = '!eval';
		a = 'manager';
		d = 'eval입니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.split(' ')[0] == c) {
			try {
				replier.reply(eval(msg.substr(msg.split(' ', 1)[0].length + 1)));
			} catch (e) {
				replier.reply('eval 실행 중 오류 발생!\n오류 메시지 : ' + e.message)
			}
		}
	}

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
		c = '!리부팅';
		a = 'admin';
		d = '캬옹봇을 리부팅합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('리부팅을 시작합니다.\n예상 소요시간 최대 2분');
			Api.reload('Ky_core.js')
			reboot()
		}
	}
	

	loop: {
		c = '!세이브';
		a = 'admin';
		d = '캬옹봇을 온라인에서 업데이트합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('진행중...');
			DataBase.setDataBase('KyBot_backup0', JSON.stringify(Ky));
		}
	}
	loop: {
		c = '!로드';
		a = 'admin';
		d = '캬옹봇을 온라인에서 업데이트합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('백업 진행중...');
			Ky = JSON.parse(DataBase.getDataBase('KyBot_backup0'));
		}
	}
}

function pDBSys(params) {
	//미니게임 제외 개인 데이터 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '!카운터';
		a = 'member';
		d = '자신의 특정 기간 동안의 채팅 카운터를 확인합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.split(' ')[0] == c) {
			replier.reply('[' + sender + ']\n' + memberCount(params, msg.substr(msg.split(' ', 1)[0].length + 1)));
		}
	}
	loop: {
		c = '!식별코드';
		a = 'all';
		d = '자신의 식별코드를 확인합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('[' + sender + ']\n' + icode);
		}
	}
	loop: {
		c = '!순위';
		a = 'member';
		d = '특정 기간 동안의 채팅 카운터 순위를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.split(' ')[0] == c) {
			sloop: {
				var arr = [];
				var length = Object.keys(Ky.g[group].m).length;
				//replier.reply(length)
				for (n = 0; n < length; n++) {

					if (n == 3 && length > 9) var t = new Date().getTime();
					if (n == 6 && length > 9) replier.reply(length + '명의 로그 분석중... 예상 소요 시간: ' + Math.round((new Date().getTime() - t) / 3000 * (length - 6)) + '초');
					if (Ky.g[group].m[Object.keys(Ky.g[group].m)[n]].lastActive !== undefined) {
						var ttt = Ky.g[group].m[Object.keys(Ky.g[group].m)[n]].lastActive[0]
					} else var ttt = '닉네임 데이터 미생성'
					var counted = [ttt, memberCount(params, msg.substr(msg.split(' ', 1)[0].length + 1), Object.keys(Ky.g[group].m)[n])];
					arr.push(counted);
					if (isNaN(counted[1])) {
						var a = counted[1];
						break sloop;
					}
				}
				//replier.reply(arr.length)
				//replier.reply(JSON.stringify(arr));
				function soort(a, b) {
					return b[1] - a[1];
				}
				arr.sort(soort);
				var a = '[채팅량 순위]\n' + msg.split(' ')[1] + blank;
				for (i = 0; i < arr.length; i++) {
					a += (i + 1) + '. ' + arr[i][0] + '\n 》' + arr[i][1] + '\n\n';
				}
			}
			replier.reply(a);
		}
	}

	/*
	loop: {
		c = '!프로필생성';
		a = 'member';
		d = '프로필을 생성합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		Ky.g[group].m[icode].customProfile = Ky.g[group].m[icode].customProfile || [];
		Ky.g[group].m[icode].status = c;
		Ky.g[group].m[icode].phase = 0;
		if (msg = '!스킵' && Ky.g[group].m[icode].status == c) {
			Ky.g[group].m[icode].customProfile.push('');
			Ky.g[group].m[icode].phase++;
		}
		if (msg == c) {
			replier.reply('[' + sender + '] 님의 프로필을 생성합니다.\n!취소 로 취소, !스킵 으로 스킵\n간단한 자기소개(별명, 한줄요약 등)를 입력해 주세요.');
			Ky.g[group].m[icode].customProfile = new Array();
		} else if (Ky.g[group].m[icode].phase = 1) {
			Ky.g[group].m[icode].customProfile.push(msg);
			Ky.g[group].m[icode].phase++;
			replier.reply('취미/흥미/관심사 등을 적어주세요.');
		} else if (Ky.g[group].m[icode].phase = 2) {
			Ky.g[group].m[icode].customProfile.push(msg);
			Ky.g[group].m[icode].phase++;
			replier.reply('개인정보를 입력해 주세요.');
		} else if (Ky.g[group].m[icode].phase = 3) {
			Ky.g[group].m[icode].customProfile.push(msg);
			Ky.g[group].m[icode].phase++;
			replier.reply('자신의 컴퓨터 사양을 적어주세요.');
		} else if (Ky.g[group].m[icode].phase = 4) {
			Ky.g[group].m[icode].customProfile.push(msg);
			Ky.g[group].m[icode].phase++;
			replier.reply('기타 하고싶은 말을 입력해 주세요.');
		} else if (Ky.g[group].m[icode].phase = 5) {
			Ky.g[group].m[icode].customProfile.push(msg);
			Ky.g[group].m[icode].phase++;
			replier.reply('생성 완료.');
		}
	}
	*/


	//이런식으로



}

function cpSys(params) {
	//미니게임 제외 포인트 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	loop: {
		c = '.채팅보상';
		a = 'member';
		d = '';
		if (commandChk(params, c, a, d) == false) break loop;
		Ky.g[group].m[icode].cp++;
	}

	loop: {
		c = '!포인트';
		a = 'member';
		d = '자신의 포인트를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('[' + sender + ']\n' + manageCp.check(params) + 'cp');
			Ky.g[group].m[icode].attacked = Ky.g[group].m[icode].attacked || 0;
			if (Ky.g[group].m[icode].attacked > 0) {
				replier.reply('[누적 벌점]\n→ -' + Ky.g[group].m[icode].attacked + 'cp');
				Ky.g[group].m[icode].attacked = 0;
			}
		}
	}
	loop: {
		c = '!이전포인트';
		a = 'member';
		d = '이전 DB의 포인트를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		try {
			if (msg == c) {
				var DB = JSON.parse(DataBase.getDataBase('DB'))
				var scode = DB.icode[DB.inick.indexOf(sender)];
				replier.reply('[' + sender + ']\n' + DB.p[scode].pt.format() + 'cp\n' + Ky.g[group].m[icode].cp.format() + 'cp(현재 포인트) + ' + DB.p[scode].pt.format() + 'cp = ' + (Number(DB.p[scode].pt) + Number(Ky.g[group].m[icode].cp)).format() + 'cp')
			}
		} catch (e) {
			replier.reply('해당 이름은 존재하지 않습니다.\n[' + sender + ']')
		}
	}

	loop: {
		c = '!상점';
		a = 'member';
		d = '특정인에게 cp를 전송합니다. VAT: 20%';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.split(' ')[0] == c) {
			if (msg.split(' ').length != 3) {
				replier.reply('잘못된 입력 형식입니다.')
				break loop;
			}
			if (Ky.g[group].m[msg.split(' ')[1]] === undefined) {
				replier.reply('존재하지 않는 식별코드입니다.')
				break loop;
			}
			var p = msg.split(' ')[2];
			if (!/^[0-9]+$/.test(p) || p.indexOf('0') == 0 || p < 50) {
				replier.reply('50 이상의 자연수를 입력해 주세요.');
				break loop;
			}
			var i = Math.round(p * 1.2);
			if (manageCp.check(params, icode) - i < 0) {
				var x = i - manageCp.check(params, icode);
				replier.reply('포인트가 ' + x + 'cp 부족합니다. VAT 20%를 유의해 주세요.');
				break loop;
			}
			manageCp.add(params, -i);
			manageCp.add(params, p, msg.split(' ')[1]);
			replier.reply('[상점]\n' + sender + ' → ' + Ky.g[group].m[msg.split(' ')[1]].lastActive[0] + '\n+' + p + 'cp (-' + i + 'cp) (20% VAT)');
		}
	}
	loop: {
		c = '!벌점';
		a = 'member';
		d = '특정인의 cp를 차감합니다. 실행 성공 시 별도의 메세지가 출력되지 않습니다. VAT: 50%';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.split(' ')[0] == c) {
			Ky.g[group].m[icode].pns = Ky.g[group].m[icode].pns || 0;
			var t = new Date().getTime() - Ky.g[group].m[icode].pns
			if (t < 180000) {
				var v = 180 - Math.round(t / 1000)
				replier.reply('쿨타임 : ' + v + 'sec')
				break loop;
			}
			if (msg.split(' ').length != 3) {
				replier.reply('잘못된 입력 형식입니다.')
				break loop;
			}
			if (Ky.g[group].m[msg.split(' ')[1]] === undefined) {
				replier.reply('존재하지 않는 식별코드입니다.')
				break loop;
			}
			var p = msg.split(' ')[2];
			if (!/^[0-9]+$/.test(p) || p.indexOf('0') == 0 || p < 50) {
				replier.reply('50 이상의 자연수를 입력해 주세요.');
				break loop;
			}
			var i = Math.round(p * 1.5);
			if (manageCp.check(params, icode) - i < 0) {
				var x = i - manageCp.check(params, icode);
				replier.reply('포인트가 ' + x + 'cp 부족합니다. VAT 50%를 유의해 주세요.');
				break loop;
			}
			manageCp.add(params, -i);
			manageCp.add(params, -p, msg.split(' ')[1]);
			Ky.g[group].m[icode].pns = new Date().getTime();
			Ky.g[group].m[msg.split(' ')[1]].attacked = Ky.g[group].m[msg.split(' ')[1]].attacked || 0;
			Ky.g[group].m[msg.split(' ')[1]].attacked += Number(p);
		}
	}

}



function miniGameSys(params) {
	//미니게임 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;

	loop: {
		c = '.랜덤문자';
		a = 'member';
		d = '랜덤 출력되며, 일정 확률로 포인트를 보상으로 하는 글자 입력 퀴즈를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		//이거 나중에 변수 통합시키는게 좋을듯
		//출력 랜덤이랑 일반 구분, 포인트 랜덤으로 퀴즈맞춘후에 돌려서 주기
		temp.hanQuizValid[room] = temp.hanQuizValid[room] || false

		Ky.g[group].miniGame.randomWord = Ky.g[group].miniGame.randomWord || {};
		Ky.g[group].miniGame.randomWord.preActive = Ky.g[group].miniGame.randomWord.preActive || 0;
		Ky.g[group].miniGame.randomWord.preActive++;
		if (Math.floor(Math.random() * 1000) == 123) {
			var ram = Math.floor(Math.random() * 55);
			if (temp.hanQuizValid[room] == false) {
				var hanram = [];
				for (var i = 0; i < 5; i++) {
					hanram.push(String.fromCharCode(44031 + Math.ceil(11172 * Math.random())));
					var invChar = ''
					for (var k = 0; k < Math.round(Math.random() * 90 + 10); k++) invChar += String.fromCharCode(8237)
					hanram.push(invChar)
				}
				temp.hanR[room] = hanram.join('').replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, '')

				temp.hanN[room] = hanram.join('')


				Ky.t.rwReward = 500 + Math.round(Ky.g[group].miniGame.randomWord.preActive / 2);
				Ky.g[group].miniGame.randomWord.preActive = 0;


				replier.reply(String.fromCharCode(0) + '[보상: ' + Ky.t.rwReward + 'cp]\n가장 먼저 주어진 글자를 입력!\n' + temp.hanN[room])
				temp.hanQuizValid[room] = true;
				ThreadManager.i[room] = new java.lang.Thread(new java.lang.Runnable() {
					run: function () {
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
			replier.reply('[' + sender + ']\n정답!\n+' + Ky.t.rwReward + 'cp')
			manageCp.add(params, Ky.t.rwReward);
		} else if (msg.indexOf(String.fromCharCode(8237)) != -1 && temp.hanQuizValid[room] == true) {
			replier.reply('응 복붙충 안속아')
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
			var p = msg.substr(msg.split(' ', 1)[0].length + 1);
			if (!/^[0-9]+$/.test(p) || p.indexOf('0') == 0 || p < 50 || p > 1000) {
				replier.reply('50~1000 사이의 자연수를 입력해 주세요.');
				break loop;
			}
			if (manageCp.check(params) < p) {
				replier.reply('잔액이 부족합니다.')
				break loop;
			}

			var r = Math.floor(Math.random() * 3)
			let m = ['가위', '바위', '보', '가위', '바위'];
			if (r == 0) {
				replier.reply('[' + sender + '] ' + m[cmd.indexOf(msg.split(' ')[0]) + 2] + '! 》승리\n+' + p + 'cp');
				manageCp.add(params, p);
			}
			if (r == 1) {
				replier.reply('[' + sender + '] ' + m[cmd.indexOf(msg.split(' ')[0]) + 1] + '! 》패배\n-' + p + 'cp');
				manageCp.add(params, -p);
			}
			if (r == 2) {
				replier.reply('[' + sender + '] ' + m[cmd.indexOf(msg.split(' ')[0])] + '! 》무승부\n포인트가 반환됩니다.');
			}
		}
	}


	loop: {
		c = '!복권';
		a = 'member';
		d = '매일 정각 추첨되는 복권에 응모합니다. 숫자범위: 1~100, 가격: 150cp';
		var price = '150'
		if (commandChk(params, c, a, d) == false) break loop;
		Ky.g[group].miniGame.lottery = Ky.g[group].miniGame.lottery || {};
		Ky.g[group].miniGame.lottery.queue = Ky.g[group].miniGame.lottery.queue || [];
		Ky.g[group].miniGame.lottery.cQueue = Ky.g[group].miniGame.lottery.cQueue || [];
		Ky.g[group].miniGame.lottery.reward = Ky.g[group].miniGame.lottery.reward || 0;
		Ky.g[group].m[icode].miniGame.lottery = Ky.g[group].m[icode].miniGame.lottery || {};
		if (msg.split(' ')[0] == c) {
			var p = msg.substr(msg.split(' ', 1)[0].length + 1);
			if (Ky.g[group].m[icode].miniGame.lottery.today === undefined) Ky.g[group].m[icode].miniGame.lottery.today = false;
			
			var p = msg.substr(msg.split(' ', 1)[0].length + 1);
			if (! /^[0-9]+$/.test(p) || p.indexOf('0') == 0 || p < 1 || p > 100) {
				replier.reply('1~100 사이의 자연수를 입력해 주세요.');
				break loop;
			}
			if (Ky.g[group].m[icode].miniGame.lottery.today != false) {
				replier.reply('이미 응모하셨습니다.')
				break loop;
			}
			if (manageCp.check(params) < price) {
				replier.reply('잔액이 부족합니다.')
				break loop;
			}
			manageCp.add(params, -price);
			Ky.g[group].miniGame.lottery.queue.push(icode);
			Ky.g[group].miniGame.lottery.cQueue.push(p);
			Ky.g[group].miniGame.lottery.reward += Math.round(100);
			Ky.g[group].m[icode].miniGame.lottery.today = true;
			replier.reply('[' + sender + ']\n응모 완료.\n현재 누적 당첨금: ' + Ky.g[group].miniGame.lottery.reward + 'cp');
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
		if (msg.split('\n')[0] == '!견적생성') {
			var est = new Object();
			est.code = new Array();
			est.quan = new Array();

			replier.reply('파싱 중...');
			for (var i = 0; i < (msg.match(/\n/g) || []).length; i++) {
				var input = msg.split('\n')[(i + 1)].replace(/ /gi, '+')
				if (input.indexOf('*') == 1) {
					if (Number.isInteger(Number(input.split('*')[0])) == true) {
						est.quan.push(input.split('*')[0])
						input.slice(0, 2)
					} else {
						replier.reply('[' + (i + 2) + '번째 줄] \n잘못된 입력입니다.')
						break loop;
					}
				} else {
					est.quan.push('1')
				}
				var p = Utils.getWebText('https://www.google.co.kr/search?&q=site:prod.danawa.com/info/?pcode=+' + input).split('http://prod.danawa.com/info/?pcode=')[1]
				if (typeof p == 'undefined') {
					replier.reply('[' + (i + 2) + '번째 줄] \n잘못된 입력입니다.')
					break loop;
				}
				var p = p.split('"')[0].split('&')[0];
				if (Number.isInteger(Number(p)) == true) {
					est.code.push(p)
				} else {
					replier.reply('[' + (i + 2) + '번째 줄] \n잘못된 입력입니다.')
					break loop;
				}
			}
			replier.reply(shortURL('http://micro.danawa.com/product/wishList?productSeq=' + est.code.join([separator = ',']) + '&count=' + est.quan.join([separator = ','])))
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
		c = '!블러드';
		a = 'all';
		d = '현재 블러드의 상태를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			doc = org.jsoup.Jsoup.connect('https://wallet.blood.land/api/mining/miner/pool').ignoreContentType(true).get()
			doc1 = JSON.parse(android.text.Html.fromHtml(doc)).data
			replier.reply("블러드 코인\n총 채굴자 수(접속 기기 수) : " + doc1.workerCount + " (" + doc1.connectionCount +")\n채굴 난이도 : " + doc1.difficulty.toFixed(5).format() + "\n총 해쉬레이트 : " + doc1.totalHashrate.toFixed(5).format() + " KH\n총 보상 : " + (Number(doc1.totalReward) + Number(doc1.totalDistributed)).toFixed(5).format() + " BLOOD");
		}
	}
	loop: {
		c = '!배그서버';
		a = 'all';
		d = '현재 배그 서버 상태를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			replier.reply('현재 배그 서버의 동접자는 ' + Utils.getWebText('https://dak.gg/?hl=ko-KR').split('현재 배틀그라운드 동접자: ')[1].split('<a href="/statistics/playing">')[0].trim() + '이며, 서버는 ' + Utils.getWebText('https://dak.gg/?hl=ko-KR').trim().split('서버:</strong> <span>')[1].split('</span>')[0] + '입니다.')
		}
	}
	loop: {
		c = '!나무위키';
		a = 'all';
		d = '나무위키의 문서를 검색합니다.';
		try {
			if (commandChk(params, c, a, d) == false) break loop;
			if (msg.substr(0, c.length + 1) == c + ' ') {
				doc = org.jsoup.Jsoup.connect('https://namu.wiki/w/' + msg.substr(msg.split(' ', 1)[0].length + 1))
					.get()
				replier.reply('▼전체보기 클릭▼' + blank + '》목차\n' + android.text.Html.fromHtml(replaceAll(doc.select('.wiki-macro-toc').select('.toc-item').toString(), '</span>', '<br>')) + '\n》내용\n' + android.text.Html.fromHtml(doc.select('.wiki-inner-content').select('.wiki-heading-content')))
			}
		} catch (e) {
			replier.reply('검색결과가 없습니다. 정확한 문서의 이름을 적어주십시오.');
		}
	}
	loop: {
		c = '!단축';
		a = 'member';
		d = '주소를 단축합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.substr(0, c.length + 1) == c + ' ') {
			if (checkDetailUrl(msg.substring(c.length + 1))) {
				replier.reply(shortURL(msg.substring(c.length + 1)))
			} else replier.reply('정확한 주소를 적어주세요.')

		}
	}
	loop: {
		c = '!실검';
		a = 'all';
		d = '네이버 실시간검색어 1-20위를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			var r = org.jsoup.Jsoup.connect('https://www.naver.com/?mobile').get().select('span[class=ah_k]');
			var list = '';
			for (i = 1; i < 21; i++) {
				list += (i + '. ' + r.get(i).text() + '\n')
			}
			replier.reply(list.slice(0, -1))
		}
	}
	/* 오류 뿜어서 일단 주석
		loop: {
			c = '!사양';
			a = 'all';
			d = '게임 최소/권장사양을 검색합니다.';
			if (commandChk(params, c, a, d) == false) break loop;
			if (msg.split(' ')[0] == c) {
				var char = 'can+i+run+it+' + msg.substr(msg.split(' ', 1)[0].length + 1).replace(/ /gi, '+');
				var test = Utils.getWebText('https://www.google.co.kr/search?&q=site:https://www.systemrequirementslab.com/cyri/requirements' + char);
				var ww = test.split('/cyri/requirements');
				replier.reply(ww[1])
				if (ww[1]) {
					var t = org.jsoup.Jsoup.connect('https://www.systemrequirementslab.com/cyri/requirements/spec/' + ww[1].split('/')[2].split(''')[0]).get().select('div[class=list-line-height]').select('ul');
					replier.reply('■사양■' + blank + '• 최소사양\n' + android.text.Html.fromHtml(t.eq(1)) + '\n\n• 권장사양\n' + android.text.Html.fromHtml(t.eq(1)));
				} else replier.reply('결과 없음');
			}
		}
		*/

	loop: {
		c = '!날씨';
		a = 'all';
		d = '주요 지역의 날씨를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			var data = Utils.getWebText('https://m.search.naver.com/search.naver?query=날씨'); //네이버 검색에서 파싱
			var data2 = data.split('전국날씨</strong>'); // 자르기
			var data3 = data2[1].split('특보');
			var data4 = data3[0].replace(/(<([^>]+)>)/g, '');
			data4 = data4.trim();
			data4 = data4.replace(/  /g, ''); //태그 제거
			data4 = data4.replace(/도씨/g, '℃'); //화씨
			data4 = data4.replace(/ /g, ', '); //태그제거
			replier.reply('[현재 날씨]\n' + data4); //보내기
		}
	}
	loop: {
		c = '!차트';
		a = 'all';
		d = '네이버뮤직 음원 차트를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			var charts = [];
			chart = Utils.getWebText('http://m.music.naver.com/listen/top100.nhn?domain=DOMESTIC')
			for (var i = 1; i < 51; i++) {
				var a = chart.split('<span class=\'rank\'>')[i].split('</span>')[0];
				var b = chart.split('<strong class=\'tit\'> ')[i].split('</strong>')[0];
				var c = chart.split('<span class=\'stit\'>')[i].split('</span>')[0];
				charts.push('순위 : ' + a + '\n제목 : ' + b + '\n아티스트(앨범) : ' + c);
			}
			replier.reply('▼ 전체보기 클릭 ▼' + blank + charts.join('\n=============\n'))
		}
	}
	loop: {
		c = '!비트코인';
		a = 'all';
		d = '주요 암호화폐의 KorBit 기준 시세를 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg == c) {
			btc = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw')).last.format()
			bch = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=bch_krw')).last.format()
			btg = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=btg_krw')).last.format()
			eth = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=eth_krw')).last.format()
			etc = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=etc_krw')).last.format()
			xrp = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=xrp_krw')).last.format()
			ltc = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=ltc_krw')).last.format()
			zil = JSON.parse(getHtml('https://api.korbit.co.kr/v1/ticker?currency_pair=zil_krw')).last.format()
			replier.reply('[암호화폐 시세]\n▣비트코인 :: ' + btc + '원\n' + '▣비트코인 캐시 :: ' + bch + '원\n' + '▣비트코인 골드 :: ' + btg + '원\n' + '▣이더리움 :: ' + eth + '원\n' + '▣이더리움 클래식 :: ' + etc + '원\n' + '▣리플 :: ' + xrp + '원\n' + '▣라이트코인 :: ' + ltc + '원\n' + '▣질리카 :: ' + zil + '원')
		}
	}

	loop: {
		c = '!네이버';
		a = 'all';
		d = '네이버에서 해당 내용을 검색합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.substr(0, c.length + 1) == c + ' ') {
			replier.reply(shortURL('https://search.naver.com/search.naver?query=' + encodeURI(msg.substring(c.length + 1))))
		}
	}
	loop: {
		c = '!구글';
		a = 'all';
		d = '구글에서 해당 내용을 검색합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.substr(0, c.length + 1) == c + ' ') {
			replier.reply(shortURL('https://www.google.co.kr/search?q=' + encodeURI(msg.substring(c.length + 1))))
		}
	}
	loop: {
		c = '!유튜브';
		a = 'all';
		d = '유튜브에서 해당 내용을 검색합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		if (msg.substr(0, c.length + 1) == c + ' ') {
			replier.reply(shortURL('https://www.youtube.com/results?search_query=' + encodeURI(msg.substring(c.length + 1))))
			}
		}

		loop: {
			c = '!단어';
			a = 'all';
			d = '네이버에서 해당 내용을 검색합니다.';
			if (commandChk(params, c, a, d) == false) break loop;
			if (msg.substr(0, c.length + 1) == c + ' ') {
				try {
					var u = Utils.getWebText('http://krdic.naver.com/search.nhn?query=' + msg.substr(c.length + 1));
					var a = u.split('<ul class=\'lst3\'>')
					var b = a[1].split('</ul>')
					var c = b[0].replace(/(<([^>]+)>)/g, '');
					c = c.replace(/발음재생/g, '')
					c = c.replace(/단어장 저장/g, '')
					c = c.replace(/매우중요/g, '')
					c = c.replace(/유의어/g, '\n\n유의어')
					c = c.trim()
					c = c.replace(/\n         /g, '')
					c = c.replace(/  /g, '\n')
					c = c.replace(/\n\n\n/g, '')
					replier.reply('[' + msg.substr(3) + ' 검색 결과]\n\n' + c)
				} catch (e) {
					replier.reply('단어 정보가 없습니다. 다시 입력해보세요.');
				}
			}
		}

		




	}

	function backGroundSys(params) {
	//날짜 관련 시스템/명령어
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	
	//이것은 날짜변경기입니다
	Ky.g[group].dateClock = Ky.g[group].dateClock || new Date().getDate() - 1;
	Ky.g[group].dateClockChecker = Ky.g[group].dateClockChecker || 0;
	ThreadManager.clock = new Object();
	if (ThreadManager.clock[group] === undefined) {
		ThreadManager.clock[group] = new java.lang.Thread(new java.lang.Runnable() {
			run: function () {
				try {
					while (true) {
						java.lang.Thread.sleep(1000);
						if (new Date().getDate() != Ky.g[group].dateClock){
							Ky.g[group].dateClock = new Date().getDate();
							dateChanger(params);
						}
						Ky.g[group].dateClockChecker = new Date().getTime();
						if (threadInterrupt == true) this.interrupt();
						//replier.reply('✔');
					}
				} catch (e) { }
			}
		});
	}
	if (new Date().getTime() - Ky.g[group].dateClockChecker > 2000) ThreadManager.clock[group].start();
	
	loop: {
		c = '.출석체크';
		a = 'member';
		d = '출석체크 순위에 따라 보상을 지급합니다. 연속 개근 시 보너스가 있습니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		//이것은 출첵입니다
		Ky.g[group].attendance = Ky.g[group].attendance || new Object();
		Ky.g[group].attendance.todayCount = Ky.g[group].attendance.todayCount || 0;
		
		Ky.g[group].m[icode].attendance = Ky.g[group].m[icode].attendance || new Object();
		Ky.g[group].m[icode].attendance.today = Ky.g[group].m[icode].attendance.today || false;
		Ky.g[group].m[icode].attendance.yesterday = Ky.g[group].m[icode].attendance.yesterday || false;
		Ky.g[group].m[icode].attendance.succeed = Ky.g[group].m[icode].attendance.succeed || 0;
		
		if (Ky.g[group].m[icode].attendance.today == false) {
			//오늘 출석 true
			Ky.g[group].m[icode].attendance.today = true;
			//만약 어제 출석 안했으면 연속출석 초기화, 했으면 ++
			if (Ky.g[group].m[icode].attendance.yesterday == false) {
				Ky.g[group].m[icode].attendance.succeed = 0;
			} else {
				Ky.g[group].m[icode].attendance.succeed++;
			}
			//오늘 출석 등수 ++
			Ky.g[group].attendance.todayCount++;
			//등수보상
			var reward = 0;
			var count = Ky.g[group].attendance.todayCount;
			if (count == 1) {
				reward += 300;
			} else if (count <=3) {
				reward += 250;
			} else if (count <=5) {
				reward += 200;
			} else if (count <=10) {
				reward += 150;
			} else {
				reward += 100;
			}
			//연속출석보상
			if (Ky.g[group].m[icode].attendance.succeed <= 10) {
				reward += 10 * Ky.g[group].m[icode].attendance.succeed;
			} else reward += 100
			//포인트 지급
			manageCp.add(params, reward);
			replier.reply('[' + sender +']\n' + Ky.g[group].attendance.todayCount + '위, 연속 '+ Ky.g[group].m[icode].attendance.succeed +'일\n+' + reward + 'cp');
		}
		if (msg == '!명령어') {
			var r = String('》KyaongBot_' + ver + '\n■명령어 목록■' + blank);
			for (i = 0; i < commandList.length; i++) {
				r += '》' + commandList[i] + '\n';
				r += descriptionList[i];
				r += '\n';
			}
			replier.reply(r)
		}
	}
	
	loop: {
		c = '.럭키포인트';
		a = 'member';
		d = '특정 확률로 랜덤 포인트를 지급합니다.';
		var r = Math.floor(Math.random() * 100);
		if (r == 50) {
			var p = Math.floor(Math.random() * 800 + 200) / 100;
			var q = Math.floor(Math.random() * 800 + 200) / 100;
			var i = Math.round(p * q);
			manageCp.add(params, i);
			replier.reply("[" + sender + "]\n럭키 포인트! +" + i + "cp");
		}
	}
	
	loop: {
		c = '.음슴체 감지';
		a = 'all';
		d = '음슴체를 감지해서 경고문을 출력합니다.';
		if (commandChk(params, c, a, d) == false) break loop;
		var tempT = new Date().getTime();
		temp.lastWordWarning = temp.lastWordWarning || 0;
		if (tempT - temp.lastWordWarning > 3000 ) {
			var m = msg.replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z)]/gi, '');
			var sliced = m.split(' ');
			var violation = false;
			if (m.toKorChars().slice(-1)[0] == 'ㅁ') violation = true;
			if (m.substr(m.length-1, 1) == '님') violation = false;
			if (m.substr(m.length-3, 3) == ' 아님') violation = true;
			if ((sliced.length < 2 || sliced[sliced.length-1].length < 2) && m.length<4) violation = false;
			if (violation) {
				replier.reply('이 방에서는 음슴체가 금지되어 있습니다.')
				temp.lastWordWarning = tempT;
			}
		}
	}
	
	loop: {
		c = '.최근로거';
		a = 'all';
		d = '';
		Ky.g[group].r[room].recentLog = Ky.g[group].r[room].recentLog || {};
		Ky.g[group].r[room].recentLog.msg = Ky.g[group].r[room].recentLog.msg || [];
		Ky.g[group].r[room].recentLog.icode = Ky.g[group].r[room].recentLog.icode || [];
		Ky.g[group].r[room].recentLog.sender = Ky.g[group].r[room].recentLog.sender || [];
		if (msg.split(' ')[0] != '!벌점') {
			Ky.g[group].r[room].recentLog.msg.unshift(msg);
		} else Ky.g[group].r[room].recentLog.msg.unshift('');
		if (Ky.g[group].r[room].recentLog.msg.length > 50) Ky.g[group].r[room].recentLog.msg.pop;
		Ky.g[group].r[room].recentLog.icode.unshift(icode);
		if (Ky.g[group].r[room].recentLog.icode.length > 50) Ky.g[group].r[room].recentLog.icode.pop;
		Ky.g[group].r[room].recentLog.sender.unshift(sender);
		if (Ky.g[group].r[room].recentLog.sender.length > 50) Ky.g[group].r[room].recentLog.sender.pop;
	}		
}

function dateChanger(params) {
	let { room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, group, hash, icode } = params;
	replyAllRoom(params, '[날짜변경]\n' + new Date().getFullYear() + '년 ' + (new Date().getMonth() + 1) + '월 ' + new Date().getDate() + '일');
	
	//복권추첨!
	if (Ky.g[group].r[room].enabled['!복권'] == 'true') {
		var winningNum = Math.round(Math.random() * 100 + 1);
		var winner = [];
		while (true) {
			var w = Ky.g[group].miniGame.lottery.cQueue.indexOf(String(winningNum));
			if (w != -1) {
				winner.push(Ky.g[group].miniGame.lottery.queue[w]);
				delete Ky.g[group].miniGame.lottery.cQueue[w];
			} else break;
		}
		if (winner.length == 0) {
			Ky.g[group].miniGame.lottery.reward = Math.round(Ky.g[group].miniGame.lottery.reward * 1.1);
			replyAllRoom(params, '[복권 추첨]\n당첨 번호: ' + winningNum + '\n당첨자 없음\n\n누적 당첨금: ' + Ky.g[group].miniGame.lottery.reward + 'cp')
		} else {
			reward = Math.round(Ky.g[group].miniGame.lottery.reward / winner.length);
			winnerName = [];
			for (i = 0; i < winner.length; i++) {
				manageCp.add(params, reward, winner[i]);
				winnerName.push(Ky.g[group].m[winner[i]].lastActive[0]);
			}
			replyAllRoom(params, '[복권 추첨]\n당첨 번호: ' + winningNum + '\n누적 당첨금: ' + Ky.g[group].miniGame.lottery.reward + 'cp\n\n당첨자: ' + winnerName + '\n1인당 당첨금: ' + reward + 'cp');
			delete Ky.g[group].miniGame.lottery.reward;
		}
		delete Ky.g[group].miniGame.lottery.queue;
		delete Ky.g[group].miniGame.lottery.cQueue;
	}
	
	if (Ky.g[group].r[room].enabled['.출석체크'] == 'true') {
		//출석 사람 수 0명으로
		Ky.g[group].attendance.todayCount = 0;
		//map로 일괄초기화 >> today를 yesterday로
		Object.keys(Ky.g[group].m).map(function (objectKey, index) {
			try {
				Ky.g[group].m[objectKey].attendance.yesterday = Ky.g[group].m[objectKey].attendance.today;
			} catch (e) {};
			try {
				Ky.g[group].m[objectKey].attendance.today = false;
			} catch (e) {};
			try {
				Ky.g[group].m[objectKey].miniGame.lottery.today = false;
			} catch (e) {};
		});
	}
	
}

function onStartCompile() {
	/*컴파일 또는 Api.reload호출시, 컴파일 되기 이전에 호출되는 함수입니다.
	 *제안하는 용도: 리로드시 자동 백업*/
	threadInterrupt = true
	DataBase.setDataBase('KyBot', JSON.stringify(Ky));
	Api.gc();
}
