console.log("hasnain");
//this shownotes will keep it as it is when we reload
showNotes();


//if users addd a note add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {
    
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    addTitle.value = " ";
    console.log(notesObj);

    showNotes();
});

//function to show element from local storage
function showNotes() {
    // let date = new Date();
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
            <div class="notecard my-2 mx-2 card" style="width: 30rem; background-color: rgb(255 255 255)">
                <div class="card-body">
                    
                <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text">${element.text}</p>
            
                    <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
                    
                </div>
            </div>`;
            // <h5 class="card-title"> ${element.title}</h5>
        
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `<span>Nothing to show use <b>"Add"</b> section above to add todo</span>`;
    }
}

//function to delete a note
function deleteNote(index){
    // console.log('i am deleting', index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    
    let inputVal = search.value.toLowerCase();
    // console.log('input event fired', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });

});

/*
1. add title
2. mark a note as important
3. seperate note by user;
4. sync and host a web server
5. 
*/



    
        
        
        
    
        




