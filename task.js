 let task=document.getElementById("task");

 const retrieveEntries =() =>
 {
    let entries =localStorage.getItem("userEntries");
    if(entries)
    {
        entries=JSON.parse(entries);
    }
    else{
        entries=[];
    }
    return entries;
 }

let userEntries= retrieveEntries();
const displayEntries  = () =>
    {
        const entries =retrieveEntries();

        /*
        <table>
        <tr>
         <th>Name><\th>
         <th>email></th>
            ...
        <tr>
        <tr>
        <td>deepa</td>
        <td>deepa@1gmail.com</td>
          ...
        </tr>
        </table>
        */  

         const tableEntries=entries.map((entry) =>
           {
               const Namecell ='<td class=border px-4 py-2>${entry.Name}</td>';
               const emailcell ='<td class=border px-4 py-2>${entry.email}</td>';
               const dobcell ='<td class=border px-4 py-2>${entry.dob}</td>';
               const passwordcell ='<td class=border px-4 py-2>${entry.password}</td>';
              const acceptedtermsandconditionscell ='<td class=border px-4 py-2>${entry.acceptedtermsandconditions}</td>';
              const row ='<tr>${namecell}$(emailcell}${dobcell}${passwordscell}${accepttermcell}</tr>';
              return row;
            }).join("\n");
            
         
           const table=   '<table class="border px-4 px-2"><tr>
           
            <th class= "px-4 px-2" >Name </th>
            <th class="px-4 px-2">email</th>
            <th class="px-4 px-2">dob</th>
            <th class="px-4 px-2">pasword</th>
             <th  class="px-4 px-2">accept terms?</th></tr> $ {tableEntries} 
        </table>';
         let details=document.getElementById("task");
         details.innerHTML=table;   

         }

     const savetask =(e) =>{

     e.preventDefault();
    const Name=document.getElementById("Name").value;
    const email =document.getElementById("email").value;
    const dob =document. getElementById("dob").value;
    const password =document. getElementById("password").value;

    const accepttermsandconditions=document.getElementById("accept terms").Checked;

    const entry = {
        Name,
        email,
        password,
        dob,
        acceptedtermsandconditions
    };
userEntries.push(entry);
localStorage.setItem("task",JSON.stringify(userEntries))
displayEntries();


     }

 task.addEventListener("sumbit",savetask);


 displayEntries();
