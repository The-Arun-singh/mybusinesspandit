let header = document.querySelector('.header')

header.insertAdjacentHTML('afterend', `
    <main>
        <h1>Contact Us</h1>
    </main>

    <article>
        <section class="sec">
            <h2>Our Contact Info</h2> <hr>
            <ul>
                <li><a href="tel:${mobNum1}"><ion-icon class='icon-1' name="call"></ion-icon>
                    Nilay Shukla: <br>
                    ${mobNum1}</a></li>
                <li><a href="tel:${mobNum2}"><ion-icon class='icon-1' name="call"></ion-icon>
                    Adv Taruna Shukla: <br>
                    ${mobNum2}</a></li>
                <li><a href="mailto:${email}"><span><ion-icon class='icon-1' name="mail"></ion-icon></span>
                    Send E-mail: <br>
                    ${email}</a></li>
            </ul>
        </section>
        
        <aside class="aside">
            <form class="wrapper">
                <h2>Get In Touch</h2><hr>
                <p>Feel free to get in touch, we are always available for you.</p>
                <input type="text" placeholder="Name" name="name" required>
                <input type="tel" name="Mobile no." placeholder="Phone no." minlength="10" maxlength="10" required>
                <span><input type="number" placeholder="+91" required><input type="email" name="email" placeholder="Email" required></span>
                <textarea name="message" id="message" cols="1" rows=4" minlength="250"></textarea>
                <button type="submit">Submit Your Details</button>
            </form>
        </aside>
    </article>
`);  