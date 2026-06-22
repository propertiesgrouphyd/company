/* =====================================================

VIDHWAAN

Corporate Operating System

VCOS 1.0

FILE      : pdf-engine.js

STATUS    : FINAL

TYPE      : PERMANENT

===================================================== */

"use strict";


/* =====================================================
PDF ENGINE CONFIG
===================================================== */

const PDF_ENGINE = {

orientation:"portrait",

format:"a4",

unit:"mm",

margin:[

0,

0,

0,

0

],

filename:

"VIDHWAAN.pdf",

image:{

type:"jpeg",

quality:1

},

html2canvas:{

scale:2,

useCORS:true,

scrollY:0,

logging:false,

letterRendering:true

},

jsPDF:{

unit:"mm",

format:"a4",

orientation:"portrait",

compress:true

}

};



/* =====================================================
DOWNLOAD PDF
===================================================== */

function downloadPDF(

filename=

"VIDHWAAN.pdf"

){

const paper=

document.getElementById(

"paper"

);


if(

!paper

){

alert(

"Paper not found"

);

return;

}


const options={

margin:

PDF_ENGINE.margin,

filename:

filename,

image:

PDF_ENGINE.image,

html2canvas:

PDF_ENGINE.html2canvas,

jsPDF:

PDF_ENGINE.jsPDF,

pagebreak:{

mode:[

'css',

'legacy',

'avoid-all'

],

before:

'.page-break',

avoid:[

'table',

'tr',

'td',

'th',

'footer',

'.signature-area',

'h1',

'h2',

'h3',

'h4'

]

}

};


html2pdf()

.set(

options

)

.from(

paper

)

.save()

.catch(

err=>{

console.error(

err

);

alert(

"Unable to generate PDF"

);

}

);

}




/* =====================================================
PRINT
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


PDF_ENGINE.jsPDF.orientation=

"portrait";


console.log(

"Portrait Mode"

);

}




/* =====================================================
LANDSCAPE
===================================================== */

function setLandscape(){

PDF_ENGINE.orientation=

"landscape";


PDF_ENGINE.jsPDF.orientation=

"landscape";


console.log(

"Landscape Mode"

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


const content=

paper.innerText;


const hash=

CryptoJS

.SHA256(

content

)

.toString();


const hashElement=

document.getElementById(

"hash"

);


if(

hashElement

){

hashElement.innerText=

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

typeof QRCode==="undefined"

||

typeof CONFIG==="undefined"

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

pageNo.innerText=1;


if(

totalPages

)

totalPages.innerText=1;

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

=====================================

VIDHWAAN

PDF ENGINE READY

=====================================

`

);

}

);
