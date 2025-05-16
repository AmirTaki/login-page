form = document.querySelectorAll('.options-02 a')

form.forEach(element => {
   element.addEventListener("click", (event)=>{
      if(element.innerText == "Create an Account"){
            
         document.querySelector('#form-one').className = 'animatinformOne'
 
         document.querySelector('#form-two').className = 'animatinformtTwo'
      }
      else {
         document.querySelector('#form-two').className = 'animatinformtTwoR'
         
         document.querySelector('#form-one').className = 'animatinformOneR'
      }

   })
});


window.onload = () =>{
      
      document.querySelector('#form-one').className = 'animatinformOneR'

}
      