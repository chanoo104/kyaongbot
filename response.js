/* [KyaongBot] */
var timeo = new Date().getTime();
var ver = "4.6.2"
var updatecode = "욕설리스트 싹둑 버젼"
var error = false;
if (typeof DataBase.getDataBase("errorchk") == "undefined") DataBase.setDataBase(0, "errorchk")
var off = false

// AMD TR™은 아조시가 아니다 전혀
/* 이게 작동할지 안할지 모르겠다면 일단 eval 기능을 이용해 작동을 확인후 적용 시켜주세요.
그리고 eval로 테스트가 전혀 안될거 같으면 제발 try기능을 써서 오류가 발생해도 예외처리를 해주셔야 손쉽게 오류를 고칠수 있습니다.
꼭 테스트하고 넣어주세요 제발 부탁입니다. 고치기 너무 귀찮아요;;;(특히 지비)
*/


if (DataBase.getDataBase("DB") == undefined) {
var DB1 = new Object();
DataBase.setDataBase(JSON.stringify(DB1), "DB");
}
var DB = JSON.parse(DataBase.getDataBase("DB"));


/*이건 리로드기능 안에 대체해서 삽입
DataBase.setDataBase(JSON.stringify(DB), "DB");
*/

var blank = "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n" //이거 유니코드이니까 띄어쓰기로 고치지 마세요 제발 ;;
var admin = ["불여우", "AMD TR™", "rgb", "K'romium", "케이시", "DEBUG$MODE*NAME+", "Apz74"]
DB.notice = ("<공지사항을 숙지해 주시기 바랍니다.>\n\n공지사항: goo.gl/iyP83B\n\n채팅/홍보 이벤트 진행중, 공지사항 참조해주세요!\n\n방장 카카오톡 id : rgbkakao\n\n공식업체: compury.com ('엘' 님)\n\n모바일 메뉴열고 우측상단\nPC 채팅창 방제아래 상단바\n♡->♥ 하트 부탁 드려요")
DB.ncommand = ("◇[캬옹봇 " + ver + "] 명령어 목록◇\n▼전체보기 클릭▼\n" + blank + "캬옹봇은 이용자가 첫 채팅을 올리면 자동으로 식별코드를 부여하고 데이터베이스를 생성합니다.\n명령어에서는 닉네임이 아닌 식별코드를 이용해 개인을 구별합니다.\n활동을 하면 컴퓨톡 포인트(cp)를 부여합니다.\n\n》채팅 1개당 1cp 부여\n》매일 리셋되는 출석체크시 순위에 따라 300~100cp 부여\n》채팅 시 1%의 확률로 4~100cp 부여\n》욕설 사용시 30cp씩 누적 차감\n\n아래 설명에서 <> 안에 들어있는 내용은 직접 채우시는 겁니다.\n\n\n◆[전체 / 개인]◆\n\n!공지\n》공지사항을 출력하고 공지 카운터를 초기화합니다.\n!명령어\n》캬옹봇에서 사용 가능한 명령어 목록을 출력합니다.\n!닉네임\n》발신자의 닉네임을 출력합니다.\n!코드확인\n》발신자의 식별코드를 출력합니다.\n!코드목록\n》식별코드 목록을 전화번호부처럼 출력합니다.\n!코드변경\n》[비용:500cp]호출코드를 원하는 번호(1000~9999)로 변경합니다.\n!호출 <식별코드> <메세지>\n》식별코드에 해당하는 사람이 호출 이후 첫 메세지를 보낼 때 발신자가 자신을 찾고 있음을 메세지 내용과 함께 알려줍니다.\n!포인트\n》발신자의 포인트를 출력합니다.\n!염탐 <식별코드>\n》[비용:50cp]식별코드에 해당하는 사람의 포인트를 염탐합니다.\n!상점 <식별코드> <포인트>\n》[VAT:20%]발신자의 계좌에서 수수료를 포함한 포인트를 차감하고, 수수료를 제외한 포인트를 식별코드에 해당하는 사람의 계좌에 보냅니다.\n!벌점 <식별코드> <포인트>\n》[VAT:20%|쿨타임:180초]상점과 같지만 식별코드의 해당하는 사람의 포인트를 차감합니다.\n!가위/바위/보 <포인트>\n》[일 5회 이상 시행시 10cp씩 누적 수수료 부과]해당 포인트를 걸고 봇과 가위바위보를 합니다.\n!복권\n》[일 1회 제한|비용:100cp]복권에 응모합니다. 당첨자는 매일 00시 정각에 발표됩니다. (당첨 금액:100+누적 금액, VAT:20%)\n\n\n◆[단어 포함 발동 방식]◆\n\nㅇㅈ? / ㅂㅇㄹ / 소라고둥 / 쓰읍\n\n\n◆[유틸리티]◆\n\n!날씨\n》주요 지역의 날씨를 출력합니다.\n!지역날씨 <지역>\n》해당 지역의 날씨를 출력합니다.\n!실검\n》네이버 실시간 검색어 차트를 출력합니다.\n!비트코인\n》주요 암호화폐 시세를 출력합니다.\n!검색 <내용>\n》네이버에서 해당 내용을 검색합니다.\n!유튜브/구글/나무위키 <내용>\n》해당 사이트에서 해당 내용을 검색합니다.\n!배그서버\n》배틀그라운드 동접자 수와 서버 상태를 출력합니다.\n!롤전적 <닉네임>\n》정확한 닉네임을 입력하면 해당 닉네임의 전적을 출력합니다.\n!단어 <내용>\n》해당 단어를 검색합니다.\n!차트\n》네이버 뮤직 음원 순위를 출력합니다.\n!가사 <제목>\n》해당 노래의 가사를 출력합니다.\n!번역 <언어> <내용>\n》내용을 해당 언어로 번역합니다.\n!언어\n》번역에서 사용 가능한 언어를 출력합니다.\n\n\n◆[기타]◆\n\n!주사위\n》주사위를 굴려 결과값을 출력합니다.\n!시간\n》현재 시각을 출력합니다.\n!디지털시계\n》현재 시각을 디지털 시계 형식으로 출력합니다.\n!카운터 전체\n》DB 초기화 이후 올라온 모든 채팅 갯수를 출력합니다.\n!카운터 자신\n》DB 초기화 이후 자신이 보낸 모든 채팅 갯수를 출력합니다.\n!카운터 공지\n》공지가 출력되기까지 남은 채팅 갯수를 출력합니다. 공지가 출력될때 DB도 같이 저장됩니다.\n!응답속도\n》캬옹봇의 passive 코드 실행속도를 출력합니다.\n!동작시간\n》리로드 이후 현재까지 캬옹봇이 켜져있는 시간을 출력합니다.\n")
var startmsg = ["▃▄▅▆|KyaongBot|▆▅▄▃"]
["네다통", "통구이", "민주화", "ㅁㅈㅎ", "느금마", "니애미", "니어미", "니엄마", "니애비", "느그애비", "느그애미", "애미터", "애미뒤", "앰뒤", "앰창", "2중대", "3일한", "SUCKSEX", "가카", "간민정음", "간철수", "갓치", "갓카", "강된장남", "개독교", "개쌍도", "개쌍디언", "게이", "경상디언", "고무통", "고무현", "골좁이", "규재찡", "근혜찡", "김치남", "김치녀", "까보전", "꼬춘쿠키", "꿈떡마쇼", "꿘", "나랑께", "낙태충", "냄져", "네다보", "네다홍", "盧", "노무노무", "노미넴", "노부엉", "노시계", "노알라", "노오란", "노오랗", "노운지", "노짱", "뇌물현", "다이쥬", "다카키마사오", "땅크", "로류", "로린이", "록또", "머중", "멍청도", "메갈", "명예자지", "무현RT", "미러링", "박원숭", "베충", "베츙", "보라니", "보력지원", "보밍", "보빨", "보슬", "보테크", "보혐", "부랄발광", "붸충", "빵즈", "빼애애액", "빼애액", "사타부언", "새드", "새부", "설라디언", "소라넷", "숨쉴한", "슨상", "슨상님", "씹선비", "씹치", "씹치남", "알보칠", "암베", "앙망", "애비충", "엑윽", "여혐", "오유충", "우덜식", "우돌식", "우흥", "운지", "욷높", "웃흥", "원조가카", "유충", "응딩이", "일간베스트", "일게이", "일밍", "일밍아웃", "일베", "일베충", "일벤저스", "일벤져스", "일붸", "자1지", "자들자들", "자릉내", "자취냄", "자혐", "장애인", "재기찡", "재기하다", "전땅크", "전라디언", "젠신병자", "좌고라", "좌빨", "좌음", "좌좀", "주절먹", "중력절", "짱깨", "쪽국", "챙놈", "청웅", "코르셋", "탈김치", "탈라도", "통궈", "투명애비", "틀딱", "피떡갈비", "핑좆남", "한남", "한남또", "한남충", "할아보지", "해상방위대", "핵대중", "핵펭귄", "행게이", "허수애비", "호뽑뽑요", "혼외수", "홍어", "홍팍", "갈보", "강간", "개같", "개년", "개뇬", "개미친", "개부랄", "개불알", "개빠구리", "개뼉다구", "개새", "개색", "개쌔끼", "개자석", "개자슥", "개자식", "지랄", "꼴통", "느그엄마", "느검마", "니기미", "니미", "대가리", "대갈", "대갈빡", "대갈통", "대굴빡", "뒈진다", "뒤질", "등쉰", "등신", "딸따뤼", "딸따리", "딸딸", "딸딸이", "똘추", "매춘", "몸파는", "발정", "배때지", "병신", "보지", "보짓", "보털", "부랄", "부럴", "불알", "븅딱", "븅삼", "븅쉰", "븅신", "빙딱", "빙삼", "빙시", "빙신", "빠구리", "빠구뤼", "빠꾸리", "빠꾸뤼", "빠순이", "빠큐", "뻑큐", "뽀르노", "뽀오지", "사까쉬", "사까시", "상노무", "상놈", "새1끼", "새갸", "새꺄", "새뀌", "새끼", "새뤼", "새리", "새캬", "새키", "성감대", "성경험", "성관계", "성교육", "섹하고", "섹하구", "섹하자", "섹하장", "쉬빨", "쉬뻘", "쉬뿔", "쉬파", "쉬팍", "쉬팔", "쉬팡", "쉬펄", "쉬퐁", "쉬풀", "스너프", "스댕", "스뎅", "스발", "스벌", "스와핑", "스왑", "스트립", "스팔", "스펄", "슴가", "싀발", "싀밸", "싀벌", "싀벨", "싀봉", "싀팍", "싀팔", "싀펄", "시1발", "싸갈통", "싸까시", "싸이코", "싸카시", "쌍너엄", "쌍넌", "쌍넘", "쌍녀언", "쌍년", "쌍놈", "쌍뇬", "쌍눔", "쌍늠", "썅넘", "썅년", "썅놈", "썅뇬", "썅눔", "썅늠", "써글", "썩을넘", "썩을년", "썩을놈", "썩을뇬", "썩을눔", "썩을늠", "씌바", "씌박", "씌발", "씌방", "씌밸", "씌벌", "씌벙", "씌벨", "씌부랄", "씌불", "씌블", "씌빌", "씌빨", "씌뻘", "씌파", "씌팍", "씌팔", "씌팡", "씌펄", "씌퐈", "씌퐝", "씨발", "씨1발", "씨팔", "씹", "아가리", "아가지", "아갈", "아괄", "아구리", "아구지", "아구창", "아굴창", "자쥐", "자즤", "조까", "조옷", "좆", "주둥아리", "주둥이", "창녀", "창년", "후레", "후장"]
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

