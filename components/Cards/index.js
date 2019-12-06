// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articles(content) {
    const card = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const auth = document.createElement('author');
    const imgDiv = document.createElement('div');
    const image = document.createElement('img');
    const authName = document.createElement('span')

    card.classList.add('card');
    headlineDiv.classList.add('headline');
    auth.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.textContent = content.headline;
    image.src = content.authorPhoto;
    authName.textContent = content.authorName;

    card.appendChild(headlineDiv);
    card.appendChild(auth);
    auth.appendChild(imgDiv)
    imgDiv.appendChild(image);
    imgDiv.appendChild(authName)
    
    return card;
}

// axios.get("https://lambda-times-backend.herokuapp.com/articles")
//     .then(response => {
//         for( const [articleType, articleList] of Object.entries(response.data.articles)){
//             for(const article of articleList){
//                 console.log(article);
//                 const {authorName, headline, authorPhoto} = article;
//                 articles(headline, authorPhoto, authorName) 
//                 console.log(headline)  
//             }
            
//         }
//             const parentEl = document.querySelector('.cards-container');
//             parentEl.appendChild(articles(response.data.articles));
//     })

const cardEntry = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)
    response.data.articles;
    response.data.articles.javascript.forEach(item => {
        const newCard = articles(item);
        cardEntry.appendChild(newCard);
    })
    response.data.articles.bootstrap.forEach(item => {
        const newCard = articles(item);
        cardEntry.appendChild(newCard);
    })
    response.data.articles.technology.forEach(item => {
        const newCard = articles(item);
        cardEntry.appendChild(newCard);
    })
    response.data.articles.jquery.forEach(item => {
        const newCard = articles(item);
        cardEntry.appendChild(newCard);
    })
    response.data.articles.node.forEach(item => {
        const newCard = articles(item);
        cardEntry.appendChild(newCard);
    })
    })
    .catch(error => {
        console.log(error)
})

