/* [KyaongBot] */
var timeo = new Date().getTime();
var ver = "4.5.0.3_r"
var updatecode = "dddd"
var error = false;
var errorchk = 0;

// AMD TR™은 아조시가 맞다


if (DataBase.getDataBase("DB") == undefined) {
   var DB1 = new Object()
   DataBase.setDataBase(JSON.stringify(DB1), "DB");
}
var DB = JSON.parse(DataBase.getDataBase("DB"));
/*이건 리로드기능 안에 대체해서 삽입
DataBase.setDataBase(JSON.stringify(DB), "DB");
*/


var blank = "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \n"
var admin = ["불여우", "AMD TR™", "rgb", "K'romium", "케이시", "DEBUG$MODE*NAME+", "Apz74"]
DB.notice = ("<공지사항을 숙지해 주시기 바랍니다.>\n\n공지사항: goo.gl/iyP83B\n\n채팅/홍보 이벤트 진행중, 공지사항 참조해주세요!\n\n방장 카카오톡 id : rgbkakao\n\n공식업체: compury.com ('엘' 님)\n\n모바일 메뉴열고 우측상단\nPC 채팅창 방제아래 상단바\n♡->♥ 하트 부탁 드려요")
DB.ncommand = ("◆[캬옹봇 " + ver + "] 명령어 목록◇\n▼전체보기 클릭▼" + blank + "\n[사람들]\n▶!치킨 :: 제작자가 넣고 싶어서 넣음.\n▶!지비 :: 방장이 지비라서\n▶!케이시 :: 케이시가 시켜서\n▶!미쉘 :: 미쉘이 시켜서\n▶!티알 :: 내가 하고싶어서\n▶!불여우 :: '나'니까.\n[유행어 및 랜덤]\n▶ㅇㅈ? :: ㅇㅇㅈ, ㄴㅇㅈ 으로 답해준다.\n▶ㅂㅇㄹ :: 각종 유행어 인사말로 답해준다.\n▶\n소라고둥(포함 시) :: 스폰지밥의 그 소라고둥 맞다.\n▶쓰읍 :: 미쓰 또는 미쓰 테이크로 답해준다.(테스터 훈)\n▶!가위바위보 :: 봇과 가위바위보를 할 수 있다. 사용법: !가위바위보 <가위, 바위(주먹), 보 중 하나>\n▶!주사위 :: 주사위를 굴릴 수 있다.\n[검색 및 정보]\n▶!공지 :: 이 방의 공지를 확인할 수 있다.\n▶!채팅카운터 :: 카운터 초기화 시점부터 지금까지 총 몆개의 채팅이 올라왔는지 알려준다.\n▶!디스코드: 이방의 디스코드 주소를 확인할 수 있다.\n▶!시간 :: 지금 현재 시각을 확인할 수 있다.\n▶!디지털시계 :: 지금 현재 시각을 도트로 확인할 수 있다.\n▶!검색 :: 네이버 검색을 할 수 있다. 사용법: !검색 <검색하고 싶은 것>\n▶!유튜브 :: 유튜브 검색을 할 수 있다. 사용법: !유튜브 <검색하고 싶은 것>\n▶!구글 :: 구글 검색을 할 수 있다. 사용법: !구글 <검색하고 싶은 것>\n▶!나무위키 :: 나무위키 검색을 할 수 있다. 사용법: !나무위키 <검색하고 싶은 것>\n▶!실검 :: 현재 네이버의 실시간 검색어 순위를 확인할 수 있다.\n▶!날씨 :: 현재 전국 날씨를 알려준다.\n▶!지역날씨 :: 현재 지역의 날씨를 알 수 있다. 사용법: !지역날씨 <검색하고 싶은 지역>\n▶!번역 :: 실시간 번역을 할 수 있다. 사용법: !번역 <번역하고 싶은 언어> <번역할 문장>\n▶!언어 :: 번역에서 사용 가능한 언어를 표시합니다.\n▶!차트 :: 네이버 뮤직에서 실시간 차트를 가져옵니다.(느림)\n▶!비트코인 :: 현재 암호화폐의 시세를 알려줍니다.\n▶!가사 :: 노래의 가사를 알려줍니다. 사용법 !가사 <노래 제목>")
var startmsg = ["▃▄▅▆KyaongBot▆▅▄▃"]
var words = ["쉬바", "쓰버", "10새", "10새기", "10새리", "10세리", "10쉐이", "10쉑", "10스", "10쌔", " 10쌔기", "10쎄", "10알", "10창", "10탱", "18것", "18넘", "18년", "18노", "18놈", "18뇬", "18럼", "18롬", "18새", "18새끼", "18색", "18세끼", "18세리", "18섹", "18쉑", "18스", "18아", "ㄱㅐ", "ㄲㅏ", "ㄲㅑ", "ㄲㅣ", "ㅅㅂㄹㅁ", "ㅅㅐ", "ㅆㅂㄹㅁ", "ㅆㅍ", "ㅆㅣ", "ㅆ앙", "凸", " 갈보", "갈보년", "같은년", "같은뇬", "개같은", "개구라", "개년", "개놈", "개뇬", "개대중", "개독", "개돼중", "개랄", "개보지", "개뻥", "개뿔", "개새", "개새기", "개새끼", "개새키", "개색기", "개색끼", "개색키", "개색히", "개섀끼", "개세", "개세끼", "개세이", "개소리", "개쑈", " 개쇳기", "개수작", "개쉐", "개쉐이", "개쉑", "개쉽", "개스끼", "개시키", "개십새기", " 개십새끼", "개쐑", "개씹", "개아들", "개자슥", "개자지", "개접", "개좆", "개좌식", "개허접", "걔새", "걔수작", "걔시끼", "걔시키", "걔썌", "걸레", "게색기", "게색끼", "광뇬", "구녕", "그년", "그새끼", "놈현", "뇬", "눈깔", "뉘미럴", "니귀미", "니기미", "니미", "니미랄", "니미럴", "니미씹", "니아배", "니아베", "니아비", "니어매", "니어메", "니어미", "닝기리", "닝기미", "대가리", "뎡신", "도라이", "돈놈", "돌아이", "돌은놈", "되질래", "뒈져", "뒈져라", "뒈진", "뒈진다", "뒈질", " 뒤질래", "디져라", "디진다", "디질래", "따식", "때놈", "또라이", "똘아이", "똘아이", "뙈놈", "뙤놈", "뙨넘", "뙨놈", "뚜쟁", "띠바", "띠발", "띠불", "띠팔", "메친넘", "메친놈", "미췬", " 미췬", "미친", "미친넘", "미친년", "미친놈", "미친새끼", "미친스까이", "미틴", "미틴넘", "미틴년", " 미틴놈", "바랄년", "뱅마", "뱅신", "벼엉신", "병쉰", "병신", "부랄", "부럴", "불알", "불할", "붕가", "뷰웅", "븅", "븅신", "빌어먹", "빙시", "빙신", "빠가", "빠구리", "빠굴", "빠큐", "뻐큐", "뻑큐", "뽁큐", "상넘이", "상놈을", "상놈의", "상놈이", "새갸", "새꺄", "새끼", "새새끼", "새키", "색끼", "생쑈", "세갸", "세꺄", "세끼", "섹스", "쇼하네", "쉐기", "쉐끼", "쉐리", "쉐에기", "쉐키", "쉑", "쉣", "쉨", "쉬발", "쉬밸", "쉬벌", "쉬뻘", "쉬펄", "쉽알", "스패킹", "스팽", "시궁창", "시끼", "시댕", "시뎅", "시랄", "시발", "시벌", "시부랄", "시부럴", "시부리", "시불", "시브랄", "시팍", "시팔", "시펄", "심발끈", "심탱", "십8", "십라", "십새", "십새끼", "십세", "십쉐", "십쉐이", "십스키", "십쌔", "십창", "십탱", "싶알", "싸가지", "싹아지", "쌉년", "쌍넘", "쌍년", "쌍놈", "쌍뇬", "쌔끼", " 쌕", "쌩쑈", "쌴년", "썅", "썅년", "썅놈", "썡쇼", "써벌", "썩을년", "썩을놈", "쎄꺄", "쎄엑", " 쒸벌", "쒸뻘", "쒸팔", "쒸펄", "쓰바", "쓰박", "쓰발", "쓰벌", "쓰팔", "씁새", "씁얼", "씌파", "씨8", " 씨끼", "씨댕", "씨뎅", "씨바", "씨바랄", "씨박", "씨발", "씨방", "씨방새", "씨방세", "씨밸", "씨뱅", "씨벌", "씨벨", "씨봉", "씨봉알", "씨부랄", "씨부럴", "씨부렁", "씨부리", "씨불", "씨붕", "씨브랄", " 씨빠", "씨빨", "씨뽀랄", "씨앙", "씨파", "씨팍", "씨팔", "씨펄", "씸년", "씸뇬", "씸새끼", "씹같", "씹년", "씹뇬", "씹보지", "씹새", "씹새기", "씹새끼", "씹새리", "씹세", "씹쉐", "씹스키", "씹쌔", "씹이", "씹자지", "씹질", "씹창", "씹탱", "씹퇭", "씹팔", "씹할", "씹헐", "아가리", "아갈이", "아갈통", "아구창", "아구통", "아굴", "얌마", "양년", "양놈", "엄창", "엠병", "여물통", "염병", "엿같", "옘병", "옘빙", "오입", "왜년", "왜놈", "욤병", "육갑", "은년", "을년", "이년", "이새끼", "이새키", "이스끼", "이스키", "임마", "자슥", "잡년", "저년", "저새끼", "접년", "젖밥", "조까", "조까치", "조낸", "조또", "조랭", "조빠", "조쟁이", "조지냐", "조진다", "조찐", "  조질래", "존나", "존나게", "존니", "존만", " 존만한", "좀물", "좁년", "좆", "좁밥", "좃까", "좃또", "좃만", "좃밥", "좃이", "좃찐", "좆같", "좆까", "좆나", "좆또", "좆만", "좆밥", "좆이", "좆찐", "좇같", "좇이", "좌식", "주글", "주글래", "주데이", "주뎅", "주뎅이", "주둥아리", "주둥이", "주접", "주접떨", "죽고잡", "죽통", "쥐랄", "쥐롤", "쥬디", "지랄", "지럴", "지롤", "지미랄", "짜식", "짜아식", "쪼다", "쫍빱", "찌랄", "창녀", "캐년", "캐놈", "캐스끼", "캐스키", "캐시키", "탱구", "팔럼", "퍽큐", "호로", "호로놈", "호로새끼", "호로색", "호로쉑", "호로스까이", "호로스키", "후라들", "후래자식", "후레", "후뢰", "씨ㅋ발", "ㅆ1발", "씌발", "띠발", "띄발", "뛰발", "띠ㅋ발", "뉘뮈", "ㅅㅂ", "ㅆㅂ", "ㅂㅅ", "ㅄ", "ㅈㄹ", "좃", "좇", "시바", "멍청이", "쉬불", "쉬뿔", "ㅈㄴ"]
var notwords = ["도시바", "에이씨벨", "쉬바나", "화염병"]
const preMsg = {};
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

