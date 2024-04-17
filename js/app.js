$( function (){
    // *********************** jQUERY CODE  ***********************
    // fixed menu start
    $(window).scroll(function () {
      let scrollup = $(window).scrollTop()
      
      if (scrollup > 300) {

          $(`#main-manu`).addClass(`menufixed`)
          $(`.upbutton`).fadeIn()
      } else {
          $(`#main-manu`).removeClass(`menufixed`)
          $(`.upbutton`).fadeOut()
      }
  })
// fixed menu end
// up arrow start

$(`.upbutton`).click (function () {
    
  $(`html,body`).animate({
      scrollTop:0
  },600)

})
// up arrow end
  // modal chat button start
  $(window).scroll(function () {
    let scrollup = $(window).scrollTop()
    if (scrollup > 300) {
    $(`#main-manu`).addClass(`menufixed`)
    $(`.chat-model`).fadeIn()
    // scrollUp start
    // $(`.scrollup`).slideDown()
    // scrollup end
    } else {
    $(`#main-manu`).removeClass(`menufixed`)
    $(`.chat-model`).fadeOut()
    // scrollup start
    // $(`.scrollup`).slideUp()
    // scrollup end
    }
  })
  $(`.chat-model`).scroll (function () {
    $(`html,body`).animate({
      scrollTop:0 
    },600)
   })
// modal chat button end
    // ==============***************** MODAL START ************************==========================
    // ================== create-post-modal-start =================
    let createmodalbtn = $(`.creat-post-modal-btn`);
    createmodalbtn.click(function(){
    $(`.createmodal-bg`).slideDown(260);
    $(`.creat-post-modal`).delay(200).fadeIn(260);
    })
    let crsbtn = $(`.create-modal-close-btn`);
    function createCancel (){
        $(`.createmodal-bg`).slideUp(260);
        $(`.creat-post-modal`).fadeOut(260); 
    }
      crsbtn.click(createCancel);
      $(`.create-modal-close-btn`).click(cross);
    // ================== create-post-modal-end =================
    // ================== user-post-modal-start =================
    let usermodalbtn = $(`.posted-img`);
    usermodalbtn.click(function(){
    $(`.usermodal-bg`).slideDown(260);
    $(`.user-post-modal`).delay(200).fadeIn(260);
    })
    let crossbtn = $(`.user-modal-close-btn`);  
    function cross (){    
        $(`.usermodal-bg`).slideUp(260);
        $(`.user-post-modal`).fadeOut(260);    
    }
    crossbtn.click(cross);
      $(`.user-modal-close-btn`).click(cross);
    // ================== user-post-modal-end =================
    // ==============***************** MODAL END ************************==========================
    })

    // SS Branch Start
    $(document).ready(function(){
      $('.eventSlider').slick(
          {
              slidesToShow: 1,
              prevArrow: '.leftArrow',
              nextArrow: '.rightArrow',
          }
      );
  
      // ---------------Information Event Start-------------------
      $(`.eventThemeSlider`).slick(
          {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.eventThemeSubSlider',
          }
        );
  
        $(`.eventThemeSubSlider`).slick(
          {
            slidesToShow:3,
            asNavFor: '.eventThemeSlider',
           
            focusOnSelect:true,
            prevArrow: false,
            nextArrow: '.rightArrow',
            
          }
        );
      // ---------------Information Event End---------------------
      
    });
    // SS Branch End

    // ********** SM / MD TOSTE BOOTSTRAP START **********
const toastTrigger = document.getElementById('voice-message-alertBtn')
const toastLiveExample = document.getElementById('voice-message-alert')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
    // ********** SM / MD TOSTE BOOTSTRAP END **********