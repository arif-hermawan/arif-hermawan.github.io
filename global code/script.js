
// focus untuk pencarian
let search = document.querySelector('.pencarian-primary');
let cSearch = document.querySelector('.c-pencarian');
let btnSearch = document.querySelector('.btn-pencarian');
let iconSearch = document.querySelector('.btn-pencarian svg');

search.addEventListener('focusin', function(){
    cSearch.style.border = '2px solid teal';
    btnSearch.classList.add("bg-teal");
    iconSearch.style.stroke = 'white';
    iconSearch.style.transform = 'transition:  0.5s ease;' 
})
search.addEventListener('focusout', function(){
    cSearch.style.border = '1px solid #8E8E8E'
    btnSearch.classList.remove("bg-teal");
    iconSearch.style.stroke = '#8E8E8E';
})

// hover untuk tambah menu spesial
let btnAdd = document.querySelector('.btn-add');
let iconAdd = document.querySelector('.btn-add img');

btnAdd.addEventListener('mouseover', function(){
    iconAdd.style.transform = 'scale(1.3)';
})
btnAdd.addEventListener('mouseout', function(){
    iconAdd.style.transform = 'scale(1.1)';
})




// modal tambah menu spesial
document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML = this.value;  
});  


// jqurey
// slick menu spesial
$('.menu-spesial').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
  });

//   slick filter
$('.filter-menu').slick({
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
  });
