function watchStudentsForm(){
    let studentsForm = document.querySelector('.students-form');
    let url ='/api/students';
    let settings = {
        method : 'GET',
        headers : {
            Authorization : `Bearer ${API_TOKEN}`
        }
    }
    let results = document.querySelector('.results');

    fetch(url,settings)
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson =>{
            results.innerHTML ="";
            for (let i = 0; i < responseJson.length; i++) {
                results.innerHTML += (`<div> ${responseJson[i].name}</div>`);
                
            }
            console.log(responseJson);
        })
        .catch( err=>{
            results.innerHTML = `<div> ${err.message}</div>`;
        });
    }

studentsForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("working");
});

function watchAddStudentForm(){
    let studentsForm = document.querySelector('.add-students-form');
    studentsForm.addEventListener('submit')

}

function init(){

}

init();