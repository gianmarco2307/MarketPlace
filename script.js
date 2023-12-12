let username = '';

//In questo modo (↓) l'array viene inizializzato con l'array courses presente nel localStorage, altrimenti ne crea uno vuoto

const courses = JSON.parse(localStorage.getItem('courses')) || [];

//Con questa (↓) function i courses vengono salvati nel localStorage
function saveCourses(){
    localStorage.setItem('courses', JSON.stringify(this.courses));
}

//Con questa (↓) function cerco un corso
function searchCourse(id){
    return courses.find((course) => course.id === id);
}

//Con createCourse ci creiamo un nuovo corso
function createCourse(title, description, srcImg, categories){
    const newCourse = {
        title : title,
        description : description,
        srcImg : srcImg,
        categories : categories,    //FORSE ANDRÀ SOSTITUITA CON UN ARRAY
        author : username,
        id : author + "-" + title
    };
    courses.push(newCourse);
    saveCourses();
}

//Con editCourse vengono modificati i campi
function editCourse (id, newTitle, newDescription, author, newSrcImg, newCategories){
    const courseToEdit = searchCourse(id);

    if (courseToEdit){
        courseToEdit.title = newTitle;
        courseToEdit.description = newDescription;
        courseToEdit.srcImg = newSrcImg;
        courseToEdit.categories = newCategories;
        courseToEdit.id = author + '-' + newTitle;
        saveCourses();
    }
}

//Viene eliminato un corso
function deleteCourse(id){
    courses = courses.filter((course) => course.id !== id);
    saveCourses();
}

//
function detailCourse(id){
    const courseSearched = searchCourse(id);
    console.log(courseSearched.title);
    console.log(courseSearched.description);
    console.log(courseSearched.author);
    console.log(courseSearched.srcImg);
    console.log(courseSearched.categories);
}

//
function getCoursesByCategory(category){}

//
function getCategories(){}


document.addEventListener('DOMContentLoaded', function() {
    // Mi sistemo il login
    let loginBtn = document.querySelector('#loginBtn')

    let logoutBtn = document.createElement('button');
    logoutBtn.classList.add('btn');
    logoutBtn.classList.add('btn-outline-success');
    logoutBtn.type = 'submit';
    logoutBtn.id = 'logoutBtn';
    logoutBtn.textContent = 'Logout'
    logoutBtn.style.marginLeft = '0.5em'

    let addBtn = document.querySelector('#addCourseBtn');

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();  // Impedisce l'azione di default del form
        let usernameInp = document.querySelector('#usernameInput');
        let enteredUsername = usernameInp.value.trim();  // Rimuovi eventuali spazi vuoti iniziali o finali
    
        if (enteredUsername !== '') {
            // Se l'username non è vuoto, assegna il valore e esegui le azioni di login
            username = enteredUsername;
            console.log(username);
            // Disabilito il pulsante di login
            loginBtn.disabled = true;
            loginBtn.parentElement.appendChild(logoutBtn);
            addBtn.disabled = false;
        } else {
            // Altrimenti, mostra un messaggio di errore o esegui altre azioni desiderate
            alert('Inserisci un username valido');
        }
    });
    

    logoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        username = '';
        loginBtn.parentElement.removeChild(logoutBtn);
        loginBtn.disabled = false;
        addBtn.disabled = true;
    })
});

