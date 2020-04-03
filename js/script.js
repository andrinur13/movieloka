$('#search-button').on('click', function () {
    $.ajax({
        type: "get",
        url: "http://www.omdbapi.com",
        data: {
            'apikey': '80f4696c',
            's': $('#search-input').val()
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
});