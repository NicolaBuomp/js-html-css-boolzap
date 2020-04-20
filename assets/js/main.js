$(document).ready(function () {

    var newMessage = $('.message');
    var sent = $('.icon-message-mic i');
    var cercaNome = $('#search-input');
    
    newMessage.keyup(function(event){

        if(event.which == 13){
            sentMessage(newMessage);

                    // risposta automatica
            setTimeout(function(){
                sentAutoMessage('Va bene'); 
            }, 3000);
            
        }



    });
    
    sent.on("click", function(){
        sentMessage(newMessage);

        // risposta automatica
        setTimeout(function(){
            sentAutoMessage('Va bene'); 
        }, 3000);
    });

    newMessage.focusin(function(){
        sent.toggleClass('fa-microphone fa-paper-plane');
    });

    newMessage.focusout(function(){
        sent.toggleClass('fa-microphone fa-paper-plane');
    });

    cercaNome.keyup(function(event){

        if(event.which == 13){
            searchName(cercaNome);
        }
    });
});


// Function

function sentMessage(input){

    var chatContainer = $(".body-chat");

    var testo = input.val().trim();

    if (testo.length > 0){

        var newTextMessage = $('.template .my-message').clone();

        newTextMessage.prepend(testo);

        $('.messages-chat.active .my-chat').append(newTextMessage);
            

        var data = new Date();
        var ora = addZero( data.getHours() );
        var minuti = addZero( data.getMinutes() );
        var orario = ora + ':' + minuti;
        newTextMessage.children('.time-message').text(orario);

         // pulire l'input dopo l'invio
        input.val('');

        chatContainer.scrollTop(chatContainer.prop('scrollHeight'));

    }

}

function sentAutoMessage(mess){

    var chatContainer = $(".body-chat");

        var newTextMessage = $('.template .your-message').clone();

        newTextMessage.prepend(mess);

        $('.messages-chat.active .my-chat').append(newTextMessage);

        var data = new Date();
        var ora = addZero( data.getHours() );
        var minuti = addZero( data.getMinutes() );
        var orario = ora + ':' + minuti;
        newTextMessage.children('.time-message').text(orario);

        chatContainer.scrollTop(chatContainer.prop('scrollHeight'));

}

function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
}

function searchName(input) { 

    var sName = input.val();
    var chat = $('.chat .box-chat');


    if ('michele'.includes(sName)){
        console.log(chat);
    }
    
    
}
