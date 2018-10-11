/* [KyaongBot] */
var timeo = new Date().getTime();
var ver = "4.9.8.9.9.9"
var updatecode = "지비가 언제쯤 5.0 만들려나"
var error = false;
if (typeof DataBase.getDataBase("errorchk") == "undefined") DataBase.setDataBase("errorchk", 0)
var off = false

// AMD TR™은 아조시다 매우
/* 이게 작동할지 안할지 모르겠다면 일단 eval 기능을 이용해 작동을 확인후 적용 시켜주세요.
그리고 eval로 테스트가 전혀 안될거 같으면 제발 try기능을 써서 오류가 발생해도 예외처리를 해주셔야 손쉽게 오류를 고칠수 있습니다.
꼭 테스트하고 넣어주세요 제발 부탁입니다. 고치기 너무 귀찮아요;;;(특히 지비)
*/
DataBase.setDataBase("errorchk", 0)

if (DataBase.getDataBase("DB") == undefined) {
    var DB1 = new Object();
    DataBase.setDataBase("DB", JSON.stringify(DB1));
}
var DB = JSON.parse(DataBase.getDataBase("DB"));


/*이건 리로드기능 안에 대체해서 삽입
DataBase.setDataBase("DB", JSON.stringify(DB));
*/
var blank = "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n" //이거 유니코드이니까 띄어쓰기로 고치지 마세요 제발 ;;
var admin = ["불여우", "AMD TR™", "rgb", "K'romium", "케이시", "DEBUG$MODE*NAME+", "GeForce", "핫산", "Yui", "Apz74"]
DB.notice = ("<공지사항을 숙지해 주시기 바랍니다.>\n\n공지사항: goo.gl/iyP83B\n\n채팅/홍보 이벤트 진행중, 공지사항 참조해주세요!\n\n방장 카카오톡 id : rgbkakao\n\n공식업체: compury.com ('엘' 님)\n\n모바일 메뉴열고 우측상단\nPC 채팅창 방제아래 상단바\n♡->♥ 하트 부탁 드려요")
DB.ncommand = ("◇[캬옹봇 " + ver + "] 명령어 목록◇\n" +
    "▼전체보기 클릭▼\n" + blank +
    "캬옹봇은 이용자가 첫 채팅을 올리면 자동으로 식별코드를 부여하고 데이터베이스를 생성합니다.\n" +
    "명령어에서는 닉네임이 아닌 식별코드를 이용해 개인을 구별합니다.\n" +
    "활동을 하면 컴퓨톡 포인트(cp)를 부여합니다.\n" +
    "닉네임 변경시 나갔다 들어오신 후 이전 식별코드와 새로 발급된 식별코드를 각각 갠톡(rgbkakao) 또는 [!호출 9999 내용]으로 보내주셔야 데이터를 이전해드립니다.\n\n" +
    "》채팅 1개당 1cp 부여\n" +
    "》매일 리셋되는 출석체크시 순위에 따라 800~100cp 부여\n" +
    "》채팅 시 1%의 확률로 4~100cp 부여\n" +
    "》욕설 사용시 30cp씩 누적 차감\n\n" +
    "아래 설명에서 <> 안에 들어있는 내용은 직접 채우시는 겁니다.\n\n\n" +
    "◆[전체 / 개인]◆\n\n!공지\n》공지사항을 출력하고 공지 카운터를 초기화합니다.\n" +
    "!캬옹봇\n》캬옹봇에 개한 설명을 출력합니다.\n" +
    "!명령어\n》캬옹봇에서 사용 가능한 명령어 목록을 출력합니다.\n" +
    "!닉네임\n》발신자의 닉네임을 출력합니다.\n" +
    "!코드확인\n》발신자의 식별코드를 출력합니다.\n" +
    "!코드목록\n》식별코드 목록을 전화번호부처럼 출력합니다.\n" +
    "!코드변경\n》[비용:500cp]호출코드를 원하는 번호(1000~9999)로 변경합니다.\n" +
    "!호출 <식별코드> <메세지>\n》식별코드에 해당하는 사람이 호출 이후 첫 메세지를 보낼 때 발신자가 자신을 찾고 있음을 메세지 내용과 함께 알려줍니다.\n" +
    "!포인트\n》발신자의 포인트를 출력합니다.\n" +
    "!순위\n》보유 포인트 순위를 출력합니다.\n" +
    "!염탐 <식별코드>\n》[비용:50cp]식별코드에 해당하는 사람의 포인트를 염탐합니다.\n" +
    "!상점 <식별코드> <포인트>\n》[VAT:20%]발신자의 계좌에서 수수료를 포함한 포인트를 차감하고, 수수료를 제외한 포인트를 식별코드에 해당하는 사람의 계좌에 보냅니다.\n" +
    "!벌점 <식별코드> <포인트>\n》[VAT:50%|쿨타임:180초]상점과 같지만 식별코드의 해당하는 사람의 포인트를 차감합니다.\n" +
    "!가위/바위/보 <포인트>\n》[일 5회 제한]해당 포인트를 걸고 봇과 가위바위보를 합니다.\n" +
    "!복권\n》[일 1회 제한|비용:100cp]복권에 응모합니다. 당첨자는 매일 00시 정각에 발표됩니다. (당첨 금액:100+누적 금액, VAT:20%)\n\n\n" +
    "◆[단어 포함 발동 방식]◆\n\n" +
    "ㅇㅈ? / ㅂㅇㄹ / 소라고둥 / 쓰읍\n\n\n" +
    "◆[유틸리티]◆" +
    "\n\n!견적생성<엔터키><키워드><엔터키><키워드>...\n" +
    "》스페이스바가 아닌 엔터키를 사용해 각 키워드를 분리합니다. 부품 이름을 엔터키로 구분해 대충 입력하면 다나와 견적으로 만들어 반환합니다.\n" +
    "!비교 <부품1,부품2>\n》(by 시공) 두 부품 이름을 대충 입력하면(되도록 영문으로만) userbenchmarks 사이트에서 비교한 링크를 출력합니다.\n" +
    "!단축 <주소>\n》주소를 단축합니다.\n" +
    "!나무위키 <내용>\n》나무위키에서 해당 문서를 검색합니다.\n(아직 불완정)\n" +
    "!날씨\n》주요 지역의 날씨를 출력합니다.\n" +
    "!지역날씨 <지역>\n》해당 지역의 날씨를 출력합니다.\n" +
    "!실검\n》네이버 실시간 검색어 차트를 출력합니다.\n" +
    "!비트코인\n》주요 암호화폐 시세를 출력합니다.\n" +
    "!검색 <내용>\n》네이버에서 해당 내용을 검색합니다.\n" +
    "!유튜브/구글/나무위키 <내용>\n》해당 사이트에서 해당 내용을 검색합니다.\n" +
    "!배그서버\n》배틀그라운드 동접자 수와 서버 상태를 출력합니다.\n" +
    "!롤전적 <닉네임>\n》정확한 닉네임을 입력하면 해당 닉네임의 전적을 출력합니다.\n" +
    "!단어 <내용>\n》해당 단어의 뜻을 검색합니다.\n" +
    "!차트\n》네이버 뮤직 음원 순위를 출력합니다.\n" +
    "!가사 <제목>\n》해당 노래의 가사를 출력합니다.\n(현재 고장 사용불가)\n" +
    "!번역 <언어> <내용>\n》내용을 해당 언어로 번역합니다.\n" +
    "◆[기타]◆\n\n!주사위\n》주사위를 굴려 결과값을 출력합니다.\n" +
    "!시간\n》현재 시각을 출력합니다.\n" +
    "!디지털시계\n》현재 시각을 디지털 시계 형식으로 출력합니다.\n" +
    "!카운터 전체\n》DB 초기화 이후 올라온 모든 채팅 갯수를 출력합니다.\n" +
    "!카운터 자신\n》DB 초기화 이후 자신이 보낸 모든 채팅 갯수를 출력합니다.\n" +
    "!카운터 공지\n》공지가 출력되기까지 남은 채팅 갯수를 출력합니다. 공지가 출력될때 DB도 같이 저장됩니다.\n" +
    "!인분\n》자신이 친 채팅을 퍼센트로 출력합니다.\n" +
    "!응답속도\n》캬옹봇의 passive 코드 실행속도를 출력합니다.\n" +
    "!동작시간\n》리로드 이후 현재까지 캬옹봇이 켜져있는 시간을 출력합니다.\n" +
    "!불여우호출 <할말>\n》불여우를 텔레그램으로 호출합니다.(봇이 죽었다던지 할때 사용)\n")
