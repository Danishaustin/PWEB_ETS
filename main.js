
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText);
        console.log(this.responseText);

        const title = document.getElementsByClassName("card-title");
        const plot = document.getElementsByClassName("card-body");
        title.innerHTML = response.Title;
        plot.innerHTML = response.Plot;

      }
      else{
        console.error("Terjadi kesalahan dalam permintaan")
      }
    };
    xhttp.open("GET", "https://it-its.id/api/movies", true);
    xhttp.send();