const UPDATE = {};
UPDATE.saveData = function(msg) { //파일에 내용을 저장하는 함수
  try {
    var file = new java.io.File(sdcard + "/kbot/response.js");
    var fos = new java.io.FileOutputStream(file);
    var str = new java.lang.String(msg);
    fos.write(str.getBytes());
    fos.close();
  } catch (e) {
    Log.debug(e + " At:" + e.lineNumber);
  }
};

function isInt(x) {
    return !isNaN(x) && eval(x).toString().length == parseInt(eval(x)).toString().length
}

function getHtml(text) {
    var content = new java.io.ByteArrayOutputStream();
    android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(text)).getEntity().writeTo(content);
    content.close();
    var str = String(content.toString());
    return str;
}

function wiki(query) {
    kiwi = Utils.getWebText('http://49.236.137.7/wiki/' + query)
    kiwi = kiwi.substring(32)
    kiwi = kiwi.substring(0, kiwi.length - 17)
    return kiwi.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "")
}

// 현재 DB 항목 (꼭! 작성해주세요!)
// DB.icode : 배열(스트링), 식별코드 DB
// DB.inick : 배열(스트링), 닉네임 DB
// DB.date : 숫자, 날짜
// DB.attendance : 숫자, 출석 인원 수
// DB.ncounter : 숫자, 공지카운터
// DB.notice : 스트링, 공지
// DB.ncommand : 스트링, 공지
// DB.lottery : 배열
// DB.p
// DB.p[scode] : 객체, 개인별 항목 구분
// DB.p[scode].attendance : 불린, 출석 여부 확인
// DB.p[scode].pt : 숫자, 개인별 현재 포인트
// DB.p[scode].warning : 숫자, 욕설 사용 경고 횟수
// DB.p[scode].counter : 숫자, 개인별 채팅 횟수
// DB.p[scode].date :  숫자, 개인별 DB 최종 업데이트 날짜
// DB.p[scode].rps[scode] : 숫자, 가위바위보 횟수
// DB.p[scode].call : 배열(스트링), scode를 호출한 사람
// DB.p[scode].callmsg : 배열(스트링), scode를 호출한 사람이 남기는 메시지
// DB.p[scode].lottery : 불린, 복권 응모 여부

