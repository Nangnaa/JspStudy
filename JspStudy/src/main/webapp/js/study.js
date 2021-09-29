test();

function test(){
    const numbers = 1000;
    var num1 = 10;
    var num2 = 20;
    var num3 = 30;
    var num4 = 40;
    console.log(num);
    var num;
    console.log(num1);
    console.log(num2);
    console.log(num3);
    var num4 = 400;
    // 초기화하고 사용하는것이 아니라 다시 재선언하기때문에 오류가많다.
    console.log(num4);
    console.log('5번째'+num5);
    var num5 = 50;
    // 오류가 난것이 아니라 변수인식을 하지못해서 언디파인드가 뜸
    // numbers = 10000;
}

var num = 10;
var num2 = 20;
var sum = function(a,b){
    return a+b;
}

console.log(sum(num,num2));

const name_text = document.querySelector('#name');
const submit_button = document.querySelector(".submit_button");
submit_button.onclik = () => {
    alert (name_text.value);
}

var names = function(a,b){return a+b}
console.log(names('이','청우'));

var namess = (a,b) => {return a+b} 
var namess = (a,b) => a+b 
var namesss = a=> a+'청우' 
console.log(namess('이','청우'));
console.log(namesss('이'));
//매개변수가 둘이상일 경우에 ()를 사용한다.

const h1Tag = document.createElement('h1');
const textNode = document.createTextNode('노드 추가');
const h1TagClass =  document.createAttribute('class');
const h1TagValue =  document.createAttribute('value');

h1Tag.setAttributeNode(h1TagClass);
// h1Tag.setAttribute('class','test');
// class 명이 test가 된다
h1Tag.setAttributeNode(h1TagValue);
// h1Tag.setAttribute('value','test');
h1Tag.appendChild(textNode);

console.log(h1Tag.value);

const main = document.querySelector('.main');
main.appendChild(h1Tag);

const textname = document.querySelector('.textname');
const textnameParent = textname.parentNode;
textnameParent.removeChild(textname);





