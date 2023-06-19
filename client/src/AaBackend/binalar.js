const bina = {

    mine : 3,
    lumberman : 4,
    fisher : 3,
    mineDepot : 3,
    logPile : 4,
    hut : 5,
    shipyard : 2,
    harbor : 0,
    bazaar : 1,
    merchant : 2,
    cave :0,

}
const ship = {
    windchaser : 8,
    thunderclasp : 5,
    stormrider : 3,
    hexedtide : 5,
    deathwave : 0,
    greencurse : 1, 
}
const shipNeeded = {
    windchaser : {
        isCurse : false,
        log : 135,
        iron :14
    },
    thunderclasp : {
        isCurse : false,
        log : 135,
        iron :84
    },
    stormrider : {
        isCurse : false,
        log : 435,
        iron :214
    },
    hexedtide : {
        isCurse : true,
        log : 535,
        curse :134
    },
    deathwave : {
        isCurse : true,
        log : 1735,
        curse :504
    },
    greencurse : {
        isCurse : true,
        log : 951235,
        curse :9114
    },
}

const needed = {

    mine : {
        log : 235,
        iron :114
    },
    lumberman : {
        log : 335,
        iron :124
    },
    fisher : {
        log : 335,
        iron :144
    },
    mineDepot : {
        log : 535,
        iron :134
    },
    logPile : {
        log : 635,
        iron :174
    },
    hut : {
        log : 835,
        iron :194
    },
    shipyard : {
        log : 735,
        iron :174
    },
    harbor : {
        log : 835,
        iron :124
    },
    bazaar : {
        log : 45,
        iron :54
    },
    merchant : {
        log : 13,
        iron :15,
    },
    cave : {
        log : 1345,
        iron :1544
    },
}

const build = {
    building : bina,
    required : needed,
    ship : ship,
    requiredShip : shipNeeded,
}
export default build