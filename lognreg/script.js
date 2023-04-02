const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registorlink = document.querySelector('.register-link');

registorlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});