

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

