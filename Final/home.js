$(function () {
    $('#myList a:last-child').tab('show')
})

function getposts() {
    $.get('https://my-json-server.typicode.com/elduha/endka/awp', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div1-2').val();
        for (var i = 0; i < resp.length; i++) {
            $('#post1').html(function (ind, old_value) {
                if (inpt2 == resp[i].number) {
                    return "Title: " + resp[i].skinname + resp[i].url;
                }
            })
            $('#post2').html(function (ind, old_value) {
                if (inpt2 == resp[i].id) {
                    return "Body: " + resp[i].body;
                }
            })
        }
    })
}
function getcomments() {
    $.get('https://jsonplaceholder.typicode.com/comments', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div2-2').val();
        for (var i = 0; i < resp.length; i++) {
            $('#com1').html(function (ind, old_value) {
                if (inpt2 == resp[i].id) {
                    return "Name: " + resp[i].name;
                }
            })
            $('#com2').html(function (ind, old_value) {
                if (inpt2 == resp[i].id) {
                    return "Email: " + resp[i].email;
                }
            })
            $('#com3').html(function (ind, old_value) {
                if (inpt2 == resp[i].id) {
                    return "Body: " + resp[i].body;
                }
            })
        }
    })
}
function getalbums() {
    $.get('https://my-json-server.typicode.com/elduha/AK-47/ak-47', function (resp, status, resp_obj) {
        console.log(status);
        console.log(resp);
        let inpt2 = $('#div3-2').val();
        for (var i = 0; i < resp.length; i++) {
            $('#album1').html(function (ind, old_value) {
                if (inpt2 == resp[i].number) {
                    return "Skin Name: " + resp[i].skinname + " Skin Price: " + resp[i].skinprice;
                }
            })
            $('#album1').html(function (ind, old_value) {
                if (inpt2 == resp[i].skinname) {
                 $('#album2').attr('src', resp[i].url);
                    return "Skinprice: " + resp[i].skinprice + " ; " + " Skin Number: " + resp[i].number;
                }
            })
            $('#album2').html(function (ind, old_value) {
                if (inpt2 == resp[i].number) {
                    $('#album2').attr('src', resp[i].url);

                }
            })
            $('#album1').html(function (ind, old_value) {
                if (inpt2 == resp[i].skinprice) {
                    $('#album2').attr('src', resp[i].url );
                    return "Skin Name : " + reps[i].skinname;

                }
            })
        }
    })
    }
function getphotos() {
    $.get('https://my-json-server.typicode.com/elduha/endka/awp', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div4-2').val();
        for (var i = 0; i < resp.length; i++) {
            $('#photos1').html(function (ind, old_value) {
                if (inpt2 == resp[i].number) {
                    return "Skin Name: " + resp[i].skinname + " Skin Price: " + resp[i].skinprice;
                }
            })
            $('#photos1').html(function (ind, old_value) {
                if (inpt2 == resp[i].skinname) {
                 $('#photos2').attr('src', resp[i].url);
                    return "Skinprice: " + resp[i].skinprice + " ; " + " Skin Number: " + resp[i].number;
                }
            })
            $('#photos2').html(function (ind, old_value) {
                if (inpt2 == resp[i].number) {
                    $('#photos2').attr('src', resp[i].url);

                }
            })
            $('#photos1').html(function (ind, old_value) {
                if (inpt2 == resp[i].skinprice) {
                    $('#photos2').attr('src', resp[i].url );
                    return "Skin Name : " + reps[i].skinname;

                }
            })
        }
    })
}