const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;


form.addEventListener('submit', function(e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
})

function getNews() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=7356f56a4b85443f95479c5a0a00c384`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();

}

function handleError() {
    console.log('se ha presentado un error');

}

/*function addNews() {
    const data = JSON.parse(this.responseText);
    const response = data.response;
    console.log(response);



    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;

    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerText = snippet;
    responseContainer.appendChild(li);


}*/

function addNews() {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    const response = data.response;
    // console.log(response);

    const articles = data.response.docs;
    //  console.log(articles);


    const arr = [];
    const url = [];

    for (let i = 0; i < 5; i++) {
        arr.push(articles[i].snippet);
        url.push(articles[i].web_url);


        let li = document.createElement("li");
        li.className = 'articleClass';
        //  console.log(li);
        li.innerText = `${arr[i]}
                        ${url[i]}`;
        responseContainer.appendChild(li);


    }
    // console.log(arr);
    //console.log(url);

}