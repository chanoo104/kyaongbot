//KyLite v1 끝말잇기없음

eval(DataBase.getDataBase('moment'));

var uCode = '으d으';

let charge = true;
let batteryOK = true;
let backupCount = 0;


let Ky = JSON.parse(DataBase.getDataBase('KyBot')) || new Object();
let counter = JSON.parse(DataBase.getDataBase('counterDB')) || new Object();

Ky.formTargetAddress = 'https://docs.google.com/spreadsheets/d/1DfzO6DiPTPN9jYX8_Jwh-bT7IY9unKU_OZhrO-GzRJo/htmlview#gid=735564299';
Ky.registerTargetAddress = 'https://docs.google.com/spreadsheets/d/1vMaiOPbDYBCevdHrYUGTh9Y9-xlYr5BMRPLzv0cKZzY/htmlview#gid=1425276477';
Ky.loginTargetAddress = 'https://docs.google.com/spreadsheets/d/1zf2BTvwBmPYFcLQAvlN4LPzH4QblSn-9dTUkUjivwis/htmlview#gid=1510697457';
Ky.marketTargetAddress = 'https://docs.google.com/spreadsheets/d/1sg3CSqT9CGY0QPW38w0FytK0UhqYBGyNW0EPrNycV9w/htmlview#gid=1833799400';

Ky.formTargetRow = 28;
var target = Ky.formTargetAddress;

const blank = "\u202D".repeat(1000) + '\n\n\n';

let userGroup = ['admin', 'manager', 'moderator', 'member'];





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

function getGformRow(doc, lineNo) {
    var div = doc.select('tr[style]').get(lineNo).getElementsByTag("td");
    var arr = []
    for (i = 1; i < div.size() + 1; i++) {
        arr.push(div.select('td:eq(' + i + ')').text())
    }
    return arr;
}


function getGformColumn(doc, lineNo, size) {
    //주의: 맨 아래서부터 반환 [마지막, 마지막에서두번째, ... ]
    var length = doc.select('tr[style]').size() - 1;
    //replier.reply(length)
    if (size > length) size = length;
    var arr = []
    for (y = length; y > length - size; y--) {
        //replier.reply(getGformRow(target, y)[lineNo-1])
        arr.push(getGformRow(doc, y)[lineNo - 1]);
    }
    return [arr, length];
}


function getLoginData() {
    //단순 아래 열 10개 반환
    try {
        var doc = org.jsoup.Jsoup.connect(Ky.loginTargetAddress).header('User-Agent', 'Mozilla/5.0').get();
        var t = getGformColumn(doc, 1, 10)[0];
        var a = getGformColumn(doc, 2, 10)[0];
        var b = getGformColumn(doc, 3, 10)[0];
        return [a, b, t];
    } catch (e) {
        return false;
    }
}

function getRegisterData() {
    ///단순 열 아래서부터 10개 반환
    try {
        var doc = org.jsoup.Jsoup.connect(Ky.registerTargetAddress).header('User-Agent', 'Mozilla/5.0').get();
        var t = getGformColumn(doc, 1, 10)[0];
        var a = getGformColumn(doc, 2, 10)[0];
        var b = getGformColumn(doc, 3, 10)[0];
        var c = getGformColumn(doc, 4, 10)[0];
        var d = getGformColumn(doc, 5, 10)[0];
        var e = getGformColumn(doc, 6, 10)[0];
        return [t, a, b, c, d, e];
    } catch (e) {
        return false;
    }
}

function getMarketData(requester) {
    try {
        var doc = org.jsoup.Jsoup.connect(Ky.marketTargetAddress).header('User-Agent', 'Mozilla/5.0').get();
        var data = getGformColumn(doc, 2, 20)
        //닉네임
        if (data[0].indexOf(requester) != -1) {
            var arr = [];
            var log = [];
            while (data[0].indexOf(requester) != -1) {
                var num = data[0].indexOf(requester);
                data[0][num] = false;
                var pos = data[1] - num
                //총 길이 - 배열내 위치(0부터시작, indexof로 두번째면 1) = 몆번째
                var a = getGformRow(doc, pos);
                if (Ky.marketSession.indexOf(a[0]) == -1) {
                    if (Ky.user[Ky.userID[requester]].PW == a[2]) {
                        arr.push(a);
                        log.push('등록 성공 | ' + a[4]);
                        Ky.marketSession.push(a[0]);
                    } else {
                        log.push('등록 실패 | PW 불일치 | ' + a[4]);
                        Ky.marketSession.push(a[0]);
                    }
                }
            }
            if (arr.length == 0) return false;
            return [arr, log];
        } else {
            return false;
        }
    } catch (e) {
        return false;

    }
}

