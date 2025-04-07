function showSignUp(){
    let login = document.getElementById("logInForm");
    login.style.visibility='hidden';
    login.style.transform='translateX(-160px) scale(0.1)';
    let signup = document.getElementById("signUpForm");
    signup.style.visibility='visible';
    signup.style.transform= 'translateX(-160px) scale(1)';
    let menu1 = document.getElementById("menu");
    menu1.style.visibility='hidden';
    menu1.style.visibility='scale(0.1)';
    let i =  document.getElementById("intro1");
    i.style.visibility='hidden';
}

function redirIndex(){
    window.location.href="index.html";
}

function redTOUR(){
    window.location.href="tour.html";
}

function redVirtual(){
    window.location.href="virtualtour.html";
}

function redBucket(){
    window.location.href="todolist.html";
}

function showLogin(){
    let login = document.getElementById("logInForm");
    login.style.visibility='visible';
    login.style.transform= 'translateX(-160px) scale(1)';
    let signup = document.getElementById("signUpForm")
    signup.style.visibility='hidden';
    signup.style.transform='translateX(-160px) scale(0.1)';
    let menu1 = document.getElementById("menu");
    menu1.style.visibility='hidden';
    let i =  document.getElementById("intro1");
    i.style.visibility='hidden';
}

function hide(){
    let login = document.getElementById("logInForm");
    login.style.visibility='hidden';
    let signup = document.getElementById("signUpForm")
    signup.style.visibility='hidden'; 
    let menu1 = document.getElementById("menu");
    menu1.style.visibility='visible'; 
    let i =  document.getElementById("intro1");
    i.style.visibility='visible'; 
}

function highlightBucketList(){
    let highlight = document.getElementById("bucketList");
    highlight.style.backgroundColor = ' #b5f4f684';
}

function highlightVirtualTour(){
    let highlight = document.getElementById("virtualTour");
    highlight.style.backgroundColor = ' #b5f4f684';
}

function highlightBookTicket(){
    let highlight = document.getElementById("bookTicket");
    highlight.style.backgroundColor = ' #b5f4f684';
}

function unhighlightBucketList(){
    let highlight = document.getElementById("bucketList");
    highlight.style.backgroundColor = ' #b5f4f656';
}

function unhighlightVirtualTour(){
    let highlight = document.getElementById("virtualTour");
    highlight.style.backgroundColor = ' #b5f4f656';
}

function unhighlightBookTicket(){
    let highlight = document.getElementById("bookTicket");
    highlight.style.backgroundColor = ' #b5f4f656';
}