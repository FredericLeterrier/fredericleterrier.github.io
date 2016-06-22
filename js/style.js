// LOADING
function autograph() {
    var parent = document.querySelector('.signature'),
        path = document.querySelector('.signature__path'),
        length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = '4000';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 3.75s linear';
    path.style.strokeDashoffset = '0';
    path.style.strokeDashoffset = Math.abs(length) * -1;
};
setInterval(function() {
    autograph();
}, 4000);
autograph();

// NAV
$(".button-collapse").sideNav();

//SLIDE MODAL
 $(document).ready(function(){
    $('.slider').slider({full_width: true});
     $('.carousel').carousel();
     $('.modal-trigger').leanModal();
     $('#modal1').openModal();
   $('#modal1').closeModal();
     $('.carousel').carousel();
    $('.carousel').carousel('next');
$('.carousel').carousel('next', [3]);
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', [4]);
 });

//FLECHE
 $("#fleche").click(function(){
        $('html,body').animate({scrollTop: 0},2000);
    });

