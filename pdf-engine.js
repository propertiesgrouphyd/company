/* =====================================================

VIDHWAAN

Corporate Operating System

VCOS 1.0

FILE      : pdf-engine.js

STATUS    : FINAL

DO NOT MODIFY

===================================================== */

"use strict";



const PDF_ENGINE = {



orientation:

"portrait",



format:

"a4",



unit:

"mm",



margin:[

8,

8,

8,

8

],



filename:

"VIDHWAAN.pdf",



image:{

type:

"jpeg",

quality:

1

},



html2canvas:{

scale:2,

useCORS:true,

scrollX:0,

scrollY:0,

windowWidth:1200,

windowHeight:1700,

logging:false,

letterRendering:true

},



jsPDF:{

unit:"mm",

format:"a4",

orientation:"portrait",

compress:true,

putOnlyUsedFonts:true

}



};





/* =====================================================
DOWNLOAD PDF
===================================================== */


function downloadPDF(

filename="VIDHWAAN.pdf"

){

const paper=

document.getElementById(

"paper"

);

if(!paper){

alert(

"Paper not found"

);

return;

}

const options={

margin:[5,5,5,5],

filename:filename,

image:{

type:"jpeg",

quality:1

},

html2canvas:{

scale:2,

useCORS:true,

scrollX:0,

scrollY:0,

windowWidth:paper.scrollWidth,

windowHeight:paper.scrollHeight,

logging:false

},

jsPDF:{

unit:"mm",

format:"a4",

orientation:"portrait",

compress:true

},

pagebreak:{

mode:[

'avoid-all',

'css',

'legacy'

]

}

};

html2pdf()

.set(options)

.from(paper)

.save()

.catch(err=>{

console.error(err);

alert(

"Unable to generate PDF"

);

});

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



const content=


document

.getElementById(

"paper"

)

.innerText;






const hash=


CryptoJS

.SHA256(

content

)

.toString();






const hashElement=


document

.getElementById(

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


document

.getElementById(

"qrcode"

);





if(

!qrBox

)

return;





qrBox.innerHTML="";






new QRCode(

qrBox,

{


text:


CONFIG.WEBSITE

+

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
SHOW DSC AREA
===================================================== */


function showSignatureArea(){



const area=


document

.getElementById(

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
HIDE DSC AREA
===================================================== */


function hideSignatureArea(){



const area=


document

.getElementById(

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


document

.getElementById(

"pageNo"

);





const totalPages=


document

.getElementById(

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



});
