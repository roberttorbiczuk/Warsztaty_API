$(function () {

    $.ajax({
        url: '/book',
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        console.log(data);
        var books = $('#books');
        var liEl = $('<li>');
        var emptyDiv = $('<div class="descr">');
        for (var i =0; i<data.length; i++) {
            console.log(data[i]);
            books.append(liEl.clone().text(data[i].title));
            books.append(emptyDiv.clone())
        }
    })

});