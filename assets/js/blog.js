// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const backBtn = document.querySelector('#back');
const mainEl = document.querySelector('main');
const postsEl = document.querySelector('ul');
// TODO: Create a function that builds an element and appends it to the DOM

function newPost() {
    let blogPostArray = JSON.parse(localStorage.getItem('storeLocalStorage'));

    // Check if blogPostArray is not null and is an array
    if (blogPostArray && Array.isArray(blogPostArray)) {
        for (let i = 0; i < blogPostArray.length; i++) {
            const blogPost = blogPostArray[i];

            const newList = document.createElement('li');
            const newArticle = document.createElement('article');
            const newH2 = document.createElement('h2');
            const newP = document.createElement('p');
            const newBlockquote = document.createElement('blockquote');

            newH2.textContent = blogPost.title; // Use blogPost instead of blogPosts
            newP.textContent = blogPost.username; // Use blogPost instead of blogPosts
            newBlockquote.textContent = blogPost.content; // Use blogPost instead of blogPosts

            // Append elements to the DOM
            postsEl.appendChild(newList);
            newList.appendChild(newArticle);
            newArticle.appendChild(newH2);
            newArticle.appendChild(newP);
            newArticle.appendChild(newBlockquote);
        }
    } else {
        noPosts(); // Call noPosts if there are no blog posts
    }
}



// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    const newArticle = document.createElement('article');
    const newH2 = document.createElement('h2');
    mainEl.appendChild(newArticle);
    newArticle.appendChild(newH2);
    newH2.textContent = 'No Blog posts yet...';
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function readLocalStorage() {
    const blogPost = JSON.parse(localStorage.getItem('storeLocalStorage'));
    if (!blogPost) {
        noPosts();
        console.log("noPosts");
    }
    else {
        newPost();
        console.log("newPost");
    }
}

// TODO: Call the `renderBlogList` function
readLocalStorage();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage('index.html');
});
