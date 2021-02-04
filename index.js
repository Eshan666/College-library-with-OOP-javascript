console.log("Heloo world");

function Book(name, author, type) {

    this.name = name;
    this.author = author;
    this.type = type;

}

function Display() { };

Display.prototype.add = function (book) {
    let tableBody = document.getElementById("tableBody");

    let uistring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

    tableBody.innerHTML += uistring;

    return true;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.show = function (signal) {

    let message = document.getElementById("message");
    let string
    if (signal == 1) {
        string = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        message.innerHTML = string;
    }

    else {
        string = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        message.innerHTML = string;

    }
}





let libraryForm = document.getElementById("libraryForm");


libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("This my form");

    let name = document.getElementById("book").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    //display.add(book);
    let signal;
    if(display.add(book)){
        signal = 1;
    }
    else{
        signal = 0;
    }
    display.show(signal);

    display.clear();



}

