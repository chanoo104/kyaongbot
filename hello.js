//KyLite v1 끝말잇기없음

eval(DataBase.getDataBase('moment'));

var uCode = '뷁';





if (!Array.prototype.fill) {
    Object.defineProperty(Array.prototype, 'fill', {
        value: function (value) {

            // Steps 1-2.
            if (this === null) {
                throw new TypeError('this is null or not defined');
            }

            var O = Object(this);

            // Steps 3-5.
            var len = O.length >>> 0;

            // Steps 6-7.
            var start = arguments[1];
            var relativeStart = start >> 0;

            // Step 8.
            var k = relativeStart < 0 ?
                Math.max(len + relativeStart, 0) :
                Math.min(relativeStart, len);

            // Steps 9-10.
            var end = arguments[2];
            var relativeEnd = end === undefined ?
                len : end >> 0;

            // Step 11.
            var final = relativeEnd < 0 ?
                Math.max(len + relativeEnd, 0) :
                Math.min(relativeEnd, len);

            // Step 12.
            while (k < final) {
                O[k] = value;
                k++;
            }

            // Step 13.
            return O;
        }
    });
}

function brailleify(image) {
    let converted = [];
    for (let i = 0; i < image.length; i += 4) {
        let row = "";
        for (let j = 0; j < image[i].length; j += 2) {
            const margin = 1; //(1 - (image[i][j] | image[i + 1][j] | image[i + 2][j] | image[i + 3][j])) &
            (image[i][j + 1] | image[i + 1][j + 1] | image[i + 2][j + 1] | image[i + 3][j + 1]);
            row += String.fromCharCode(0x2800 +
                (margin | image[i][j]) | image[i + 1][j] << 1 |
                image[i + 2][j] << 2 | image[i][j + 1] << 3 |
                image[i + 1][j + 1] << 4 | image[i + 2][j + 1] << 5 |
                image[i + 3][j] << 6 | image[i + 3][j + 1] << 7);
        }
        converted.push(row);
    }
    return converted;
}

function stretchArray(arr, newSize) {
    const oldSize = arr.length;
    const result = Array(newSize).fill(0);
    let iOld = 0,
        iNew = 0;
    let xOld = 0,
        xNew = 0;
    while (iNew < newSize) {
        let begin = Math.max(xOld, xNew);
        let end = Math.min(xOld + newSize, xNew + oldSize);
        result[iNew] += arr[iOld] * (end - begin);
        if (end == xNew + oldSize) {
            ++iNew;
            xNew += oldSize;
        } else {
            ++iOld;
            xOld += newSize;
        }
    }
    return result.map(e => e / oldSize);
}

function map(x, size1, size2) {
    return x / size1 * size2;
}

function renderGraph(arr) {
    const widthInChar = 12;
    const heightInChar = 7;
    const widthInDot = widthInChar * 2;
    const heightInDot = heightInChar * 4;
    const graph = stretchArray(arr, widthInDot);
    const max = Math.ceil(Math.max.apply(null, graph) / Chrono.TIME_UNIT_IN_MINUTE) * Chrono.TIME_UNIT_IN_MINUTE;
    const image = [];
    for (let i = 0; i < heightInDot; ++i) {
        let y = heightInDot - i;
        image[i] = Array(widthInDot);
        for (let j = 0; j < widthInDot; ++j) {
            if (map(graph[j], max, heightInDot) >= y) {
                image[i][j] = 1;
            } else {
                image[i][j] = 0;
            }
        }
    }
    return {
        rendered: brailleify(image),
        max: max / Chrono.TIME_UNIT_IN_MINUTE
    };
}

function decoratedGraph(arr) {
    const result = renderGraph(arr);
    result.rendered[0] += "☜" + result.max + "타/분";
    return result.rendered.reduce((a, v) => a + "\n" + v);
}

function Chrono() {}

Chrono.TIME_UNIT_IN_MINUTE = 2;
Chrono.TIME_UNIT_IN_MILLIS = Chrono.TIME_UNIT_IN_MINUTE * 60 * 1000;

Chrono.prototype.getNow = function () {
    return Math.floor(+new Date() / Chrono.TIME_UNIT_IN_MILLIS);
};

function Room(now) {
    this.db = Array(Room.DB_CAPACITY).fill(0);
    this.dbCursor = 0;
    this.timestamp = now;
}

