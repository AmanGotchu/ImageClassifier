

function clickMe(){
  console.log("Clicked");
  $.post('http://cnnflaskapi.herokuapp.com/classify',   // url
       { imageURL: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg' }, // data to be submit
       function(data, status, jqXHR) {// success callback
                console.log(status);
                console.log(data);
        })
}
