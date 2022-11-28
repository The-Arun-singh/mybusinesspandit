// let mobNum1 = '+91-8750144044';
// let mobNum2 = '+91-8700933923';
// let email = 'support@MYBUSINESSPANDIT.com';

let article = document.querySelector('body>article');

article.insertAdjacentHTML('afterbegin', `
    <section class="sec">
        <h2>Our Contact Info</h2> <hr>
        <ul>
            <li><a href="tel:${mobNum1}"><ion-icon class='icon-1' name="call"></ion-icon>
                CA Nilay Shukla: <br>
                ${mobNum1}</a></li>
            <li><a href="tel:${mobNum2}"><ion-icon class='icon-1' name="call"></ion-icon>
                Adv Taruna Shukla: <br>
                ${mobNum2}</a></li>
            <li><a href="mailto:${email}"><span><ion-icon class='icon-1' name="mail"></ion-icon></span>
                Send E-mail: <br>
                support@</br>mybusinesspundit.com</a></li>
        </ul>
    </section>
`);