var xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users");

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        for (let index = 0; index < data.length; index++) {
            const element = array[index];
            
        }
        // var data = JSON.parse(xhr.responseText);//{students:[]}
        // for (let index = 0; index < data.students.length; index++) {
        //     let element = array[index];
            
        // }
    }
}

function SendNow(){
    xhr.send('');
}