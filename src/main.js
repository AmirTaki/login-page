form = document.querySelectorAll('form')



document.querySelector('#one').addEventListener('click',()=>{
   document.querySelector('#form-one').className = 'animatinformOne'
 

   document.querySelector('#form-two').className = 'animatinformtTwo'


})


document.querySelector('#two').addEventListener('click',()=>{
   
 

   document.querySelector('#form-two').className = 'animatinformtTwoR'
     document.querySelector('#form-one').className = 'animatinformOneR'


})

