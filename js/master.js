

function clickMe(){
  console.log("Clicked");
  $.ajax({
      url: 'https://cnnflaskapi.herokuapp.com/classify',
      type: 'post',
      data: {
          imageURL: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg'
      },
      headers: {
          content-type: 'application/json' //for object property name, use quoted notation shown in second
      },
      dataType: 'json',
      success: function (data) {
          console.info(data);
      }
  });
}
