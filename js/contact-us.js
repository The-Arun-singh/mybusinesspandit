let article = document.querySelector('body>article');

article.insertAdjacentHTML('afterbegin', `
    <section class="sec">
        <h2>Our Contact Info</h2> <hr>
        <ul>
            <li><a href="#"><ion-icon class='icon-1' name="call"></ion-icon>
                CA Nilay Shukla: <br>
                +91-8750144044</a></li>
            <li><a href="#"><ion-icon class='icon-1' name="call"></ion-icon>
                Adv Taruna Shukla: <br>
                +91-8700933923</a></li>
            <li><a href="#"><span><ion-icon class='icon-1' name="mail"></ion-icon></span>
                Send E-mail: <br>
                support@mylegaladda.com</a></li>
        </ul>
    </section>
`);