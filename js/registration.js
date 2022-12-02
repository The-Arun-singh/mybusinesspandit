
// get the element 

let main = document.querySelector('#main');

// insert the element 

main.insertAdjacentHTML('beforeend', `
<section class="enquiry">
        <form action="#">
            <h2>ENQUIRE NOW</h2>
            <hr>
            <p>Please Fill This Form To <strong>Get Free Consultancy</strong>  To Start Your Journey With Us</p>
            <label for="Name" class="label">Name</label>
            <input type="text" id="Name" required placeholder="Name" name="name">

            <lable for="Email" class="label">Email</lable>
            <input type="email" placeholder="Email" id="Email" name="email" required>

            <lable for="Phone no." class="label">Phone no.</lable>
            <input type="tel" placeholder="Phone no." id="Phone no." required>

            <label for="Services">Services</label>
            <select name="-start a business-" id="Services">
                <option value="-Start a Business-">-Start a Business-</option>
                <option value="Sole Proprietorship Registration">Sole Proprietorship Registration</option>
                <option value="Partnership Registration">Partnership Registration</option>
                <option value="Limited Liability Partnership Registration">Limited Liability Partnership Registration</option>
                <option value="One Person Company Registration">One Person Company Registration</option>
                <option value="Private Limited Company Registration">Private Limited Company Registration</option>
                <option value="Public Limited Company Registration">Public Limited Company Registration</option>
                <option value="Nidhi Company Registration">Nidhi Company Registration</option>
                <option value="Producer Company Registration">Producer Company Registration</option>
                <option value="Section 8 Micro Finance Company Registration">Section 8 Micro Finance Company Registration</option>
                <option value="Section 8 NGO Registration">Section 8 NGO Registration</option>
                <option value="Society Registration">Society Registration</option>
                <option value="Trust Registration">Trust Registration</option>
            </select>
            <select name="-Licences and Registration-" id="Services">
                <option value="-Licences and Registrations-">-Licences and Registrations-</option>
                <option value="GST Registration">GST Registration</option>
                <option value="Trademark Registration">Trademark Registration</option>
                <option value="MSME Registration">MSME Registration</option>
                <option value="Shops &amp; Establishment Registration">Shops &amp; Establishment Registration</option>
                <option value="ISO Certificate">ISO Certificate</option>
                <option value="PF/ESI Registration">PF/ESI Registration</option>
                <option value="Import Export Code (IEC) Registration">Import Export Code (IEC) Registration</option>
                <option value="FSSAI Registration">FSSAI Registration</option>
                <option value="GEM Registration">GEM Registration</option>
                <option value="80G &amp; 12A Registration">80G &amp; 12A Registration</option>
                <option value="FCRA">FCRA</option>
            </select>
            <select name="-Auditing &amp; Taxation-" id="Services">
                <option value="-Auditing &amp; Taxation-">-Auditing &amp; Taxation-</option>
                <option value="Income Tax">Income Tax</option>
                <option value="GST">GST</option>
                <option value="Statutory Audit">Statutory Audit</option>
            </select>
            <select name="-Legal &amp;Compliances-" id="Services">
                <option value="-Legal &amp;Compliances-">-Legal &amp;Compliances-</option>
                <option value="Annual filling and all other compliances">Annual filling and all other compliances</option>
            </select>
            <button type="submit"class='en-btn'>Book Now</button>
        </form>
    </section>
    
`);