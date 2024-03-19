// const gambar = document.getElementById('gambar');
// gambar.setAttribute('width', 300);
// gambar.setAttribute('height', 215);

// const buttons = document.querySelectorAll('.button');
// const playButton = buttons[3];
// const playButtonElement = playButton.children[0];
// playButtonElement.setAttribute('type', 'submit');


// const dicoding = document.getElementById('dicodingLink');

// dicoding.innerText = 'belajar programing di dicoding';  //hanya text saja yang diambil
// dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>'; //bisa manipulasi dengan mengambil tag yang ada di html

// const google = document.getElementById('googleLink');

// google.innerText = 'Mencari sesuatu di Google';

// google.innerHTML = '<i>Mencari sesuatu di Google</i>';

// const buttons = document.getElementsByClassName('button');

// for (const button of buttons) {
//     button.children[0].style.borderRadius = '6px';
// }


const newElement = document.createElement('li');
newElement.innerText = 'Selamat menikmati!';
const daftar = document.getElementById('daftar');
daftar.appendChild(newElement);

const elementAwal = document.createElement('li');
elementAwal.innerText = 'Hidupkan kompor.';
const itemAwal = document.getElementById('awal');
daftar.insertBefore(elementAwal, itemAwal);
