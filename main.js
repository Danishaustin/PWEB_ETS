$(document).ready(function () {
  fetchData(function (data) {
      displayMovies(data);
  }, function (error) {
      console.error("Error fetching data: ", error);
  });
});