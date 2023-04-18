var likeCount1 = 9;
var likeCount1Element = document.querySelector("#likes1");
var likeCount2 = 12;
var likeCount2Element = document.querySelector("#likes2");
var likeCount3 = 9;
var likeCount3element = document.querySelector("#likes3");

function likePost1(){
    likeCount1++
    likeCount1Element.innerText = likeCount1;
}

function likePost2(){
    likeCount2++
    likeCount2Element.innerText = likeCount2;
}

function likePost3(){
    likeCount3++
    likeCount3element.innerText = likeCount3;
}