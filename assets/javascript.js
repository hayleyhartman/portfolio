$(".portfolioDiv").hide()
$(".resumeDiv").hide()

$(".about").on("click", function(){
    $(".aboutDiv").show()
    $(".contactDiv").show()
    $(".portfolioDiv").hide()
    $(".resumeDiv").hide()
})

$(".name").on("click", function(){
    $(".aboutDiv").show()
    $(".contactDiv").show()
    $(".portfolioDiv").hide()
    $(".resumeDiv").hide()

})

$(".resume").on("click", function(){
    $(".aboutDiv").hide()
    $(".portfolioDiv").hide()
    $(".contactDiv").hide()
    $(".resumeDiv").show()
})

$(".portfolio").on("click", function(){
    $(".portfolioDiv").show()
    $(".contactDiv").hide()
    $(".aboutDiv").hide()
    $(".resumeDiv").hide() 
})



