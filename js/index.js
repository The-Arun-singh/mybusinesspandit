let navList = document.querySelector('.list');
let openBtn = document.getElementById("open_btn");
let closeBtn = document.getElementById('close_btn');

function open() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        for (let i=0; i< navList.childElementCount; i++) {
            navList.children[i].style.display = 'block';
        }
        openBtn.style.display = 'none';
        closeBtn.style.display = 'unset';
    }
}
function close() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        for (let i=0; i< navList.childElementCount; i++) {
            navList.children[i].style.display = 'none';
        }
        openBtn.style.display = 'unset';
        closeBtn.style.display = 'none';
    }
}
// (function() {
//     if (window.matchMedia('(min-width: 767px)').matches) {
//         for (let i=0; i< navList.childElementCount; i++) {
//             navList.children[i].style.display = 'block';
//         }
//         openBtn.style.display = 'none';
//         closeBtn.style.display = 'none';
//     } 
// })();


openBtn.addEventListener("click", open);
closeBtn.addEventListener('click', close);
