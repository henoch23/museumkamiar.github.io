const searchInput = document.getElementById('search');
const clearButton = document.getElementById('clear');
const resultsList = document.getElementById('list');
const workList = document.querySelectorAll('.work');

const data = [];

workList.forEach((work) => {
  const imgSrc = work.querySelector('img').src;
  const title = work.querySelector('.layer h3').textContent;
  const description = work.querySelector('.layer p').textContent;
  data.push({ imgSrc, title, description });
});

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.trim().toLowerCase();
  if (value.length > 0) {
    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value);
    });
    setList(filteredData);
  } else {
    clearList();
  }
});

clearButton.addEventListener('click', () => {
  clearList();
});

function setList(data) {
  resultsList.innerHTML = '';
  data.forEach((item) => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.imgSrc;
    const text = document.createElement('p');
    text.textContent = item.title + ' ' item.description;
    listItem.appendChild(img);
    listItem.appendChild(text);
    resultsList.appendChild(listItem);
  });
}

function clearList() {
  resultsList.innerHTML = '';
}