/* =====================================================

VIDHWAAN

Corporate Operating System

VCOS 1.0

FILE      : app.js

STATUS    : FINAL

DO NOT MODIFY

===================================================== */

"use strict";



/* =====================================================
ELEMENTS
===================================================== */


const templateSelect=

document.getElementById(

"templateSelect"

);



const documentContainer=

document.getElementById(

"document-container"

);



const newBtn=

document.getElementById(

"newBtn"

);



const saveBtn=

document.getElementById(

"saveBtn"

);



const pdfBtn=

document.getElementById(

"pdfBtn"

);



const printBtn=

document.getElementById(

"printBtn"

);



const dscBtn=

document.getElementById(

"dscBtn"

);



const archiveBtn=

document.getElementById(

"archiveBtn"

);





/* =====================================================
STORAGE
===================================================== */


const STORAGE={


template:

"vidhwaan_template",



content:

"vidhwaan_content"



};








/* =====================================================
NEW DOCUMENT
===================================================== */


function newDocument(){



if(

confirm(

"Create new document?"

)

){



documentContainer.innerHTML="";



templateSelect.value="";



localStorage.removeItem(

STORAGE.template

);



localStorage.removeItem(

STORAGE.content

);



hideSignatureArea();



}



}








/* =====================================================
LOAD TEMPLATE
===================================================== */


async function loadTemplate(


template

){



if(

!template

)

return;





try{



const response=

await fetch(

`templates/${template}.html`

);





if(

!response.ok

)

throw new Error(

"Template Not Found"

);






const html=

await response.text();





documentContainer.innerHTML=

html;





saveDocument();





window.scrollTo({

top:0,

behavior:"smooth"

});





}

catch(err){



console.error(

err

);





documentContainer.innerHTML=`


<h2>

Unable to load template

</h2>


<p>

Please check template file.

</p>

`;



}



}









/* =====================================================
SAVE DOCUMENT
===================================================== */


function saveDocument(){



localStorage.setItem(

STORAGE.template,

templateSelect.value

);






localStorage.setItem(

STORAGE.content,

documentContainer.innerHTML

);






console.log(

"Saved"

);



}










/* =====================================================
LOAD SAVED DOCUMENT
===================================================== */


function loadSaved(){



const template=


localStorage.getItem(

STORAGE.template

);





const content=


localStorage.getItem(

STORAGE.content

);






if(

template

){



templateSelect.value=

template;



}






if(

content

){



documentContainer.innerHTML=

content;



}



}









/* =====================================================
ARCHIVE
===================================================== */


function archiveDocument(){



const archive={



date:

new Date(),




template:

templateSelect.value,





content:

documentContainer.innerHTML





};






let archives=


JSON.parse(

localStorage.getItem(

"vidhwaan_archive"

)

)

||

[];



archives.push(

archive

);






localStorage.setItem(

"vidhwaan_archive",

JSON.stringify(

archives

)

);






alert(

"Archived"

);



}










/* =====================================================
PDF
===================================================== */


function exportPDF(){



const fileName=


"VIDHWAAN"

+

"_"

+

new Date()

.getTime()

+

".pdf";






downloadPDF(

fileName

);



}










/* =====================================================
PRINT
===================================================== */


function printFile(){



printDocument();



}










/* =====================================================
DSC
===================================================== */


function toggleDSC(){



const area=


document.getElementById(

"signatureArea"

);






area

.classList

.toggle(

"show"

);



}










/* =====================================================
EVENTS
===================================================== */


newBtn

.addEventListener(

"click",

newDocument

);






templateSelect

.addEventListener(

"change",

()=>{


loadTemplate(

templateSelect.value

);


}

);






saveBtn

.addEventListener(

"click",

saveDocument

);






pdfBtn

.addEventListener(

"click",

exportPDF

);






printBtn

.addEventListener(

"click",

printFile

);






dscBtn

.addEventListener(

"click",

toggleDSC

);






archiveBtn

.addEventListener(

"click",

archiveDocument

);










/* =====================================================
AUTO SAVE
===================================================== */


setInterval(

saveDocument,

5000

);










/* =====================================================
SHORTCUTS
===================================================== */


document

.addEventListener(

"keydown",

e=>{



if(

e.ctrlKey

&&

e.key.toLowerCase()

==="s"

){



e.preventDefault();



saveDocument();



}





if(

e.ctrlKey

&&

e.key.toLowerCase()

==="p"

){



e.preventDefault();



printDocument();



}



}

);










/* =====================================================
START
===================================================== */


window

.addEventListener(

"load",

()=>{



loadSaved();



console.log(

`

=====================================

VIDHWAAN

Corporate Operating System

READY

=====================================

`

);



});


