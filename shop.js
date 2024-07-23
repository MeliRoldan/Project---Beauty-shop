$("table").hide();
$(function () {

    $(".cart-btn").click(function(e) {
        e.preventDefault();
        $("table").toggle();
    });

    $(".form-control").attr("value", 1);
    
    $(document).on("click", ".btn-plus", function () {
        $(this).prev().val(+$(this).prev().val()+1);
    });

    $(".btn-minus").click( function () {
        if ($(this).next().val() >= 2) {
            $(this).next().val(+$(this).next().val()-1);
        };
    });

    $(document).on("click",".add-btn", function() {

        $(".empty").css("display","none")

        //product name ID
        let itemName = $(this).parent().parent().find(".card-title").text();

        //product data price
        let itemPrice = parseInt($(this).parent().parent().find(".price").text());

        //quantity
        let quantity = $(this).parent().find(".form-control").val();

        let subtotal = quantity * itemPrice;

        let itemID = $(".card-title").attr("id");

        $(".tbody").append(`
        <tr class="newItem">
        <td class="name text-success fw-bold" data-id="${itemID}">${itemName}</td>
        <td class="text-danger fw-bold number">${quantity}</td>
        <td class="text-danger fw-bold sub">${subtotal}</td>
        <td class="text-center"><i class="bi bi-x fs-4 d-block pb-2 delete"></i></td>
        </tr>`
        )
        
        
        let data = $(".name").attr("data-id");
        if (itemID == data) {
            let quantity = $(this).parent().find(".form-control").val();
            parseInt($(".number").text(quantity));
            let itemPrice = parseInt($(this).parent().parent().find(".price").text());
            let newSub = quantity * itemPrice;
            $(".sub").text(newSub);
            console.log(newSub)
        } else  {

        };
    });

    $(document).on("click",".delete", function(){
        $(this).closest("tr").remove();
    })

});