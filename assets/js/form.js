// TODO: Create a variable that selects the form element
const submitEl = document.querySelector('#submit');
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const error = document.querySelectorAll('#error');
const formatError = document.querySelector('#error');
let blogPostArray = [];
let blogPost
formatError.setAttribute('style', 'display: none');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.



// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitEl.addEventListener('click', function (event) {
    event.preventDefault();

    if (!username.value || !title.value || !content.value) {
        formatError.setAttribute('style', 'display: block');
    }
    else {

        const newPost = {
            username: username.value,
            title: title.value,
            content: content.value
        };

                // Retrieve existing posts from local storage
                let blogPostArray = JSON.parse(localStorage.getItem('storeLocalStorage')) || [];

        blogPostArray.push(newPost);

        localStorage.setItem('storeLocalStorage', JSON.stringify(blogPostArray));



        redirectPage('blog.html');
    }
});