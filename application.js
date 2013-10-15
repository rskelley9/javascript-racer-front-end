$(document).ready(function() {
  var player1 = 1
  var player2 = 1
  var boardlength1 = $('#player1_strip td').length
  var boardlength2 = $('#player2_strip td').length
  $(document).on('keyup', function(event) {
    //q = 81
    //p = 80
    if (event.keyCode == 81) 

    {
      if (player1 < boardlength1)
        {
          $('#player1_strip .active').removeClass("active").next().addClass("active");
          player1++;
        }
      else
        {
          alert("Player 1 Wins!")
        }
    }
    else if (event.keyCode == 80)
    {
      if (player2 < boardlength2)
      {
        $('#player2_strip .active').removeClass("active").next().addClass("active");
        player2++;
      }
      else
      {
        alert("Player 2 Wins!")
      }
    } 
  });
});
