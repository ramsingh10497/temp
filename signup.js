function signkaro(e) {
    e.preventDefault();
    let frm = document.getElementById("abc");
    let name = frm.name.value;
    let email = frm.email.value;
    let contact = frm.contact.value;
    let password = frm.password.value;
    if (name == "" || email == "" || contact == "" || password == "") {
        alert("Invalid");
    }
    else {
        let data = {
        name,
        email,
        contact,
        password,
        }

       let arr;
       arr = localStorage.getItem('collection');
       if (arr == null) {
           arr = [];
       }
       else {
           arr = JSON.parse(arr);
       }
       arr.push(data);
        localStorage.setItem('collection', JSON.stringify(arr));
        alert('Successfully Registered')
    }
}