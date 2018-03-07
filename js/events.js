function getIt() {
  $('p').on("click", function() {
  alert("Hey!")
  })
};

function frameIt() {
  $('img:first').on('load', function(){
    $('img:first').addClass('tasty')
  });
};

function submitIt(){

}


$(document).ready(function(){

getIt()

frameIt()


});
