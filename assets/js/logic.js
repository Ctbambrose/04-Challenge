// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeSwitcher = document.querySelector('#toggle');
const container = document.querySelector('.container ');

const elements = document.getElementsByClassName('container');

let mode = 'light';




// THIS IS INCASE SOMETHING GOES WRONG

themeSwitcher.addEventListener('click', function () {
  // If mode is light, apply light background
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    themeSwitcher.innerHTML = "&#127774";
    document.documentElement.style.setProperty('--circle-color', 'purple');

  }
  // If mode is dark, apply dark background
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
    themeSwitcher.innerHTML = "&#127769";
    document.documentElement.style.setProperty('--circle-color', '#ffb100');
  }
});



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.



// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'blog.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

