$(".contactDiv").hide()
$(".portfolioDiv").hide()

$(".contact").on("click", function(){
    $(".contactDiv").show()
    $(".aboutDiv").hide()
    $(".portfolioDiv").hide()
})

$(".portfolio").on("click", function(){
    $(".portfolioDiv").show()
    $(".contactDiv").hide()
    $(".aboutDiv").hide()
    
})

$(".about").on("click", function(){
    $(".aboutDiv").show()
    $(".contactDiv").hide()
    $(".portfolioDiv").hide()

})

