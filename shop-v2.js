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

        $(".empty").css("display","none");

        let itemID = $(this).parent().parent().find(".card-title").attr("id");
        $("tr").attr("data-id", itemID);

        let itemName = $(this).parent().parent().find(".card-title").text();
        $(".name").text(itemName);

        let quantity = parseInt($(this).parent().find(".form-control").val());
        $(".number").text(quantity);

        let itemPrice = parseInt($(this).parent().parent().find(".price").text());
        let subtotal = quantity * itemPrice;
        $(".sub").text(subtotal);

        let btnID = $(this).attr("id");
        let trID = $("tbody").find("tr").attr("data-id");

        if (btnID === trID) {
            $(this).prop("disbaled", true);
            $(this).text("Added");
        } else {
            $("tbody").append(`
        <tr class="newItem" data-id="${itemID}">
        <td class="name text-success fw-bold" data-id="${itemID}">${itemName}</td>
        <td class="text-danger fw-bold number">${quantity}</td>
        <td class="text-danger fw-bold sub">${subtotal}</td>
        <td class="text-center"><i class="bi bi-x fs-4 d-block pb-2 delete"></i></td>
        </tr>`
        )
        }
    });

    $(document).on("click",".delete", function(){
        $(this).closest("tr").remove();
    })

});