"use strict"

{

  document.getElementById("btn1").addEventListener("click", () => {
    const text1 = document.getElementById("a1");
    if ( text1.value === "いたわ" ) {
      document.getElementById("seigo1").innerHTML = "correct!";
    } else {
      document.getElementById("seigo1").innerHTML = "wrong!";
    text1.value = "";
    text1.focus();
    }});

  document.getElementById("btn2").addEventListener("click", () => {
    const text2= document.getElementById("a2");
    if ( text2.value === "ようや" ) {
      document.getElementById("seigo2").innerHTML = "correct!";
    } else {
      document.getElementById("seigo2").innerHTML = "wrong!";
    text2.value = "";
    text2.focus();
    }});

  document.getElementById("btn3").addEventListener("click", () => {
    const text3 = document.getElementById("a3");
    if ( text3.value === "あぐら" ) {
      document.getElementById("seigo3").innerHTML = "correct!";
    } else {
      document.getElementById("seigo3").innerHTML = "wrong!";
    text3.value = "";
    text3.focus();
    }});

  document.getElementById("btn4").addEventListener("click", () => {
    const text4 = document.getElementById("a4");
    if ( text4.value === "あたか" ) {
      document.getElementById("seigo4").innerHTML = "correct!";
    } else {
      document.getElementById("seigo4").innerHTML = "wrong!";
    text4.value = "";
    text4.focus();
    }});

  document.getElementById("btn5").addEventListener("click", () => {
    const text5 = document.getElementById("a5");
    if ( text5.value === "おびただ" ) {
      document.getElementById("seigo5").innerHTML = "correct!";
    } else {
      document.getElementById("seigo5").innerHTML = "wrong!";
    text5.value = "";
    text5.focus();
    }});

  document.getElementById("btn6").addEventListener("click", () => {
    const text6 = document.getElementById("a6");
    if ( text6.value === "わざわざ" ) {
      document.getElementById("seigo6").innerHTML = "correct!";
    } else {
      document.getElementById("seigo6").innerHTML = "wrong!";
    text6.value = "";
    text6.focus();
    }});

  document.getElementById("btn7").addEventListener("click", () => {
    const text7 = document.getElementById("a7");
    if ( text7.value === "むく" ) {
      document.getElementById("seigo7").innerHTML = "correct!";
    } else {
      document.getElementById("seigo7").innerHTML = "wrong!";
    text7.value = "";
    text7.focus();
    }});

  document.getElementById("btn8").addEventListener("click", () => {
    const text8 = document.getElementById("a8");
    if ( text8.value === "うたたね" ) {
      document.getElementById("seigo8").innerHTML = "correct!";
    } else {
      document.getElementById("seigo8").innerHTML = "wrong!";
    text8.value = "";
    text8.focus();
    }});

  document.getElementById("btn9").addEventListener("click", () => {
    const text9 = document.getElementById("a9");
    if ( text9.value === "おもね" ) {
      document.getElementById("seigo9").innerHTML = "correct!";
    } else {
      document.getElementById("seigo9").innerHTML = "wrong!";
    text9.value = "";
    text9.focus();
    }});

  document.getElementById("btn10").addEventListener("click", () => {
    const text10 = document.getElementById("a10");
    if ( text10.value === "かま" ) {
      document.getElementById("seigo10").innerHTML = "correct!";
    } else {
      document.getElementById("seigo10").innerHTML = "wrong!";
    text10.value = "";
    text10.focus();
    }});  


}
