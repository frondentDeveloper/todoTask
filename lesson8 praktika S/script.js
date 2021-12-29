window.addEventListener('DOMContentLoaded', ()=>{
    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        year = document.querySelector('#year'),
        btn = document.querySelector('.btn'),
        booklist = document.querySelector('#book-list');


    btn.addEventListener('click',(event) => {
        event.preventDefault();


        if (title.value == '' && author.value == '' && year.value == ''){
            alert("Iltimos formani toldiring")
        }
        else {
           const newRow = document.createElement('tr');


            //create new title

            const newTitle = document.createElement('th');
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);


            //create new author

            const newAuthor = document.createElement('th');
            newAuthor.innerHTML =author.value;
            newRow.appendChild(newAuthor);

            //creating new year

            const dataYear = document.createElement('th');
            dataYear.innerHTML = year.value;
            newRow.appendChild(dataYear);

            //Displaying in UI

            booklist.appendChild(newRow)


            title.value = '';
            author.value = '';
            year.value = ''


        }





    })
});



