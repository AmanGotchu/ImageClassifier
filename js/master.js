

function clickMe(){
  console.log("Clicked");

  $.get( "https://cnnflaskapi.herokuapp.com/hello", function( data ) {
    console.log(data);
  });

  $.ajax({
    url:'https://cnnflaskapi.herokuapp.com/classify',
    type:"POST",
    data: JSON.stringify({"imageURL": $('#urlinput').val()}),
    contentType:"application/json",
    success: function(response){
      console.log(response);
    }
  })

}
