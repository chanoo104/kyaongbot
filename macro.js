/*
아이카
© 2018 Dark Tornado, All rights reserved.

마이카 소스는 공유하지 않는데, 아이카 소스는 공개합니다(?).
Project M의 2번째 오픈 소스인 미세키가 기반입니다.
어차피 미세키 내가 만든거니까 원작자 안밝혀도 되겠지(?). (이미 간접적으로 밝힌건 기분탓)

Jelly Brick님이 만드신 카카오톡 봇, Violet XF님이 만드신 메신저 봇과 호환됩니다.

아이카에는 GPL 3.0이 적용되어있습니다.

    <one line to give the program's name and a brief idea of what it does.>
    Project EA Copyright (C) 2018  Dark Tornado
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/

/*상수 선언*/
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //내장메모리 최상위 경로
const COMPRESS = "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         "; //전체보기 만들기용 투명문자 1000개

/*상수 (객체) 선언*/
const Miseki = {}; //미세키 관련 객체
const DB = {}; //파일 입/출력용 객제인데, 이름이 DB인건 기분탓
const preChat = {}; //도배 방지 구현용
const lastSender = {}; //보낸 사람 구분용
const botOn = {}; //봇 on/off 관련 객체

/*Miseki 객체*/
Miseki.checkWord = function (que, msg) { //적당히 비슷한 말인지 비교
    var data = msg.split(" "); //수신된 채팅의 어절들 중
    var flag = false;
    if (Math.floor(Math.random() * 2) == 0) flag = true; //50% 확률로 이미 한 개가 포함되어 있다고 가정
    for (var n = 0; n < data.length; n++) { //두 개 이상이 저장된 채팅들에 포함되어 있다면,
        if (que.indexOf(data[n]) != -1) {
            if (flag) return true; //대강 비슷하다고 판단
            else flag = true;
        }
    }
    return false; //아님 말고
};
Miseki.getReply = function (msg) { //수신된 채팅에 대한 적당한 답변 반환
    var data = DB.readData(); //저장된 채팅들을 불러옴
    if (data != null && Math.floor(Math.random() * 20) == 0) { //저장된 채팅이 없거나, 5% 확률이 터진게 아니면, 작동 안함
        data = data.split("\n"); //냥
        var result = []; //비슷한 말들이 들어갈 배열
        for (var n = 0; n < data.length - 1; n++) { //적당하다 싶은 녀석들을
            if (Miseki.checkWord(data[n], msg)) result.push(data[n + 1]); //배열에 추가
        }
        if (result[0] != null) return result[Math.floor(Math.random() * result.length)]; //배열이 빈게 아니라면 아무거나 하나 반환
    }
    return null; //일치하는게 없거나, 저장된 채팅이 없거나, 발동할 확률(?)이 아니면, null 반환
};
Miseki.isValidData = function (msg) { //배울 만한 채팅인지 구분하는 함수
    if (msg.charAt(0) == "#") return; //해시태그(#으로 시작)는 학습 X.    
    var noStudy = ["공지", "]", "[", "FPN", "섹", "데스", "웅기", "이기", "샵검색", "전체보기", "노", "{", "!", "\n", "D쥐고,D지고,jot같,tlqkf,wlfkf,ㅁㅈㅎ,ㅁㅊ,ㅁ친,ㅄ,ㅅㄲ네,ㅅㄲ들,ㅅㅋ,ㅅ발,ㅆㄺ,ㅆㅂ,ㅈㄹ,ㅉ질한,凸,가카,간민정음,간철수,갈보,갓치,강된장남,개간년,개같,개같이,개년,개념빠가,개뇬,개독,개독교,개련,개마이,개미친,개부랄,개불알,개빠구리,개뼉다구,개새,개새기,개새끼,개색,개섹,개셈,개쌍도,개쌍디언,개쌔끼,개자석,개자슥,개자식,개저씨,경상디언,계새끼,고무통,고무현,골1빈,골빈,골좁이,관종,괘새끼,구씹,규재찡,그따구,근혜찡,글러먹,기레기,기자레기,김치남,김치녀,까보전,꺼져,껒여,꼬춘쿠키,꼴갑,꼴값,꼴깝,꼴통,낙태충,냄져,넌씨눈,네다보,네다통,네다홍,년놈,노무노무,노미넴,노부엉,노시계,노알라,노운지,노인네,노짱,노친네,뇌물현,뇌텅,눈깔,눈새,느검마,느그애미,느그애비,느그엄마,느금마,늬믜,늬미,니기미,니년,니믜,니미럴,니애미,니애비,니어미,니엄마,닝기리,닥쳐라,닥치세,대가리,대갈빡,대갈통,대굴빡,덜떨어,도라이,도랏,도랐,도른,돌앗구만,돌앗나,돌앗네,돌았구만,돌았나,돌았네,뒈져,뒈진다,뒤져라,뒤져버,뒤져야,뒤져야지,뒤져요,뒤졌,뒤지겠,뒤지고싶,뒤지길,뒤진다,뒤질,등쉰,등신,디져라,디졌,디지고,디질,딴년,딸따뤼,딸따리,딸딸,딸딸이,또라이,또라인,똘아이,똘추,똥멍청,로류,맘충,매춘,머갈,멍청도,몸파는,무현RT,믜칀,믜친,미러링,미시친발,미쳣네,미쳤나,미쳤니,미췬,미칀,미친,미친개,미친새,미친색,박원숭,발정,배때지,별창,병신,병크,보라니,보력지원,보밍,보빨,보슬,보짓,보털,보테크,보혐,부랄,부랄발광,부럴,불알,붸충,븅딱,븅삼,븅쉰,븅신,빙딱,빙삼,빙시,빙신,빠구뤼,빠구리,빠꾸뤼,빠꾸리,빠순이,빠큐,빵즈,뻐규,뻐큐,뻑유,뻑큐,뻨큐,뼈큐,뽀르노,뽀오지,사까쉬,사까시,사새끼,삼일한,상노무,상놈,새1끼,새77ㅣ,새갸,새꺄,새뀌,새끼,새끼라,새끼야,새뤼,새리,새캬,새퀴,새킈,새키,색희,색히,샊기,샊히,생키,샹년,섀키,설라디언,섬숭이,성괴,섹하고,섹하구,섹하자,섹하장,소라넷,솔친,숨쉴한,쉬발,쉬버,쉬빨,쉬뻘,쉬뿔,쉬이바,쉬파,쉬팍,쉬팔,쉬팡,쉬펄,쉬퐁,쉬풀,슈1발,슈발,슈벌,슈우벌,스너프,스댕,스뎅,스발,스벌,스팔,스펄,슴가,싀발,싀밸,싀벌,싀벨,싀봉,싀팍,싀팔,싀펄,싑창,시1발,시미발친,시미친발,시바,시바라지,시바류,시바알,시바앙,시발,시방새,시벌탱,시볼탱,시부럴,시부렬,시부울,시뷰럴,시뷰렬,시빨,시새발끼,시이발,시친발미,시키가,시팔,시펄,십창,십팔,싸갈통,싸까시,싸물어,싸이코,싸카시,쌍너엄,쌍넌,쌍넘,쌍녀언,쌍년,쌍놈,쌍뇬,쌍눔,쌍늠,쌔끼,썅,썅넘,썅년,썅놈,썅뇬,썅눔,썅늠,썌끼,써글,썩을넘,썩을년,썩을놈,썩을뇬,썩을눔,썩을늠,쒸펄,쓰레기새,씌바,씌박,씌발,씌방,씌밸,씌벌,씌벙,씌벨,씌부랄,씌불,씌블,씌빌,씌빨,씌뻘,씌파,씌팍,씌팔,씌팡,씌펄,씌퐈,씌퐝,씝창,씨1발,씨바라,씨바알,씨발,씨방새,씨버럼,씨벌,씨벌탱,씨볼탱,씨부럴,씨부렬,씨뷰럴,씨뷰렬,씨빠빠,씨빨,씨뻘,씨새발끼,씨이발,씨팔,씹귀,씹못,씹뻐럴,씹새끼,씹선비,씹쌔,씹창,씹치,씹치남,씹팔,씹할,아가리,아가지,아갈이,아괄,아구리,아구지,아구창,아굴창,아닥,아오시바,암베,애미뒤,애미터,애비충,앰뒤,앰창,엠뷩신,엠븽신,엠빙신,엠생,엠창,염병,엿같,엿이나,옘병,오유충,운지,욷높,원조가카,은새끼,응딩이,이새끼,일게이,일벤저스,일벤져스,일붸,자1지,자들자들,자릉내,자쥐,자즤,자취냄,자혐,재기찡,재기하다,전땅크,전라디언,절라,젖같,젗같,젠신병자,젼나,젼낰,졀라,졀리,졌같은,졏같,조까,조낸,조온나,조옷,족까,존나,존낙,존내,졸라,좁밥,좃,종나,좆,좆까,좇,좌고라,좌빨,좌음,좌좀,죠낸,죠온나,죤나,죤내,죵나,죶,주둥아리,주둥이,주절먹,죽여 버리고,죽여버리고,죽여불고,죽여뿌고,중력절,줬같은,쥐랄,쥰나,즤랄,지랄,지롤,지인지조,짱깨,짱께,쪽1바리,쪽국,쪽바리,쪽발,쯰질,찌질한,찝째끼,창녀,창년,창놈,챙놈,청웅,쳐먹,쳐받는,쳐발라,취ㅈ,취좃,탈김치,탈라도,통궈,투명애비,피떡갈비,핑좆남,한남,한남또,한남충,할아보지,핵대중,핵펭귄,행게이,호로새끼,호로잡,호뽑뽑요,혼외수,홍팍,화낭년,화냥년,후레,후려,후빨,후장,盧"]; //엔터가 포함된건 학습 X. 비속어 필터링 등도 여기다가 넣으면 이상한 말은 안배움
    for (var n = 0; n < noStudy.length; n++) {
        if (msg.indexOf(noStudy[n]) != -1) return false;
    }
    return true;
};

