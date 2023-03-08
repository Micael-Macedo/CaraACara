let selecionado = 0;
$(document).ready(function () {
    console.log($(".personagem"))
    $(".personagem")
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
        $(".message").empty()
        $(".message").append(
            "<h2>Faça perguntas para descobrir o personagem do seu amigo</h2>"
        )
    }
});
function reiniciar(){
    $(".message").empty()
        $(".message").append(
            "<h2>Selecione seu personagem</h2>"
        )
    $(".personagem").removeClass("false");
    $(".personagem").removeClass("selected");
}