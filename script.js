$(".Submit").click(function() {
    var UserAge = $(".age").val();
    var UserCar = $(".career").val();
    if((UserCar === "Actor"|| UserCar === "actor") && parseInt(UserAge) <= 18 ){
    $(".Friends").text("Joey");
    $(".FriendsSubtext").text("replace.");
}else if ((UserCar === "actor" || UserCar === "Actor") && parseInt(UserAge) >= 18){
    $(".Friends").text("neither");
    $(".FriendsSubtext").text("replace");
}else if ((UserCar === "Singer"|| UserCar === "singer") && parseInt(UserAge) <= 18){
     $(".Friends").text("Pheobe");
    $(".FriendsSubtext").text("Pheobe");
}else if ((UserCar === "Singer" || UserCar === "singer") && parseInt(UserAge) >= 18){
     $(".Friends").text("neither");
     $(".FriendsSubtext").text("replace");
}else { 
     $(".Friends").text("OOPS YOU FORGOT TO CHOOSE!");
}
});    
     