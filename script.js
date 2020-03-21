let counter = -1


let h1 = document.querySelector('h1')
let myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.index = index

}


function addBookToLibrary(Book) {

    counter++

    Book.index = Number(counter)

    myLibrary.push({
            'title: ': Book.title,
            'author: ': Book.author,
            'Pages: ': Book.pages,
            'Read: ': Book.read,
            'Index: ': Book.index

        }

    )

}


function render(Book) {


    // create row
    const row = document.createElement('tr')
    table.appendChild(row)


    // iterate title data
    const titleData = document.createElement('td')
    row.appendChild(titleData)
    titleData.innerHTML = Book.title


    // iterate author data
    const authorData = document.createElement('td')
    row.appendChild(authorData)
    authorData.innerHTML = Book.author


    // iterate pages data
    const pagesData = document.createElement('td')
    row.appendChild(pagesData)
    pagesData.innerHTML = Book.pages


    // iterate read data
    const readData = document.createElement('button')
    row.appendChild(readData)
    readData.innerHTML = Book.read

    // iterate delete icon feature
    const deleteIcon = document.createElement('img')
    deleteIcon.setAttribute('src', 'delete.png')
    row.appendChild(deleteIcon)


    // click to delete book
    deleteIcon.addEventListener('click', function() {

        table.removeChild(row)
        myLibrary.splice(Book.index, 1)


    })




    readData.addEventListener('click', function() {


        if (readData.innerHTML == 'Yes')

        {
            readData.innerHTML = 'No'
            Book.read = 'No'

        } else if (readData.innerHTML == 'No')

        {
            readData.innerHTML = "Yes"
            Book.read = 'Yes'

        }
    })




}

const newBook = document.querySelector("#newBook")
const formContainer = document.createElement('div')
const form = document.createElement('form')
const titleLabel = document.createElement('label')
const authorLabel = document.createElement('label')
const pagesLabel = document.createElement('label')
const readLabel = document.createElement('label')

const titleInput = document.createElement('input')
const authorInput = document.createElement('input')
const pagesInput = document.createElement('input')
const readInput1 = document.createElement('input')
const readInput2 = document.createElement('input')
const submit = document.createElement('button');
const readRadioLabel1 = document.createElement('label')
const readRadioLabel2 = document.createElement('label')

const yesButton = document.createElement('button')
const noButton = document.createElement('button')




readRadioLabel1.setAttribute('for', 'yes')
readRadioLabel1.innerHTML = 'Yes'

readRadioLabel2.setAttribute('for', 'no')
readRadioLabel2.innerHTML = 'No'


submit.innerHTML = 'Submit'
submit.setAttribute('type', 'button')

readInput1.setAttribute("type", "radio");
readInput1.setAttribute("id", "yes");
readInput2.setAttribute("type", "radio");
readInput2.setAttribute("id", "no");
readInput1.setAttribute("name", "read");
readInput2.setAttribute("name", "read");
readInput1.setAttribute("value", "yes");

readInput2.setAttribute("value", "no");

const readOptions = document.getElementById('yes')





const table = document.querySelector('#table')
const newBookContainer = document.querySelector('#newBookContainer')



console.log(formContainer)

let clickedNewBook = true;

newBook.addEventListener('click', function()

    {


        if (clickedNewBook == true) {

            clickedNewBook = false;


            formContainer.classList = 'formContainer'
            document.body.appendChild(formContainer)
            formContainer.appendChild(form)
            titleLabel.innerHTML = 'Title: '
            form.appendChild(titleLabel)
            authorLabel.innerHTML = 'Author: '
            form.appendChild(authorLabel)
            form.appendChild(authorInput)
            readLabel.innerHTML = 'Read:'

            form.appendChild(pagesLabel)

            form.appendChild(pagesInput)

            form.appendChild(readLabel)

            form.appendChild(readInput1)
            form.appendChild(readInput2)



            pagesLabel.innerHTML = 'Pages: '



            form.appendChild(readRadioLabel1)

            form.appendChild(readRadioLabel2)




            form.insertBefore(titleInput, authorLabel)
            form.insertBefore(readInput1, readInput1.nextSibling)

            form.insertBefore(readRadioLabel1, readInput1.nextSibling)
            form.insertBefore(readRadioLabel2, readInput2.nextSibling)


            form.insertBefore(submit, submit.nextSibling)



            form.insertBefore(document.createElement('br'), titleInput)
            form.insertBefore(document.createElement('br'), authorInput)
            form.insertBefore(document.createElement('br'), pagesLabel)
            form.insertBefore(document.createElement('br'), readLabel)

            form.insertBefore(document.createElement('br'), pagesInput)
            form.insertBefore(document.createElement('br'), readInput2)
            form.insertBefore(document.createElement('br'), readInput1)


            form.insertBefore(document.createElement('br'), authorLabel)
            form.insertBefore(document.createElement('br'), submit)
            form.insertBefore(document.createElement('br'), submit)









            table.before(formContainer);

            formContainer.appendChild(form)

        }

    }

)

let readStatus = '';


submit.addEventListener('click', function() {


    if (readInput1.checked == true) {


        readStatus = "Yes"
    } else if (readInput2.checked == true) { readStatus = "No" }

    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus, counter)

    addBookToLibrary(newBook)
    render(newBook)

    // formContainer.innerHTML = ''

    // clickedNewBook = true;






});










let hobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 235, 'Yes')



addBookToLibrary(hobbit)
render(hobbit)



console.log(myLibrary)