const nav = document.querySelector('.nav');
const toggleBtn = document.querySelector('.toggle');
toggleBtn.addEventListener('click', function(){
    nav.classList.toggle('show')
})

window.addEventListener('scroll', function(){
    if(window.pageYOffset> nav.getBoundingClientRect().height){
        nav.classList.add('nav-fixed')
    }
    else{
        nav.classList.remove('nav-fixed')
    }
})
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
link.addEventListener('click', function(e){
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height
    const fixedNav = nav.classList.contains('nav-fixed');
    let position = element.offsetTop - navHeight;
if (!fixedNav){
    position = element.offsetTop + 60;
}

    window.scrollTo({
        top: position,
        left:0,
    })
    nav.classList.remove('show');
})
})

