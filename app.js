$(function () {
    console.log("dziala");
    $.ajax({
        url: 'http://date.jsontest.com/',
        type: 'GET',
        dataType: 'json',
    }).done(function (dane) {
        console.log(dane);
        $('#time').text(dane.date);
    }).fail(function (xhr, status, err) {
        console.log(xhr);
        console.log(status);
        console.log(err);
    });

    $.ajax({
        url: 'https://swapi.co/api/people/4/',
        type: 'GET',
        dataType: 'json'
    }).done(function (info) {
        console.log(info);
        $('#ludzik').text(info.name);
    }).fail(function () {
        $('#ludzik').text('Nie udało się pobrac danych. Sry');
    });


});