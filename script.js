const username = '';

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