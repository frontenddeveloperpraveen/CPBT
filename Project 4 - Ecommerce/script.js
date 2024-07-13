const title = document.querySelector('#info-head');

const title_ideas = ['Fashion on Rotation',"New outfit everyday","Share your style"]

let index = 0;
try{
    function displayMessage() {
        title.classList.remove('animated')
        if (index < title_ideas.length) {
            title.textContent = title_ideas[index];
            title.classList.add('animated')
            index++;
            setTimeout(displayMessage, 5000); 
        }
        if(index === title_ideas.length){
            index = 0;
        };
    };
}catch{
    //Nothing
}
displayMessage();


// Login Form 

const Login = (state) =>{
    let Login_dialog = document.querySelector('.login-box');
    if(state=== true){document.documentElement.style.overflow = 'hidden';}else{document.documentElement.style.overflow = 'auto';}
    Login_dialog.open = state;
}

// Forget Password 

const Forget_Pass = () =>{
    alert('Forget Password FUnction got called')
}