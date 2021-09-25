const body = document.querySelector('body');
const divContainer = document.createElement('div');
const div = document.createElement('div');
const text = document.createTextNode('00:00:00');
const btnContent = document.createElement('div');
const btnInicial = document.createElement('button');
const textBtnInicial = document.createTextNode('Inicial');
const btnStop = document.createElement('button');
const textBtnStop = document.createTextNode('Stop');

let interval = 0;

/* Add class */
divContainer.classList.add('container');
div.classList.add('clock');
btnContent.classList.add('btn-content');
btnInicial.classList.add('btn-Inicial');
btnStop.classList.add('btn-Stop');

/* Add child */
body.appendChild(divContainer);
divContainer.appendChild(div);
div.appendChild(text);
divContainer.appendChild(btnContent);
btnContent.appendChild(btnInicial);
btnInicial.appendChild(textBtnInicial);
btnContent.appendChild(btnStop);
btnStop.appendChild(textBtnStop);

const myCreateClock = () => {
  const myDate = new Date();
  const myObjClock = {
    myHours: myDate.getHours(),
    myMinutes: myDate.getMinutes(),
    mySeconds: myDate.getSeconds()
  };
  if (myObjClock.myHours < 10) {
    myObjClock.myHours = `0${myObjClock.myHours}`;
  }
  if (myObjClock.myMinutes < 10) {
    myObjClock.myMinutes = `0${myObjClock.myMinutes}`;
  }
  if (myObjClock.mySeconds < 10) {
    myObjClock.mySeconds = `0${myObjClock.mySeconds}`;
  }
  text.textContent = `${myObjClock.myHours}:${myObjClock.myMinutes}:${myObjClock.mySeconds}`;
};

btnInicial.addEventListener('click', function () {
  interval = setInterval(myCreateClock, 100);
});

btnStop.addEventListener('click', function () {
  clearInterval(interval);
});
