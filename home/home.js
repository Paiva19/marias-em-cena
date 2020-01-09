  //first add an event listener for page load
  document.addEventListener( "DOMContentLoaded", get_json_data_hardcoded, false ); // get_json_data is the function name that will fire on page load

  //this function is in the event listener and will execute on page load
  function get_json_data(){
      
      // Relative URL of external json file
      var json_url = './products.json';

      //Build the XMLHttpRequest (aka AJAX Request)
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() { 
          if (this.readyState == 4 && this.status == 200) {//when a good response is given do this

              var data = JSON.parse(this.responseText); // convert the response to a json object
              append_json(data);// pass the json object to the append_json function
          }
      }
      //set the request destination and type
      xmlhttp.open("GET", json_url, true);
      //set required headers for the request
      xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      // send the request
      xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
  }


    //this function returns a hardcoded JSON file because I am not in the mood to host a simple JSON file on a different server for this
    function get_json_data_hardcoded() {
        var response = "[{ \"photo\":\"../images/carteiras_01.png\", \"title\":\"Carteira de patchwork 1\", \"description\":\"Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet\", \"eloUrl\":\"https://www.elo7.com.br/\", \"facebookUrl\":\"https://www.facebook.com/\" },{ \"photo\":\"../images/carteiras_01.png\", \"title\":\"Carteira de patchwork 1\", \"description\":\"Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet\", \"eloUrl\":\"https://www.elo7.com.br/\", \"facebookUrl\":\"https://www.facebook.com/\" },{ \"photo\":\"../images/carteiras_01.png\", \"title\":\"Carteira de patchwork 1\", \"description\":\"Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet\", \"eloUrl\":\"https://www.elo7.com.br/\", \"facebookUrl\":\"https://www.facebook.com/\" },{ \"photo\":\"../images/carteiras_01.png\", \"title\":\"Carteira de patchwork 1\", \"description\":\"Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet\", \"eloUrl\":\"https://www.elo7.com.br/\", \"facebookUrl\":\"https://www.facebook.com/\" }]"
        var data = JSON.parse(response); // convert the response to a json object
        append_json(data);// pass the json object to the append_json function
    }

  //this function appends the json data to the table 'productsTable'
  function append_json(data){
      var table = document.getElementById('productsTable');
      data.forEach(function(object) {
          var tr = document.createElement('tr');

          tr.innerHTML = "<td href=" + object.eloUrl + " target=\"_blank\"> <img id=\"item-photo\" src=\"" + object.photo + "\" width=\"128\" height=\"128\"></img></td>" +
          '<td>' + '<h2>' + object.title + '</h2>' +
          '<h4>' + object.description + '</h4>' + '</td>' +
          '<td> </td>' +
          '<td> <a href=' + object.eloUrl + ' target="_blank"> <img id=\"itemLogo\" height=\"40\" src=\"../images/elo7_logo.png\"/></a></td>'
          '<td> </td>' +
          '<td> <a href=' + object.facebookUrl + ' target="_blank"> <img id=\"itemLogo\" height=\"40\" src=\"../images/facebook_logo.png\"/></a></td>';
          table.appendChild(tr);
      });
  }