function getForm(requester) {
    try {
        var doc = org.jsoup.Jsoup.connect(target).header('User-Agent', 'Mozilla/5.0').get();
        var data = getGformColumn(doc, Ky.formTargetRow, 10)
        //닉네임
        if (data[0].indexOf(requester) != -1) {
            //[a requester a a a] << 뒤에서 두번째
            //  replier.reply(requester)
            var pos = data[1] - data[0].indexOf(requester);
            //총 길이 - 배열내 위치(0부터시작, indexof로 두번째면 1) = 몆번째
            var oArr = getGformRow(doc, 0);
            //replier.reply(oArr);
            var cArr = getGformRow(doc, pos);
            // replier.reply(cArr);
            var arr = [('[ ' + requester + ' ] 님의 견적요청서') + blank];
            for (i = 0; i < oArr.length; i++) {
                arr.push(oArr[i] + '\n')
                arr.push(cArr[i] + '\n\n')
            }
            return arr.join('').replace(/\n\s*\n\s*\n/g, '\n\n');
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

function checkFormTimeout(t, ms) {
    if ((new Date().getTime() - moment(t.replace('오전', 'AM').replace('오후', 'PM'), "YYYY.MM.DD A hh:mm:ss").add(9, 'h').format('x')) > ms) {
        return true;
    } else return false;
}


function getpCodeFromGoogle(input, type) {
    type = type || '';
    if (type.length == 0) type = (' ' + type + ' ');
    var p = Utils.getWebText('https://www.google.co.kr/search?&q=' + type + encodeURI('site:prod.danawa.com/info/?pcode=+' + input)).split('http://prod.danawa.com/info/?pcode=')[1]
    if (typeof p == 'undefined') {
        return false;
    }
    return p.split('"')[0].split('&')[0];
}

function getDanawaDetail(pCode) {
    var doc = org.jsoup.Jsoup.connect('http://m.danawa.com/product/productDetailInfoTemplate.json?productCode=' + pCode).header("Referer", "http://m.danawa.com/product/product.html?code=" + pCode).get().select('tbody tr'),
        arr1 = [],
        arr2 = [];
    for (i = 0; i < doc.size(); i++) {
        if (doc.get(i).select('td').size() != 0) {
            arr1.push(doc.get(i).select('th').text());
            arr2.push(doc.get(i).select('td span').get(0).text());
        }
    }
    return [arr1, arr2];
}


function getPriceChart(pCode, period) {
    var data = JSON.parse(org.jsoup.Jsoup.connect('https://prod.danawa.com/info/ajax/getProductPriceList.ajax.php?productCode=' + pCode + '&period=' + period).header("Referer", "https://prod.danawa.com/info/?pcode=" + pCode).get().text()).result,
        arr = [];
    if (typeof (data) == 'undefined') return '';
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


function getColumn(t, n) { //getColumn(배열, 열)
    let arr = [];
    for (i = 0; i < t.length; i++) {
        arr.push(t[i][n]);
    }
    return arr;
}

function deleteColumn(t, n) { //getColumn(배열, 열)
    for (i = 0; i < t.length; i++) {
        t[i].splice(n, 1);
    }
}

function pullTop(t, n) { //t:2차원객체, n:끌어올릴 열 지정
    for (i = 0; i < t.length; i++) {
        let sel = t[i][n];
        t[i].splice(n, 1);
        t[i].unshift(sel);
    }
}

function getName(p) {
    if (Ky.user[p].lastName[room]) return Ky.user[p].lastName[room];
    return Ky.user[p].lastNameAll;
}



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

function makeAuthID() {
    var text = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 6; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}





















var monitor = {
    m: {},
    r: {}
}
var roomList = []








function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId) {
    function makeTag(obj) {
        var possible = '0123456789';
        while (true) {
            var text = '';
            for (var i = 0; i < 4; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
            if (obj[String(text)] === undefined) break;
        }
        return String(text);
    }

    try {
        if (!isGroupChat) {

            monitor.m[sender] = monitor.m[sender] || {}
            if (msg == '!리스트') replier.reply(roomList.join('\n'));
            if (msg.substr(0, 6) == '!모니터링 ') {
                if (monitor.m[sender].target) monitor.r[monitor.m[sender].target].splice(monitor.r[monitor.m[sender].target].indexOf(sender), 1)
                monitor.m[sender].target = roomList[msg.substring(6) - 1];
                monitor.r[monitor.m[sender].target] = monitor.r[monitor.m[sender].target] || [];
                monitor.r[monitor.m[sender].target].push(sender)
                replier.reply(monitor.m[sender].target)
            }
            if (msg == '!중단') {
                if (monitor.m[sender].target) {
                    monitor.r[monitor.m[sender].target].splice(monitor.r[monitor.m[sender].target].indexOf(sender), 1)
                    delete monitor.m[sender].target
                    replier.reply('성공')
                }
            }
            if (msg.split(' ')[0] == '.' && monitor.m[sender].target) {
                Api.replyRoom(monitor.m[sender].target, '[' + sender + ']\n' + (msg.substring(2)))
                for (i = 0; i < monitor.r[monitor.m[sender].target].length; i++) {
                    var ttt = monitor.r[monitor.m[sender].target][i];
                    if (ttt != sender) Api.replyRoom(ttt, '[' + sender + ']\n' + msg.substring(2))
                }
            }
        } else {
            if (roomList.indexOf(room) == -1) roomList.push(room)
            if (typeof (monitor.r[room]) != 'undefined') {
                if (monitor.r[room].length > 0) {
                    for (i = 0; i < monitor.r[room].length; i++) {
                        Api.replyRoom(monitor.r[room][i], '[' + sender + ']\n' + msg)
                    }
                }
            }

        }
        msg = msg.trim();
        room = room.trim();
        sender = sender.trim();

        if (room[0] != '●' && room[0] != '■') return;
        Ky.r = Ky.r || new Object();
        Ky.r[room] = Ky.r[room] || new Object();
        Ky.r[room].memArray = Ky.r[room].memArray || new Array();
        Ky.r[room].memOn = Ky.r[room].memOn || false;
        Ky.r[room].admin = Ky.r[room].admin || new Array();

        var hash = String(java.lang.String(imageDB.getProfileImage() + sender).hashCode());
        Ky.r[room].memCheck = hash;
        Ky.r[room].recentLog = Ky.r[room].recentLog || new Object();
        Ky.r[room].recentLog[room] = Ky.r[room].recentLog[room] || new Object();
        Ky.r[room].recentLog[room].msg = Ky.r[room].recentLog[room].msg || new Array();
        Ky.r[room].recentLog[room].sender = Ky.r[room].recentLog[room].sender || new Array();


        Ky.r[room].command = Ky.r[room].command || new Object();


        //아이디목록, pcode와 연결
        Ky.userID = Ky.userID || new Object();
        //해시목록, pcode와 연결
        Ky.userHash = Ky.userHash || new Object();
        //태그목록, pcode와 연결
        Ky.userTag = Ky.userTag || new Object();

        Ky.loginSession = Ky.loginSession || new Array();
        Ky.registerSession = Ky.registerSession || new Array();
        Ky.marketSession = Ky.marketSession || new Array();
        Ky.market = Ky.market || [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]

        //pcode 객체
        Ky.user = Ky.user || new Object();
        //로그인상태일때 회원가입 또는 로그인 불가

        var login = false;
        var pcode;
        var ID;

        //eval
        if (msg.split(' ')[0] == ',' && sender.indexOf('rgb') != -1) {
            try {
                replier.reply(eval(msg.substr(msg.split(' ', 1)[0].length + 1)));
            } catch (e) {
                replier.reply('eval 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
            }
        }

        //기본상태업데이트등
        if (Object.keys(Ky.userHash).indexOf(hash) != -1) {
            login = true;
            pcode = Ky.userHash[hash];
            ID = Ky.user[pcode].ID;
            permission = Ky.user[pcode].type;
            Ky.user[pcode].lastName = Ky.user[pcode].lastName || new Object();
            Ky.user[pcode].lastName[room] = sender;
            Ky.user[pcode].lastNameAll = sender;
        }



        if (ID == 'odosk') {
            Ky.user[pcode].type = 0;
        }

        //다른사람의 권한을 자기보다 한단계 아래까지 올릴수 있음.
        if (msg.substr(0, 9) == '.promote ') {
            i = msg.substring(9);
            if (login) {
                if (userGroup.indexOf(permission) <= userGroup.indexOf('manager')) {
                    if (Object.keys(Ky.userID).indexOf(i) == -1) {
                        a = Ky.user[Ky.userID[i]].type;
                        if (userGroup.indexOf(a) > userGroup.indexOf(permission) + 1) {
                            Ky.user[Ky.userID[i]].type = userGroup[userGroup.indexOf(a) - 1];
                            replier.reply(Ky.user[Ky.userID[i]].type);
                        } else replier.reply('error:permission_lacking');
                    }
                }
            }
        }
        if (msg.substr(0, 8) == '.demote ') {
            i = msg.substring(8);
            if (login) {
                if (userGroup.indexOf(permission) <= userGroup.indexOf('manager')) {
                    if (Object.keys(Ky.userID).indexOf(i) == -1) {
                        a = Ky.user[Ky.userID[i]].type;
                        if (userGroup.indexOf(a) > userGroup.indexOf(permission)) {
                            if (userGroup.indexOf(a) < userGroup.length) {
                                Ky.user[Ky.userID[i]].type = userGroup[userGroup.indexOf(a) + 1];
                                replier.reply(Ky.user[Ky.userID[i]].type);
                            } else replier.reply('error:lastIndex')
                        } else replier.reply('error:permission_lacking');
                    }
                }
            }
        }




        function commandChk(c, a) {
            Ky.r[room].command[c] = Ky.r[room].command[c] || [true, a];
            a = Ky.r[room].command[c][1];
            if (!login && a != 'all') {
                //replier.reply('이 기능을 사용하려면 인증이 필요합니다. 인증 방법은 공지사항을 참조하세요.');
                return false;
            }
            if (login) {
                if (a != 'all') {
                    if (userGroup.indexOf(a) < userGroup.indexOf(permission)) return false;
                }
            }
            if (!Ky.r[room].command[c][0]) {
                //replier.reply('이 방에서 사용이 제한된 기능입니다.');
                return false;
            }
            return true;
        }
        let c, d;

        if (login) {
            if (userGroup.indexOf(permission) <= userGroup.indexOf('manager')) {
                if (msg == '.print') {
                    var char = '';
                    for (i = 0; i < Object.keys(Ky.r[room].command).length; i++) {
                        char += Object.keys(Ky.r[room].command)[i];
                        char += '  ';
                        char += Ky.r[room].command[Object.keys(Ky.r[room].command)[i]][0];
                        char += '  ';
                        char += Ky.r[room].command[Object.keys(Ky.r[room].command)[i]][1];
                        char += '\n';
                    }
                    char += '\n' + userGroup.join(',');
                    replier.reply(char);
                }

                if (msg.substr(0, 5) == '.set ') {
                    var com = msg.split(' ')[1];
                    var val = msg.split(' ')[2];
                    if (Object.keys(Ky.r[room].command).indexOf(com) != -1) {
                        if (/^[0-9]+$/.test(val)) {
                            Ky.r[room].command[com][1] = userGroup[val];
                            replier.reply(msg);
                        } else if (val == 'all') {
                            Ky.r[room].command[com][1] = 'all';
                            replier.reply(msg);
                        } else if (val == 'true' || val == 'false') {
                            if (val == 'true') Ky.r[room].command[com][0] = true;
                            if (val == 'false') Ky.r[room].command[com][0] = false;
                            replier.reply(msg);
                        } else replier.reply('error:wrong_value');
                    } else replier.reply('error:wrong_target');
                }
            }
        }










        //////////////////////가입과 로그인//////////////////////


        if (msg.substr(0, 6) == '!회원가입 ') {
            var requestID = msg.substring(6).trim();
            if (login) {
                replier.reply('✘(already_login)');
            } else if (Object.keys(Ky.userID).indexOf(requestID) != -1) {
                replier.reply('✘(existing_username)');
            } else {
                var formArray = getRegisterData();
                var a = formArray[1];
                var b = formArray[2];
                var c = formArray[3];
                var d = formArray[4];
                var e = formArray[5];
                var t = formArray[0]
                var n = a.indexOf(requestID);
                var tt = t[n]
                if (a.indexOf(requestID) == -1) {
                    replier.reply('✘(no_such_request)');
                } else if (Ky.registerSession.indexOf(tt) != -1) {
                    replier.reply('✘(session_expired)');
                } else if (checkFormTimeout(tt, 600000)) {
                    replier.reply('✘(session_timeout)');
                } else {
                    var aa = a[n],
                        bb = b[n],
                        cc = c[n],
                        dd = d[n],
                        ee = e[n];
                    var authID = makeAuthID();
                    if (cc == '카카오톡 ID') {
                        var ff = '카카오톡 ID';
                        var gg = dd
                    } else {
                        var ff = '1대1 채팅';
                        var gg = ee
                    }
                    Ky.userID[aa] = authID; //닉네임>>식별코드 쌍
                    Ky.userHash[hash] = authID; //해시>>식별코드 쌍
                    var tt = makeTag(Ky.userTag);
                    Ky.userTag[tt] = authID;

                    Ky.user[authID] = {
                        ID: aa,
                        PW: String(bb),
                        hash: hash,
                        tag: tt,
                        contactType: ff,
                        contact: gg,
                        type: userGroup[userGroup.length - 1]
                    }
                    login = true;
                    Ky.registerSession.push(tt);
                    if (Ky.registerSession.length > 10) {
                        Ky.registerSession.shift();
                    }
                    replier.reply('✔(가입/로그인 성공)');
                }
            }

        }


        if (msg.substr(0, 5) == '!로그인 ') {
            var requestID = msg.substring(5).trim();
            if (login) {
                replier.reply('✘(already_login)');
            } else if (Object.keys(Ky.userID).indexOf(requestID) == -1) {
                replier.reply('✘(no_such_username)');
            } else {
                var formArray = getLoginData();
                var formID = formArray[0];
                var formPW = formArray[1];
                var t = formArray[2];
                var tt = t[formID.indexOf(requestID)];
                if (formID.indexOf(requestID) == -1) {
                    replier.reply('✘(no_such_request)');
                } else if (Ky.loginSession.indexOf(tt) != -1) {
                    replier.reply('✘(session_expired)');
                } else if (checkFormTimeout(tt, 60000)) {
                    replier.reply('✘(session_timeout)');
                } else {
                    var i = formID[formID.indexOf(requestID)];
                    var p = String(formPW[formID.indexOf(requestID)]);
                    var c = Ky.userID[i]; //pcode 추출
                    if (Ky.user[c].PW != p) {
                        replier.reply('✘(password_mismatch)');
                    } else {
                        Ky.userHash[hash] = c; //이 해시와 pcode 연결
                        Ky.loginSession.push(tt);
                        if (Ky.loginSession.length > 10) {
                            Ky.loginSession.shift();
                        }
                        login = true;
                        replier.reply('✔');
                    }
                }
            }
        }

        if (msg == '!로그아웃') {
            if (login) {
                delete Ky.userHash[hash];
                login = false;
                replier.reply('✔');
            } else replier.reply('✘(not_logined)');
        }

        if (msg == '!로그인') {
            if (login) {
                replier.reply('✔(#' + Ky.user[pcode].tag + ')');
            } else replier.reply('✘');
        }












        //////////////////////장터//////////////////////


        //배열 쪼개서 2차원배열의 2차원에 넣어주기!
        if (msg == '!상품등록') {
            if (!login) {
                replier.reply('✘(로그인 후에 사용 가능)');
            } else {
                var data = getMarketData(ID);


                if (data == false) {
                    replier.reply('✘(해당 아이디로 등록된 상품이 없음)');
                } else {
                    for (i = 0; i < data[0].length; i++) {
                        //날짜
                        var time = moment(data[0][i][0].replace('오전', 'AM').replace('오후', 'PM'), "YYYY.MM.DD A hh:mm:ss").add(9, 'h')
                        //삽니다팝니다
                        if (data[0][i][3] == '팝니다') {
                            var asdf = 0;
                        } else {
                            var asdf = 1;
                        }
                        //연락처
                        if (data[0][i][7] == '기본 연락처(회원가입시 작성)') data[0][i][7] = false;

                        var marketid = makeTag(Ky.market[1]);
                        Ky.market[0].unshift(pcode); //0-pcode
                        Ky.market[1].unshift(marketid); //1-marketid
                        Ky.market[2].unshift(time); //2-timestamp
                        Ky.market[3].unshift(asdf); //3-삽니다팝니다
                        Ky.market[4].unshift(data[0][i][4]); //4-상품명
                        Ky.market[5].unshift(data[0][i][5]); //5-가격
                        Ky.market[6].unshift(data[0][i][6]); //6-설명
                        Ky.market[7].unshift(data[0][i][7]); //7-연락처
                        Ky.market[8].unshift(data[0][i][8]); //8-택배거래
                        Ky.market[9].unshift(data[0][i][9]); //9-직거래
                    }
                    replier.reply('[[제품 등록 로그]]' + blank + data[1].join('\n'));
                }
            }
        }

        if (msg == '!장터') {
            var typ = ['팝니다', '삽니다', '판매 예약중', '구매 예약중']
            var str = '[[장터]]' + blank;
            for (i = 0; i < Ky.market[0].length; i++) {
                str += Ky.market[1][i] + ' | ';
                str += getName(Ky.market[0][i]) + '#' + Ky.user[Ky.market[0][i]].tag + ' | ';
                str += moment(Ky.market[2][i]).format('YYYY-MM-DD HH:mm') + '\n\n';
                str += '  [' + typ[Ky.market[3][i]] + '] ' + Ky.market[4][i] + '\n';
                str += '  ' + Ky.market[5][i] + '원';
                if (Ky.market[3][i] == 0) str += ' / 택배 ' + Ky.market[8][i] + ' / 직거래 ' + Ky.market[9][i];
                str += '\n  ';
                if (!Ky.market[7][i]) {
                    str += Ky.user[Ky.market[0][i]].contactType + ' : ' + Ky.user[Ky.market[0][i]].contact + '\n';
                } else {
                    str += '연락처 : ' + Ky.market[7][i] + '\n';
                }
                str += '》 ' + Ky.market[6][i] + '\n\n\n'
            }
            replier.reply(str)
        }


        if (msg == '!내상품') {
            var typ = ['팝니다', '삽니다', '판매 예약중', '구매 예약중']
            var str = '';
            for (i = 0; i < Ky.market[0].length; i++) {
                if (Ky.market[0][i] != pcode) continue;
                if (Ky.market[3][i] != 0 && Ky.market[3][i] != 1) continue;
                str += '[' + typ[Ky.market[3][i]] + '] ' + Ky.market[4][i] + '\n';
            }

            str += blank;

            for (i = 0; i < Ky.market[0].length; i++) {
                if (Ky.market[0][i] != pcode) continue;
                str += Ky.market[1][i] + ' | ';
                str += getName(Ky.market[0][i]) + '#' + Ky.user[Ky.market[0][i]].tag + ' | ';
                str += moment(Ky.market[2][i]).format('YYYY-MM-DD HH:mm') + '\n\n';
                str += '  [' + typ[Ky.market[3][i]] + '] ' + Ky.market[4][i] + '\n';
                str += '  ' + Ky.market[5][i] + '원';
                if (Ky.market[3][i] == 0) str += ' / 택배 ' + Ky.market[8][i] + ' / 직거래 ' + Ky.market[9][i];
                str += '\n  ';
                if (!Ky.market[7][i]) {
                    str += Ky.user[Ky.market[0][i]].contactType + ' : ' + Ky.user[Ky.market[0][i]].contact + '\n';
                } else {
                    str += '연락처 : ' + Ky.market[7][i] + '\n';
                }
                str += '》 ' + Ky.market[6][i] + '\n\n\n'
            }


            replier.reply(str)
        }

        if (msg.substr(0, 4) == '!끌올 ' || msg.substr(0, 6) == '!상태변경 ' || msg.substr(0, 6) == '!등록해제 ' || msg.substr(0, 6) == '!가격변경 ') {
            if (msg.substr(0, 4) == '!끌올 ') var p = msg.substring(4).trim();
            if (msg.substr(0, 6) == '!상태변경 ') var p = msg.substring(6).trim();
            if (msg.substr(0, 6) == '!등록해제 ') var p = msg.substring(6).trim();
            if (msg.substr(0, 6) == '!가격변경 ') {
                var p = msg.split(' ')[1];
                var q = msg.split(' ')[2];
            }

            var t = Ky.market[1].indexOf(p);
            if (t == -1) {
                replier.reply('✘(no_such_marketID)');
            } else {
                if (Ky.market[0][t] != pcode) {
                    replier.reply('✘(user_mismatch)');
                } else {

                    if (msg.substr(0, 4) == '!끌올 ') {
                        pullTop(Ky.market, t);
                        replier.reply('✔');
                    }

                    if (msg.substr(0, 6) == '!상태변경 ') {
                        if (Ky.market[3][t] % 2 < 2) {
                            Ky.market[3][t] += 2;
                        } else Ky.market[3][t] -= 2;
                        replier.reply('✔');
                    }

                    if (msg.substr(0, 6) == '!등록해제 ') {
                        deleteColumn(Ky.market, t);
                        replier.reply('✔');
                    }

                    if (msg.substr(0, 6) == '!가격변경 ') {
                        if (q.match(/^[1-9][0-9]*$/g || q == 0)) {
                            if (q > 499 || q == 0) {
                                Ky.market[5][t] = String(q);
                                replier.reply('✔');
                            } else replier.reply('✘(단위는 KRW입니다)')
                        } else replier.reply('✘(자연수만 입력해 주세요)')
                    }

                }
            }
        }









        //자동응답
        if (msg.indexOf("[다나와 PC견적]") >= 0) replier.reply(sender + "님, 앱에서 견적 공유시 카카오톡보내기 대신 URL복사를 사용해주세요. PC버전에서 안보여요.");

        if (Ky.r[room].admin.length == 0 && msg == '!등록') {
            Ky.r[room].admin.push(Ky.r[room].memCheck);
            replier.reply('등록 성공');
        }

        if (msg == '!중지' && Ky.r[room].admin.indexOf(Ky.r[room].memCheck) != -1) {
            Ky.r[room].memOn = false;
            replier.reply('적용 완료');
        }

        if (msg == '!실행' && Ky.r[room].admin.indexOf(Ky.r[room].memCheck) != -1) {
            Ky.r[room].memOn = true;
            replier.reply('적용 완료');
        }

        if (Ky.r[room].memArray.indexOf(Ky.r[room].memCheck) == -1) {
            if (Ky.r[room].memOn == true) {
                replier.reply('[자동응답]\n■■■■■■■■■■■■\n' + sender + '님 어서오세요!\n모바일은 우측상단 메뉴열고\nPC는 채팅창 맨위 방제아래\n하트버튼을 채워주세요!');
            }
            Ky.r[room].memArray.push(Ky.r[room].memCheck);
        }













        //////////////////////견적////////////////////////


        //비활성 호환검사
        if (msg.indexOf('shop.danawa.com/short') != -1 || msg.indexOf('is.gd') != -1) {
            try {
                var temp = String(org.jsoup.Jsoup.connect(msg).followRedirects(true).execute().url());
                msg = temp;
            } catch (e) {}
        }
        if (msg.indexOf('&productSeqList=') != -1 && msg.indexOf('&quantityList=') != -1) {
            var pList = msg.split('&productSeqList=')[1].split('&')[0].split(',');
            var check = true;
        } else if (msg.indexOf('?productSeq=') != -1 && msg.indexOf('&count=') != -1) {
            var pList = msg.split('?productSeq=')[1].split('&')[0].split(',');
            var check = true;
        }

        if (check) {
            var doc = JSON.parse(org.jsoup.Jsoup.connect('http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=compatibility&productSeqList=' + pList.join('%2C')).ignoreContentType(true).get().text());
            if (doc.desc == '') {
                var list1 = ['cpu-ram', 'cpu-mainboard', 'ram-mainboard', 'case-mainboard', 'case-vga', 'case-power'];
                var list2 = ['cpuMessage', 'cpuMessage', 'ramMessage', 'caseMessage', 'caseMessage', 'caseMessage'];
                var str = '';
                for (i = 0; i < 6; i++) {
                    if (doc.result[list1[i]]) {
                        if (doc.result[list1[i]].result == '0002') {
                            str += android.text.Html.fromHtml(doc.result[list1[i]][list2[i]]) + '\n'
                        }
                    }
                }
                if (str.length > 0) replier.reply('[[해당 견적에 호환성 문제가 있습니다]]' + blank + str)
            }
        }

        //견적비교
        com: {
            var c = '견적비교';
            var a = 'all';
            if (commandChk(c, a) == false) break com;
            tag: {
                if (msg.substr(0, 6) == '!견적비교 ') {
                    replier.reply('파싱 중...');
                    var input = msg.substring(6).trim();
                    try {
                        input = String(org.jsoup.Jsoup.connect(input).followRedirects(true).execute().url());
                    } catch (e) {
                        replier.reply('잘못된 URL입니다.');
                        break tag;
                    }
                    if (input.indexOf('&productSeqList=') != -1 && input.indexOf('&quantityList=') != -1) {
                        var pList = input.split('&productSeqList=')[1].split('&')[0].split(',');
                        var pCount = input.split('&quantityList=')[1].split('&')[0].split(',');
                    } else if (input.indexOf('?productSeq=') != -1 && input.indexOf('&count=') != -1) {
                        var pList = input.split('?productSeq=')[1].split('&')[0].split(',');
                        var pCount = input.split('&count=')[1].split('&')[0].split(',');
                    } else {
                        replier.reply('잘못된 URL입니다.');
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
                                    arr6.push('[현금]')
                                } else {
                                    arr5.push(arr3[i]);
                                    arr6.push('[오픈]')
                                }
                            }
                            //현금이 오픈보다 싸면
                            if (arr3[i] > arr4[i]) {
                                if (arr4[i] == 0) {
                                    arr5.push(arr3[i]);
                                    arr6.push('[오픈]')
                                } else {
                                    arr5.push(arr4[i]);
                                    arr6.push('[현금]')
                                }
                            }
                        }
                        var carr23 = compareArray(arr2, arr3),
                            carr24 = compareArray(arr2, arr4),
                            carr25 = compareArray(arr2, arr5);

                        function sum(array) {
                            var result = 0.0;
                            for (var i = 0; i < array.length; i++) {
                                result += Number(array[i] * pCount[i]);
                            }
                            return result;
                        }

                        var sum2 = 0.0;
                        for (var i = 0; i < arr2.length; i++) {
                            if (arr2[i] == 0) {
                                var tt = arr5[i]
                            } else var tt = arr2[i]
                            sum2 += Number(tt * pCount[i]);
                        }

                        var sum22 = sum(arr2);

                        var sum3 = sum(arr3),
                            sum4 = sum(arr4),
                            sum5 = sum(arr5);

                        var str = '[ ' + sum2;
                        if (sum22 != sum2) str += '*';
                        str += (' → ' + sum5 + ' ]\n(' + String(compareNumber(sum2, sum5)) + ' / ' + String(sum5 - sum2) + ')' + blank);
                        for (i = 0; i < arr3.length; i++) {
                            if (arr2[i] == 0) str += '*';
                            str += arr1[i] + '\n ';
                            str += pCount[i] + 'x ' + arr6[i] + ' ' + (arr5[i] * pCount[i]) + ' (' + carr25[i] + ' / ' + String((arr5[i] - arr2[i]) * pCount[i]) + ')\n';
                        }
                        str += '\n\n';
                        str += '견적: ' + sum2
                        if (sum22 != sum2) str += '(' + sum22 + ')';
                        str += '\n오픈: ' + sum3;
                        if (arr3.indexOf('0')) str += '*'
                        str += '\n현금: ' + sum4;
                        if (arr4.indexOf('0')) str += '*'
                        str += '\n\n';
                        for (i = 0; i < arr3.length; i++) {
                            str += arr1[i] + ' 》 ' + arr2[i] + '\n| ';
                            str += arr3[i] + '(' + carr23[i] + ')  ' + arr4[i] + '(' + carr24[i] + ')\n';
                        }
                        replier.reply(str)
                    }
                }
            }
        }

        com: {
            var c = '파워';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            //파워
            if (msg.substr(0, 4) == '!파워 ') {
                var input = msg.substring(4).trim();
                var p = getpCodeFromGoogle(input, '파워');
                if (p == false) {
                    replier.reply('잘못된 입력입니다.');
                } else {
                    var doc = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + p).get();
                    var t = doc.select('meta[name=description]').attr('content').split(' 가격비교 - 요약정보 : ');
                    var pName = t[0],
                        pDescription = t[1]
                    if (doc.select('div[class=bor_mt10 dpg_power_link] div').attr('data-nbpkeyword') != '파워서플라이') {
                        replier.reply('잘못된 카테고리입니다.');
                    } else {
                        var t = getDanawaDetail(p);
                        var certNo = t[1][t[1].length - 1]
                        try {
                            var data = org.jsoup.Jsoup.connect('http://safetykorea.kr/release/certDetail').data("certNum", certNo).post().select('div.section').get(2).select('tbody');
                        } catch (e) {
                            try {
                                certNo2 = certNo + 'A'
                                var data = org.jsoup.Jsoup.connect('http://safetykorea.kr/release/certDetail').data("certNum", certNo2).post().select('div.section').get(2).select('tbody');
                            } catch (e) {
                                replier.reply('해당 DB 검색에 실패하였습니다. 봇 관리자에게 연락해 주세요.')
                            }
                        }
                        var certA = data.select('td').get(0).text();
                        var certB = data.select('td').get(2).text();
                        replier.reply('[ ' + pName + ' ]' + '\n인증번호: ' + certNo + '\n제조사: ' + certA + '\n유통사: ' + certB);
                    }
                }
            }
        }

        com: {
            var c = '쿨러호환';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            if (msg.split('\n')[0] == '!쿨러호환') {
                var input1 = msg.split('\n')[1];
                var input2 = msg.split('\n')[2];
                var chaCode = getpCodeFromGoogle(input1, '케이스');
                var cooCode = getpCodeFromGoogle(input2, '케이스');
                if (!chaCode || !cooCode) {
                    replier.reply('잘못된 입력입니다.');
                } else {
                    var cha = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + chaCode).get();
                    var coo = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + cooCode).get();
                    //카테고리 확인
                    if (cha.select('div[class=bor_mt10 dpg_power_link] div').attr('data-nbpkeyword') != '컴퓨터케이스') {
                        replier.reply('케이스 - 잘못된 카테고리입니다.');
                    } else if (coo.select('div[class=bor_mt10 dpg_power_link] div').attr('data-nbpkeyword') != '쿨러') {
                        replier.reply('쿨러 - 잘못된 카테고리입니다.');
                    } else {
                        var regex = /[^0-9]/g;
                        var ta = coo.select('meta[name=description]').attr('content').split(' 가격비교 - 요약정보 : ');
                        var cooName = ta[0],
                            cooDescription = ta[1];
                        if (cooDescription.indexOf('/ 공랭 /') != -1 || cooDescription.indexOf('/ 수랭 /') != -1) {
                            var tb = cha.select('meta[name=description]').attr('content').split(' 가격비교 - 요약정보 : ');
                            var chaName = tb[0],
                                chaDescription = tb[1]; //이름 태그 긁어오기
                            var chaDetail = getDanawaDetail(chaCode); //표긁어오기
                            var cooDetail = getDanawaDetail(cooCode);
                            if (cooDescription.indexOf('/ 공랭 /') != -1) {
                                var cooType = '공냉';
                                var chaLength = Number(chaDetail[1][chaDetail[0].indexOf('CPU 장착')].replace(/[^\.0-9]/g, ''));
                                var cooLength = Number(cooDetail[1][cooDetail[0].indexOf('CPU쿨러 높이')].replace(/[^\.0-9]/g, ''));
                                if (chaLength < cooLength) {
                                    var compat = false;
                                } else if (chaLength >= cooLength) {
                                    var compat = true;
                                } else {
                                    var compat = 'fail';
                                }
                            } else {
                                try {
                                    var cooType = '수냉';
                                    var chaLength = []
                                    if (chaDetail[0].indexOf('라디에이터(상단)') != -1) chaLength[0] = chaDetail[1][chaDetail[0].indexOf('라디에이터(상단)')].replace(/최대/gi, '').replace(/mm/gi, '').split(', ');
                                    if (chaDetail[0].indexOf('라디에이터(전면)') != -1) chaLength[1] = chaDetail[1][chaDetail[0].indexOf('라디에이터(전면)')].replace(/최대/gi, '').replace(/mm/gi, '').split(', ');
                                    if (chaDetail[0].indexOf('라디에이터(후면)') != -1) chaLength[2] = chaDetail[1][chaDetail[0].indexOf('라디에이터(후면)')].replace(/최대/gi, '').replace(/mm/gi, '').split(', ');
                                    var cooLength = cooDetail[1][cooDetail[0].indexOf('쿨링팬 크기')].split(' x ')[0].replace(/mm/gi, ''); //섹션길이
                                    var cooRow = cooDescription.split('/ 라디에이터: ')[1].split('열 /')[0] //열
                                    var small = ['120', '240', '360', '480']; //120mm
                                    var big = ['140', '280', '420', '560']; //140mm
                                    var pos = ['상단', '전면', '후면'];
                                    var compatPos = [];
                                    for (var i = 0; i < 3; i++) { //상단 전면 후면 각각
                                        if (!chaLength[i]) continue; //호환되지 않는 위치면 스킵
                                        for (var j = 0; j < chaLength[i].length; j++) { //각각의 위치에 호환되는 종류가 1개냐 2개냐에 따라 검사
                                            if (small.indexOf(chaLength[i][j]) != -1) { //샤시 120 체크
                                                if (small.indexOf(chaLength[i][j]) >= small.indexOf(String(cooLength * cooRow)) && small.indexOf(String(cooLength * cooRow)) != -1) { //샤시호환길이와 쿨러길이 비교
                                                    if (compatPos.indexOf(pos[i]) == -1) compatPos.push(pos[i]); //호환이 되면 호환위치 추가(중복은 추가 X)
                                                }
                                            }
                                            if (big.indexOf(chaLength[i][j]) != -1) { //샤시 140 체크
                                                if (big.indexOf(chaLength[i][j]) >= big.indexOf(String(cooLength * cooRow)) && big.indexOf(String(cooLength * cooRow)) != -1) {
                                                    if (compatPos.indexOf(pos[i]) == -1) compatPos.push(pos[i]);
                                                }
                                            }
                                        }
                                    }

                                    if (compatPos.length != 0) {
                                        var compat = true;
                                    } else var compat = false;


                                } catch (e) {
                                    var compat = 'fail';
                                    replier.reply('스크립트 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message);
                                }
                            }

                            //후처리
                            if (compat == 'fail') {
                                replier.reply('데이터 취득 실패')
                            } else {
                                //헤더
                                var str = ''
                                if (compat == true) {
                                    str += '[[호환 가능]]'
                                    if (cooType == '수냉') str += '\n호환 위치: ' + compatPos.join(', ')
                                } else {
                                    str += '[[호환 불가능]]'
                                }


                                str += blank;

                                //자세히보기
                                str += '≫ ' + chaName + '\n';
                                str += '≫ ' + cooName + '\n\n';

                                if (cooType == '공냉') {
                                    str += '케이스 최대 호환 높이: ' + chaLength + '\n';
                                    str += '쿨러 높이: ' + cooLength + '\n\n';
                                }

                                if (cooType == '수냉') {
                                    str += '케이스 최대 호환 크기:\n'
                                    if (chaDetail[0].indexOf('라디에이터(상단)') != -1) str += '≫ 상단 : ' + chaDetail[1][chaDetail[0].indexOf('라디에이터(상단)')] + '\n';
                                    if (chaDetail[0].indexOf('라디에이터(전면)') != -1) str += '≫ 전면 : ' + chaDetail[1][chaDetail[0].indexOf('라디에이터(전면)')] + '\n';
                                    if (chaDetail[0].indexOf('라디에이터(후면)') != -1) str += '≫ 후면 : ' + chaDetail[1][chaDetail[0].indexOf('라디에이터(후면)')] + '\n';
                                    str += '\n쿨러 크기: ' + cooLength * cooRow + 'mm\n\n';
                                }
                                replier.reply(str)
                            }


                        } else {
                            replier.reply('잘못된 카테고리입니다.');
                        }
                    }
                }
            }
        }

        com: {
            var c = '다나와';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            //다나와
            if (msg.substr(0, 5) == '!다나와 ') {
                try {
                    var input = msg.substring(5).trim();
                    var p = getpCodeFromGoogle(input);
                    if (p == false) {
                        replier.reply('잘못된 입력입니다.');
                    } else {
                        var p = p.split('"')[0].split('&')[0];
                        if (Number.isInteger(Number(p)) == true) {

                            var pCode = p
                            var doc1 = org.jsoup.Jsoup.connect('http://prod.danawa.com/info/?pcode=' + pCode).get();
                            var t = doc1.select('meta[name=description]').attr('content').split(' 가격비교 - 요약정보 : ');
                            var pName = t[0],
                                pDescription = t[1];
                            if (doc1.select('strong.ppnum').text().length != 0) {
                                var pPriceOpen = doc1.select('strong.ppnum').text();
                            } else var pPriceOpen = '가격비교 중지';
                            if (doc1.select('strong.num_low01').text().length != 0) {
                                var pPriceCash = doc1.select('strong.num_low01').get(0).text();
                            } else var pPriceCash = '가격비교 중지';
                            var pChart = getPriceChart(pCode, 12);
                            var pRelated = getRelatedPrice(pCode);

                            var ta = getDanawaDetail(pCode);

                            var pDetail = '\n\n\n';
                            for (i = 0; i < ta[1].length; i++) {
                                pDetail += ta[0][i]
                                pDetail += ' ≫ '
                                pDetail += ta[1][i]
                                pDetail += '\n'
                            }

                            replier.reply('[ ' + pName + ' ]\n' + pPriceOpen + ' / ' + pPriceCash + ' ' + blank + 'http://prod.danawa.com/info/?pcode=' + pCode + '\n\n' + pDescription + '\n\n\n' + pRelated + pChart + pDetail);

                        } else {
                            replier.reply('잘못된 입력입니다.');
                        }
                    }
                } catch (e) {
                    replier.reply('오류가 발생했습니다.');
                    replier.reply('스크립트 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
                }
            }
        }

        com: {
            var c = '견적생성';
            var a = 'all';
            if (!commandChk(c, a)) break com;
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
                        if (p == false) {
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
                    replier.reply(shortURL('http://micro.danawa.com/product/wishList?productSeq=' + est.code.join([separator = ',']) + '&count=' + est.quan.join([separator = ','])));
                }
            }
        }

        com: {
            var c = '견적요청';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            //견적요청
            //첫줄(문항내용) = 0, 설문응답은 1부터 시작
            if (msg.substr(0, 6) == '!견적요청 ') {
                var input = msg.substring(6).trim();
                Ky.formTemp = Ky.formTemp || {
                    requester: [],
                    property: []
                }
                if (Ky.formTemp.requester.indexOf(input) == -1) {
                    var prop = getForm(msg.substring(6));
                    if (prop != false) {
                        Ky.formTemp.requester.push(input);
                        Ky.formTemp.property.push(prop);
                        replier.reply(prop)
                        if (Ky.formTemp.requester.length > 10) {
                            Ky.formTemp.requester.shift();
                            Ky.formTemp.property.shift();
                        }
                    } else replier.reply('파싱 실패. 네트워크 오류이거나 해당 이름으로 등록된 설문지가 없습니다.');
                } else {
                    replier.reply(Ky.formTemp.property[Ky.formTemp.requester.indexOf(input)])
                }
            }
        }













        ///////////////////////채팅DB////////////////////////


        //로그출력
        if (msg.split(' ')[0] == '!최근로그') {
            var n = msg.substr(msg.split(' ', 1)[0].length + 1);
            if (!/^[0-9]+$/.test(n) || n.indexOf('0') == 0 || n > 50) {
                replier.reply('50 이하의 자연수를 입력해 주세요.');
            } else {
                n--;
                if (n > Ky.r[room].recentLog[room].sender.length - 1) n = Ky.r[room].recentLog[room].sender.length - 1;
                var char = ('▼전체보기 클릭▼' + blank);
                for (i = n; i >= 0; i--) {
                    char += '\n》';
                    char += Ky.r[room].recentLog[room].sender[i];
                    char += '\n';
                    char += Ky.r[room].recentLog[room].msg[i];
                    char += '\n';
                }
                replier.reply(char);
            }
        }

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

        com: {
            var c = '카운터/순위';
            var a = 'all';
            if (!commandChk(c, a)) break com;
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
        }



        com: {
            var c = '화력';
            var a = 'all';
            if (!commandChk(c, a)) break com;
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
        }











        ///////////////////////잡다한기능//////////////////////

        com: {
            var c = '날씨';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            //지역날씨
            let longword = "\u200b".repeat(500);

            if (msg.split(" ")[0] == "!날씨" && msg.indexOf(' ') != -1) {
                try {
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
                    replier.reply("[ " + npl + " 날씨 ]\n" + cast + blank + "\n\n현재온도 : " + hgod + "°c\n체감온도 : " + cgod + "°c\n▼ 최저기온 : " + cjgo + "°c | ▲ 최고기온 : " + cggo + "°c\n\n미세먼지 : " + msmg + "\n초미세먼지 : " + cmsmg + "\n\n자외선 : " + jys + "\n오존지수 : " + oggs + "\n습도 : " + sd + "\n\n강수 확률 : " + gshr + "\n강수량 : " + gsr + "\n\n풍속 : " + ps + "\n풍향 : " + ph);
                } catch (e) {
                    replier.reply("파싱 실패");
                    replier.reply('eval 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
                }
            }

            //전체날씨
            if (msg == "!날씨") {
                replier.reply(getWeather());
            }
        }

        com: {
            var c = '주소단축';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            //주소단축
            if (msg.substr(0, c.length + 1) == c + ' ') {
                if (checkDetailUrl(msg.substring(c.length + 1))) {
                    replier.reply(shortURL(msg.substring(c.length + 1)))
                } else replier.reply('정확한 주소를 적어주세요.')
            }
        }

        com: {
            var c = '실검';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            //실검
            if (msg == '!실검') {
                var r = org.jsoup.Jsoup.connect('https://www.naver.com/?mobile').get().select('span[class=ah_k]');
                var list = '';
                for (i = 1; i < 21; i++) {
                    list += (i + '. ' + r.get(i).text() + '\n')
                }
                replier.reply('[[실검]]' + blank + list.slice(0, -1))
            }
        }

        com: {
            var c = '검색';
            var a = 'all';
            if (!commandChk(c, a)) break com;
            //네이버
            c = '!네이버';
            if (msg.substr(0, c.length + 1) == c + ' ') {
                replier.reply(shortURL('https://search.naver.com/search.naver?query=' + encodeURI(msg.substring(c.length + 1))));
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
        }










        //로깅
        Ky.r[room].recentLog[room].msg.unshift(msg);
        if (Ky.r[room].recentLog[room].msg.length > 50) Ky.r[room].recentLog[room].msg.pop;

        Ky.r[room].recentLog[room].sender.unshift(sender);
        if (Ky.r[room].recentLog[room].sender.length > 50) Ky.r[room].recentLog[room].sender.pop;


        //배터리 경고
        if (!Device.isCharging() && charge) {
            replier.reply('[시스템 메세지]\nisCharging == false')
            charge = false;
        };
        if (Device.isCharging() && !charge) {
            replier.reply('[시스템 메세지]\nisCharging == true')
            charge = true;
        };

        if (Device.getBatteryLevel() < 10 && batteryOK) {
            replier.reply('[시스템 메세지]\nbatteryLevel < 10')
            batteryOK = false;
        };
        if (Device.getBatteryLevel() && !batteryOK) {
            replier.reply('[시스템 메세지]\nbatteryLevel > 10')
            batteryOK = true;
        };

        Device.getBatteryLevel()

        //저장
        backupCount++;
        if (backupCount >= 200) {
            DataBase.setDataBase('KyBot', JSON.stringify(Ky));
            DataBase.setDataBase('KyBot_backup', JSON.stringify(Ky));
            backupCount = 0;
            Api.gc();
        }

        Ky.backupDay = Ky.backupDay || new Date().getDate();
        if (new Date().getDate() != Ky.backupDay) {
            Ky.backupDay = new Date().getDate();
            DataBase.setDataBase('KyBot_' + Ky.backupDay, JSON.stringify(Ky));
        }


        //백업

        //eval
        if (msg.split(' ')[0] == '.' && sender.indexOf('rgb') != -1) {
            try {
                replier.reply(eval(msg.substr(msg.split(' ', 1)[0].length + 1)));
            } catch (e) {
                replier.reply('eval 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
            }
        }


    } catch (e) {
        replier.reply('스크립트 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
    }
}

function onStartCompile() {
    /*컴파일 또는 Api.reload호출시, 컴파일 되기 이전에 호출되는 함수입니다.
     *제안하는 용도: 리로드시 자동 백업*/
    DataBase.setDataBase('KyBot', JSON.stringify(Ky));
    DataBase.setDataBase('KyBot_compile', JSON.stringify(Ky));
    DataBase.setDataBase('counterDB', JSON.stringify(counter));
    Api.gc();
}
