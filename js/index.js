let startItem = document.querySelectorAll('.mobile_no> li');
let gmail = document.querySelectorAll('.contact-list > li');

let smheader = document.querySelectorAll('.social-list> li');

let smfooter = document.querySelectorAll('.social-footer-list> li');

let address = document.querySelectorAll('.contact-footer> p');
console.log(address);

startItem[0].innerHTML = '<a href=\"#\"><ion-icon class=\'icon\' name=\"call\"></ion-icon> +91-8750144044</a>';
startItem[1].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"call\"></ion-icon> +91-8700933923</a>";
gmail[0].innerHTML = '<a href=\"#\"><ion-icon class=\'icon\' name=\"mail\"></ion-icon> jskcms2019@gmail.com</a>'

smheader[0].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-facebook\"></ion-icon>arun</a>";
smheader[1].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-twitter\"></ion-icon></a>";
smheader[2].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-instagram\"></ion-icon></a>";
smheader[3].innerHTML = "<a href=\"#\"><ion-icon class=\'icon\' name=\"logo-youtube\"></ion-icon></a>";

smfooter[0].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-facebook\"></ion-icon></a>";
smfooter[1].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-twitter\"></ion-icon></a>";
smfooter[2].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-instagram\"></ion-icon></a>";
smfooter[3].innerHTML = "<a href=\"#\"><ion-icon class=\'footer-icon\' name=\"logo-youtube\"></ion-icon></a>";


address[0].innerHTML = "Mon - Sat (10Am-7Pm) <br> +91-8750144044";
address[1].innerHTML = "Send E-mail <br> <a href=\"#\">jskcms2019@gmail.com</a>";
address[2].innerHTML = "Madra Khel, Anandpuram colony,<br> Shahjahanpur<br> Uttar Pradesh 242001";


// console.log(smfooter);