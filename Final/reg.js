const form = document.getElementById('signup');

const name = form.elements[0];
const email = form.elements[1];
const password = form.elements[2];

function error(input, message) {
    input.className = 'error';
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}

function success(input) {
    input.className = 'success';
    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}

function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}

function validatePassword(input) {
    const re = /^([a-zA-Z0-9!@#$%^&*]{8,30})$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid password');
}

const requiredFields = [
    { input: name, message: 'Name is required' },
    { input: email, message: 'Email is required' },
    { input: password, message: 'Password is required' }
];

form.addEventListener('submit', (event) => {

    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });

    if (valid) {
        valid = validateEmail(email);
        valid = validatePassword(password);
    }

    if (!valid) {
        event.preventDefault();
    } else {
            console.log(
                $('#modaldiv').css({
                    'opacity': "1",
                    'visibility': "visible",
                    'z-index': "2"
                })
        )
        console.log(
            $('#container').css({
                'opacity': "0",
                'visibility': "hidden"
            })
        )
    }

});

form.addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById('101').value;
    var email = document.getElementById('102').value;
    var password = document.getElementById('103').value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
})