// Add your code here

function idToPage(json){
    let id = json.id;
    let b = document.querySelector('body');
    b.innerHTML = "";
    b.innerHTML = id;
}

function errorM(message){
    let b = document.querySelector('body');
    b.innerHTML = "";
    b.innerHTML = message;
}

function submitData(name,email){

    let data = {
        name: name,
        email: email
    };
    
    let obj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    
    return fetch("http://localhost:3000/users", obj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        idToPage(object);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        errorM(error.message);
    }); 
    

}