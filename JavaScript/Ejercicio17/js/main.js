const userTable = document.querySelector('#user-table tbody');

function User({ age, mail, name }) {

    let tr = document.createElement('tr'),
        tdName = document.createElement('td'),
        tdMail = document.createElement('td'),
        tdAge = document.createElement('td');

    tdName.innerHTML = name;
    tdMail.innerHTML = mail;
    tdAge.innerHTML = age;

    tr.appendChild(tdName);
    tr.appendChild(tdMail);
    tr.appendChild(tdAge);

    userTable.appendChild(tr)
}

let ajax = () => {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://ajaxclass-1ca34.firebaseio.com/.json');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            let result = JSON.parse(this.responseText),
                resultArr = Object.values(result.koders);

            for (const user in resultArr) {
                new User(resultArr[user])
            }
        }
    }
    xhr.send();
}

ajax();