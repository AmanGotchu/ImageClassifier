

function clickMe(){
  console.log("Clicked");

  $('#output').text("Processing");

  $.ajax({
    url:'https://cnnflaskapi.herokuapp.com/classify',
    type:"POST",
    data: JSON.stringify({"imageURL": $('#urlinput').val()}),
    contentType:"application/json",
    success: function(response){
      $('#output').text(response);
    }
  })

}
