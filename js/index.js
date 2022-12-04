

// varibles
let mobNum1 = '+91-9889887772';
let mobNum2 = '+91-9889887773';
let email = 'support@mybusinesspandit.com';
let facebook = 'https://www.facebook.com/people/Mybusinesspanditcom/100088418073317/';
let instagram = '';
let twitter = '';
let youtube = '';
let logoPath = '/media/logo_27nov_-removebg-preview.png'
// parent element

let title = document.querySelector('title');
let body = document.querySelector('body');
let article = document.querySelector('.article');

// title 

title.innerText = "MY BUSINESS PANDIT";

// write the innerhtml

body.insertAdjacentHTML("afterbegin", `
    <section class="header">
        

        <div class="contact-and-social">
            <ul class="contact-list">
                <span class="mobile_no">
                    <li><a href="tel:${mobNum1}"><ion-icon class='icon' name="call"></ion-icon>${mobNum1}</a></li>
                    <li><a href="tel:${mobNum2}"><ion-icon class='icon' name="call"></ion-icon>${mobNum2}</a></li>
                </span>
                <li><a href="mailto:${email}"><ion-icon class='icon' name="mail"></ion-icon>${email}</a></li>
            </ul>
            <ul class="social-list">
                <li><a href="${facebook}" target="_blank"><ion-icon class='icon' name="logo-facebook"></ion-icon></a></li>
                <li><a href="${instagram}" target="_blank"><ion-icon class='icon' name="logo-instagram"></ion-icon></a></li>
                <li><a href="${twitter}" target="_blank"><ion-icon class='icon' name="logo-twitter"></ion-icon></a></li>
                <li><a href="${youtube}" target="_blank"><ion-icon class='icon' name="logo-youtube"></ion-icon></a></li>
            </ul>
        </div>
    

        <nav class="navbar">

            <div class="logo">
                <a href="/index.html">
                    <img class="logo_img" src="${logoPath}" alt="logo">
                </a>
            </div>

            <input type="checkbox" class="toggler">
            <div class="hamburger">
                <div></div>
            </div>

            <ul class="list">
                <li>
                    <input type="checkbox" name="sublist" id="btn-1">
                    <label for="btn-1" class="first">
                        Start a Business  
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </label>
                    <ul class="sublist">
                        <li><a href="/html/start-a-buisness/sole-proprietorship-registration.html">sole proprietorship registration</a></li>
                        <li><a href="/html/start-a-buisness/partnership-registration.html">partnership registration</a></li>
                        <li><a href="/html/start-a-buisness/limited-liability-partnership-registration.html">limited liability partnership registration</a></li>
                        <li><a href="/html/start-a-buisness/one-person-company.html">one person company</a></li>
                        <li><a href="/html/start-a-buisness/private-limited-company.html">private limited company</a></li>
                        <li><a href="/html/start-a-buisness/nidhi-company.html">nidhi company</a></li>
                        <li><a href="/html/start-a-buisness/producer-company.html">producer company</a></li>
                        <li><a href="/html/start-a-buisness/section-8-micro-finance-company-registration.html">section 8 micro finance company registration</a></li>
                        <li><a href="/html/start-a-buisness/section-8-company-registration.html">section 8 company registration</a></li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" name="sublist" id="btn-2">
                    <label for="btn-2" class="second">
                        license & registration  <ion-icon name="chevron-down-outline"></ion-icon>
                    </label>
                    <ul class="sublist">
                        <li><a href="/html/license-and-registration/gst-registration.html">GST registration</a></li>
                        <li><a href="/html/license-and-registration/trademark-registration.html">trademark registration</a></li>
                        <li><a href="/html/license-and-registration/msme-registration.html">MSME registration</a></li>
                        <li><a href="/html/license-and-registration/shops-and-establishment-registration.html">shops and establishment registration</a></li>
                        <li><a href="/html/license-and-registration/iso-registration.html">ISO registration</a></li>
                        <li><a href="/html/license-and-registration/pf-esi-registration.html">PF/ESI registration</a></li>
                        <li><a href="/html/license-and-registration/import-export-code.html">import export code</a></li>
                        <li><a href="/html/license-and-registration/fssai-registration.html">FSSAI registration</a></li>
                        <li><a href="/html/license-and-registration/80g-and-12a-registration.html">80G and 12A registration</a></li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" name="sublist" id="btn-3">
                    <label for="btn-3" class="third">
                        auditing & taxation  <ion-icon name="chevron-down-outline"></ion-icon>
                    </label>
                    <ul class="sublist">
                        <li><a href="/html/auditing-and-taxation/income-tax.html">income tax</a></li>
                        <li><a href="/html/auditing-and-taxation/gst.html">GST</a></li>
                        <li><a href="/html/auditing-and-taxation/statutory-audit.html">statutory audit</a></li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" name="sublist" id="btn-4">
                    <label for="btn-4" class="fourth">
                            legal & compliances <ion-icon name="chevron-down-outline">
                            </ion-icon>
                    </label>
                    <ul class="sublist">
                        <li><a href="/html/legal-and-compliances/annual-filling-and-all-other-compliances.html">annual filling & all other compliances</a></li>
                    </ul>
                </li>
                <li><a href="/html/contact-us.html">contact us</a></li>
                <li id="blog"><a href="/html/blog.html">blog</a></li>
            </ul>

            <div class="btn">
                <a href="/html/book-now.html">book now <ion-icon class='icon' name="bookmark-outline"></ion-icon></a>
            </div>
        </nav>


    </section>
`);