var startmsg = "▃▄▅▆|KyaongBot|▆▅▄▃"
var w = "D쥐고,D지고,jot같,tlqkf,wlfkf,ㅁㅈㅎ,ㅁㅊ,ㅁ친,ㅄ,ㅅㄲ네,ㅅㄲ들,ㅅㅋ,ㅅ발,ㅆㄺ,ㅆㅂ,ㅈㄹ,ㅉ질한,凸,가카,간민정음,간철수,갈보,갓치,강된장남,개간년,개같,개같이,개년,개념빠가,개뇬,개독,개독교,개련,개마이,개미친,개부랄,개불알,개빠구리,개뼉다구,개새,개새기,개새끼,개색,개섹,개셈,개쌍도,개쌍디언,개쌔끼,개자석,개자슥,개자식,개저씨,경상디언,계새끼,고무통,고무현,골1빈,골빈,골좁이,관종,괘새끼,구씹,규재찡,그따구,근혜찡,글러먹,기레기,기자레기,김치남,김치녀,까보전,꺼져,껒여,꼬춘쿠키,꼴갑,꼴값,꼴깝,꼴통,낙태충,냄져,넌씨눈,네다보,네다통,네다홍,년놈,노무노무,노미넴,노부엉,노시계,노알라,노운지,노인네,노짱,노친네,뇌물현,뇌텅,눈깔,눈새,느검마,느그애미,느그애비,느그엄마,느금마,늬믜,늬미,니기미,니년,니믜,니미럴,니애미,니애비,니어미,니엄마,닝기리,닥쳐라,닥치세,대가리,대갈빡,대갈통,대굴빡,덜떨어,도라이,도랏,도랐,도른,돌앗구만,돌앗나,돌앗네,돌았구만,돌았나,돌았네,뒈져,뒈진다,뒤져라,뒤져버,뒤져야,뒤져야지,뒤져요,뒤졌,뒤지겠,뒤지고싶,뒤지길,뒤진다,뒤질,등쉰,등신,디져라,디졌,디지고,디질,딴년,딸따뤼,딸따리,딸딸,딸딸이,또라이,또라인,똘아이,똘추,똥멍청,로류,맘충,매춘,머갈,멍청도,몸파는,무현RT,믜칀,믜친,미러링,미시친발,미쳣네,미쳤나,미쳤니,미췬,미칀,미친,미친개,미친새,미친색,박원숭,발정,배때지,별창,병신,병크,보라니,보력지원,보밍,보빨,보슬,보짓,보털,보테크,보혐,부랄,부랄발광,부럴,불알,붸충,븅딱,븅삼,븅쉰,븅신,빙딱,빙삼,빙시,빙신,빠구뤼,빠구리,빠꾸뤼,빠꾸리,빠순이,빠큐,빵즈,뻐규,뻐큐,뻑유,뻑큐,뻨큐,뼈큐,뽀르노,뽀오지,사까쉬,사까시,사새끼,삼일한,상노무,상놈,새1끼,새77ㅣ,새갸,새꺄,새뀌,새끼,새끼라,새끼야,새뤼,새리,새캬,새퀴,새킈,새키,색희,색히,샊기,샊히,생키,샹년,섀키,설라디언,섬숭이,성괴,섹하고,섹하구,섹하자,섹하장,소라넷,솔친,숨쉴한,쉬발,쉬버,쉬빨,쉬뻘,쉬뿔,쉬이바,쉬파,쉬팍,쉬팔,쉬팡,쉬펄,쉬퐁,쉬풀,슈1발,슈발,슈벌,슈우벌,스너프,스댕,스뎅,스발,스벌,스팔,스펄,슴가,싀발,싀밸,싀벌,싀벨,싀봉,싀팍,싀팔,싀펄,싑창,시1발,시미발친,시미친발,시바,시바라지,시바류,시바알,시바앙,시발,시방새,시벌탱,시볼탱,시부럴,시부렬,시부울,시뷰럴,시뷰렬,시빨,시새발끼,시이발,시친발미,시키가,시팔,시펄,십창,십팔,싸갈통,싸까시,싸물어,싸이코,싸카시,쌍너엄,쌍넌,쌍넘,쌍녀언,쌍년,쌍놈,쌍뇬,쌍눔,쌍늠,쌔끼,썅,썅넘,썅년,썅놈,썅뇬,썅눔,썅늠,썌끼,써글,썩을넘,썩을년,썩을놈,썩을뇬,썩을눔,썩을늠,쒸펄,쓰레기새,씌바,씌박,씌발,씌방,씌밸,씌벌,씌벙,씌벨,씌부랄,씌불,씌블,씌빌,씌빨,씌뻘,씌파,씌팍,씌팔,씌팡,씌펄,씌퐈,씌퐝,씝창,씨1발,씨바라,씨바알,씨발,씨방새,씨버럼,씨벌,씨벌탱,씨볼탱,씨부럴,씨부렬,씨뷰럴,씨뷰렬,씨빠빠,씨빨,씨뻘,씨새발끼,씨이발,씨팔,씹귀,씹못,씹뻐럴,씹새끼,씹선비,씹쌔,씹창,씹치,씹치남,씹팔,씹할,아가리,아가지,아갈이,아괄,아구리,아구지,아구창,아굴창,아닥,아오시바,암베,애미뒤,애미터,애비충,앰뒤,앰창,엠뷩신,엠븽신,엠빙신,엠생,엠창,염병,엿같,엿이나,옘병,오유충,운지,욷높,원조가카,은새끼,응딩이,이새끼,일게이,일벤저스,일벤져스,일붸,자1지,자들자들,자릉내,자쥐,자즤,자취냄,자혐,재기찡,재기하다,전땅크,전라디언,절라,젖같,젗같,젠신병자,젼나,젼낰,졀라,졀리,졌같은,졏같,조까,조낸,조온나,조옷,족까,존나,존낙,존내,졸라,좁밥,좃,종나,좆,좆까,좇,좌고라,좌빨,좌음,좌좀,죠낸,죠온나,죤나,죤내,죵나,죶,주둥아리,주둥이,주절먹,죽여 버리고,죽여버리고,죽여불고,죽여뿌고,중력절,줬같은,쥐랄,쥰나,즤랄,지랄,지롤,지인지조,짱깨,짱께,쪽1바리,쪽국,쪽바리,쪽발,쯰질,찌질한,찝째끼,창녀,창년,창놈,챙놈,청웅,쳐먹,쳐받는,쳐발라,취ㅈ,취좃,탈김치,탈라도,통궈,투명애비,피떡갈비,핑좆남,한남,한남또,한남충,할아보지,핵대중,핵펭귄,행게이,호로새끼,호로잡,호뽑뽑요,혼외수,홍팍,화낭년,화냥년,후레,후려,후빨,후장,盧"
var words = w.split(",");
var notwords = ["도시바", "에이씨벨", "쉬바나", "화염병", "개 같", "빼애액", "시 바"]
const preMsg = {};
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const UPDATE = {};
UPDATE.saveData = function (msg) { //파일에 내용을 저장하는 함수
    try {
        var file = new java.io.File(sdcard + "/katalkbot/response.js");
        var fos = new java.io.FileOutputStream(file);
        var str = new java.lang.String(msg);
        fos.write(str.getBytes());
        fos.close();
    } catch (e) {
        Log.debug(e + " At:" + e.lineNumber);
    }
};
function getByteLength(s, b, i, c) {
    for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
    return b;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
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

function checkDetailUrl(strUrl) {
    var expUrl = /^(http\:\/\/)?((\w+)[.])+(asia|biz|cc|cn|com|de|eu|in|info|jobs|jp|kr|mobi|mx|name|net|nz|org|travel|tv|tw|uk|us)(\/(\w*))*$/i;
    return expUrl.test(strUrl);
}
function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
}
function getTimeStamp() {
    var d = new Date();
    var s =
        leadingZeros(d.getFullYear(), 4) + '-' +
        leadingZeros(d.getMonth() + 1, 2) + '-' +
        leadingZeros(d.getDate(), 2) + ', ' +

        leadingZeros(d.getHours(), 2) + ':' +
        leadingZeros(d.getMinutes(), 2) + ':' +
        leadingZeros(d.getSeconds(), 2);

    return s;
}
function getYMDStamp() {
    var d = new Date();
    var s =
        leadingZeros(d.getFullYear(), 4) +
        leadingZeros(d.getMonth() + 1, 2) +
        leadingZeros(d.getDate(), 2)
    return s;
}
function getRightURL(n) {
    var tmpURL = n
    var tmp = tmpURL.toLowerCase();
    if (tmp.indexOf("http://") == 0 ||
        tmp.indexOf("https://") == 0)
        return tmpURL;
    else
        return "http://" + tmpURL;
}
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}
function lolStat(nick) {
    var mmr = true, unranked = false
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
        var list = arr.join(''), arr = [];
        arr.push('[' + doc.select("div.SummonerName").text() + ']\n');
        if (!unranked) arr.push(doc.select('div.LadderRank').text() + '\n');
        arr.push('| LV ' + doc.select('span[class=Level tip]').text() + ' | ');
        if (!unranked) { arr.push(doc.select('div.Tier').get(0).text() + ' | ' + doc.select('div.LP').get(0).text() + ' |') } else arr.push('Unranked |')
        if (doc.select('div div span.Item').text() != '') arr.push('\n[ ' + doc.select('div div span.Item').text() + ' ]');
        arr.push('\n\n》최근 20게임 전적\n ' + doc.select('div.WinRatioTitle span.win').text() + '승 ' + doc.select('div.WinRatioTitle span.lose').text() + '패, ' + doc.select('div.WinRatioTitle b').text());
        if (!unranked) arr.push('\n》솔랭 전적\n ' + doc.select('div.WinLose').get(0).text());
        arr.push('\n》MOST 챔피언\n' + list);
        if (mmr) arr.push('\n예상 MMR : ' + doc1.select('td.MMR').text() + '\n예상 티어 : ' + doc1.select('td.TierRankString').text());
        if (mmr) if (doc1.select('div.TipStatus').text() != '') arr.push('\n' + doc1.select('div.TipStatus').text());
        return arr.join('')
    } catch (e) { //결과값을 찾을수 없으면
        return ("전적 정보가 없습니다.");
    }
}
function getByteLength(s, b, i, c) {
    for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
    return b;
}




