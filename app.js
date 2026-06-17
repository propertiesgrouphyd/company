/* =========================================

VIDHWAAN

Corporate Document System

FINAL

========================================= */

"use strict";



/* =========================================

ELEMENTS

========================================= */


const templateSelect =

document.getElementById(

"templateSelect"

);



const documentContainer =

document.getElementById(

"document-container"

);



const printBtn =

document.getElementById(

"printBtn"

);



const pdfBtn =

document.getElementById(

"pdfBtn"

);



const newBtn =

document.getElementById(

"newBtn"

);



const paper =

document.getElementById(

"paper"

);





/* =========================================

NEW DOCUMENT

========================================= */


newBtn

.addEventListener(

"click",

()=>{


documentContainer.innerHTML=`


<div class="welcome">


<h1>

VIDHWAAN

</h1>


<p>

Corporate Document System

</p>


<p>

Select a template from the top menu.

</p>


</div>

`;


templateSelect.value="";


}

);








/* =========================================

LOAD TEMPLATE

========================================= */


async function loadTemplate(

template

){


if(!template)

return;





try{



const response=

await fetch(

`templates/${template}.html`

);





if(

!response.ok

){

throw new Error(

"Template not found"

);

}





const html=

await response.text();





documentContainer.innerHTML=

html;





window.scrollTo({

top:0,

behavior:"smooth"

});





}

catch(error){



console.error(

error

);





documentContainer.innerHTML=`


<div class="welcome">


<h1>

Error

</h1>


<p>

Unable to load template.

</p>


</div>

`;


}



}








/* =========================================

SELECT TEMPLATE

========================================= */


templateSelect

.addEventListener(

"change",

()=>{


loadTemplate(

templateSelect.value

);


}

);









/* =========================================

PRINT

========================================= */


printBtn

.addEventListener(

"click",

()=>{


window.print();


}

);









/* =========================================

TRUE PDF

========================================= */


pdfBtn

.addEventListener(

"click",

()=>{



pdfBtn.innerText=

"Preparing...";





const options={



margin:

[10,10,10,10],






filename:

templateSelect.value

||

"VIDHWAAN_Document"

+

".pdf",







image:{


type:

"jpeg",


quality:

1

},








html2canvas:{



scale:

3,



useCORS:

true,



scrollY:

0,



logging:

false



},









jsPDF:{



unit:

"mm",



format:

"a4",



orientation:

"portrait"



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

.then(()=>{


pdfBtn.innerText=

"Download PDF";


})

.catch(()=>{


pdfBtn.innerText=

"Download PDF";


});



});










/* =========================================

WELCOME

========================================= */


console.log(

`

=========================================

VIDHWAAN

Corporate Document System

READY

=========================================

`

);
