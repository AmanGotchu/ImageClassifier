

function clickMe(){
  console.log("Clicked");

  $('h1').text("Processing");
  $('#loading').css({'opacity': 1});

  $.ajax({
    url:'https://cnnflaskapi.herokuapp.com/classify',
    type:"POST",
    data: JSON.stringify({"imageURL": $('#urlinput').val()}),
    contentType:"application/json",
    success: function(response){
      $('h1').text("Classification: " + response);
      $('#urlinput').val("");
      $('#loading').css({'opacity': 0});
    }
  })

}
