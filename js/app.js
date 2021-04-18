// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    // test
    // const header = document.querySelector('h1');
    // header.textContent='Top Dogs';
    // end of test

    //select the form
    const newChampForm = document.querySelector('#new-champ-form');
    // and add a listener to it's submit button that results in a behaviour
    newChampForm.addEventListener('submit', handleNewChampAppend);

    const deleteChampButton = document.querySelector('#delete');
    deleteChampButton.addEventListener('click', handleDeleteAllChamps);

})

// BEHAVIOUR FUNCTIONS

// new champ append
    const handleNewChampAppend = function (event){
        event.preventDefault();

        const newChamp = createNewChampItem(event.target);
        const champList = document.querySelector('#champ-list');
        champList.appendChild(newChamp);

        event.target.reset();
    }

// new champ creation
    const createNewChampItem = function (form) {

    //create new li element to house the item
    //create necessary elements for each piece of info
    //put form field content in these elements
    //append it to the champList

        const newChampItem = document.createElement('li');
        newChampItem.classList.add("restrict");

        const addYear = document.createElement('h1');
        addYear.textContent = form.year.value;
        newChampItem.appendChild(addYear);

        const addBreed = document.createElement('p');
        addBreed.textContent = "Breed: " + form.breed.value;
        newChampItem.appendChild(addBreed);

        const addRegisteredName = document.createElement('p');
        addRegisteredName.textContent = "Registered name: " + form.registered_name.value;
        newChampItem.appendChild(addRegisteredName);

        const addKnownAs = document.createElement('p');
        addKnownAs.textContent = "Known as: " + form.aka.value;
        newChampItem.appendChild(addKnownAs);

        const addOwner = document.createElement('p');
        addOwner.textContent = "Owner/s: " + form.owner.value;
        newChampItem.appendChild(addOwner);

        return newChampItem;
    }

    const handleDeleteAllChamps = function (event){
        const listToDelete = document.querySelector('#champ-list');
        listToDelete.innerHTML = '';
        }









    

