let selecionado = 0;
$(document).ready(function () {
    console.log($(".personagem"))
    $(".personagem")
    $("button").hide();
});
$(".personagem").click(function () {
    if($(".personagem").hasClass("selected")){
        if($(this).hasClass("false")){
            $(this).removeClass("false");
        }else{
            $(this).addClass("false");
        }
    }else{
        $(this).addClass("selected");
        $(".message").hide()
        $(".turn-message").empty()
        $("button").show();
    }
});
function reiniciar(){
    $(".turn-message").empty()
    $(".turn-message").append(
        "<h2>Selecione seu personagem</h2>"
    )
    $(".message").show()
    $(".personagem").removeClass("false");
    $(".personagem").removeClass("selected");
}