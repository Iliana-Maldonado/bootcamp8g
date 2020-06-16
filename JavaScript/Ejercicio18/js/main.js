/**
 * https://ajaxclass-1ca34.firebaseio.com/4/posts/.json
 */
const saveButton = document.getElementById('btnSave');
const dataForm = document.querySelectorAll('#user-form input');
const cardContainer = document.querySelector('#card-container');
const bntDeleteCardParent = document.querySelector('#card-container');

const saveCard = e => {
    e.preventDefault();

    let userInfo = {};

    dataForm.forEach(input => {
        userInfo[input.name] = input.value;
    })

    printCard(userInfo);
}

const printCard = userInfo => {

    let cardsContainer = cardContainer.innerHTML,
        randNumber = Math.floor(Math.random() * 100),
        form = document.querySelector('#user-form');

    let user = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://picsum.photos/id/${randNumber}/200/200" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${userInfo.title}</h5>
                <p class="card-text">${userInfo.content}</p>
                <p class="card-text"><small class="text-muted">${userInfo.date}</small></p>
                <a href="#" class="btn btn-danger delete-card">Eliminar</a>
            </div>
        </div>
    `;

    cardContainer.innerHTML = cardsContainer + user;
    addCard(userInfo);
    form.reset();
}

const addCard = userInfo => {

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://ajaxclass-1ca34.firebaseio.com/4/posts/.json');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // console.log(this.readyState);
        }
    }

    xhr.send(JSON.stringify(userInfo));
}

const getPost = (flag = false) => {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://ajaxclass-1ca34.firebaseio.com/4/posts/.json');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            let response = JSON.parse(this.responseText);

            for (const user in response) {
                setTable(user, response[user], flag);
            }
        }
    }

    xhr.send();
}

getPost();

const setTable = (cardID, card, flag) => {
    flag === true ? cardContainer.innerHTML = '' : null;

    let cardsContainer = cardContainer.innerHTML,
        randNumber = Math.floor(Math.random() * 100),
        { content, date, title } = card;

    let post = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://picsum.photos/id/${randNumber}/200/200" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
                <p class="card-text"><small class="text-muted">${date}</small></p>
                <a href="#" data-id="${cardID}" class="btn btn-danger delete-card">Eliminar</a>
            </div>
        </div>
    `;

    cardContainer.innerHTML = cardsContainer + post;
}

const deleteUser = e => {
    e.preventDefault();

    if (e.target.classList.contains('delete-card')) {

        let idPost = e.target.getAttribute('data-id');

        var xhr = new XMLHttpRequest();

        xhr.open('DELETE', `https://ajaxclass-1ca34.firebaseio.com/4/posts/${idPost}/.json`);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.status);
            }
        }

        xhr.send();

        getPost();
    }
}


saveButton.addEventListener('click', saveCard);
bntDeleteCardParent.addEventListener('click', deleteUser)