if ("pdata" in DB == false) DB.pdata = new Object()
if ("can" in DB == false) DB.can = new Array()
if ("intr" in DB == false) DB.intr = new Array()
if ("spe" in DB == false) DB.spe = new Array()
if ("vote" in DB == false) DB.vote = new Array()
if ("first" in DB == false) DB.first = new Array()
if ("first2" in DB == false) DB.first2 = new Array()






// 현재 DB 항목 (꼭! 작성해주세요!)
// DB.icode : 배열(스트링), 식별코드 DB
// DB.inick : 배열(스트링), 닉네임 DB
// DB.date : 숫자, 날짜
// DB.attendance : 숫자, 출석 인원 수
// DB.ncounter : 숫자, 공지카운터
// DB.notice : 스트링, 공지
// DB.news : 주간 뉴스(칼럼?)
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
// DB.p[scode].realwr : 강퇴 경고 횟수

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
// response 시작지점 =============================================================== //
// ================================================================================ //
function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    try {
        var timea = new Date().getTime();

        msg = msg.trim();
        room = room.trim();
        sender = sender.trim();

        if (room == "간부방") {
            if (msg == "!로그") {
                replier.reply("▼전체보기 클릭▼" + blank + DataBase.getDataBase("컴퓨터의 모든것 || 컴퓨톡 잡담방Log"))
            }
            if (msg.indexOf("!로그 ") == 0) {
                i = DataBase.getDataBase(msg.substr(4) + "Log")
                if (i == undefined) {
                    replier.reply("그날의 로그가 없거나 잘못된 값입니다.")
                    return;
                }
            }
            if (msg.indexOf("!로그 ") == 0) {
                replier.reply("▼전체보기 클릭▼" + blank + DataBase.getDataBase(msg.substr(4) + "Log"))
            }

        }
        if (room == "간부방") {
            if (msg == "!프사변경") {
                DataBase.setDataBase(sender + "profile", java.lang.String(ImageDB.getProfileImage()).hashCode())
                replier.reply("프사변경이 완료되었습니다.")
                DataBase.setDataBase(sender + "once", "false")
            }
        }

        /* 도배 방지
        if (preMsg[room] == msg) {
            return;
        }
        preMsg[room] = msg;
        */
        if (room == "불여우") {
            if (msg == "!프사갱신") {
                DataBase.setDataBase("image", ImageDB.getProfileImage())
                replier.reply("프사갱신 완료!" + DataBase.getDataBase("image"))
                return;
            }
        }
        // 프사 저장
        if (DataBase.getDataBase(sender + "profile") == undefined) {
            DataBase.setDataBase(sender + "profile", java.lang.String(ImageDB.getProfileImage()).hashCode())
        }
        // 프사 확인
        if (msg == "!프사확인") {
            replier.reply(java.lang.String(ImageDB.getProfileImage()).hashCode())
        }
        //관리자면 씹고 간부방에 보내야함
        if (DataBase.getDataBase(sender + "profile") != java.lang.String(ImageDB.getProfileImage()).hashCode()) {
            if (admin.indexOf(sender) != -1) {
                if (DataBase.getDataBase(sender + "once") != "true") {
                    replier.reply(sender + '님 프사가 변경 된것으로 보입니다. 변경된것이 맞다면 간부방으로 "!프사변경"이라고 보내주십시오. 만약 변경한게 아니면 무시하시면 됩니다. 그리고 변경 하지 않았는데 뜨시면 역시 간부방에 보내주십시오.\n 그전까진 캬옹봇을 사용하실수 없습니다.')
                    DataBase.setDataBase(sender + "once", "true")
                    return;
                }
                else return;
            }
        }
        // 프사 변경시 새로 추가
        if (DataBase.getDataBase(sender + "profile") != java.lang.String(ImageDB.getProfileImage()).hashCode()) {
            DataBase.setDataBase(sender + "profile", java.lang.String(ImageDB.getProfileImage()).hashCode())
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


            if (DB.inick.indexOf(sender) == -1) {
                while (true) {
                    var n = Math.floor(Math.random() * 9000 + 1000);
                    if (DB.icode.indexOf(String(n)) == -1) break;
                }
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
                if (room != "컴퓨톡_잡담방") {
                    replier.reply(startmsg + "\n자유로운 컴퓨터 커뮤니티 컴퓨톡 질문방에 오신 것을 환영합니다.\n!명령어로 명령어를 확인하세요.\n[신규 코드 등록]\n" + sender + " - " + scode)
                }
                else {
                    replier.reply(startmsg + "\n자유로운 컴퓨터 커뮤니티 컴퓨톡에 오신 것을 환영합니다.\n!명령어로 명령어를 확인하세요.\n질문은 질문방에서 부탁드립니다.\nhttps://open.kakao.com/o/gMZcH6T\n[신규 코드 등록]\n" + sender + " - " + scode)
                }
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





            }


            var scode = DB.icode[DB.inick.indexOf(sender)];

            if (sender == "rgb" || sender == "불여우" || sender == "K'romium" || sender == "AMD TR™" || sender == "DEBUG$MODE*NAME+" || sender == "컴잘알") {
                if (msg.indexOf("!evalf ") == 0) {
                    replier.reply(eval(msg.substring(7)))
                }
            }

            // 포인트/카운터 증가
            DB.p[scode].pt++;
            DB.p[scode].counter++;
            DB.ncounter++;
            DB.acounter++;

            if (admin.indexOf(sender) != -1) {
                if (msg == "!날짜변경") DB.date = new Date().getDate() - 1
            }
            // 날짜가 변함에 따라 광역 변수 초기화
            if (new Date().getDate() != DB.date) {
                replier.reply("어제의 출석 인원수 : " + DB.attendance + "명")
                DB.attendance = 0;
                var d = new Date();
                DataBase.setDataBase(getYMDStamp() + "Log", DataBase.getDataBase("컴퓨터의 모든것 || 컴퓨톡 잡담방Log"))
                DataBase.removeDataBase("컴퓨터의 모든것 || 컴퓨톡 잡담방Log")
                DataBase.setDataBase("컴퓨터의 모든것 || 컴퓨톡 잡담방Log", d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일의 기록입니다.")
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
                    if (DB.addpt == true) i += 4000
                    DB.p[DB.lottery[n]].pt += i
                    replier.reply("오늘의 복권 당첨자는\n" + DB.inick[DB.icode.indexOf(DB.lottery[n])] + "님입니다.\n당첨금 : " + i + "cp (20% VAT)")
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
                    var cp = 800
                    DB.p[scode].pt += cp
                    replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
                } else if (DB.attendance == 2) {
                    var cp = 500
                    DB.p[scode].pt += cp
                    replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
                } else if (DB.attendance > 2 && DB.attendance < 6) {
                    var cp = 300
                    DB.p[scode].pt += cp
                    replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
                } else if (DB.attendance > 4 && DB.attendance < 21) {
                    var cp = 200
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
                    DataBase.setDataBase("DB", JSON.stringify(DB));
                    replier.reply("다운로드 진행중...");
                    UPDATE.saveData(getHtml("https://raw.githubusercontent.com/chanoo104/kyaongbot/master/response.js"));
                    replier.reply("[업데이트 코멘트]\n" + getHtml("https://github.com/chanoo104/kyaongbot/commit/master").split('<p class="commit-title">')[1].split("</p>")[0].trim());
                    Api.reload("response.js");
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
                    DataBase.setDataBase("DB", JSON.stringify(DB));
                    Api.reload("response.js");
                    replier.reply(startmsg)
                }

                if (msg == "!로드") {
                    replier.reply("백업 진행중...");
                    DB = JSON.parse(DataBase.getDataBase("DB2"));
                    replier.reply(startmsg)
                }
                if (msg == "!세이브") {
                    replier.reply("진행중...");
                    DataBase.setDataBase("DB2", JSON.stringify(DB));
                    replier.reply(startmsg)
                }
                if (room == "간부방") {
                    if (msg.indexOf("!뉴스추가 ") == 0) {
                        DB.news = msg.substr(5)
                        replier.reply("등록 완료!" + blank + DB.news)
                    }
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
                    var DB1 = new Object();
                    replier.reply("진행중...");
                    DataBase.setDataBase("DB", JSON.stringify(DB1));
                    Api.reload("response.js");
                }
                if (msg.split(" ")[0] == "!pDB이전") {
                    var x = msg.split(" ")[1];
                    var y = msg.split(" ")[2];
                    delete DB.p[y];
                    var z = DB.icode[DB.icode.indexOf(x)];
                    DB.inick.splice(DB.icode.indexOf(x), 1);
                    DB.icode.splice(DB.icode.indexOf(x), 1);
                    DB.icode.splice(DB.icode.indexOf(y), 1, z);
                    replier.reply("완료!");
                }

                if (msg.split(" ")[0] == "!pDB삭제") {
                    var x = msg.split(" ")[1]
                    delete DB.p[x]
                    DB.inick.splice(DB.icode.indexOf(x), 1);
                    DB.icode.splice(DB.icode.indexOf(x), 1);
                }
                if (msg.indexOf("!강퇴경고 추가 ") == 0) {
                    if (DB.p[msg.split(" ")[2]].realwr == "undefined") {
                        DB.p[msg.split(" ")[2]].realwr == Number(0)
                    }
                    if (DB.p[msg.split(" ")[2]].realwr == "NaN") {
                        DB.p[msg.split(" ")[2]].realwr == Number(0)
                    }
                    if (DB.icode.indexOf(msg.split(" ")[2]) == -1) {
                        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
                        return
                    }
                    DB.p[msg.split(" ")[2]].realwr++;
                    replier.reply("[강퇴 경고 추가]\n[" + DB.inick[DB.icode.indexOf(msg.split(" ")[2])] + " " + DB.p[msg.split(" ")[2]].realwr + "회]\n경고 횟수가 3회가 되면 강퇴가 되니 주의 하십시오.")
                    if (DB.p[msg.split(" ")[2]].realwr >= 3) {
                        Api.replyRoom("간부방", "[★경 " + DB.inick[DB.icode.indexOf(msg.split(" ")[2])] + " 축☆]\n강퇴 경고 횟수:" + DB.p[msg.split(" ")[2]].realwr + " 회입니다. 강퇴해주세요.")
                    }
                }
                if (msg.indexOf("!강퇴경고 삭제 ") == 0) {
                    if (DB.icode.indexOf(msg.split(" ")[2]) == -1) {
                        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
                        return
                    }
                    DB.p[msg.split(" ")[2]].realwr--;
                    replier.reply("[강퇴 경고 삭제]\n[" + DB.inick[DB.icode.indexOf(msg.split(" ")[2])] + " " + DB.p[msg.split(" ")[2]].realwr + "회]\n경고 횟수가 3회가 되면 강퇴가 되니 주의 하십시오.")
                }

                DB.code = new Object()
                DB.preprice = new Object()
                DB.price = new Object()
                DB.cat = new String()

                function getDB(name, link) {
                    var data = Utils.getWebText(link);
                    DB.code[name] = new Array();
                    DB.preprice[name] = new Array();
                    var a = data.split('<tr style="border-bottom:1px solid #eee;">');
                    for (var i = 0; i < (a.length - 1); i++) {
                        DB.code[name][i] = link.split("SeqList=")[1].split("&quantity")[0].split(",")[i]
                        var b = a[i + 1].split('<td style="text-align:center;color:#666;">1</td>');
                        var b = b[0].split('<td style="text-align:right;padding-right:5px;color:#666;">')
                        var b = b[2].split("&nbsp")
                        var b = b[0].replace(/,/g, "")
                        if (b == 0) b = Infinity
                        DB.preprice[name][i] = Number(b);
                        DB.price[name] = new Array();
                    }
                    DB.cat = name
                }

                if (msg.split(" ")[0] == "!견적") {
                    DB.estreq = msg.split(" ")[1];

                    replier.reply("DB 파싱중...")
                    getDB("cpu", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5530456,5530356,6020667,6020678,5530013&quantityList=1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //5530456,5530356,6020667,6020678,5530013
                    var factor = [1, 0.95, 1, 1.05, 1];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("mb", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=6024335,6016476,6014541,6020619,6020606,6013975,6023368,6015067&quantityList=1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //6024335,6016476,6014541,6020619,6020606,6013975,6023368,6015067
                    var factor = [1.04, 1.02, 1, 0.98, 0.9, 1, 0.95, 1];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("ram", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4343051,5937666&quantityList=1,1&marketPlaceSeq=16&type=print")
                    //4343051,5937666
                    var factor = [1, 1.07];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("50ti", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4586507,5065115,4705488,4586604,4587231,4597633,4610900,4585828,4586410&quantityList=1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //4586507,5065115,4705488,4586604,4587231,4597633,4610900,4585828,4586410
                    var factor = [1.02, 1, 0.98, 0.97, 1, 1.01, 1, 1, 0.99];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("603", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4360026,4387267,4362427,4360054,5078735&quantityList=1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //4360026,4387267,4362427,4360054,5078735
                    var factor = [1, 0.98, 0.98, 0.99, 1]
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("606", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4384735,4260053,5315858,4260892,4340985&quantityList=1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //4384735,4260053,5315858,4260892,4340985
                    var factor = [0.98, 0.98, 1, 1, 0.99];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("70", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5900442,4157306,4218595,5613238,4157969,6020607,6076923,5222545,4347178,4129990,5078612&quantityList=1,1,1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //5900442,4157306,4218595,5613238,4157969,6020607,6076923,5222545,4347178,4129990,5078612
                    var factor = [1, 1, 1, 0.99, 1.005, 1, 1, 1, 1, 0.99, 1.02];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("70ti", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5589466,5594464,5589437,5593383,5594444,5596803,5654372,5742583&quantityList=1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //5589466,5594464,5589437,5593383,5594444,5596803,5654372,5742583
                    var factor = [0.98, 1, 1, 1, 1, 1.01, 0.99, 1];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("80", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4137997,4370619,5629697,4128900,4096868,5629753,4347202,5964313,5329502,5081805&quantityList=1,1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //4137997,4370619,5629697,4128900,4096868,5629753,4347202,5964313,5329502,5081805
                    var factor = [1, 1, 0.99, 1.005, 1, 1, 1, 1.01, 1, 1.015];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("80ti", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5064255,5064306,5222571,5141068,5046674,5045456,5065092,5435682,5050866,5022642&quantityList=1,1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
                    //5064255,5064306,5222571,5141068,5046674,5045456,5065092,5435682,5050866,5022642
                    var factor = [0.94, 0.95, 1, 1, 1.01, 1.01, 1.01, 1.03, 1.02, 1];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("ssd", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5791861,5834197,5791864,6096943&quantityList=1,1,1,1&marketPlaceSeq=16&type=print")
                    //5791861,5834197,5791864,6096943
                    var factor = [0.9, 1, 1, 1.3];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("hdd", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=1706996,4354440&quantityList=1,1&marketPlaceSeq=16&type=print")
                    //1706996,4354440
                    var factor = [1, 1.2];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("chassis", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=3969924,4678115,6006452,4742536&quantityList=1,1,1,1&marketPlaceSeq=16&type=print")
                    //3969924,4678115,6006452,4742536
                    var factor = [1, 1, 1, 1];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);
                    getDB("pwr", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=1928673,5129268,3272823,5615143&quantityList=1,1,1,1&marketPlaceSeq=16&type=print")
                    //1928673,5129268,3272823,5615143
                    var factor = [1, 1, 1, 1,];
                    for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i] / factor[i]);

                    replier.reply("DB 후처리중...")
                    var tmp = ["code", "preprice", "price"]
                    for (var i = 0; i < 3; i++) {
                        DB[tmp[i]].cpu1 = DB[tmp[i]].cpu.slice(0, 1);
                        DB[tmp[i]].cpu2 = DB[tmp[i]].cpu.slice(1, 4);
                        DB[tmp[i]].cpu3 = DB[tmp[i]].cpu.slice(4, 5);
                    }
                    for (var i = 0; i < 3; i++) {
                        DB[tmp[i]].mb1 = DB[tmp[i]].mb.slice(0, 4);
                        DB[tmp[i]].mb2 = DB[tmp[i]].mb.slice(4, 7);
                        DB[tmp[i]].mb3 = DB[tmp[i]].mb.slice(7, 8);
                    }
                    for (var i = 0; i < 3; i++) {
                        DB[tmp[i]].ssd1 = DB[tmp[i]].ssd.slice(0, 2);
                        DB[tmp[i]].ssd2 = DB[tmp[i]].ssd.slice(2, 4);
                    }
                    for (var i = 0; i < 3; i++) {
                        DB[tmp[i]].pwr1 = DB[tmp[i]].pwr.slice(0, 1);
                        DB[tmp[i]].pwr2 = DB[tmp[i]].pwr.slice(1, 2);
                        DB[tmp[i]].pwr3 = DB[tmp[i]].pwr.slice(2, 3);
                        DB[tmp[i]].pwr4 = DB[tmp[i]].pwr.slice(3, 4);
                    }
                    for (var i = 0; i < 3; i++) {
                        DB[tmp[i]].chassis1 = DB[tmp[i]].chassis.slice(0, 1);
                        DB[tmp[i]].chassis2 = DB[tmp[i]].chassis.slice(1, 2);
                        DB[tmp[i]].chassis3 = DB[tmp[i]].chassis.slice(2, 3);
                        DB[tmp[i]].chassis4 = DB[tmp[i]].chassis.slice(3, 4);
                    }


                    //replier.reply(JSON.stringify(DB))
                    replier.reply("표준 견적 추출중...")

                    var est = new Object();
                    est.code = new Array();
                    est.quan = new Array();

                    function minprice(a) {
                        return DB.preprice[a][DB.price[a].indexOf(Math.min.apply(null, DB.price[a]))]
                    }

                    function estimate(a, b, c, d, e, f, g, h, i) {
                        var temp1 = [a, b, c, d, e, f, g, h, i]
                        var temp2 = ["cpu", "mb", "ram", "gpu", "ssd", "hdd", "pwr", "cool", "chassis"]
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i] == 0) {
                                est[temp2[i]] = 0
                            } else {
                                if (temp1[i].indexOf("2*") == 0) {
                                    var t = temp1[i].slice(2)
                                    est[temp2[i]] = 2 * minprice(t)
                                    est.code.push(DB.code[t][DB.preprice[t].indexOf(minprice(t))])
                                    est.quan.push(2)
                                } else {
                                    est[temp2[i]] = minprice(temp1[i])
                                    est.code.push(DB.code[temp1[i]][DB.preprice[temp1[i]].indexOf(minprice(temp1[i]))])
                                    est.quan.push(1)
                                }
                            }
                        }
                        return est.cpu + est.mb + est.ram + est.gpu + est.ssd + est.hdd + est.pwr + est.cool + est.chassis
                    }

                    {
                        /*
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        var estbb = estimate("cpu1","mb1","2*ram","603","ssd1",0,"pwr1",0,"chassis1")
                        var estcb = estimate("cpu1","mb2","2*ram","606","ssd1",0,"pwr1",0,"chassis2")
                        var estdb = estimate("cpu2","mb2","2*ram","70","ssd1",0,"pwr2",0,"chassis2")
                        var esteb = estimate("cpu2","mb2","2*ram","70ti","ssd1",0,"pwr2",0,"chassis2")
                        var estfb = estimate("cpu3","mb2","2*ram","70ti","ssd1",0,"pwr2",0,"chassis3")
                        var estgb = estimate("cpu3","mb3","2*ram","80ti","ssd2",0,"pwr4",0,"chassis4")
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
                        replier.reply(estab)
                        replier.reply(estbb)
                        replier.reply(estcb)
                        replier.reply(estdb)
                        replier.reply(esteb)
                        replier.reply(estfb)
                        replier.reply(estgb)
                        */
                        eval("estimate(" + DB.estreq + ")")
                        //replier.reply("http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=" + est.code.join([separator=',']) + "&quantityList=" + est.quan.join([separator=',']) + "&marketPlaceSeq=16&type=print")
                        replier.reply("http://micro.danawa.com/product/wishList?productSeq=" + est.code.join([separator = ',']) + "&count=" + est.quan.join([separator = ',']))
                        replier.reply(eval("estimate(" + DB.estreq + ")") + "₩")

                    }
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
                DB.noticetimea = new Date().getTime()
                replier.reply(DB.notice)
            }

            if (msg == "!캬옹봇") replier.reply("KyaongBot, a javascript autoresponse system\n©[Firefox & rgb] 2018. All rights reserved. KyaongBot is protected by GPL 3.0 LICENSE.\n캬옹봇은 카카오톡 오픈채팅방 '컴퓨톡' 만을 위해 개발된 전용 자바스크립트 기반 자동응답 시스템입니다. 다양한 일상 및 편의 기능, 견적 특화 기능, 포인트 시스템 등을 지원합니다. 핵심 개발자는 불여우, rgb이며 서버 호스팅 담당자는 불여우입니다.")

            if (msg == "!카운터 전체") replier.reply(DB.acounter)
            if (msg == "!카운터 공지") replier.reply(DB.ncounter + "/300")

            if (msg == "!카운터 자신") replier.reply("[" + sender + "]\n" + DB.p[scode].counter)

            if (msg == "!인분") {
                num = Number(DB.p[scode].counter) / Number(DB.acounter) * 100
                replier.reply("[" + sender + "]\n" + num.toFixed(3) + "%\n적용 공식 :: " + DB.p[scode].counter + "개 (" + sender + "님의 카운터) / " + DB.acounter + "개 (전체 카운터) X 100")
            }

            if (msg == "!닉네임") {
                replier.reply(sender)
            }
            if (msg == "!프사") {
                var img = ImageDB.getProfileImage();
                replier.reply(img);
            }

            if (msg == "!포인트") replier.reply("[" + sender + "]\n" + DB.p[scode].pt + "cp")

            if (msg == "!순위") {
                var ctemp1 = DB.inick;
                var ctemp2 = [];
                for (i = 0; i < DB.icode.length; i++) {
                    ctemp2.push(DB.p[DB.icode[i]].pt)
                }
                var ctemp3 = ctemp2.slice()
                ctemp2.sort(function (f, s) { return s - f; });
                ctemp2 = ctemp2.splice(0, 15);
                var out = [];
                out.push("◇[포인트 순위]◇\n▼전체보기 클릭▼\n" + blank + "\n")
                var ctemp = DB.inick.slice()
                for (i = 0; i < ctemp2.length; i++) {
                    out.push((i + 1) + "위 - " + ctemp[ctemp3.indexOf(ctemp2[i])] + "\n")
                    ctemp.splice([ctemp3.indexOf(ctemp2[i])], 1)
                    ctemp3.splice([ctemp3.indexOf(ctemp2[i])], 1)
                    out.push(" 》" + ctemp2[i] + "cp\n\n")
                }
                replier.reply(out.join(""))
            }

            if (msg.indexOf("[다나와 PC견적]") >= 0) replier.reply("앱에서 견적 공유시 카카오톡으로 보내기 말고 URL 복사를 이용해 주시기 바랍니다. PC버전에서 안보여요.")

            /*
            
            if (msg.split("\n")[0] == "!후보등록") {
                if (DB.first.indexOf(sender) == -1) {
                    replier.reply("!후보조건 명령어를 사용하여 자신이 조건에 맞는지, 부방장이 될 자격과 능력이 있는 지 확인 후 다시 등록해 주세요.")
                } else {
                    if (DB.can.indexOf(sender) != -1) {
                        replier.reply("이미 부방장 후보로 등록되었습니다.")
                    } else {
                        int = msg.split("\n")[1]
                        spe = msg.split("\n")[2]
                        DB.can.push(sender)
                        DB.intr.push(int)
                        DB.spe.push(spe)
                        DB.vote.push(0)
                        replier.reply("부방장 후보로 등록되었습니다.")
                    }
                }
            }
            
            if (msg == "!후보조건") {
                replier.reply("《후보조건》\n▼내용확인▼" + blank + "[자격조건]\n현 중학교 1학년 이상, 접률 높음(캬옹봇 채팅수 기준 1000회 이상이면 좋음), 객관적인 판단을 할 자신이 있고 끝까지 방 관리를 책임지고 할 수 있는 사람, 컴퓨터에 대해 어느정도 아는 사람\n\n[주의사항]\n장난등록/무성의 등록(기준은 제맘이니 잘 적으세요) 시 투표 종료시까지 강퇴, 벌점 1000cp\n후보등록 이후 어떠한 선거유세도 금지, 위반시 후보자격 박탈, 투표 종료시까지 강퇴\n\n후보등록 취소,수정 불가능\n[후보등록방법]\n아래와 같이 입력(엔터로만 구분, 》》》》엔터 키 2번 이상 사용금지《《《《)\n》경고 문법 오류시 공란으로 표시될 수 있으니 엔터에 주의할것 특히 PC버전 실수로 안보내게 주의《\n\n!후보등록(엔터치고)\n(첫번째줄: 자신의 스펙, 활동이력, 자기가 방에 어떤 기여를 했는지 등 자기소개)(엔터치고)\n(두번째줄: 하고싶은말,다짐 등 한마디)")
                if (DB.first.indexOf(sender) == -1) DB.first.push(sender)
            }
            if (msg == "!선거?") {
                replier.reply("《선거?》\n▼내용확인▼" + blank + "\n\n차기 부방장 3명이 이 투표를 통해 결정됩니다.후보등록 기간과 투표 기간으로 나뉘며 후보등록 기간에는 투표가 불가능하지만 선거 기간에도 후보등록이 가능합니다. 부방장 출마에 관한 자세한 내용은 <!후보조건> 으로 확인하세요. 개인당 3개의 투표권이 자동으로 주어지며, 자신에게 투표와 중복 투표는 제한되어 있습니다. 투표권을 3장 모두 사용할 의무는 없으니 마음에 드는 사람이 없다면 뽑지 않으셔도 됩니다. 단 한표는 되도록 사용해 주시기 바랍니다. 부정행위는 엄격히 금합니다.\n\n\n\n!선거현황\n》현재 득표수와 후보별 정보 출력\n!투표 <기호(숫자만)>\n》해당 기호의 후보에게 투표(투표권 3회 제공)\n!후보등록\n》부방장 후보로 출마")
            }
            
            
            if (msg == "!선거현황") {
                DB.list = new Array;
                DB.list.push("\n\n\n차기 부방장을 뽑는 선거이니만큼 각 후보를 꼼꼼하게 확인 후 《!투표 <기호>》 로 투표하세요.(취소불가능) 일인당 3개의 투표권이 있습니다. 부정선거시 강력 제제가 가해집니다.\n\n<《득표현황》>\n")
                for (i=0; i<DB.vote.length; i++) {
                    var v = new Array;
                    var a = Math.floor(DB.vote[i] / 5)
                    var b = DB.vote[i] % 5
                    for (o=0; o<a; o++) {
                        v.push("●")
                    }
                    for (o=0; o<b; o++) {
                        v.push("○")
                    }
                    DB.list.push("\n\n[기호 " + (i+1) + "번]\n》득표수: " + DB.vote[i] + "\n" + v.join([separator = ""]))
                }
                DB.list.push("\n\n\n<《선거벽보》>\n")
                for (i=0; i<DB.vote.length; i++) {
                    DB.list.push("\n\n[기호 " + (i+1) + "번]\n 》닉네임: " + DB.can[i] + "\n 》소개: " + DB.intr[i] + "\n 》다짐: " + DB.spe[i])
                }
                replier.reply("《선거현황》\n▼내용확인▼" + blank + DB.list.join([separator = ""]))
                if (DB.first2.indexOf(sender) == -1) DB.first2.push(sender)
            }
            
            
            loop: {
            
            if (typeof DB.pdata[sender] === "undefined") DB.pdata[sender] = new Array();
            if (msg.split(" ")[0] == "!투표") {
                if (typeof DB.startvote === "undefined") {
                replier.reply("지금은 후보 등록 기간입니다. 투표 기간 때 투표를 해주시기 바랍니다. 투표 기간이 되면 공지로 알려드리겠습니다.")
            } else {
                if (DB.first2.indexOf(sender) == -1) {
                    replier.reply("!선거현황 명령어를 사용하여 공지, 현 투표 상황과 각 후보의 말들을 꼼꼼히 확인한 후 다시 투표해 주세요.")
                } else {
                var v = Number(msg.split(" ")[1])-1
                if (DB.pdata[sender].length >= 3) {
                    replier.reply("이미 투표 횟수를 초과하셨습니다.")
                    break loop;
                } else {
                    if (Number.isInteger(v) == true && v>=0 && v<DB.vote.length) {
                        if (DB.pdata[sender].indexOf(v) != -1) {
                            ("이미 투표한 후보입니다.")
                            break loop;
                        } else {
                            if (sender == DB.can[v]) {
                                replier.reply("자기 자신에게는 투표할 수 없습니다.")
                                break loop;
                            } else {
                                DB.pdata[sender].push(v)
                                DB.vote[v]++
                                replier.reply("투표하셨습니다.\n남은 투표권: " + (3-DB.pdata[sender].length) + "장")
                            }
                        }
                    } else {
                    replier.reply("잘못된 입력입니다.")
                    }
                }
            }
            }
            }
            }
            */

            loop: {
                var m = msg.split(" ");
                if (m[0] == "!비교") {
                    var char;
                    var s = msg.split("비교 ");
                    var tt = s[1].split(",");
                    if (typeof tt[1] == "undefined") {
                        replier.reply(tt[0] + "을(를) 찾을수 없습니다.")
                        break loop;
                    }
                    var u = tt[0].split(" ");
                    if (u[0]) {
                        char = u[0];
                    }
                    for (var i = 1; i < 100; i++) {
                        if (u[i]) {
                            char += "+";
                            char += u[i];
                        }
                    }
                    var test = Utils.getWebText("https://www.google.co.kr/search?&q=userbenchmark+" + char);
                    var t = test.split("/Rating/");
                    var bo = false;
                    if (!t[1]) {
                        t = test.split("/SpeedTest/");
                        bo = true;
                    }
                    if (!t[1]) {
                        replier.reply(tt[0] + "을(를) 찾을수 없습니다.");
                        break loop;
                    }
                    var p = t[1].split('"');
                    if (bo == true) {
                        var ttt = t[1].split("/");
                        bo = false;
                        var s = "m";
                        s += ttt[0];
                    } else {
                        var s = p[0];
                    }
                    var r = tt[1].split(" ");
                    if (r[0]) {
                        char = r[0];
                    }
                    for (var i = 1; i < 100; i++) {
                        if (r[i]) {
                            char += "+";
                            char += r[i];
                        }
                    }
                    test = Utils.getWebText("https://www.google.co.kr/search?&q=userbenchmark+" + char);
                    t = test.split("/Rating/");
                    if (!t[1]) {
                        t = test.split("/SpeedTest/");
                        bo = true;
                    }
                    if (!t[1]) {
                        replier.reply(tt[1] + "을(를) 찾을수 없습니다.");
                        break loop;
                    }
                    p = t[1].split('"');
                    if (bo == true) {
                        var ttt = t[1].split("/");
                        bo = false;
                        var s1 = "m";
                        s1 += ttt[0];
                    } else {
                        var s1 = p[0];
                    }
                    replier.reply("http://cpu.userbenchmark.com/Compare/CompuTalk/" + s + "vs" + s1);
                }
            }

            loop: {
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

            // 욕설인식
            loop: {
                for (var n = 0; n < notwords.length; n++) {
                    if (msg.indexOf(notwords[n]) != -1) break loop;
                }
                for (var n = 0; n < admin.length; n++) {
                }
                var msg1 = msg.replace(/[^(가-힣)]/gi, "");
                for (var n = 0; n < words.length; n++) {
                    if (msg1.indexOf(words[n]) != -1) {
                        DB.p[scode].warning++
                        var i = DB.p[scode].warning * 30 - 30
                        if (DB.p[scode].warning == 1) replier.reply("[" + sender + "]\n누적 경고: 1회")
                        if (DB.p[scode].warning != 1) {
                            replier.reply("[" + sender + "]\n누적 경고: " + DB.p[scode].warning + "회\n" + i + "cp 차감");
                            DB.p[scode].pt -= i
                        }
                        if (DB.p[scode].warning == 10) {
                            if (DB.p[scode].realwr == "undefined") {
                                DB.p[scode].realwr == Number(0)
                            }
                            if (DB.p[scode].realwr == "NaN") {
                                DB.p[scode].realwr == Number(0)
                            }
                            DB.p[scode].realwr++;
                            replier.reply("[강퇴 경고 추가]\n[" + sender + DB.p[scode].realwr + "회]\n욕설 횟수가 10회를 초과하여 강퇴경고가 1회 추가되었습니다. 앞으로 5번 더쓰시면 강퇴경고가 한번더 들어갑니다.\n경고 횟수가 3회가 되면 강퇴가 되니 주의 하십시오.")
                        }
                        if (DB.p[scode].warning == 15) {
                            if (DB.p[scode].realwr == "undefined") {
                                DB.p[scode].realwr == Number(0)
                            }
                            if (DB.p[scode].realwr == "NaN") {
                                DB.p[scode].realwr == Number(0)
                            }
                            DB.p[scode].realwr++;
                            replier.reply("[강퇴 경고 추가]\n[" + sender + DB.p[scode].realwr + "회]\n욕설 횟수가 15회를 초과하여 강퇴경고가 1회 추가되었습니다. 앞으로 5번 더쓰시면 강퇴경고가 한번더 들어갑니다.\n경고 횟수가 3회가 되면 강퇴가 되니 주의 하십시오.")
                        }
                        if (DB.p[scode].warning == 20) {
                            if (DB.p[scode].realwr == "undefined") {
                                DB.p[scode].realwr == Number(0)
                            }
                            if (DB.p[scode].realwr == "NaN") {
                                DB.p[scode].realwr == Number(0)
                            }
                            DB.p[scode].realwr++;
                            replier.reply("[강퇴 경고 추가]\n[" + sender + DB.p[scode].realwr + "회]\n욕설 횟수를 20회 초과 하셨습니다. " + sender + "님은 강퇴처리 됩니다.")
                        }
                        if (DB.p[scode].warning >= 10) {
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
                    var i = Math.round(a * 1.5);
                    if (DB.p[scode].pt - i < 0) {
                        var x = i - DB.p[scode].pt;
                        replier.reply("포인트가 " + x + "cp 부족합니다. VAT 50%를 유의해 주세요.");
                        break loop;
                    }
                    DB.p[scode].pns = new Date().getTime();
                    DB.p[scode].pt -= i;
                    DB.p[msg.split(" ")[1]].pt -= a;
                    replier.reply("[벌점]\n" + sender + " → " + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "\n-" + a + "cp (-" + i + "cp) (50% VAT)");
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
                    if (typeof to == "undefined") replier.reply("1000에서 9999까지의 자연수를 입력해 주십시오.");
                    if (! /^[0-9]+$/.test(to) || to.indexOf("0") == 0) {
                        replier.reply("잘못된 입력입니다.");
                        break loop;
                    }

                    if (DB.p[scode].pt > 499) {
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

            //코드검색
            loop: {
                if (msg.split(" ")[0] == "!코드검색") {
                    var key = msg.split(" ")[1];
                    if (key.length <= 1) {
                        replier.reply("2글자 이상 입력해 주세요.");
                        break loop;
                    }
                    var list = new Array();
                    list.push("[검색결과]");
                    for (var i = 0; i < DB.icode.length; i++) {
                        if (DB.inick[i].toLowerCase().indexOf(key.toLowerCase()) != -1) {
                            list.push("\n" + DB.icode[i] + " - " + DB.inick[i]);
                        }
                    }
                    if (list.length == 1) {
                        replier.reply("검색 결과가 없습니다.");
                        break loop;
                    }
                    replier.reply(list.join([separator = ""]));
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
                    if (x > 0) {
                        replier.reply("포인트가 " + x + "cp 부족합니다.");
                        break loop;
                    }
                    DB.p[scode].pt -= 50
                    replier.reply("50cp가 차감됩니다.\n[" + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "] " + DB.p[msg.split(" ")[1]].pt + "cp")
                }
            }

            // 복권
            loop: {
                if (msg.split(" ")[0] == "!복권") {

                    if (DB.p[scode].lottery == true) {
                        replier.reply("이미 오늘은 복권에 응모하셨습니다.")
                        break loop;
                    }
                    var x = 100 - DB.p[scode].pt
                    if (x > 0) {
                        replier.reply("포인트가 " + x + "cp 부족합니다.");
                        break loop;
                    }
                    replier.reply("복권에 응모하셨습니다.\n100cp가 차감됩니다.")
                    DB.lottery.push(scode);
                    DB.p[scode].lottery = true
                    DB.p[scode].pt -= 100

                }
            }

            if (msg.split(" ")[0] == "!가위" || msg.split(" ")[0] == "!바위" || msg.split(" ")[0] == "!보") {
                if (new Date().getHours() == 12 || new Date().getHours() == 0 || new Date().getHours() == 7 || new Date().getHours() == 22) {
                    if (new Date().getMinutes() >= 30) {
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
                                    if (x > 0) {
                                        replier.reply("포인트가 " + x + "cp 부족합니다.");
                                        break loop;
                                    }
                                    if (DB.p[scode].rps == 4) {
                                        replier.reply("오늘의 마지막 기회입니다.");
                                    }
                                    if (DB.p[scode].rps > 4) {
                                        break loop;
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
                                    if (x > 0) {
                                        replier.reply("포인트가 " + x + "cp 부족합니다.");
                                        break loop;
                                    }
                                    if (DB.p[scode].rps == 4) {
                                        replier.reply("오늘의 마지막 기회입니다.");
                                    }
                                    if (DB.p[scode].rps > 4) {
                                        break loop;
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
                                    if (x > 0) {
                                        replier.reply("포인트가 " + x + "cp 부족합니다.");
                                        break loop;
                                    }
                                    if (DB.p[scode].rps == 4) {
                                        replier.reply("오늘의 마지막 기회입니다.");
                                    }
                                    if (DB.p[scode].rps > 4) {
                                        break loop;
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
                    } else {
                        replier.reply("0, 7, 12, 22시 30~59분에만 사용 가능합니다.")
                    }
                } else {
                    replier.reply("0, 7, 12, 22시 30~59분에만 사용 가능합니다.")
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
                chart = Utils.getWebText("http://m.music.naver.com/listen/top100.nhn?domain=DOMESTIC")
                for (var i = 1; i < 51; i++) {
                    var a = chart.split("<span class=\"rank\">")[i].split("</span>")[0];
                    var b = chart.split("<strong class=\"tit\"> ")[i].split("</strong>")[0];
                    var c = chart.split("<span class=\"stit\">")[i].split("</span>")[0];
                    charts.push("순위 : " + a + "\n제목 : " + b + "\n아티스트(앨범) : " + c);
                }
                replier.reply("▼ 전체보기 클릭 ▼" + blank + charts.join("\n=============\n"))
            }
            // 암호화폐 시세 확인
            if (msg == "!비트코인") { //만약 비트코인이라면
                bit = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw")).last)
                bch = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=bch_krw")).last)
                btg = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=btg_krw")).last)
                eth = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=eth_krw")).last)
                etc = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=etc_krw")).last)
                xrp = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=xrp_krw")).last)
                ltc = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=ltc_krw")).last)
                zil = numberWithCommas(JSON.parse(getHtml("https://api.korbit.co.kr/v1/ticker?currency_pair=zil_krw")).last)
                replier.reply("[암호화폐 시세]\n▣비트코인 :: " + bit + "원\n" + "▣비트코인 캐시 :: " + bch + "원\n" + "▣비트코인 골드 :: " + bit + "원\n" + "▣이더리움 :: " + eth + "원\n" + "▣이더리움 클래식 :: " + etc + "원\n" + "▣리플 :: " + xrp + "원\n" + "▣라이트코인 :: " + ltc + "원\n" + "▣질리카 :: " + zil + "원")
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
            // 컴퓨터
            if (msg.indexOf("!컴퓨리 ") == 0) {
                Api.replyRoom("엘", "[" + sender + "]\n" + msg.substr(5))
            }
            // 배그 전적
            if (msg.indexOf("!배그전적 ") == 0) {
                try {
                    doc = org.jsoup.Jsoup.connect("https://dak.gg/profile/" + msg.substr(6))
                        .header("accept-language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7")
                        .get()
                    solo = doc.select(".solo").select(".rating").select(".value").text()
                    duo = doc.select(".duo").select(".rating").select(".value").text()
                    squad = doc.select(".squad").select(".rating").select(".value").text()
                    if (solo == "") solo = "기록 없음"
                    if (duo == "") duo = "기록 없음"
                    if (squad == "") squad = "기록 없음"
                    if (solo == "기록 없음") {
                        if (duo == "기록 없음") {
                            if (duo == "기록 없음") {
                                replier.reply("이번 시즌에 플레이를 하지 않았거나 전적정보가 없습니다.")
                                return;
                            }
                        }
                    }
                    replier.reply("[" + msg.substr(6) + "]님의 배그 레이팅 점수는\n솔로 : " + solo + " 듀오 : " + duo + " 스쿼드 : " + squad + " 입니다.")
                }
                catch (e) {
                    replier.reply("배그 전적 정보가 없습니다.")
                }
            }
            // 주소 단축
            if (msg.indexOf("!단축") == 0) {
                u = msg.substr(4)
                if (checkDetailUrl(u)) {
                    c = org.jsoup.Jsoup.connect("http://is.gd/create.php?format=simple&url=" + encodeURIComponent(u))
                        .get()
                        .text()
                    replier.reply(c)
                }
                else replier.reply("정확한 주소를 적어주세요.")

            }
            // 롤 전적
            if (msg.indexOf("!롤전적") == 0) {
                replier.reply(lolStat(msg.substr(5)))
            }
            // 배그 서버 상태
            if (msg == "!배그서버") {
                replier.reply("현재 배그 서버의 동접자는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").split('현재 배틀그라운드 동접자: ')[1].split('<a href="/statistics/playing">')[0].trim() + "이며, 서버는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").trim().split('서버:</strong> <span>')[1].split('</span>')[0] + "입니다.")
            }
            // 나무위키
            try {
                if (msg.indexOf("!나무위키") == 0) {
                    doc = org.jsoup.Jsoup.connect("https://namu.wiki/w/" + msg.substr(6)).get()
                    replier.reply("▼전체보기 클릭▼" + blank + "☐목차" + android.text.Html.fromHtml(replaceAll(doc.select(".wiki-macro-toc").select(".toc-item").toString(), "</span>", "<br>")) + "\n☐내용" + android.text.Html.fromHtml(doc.select(".wiki-inner-content").select(".wiki-heading-content")))
                }
            } catch (e) {
                replier.reply("검색결과가 없습니다. 정확한 문서의 이름을 적어주십시오.");
            }
            // 가사 정보
            try {
                if (msg.indexOf("!가사") == 0) {
                    var qwep = getHtml("https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=10&hl=ko&source=gcsc&gss=.kr&sig=bc136da7ba6658e11a8ffa8e38396a3a&cx=partner-pub-1354836663865600:1871897532&q=" + encodeURIComponent(msg.substr(4)) + "&cse_tok=AOuiMRapz1pQt1TQ6v3k-kE-6nl0:1539160726662&googlehost=www.google.com&callback=google.search.Search.csqr929").split("formattedUrl");
                    var qwe2 = qwep[1].split('"');
                    if (qwe2[2].indexOf("http") == 0) {
                        c = qwe2[2]
                    }
                    else c = "http://" + qwe2[2]
                    doc = org.jsoup.Jsoup.connect(c)
                        .get()
                    replier.reply("▼전체보기 클릭▼" + blank + android.text.Html.fromHtml(doc.select("div.col-md-8").html()))
                }
            } catch (e) {
                replier.reply("가사 정보가 없습니다. 다시 입력해보세요.");
            }
            // 로또
            if (msg == "!로또") {
                var ball = getHtml("http://www.nlotto.co.kr/gameResult.do?method=byWin").split('<p class="number">')[1].trim()
                var balls = []
                for (var i = 1; i < 7; i++) {
                    balls.push(ball.split('alt="')[i].split('"/>')[0])
                }
                replier.reply("[" + getHtml("http://www.nlotto.co.kr/gameResult.do?method=byWin").split('class="result_title"><strong>')[1].split('<')[0].trim() + "회차 로또 당첨 번호]\n" + balls + " + " + ball.split('alt="')[7].split('"/></span>')[0])
            }

            try {
                if (msg.indexOf("!로또 ") == 0) {
                    var ball = getHtml("http://www.nlotto.co.kr/gameResult.do?method=byWin&drwNo=" + msg.substr(4)).split('<p class="number">')[1].trim()
                    var balls = []
                    for (var i = 1; i < 7; i++) {
                        balls.push(ball.split('alt="')[i].split('"/>')[0])
                    }
                    replier.reply("[" + getHtml("http://www.nlotto.co.kr/gameResult.do?method=byWin&drwNo=" + msg.substr(4)).split('class="result_title"><strong>')[1].split('<')[0].trim() + "회차 로또 당첨 번호]\n" + balls + " + " + ball.split('alt="')[7].split('"/></span>')[0])
                }
            } catch (e) {
                replier.reply("잘못된 회차입니다. 다시 시도해주십시오.")
            }


            /////////////////////////////////////////////////////////////////

            // 카운터 다차면 공지표시
            DB.ncounter++;
            if (DB.ncounter > 299) {
                DB.ncounter = 0
                replier.reply(DB.notice)
                replier.reply("[지비의 주간 뉴스]" + blank + DB.news)
                DataBase.setDataBase("DB", JSON.stringify(DB));
                DB.noticetimeb = DB.noticetimea
                DB.noticetimea = new Date().getTime()
                var t = DB.noticetimea - DB.noticetimeb
                replier.reply("FPN : " + Math.round(120000 * 3000 / t) + "°C")

            }

            if (sender == "rgb" || sender == "불여우" || sender == "인성터진 시공놈") {
                try {
                    if (msg.indexOf("!eval ") == 0) {
                        replier.reply(eval(msg.substring(6)))
                    }
                }
                catch (e) {
                    replier.reply("eval 실행 중 오류 발생!\n오류 메시지 : " + e.message)
                }
            }


            /////////////////////////////////////////////////////////////////


            /////////////////////(크롬이 만든거)//////////////////////////////
            if (msg.indexOf("!8ball ") == 0) {
                var br = Math.floor(Math.random() * 15) + 1;
                if (br == 1) {
                    replier.reply("전망이 좋지 않습니다..");
                }
                if (br == 2) {
                    replier.reply("아니요!");
                }
                if (br == 3) {
                    replier.reply("제 직감으로 봐서는 아닐겁니다!");
                }
                if (br == 4) {
                    replier.reply("제 답변은...아니오입니다!");
                }
                if (br == 5) {
                    replier.reply("그렇지 않을겁니다..");
                }
                if (br == 6) {
                    replier.reply("앗..! 깜빡하고 졸아서 질문을 받지 못하였습니다..");
                }
                if (br == 7) {
                    replier.reply("아앗..집중해서 다시 해보세요!");
                }
                if (br == 8) {
                    replier.reply("예측을..못하겠습니다..!");
                }
                if (br == 9) {
                    replier.reply("아마.. 그렇지 않을까요?");
                }
                if (br == 10) {
                    replier.reply("아마도 그럴겁니다!");
                }
                if (br == 11) {
                    replier.reply("저를 믿어도 좋습니다!");
                }
                if (br == 12) {
                    replier.reply("네!");
                }
                if (br == 13) {
                    replier.reply("의심할 여지 없이 당연합니다!");
                }
                if (br == 14) {
                    replier.reply("확실히 그렇습니다!");
                }
                if (br == 15) {
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
            Utils.getWebText("https://api.telegram.org/bot607216116:AAFhcn0ybpyCw_xwno2ga6pyA-9vF8dOdis/sendmessage?text=" + e.message + "\nline no. : " + Number(Number(e.lineNumber) + Number(1)) + "&chat_id=338145573")
            Api.replyRoom("간부방", "ERROR!\nmessage : " + e.message + "\nline no. : " + Number(Number(e.lineNumber) + Number(1)))
            DataBase.setDataBase("errorchk", 1)
            Api.reload();
        }
    }
}

