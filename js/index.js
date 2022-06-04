function submit(e) {
    e.preventDefault();

    console.log(e.target.value)
}

const from = document.getElementById('contact').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("customer_name").value,
        company: document.getElementById("customer_cname").value,
        email: document.getElementById("customer_email").value,
        number: document.getElementById("customer_number").value,
        office_number: document.getElementById("customer_bnumber").value,
        country: document.getElementById("country").value,
        address: document.getElementById("customer_address").value,
    }

    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "", // add your email
        Password: "", // password 
        To: 'yashking3002@gmail.com',
        From: 'pocketchat30@gmail.com',
        Subject: "This is the subject",
        Body: data
    }).then(
        message => alert(message)
    );


})