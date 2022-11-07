let title = document.getElementsByTagName('title');

let hLogo = document.querySelector('.navbar .logo a');

let leftFooter = document.querySelectorAll(".left-footer");
let fLogo = document.querySelector(".left-footer");
let fDeletedLogo = document.querySelector(".logo-footer");
let firstEle = document.querySelector(".left-footer .text-footer")
let newFLogo = document.createElement('a');

let startItem = document.querySelectorAll('.mobile_no> li');
let gmail = document.querySelectorAll('.contact-list > li');

let smheader = document.querySelectorAll('.social-list> li');

let smfooter = document.querySelectorAll('.social-footer-list> li');

let address = document.querySelectorAll('.contact-footer> p');

let footerText = document.querySelector('.text-footer');

fLogo.removeChild(fDeletedLogo);
// fLogo.appendChild(newFLogo);
fLogo.insertBefore(newFLogo, firstEle);
newFLogo.innerHTML = "<img src=\"../../../media/logo2.webp\" alt=\"logo\" class=\"footer-logo\">";
// leftFooter.insertBefore(newFLogo, firstEle);
console.log(newFLogo.innerHTML);



title[0].innerText = "MY LEGAL ADDA";

hLogo.innerHTML = "<img class=\"logo_img\" src=\"../../../media/logo2.webp\" alt=\"logo\">"

startItem[0].innerHTML = '<a href=\"#\"><ion-icon class=\'icon\' name=\"call\"></ion-icon> +91-8750144044</a>';
startItem[1].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"call\"></ion-icon> +91-8700933923</a>";
gmail[0].innerHTML = '<a href=\"#\"><ion-icon class=\'icon\' name=\"mail\"></ion-icon> support@mylegaladda.com</a>'

smheader[0].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-facebook\"></ion-icon></a>";
smheader[1].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-twitter\"></ion-icon></a>";
smheader[2].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-instagram\"></ion-icon></a>";
smheader[3].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-youtube\"></ion-icon></a>";

smfooter[0].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-facebook\"></ion-icon></a>";
smfooter[1].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-twitter\"></ion-icon></a>";
smfooter[2].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-instagram\"></ion-icon></a>";
smfooter[3].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-youtube\"></ion-icon></a>";


address[0].innerHTML = "Mon - Sat (10Am-7Pm) <br> +91-8750144044";
address[1].innerHTML = "Send E-mail <br> <a href=\"#\">support@mylegaladda.com</a>";
address[2].innerHTML = "Madra Khel, Anandpuram colony, Shahjahanpur, Uttar Pradesh 242001";


footerText.innerText = "MylegalAdda is an online technology based registration platform to simplify the matters related to Company Registration, Trademark Registration, GST Registration, GST Return, Import Export Code (IEC) ISO Certificate, FSSAI Registration etc. It is a one stop solution for all kind of Registration or Compliance Requirement."

// console.log(smfooter); 

let copywrite = document.querySelector(".copyright p");
copywrite.innerHTML= " All Rights Reserved. Copyright@2022-23. Powered by <a href=\"index.html\">MY LEGAL ADDA</a>"


let navLabel = document.querySelectorAll(".list label");
console.log(navLabel);


navLabel[0].innerHTML = "Start a Business <ion-icon name=\"chevron-down-outline\"></ion-icon>";
navLabel[1].innerHTML = "license & registration <ion-icon name=\"chevron-down-outline\"></ion-icon>";
navLabel[2].innerHTML = "auditing & taxation <ion-icon name=\"chevron-down-outline\"></ion-icon>";
navLabel[3].innerHTML = "legal & compliances <ion-icon name=\"chevron-down-outline\"></ion-icon>";