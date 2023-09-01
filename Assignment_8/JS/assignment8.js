let xhr = new XMLHttpRequest();
xhr.open('get','https://github.com/rahulpb8/JSON.git');

document.getElementById('getdata').addEventListener('click',function(){
    xhr.send();
});

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            let result_data = JSON.parse(xhr.responseText);
            let html_content = "";
            for(let i=0; i<result_data.length;i++){
                let current_record = result_data[i];
                html_content = html_content+'<tr><td>'+current_record.id+'</td> <td>'+current_record.name+'</td> <td>'+current_record.username+'</td> <td>'+current_record.email+'</td> </tr>';
            }
            document.getElementById('result_area').innerHTML = html_content;
        }
        else{
            alert('Error');
        }
    }
}