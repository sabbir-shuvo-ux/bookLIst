// start

var title = document.querySelector('#title');
var author = document.querySelector('#author');
var year = document.querySelector('#year');
var btn = document.querySelector('.btn');
var bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
    e.preventDefault(); // aita disi karon aitar value ui a te show korate karon aita na dile 
                                                                         // value ayya jayga
    
    if (title.value == "" && author.value == "" && year.value == "") {
        alert("somethig is wrong! please try again later");
    } else {
        var makeRow = document.createElement('tr');

        var makeColume = document.createElement('th');
        makeColume.innerHTML = title.value;
        makeRow.appendChild(makeColume);

        var makeColume = document.createElement('th');
        makeColume.innerHTML = title.value;
        makeRow.appendChild(makeColume);

        var makeColume = document.createElement('th');
        makeColume.innerHTML = title.value;
        makeRow.appendChild(makeColume);

        bookList.appendChild(makeRow);

    }

});
