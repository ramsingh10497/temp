let maindiv = document.getElementById('abc');
let movies = localStorage.getItem('cart');
movies = JSON.parse(movies);
for (let ele in movies) {
    let div = document.createElement('div');
    div.setAttribute('class', 'div1');
    let image = document.createElement('img');
    image.src = movies[ele].image;
    let para = document.createElement('p');
    para.innerHTML = `Name:${movies[ele].name}<br>Price:${movies[ele].price}<br>Description:${movies[ele].description}<br>Time: ${movies[ele].time}`;
    let btn1 = document.createElement('button');
    btn1.innerHTML = `Book`;
    btn1.onclick = function () {
       
        res();
    }
    div.append(image,para,btn1);
    maindiv.append(div);
}

function res() {
     id = 0;
     setInterval(function () {
       
        if (id==0) {
            alert("Your Booking is in progress")
        }
        if (id == 3) {
            alert('Your Payment has been received')
        }
        if (id == 8) {
            alert('Preparing your ticket')
        }
        if (id == 10) {
            alert('Booking Successful')
        }
        id++;
   }, 1000);
}