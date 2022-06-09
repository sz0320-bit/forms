const mainform = document.querySelector('.mainform');
const submitbutton = document.querySelector('.submit');

submitbutton.addEventListener('click', () => {
    mainform.submit();
})