// 원함수 내부에 배치할것과 외부에 배치할것 구분해서 배치!
// 최초 사용자 등록 시에만 개인별 데이터가 생성되도록 배치!

if ("icode" in DB == false) DB.icode = new Array()
if ("inick" in DB == false) DB.inick = new Array()

if ("date" in DB == false) DB.date = new Date().getDate() - 1
if ("attendance" in DB == false) DB.attendance = 0
if ("ncounter" in DB == false) DB.ncounter = 0
if ("acounter" in DB == false) DB.acounter = 0
if ("p" in DB == false) DB.p = new Object()
if ("lottery" in DB == false) DB.lottery = new Array()

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
try {
var timea = new Date().getTime();

msg = msg.trim();
room = room.trim();
sender = sender.trim();

// 도배 방지
if (preMsg[room] == msg) {
    return;
}
preMsg[room] = msg;

if (room == "불여우") {
    if (msg == "!프사갱신") {
      DataBase.setDataBase(ImageDB.getProfileImage(), "image")
      replier.reply("프사갱신 완료!" + DataBase.getDataBase("image"))
      return;
    }
}



/////////////////////////////////////////////////////////////////
/*
패시브1 - 관리자 - 일반 - 패시브2 순으로 작성해 주세요
패시브1은 명령어 실행 이전에 체크되는게 좋은 스크립트
패시브2는 명령어 실행 이후에 체크되는게 좋은 스크립트
큰 스크립트 앞에 설명을 꼭 적어주세요
*/
/////////////////////////////////////////////////////////////////

// 식별코드 체크 - 등록 - [scode]변수할당
loop: {
if (DB.inick.indexOf(sender) == -1) {
  while (true) {
    var n = Math.floor(Math.random() * 9000 + 1000);
    if (DB.icode.indexOf(n) == -1) {
      DB.inick.push(sender);
      DB.icode.push(String(n));
      var tb = escape(JSON.stringify(DB.inick));
      var ta2 = [];
      DB.inick.sort();
      var ta = JSON.parse(unescape(tb));
      for (var i = 0; i < DB.icode.length; i++) {
           ta2.push(DB.icode[ta.indexOf(DB.inick[i])])
       }
      DB.icode = ta2
      
      var scode = DB.icode[DB.inick.indexOf(sender)]; // scode: 전송자의 식별코드
      replier.reply("▃▄▅▆KyaongBot▆▅▄▃\n자유로운 컴퓨터 커뮤니티 컴퓨톡에 오신 것을 환영합니다.\n!명령어로 명령어를 확인하세요.\n[신규 코드 등록]\n" + sender + " - " + scode)

      DB.p[scode] = new Object()
      
      DB.p[scode].attendance = false
      // DB.p[scode].attendance[] : 아래에 있음
      DB.p[scode].pt = 0
      DB.p[scode].warning = 0
      DB.p[scode].counter = 0
      DB.p[scode].date = new Date().getDate() - 1
      DB.p[scode].rps = 0
      DB.p[scode].call = new Array()
      DB.p[scode].call[0] = "0000"
      DB.p[scode].callmsg = new Array()
      DB.p[scode].lottery = false
      DB.p[scode].pns = 0
      
      break loop;
    }
  }
  }
}
var scode = DB.icode[DB.inick.indexOf(sender)];

if (sender == "rgb" || sender == "불여우" || sender == "K'romium" || sender == "DEBUG$MODE*NAME+") {
if (msg.indexOf("!evalf ") == 0) {
    replier.reply(eval(msg.substring(7)))
}
}

// 포인트/카운터 증가
DB.p[scode].pt++;
DB.p[scode].counter++;
DB.ncounter++
DB.acounter++


if (msg == "!날짜변경") DB.date = new Date().getDate() - 1
// 날짜가 변함에 따라 광역 변수 초기화
if (new Date().getDate() != DB.date) {
    replier.reply(DB.p[scode].attendance)
    replier.reply(DB.p[scode].warning)
    DB.attendance = 0;
    
    for (var y = 0; y < DB.icode.length; y++) {
	    var x = DB.icode[y]
        DB.p[x].attendance = false;
        DB.p[x].warning -= 5
        if (DB.p[x].warning < 0) DB.p[x].warning = 0
    }
    replier.reply(DB.p[scode].warning)
    var n = Math.floor(Math.random() * DB.lottery.length);
    replier.reply(n)
    if (n != 0) {
    var i = Math.round(DB.lottery.length * 10000 / 120)
    DB.p[DB.lottery[n]].pt += i
    replier.reply("오늘의 복권 당첨자는\n" + DB.inick[DB.icode.indexOf(DB.lottery[n])] + "님입니다.\n당첨금 : " + i +"cp (20% VAT)")
    delete DB.lottery;
    DB.lottery = new Array();
    for (var k = 0; k < DB.icode.length; k++) {
        var x = DB.icode[k]
        delete DB.p[x].lottery
        DB.p[x].lottery = false;
    }
    }
}
// 날짜가 변함에 따라 개인별 변수 초기화
DB.date = new Date().getDate();

// 출석체크
if (DB.p[scode].attendance == false) {
    DB.attendance++;
    if (DB.attendance == 1) {
        var cp = 300
        DB.p[scode].pt += cp
        replier.reply(DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance == 2) {
        var cp = 250
        DB.p[scode].pt += cp
        replier.reply(DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance > 2 && DB.attendance < 6) {
        var cp = 200
        DB.p[scode].pt += cp
        replier.reply(DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance > 4 && DB.attendance < 11) {
        var cp = 150
        DB.p[scode].pt += cp
        replier.reply(DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else {
        var cp = 100
        DB.p[scode].pt += cp
        replier.reply(DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    }
    DB.p[scode].attendance = true;
}


// 호출확인
if (DB.p[scode].call[0] != "0000") {
    var l = [];
    for (var i = 0; i < DB.p[scode].call.length; i++) {
        l.push("[");
        l.push(DB.inick[DB.icode.indexOf(DB.p[scode].call[i])]);
        l.push("]\n");
        l.push(unescape(DB.p[scode].callmsg[i]));
        l.push("\n\n");
    }
    r = l.join([separator = ""]);
    replier.reply("[" + sender + "]\n누군가 당신을 찾습니다.\n▼내용확인▼" + blank + "\n" + r);
    delete DB.p[scode].call
    delete DB.p[scode].callmsg
    DB.p[scode].call = new Array();
    DB.p[scode].call[0] = "0000"
    DB.p[scode].callmsg = new Array();
}

if (sender == "AMD TR™") {
var asdf = Math.floor(Math.random() * 100);
if (asdf == 50) replier.reply("아오 시끄러워요 아조시;")
}

/////////////////////////////////////////////////////////////////
/*
var image = DataBase.getDataBase("image")
if (ImageDB.getProfileImage() == image) {
  if (msg.indexOf("!eval ") == 0) {
    replier.reply(eval(msg.substring(6)))
  }
} else if (ImageDB.getProfileImage() != image) {
  if (msg.indexOf("!eval") == 0) {
    replier.reply("관리자가 아닙니다.")
  }
}
*/
if (admin.indexOf(sender) != -1) {
if (msg == "!업데이트") {
    replier.reply("백업 진행중...");
    DataBase.setDataBase(JSON.stringify(DB), "DB");
    replier.reply("다운로드 진행중...");
    UPDATE.saveData(getHtml("https://raw.githubusercontent.com/chanoo104/kyaongbot/master/response.js"));
    replier.reply("[업데이트 코멘트]\n" + getHtml("https://github.com/chanoo104/kyaongbot/commit/master").split('<p class="commit-title">')[1].split("</p>")[0].trim());
    Api.reload();
    if (error == false) {
      replier.reply("업데이트 성공!")
    } else if (error == true) {
      replier.reply("업데이트 실패..")
    }
    replier.reply("ver. " + ver)
    replier.reply("com. " + updatecode);
    replier.reply(startmsg)
}
if (msg == "!리로드") {
    replier.reply("백업 진행중...");
    DataBase.setDataBase(JSON.stringify(DB), "DB");
    Api.reload();
    replier.reply(startmsg)
}


if (msg == "!확인") {
    replier.reply(updatecode)
}

// 포인트가 별 의미있는 기능은 아닙니다.
// 하지만 그렇다고 포인트 관련 치트 기능을 넣지는 말아주세요. 부탁드려요.
// 관리용으로 넣었는데 절대 사적으로 쓰지 말아주세요. 문법검사없어서 잘못쓰면 DB폭파되니 조심.
if (msg.split(" ")[0] == "!ptmgmt") {
	DB.p[msg.split(" ")[1]].pt += Number(msg.split(" ")[2])
}
if (msg.split(" ")[0] == "!wrmgmt") {
	DB.p[msg.split(" ")[1]].warning += Number(msg.split(" ")[2])
}
	
// 작동됨
if (msg == "!DB삭제") {
	var DB1= new Object();
	replier.reply("진행중...");
    DataBase.setDataBase(JSON.stringify(DB1), "DB");
    Api.reload();
}
if (msg == "!pDB삭제ddd") {
    delete DB.p[scode]
    DB.icode.splice(DB.icode.indexOf(scode), 1);
	DB.inick.splice(DB.icode.indexOf(scode), 1);
    
}
// 작동안?됨
try {
if (msg.split(" ")[0] == "!DBkey삭제") {
	eval('delete DB.' + msg.split(" ")[1])
	replier.reply("완료")
}
} catch (e) {
    replier.reply("사용자 DB가 존재하지 않습니다.");
}
try {
if (msg.split(" ")[0] == "!pDBkey삭제") {
	for (var n = 1000; n < 10000; n++) {
		eval('delete DB.p.' + n + 'msg.split(" ")[1]')
		replier.reply("완료")
	}
}
} catch (e) {
    replier.reply("해당 DB가 존재하지 않습니다.");
}
try {
if (msg.split(" ")[0] == "!pDB삭제") {
	eval('delete DB.p.' + msg.split(" ")[1])
	replier.reply("완료")
}
} catch (e) {
    replier.reply("사용자 DB가 존재하지 않습니다.");
}

}

/////////////////////////////////////////////////////////////////

if (msg == "!명령어") {
    replier.reply(DB.ncommand)
}
if (msg == "!공지") {
    DB.ncounter = 0
    replier.reply(DB.notice)
}

if (msg == "!카운터 전체") replier.reply(DB.acounter)
if (msg == "!카운터 공지") replier.reply(DB.ncounter + "/300")

if (msg == "!카운터 자신") replier.reply("[" + sender + "]\n" + DB.p[scode].counter)

if (msg == "!닉네임") {
    replier.reply(sender)
}
if (msg == "!프사") {
    var img = ImageDB.getProfileImage();
    replier.reply(img);
}

if (msg == "!포인트") replier.reply(DB.p[scode].pt + "cp")


// 욕설인식
loop: {
for (var n = 0; n < notwords.length; n++) {
    if (msg.indexOf(notwords[n]) != -1) break loop;
}
var msg1 = msg.replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z)]/gi, "");
for (var n = 0; n < words.length; n++) {
  if (msg1.indexOf(words[n]) != -1) {
    DB.p[scode].warning++
    var i = DB.p[scode].warning * 30 - 30
    if (DB.p[scode].warning == 1) replier.reply("[" + sender + "]\n누적 경고: 1회")
    if (DB.p[scode].warning != 1) {
      replier.reply("[" + sender + "]\n누적 경고: " + DB.p[scode].warning + "회\n" + i + "cp 차감");
      DB.p[scode].pt -= i
   }
    if (DB.p[scode].warning > 10) {
      Api.replyRoom("간부방", "[" + sender + "]\n욕설 사용 횟수:" + DB.p[scode].warning + "회")
    }
    break;
  }
}
}

// 상벌점
loop: {
if (msg.split(" ")[0] == "!상점") {
    if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var a = Number(msg.split(" ")[2])
    if (isInt(a) == false || a < 0) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (a < 10) {
        replier.reply("10cp부터 이용 가능합니다.");
        break loop;
    }
    var i = Math.round(a * 1.2);
    if (DB.p[scode].pt - i < 0) {
        var x = i - DB.p[scode].pt;
        replier.reply("포인트가 " + x + "cp 부족합니다. VAT 20%를 유의해 주세요.");
        break loop;
    }
    DB.p[scode].pt -= i;
    DB.p[msg.split(" ")[1]].pt += a;
    replier.reply("[상점]\n" + sender + " → " + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "\n+" + a + "cp (-" + i + "cp) (20% VAT)");
}
}
loop: {
if (msg.split(" ")[0] == "!벌점") {
    if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var a = Number(msg.split(" ")[2])
    if (isInt(a) == false || a < 0) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (a < 10) {
        replier.reply("10cp부터 이용 가능합니다.");
        break loop;
    }
  var t = timea - DB.p[scode].pns
    if (t < 180000) {
        var v = 180 - Math.round(t / 1000)
    	replier.reply("쿨타임 : " + v + "sec")
    break loop;
    }
    var i = Math.round(a * 1.2);
    if (DB.p[scode].pt - i < 0) {
        var x = i - DB.p[scode].pt;
        replier.reply("포인트가 " + x + "cp 부족합니다. VAT 20%를 유의해 주세요.");
        break loop;
    }
    DB.p[scode].pns = new Date().getTime();
    DB.p[scode].pt -= i;
    DB.p[msg.split(" ")[1]].pt -= a;
    replier.reply("[벌점]\n" + sender + " → " + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "\n-" + a + "cp (-" + i + "cp) (20% VAT)");
}
}

if (msg == "!코드확인") replier.reply("[" + sender + "]\n식별코드 : " + scode)

// 식별코드 목록
if (msg == "!코드목록") {
      var ilist = [];
      for (var i = 0; i < DB.icode.length; i++) {
        ilist.push(DB.icode[i]);
        ilist.push(" - ");
        ilist.push(DB.inick[i]);
        ilist.push("\n");
      }
      rep = ilist.join([separator = '']);      
      replier.reply("식별코드 목록\n▼전체보기 클릭▼" + blank + "\n" + rep);
}


//코드변경
loop: {
if (msg.split(" ")[0] == "!코드변경") {
  var to = msg.split("!코드변경 ")[1]
  if (DB.p[scode].pt > 499){
  if (isInt(Number(to)) == true && 999 < parseInt(to) < 10000) {
    if (DB.icode.indexOf(to) != -1) {
      replier.reply("이미 사용중인 식별코드입니다.");
    } else {
      DB.p[to] = DB.p[scode]
      delete DB.icode[scode]
      DB.icode.splice(DB.icode.indexOf(scode), 1, to);
      DB.p[to].pt -= 500
      replier.reply("식별코드가 변경되었습니다. 500cp가 차감되었습니다.");
    }
  } else {
    replier.reply("1000에서 9999까지의 자연수를 입력해 주십시오.");
  }
} else {
var x = 500 - DB.p[scode].pt
replier.reply("포인트가 " + x + "cp 부족합니다.")
}
}
}


//호출
loop: {
    if (msg.split(" ")[0] == "!호출") {
            if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var o = scode;
    var s = msg.split(" ")[1];
    if (DB.p[s].call.indexOf(o) != -1) {
        replier.reply("이미 상대를 호출했습니다.")
        break loop;
    }
        var s = msg.split(" ")[1];
        var m = msg.substr(9);
        if (DB.p[s].call[0] == "0000") DB.p[s].call = new Array();
        DB.p[s].call.push(o);
        DB.p[s].callmsg.push(escape(m));
    }
}

// 복권
loop : {
if (msg.split(" ")[0] == "!복권") {
	
	if (DB.p[scode].lottery == true) {
		replier.reply("이미 오늘은 복권에 응모하셨습니다.")
		break loop;
	}
    var x = 100 - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
    }
	replier.reply("복권에 응모하셨습니다.\n100cp가 차감됩니다.")
	DB.lottery.push(scode);
	DB.p[scode].lottery = true
	DB.p[scode].pt -= 100
	
}
}

// 가위바위보
loop: {
if (msg.split(" ")[0] == "!가위") {
    var i = Number(msg.split(" ")[1]);
    if (isInt(i) == false) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (i > 9 && i < 1001) {
    	var y = DB.p[scode].rps - 4
        var x = y * 10 + i - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
        }
        if (DB.p[scode].rps == 4) {
    	replier.reply("오늘의 마지막 무료 기회입니다. 다음 시행부터 이용료가 10cp씩 증가합니다.");
    }
        if (DB.p[scode].rps > 4) {
            replier.reply("무료 사용 횟수를 초과하셨습니다.");
            DB.p[scode].pt -= y * 10
        replier.reply(10 * y + "cp가 차감됩니다.")
        }
        DB.p[scode].rps++
        var n = Math.floor(Math.random() * 3);
        if (n == 0) {
            replier.reply("보! 승리하셨습니다.\n" + i + "cp를 획득하셨습니다.")
            DB.p[scode].pt += i
        }
        if (n == 1) {
            replier.reply("가위! 비겼습니다. 포인트가 반환됩니다.")
        }
        if (n == 2) {
            replier.reply("바위! 이겨버린건가요 ㅋ\n이 포인트는 이제 제껍니다.")
            DB.p[scode].pt -= i
        }
    } else {
        replier.reply("10에서 1000 사이의 포인트를 입력해 주세요.");
    }
}
}
loop: {
if (msg.split(" ")[0] == "!바위") {
    var i = Number(msg.split(" ")[1])
    if (isInt(i) == false) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (i > 9 && i < 1001) {
    	var y = DB.p[scode].rps - 4
        var x = y * 10 + i - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
        }
        if (DB.p[scode].rps == 4) {
    	replier.reply("오늘의 마지막 무료 기회입니다. 다음 시행부터 이용료가 10cp씩 증가합니다.");
    }
        if (DB.p[scode].rps > 4) {
            replier.reply("무료 사용 횟수를 초과하셨습니다.");
            DB.p[scode].pt -= y * 10
        replier.reply(10 * y + "cp가 차감됩니다.")
        }
        DB.p[scode].rps++
        var n = Math.floor(Math.random() * 3);
        if (n == 0) {
            replier.reply("가위! 승리하셨습니다.\n" + i + "cp를 획득하셨습니다.")
            DB.p[scode].pt += i
        }
        if (n == 1) {
            replier.reply("바위! 비겼습니다. 포인트가 반환됩니다.")
        }
        if (n == 2) {
            replier.reply("보! 이겨버린건가요 ㅋ\n이 포인트는 이제 제껍니다.")
            DB.p[scode].pt -= i
        }
    } else {
        replier.reply("10에서 1000 사이의 포인트를 입력해 주세요.");
    }
}
}
loop: {
if (msg.split(" ")[0] == "!보") {
    var i = Number(msg.split(" ")[1])
    if (isInt(i) == false) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (i > 9 && i < 1001) {
    	var y = DB.p[scode].rps - 4
        var x = y * 10 + i - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
        }
        if (DB.p[scode].rps == 4) {
    	replier.reply("오늘의 마지막 무료 기회입니다. 다음 시행부터 이용료가 10cp씩 증가합니다.");
    }
        if (DB.p[scode].rps > 4) {
            replier.reply("무료 사용 횟수를 초과하셨습니다.");
            DB.p[scode].pt -= y * 10
        replier.reply(10 * y + "cp가 차감됩니다.")
        }
        DB.p[scode].rps++
        var n = Math.floor(Math.random() * 3);
        if (n == 0) {
            replier.reply("바위! 승리하셨습니다.\n" + i + "cp를 획득하셨습니다.")
            DB.p[scode].pt += i
        }
        if (n == 1) {
            replier.reply("보! 비겼습니다. 포인트가 반환됩니다.")
        }
        if (n == 2) {
            replier.reply("가위! 이겨버린건가요 ㅋ\n이 포인트는 이제 제껍니다.")
            DB.p[scode].pt -= i
        }
    } else {
        replier.reply("10에서 1000 사이의 포인트를 입력해 주세요.");
    }
}
}

