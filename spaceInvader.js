"use strict";

let cnv = document.querySelector("canvas");
cnv.width = innerWidth;
cnv.height = innerHeight;
let context = cnv.getContext("2d");

context.beginPath();
context.fillStyle = "black";
context.rect(0,0,300,300);
context.fill();

context.beginPath();
context.fillStyle = "Lime";
context.rect(70,70,50,50);
context.rect(20,70,50,50);
context.rect(220,70,50,50);
context.rect(170,70,50,50);
context.rect(70,120,50,50);
context.rect(20,120,50,50);
context.rect(220,120,50,50);
context.rect(170,120,50,50);
context.rect(70,170,50,50);
context.rect(20,170,50,50);
context.rect(220,170,50,50);
context.rect(170,170,50,50);
context.rect(70,120,50,50);
context.rect(20,170,50,50);
context.rect(220,120,50,50);
context.rect(170,120,50,50);
context.rect(70,220,50,50);
context.rect(20,170,50,50);
context.rect(70,170,50,110);
context.rect(20,170,50,50);
context.rect(70,200,50,50);
context.rect(170,190,50,90);


context.rect(20,20,50,50);
context.rect(70,20,50,50);
context.rect(120,20,50,50);
context.rect(170,20,50,50);
context.rect(220,20,50,50);

context.fill();
