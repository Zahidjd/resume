const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});
// form js 



document.getElementById('form-btn').addEventListener('click',function(e){
        e.preventDefault();
        alert("Thanks for your message , we will get back to you as soon as possible");
        document.getElementById('form').reset();
      })