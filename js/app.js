let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let passconf = document.getElementById("passconf");
let site = document.getElementById("site");
let phone = document.getElementById("phone");
let form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    removeAllErrors();
    checkinput();
    checkPhone();
    checkmail();
    checkSite();
    checkpass();  
});

function checkinput()
{
    let uninput = username.value;
    if(uninput.length < 3)
        showError(username, "Username should be atleast 3 characters long");
    else
        username.className = "form-control accepted"
}

function checkmail()
{
    let mailinp = email.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mailinp.length === 0)
        showError(email, "Please enter email address");
    else if(!re.test(mailinp.trim()))
        showError(email, "Not a vaild email address");
    else
        email.className = "form-control accepted"
}

function checkpass() {
    let passinp = password.value;
    let passconfinp = passconf.value;
    if(passinp.length < 6)
        showError(password, "Password must be atleast 6 characters long");
    else if(passinp !== passconfinp)
    {
        showError(password, "Passwords do not match");
        showError(passconf, "Passwords do not match");
    }
    else
    {
        passconf.className= "form-control accepted";
        password.className = "form-control accepted";
    }
}

function checkSite() {
    let siteinp = site.value.trim();    
    const re = /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/g;
    if(siteinp.length===0)
        showError(site, "Please enter your website");
    else if(!re.test(siteinp))  
        showError(site, "Please enter a valid URL");
    else 
        site.className = 'form-control accepted';
}

function checkPhone() {
    let phoneinp = phone.value.trim();    
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if(phoneinp.length===0)
        showError(phone, "Please enter your phone number");
    else if(!re.test(phoneinp))  
        showError(phone, "Please provide the phone number in the shown format");
    else 
        phone.className = 'form-control accepted';
}

function showError(element, message) {
    let errmsg = document.createElement("p");
    element.classList.add("rejected");
    errmsg.innerHTML = message;
    errmsg.classList.add("text-danger")
    element.parentElement.appendChild(errmsg);
}

function removeAllErrors() {
    document.querySelectorAll('p').forEach(el => el.remove());
    document.querySelectorAll('.rejected').forEach(el => el.classList.remove('rejected'));
}



