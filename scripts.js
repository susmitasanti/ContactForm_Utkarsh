


function submit() {
    const name1 = document.getElementById("name").value;
    const email = document.getElementById("email1").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const recipient = document.getElementById("email2").value;
    const github = document.getElementById("github").value;
    const linkedin = document.getElementById("linkedin").value;
    const subject = "Contact Form"
    if (name1.trim() === '' || email.trim() === '' || contact.trim() === '' || address.trim() === '' || recipient.trim() === '' || github.trim() === 'www.github.com/' || linkedin.trim() === 'www.linkedin.com/') {
        let conf = confirm("All Fields are Required");

    }
    else if (name1.trim() != '' && email.trim() != '' && contact.trim() != '' && address.trim() != '' && recipient.trim() != '' && github.trim() != 'www.linkedin.com/' && linkedin.trim() != 'www.linkedin.com/') {

        if ((contact.trim()).length > 10 || (contact.trim()).length < 10) {
            confirm("Please enter a valid Contact No.")
        }

        else {
            console.log("Hullo");
            window.location = "mailto:" + recipient + "?subject=" + subject + "&body=Dear Sir/Madam%0AFollowing is my Contact Information:" + "%0AName: " + name1 + "%0APhone: " + contact + "%0AAddress: " + address + "%0AGitHub: " + github + "%0ALinkedIn: " + linkedin;
        }
    }


}