// DB
DB.saveData = function (msg) { //파일에 내용을 저장하는 함수
    DataBase.setDataBase("ChatDB", msg)
};
DB.appendData = function (msg) { //파일에 내용을 저장하는 함수
    DataBase.appendDataBase("ChatDB", msg)
};
DB.readData = function () { //파일에 저장된 내용을 불러오는 함수
    DataBase.getDataBase("ChatDB")
};


if (DataBase.getDataBase("ChatDB") == undefined) {
    DataBase.setDataBase("CharDB", "")
}

/*response 부분*/
function response(room, msg, sender, isGroupChat, replier) {
    /*모르면 골롬*/
    msg = msg.trim();
    sender = sender.trim();
    room = room.trim();

    /*도배 방지, 1:1 채팅방 필터링*/
    if (!isGroupChat) return; //단체 채팅방에서만 작동
    if (preChat[room] == msg) return; //동일한 채팅이 두 번 이상 연속으로 수신되면, 가볍게 무시
    preChat[room] = msg;

    /*명령어 처리*/
    procCmd(room, msg, sender, replier);


    /*반응 안할 채팅들*/
    var noReply = [".", "사진을 보냈습니다.", "동영상을 보냈습니다.", "음성메시지를 보냈습니다.", "카카오톡 프로필", "(이모티콘)", "카카오링크 이미지"];
    for (var n = 0; n < noReply.length; n++) {
        if (msg == noReply[n]) return;
    }

    /*적당한 채팅 하나 가져와서 답장(?)하는 부분*/
    if (room != "컴퓨터의 모든것 || 컴튜톡 질문방") {
        var chat = Miseki.getReply(msg);
        if (chat != null) replier.reply(chat);
    }

    /*채팅을 학습하는 부분*/
    if (Miseki.isValidData(msg)) { //배울 만한 채팅인 경우,
        var data = DB.readData(); //배운 채팅 목록을 가져옴
        if (data == null) { //이미 배운게 있다면
            DB.saveData(msg); //새로 저장
        } else { //아니면,
            if (lastSender[room] == sender) { //같은 사람이 연속으로 채팅을 한 경우,
                DB.appendData(" " + msg); //같은 채팅으로 분류
            } else { //아니면,
                DB.appendData("\n" + msg); //다른 채팅으로 분류
            }
        }
    }
    lastSender[room] = sender;
}

/*명령어 처리*/
function procCmd(room, cmd, sender, replier) {
    /*배운 채팅 수를 확인하는 명령어*/
    if (cmd == "!DB") {
        var data = DB.readData();
        if (data == null) replier.reply("0개");
        else replier.reply(data.split("\n").length + "개");
    }
}