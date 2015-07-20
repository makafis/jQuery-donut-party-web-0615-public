$(function(){ 
  var donutCounter = new DonutCounter();
});

function DonutCounter(){
    var guestNum = 0;
    var donutNum = 0;
    

    $('#donuts button.add').click(function()
    {
      $('#donuts h3 span').text(++donutNum);
    });

    $('#donuts button.remove').click(function()
    {
      if (donutNum != 0)
      {
        $('#donuts h3 span').text(--donutNum);
      };
    });

    $('#guests > button.add').click(function()
    {
      $('#guests > h3 > span').text(++guestNum);
    });

    $('#guests > button.remove').click(function()
    {
      if (guestNum != 0){
      $('#guests > h3 > span').text(--guestNum);
      };
    });

    $('#check > button').click(function(){
      //if too few donuts print 'Guests are sad :('

      //if there are no guests print 'Invite someone you jerk!'

      //if there are enough donuts per guests 'Guests are having a blast!'

      // if there are too many donuts 'ARE YOU TRYING TO KILL U ALL!?'
      switch (check(guestNum, donutNum)){
        case 1:
          $('#status').text('Guests are having a blast!');
          break;
        case 2:
          $('#status').text('ARE YOU TRYING TO KILL US ALL!?');
          break;
        case 3:
          $('#status').text('Guests are sad :(');
          break;
        case 4:
        //no guests.
          $('#status').text('Invite someone you jerk!');
          break;
        default:
        
          break;
      };
    });

    function check(guest, donut){
      var ratio = (donut/guest);
      
      if (guest == 0)
      {
        return 4;
      } else if(ratio > 4)
      {
        return 2;
      } else if(guest > donut)
      {
        return 3;
      } else
      {
        return 1;
      };
    }; //end function


}; //end of DonutCounter function.

  // if (guests > donuts) && ((donuts/guests <= 4)){
  //   return true;
  // } else {
  //   return false;
  // }; // end of if