Room.DB_CAPACITY = 720;
Room.DB_CAPACITY_IN_MINUTE = Room.DB_CAPACITY * Chrono.TIME_UNIT_IN_MINUTE;

Room.prototype.plus = function (value, now) {
    this.sync(now);
    this.db[this.dbCursor] += value;
}

Room.prototype.sync = function (now) {
    if (now - this.timestamp >= Room.DB_CAPACITY) {
        this.timestamp = now;
        this.db.fill(0);
    } else {
        for (; this.timestamp < now; ++this.timestamp) {
            this.dbCursor = (this.dbCursor + 1) % Room.DB_CAPACITY;
            this.db[this.dbCursor] = 0;
        }
    }
}

Room.prototype.getAgo = function (ago, now) {
    this.sync(now);
    if (ago - 1 <= this.dbCursor) {
        return this.db.slice(this.dbCursor + 1 - ago, this.dbCursor + 1);
    } else {
        return this.db.slice(-(ago - this.dbCursor - 1)).concat(this.db.slice(0, this.dbCursor + 1));
    }
}

const rooms = {};

function getRoom(room) {
    if (rooms[room] === undefined) {
        rooms[room] = new Room(Chrono.prototype.getNow());
    }
    return rooms[room];
}

function parseSampleLen(result) {
    const scala = parseInt(result[1]);
    return Math.ceil((result[2] == "시간" ? scala * 60 : scala) / Chrono.TIME_UNIT_IN_MINUTE);
}

function getGformRow(target, lineNo) {
    var doc = org.jsoup.Jsoup.connect(target).header('User-Agent', 'Mozilla/5.0').get();
    var div = doc.select('tr[style]').get(lineNo).getElementsByTag("td");
    var arr = []
    for (i = 1; i < div.size() + 1; i++) {
        arr.push(div.select('td:eq(' + i + ')').text())
    }
    return arr;
}


function getGformColumn(target, lineNo, size) {
    var doc = org.jsoup.Jsoup.connect(target).header('User-Agent', 'Mozilla/5.0').get();
    var length = doc.select('tr[style]').size() - 1;
    //replier.reply(length)
    if (size > length) size = length;
    var arr = []
    for (y = length; y > length - size; y--) {
        //replier.reply(getGformRow(target, y)[lineNo-1])
        arr.push(getGformRow(target, y)[lineNo - 1]);
    }
    return [arr, length];
}



function getForm(requester) {
    var data = getGformColumn(target, Ky.formTargetRow, 10)
    //닉네임
    if (data[0].indexOf(requester) != -1) {
        //[a requester a a a] << 뒤에서 두번째
        //  replier.reply(requester)
        var pos = data[1] - data[0].indexOf(requester);
        //총 길이 - 배열내 위치(0부터시작, indexof로 두번째면 1) = 몆번째
        var oArr = getGformRow(target, 0);
        //replier.reply(oArr);
        var cArr = getGformRow(target, pos);
        // replier.reply(cArr);
        var arr = [('[ ' + requester + ' ] 님의 견적요청서') + blank];
        for (i = 0; i < oArr.length; i++) {
            arr.push(oArr[i] + '\n')
            arr.push(cArr[i] + '\n\n')
        }
        return arr.join('').replace(/\n\s*\n\s*\n/g, '\n\n');
    } else {
        replier.reply('파싱 실패. 네트워크 오류이거나 해당 이름으로 등록된 설문지가 없습니다.')
    }
}


function getpCodeFromGoogle(input) {
    var p = Utils.getWebText('https://www.google.co.kr/search?&q=' + encodeURI('site:prod.danawa.com/info/?pcode=+' + input)).split('http://prod.danawa.com/info/?pcode=')[1]
    if (typeof p == 'undefined') {
        return;
    }
    return p.split('"')[0].split('&')[0];
}


function getPriceChart(pCode, period) {
    var data = JSON.parse(org.jsoup.Jsoup.connect('https://prod.danawa.com/info/ajax/getProductPriceList.ajax.php?productCode=' + pCode + '&period=' + period).header("Referer", "https://prod.danawa.com/info/?pcode=" + pCode).get().text()).result,
        arr = [];
    if (typeof(data) == 'undefined') return '';
    for (i = 0; i < data.length; i++) {
        arr.push(data[i].date + ' | ')
        var nowPrice = data[i].minPrice
        if (i > 0) {
            if ((nowPrice / prePrice) > 1.1) {
                arr.push('▲ ')
            } else if ((nowPrice / prePrice) > 1.02) {
                arr.push('△ ')
            } else if ((nowPrice / prePrice) > 0.98) {
                arr.push('─ ')
            } else if ((nowPrice / prePrice) > 0.9) {
                arr.push('▽ ')
            } else {
                arr.push('▼ ')
            }
        } else arr.push('ㅤ ')
        arr.push(nowPrice)
        arr.push('\n')
        var prePrice = data[i].minPrice
    }
    return arr.join('')
}