// 실검
if (msg.trim() == "!실검") { //!실검 이면
    var 실검 = [];
    for (var abab = 1; abab < 21; abab++) {
      실검.push(abab + ". " + getHtml("http://rank.search.naver.net/rank.js").replace(/\"/g, "").split("keyword:")[abab].split(",")[0]); //파싱
    }
    replier.reply(실검.join("\n")); //합해서 보내기
}
// 날씨
if (msg == "!날씨") { //!날씨면
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
// 음원차트 순위 확인
if (msg == "!차트") { //!차트면
    var charts = [];
    for (var i = 1; i < 51; i++) {
      chart = Utils.getWebText("http://m.music.naver.com/listen/top100.nhn?domain=DOMESTIC")
      var a = chart.split("<span class=\"rank\">")[i].split("</span>")[0];
      var b = chart.split("<strong class=\"tit\"> ")[i].split("</strong>")[0];
      var c = chart.split("<span class=\"stit\">")[i].split("</span>")[0];
      charts.push("순위 : " + a + "\n제목 : " + b + "\n아티스트(앨범) : " + c);
    }
    replier.reply(charts.join("\n=============\n"))
}
// 암호화폐 시세 확인
if (msg == "!비트코인") { //만약 비트코인이라면
    var coinone = getHtml("http://api.coinone.co.kr/ticker?currency=all"); //코인원에서 파싱
    var last = coinone.split('"last":"'); // last:" 를 기준으로 자르기
    var currency = coinone.split('"currency":"'); //currenct": 를 기준으로 자르기
    var vmlist = []; //새로운 함수 생성
    for (var i = 1; i <= 9; i++) { //반복
      vmlist.push(currency[i].split('"')[0] + " : " + last[i].split('"')[0]); //변수 생성
    }
    replier.reply(vmlist.join("원\n") + "원"); // 보내기
}
// 단어 검색
try {
    if (msg.indexOf("!단어") == 0) {
      var u = Utils.getWebText("http://krdic.naver.com/search.nhn?query=" + msg.substr(3));
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
    }
  } catch (e) {
    replier.reply("단어 정보가 없습니다. 다시 입력해보세요.");
}
// 롤 전적
try {
    if (msg.indexOf("!롤전적") == 0) {
      msgi = msg.replace(/ /g, "+"); //메세지 부분에 공백부분을 +로 대체해줍니다 (그냥 띄어쓰기용)
      var u = Utils.getWebText("http://www.op.gg/summoner/userName=" + msgi.substr(4)); //변수 u는 이링크를 HTML파싱한 값이다
      var t = u.split("<span class=\"tierRank\">"); //변수 a는 변수 u에서 HTML에 <span class="tierRank"> 을 자른값 입니다 /이걸로 해서 tierRank부분을 자른겁니다
      var w = u.split("<span class=\"wins\">"); //나머지도 마찬가지입니다
      var l = u.split("<span class=\"losses\">");
      var win = u.split("<span class=\"winratio\">");
      replier.reply(msg.substr(5) + "님의 롤 전적 검색결과 입니다\n티어 : " + t[1].split("<")[0] + "\n승리 : " + w[1].split("<")[0] + "\n패배 : " + l[1].split("<")[0] + "\n승률 : " + win[1].split("<")[0]);
    }
  } catch (e) { //결과값을 찾을수 없으면
    replier.reply("롤전적 정보가 없습니다");
}
// 배그 서버 상태
if (msg == "!배그서버") {
    replier.reply("현재 배그 서버의 동접자는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").split('<p> 현재 배틀그라운드 동접자: ')[1].split('<a href="/statistics/playing">')[0].trim() + "이며, 서버는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").trim().split('<strong>서버:</strong> <span>')[1].split('</span>')[0] + "입니다.")
}
// 가사 정보
try {
    if (msg.split(" ")[0] == "!가사") {
      var u = Utils.getWebText("https://m.search.naver.com/search.naver?query=" + encodeURIComponent(msg.substr(4) + "가사"));
      u = u.replace(/   /g, "");
      u = u.replace(/<br>/g, "");
      u = u.replace(/<mark>/g, "");
      u = u.replace(/<\/mark>/g, "");
      var a = u.split("<div class=\"lyrics_txt\">");
      var b = u.split("<strong  class=\"tit\">");
      var c = u.split("<span class=\"name\">");
      replier.reply(msg.substr(4) + " 검색결과 입니다\n가수:" + c[2].split("<")[0] + "\n앨범 제목:" + c[1].split("<")[0] + "\n▼전체보기 클릭▼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \n가사정보:\n" + a[1].split("<")[0]);
    }
} catch (e) {
    replier.reply("가사 정보가 없습니다. 다시 입력해보세요.");
}
/////////////////////////////////////////////////////////////////

// 카운터 다차면 공지표시
DB.ncounter++;
if (DB.ncounter == 299) {
   DB.ncounter = 0
   replier.reply(DB.notice)
}

if (sender == "rgb" || sender == "불여우" || sender == "DEBUG$MODE*NAME+") {
if (msg.indexOf("!eval ") == 0) {
    replier.reply(eval(msg.substring(6)))
}
}
/////////////////////////////////////////////////////////////////

var timeb = new Date().getTime();
var t = timeb - timea
if (msg == "!응답속도") replier.reply("응답속도 : " + t + "ms")
var tt = timea - timeo
var ttt = Math.round(tt / 60000)
if (msg == "!동작시간") replier.reply("동작시간 : " + ttt + "min")

} catch (e) {
    var error = true;
    if (errorchk == 0) {
      replier.reply("오류 발생!\n오류메시지 : " + e.message + "\n" + Number(Number(e.lineNumber) + Number(1)) + "번째 줄에서 오류가 발생했습니다!")
      errorchk = 1;
      return;
    }
}
}