// add ftr html

body.insertAdjacentHTML("beforeend", `
    <footer>
        <div class="footer">
            <div class="left-footer">
                <img src="${logoPath}" alt="logo" class="logo-footer">
                <p class="text-footer">
                    MYBUSINESSPANDIT is an online technology based registration platform to simplify the matters related to Company Registration, Trademark Registration, GST Registration, GST Return, Import Export Code (IEC) ISO Certificate, FSSAI Registration etc. It is a one stop solution for all kind of Registration or Compliance Requirement.
                </p>
                <ul class="social-footer-list">
                    <li><a href="${facebook}" target="_blank"><ion-icon class='footer-icon' name="logo-facebook"></ion-icon></a></li>
                    <li><a href="${twitter}" target="_blank"><ion-icon class='footer-icon' name="logo-twitter"></ion-icon></a></li>
                    <li><a href="${instagram}" target="_blank"><ion-icon class='footer-icon' name="logo-instagram"></ion-icon></a></li>
                    <li><a href="${youtube}" target="_blank"><ion-icon class='footer-icon' name="logo-youtube"></ion-icon></a></li>
                </ul>
            </div> <br>
            <div class="mid-footer">
                <div class="nav-footer">
                    <h3>get started</h3>
                    <ul class="nav-list">
                        <li><a href="/index.html">home</a></li>
                        <li><a href="/html/our-team.html">our team</a></li>
                        <li><a href="/html/services.html">services</a></li>
                        <li><a href="/html/about-us.html">about us</a></li>
                        <li><a href="/html/contact-us.html">contact us</a></li>
                    </ul>
                </div>
                <div class="contact-footer">
                    <h3>contact</h3>
                    <p>Mon - Sat (10AM-7PM) <br> ${mobNum1}</p> <hr>
                    <p>Send E-mail <br> <a href="mailto:${email}">${email}</a></p> <hr>
                    <p>Madra Khel, Anandpuram colony, Shahjahanpur, Uttar Pradesh, 242001</p>
                </div>
            </div>   <br> 
            <div class="cta">
                <h3>get in touch</h3>
                <input type="text" placeholder="Number" name="mobile-no."><br>
                <button class="btn-lrg">Request a call back</button>
            </div>
        </div>
        <hr>
        <div class="copyright">
            <p> All Rights Reserved. Copyright@2020-21. Powered by <a href="/index.html">my business pandit</a></p>
        </div>
    </footer>
`); 



// enquire now 

article.insertAdjacentHTML('beforeend', `
    <aside class="aside">
        <form class="enquire-now">
            <h3>ENQUIRE NOW</h3>

            <p>Please Fill This Form To <strong>Get Free Consultancy</strong> To Start Your Journey With Us</p>

            <input type="text" placeholder="Name" name='Name' required>

            <input type="email" placeholder="Email" name='email' required>

            <input type="tel" placeholder="Number" name='number' minlength="10" maxlength="10" required>

            <textarea name="message" id="message" cols="1" rows="3" placeholder="Message" minlength="250" required></textarea>

            <button type="submit">ENQUIRE NOW</button>
        </form>
    </aside>
`);