function getRelatedPrice(pCode) {
    var doc = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + pCode).header('User-Agent', 'Mozilla/5.0').get();
    var tag = doc.select('div.othr_item span.txt');
    if (tag.size() < 1) return '';
    var price = doc.select('div.othr_item em.prc_t');
    var arr = ['<가격비교>\n'];

    for (i = 0; i < tag.size(); i++) {
        arr.push(tag.get(i).text() + '   ');
        arr.push(price.get(i).text() + '\n');
    }

    arr.push('\n\n');
    return arr.join('');
}

function getDanawaPrice(pCode) {
    var regex = /[^0-9]/g;
    var doc = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + pCode).get();
    if (doc.select('strong.ppnum').text().length != 0) {
        var pPriceOpen = doc.select('strong.ppnum').text().replace(regex, '');
    } else var pPriceOpen = '0';
    if (doc.select('strong.num_low01').text().length != 0) {
        var pPriceCash = doc.select('strong.num_low01').get(0).text().replace(regex, '');
    } else var pPriceCash = '0';
    var t = doc.select('meta[name=description]').attr('content').split(' 가격비교 - 요약정보 : ');
    var pName = t[0]

    if (pName.length == 0) {
        return false;
    } else return [pName, pPriceOpen, pPriceCash]
}

function compareNumber(a, b) {
    var ttt = Math.round(b / a * 1000 - 1000);
    return ttt / 10 + '%';
}

function compareArray(arr1, arr2) {
    arr = [];
    for (i = 0; i < arr1.length; i++) {
        arr.push(compareNumber(arr1[i], arr2[i]));
    }
    return arr;
}








let Ky = JSON.parse(DataBase.getDataBase('memCheck')) || new Object();
let counter = JSON.parse(DataBase.getDataBase('counterDB')) || new Object();

Ky.formTargetAddress = 'https://docs.google.com/spreadsheets/d/1DfzO6DiPTPN9jYX8_Jwh-bT7IY9unKU_OZhrO-GzRJo/htmlview#gid=735564299';
Ky.formTargetRow = 28;
var target = Ky.formTargetAddress;

const blank = '‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭‭\n\n\n'

function checkDetailUrl(data) {
    var regex = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;
    return regex.test(data);
}

function shortURL(text) {
    short = org.jsoup.Jsoup.connect('http://is.gd/create.php?format=simple&url=' + encodeURIComponent(text))
        .get()
        .text()
    return short;
}


getWeather = function () {
    var doc = org.jsoup.Jsoup.connect('https://m.search.naver.com/search.naver?sm=tab_hty.top&query=%EB%82%A0%EC%94%A8').get();
    var sel1 = doc.select('section').get(1).select('div[class=weather_box _weather_box]').select('div[class=lcl_lst]').select('a'),
        arr1 = [];
    for (i = 0; i < sel1.size(); i++) {
        arr1.push(sel1.get(i).text());
    }

    var sel2 = doc.select('div[class=wt_notice]').select('strong').text();

    var 미세먼지 = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?query=미세먼지").header('User-Agent', 'Mozilla/5.0').get().toString().split('미세먼지</strong>')[1];
    미세먼지 = 미세먼지.split('</div>')[0].replace(/(<([^>]+)>)/g, "").replace(/^ +| +$/gm, "").split('\n');
    미세먼지.pop();
    for (var n = 1; n < 미세먼지.length; n++) {
        var m = 미세먼지[n].split(' ')[1];
        미세먼지[n] = 미세먼지[n].split(' ')[0];
        if (Number(m) <= 30) m += ' - 좋음';
        if (31 <= Number(m) && Number(m) <= 80) m += ' - 보통';
        if (81 <= Number(m) && Number(m) <= 150) m += ' - 나쁨';
        if (Number(m) >= 151) m += ' - 매우나쁨';
        미세먼지[n] += ' ' + m;
    }

    return ('[[ 전국날씨 ]]' + blank + arr1.join('\n') + '\n\n\n\n[[ 특보 ]]\n\n' + sel2 + '\n\n\n\n[[ 미세먼지 ]]\n' + 미세먼지.join('\n'));
}





