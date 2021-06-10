

let movies = [
    {
        image: 'https://static.toiimg.com/photo/msid-61258645/61258645.jpg?108092',
        name: 'Gadar',
        price: 210,
        discription: 'Thriller',
        time: new Date().getDate()
    },
    {
        image: 'https://boxofficecollection.in/wp-content/uploads/2014/06/holiday-150-Cr-worldwide.jpg',
        name: 'holiday',
        price: 210,
        discription: 'Classic',
        time: new Date().getDate()
    },
    {
        image: 'https://via.placeholder.com/150x150',
        name: 'radhe',
        price: 210,
        discription: 'Classic',
        time: new Date().getDate()
    },
    {
        image: 'https://via.placeholder.com/150x150',
        name: 'wanted',
        price: 210,
        discription: 'Classic',
        time: new Date().getDate()
    },
    {
        image: 'https://via.placeholder.com/150x150',
        name: 'pink',
        price: 210,
        discription: 'Classic',
        time: new Date().getDate()
    },
    {
        image: 'https://via.placeholder.com/150x150',
        name: 'piku',
        price: 210,
        discription: 'Classic',
        time: new Date().getDate()
    }
]

let maindiv = document.getElementById('abc');

for (let i = 0; i < 6; i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'div1');
    let image = document.createElement('img');
    image.src = movies[i].image;
    let para = document.createElement('p');
    para.innerHTML = `Name:${movies[i].name}<br>Price:${movies[i].price}<br>Description:${movies[i].description}<br>Time: ${movies[i].time}`;
    let btn1 = document.createElement('button');
    btn1.innerHTML = `Buy Ticket`
    btn1.onclick = function () {
        cart(movies[i])
    }
    div.append(image,para,btn1);
    maindiv.append(div);
}

function cart(mov) {
    let arr;
    arr = localStorage.getItem('cart');
    if (arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(arr);
    }
    arr.push(mov);
    localStorage.setItem('cart', JSON.stringify(arr));
    window.location.href = '/home/ram/Desktop/ninjas2/week13/4thSprint/book.html'
}