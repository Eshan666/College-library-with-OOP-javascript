console.log("Hello");



class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let tableBody = document.getElementById("tableBody");

        let uistring = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;

        tableBody.innerHTML += uistring;

        return true;

    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();

    }

    show(signal) {

        let message = document.getElementById("message");
        let string
        if (signal == 1) {
            message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Data added successfully!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
            setTimeout(function () {
                message.innerHTML = ''
            }, 5000);

        }

        else {
            message.innerHTML= `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Warning</strong> Data could not be inserted!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);

        }
    }

    validate(book) {
        if (book.name.length == 0 || book.author.length == 0) {
            return false;
        }
        else {
            return true;
        }
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
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show(1);
    }
    else {
        display.show(0);
    }




}