function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId) {
    try {

        msg = msg.trim();
        room = room.trim();
        sender = sender.trim();

        if (room[0] != '●' && room[0] != '■') return;

        Ky[room] = Ky[room] || new Object();
        Ky[room].memArray = Ky[room].memArray || new Array();
        Ky[room].memOn = Ky[room].memOn || false;
        Ky[room].admin = Ky[room].admin || new Array();

        function getHash() {
            return java.lang.String(imageDB.getProfileImage()).hashCode();
        }

        Ky[room].memCheck = getHash();
        Ky[room].recentLog = Ky[room].recentLog || new Object();
        Ky[room].recentLog[room] = Ky[room].recentLog[room] || new Object();
        Ky[room].recentLog[room].msg = Ky[room].recentLog[room].msg || new Array();
        Ky[room].recentLog[room].sender = Ky[room].recentLog[room].sender || new Array();





        //자동응답
        if (Ky[room].admin.length == 0 && msg == '!등록') {
            Ky[room].admin.push(Ky[room].memCheck);
            replier.reply('등록 성공');
        }

        if (msg == '!중지' && Ky[room].admin.indexOf(Ky[room].memCheck) != -1) {
            Ky[room].memOn = false;
            replier.reply('적용 완료');
        }

        if (msg == '!실행' && Ky[room].admin.indexOf(Ky[room].memCheck) != -1) {
            Ky[room].memOn = true;
            replier.reply('적용 완료');
        }

        if (Ky[room].memArray.indexOf(Ky[room].memCheck) == -1) {
            if (Ky[room].memOn == true) {
                replier.reply('[자동응답]\n■■■■■■■■■■■■\n' + sender + '님 어서오세요!\n모바일은 우측상단 메뉴열고\nPC는 채팅창 맨위 방제아래\n하트버튼을 채워주세요!\n■■■■■■■■■■■■');
            }
            Ky[room].memArray.push(Ky[room].memCheck);
        }


        //로그출력
        if (msg.split(' ')[0] == '!최근로그') {
            var n = msg.substr(msg.split(' ', 1)[0].length + 1);
            if (!/^[0-9]+$/.test(n) || n.indexOf('0') == 0 || n > 50) {
                replier.reply('50 이하의 자연수를 입력해 주세요.');
            } else {
                n--;
                if (n > Ky[room].recentLog[room].sender.length - 1) n = Ky[room].recentLog[room].sender.length - 1;
                var char = ('▼전체보기 클릭▼' + blank);
                for (i = n; i >= 0; i--) {
                    char += '\n》';
                    char += Ky[room].recentLog[room].sender[i];
                    char += '\n';
                    char += Ky[room].recentLog[room].msg[i];
                    char += '\n';
                }
                replier.reply(char);
            }
        }


        //지역날씨
        let longword = "\u200b".repeat(500);

        if (msg.split(" ")[0] == "!날씨" && msg.indexOf(' ') != -1) {
            try {
                replier.reply("날씨 정보 파싱중...");
                var pl = msg.substr(4) + " 날씨"
                var web = Utils.getWebText("https://search.naver.com/search.naver?query=" + pl)

                var cast = web.split("cast_txt\">")[1].split("<")[0] // 케스트 변수
                var npl = web.split("role=\"button\"><em>")[1].split("<")[0]
                var hgod = web.split("<span class=\"todaytemp\">")[1].split("<")[0]; // 현재온도 변수
                var cgod = web.split("체감온도 <em><span class=\"num\">")[1].split("<")[0] // 체감온도 변수
                var cjgo = web.split("<span class=\"min\"><span class=\"num\">")[1].split("<")[0]; // 최저기온 변수
                var cggo = web.split("<span class=\"max\"><span class=\"num\">")[1].split("<")[0]; // 최고기온 변수
                var cmsmg = web.split(">초미세먼지</a>")[1].split('<dt>')[0].replace(/(<([^>]+)>)/g, "").trim().replace("㎥", "㎥ [ ") + " ]";
                var msmg = web.split(">미세먼지</a>")[1].split('<dt>')[0].replace(/(<([^>]+)>)/g, "").trim().replace("㎥", "㎥ [ ") + " ]";
                var oggs = web.split(">오존지수</a>")[1].split('</dd>')[0].replace(/(<([^>]+)>)/g, "").trim().replace("ppm", "ppm [ ") + " ]";
                var jys;
                if (web.indexOf("자외선") == -1) {
                    jys = "0%";
                } else {
                    jys = web.split("자외선")[1].split('</span>')[0].replace(/(<([^>]+)>)/g, "").trim() + "%";
                    if (jys.indexOf("지수") != -1) {
                        jys = "0%";
                    } else {
                        jys = web.split("자외선")[1].split('</span>')[0].replace(/(<([^>]+)>)/g, "").trim();
                    }
                }
                var sd = web.split("예상 습도")[1].split('</span')[0].replace(/(<([^>]+)>)/g, "").trim() + "%";
                var gshr = web.split("강수 확률")[1].split('</span')[0].replace(/(<([^>]+)>)/g, "").trim() + "%";
                var gsr = web.split("예상 강수량")[1].split('</span')[0].replace(/(<([^>]+)>)/g, "").trim()
                var ps = web.split("예상 풍속")[1].split('</span')[0].replace(/(<([^>]+)>)/g, "").trim() + "m/s"
                var ph = web.split("예상 풍향")[1].split('</span')[0].replace(/(<([^>]+)>)/g, "").trim()
                replier.reply("[ " + npl + " 날씨 ]\n\n" + cast + blank + "\n\n현재온도 : " + hgod + "°c\n체감온도 : " + cgod + "°c\n▼ 최저기온 : " + cjgo + "°c | ▲ 최고기온 : " + cggo + "°c\n\n미세먼지 : " + msmg + "\n초미세먼지 : " + cmsmg + "\n\n자외선 : " + jys + "\n오존지수 : " + oggs + "\n습도 : " + sd + "\n\n강수 확률 : " + gshr + "\n강수량 : " + gsr + "\n\n풍속 : " + ps + "\n풍향 : " + ph);
            } catch (e) {
                replier.reply("파싱 실패");
                replier.reply('eval 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
            }
        }

        //전체날씨
        if (msg == "!날씨") {
            replier.reply(getWeather());
        }

        //주소단축
        c = '!단축'
        if (msg.substr(0, c.length + 1) == c + ' ') {
            if (checkDetailUrl(msg.substring(c.length + 1))) {
                replier.reply(shortURL(msg.substring(c.length + 1)))
            } else replier.reply('정확한 주소를 적어주세요.')
        }

        //실검
        if (msg == '!실검') {
            var r = org.jsoup.Jsoup.connect('https://www.naver.com/?mobile').get().select('span[class=ah_k]');
            var list = '';
            for (i = 1; i < 21; i++) {
                list += (i + '. ' + r.get(i).text() + '\n')
            }
            replier.reply(list.slice(0, -1))
        }


        //견적비교
        tag: {
            if (msg.substr(0, 6) == '!견적비교 ') {
                replier.reply('파싱 중...');
                var input = msg.substring(6).trim();
                if (input.indexOf('&productSeqList=') != -1 && input.indexOf('&quantityList=') != -1) {
                    var pList = msg.split('&productSeqList=')[1].split('&')[0].split(',');
                    var pCount = msg.split('&quantityList=')[1].split('&')[0].split(',');
                } else if (input.indexOf('?productSeq=') != -1 && input.indexOf('&count=') != -1) {
                    var pList = msg.split('?productSeq=')[1].split('&')[0].split(',');
                    var pCount = msg.split('&count=')[1].split('&')[0].split(',');
                } else {
                    replier.reply('잘못된 입력입니다.');
                    break tag;
                }

                var regex = /[^0-9]/g;
                if (pList.length != pCount.length) {
                    replier.reply('잘못된 형식입니다.');
                } else if (regex.test(pList.join(''))) {
                    replier.reply('잘못된 형식입니다.');
                } else if (regex.test(pCount.join(''))) {
                    replier.reply('잘못된 형식입니다.');
                } else {
                    var exc = ['3415638', '3316772', '1363731'];
                    for (i = 0; i < exc.length; i++) {
                        if (pList.indexOf(exc[i]) != -1) {
                            replier.reply('견적서비스가 제거됩니다.');
                            pList.splice(pList.indexOf(exc[i]), 1);
                            pCount.splice(pList.indexOf(exc[i]), 1);
                        }
                    }
                    if (pList.length == 0) {
                        replier.reply('잘못된 입력입니다.');
                        break tag;
                    }
                    var arr1 = [],
                        arr2 = [],
                        arr3 = [],
                        arr4 = [];
                    //다나와 PC 견적인쇄 URL
                    var url = 'http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=' + pList.join([separator = ',']) + '&quantityList=' + pCount.join([separator = ',']) + '&type=print'
                    var price = 0
                    for (i = 0; i < pList.length; i++) {
                        var t = getDanawaPrice(pList[i]);

                        //다나와에 그런거 없으면
                        if (!t) {
                            replier.reply('잘못된 입력입니다.');
                            break tag;
                        }
                        //제품명
                        arr1.push(t[0]);
                        //최저가
                        arr3.push(t[1]);
                        //현금최저가
                        arr4.push(t[2]);

                        //견적현금최저가
                        var est = org.jsoup.Jsoup.connect(url).get();
                        arr2.push(est.select('tr.bg_change_hover').get(i).select('td').get(4).text().replace(regex, ''));
                    }
                    //5:싼거, 6:뭐넣었는지
                    var arr5 = [],
                        arr6 = [];
                    for (i = 0; i < arr3.length; i++) {
                        //오픈이 현금보다 싸면
                        if (arr3[i] <= arr4[i]) {
                            if (arr3[i] == 0) {
                                arr5.push(arr4[i]);
                                arr6.push('현금')
                            } else {
                                arr5.push(arr3[i]);
                                arr6.push('오픈')
                            }
                        }
                        //현금이 오픈보다 싸면
                        if (arr3[i] > arr4[i]) {
                            if (arr4[i] == 0) {
                                arr5.push(arr3[i]);
                                arr6.push('오픈')
                            } else {
                                arr5.push(arr4[i]);
                                arr6.push('현금')
                            }
                        }
                    }
                    var carr23 = compareArray(arr2, arr3);
                    var carr24 = compareArray(arr2, arr4);
                    var carr25 = compareArray(arr2, arr5);
                    
                    function sum(array) {
                        var result = 0.0;
                        for (var i = 0; i < array.length; i++)
                            result += Number(array[i] * pCount[i]);
                        return result;
                    }

                    var sum2 = sum(arr2),
                        sum3 = sum(arr3),
                        sum4 = sum(arr4),
                        sum5 = sum(arr5);

                    var str = '[ ';

                    str += (sum2 + ' → ' + sum5 + ' ]\n(' + String(compareNumber(sum2, sum5)) + ' / ' + String(sum5 - sum2) + ')' + blank);
                    for (i = 0; i < arr3.length; i++) {
                        str += arr1[i] + '\n ';
                        str += pCount[i] + 'x ' + arr6[i] + ' ' + (arr5[i] * pCount[i]) + ' (' + carr25[i] + ' / ' + String((arr5[i] - arr2[i]) * pCount[i]) + ')\n';
                    }
                    str += '\n\n\n';
                    for (i = 0; i < arr3.length; i++) {
                        str += arr1[i] + ' 》 ' + arr2[i] + '\n| ';
                        str += arr3[i] + '(' + carr23[i] + ')  ' + arr4[i] + '(' + carr24[i] + ')\n';
                    }
                    replier.reply(str)
                }
            }
        }

        //파워
        if (msg.substr(0, 4) == '!파워 ') {
            var input = msg.substring(4).trim();
            var p = getpCodeFromGoogle(input)
            if (typeof p == 'undefined') {
                replier.reply('잘못된 입력입니다.');
            } else {
                var doc = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + p).get();
                var t = doc.select('meta[name=description]').attr('content').split(' 가격비교 - 요약정보 : ');
                var pName = t[0], pDescription = t[1]
                if (doc.html().indexOf('data-nbpkeyword="파워서플라이"') == -1) {
                    replier.reply('잘못된 카테고리입니다.');
                } else {
                    var doc = org.jsoup.Jsoup.connect('http://m.danawa.com/product/productDetailInfoTemplate.json?productCode=' + p).header("Referer", "http://m.danawa.com/product/product.html?code=" + p).get()
                    var p = '6000733';
                    var doc = org.jsoup.Jsoup.connect('http://m.danawa.com/product/productDetailInfoTemplate.json?productCode=' + p).header("Referer", "http://m.danawa.com/product/product.html?code=" + p).get()
                    var sel = doc.select('table.tbl_utype').html().split('</span> <a href="http://www.safetykorea.kr/"')[0].split('<span class="td_utxt">');
                    var certNo = sel[sel.length-1]
                    var data = org.jsoup.Jsoup.connect('http://safetykorea.kr/release/certDetail').data("certNum", 'ZU10176-18003A').post().select('div.section').get(2).select('tbody');
                    var certA = data.select('td').get(0).text();
                    var certB = data.select('td').get(2).text();
                    replier.reply('[ ' + pName + ' ]' + '\n인증번호: ' + certNo + '\n제조사: ' + certA + '\n유통사: ' + certB)
                }
            }
        }

        //다나와
        if (msg.substr(0, 5) == '!다나와 ') {
            try {
                var input = msg.substring(5).trim();
                var p = getpCodeFromGoogle(input);
                if (typeof p == 'undefined') {
                    replier.reply('잘못된 입력입니다.');
                } else {
                    var p = p.split('"')[0].split('&')[0];
                    if (Number.isInteger(Number(p)) == true) {

                        var pCode = p
                        var doc1 = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + pCode).get();
                        var t = doc1.select('meta[name=description]').attr('content').split(' 가격비교 - 요약정보 : ');
                        var pName = t[0], pDescription = t[1];
                        if (doc1.select('strong.ppnum').text().length != 0) {
                            var pPriceOpen = doc1.select('strong.ppnum').text();
                        } else var pPriceOpen = '가격비교 중지';
                        if (doc1.select('strong.num_low01').text().length != 0) {
                            var pPriceCash = doc1.select('strong.num_low01').get(0).text();
                        } else var pPriceCash = '가격비교 중지';
                        var pChart = getPriceChart(pCode, 12);
                        var pRelated = getRelatedPrice(pCode);

                        replier.reply('[ ' + pName + ' ]' + '\n최저가: ' + pPriceOpen + '\n현금최저가: ' + pPriceCash + ' ' +blank + 'http://prod.danawa.com/info/?pcode=' + pCode + '\n\n' + pDescription + '\n\n\n' + pRelated + pChart);

                    } else {
                        replier.reply('잘못된 입력입니다.');
                    }
                }
            } catch (e) {
                replier.reply('오류가 발생했습니다.');
            }
        }

        //견적생성
        loop: {
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
                    var p = getpCodeFromGoogle(input);
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
                replier.reply('http://micro.danawa.com/product/wishList?productSeq=' + est.code.join([separator = ',']) + '&count=' + est.quan.join([separator = ',']));
            }
        }


        //견적요청
        //첫줄(문항내용) = 0, 설문응답은 1부터 시작
        if (msg.substr(0, 6) == '!견적요청 ') {
            replier.reply(getForm(msg.substring(6)))
        }

        //네이버
        c = '!네이버';
        if (msg.substr(0, c.length + 1) == c + ' ') {
            replier.reply('https://search.naver.com/search.naver?query=' + encodeURI(msg.substring(c.length + 1)))
        }

        //구글
        c = '!구글';
        if (msg.substr(0, c.length + 1) == c + ' ') {
            replier.reply('https://www.google.co.kr/search?q=' + encodeURI(msg.substring(c.length + 1)))
        }

        //유튜브
        c = '!유튜브';
        if (msg.substr(0, c.length + 1) == c + ' ') {
            replier.reply('https://www.youtube.com/results?search_query=' + encodeURI(msg.substring(c.length + 1)))
        }

        //로그
        Ky[room].recentLog[room].msg.unshift(msg);
        if (Ky[room].recentLog[room].msg.length > 50) Ky[room].recentLog[room].msg.pop;

        Ky[room].recentLog[room].sender.unshift(sender);
        if (Ky[room].recentLog[room].sender.length > 50) Ky[room].recentLog[room].sender.pop;





        //moment.js 라이브러리를 필요로 합니다
        //가장 쉽게 가져오려면 위처럼 DB저장경로에 txt로 저장한 후 eval로 불러오면 됩니다


        function memberCounter() {
            var t = moment().format('YYMMDDHH');
            counter[room][sender].timeList = counter[room][sender].timeList || new Array();
            counter[room][sender].list = counter[room][sender].list || new Array();
            var timeList = counter[room][sender].timeList;
            if (timeList.indexOf(t) == -1) timeList.push(t);
            counter[room][sender].list[timeList.indexOf(t)] = counter[room][sender].list[timeList.indexOf(t)] || 0;
            counter[room][sender].list[timeList.indexOf(t)]++;
            counter[room][sender].total = counter[room][sender].total || 0;
            counter[room][sender].total++;
            //replier.reply(counter[room][sender].total);
        }


        function memberCount(input, sender) {
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
            var timeList = counter[room][sender].timeList || new Array();
            var tt = from.format('YYMMDDHH');
            for (i = 0; i < timeList.length; i++) {
                var t = timeList[i];
                if (tt <= t) {
                    var start = i;
                    break;
                }
            }
            if (typeof start == 'undefined') start = -1;
            if (start == -1) return 0;
            var n = start += 0
            var tt = to.format('YYMMDDHH')
            for (i = n; i < timeList.length; i++) {
                var t = timeList[i];
                if (tt <= t) {
                    var end = i - 1;
                    break;
                }
            }
            if (typeof end == 'undefined') end = timeList.length - 1;
            var list = counter[room][sender].list;
            for (i = start; i < end + 1; i++) {
                result += list[i];
            }
            return result;
        }




        counter[room] = counter[room] || new Object();
        counter[room][sender] = counter[room][sender] || new Object();
        counter[room].senderArray = counter[room].senderArray || new Array();
        if (counter[room].senderArray.indexOf(sender) == -1) counter[room].senderArray.push(sender);

        memberCounter();

        if (msg.split(' ')[0] == '!카운터') {
            replier.reply('[' + sender + ']\n' + memberCount(msg.substr(msg.split(' ', 1)[0].length + 1), sender));
        }

        if (msg.split(' ')[0] == '!순위') {
            counter[room].tsTime = new Date().getTime();
            sloop: {
                var arr = [];
                var length = counter[room].senderArray.length;
                if (typeof (counter[room].eTime) != 'undefined') replier.reply(length + '명의 로그 분석중... 예상 소요 시간: ' + Math.round(((counter[room].eTime - counter[room].sTime)) / 1000 + 1) + '초');
                for (n = 0; n < length; n++) {
                    var ttt = counter[room].senderArray[n];
                    var counted = [ttt, memberCount(msg.substr(msg.split(' ', 1)[0].length + 1), ttt)];
                    arr.push(counted);
                    if (isNaN(counted[1])) {
                        var a = counted[1];
                        break sloop;
                    }
                }

                function soort(a, b) {
                    return b[1] - a[1];
                }
                arr.sort(soort);
                var a = '[채팅량 순위]\n' + msg.split(' ')[1] + blank;
                for (i = 0; i < arr.length; i++) {
                    a += (i + 1) + '. ' + arr[i][0] + '\n 》' + arr[i][1] + '\n\n';
                }
            }
            counter[room].sTime = counter[room].tsTime;
            counter[room].eTime = new Date().getTime();
            replier.reply(a);
        }




        if (msg.indexOf("!화력") == 0) {
            const tokens = msg.split(" ");
            let result = /(\d+)(분|시간)/.exec(tokens[1]);
            if (result !== null) {
                const sampleLen = parseSampleLen(result);
                if (sampleLen > Room.DB_CAPACITY) {
                    replier.reply("최대 " + Math.floor(Room.DB_CAPACITY * Chrono.TIME_UNIT_IN_MINUTE / 60) + "시간 동안의 화력만 볼 수 있습니다.");
                    return;
                }
                replier.reply(decoratedGraph(getRoom(room).getAgo(sampleLen, Chrono.prototype.getNow())) + "\n" + tokens[1] + " 전―≫현재");
            } else {
                replier.reply("!화력 ×분 or !화력 ×시간");
            }
        } else {
            getRoom(room).plus(msg.length, Chrono.prototype.getNow());
        }


        if (msg.split(' ')[0] == '.' && sender.indexOf('rgb') != -1) {
            try {
                replier.reply(eval(msg.substr(msg.split(' ', 1)[0].length + 1)));
            } catch (e) {
                replier.reply('eval 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
            }
        }


        //저장
        DataBase.setDataBase('memCheck', JSON.stringify(Ky));
        DataBase.setDataBase('counterDB', JSON.stringify(counter));

    } catch (e) {
        replier.reply('스크립트 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
    }
}
