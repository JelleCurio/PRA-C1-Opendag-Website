function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');
  sidebar.style.display = 'block';
  menuButton.style.opacity = '0';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');
  sidebar.style.display = 'none';
  menuButton.style.opacity = '1';
}

const welcomeMessage = document.getElementById("welcome-message");
const text = "Welkom op de opendag van Curio!|";
const interval = 75;

let index = 0;

setTimeout(() => {
  function typeText() {
    if (index < text.length) {
      welcomeMessage.textContent = text.slice(0, index) + (index % 2 === 0 ? "|" : " ")
      index++
    } else {
      clearInterval(intervalId)
    }
  }

  const intervalId = setInterval(typeText, interval);
}, 3000);

// function changeBg() {
//     var value = document.getElementById('home').offsetHeight;
//     console.log(value);

//     if (window.scrollY > value) {
//         document.querySelector('.C').style.backgroundColor = '#ffcc00';
//         document.querySelector('.Y').style.display = 'block';
//         document.querySelector('.B').style.display = 'none';
//         document.querySelector('.menu-button').style.fill = '#ffcc00';
//         document.querySelector('.close-button').style.fill = '#ffcc00';
//         document.querySelector('.A').style.color = '#ffcc00';
//     }
//     else {
//         document.querySelector('.C').style.backgroundColor = '#56ddf0';
//         document.querySelector('.Y').style.display = 'none';
//         document.querySelector('.B').style.display = 'block';
//         document.querySelector('.menu-button').style.fill = '#56ddf0';
//         document.querySelector('.close-button').style.fill = '#56ddf0';
//         document.querySelector('.A').style.color = '#56ddf0';
//     }
// }

// window.addEventListener('scroll', changeBg);