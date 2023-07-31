const task =document.querySelector('#task')
const Name=document.querySelector('#Name');
const email =document.querySelector('#email');
const dob =document.querySelector('#dob');
 const password =document.querySelector('#password');

 task.addEventListener('submit',(e)=>{
    e.preventDefault();
    words();
 }
 function words(){
    const Nameval=Name.value.trim()
    const emailval=email.value.trim();
    const dobval=dob.value.trim();
    const passwordval=password.value.trim();
    let success=true;

    if(Nameval===''){
        success=false;
        setError(Name,'Name is required')
    }
    else{
        setsuccess(Name)
    }
    if(emailval===''){
        success=false;
        setError(email,'email is required')
    }
    else if(validateEmail(emailval));
    {
        setError(email,'email is invalid')
    }
    if(dobval===''){
        success=false;
        setError(dob,'dob is required')
    }
    else{
        setsuccess(dob)
    }
    if(password===''){
        sucess=false;
        setError(password,'pssword is required')
    }
    else if(passwordval.length<8)
    {
        setError(pasword,"password mustbe atleast 8 charater")
    }
    else{
        setsuccess(Name)
    }
 }

 function setsuccess(element)
 {
    const input=element.parentElement;
    const errorElement=input.querySelector('.error');

    errorElement.innerText='';
    input.classList.add('success')
    input.classList.remove('error')
 }
 function setError(element,message)
 {
    const input=element.parentElement;
    const errorElement=input.querySelector('.error');
    errorElement.innerText=message;
    input.classList.add('error')
    input.classList.remove('success')
 }
  const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        

        );
  };
