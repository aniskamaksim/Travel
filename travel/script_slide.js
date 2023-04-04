// modal window
const myBtn = document.querySelector('#myButton');
const accountItem = document.querySelector(".header_link1");
const closeBtn = document.querySelector('.modal-form_close');
const modal = document.querySelector('.modal');
//const modalRegLink = document.querySelector('modal-form_link')
//const modalReg = document.querySelector('.modalReg')
const submitButton = document.querySelector('#bestButtonEver');


function toggleModal() {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}
/* функция вызова окна регистрации
function toggleModalReg() {
    if (modalReg.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}
*/
//alert when submit login & password func
function alertEnter () {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    alert("email: " + email + "\npassword: " + pass);
}

//submitButton.addEventListener('click', alertEnter);
//modalReg.addEventListener('click', toggleModalReg());
myBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
accountItem.addEventListener('click', toggleModal);
submitButton.addEventListener('click', alertEnter);

window.addEventListener('click', function(event){
	var box = document.getElementById('myModal');
	if (event.target == box || event.target.parentNode == box){
        box.style.display = 'none';
    }
});
//SIGNUP
function showSignUpForm(){
  document.getElementById('mfDivSignIn').style.display = "none";
  document.getElementById('bestButtonEver').style.display = "none";
  document.querySelector('.modal-form_button-REG').style.display = "block";
  document.getElementById('headerReg').style.display = "block";
  document.getElementById('headerLog').style.display = "none";
  document.getElementById('facebook').style.display = "none";
  document.getElementById('google').style.display = "none";
  document.getElementById('or').style.display = "none";
  document.getElementById('loginString').style.display = "block";
  document.getElementById('register').style.display = "none";
  document.getElementById('forgot').style.display = "none";
}
function showLogInForm() {
    document.getElementById('mfDivSignIn').style.display = "flex";
    document.getElementById('mfDivSignIn').style.flexDirection = "column";
    document.getElementById('bestButtonEver').style.display = "block";
    document.querySelector('.modal-form_button-REG').style.display = "none";
    document.getElementById('headerReg').style.display = "none";
    document.getElementById('headerLog').style.display = "block";
    document.getElementById('facebook').style.display = "block";
    document.getElementById('google').style.display = "block";
    document.getElementById('or').style.display = "block";
    document.getElementById('loginString').style.display = "none";
    document.getElementById('register').style.display = "block";
    document.getElementById('forgot').style.display = "block";
}



// slider
$('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 3000);
    }

    $.each($slides, function (index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    advance();
});