$("#page-load").load("distilery.html");
$(function () {

    $(document).on("click", "a", function(){
      
        let pageID = $(this).attr("id");
        switch (pageID) {

            case "home":
                $("#page-load").load("distilery.html");
            break;

            case "about":
                $("#page-load").load("about.html");
            break;
            
            case "catalogue":
                $("#page-load").load("catalogue.html");
            break;

            case "delivery":
                $("#page-load").load("delivery.html");
            break;
        }
    })
})