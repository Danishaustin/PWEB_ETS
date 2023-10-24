
function displayMovies(movies) {
    let output = '';

    $.each(movies, function (key, movie) {
        output += `
        <div class="col-lg-6 col-12 mb-4">
            <div class="card shadow p-3 bg-white rounded">
                <div class="card-body ">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Plot}</p>
                </div>
            </div>
        </div>
        `;
    });

    $('#moviesList').html(output);
}
