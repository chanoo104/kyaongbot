//stun 
//lev
//luck
//atk
//def
//coe : 공격력 계수, 1은 나중에 더하자


//여기서부터는 플레이어 턴

//스턴
loop: {
while (true) {

if (cstun == 2){
var a = Math.floor(Math.random() * 3)
if (a != 0) {
    로그
    break sloop; //턴종
} else {
    로그
    var stun = 0
}
}
if (cstun == 1) {
var a = Math.floor(Math.random() * 3)
if (a == 0) {
    로그
    break sloop; //턴종
} else {
    로그
    var cstun = 0
}
}

//회피
var b = Math.floor(Math.random() * 100) //회피 실패하면 이어서, 회피 성공하면 건너뛰기
if (b > eluck + Math.sqrt(elev)) {
    //방어
    var c = Math.floor(Math.random() * 100)
    if (c < eluck + Math.sqrt(elev)) {
        while (edef < 0.25 || edef < 1) var edef = var edef = (Math.floor(Math.random() * 100 - 50) * Math.floor(Math.random() * 50 / 100) + 50) / 10000
        로그
    }
    //크리티컬
    var d = Math.floor(Math.random() * 100)
    if (d < cluck + Math.sqrt(clev)) {
        while (ccoe < 0.25 || ccoe < 1) var ccoe = (Math.floor(Math.random() * 100 - 50) * Math.floor(Math.random() * 50 / 100) + 50) / 1000
        로그
    }
    //공격
    var atkdmg = Math.round(catk * (1 - edef) * (1 + ccoe))
    ehp -= atkdmg
    로그
    if (ehp < 1) {
        로그
        break loop; //겜종
    }
    //스턴
    var e = Math.floor(Math.random() * 100)
    if (e < eluck + Math.sqrt(elev)) {
        var estun = 1
        로그
    }
} else {
    로그
}



//여기서부터는 적 턴(수정해야됨)


if (cstun == 2){
    var a = Math.floor(Math.random() * 3)
    if (a != 0) {
        로그
        break sloop; //턴종
    } else {
        로그
        var stun = 0
    }
    }
    if (cstun == 1) {
    var a = Math.floor(Math.random() * 3)
    if (a == 0) {
        로그
        break sloop; //턴종
    } else {
        로그
        var cstun = 0
    }
    }
    
    //회피
    var b = Math.floor(Math.random() * 100) //회피 실패하면 이어서, 회피 성공하면 건너뛰기
    if (b > eluck + Math.sqrt(elev)) {
        //방어
        var c = Math.floor(Math.random() * 100)
        if (c < eluck + Math.sqrt(elev)) {
            while (edef < 0.25 || edef < 1) var edef = var edef = (Math.floor(Math.random() * 100 - 50) * Math.floor(Math.random() * 50 / 100) + 50) / 10000
            로그
        }
        //크리티컬
        var d = Math.floor(Math.random() * 100)
        if (d < cluck + Math.sqrt(clev)) {
            while (ccoe < 0.25 || ccoe < 1) var ccoe = (Math.floor(Math.random() * 100 - 50) * Math.floor(Math.random() * 50 / 100) + 50) / 1000
            로그
        }
        //공격
        var atkdmg = Math.round(catk * (1 - edef) * (1 + ccoe))
        ehp -= atkdmg
        로그
        if (ehp < 1) {
            로그
            break loop; //겜종
        }
        //스턴
        var e = Math.floor(Math.random() * 100)
        if (e < eluck + Math.sqrt(elev)) {
            var estun = 1
            로그
        }
    } else {
        로그
    }

}
}



//로그 띄우는 부분
