/* =====================================================

VIDHWAAN

Corporate Operating System

VCOS 1.0

FILE       : config.js

STATUS     : FINAL

DO NOT MODIFY UNLESS OFFICIAL DETAILS CHANGE

===================================================== */


"use strict";



const CONFIG = Object.freeze({



/* =====================================================
BRAND
===================================================== */


BRAND:

"VIDHWAAN",



COMPANY:

"GIDIGI TECHNOLOGIES PRIVATE LIMITED",




/* =====================================================
CORPORATE DETAILS
===================================================== */


CIN:

"U62099AP2026PTC126392",



PAN:

"AANCG1335J",



GST:

"Applied For",



WEBSITE:

"vidhwaan.com",



EMAIL:

"info@vidhwaan.com",




/* =====================================================
REGISTERED OFFICE
===================================================== */


ADDRESS:{


HOUSE:

"House of Gidigi Ankaiah",



AREA:

"Utukur Gram Panchayat",



VILLAGE:

"Utukur",



MANDAL:

"Sydapuram",



DISTRICT:

"Nellore",



STATE:

"Andhra Pradesh",



PINCODE:

"524407"


},




/* =====================================================
DIRECTORS
===================================================== */


DIRECTORS:[



{


name:

"NITHIN GIDIGI",



designation:

"Director",



din:

"",



authorized:true,



responsibilities:[



"Corporate Administration",



"Government Filings",



"Banking",



"Corporate Records",



"Business Operations"



]


},





{


name:

"GIDIGI ANKAIAH",



designation:

"Director",



din:

"",



authorized:false,



responsibilities:[



"Director"



]


}



],




/* =====================================================
DOCUMENT DEFAULTS
===================================================== */


DOCUMENT:{



VERSION:

"1.0",



STATUS:

"Draft",



LANGUAGE:

"English",



PREPARED_BY:

"NITHIN GIDIGI",



APPROVED_BY:

"GIDIGI ANKAIAH",



DATE_FORMAT:

"DD MMMM YYYY"



},





/* =====================================================
PAPER
===================================================== */


PAPER:{



SIZE:

"A4",



WIDTH:

210,



HEIGHT:

297,



UNIT:

"mm"



},





/* =====================================================
MARGINS
===================================================== */


MARGIN:{



TOP:

15,



BOTTOM:

15,



LEFT:

15,



RIGHT:

15



},





/* =====================================================
PDF
===================================================== */


PDF:{



PORTRAIT:

"portrait",



LANDSCAPE:

"landscape",



FORMAT:

"a4",



SCALE:

3,



QUALITY:

1,



SELECTABLE_TEXT:true,



WATERMARK:true,



HASH:true,



QR:true,



DSC:true



},






/* =====================================================
FOLDERS
===================================================== */


PATH:{



TEMPLATES:

"templates/",



BOARD:

"templates/board/",



AUDITOR:

"templates/auditor/",



BANK:

"templates/bank/",



DIRECTORS:

"templates/directors/",



SHARES:

"templates/shares/",



ROC:

"templates/roc/",



TAX:

"templates/tax/",



HR:

"templates/hr/",



BUSINESS:

"templates/business/",



CORPORATE:

"templates/corporate/",



RECORDS:

"records/",



AUDIT:

"audit/",



ASSETS:

"assets/"



}



});





console.log(

`

=====================================

VIDHWAAN

Corporate Operating System

CONFIG READY

=====================================

`

);
