var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/TheWitcher.jpg') {
      myImage.setAttribute ('src','images/TossACoin.jpg');
    } else {
      myImage.setAttribute ('src','images/TheWitcher.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Для оплаты чеканной монеты, введите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Toss a coin to your Witcher, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Toss a coin to your Witcher, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
