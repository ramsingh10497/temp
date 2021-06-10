function logkaro(e) {
    e.preventDefault();
    let frm = document.getElementById('abc')
    let email = frm.email.value;
    let password = frm.password.value;
    
    if (email == "" || password == "") {
        alert("Invalid Credentials");
    }
    else {
        arr = localStorage.getItem('collection');
        arr = JSON.parse(arr);
        for (let ele in arr) {
            if (email == arr[ele].email && password == arr[ele].password) {
                alert('Login Succesfully');
                window.location.href = '/home/ram/Desktop/ninjas2/week13/4thSprint/tickets.html';
                break;
            }
        }
    }

}