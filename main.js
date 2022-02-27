const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const drinks = $$('.drink__item');
const recipes = $$('.recipe__item');

$('.drink__item').onclick = function(){

    $('.recipe__item').classList.add('active');
    $('.backgroud').classList.add('active');
    // $('.tab-item.active').classList.remove('active')
    // $('.tab-pane.active').classList.remove('active')
    
    // line.style.left = this.offsetLeft + 'px'
    // line.style.width = this.offsetWidth + 'px'

    // this.classList.add('active')
    // pane.classList.add('active')
}