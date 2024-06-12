// ===== Step 1- امسك الدخل ===================================
var nameInput =document.getElementById('name');
var urlInput =document.getElementById('url');
var submit = document.getElementById('submit');
var tableBody = document.getElementById('body');
var nameAlert=document.getElementById('nameAlert"');
var urlAlert=document.getElementById('urlAlert"');
var valid =false;
//======== Step 3-  array عملت ================================
     //var  bookMarks=[];
//======= Step 6- عاوزه لما اعمل ريفريش يجبلى الداتا القديمه بردوا==========================================
var  bookMarks;
if( localStorage.getItem('data')!=null){
    var bookMarks  =JSON.parse(localStorage.getItem('data'));
    displayToTable()
  }else{
    var  bookMarks=[];
  }
//===== Step 2- array ثم يضيف فى  object عاوز لما امسك الدخل اضغط على الزرار ياخد الدخل ويحطه فى  ===========
submit.onclick=function(){
    validateForm();
    if(valid==true){
      var values = {
        name : nameInput.value,
        url : urlInput.value,
      }
    }
    bookMarks.push(values);
//======= Step 4- الداتا تتمسح خالص ولكن انا عاوز الداتا اللى دخلتها ديما موجوده كل ما ازور الموقع refresh يوجد مشكله ان كل ما اعمل  ==============================================
    var dataString =JSON.stringify(bookMarks);
    localStorage.setItem('data',dataString ); 
    console.log(bookMarks);
    displayToTable();
}

//========= Step 5-  ================================

function displayToTable(){
    var table='';
    for(var i=0 ; i<=bookMarks.length-1 ; i++ ){
         table +=`
                <tr>
                    <td scope="row">${i} </td> 
                    <td> ${bookMarks[i].name}<td/>
                    <td>  <a href="${bookMarks[i].url}"><button class="btn btn-visit"><i class="fa-solid fa-eye text-white"></i> Visit  </a>  <td/>
                    <td>  <button onclick="Delete(${i})" class="btn btn-delete"> <i class="fa-regular fa-trash-can"></i> Delete  <td/>
                <tr/> `
}
tableBody.innerHTML= table;
}
//=============== Step 7-  عاوز لما اضغط على زرار المسح يمسح ولما اعمل ريفريش ميرجعليش الداتا اللى اتمسحت تانى===========================
function Delete(index){
    bookMarks.splice(index,1);
    var dataString =JSON.stringify(bookMarks);
    localStorage.setItem('data',dataString ); 
    displayToTable();
}



function validateForm(){
  
    if(/^[A-Za-z]\w{3,}$/i.test(nameInput.value)){
      nameAlert.classList.add('d-none');
      nameInput.classList.add('is-valid');
      nameInput.classList.remove('is-invalid');
      valid =true;
    }else{
      nameAlert.classList.remove('d-none');
      nameInput.classList.remove('is-valid');
      nameInput.classList.add('is-invalid');
      valid =false;
    }
    if(/^(http:\/\/)?(www\.)?[A-Za-z0-9-\.]{1,}\.[a-z]{3}$/.test(nameInput.value)){
        urlAlert.classList.add('d-none');
        urlInput.classList.add('is-valid');
        urlInput.classList.remove('is-invalid');
        valid =true;
      }else{
        urlAlert.classList.remove('d-none');
        urlInput.classList.remove('is-valid');
        urlInput.classList.add('is-invalid');
        valid =false;
      }
}  