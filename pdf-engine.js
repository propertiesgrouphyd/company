/* =====================================================

VIDHWAAN

Corporate Operating System

VCOS 2.0

FILE      : pdf-engine.js

STATUS    : FINAL

TYPE      : PERMANENT

ARCHITECTURE :

HTML
↓

PRINT CSS
↓

window.print()

↓

Browser PDF Engine

===================================================== */

"use strict";


/* =====================================================
CONFIG
===================================================== */

const PDF_ENGINE={

orientation:"portrait",

filename:"VIDHWAAN.pdf"

};



/* =====================================================
DOWNLOAD PDF

Uses browser native PDF engine

No html2pdf

No html2canvas

No image conversion

===================================================== */

function downloadPDF(

filename="VIDHWAAN.pdf"

){

PDF_ENGINE.filename=

filename;


document.title=

filename

.replace(

".pdf",

""

);


window.print();

}



/* =====================================================
PRINT DOCUMENT
===================================================== */

function printDocument(){

window.print();

}



/* =====================================================
PORTRAIT
===================================================== */

function setPortrait(){

PDF_ENGINE.orientation=

"portrait";


document.body

.classList

.remove(

"landscape"

);


document.body

.classList

.add(

"portrait"

);

}



/* =====================================================
LANDSCAPE
===================================================== */

function setLandscape(){

PDF_ENGINE.orientation=

"landscape";


document.body

.classList

.remove(

"portrait"

);


document.body

.classList

.add(

"landscape"

);

}



/* =====================================================
SHA256 HASH
===================================================== */

function generateHash(){


const paper=

document.getElementById(

"paper"

);


if(

!paper

)

return "";


if(

typeof CryptoJS===

"undefined"

)

return "";


const content=

paper.innerText;


const hash=

CryptoJS

.SHA256(

content

)

.toString();


const hashBox=

document.getElementById(

"hash"

);


if(

hashBox

){

hashBox.innerText=

hash;

}


return hash;

}



/* =====================================================
QR CODE
===================================================== */

function generateQR(){


const qrBox=

document.getElementById(

"qrcode"

);


if(

!qrBox

||

typeof QRCode===

"undefined"

||

typeof CONFIG===

"undefined"

)

return;


qrBox.innerHTML="";


new QRCode(

qrBox,

{

text:

CONFIG.WEBSITE+

"/verify",

width:

90,

height:

90,

correctLevel:

QRCode.CorrectLevel.H

}

);

}



/* =====================================================
SHOW SIGNATURE
===================================================== */

function showSignatureArea(){


const area=

document.getElementById(

"signatureArea"

);


if(

area

){

area

.classList

.add(

"show"

);

}

}



/* =====================================================
HIDE SIGNATURE
===================================================== */

function hideSignatureArea(){


const area=

document.getElementById(

"signatureArea"

);


if(

area

){

area

.classList

.remove(

"show"

);

}

}



/* =====================================================
PAGE NUMBERS

Browser controls final pages.

This is preview only.

===================================================== */

function updatePages(){


const pageNo=

document.getElementById(

"pageNo"

);


const totalPages=

document.getElementById(

"totalPages"

);


if(

pageNo

)

pageNo.innerText=

1;


if(

totalPages

)

totalPages.innerText=

1;

}



/* =====================================================
FILE NAME
===================================================== */

function buildFileName(

docNo,

title,

version

){


const safeTitle=

title

.replace(

/[^a-z0-9]/gi,

"_"

)

.toUpperCase();


return

docNo

+

"_"

+

safeTitle

+

"_V"

+

version

+

".pdf";

}



/* =====================================================
INITIALIZE
===================================================== */

window

.addEventListener(

"load",

()=>{


updatePages();


generateHash();


generateQR();


console.log(

`

====================================

VIDHWAAN

PRINT ENGINE READY

NO HTML2PDF

NO HTML2CANVAS

TRUE A4 ENGINE

====================================

`

);

}

);
