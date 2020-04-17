$(document).ready(function () {

    var myChat = $('.my-chat');
    var newMessage = $('.message');

    newMessage.keyup(function(event){

        if(event.which == 13){
            var testo = $(this).val().trim();

            if (testo !== ''){
                var newTextMessage = $('.template li').clone();
                newTextMessage.prepend(testo);
                myChat.append(newTextMessage);
            
                // pulire l'input dopo l'invio
                newMessage.val('');
            }
        }
    });
});