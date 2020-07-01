$(document).ready(function () {
        
    //Target the Same Element with Multiple jQuery Selectors
    $("button").addClass("animated");
    /**
    **$(".btn").addClass("shakeX");
    */
    $("#target1").addClass("btn-primary");
    

    // Remove Classes from an Element with jQuery
    $("#target1").removeClass("btn-secondary");

    // Change the CSS of an Element Using jQuery
    $("#target2").css("color", "purple");

    // Disable an Element Using jQuery
    $("#target3").prop("disabled", true);

    // Change Text Inside an Element Using jQuery
    $("#target4").html("<em>#target4</em>");

    // Remove an Element Using jQuery
    $("#target5").remove();

    // Use appendTo to Move Elements with jQuery
    $("#target2").appendTo("#right-card");

    // Clone an Element Using jQuery
    $("#target6").clone().appendTo("#left-card");

    // Target the Parent of an Element Using jQuery
    $("#target1").parent().css("background-color", "red");

    // Target the Children of an Element Using jQuery
    $("#right-card").children().css("color", "orange");

    // Target a Specific Child of an Element Using jQuery
    $(".target:nth-child(2)").addClass("bounce");

    // Target Even Elements Using jQuery
    $(".target:even").addClass("shakeX");

    // Use jQuery to Modify the Entire Page
    $("body").addClass("animated hinge");

    /**
    // Target HTML Elements with Selectors Using jQuery
    **$("button").addClass("animated bounce");
    // Target Elements by Class Using jQuery
    **$(".card").addClass("animated shakeX");
    // Target Elements by id Using jQuery
    **$("#target3").addClass("animated fadeOut");
    **$("#target6").addClass("animated fadeOut");
    */
  });