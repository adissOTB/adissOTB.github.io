window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

var a;
var b;
var c;

function show_hide(){
    if(a==1){
        document.getElementById("textview").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("textview").style.display="none";
        return a=1;
    }
}
  
function show_hide2(){
    if(b==1){
        document.getElementById("textview2").style.display="inline";
        return b=0;
    }
    else{
        document.getElementById("textview2").style.display="none";
        return b=1;
    }
}
   
function show_hide3(){
    if(c==1){
        document.getElementById("textview3").style.display="inline";
        return c=0;
    }
    else{
        document.getElementById("textview3").style.display="none";
        return c=1;
    }
}

function shortMenu(){
    const shortMenu = document.querySelector('.shortMenu');
    const nav = document.querySelector('.nav');
    shortMenu.classList.toggle('active');
    nav.classList.toggle('active');
}
    
console.log();