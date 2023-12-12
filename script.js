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
function createCourse({title, description, srcImg, categories}){
    const newCourse = {
        title : title,
        description : description,
        srcImg : srcImg,
        categories : categories,
        author : username,
        id : author + "-" + title
    };
    courses.push(newCourse);
    saveCourses();
}


function editCourse ({id, title, description, author, srcImg, categories}){}

function deleteCourse(id){}
function detailCourse(id){}
function getCoursesByCategory(category){}
function getCategories(){}