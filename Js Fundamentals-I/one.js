const btn_1 = document.querySelector('.btn1');
const btn_2 = document.querySelector('.btn2');
const ulEl = document.querySelector('ul');
const para = document.querySelector('.para');
const alreadyExist = document.querySelector('.alreadyExist');
const searchBar = document.querySelector('.searchBar');

const arrList = ['Sachin', 'MS Dhoni', 'Virat'];

arrList.forEach(item => addPlayer(item));

btn_1.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  btn_2.classList.toggle('hidden');
  document.querySelector('.main').classList.toggle('bgcolor');
  setBtn();
});

// Change button
function setBtn() {
  if (document.body.classList.contains('dark-mode')) {
    document
      .querySelectorAll('.deleteBtn')
      .forEach(item => (item.style.color = '#fff'));
    document.getElementById('icon').src =
      'https://cdn-icons-png.flaticon.com/512/0/370.png';
  } else {
    document.getElementById('icon').src =
      'https://cdn-icons-png.flaticon.com/512/2260/2260982.png';
    document
      .querySelectorAll('.deleteBtn')
      .forEach(item => (item.style.color = '#000'));
  }
}

function addPlayer(player) {
  //create a new element
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  deleteButton.className = 'deleteBtn';

  //set content
  li.textContent = player;
  const content = document.createTextNode('delete');

  //add li to DOM
  ulEl.appendChild(li);
  deleteButton.appendChild(content);
  li.appendChild(deleteButton);

  //to clear input field
  document.querySelector('#input_value').value = '';

  //delete button functionality
  deleteButton.addEventListener('click', function () {
    this.closest('li').remove();
    const name = this.closest('li').textContent.slice(0, -6);
    const index = arrList.indexOf(name);
    arrList.splice(index, 1);
    if (arrList.length === 0) {
      ulEl.appendChild(para);
      para.textContent = 'The List is Empty 🙂';
    }
  });

  setBtn();
}

function sendPlayer() {
  let input = document.querySelector('#input_value').value;
  const playerAlreadyExists = arrList.find(
    eachItem => eachItem.toLowerCase() === input.toLowerCase()
  );

  if (input === '') {
    alert('Enter the player name');
  } else if (playerAlreadyExists) {
    alreadyExist.innerHTML = `*Player already Exits`;
  } else {
    para.textContent = '';
    arrList.push(input);
    addPlayer(input);
  }
}

btn_2.addEventListener('click', sendPlayer);

document
  .getElementById('input_value')
  .addEventListener('keydown', function (e) {
    alreadyExist.textContent = '';
    if (e.target.value.length > 13) {
      alreadyExist.textContent = 'Only 13 characters';
    } else if (e.key === 'Enter') {
      sendPlayer();
    }
  });

//Search Bar Fnctionality
searchBar.addEventListener('keyup', function (e) {
  alreadyExist.innerHTML = '';
  const inputValue = e.target.value;
  const filteredArr = arrList.filter(function (element) {
    const recievedValue = element
      .toLowerCase()
      .includes(inputValue.toLowerCase());
    if (recievedValue) return element;
  });
  ulEl.innerHTML = '';

  if (filteredArr.length === 0) {
    ulEl.appendChild(para);
    para.textContent = `Player Not Found`;
    para.style.color = 'red';
  } else {
    filteredArr.forEach(function (item) {
      addPlayer(item);
    });
  }
});
