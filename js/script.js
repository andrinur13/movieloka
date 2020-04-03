function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        type: "get",
        url: "http://www.omdbapi.com",
        data: {
            'apikey': '80f4696c',
            's': $('#search-input').val()
        },
        dataType: "json",
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                        <div class="card col-md-4 mb-3">
                            <img src="${data.Poster}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"> ${data.Title} </h5>
                                <h6 class="card-subtitle mb-2 text-muted"> ${data.Year} </h6>
                                <h5> <a href="#" id="detail" class="badge badge-primary" data-id="${data.imdbID}">See Details</a> </h5>
                            </div>
                        </div>
                    `);
                });

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">Movie Not Found</h1>
                    </div>
                `);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (event) {
    if (event.keyCode == 13) {
        searchMovie();
    }
})