$(".portfolioDiv").hide()
$(".resumeDiv").hide()
$(".about").addClass("current")
$(".name").addClass("current")

$(".about").on("click", function(){
    $(".aboutDiv").show()
    $(".contactDiv").show()
    $(".portfolioDiv").hide()
    $(".resumeDiv").hide()
    $(".about").addClass("current")
    $(".name").addClass("current")
    $(".portfolio").removeClass("current")
    $(".resume").removeClass("current")
})

$(".name").on("click", function(){
    $(".aboutDiv").show()
    $(".contactDiv").show()
    $(".portfolioDiv").hide()
    $(".resumeDiv").hide()
    $(".about").addClass("current")
    $(".name").addClass("current")
    $(".portfolio").removeClass("current")
    $(".resume").removeClass("current")

})

$(".resume").on("click", function(){
    $(".aboutDiv").hide()
    $(".portfolioDiv").hide()
    $(".contactDiv").hide()
    $(".resumeDiv").show()
    $(".about").removeClass("current")
    $(".name").removeClass("current")
    $(".portfolio").removeClass("current")
    $(".resume").addClass("current")
})

$(".portfolio").on("click", function(){
    $(".portfolioDiv").show()
    $(".contactDiv").hide()
    $(".aboutDiv").hide()
    $(".resumeDiv").hide()
    $(".about").removeClass("current")
    $(".name").removeClass("current")
    $(".portfolio").addClass("current")
    $(".resume").removeClass("current")
})



