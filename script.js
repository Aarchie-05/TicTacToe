$(document).ready(function(){

    var player = 1;

    $(".box").on('click', function(event){
        var squareSelected = $(this);
        if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')){
            swal({
                title: "Alert",
                text: "This box is already filled !",
                icon: "warning",
                button: "Ok",
              });
        }
        else{
            if(player === 1){
                squareSelected.addClass('ex');
                squareSelected.html('X');
                $('.display').html("<h2>It's Player 1's Turn</h2>");
                if(checkWinner('ex')){
                    $(".result").html('<h2>Player 1 WON</h2>');
                    swal({
                        title: "🎉🎉🎉",
                        text: "PLAYER 1 WON !",
                        icon: "success",
                        button: "Aww yiss!",
                      });
                }
                else{
                    player = 2;
                    $('.display').html("<h2>It's Player 2's Turn</h2>");
                }
            }
            else{
                squareSelected.addClass('oh');
                squareSelected.html('O');
                if(checkWinner('oh')){
                    $(".result").html('<h2>Player 2 WON</h2>');
                    swal({
                        title: "🎉🎉🎉",
                        text: "PLAYER 2 WON !",
                        icon: "success",
                        button: "Aww yiss!",
                      });
                }
                else{
                    player = 1;
                    $('.display').html("<h2>It's Player 1's Turn</h2>")
                }
            }
        }
    });
    function checkWinner(symbol){
        if(($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) || ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) || ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) || ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) || ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) || ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) || ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) || ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol))){
            return true;
        }
        else{
            return false;
        }
        
    }
    $(".game--restart").click(function(){
        $(".box").text('');
        $(".result").html('');
        $('.display').html("<h2>It's Player 1's Turn</h2>");
    })
});