$(".share-box").hide()
var click_flag =0

$(".share-cont").click(function(){
  if(click_flag==0){
    $(".share-box").show()
    click_flag=1
  }else{
    $(".share-box").hide()
    click_flag=0

  }


})

$(".share-cont").hover(function(){
  $(".share-box").show()

},function(){
  if(click_flag==0){
      $(".share-box").hide()

  }


})
