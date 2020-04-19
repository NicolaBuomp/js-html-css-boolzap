$(document).ready(function () {

    var myChat = $('.my-chat');
    var newMessage = $('.message');
    var sent = $('.icon-message-mic i')

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

    newMessage.focusin(function(){
        $('.icon-message-mic i').addClass('fa-paper-plane');
        $('.icon-message-mic i').removeClass('fa-microphone');
    });

    newMessage.focusout(function(){
        $('.icon-message-mic i').addClass('fa-microphone');
        $('.icon-message-mic i').removeClass('fa-paper-plane');
    });

    sent.on("click",(function(){
        // Button sent
    }));
});