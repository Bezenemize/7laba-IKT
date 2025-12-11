document.getElementById('demoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в течение 15 минут для предоставления демо-доступа.');
});

window.onload = function() {
    var myForm = document.getElementById('demoForm');
    myForm.onsubmit = function(event) {
        event.preventDefault();
        if (checkForm()) {
            alert('Спасибо за заявку! Мы свяжемся с вами в течение 15 минут для предоставления демо-доступа.');
            myForm.reset();
        }
    };
    function checkForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        if (name === '') {
            alert('Пожалуйста, введите ваше имя');
            return false;
        }
        if (email === '') {
            alert('Пожалуйста, введите email');
            return false;
        }
        if (email.indexOf('@') === -1) {
            alert('Email должен содержать @');
            return false;
        }
        if (phone === '') {
            alert('Пожалуйста, введите телефон');
            return false;
        }
        return true;
    }
    var buttons = document.querySelectorAll('a[href="#demoForm"]');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(e) {
            e.preventDefault();
            var form = document.getElementById('demoForm');
            form.scrollIntoView({behavior: 'smooth'});
        };
    }
};
