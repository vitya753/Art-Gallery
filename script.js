
document.querySelectorAll('.paintings').forEach(figure => {
  const sizeText = figure.querySelector('.size').textContent;
  const [width, height] = sizeText.split('x').map(Number);
  const area = width + height;

  let sizeCategory = '';
  if (area >= 200) {
    sizeCategory = 'big';
  } else if (area >= 100) {
    sizeCategory = 'medium';
  } else {
    sizeCategory = 'small';
  }

  figure.dataset.size = sizeCategory; 
});


function filterPaintings(size) {
  const paintings = document.querySelectorAll('.paintings');
  paintings.forEach(p => {
    const pSize = p.dataset.size;
    if (size === 'all' || pSize === size) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
}


const buttons = {
  all: document.getElementById('btnAll'),
  big: document.getElementById('btnBig'),
  medium: document.getElementById('btnMedium'),
  small: document.getElementById('btnSmall')
};


buttons.all.addEventListener('click', () => filterPaintings('all'));
buttons.big.addEventListener('click', () => filterPaintings('big'));
buttons.medium.addEventListener('click', () => filterPaintings('medium'));
buttons.small.addEventListener('click', () => filterPaintings('small'));




const button = document.querySelector('.dropdown-btn')
const dropdown = document.querySelector('.dropdown-content')

button.addEventListener('click', function(event) {
  dropdown.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
  }
});


const favorites = new Set();

const showFavoritesBtn = document.getElementById('showFavoritesBtn');

function updateFavoritesCount() {
  showFavoritesBtn.textContent = `${favorites.size}🤍`;
}

document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', () => {
    const figure = button.closest('.paintings');
    const id = figure.dataset.id;

    if (favorites.has(id)) {
      favorites.delete(id);
      button.classList.remove('liked');
      button.textContent = '🤍';
    } else {
      favorites.add(id);
      button.classList.add('liked');
      button.textContent = '❤️';
    }

    updateFavoritesCount();
  });
});

document.getElementById('showFavoritesBtn').addEventListener('click', () => {
  document.querySelectorAll('.paintings').forEach(figure => {
    const id = figure.dataset.id;
    if (favorites.has(id)) {
      figure.style.display = 'block';
    } else {
      figure.style.display = 'none';
    }
  });
});



const btn = document.querySelector('.btnUp');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';  
  }
});


document.querySelectorAll('.size').forEach(element => {
  if (!element.textContent.includes('cm.')) { 
    element.textContent += 'cm.';
  }
});

document.querySelectorAll('.price').forEach(element => {
  if (!element.textContent.startsWith('$')) { 
    element.textContent = '$' + element.textContent;
  }
});

const btnContent = document.querySelectorAll('.dropdown-content button');
const btnFavorites = document.getElementById('showFavoritesBtn');


const allButtons = [...btnContent, btnFavorites];

allButtons.forEach(button => {
  button.addEventListener('click', () => {

    allButtons.forEach(btn => btn.classList.remove('active'));


    button.classList.add('active');
  });
});
