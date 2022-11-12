let article = document.querySelector('body>article');

article.insertAdjacentHTML('beforeend', `
    <aside class="aside">
        <div class="wrapper">
            <h2>Get In Touch</h2><hr>
            <p>Feel free to get in touch, we are always available for you.</p>
            <input type="text" placeholder="Name"required>
            <input type="number" name="Mobile no." placeholder="Phone no."required>
            <span><input type="number" placeholder="+91" required><input type="email" placeholder="Email"required></span>
            <textarea name="message" id="message" cols="1" rows=4"></textarea>
            <button>Submit Your Details</button>
        </div>
    </aside>
`);