if (room != "■컴퓨터 하드웨어 견적 잡담방■") {
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
      replier.reply(startmsg + "\n자유로운 컴퓨터 커뮤니티 컴퓨톡에 오신 것을 환영합니다.\n!명령어로 명령어를 확인하세요.\n[신규 코드 등록]\n" + sender + " - " + scode)

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
DB.ncounter++;
DB.acounter++;


if (msg == "!날짜변경") DB.date = new Date().getDate() - 1
// 날짜가 변함에 따라 광역 변수 초기화
if (new Date().getDate() != DB.date) {
    replier.reply("어제의 출석 인원수 : " + DB.attendance + "명")
    DB.attendance = 0;
    
    for (var y = 0; y < DB.icode.length; y++) {
	    var x = DB.icode[y]
        DB.p[x].attendance = false;
        DB.p[x].warning -= 5
        if (DB.p[x].warning < 0) DB.p[x].warning = 0
    }
    var n = Math.floor(Math.random() * DB.lottery.length);
    if (DB.lottery.length != 0) {
    replier.reply("복권 응모자 수 : " + DB.lottery.length + "명")
    var y = DB.lottery.length + 1
    var i = Math.round(y * 10000 / 120)
    DB.p[DB.lottery[n]].pt += i
    replier.reply("오늘의 복권 당첨자는\n" + DB.inick[DB.icode.indexOf(DB.lottery[n])] + "님입니다.\n당첨금 : " + i +"cp (20% VAT)")
    delete DB.lottery;
    DB.lottery = new Array();
    for (var k = 0; k < DB.icode.length; k++) {
        var x = DB.icode[k]
        delete DB.p[x].lottery
	DB.p[x].rps = 0
        DB.p[x].lottery = false;
    }
    }
}
DB.date = new Date().getDate();

// 출석체크
if (DB.p[scode].attendance == false) {
    DB.attendance++;
    if (DB.attendance == 1) {
        var cp = 300
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance == 2) {
        var cp = 250
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance > 2 && DB.attendance < 6) {
        var cp = 200
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance > 4 && DB.attendance < 11) {
        var cp = 150
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else {
        var cp = 100
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
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

var r = Math.floor(Math.random() * 100);
if (r == 50) {
	var p = Math.floor(Math.random() * 800 + 200) / 100;
	var q = Math.floor(Math.random() * 800 + 200) / 100;
	var i = Math.round(p * q);
	DB.p[scode].pt += i;
	replier.reply("[" + sender + "]\n럭키 포인트! " + i + "cp");
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
if (msg == "!on") off = false
if (off == true) return
if (msg == "!off") off = true

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

if (msg == "!로드") {
    replier.reply("백업 진행중...");
    DB = JSON.parse(DataBase.getDataBase("DB2"));
    replier.reply(startmsg)
}
if (msg == "!세이브") {
    replier.reply("진행중...");
    DataBase.setDataBase(JSON.stringify(DB), "DB2");
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
if (msg.split(" ")[0] == "!pDB이전") {
    var x = msg.split(" ")[1];
    var y = msg.split(" ")[2];
    delete DB.p[y];
    var z = DB.icode[DB.icode.indexOf(x)];
    DB.inick.splice(DB.icode.indexOf(x), 1);
    DB.icode.splice(DB.icode.indexOf(x), 1);
    DB.icode.splice(DB.icode.indexOf(y), 1, z);
    replier.reply(DB.icode[0]  + " " + DB.inick[0])
    replier.reply("완료!");
}

if (msg.split(" ")[0] == "!pDB삭제") {
	var x = msg.split(" ")[1]
    delete DB.p[x]
    DB.inick.splice(DB.icode.indexOf(x), 1);
    DB.icode.splice(DB.icode.indexOf(x), 1);
}

// 작동안?됨
/*
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
*/
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

if (msg == "!포인트") replier.reply("[" + sender + "]\n" + DB.p[scode].pt + "cp")


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
  if (isInt(Number(to)) == true && parseInt(to) > 999 && parseInt(to) < 10000) {
    if (DB.icode.indexOf(to) != -1) {
      replier.reply("이미 사용중인 식별코드입니다.");
    } else {
      DB.p[to] = DB.p[scode]
      delete DB.p[scode]
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

loop: {
    if (msg.split(" ")[0] == "!염탐") {
            if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var x = 50 - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
    }
    DB.p[scode].pt -= 50
    replier.reply("50cp가 차감됩니다.\n[" + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "] " + DB.p[msg.split(" ")[1]].pt + "cp")
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
	
if (msg == "!견적양식") {
	replier.reply("[rgb]\n견적 요청 전 생각해봐야할 것들" + blank + "\n\n》자기가 컴퓨터가 왜 필요한지 생각합니다.\n컴퓨터를 구매하는 필요성과 중요도를 파악하고 목적을 정합니다.\nex) 이제 피방 말고 집에서 배그를 하고싶어! 취미로 하던 영상편집도 좀 더 수월하게!\n\n》또 필요한게 없는지 생각해 봅니다. (윈도우, 모니터, 키보드/마우스, 스피커/헤드셋 등)\n운영 체제, 주변 기기와 특수 목적 장비(캡처보드 등)의 구입 필요성을 판단해 봅니다.\nex) 모니터도 144인가? 그걸로 사고, 키마도 지금쓰는 삼성키보드에서 벗어나야지. 윈도우는 내가 예산이 여유롭지 않으니 그냥 직접 설치해야겠어.\n\n》컴퓨터 구입에 사용할 예산과, 컴퓨터 실 구매 예정일을 정합니다.\n자기가 무리하지 않고 지출할 수 있는 적절한 예산과, 그에 연계되는 구매 예정일을 정합니다.\nex) 구매를 미루고 싶지는 않으니.. 일단 지금 수중에 돈이 130정도 있는데, 월말까지 30만원정도 더 모은 후 구매해야겠어.\n예상 구매 예정일이 너무 많이(1달 이상) 남았을 경우 견적은 구매 임박 일자에 짜는 것이 좋습니다. 돈 모으고 계세요.\n\n》자기가 컴퓨터에 바라는 점을 생각합니다.\n예를 들자면\n- 사양 좋게\n- 업글같은거 안하고 한번 사서 오래 쓰게\n이런 단순한 것부터\n- 저소음\n- 내부 부품 품질을 좋게\n이런거나\n- 플루이드 모션!\n이런 것까지 아주 단순한 것부터 복잡한 것까지 최대한 많이 생각해 봅니다.\n\n》견적 양식을 채웁니다.\n")
	replier.reply("[rgb]\n견적 양식(전체보기-꾹눌러 복사)" + blank + "\n\n1. 구매예정일(구체적!)\n\n2. 용도(자세히!)\n\n3. 구성품(모니터 마우스 헤드셋 등)\n\n3.1. 윈도우 포함 여부\n\n4. 컴퓨터에 바라는 점(최대한 많이)\n\n5. 본체 디자인 신경쓰세요?\n\n6. 예산(대충이라도)\n\n7. 기타 질문?\n")
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
    replier.reply("현재 배그 서버의 동접자는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").split('현재 배틀그라운드 동접자: ')[1].split('<a href="/statistics/playing">')[0].trim() + "이며, 서버는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").trim().split('서버:</strong> <span>')[1].split('</span>')[0] + "입니다.")
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
if (DB.ncounter >> 299) {
   DB.ncounter = 0
   replier.reply(DB.notice)
   DataBase.setDataBase(JSON.stringify(DB), "DB");
}

if (sender == "rgb" || sender == "불여우" || sender == "DEBUG$MODE*NAME+") {
if (msg.indexOf("!eval ") == 0) {
    replier.reply(eval(msg.substring(6)))
}
}
/////////////////////////////////////////////////////////////////


/////////////////////(크롬이 만든거)//////////////////////////////
if (msg.indexOf("8ball ") == 0) {
        var br = Math.floor(Math.random()*15)+1;
        if (br == 1){
            replier.reply("전망이 좋지 않습니다..");
        } 
        if (br == 2){
            replier.reply("아니요!");
        } 
        if (br == 3){
            replier.reply("제 직감으로 봐서는 아닐겁니다!");
        } 
        if (br == 4){
            replier.reply("제 답변은...아니오입니다!");
        } 
        if (br == 5){
            replier.reply("그렇지 않을겁니다..");
        }
        if (br == 6){
            replier.reply("앗..! 깜빡하고 졸아서 질문을 받지 못하였습니다..");
        } 
        if (br == 7){
            replier.reply("아앗..집중해서 다시 해보세요!");
        }
        if (br == 8){
            replier.reply("예측을..못하겠습니다..!");
        }
        if (br == 9){
            replier.reply("아마.. 그렇지 않을까요?");
        }
        if (br == 10){
            replier.reply("아마도 그럴겁니다!");
        }
        if (br == 11){
            replier.reply("저를 믿어도 좋습니다!");
        }
        if (br == 12){
            replier.reply("네!");
        }
        if (br == 13){
            replier.reply("의심할 여지 없이 당연합니다!");
        }
        if (br == 14){
            replier.reply("확실히 그렇습니다!");
        }
        if (br == 15){
            replier.reply("당연히 그럴겁니다!");
        }          
    }


if (msg == "!크롬") {
    replier.reply("코딩을 좋아한다 메우")
}
/////////////////////////////////////////////////////////////////

var timeb = new Date().getTime();
var t = timeb - timea;
if (msg == "!응답속도") replier.reply("응답속도 : " + t + "ms")
var tt = timea - timeo;
var ttt = Math.round(tt / 60000);
if (msg == "!동작시간") replier.reply("동작시간 : " + ttt + "min")

} else {
if (msg == "!견적양식") {
	replier.reply("[rgb]\n견적 요청 전 생각해봐야할 것들" + blank + "\n\n》자기가 컴퓨터가 왜 필요한지 생각합니다.\n컴퓨터를 구매하는 필요성과 중요도를 파악하고 목적을 정합니다.\nex) 이제 피방 말고 집에서 배그를 하고싶어! 취미로 하던 영상편집도 좀 더 수월하게!\n\n》또 필요한게 없는지 생각해 봅니다. (윈도우, 모니터, 키보드/마우스, 스피커/헤드셋 등)\n운영 체제, 주변 기기와 특수 목적 장비(캡처보드 등)의 구입 필요성을 판단해 봅니다.\nex) 모니터도 144인가? 그걸로 사고, 키마도 지금쓰는 삼성키보드에서 벗어나야지. 윈도우는 내가 예산이 여유롭지 않으니 그냥 직접 설치해야겠어.\n\n》컴퓨터 구입에 사용할 예산과, 컴퓨터 실 구매 예정일을 정합니다.\n자기가 무리하지 않고 지출할 수 있는 적절한 예산과, 그에 연계되는 구매 예정일을 정합니다.\nex) 구매를 미루고 싶지는 않으니.. 일단 지금 수중에 돈이 130정도 있는데, 월말까지 30만원정도 더 모은 후 구매해야겠어.\n예상 구매 예정일이 너무 많이(1달 이상) 남았을 경우 견적은 구매 임박 일자에 짜는 것이 좋습니다. 돈 모으고 계세요.\n\n》자기가 컴퓨터에 바라는 점을 생각합니다.\n예를 들자면\n- 사양 좋게\n- 업글같은거 안하고 한번 사서 오래 쓰게\n이런 단순한 것부터\n- 저소음\n- 내부 부품 품질을 좋게\n이런거나\n- 플루이드 모션!\n이런 것까지 아주 단순한 것부터 복잡한 것까지 최대한 많이 생각해 봅니다.\n\n》견적 양식을 채웁니다.\n")
	replier.reply("[rgb]\n견적 양식(전체보기-꾹눌러 복사)" + blank + "\n\n1. 구매예정일(구체적!)\n\n2. 용도(자세히!)\n\n3. 구성품(모니터 마우스 헤드셋 등)\n\n3.1. 윈도우 포함 여부\n\n4. 컴퓨터에 바라는 점(최대한 많이)\n\n5. 본체 디자인 신경쓰세요?\n\n6. 예산(대충이라도)\n\n7. 기타 질문?\n")
}
}
} catch (e) {
    var error = true;
    if (DataBase.getDataBase("errorchk") == 0) {
      replier.reply("ERROR!\nmessage : " + e.message + "\n:line no. : " + Number(Number(e.lineNumber) + Number(1)))
      DataBase.setDataBase(1, "errorchk")
      Api.reload();
    }
}
}
