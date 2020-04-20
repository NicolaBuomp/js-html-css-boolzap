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

        if(event.which){
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
    var chat = $('.chat');

    if ('michele'.includes(sName)){

        chat.children().hide();
        chat.children().eq(0).show();
        
    } else if ('fabio'.includes(sName)){

        chat.children().hide();
        chat.children().eq(1).show();

    } else if ('samuele'.includes(sName)){

        chat.children().hide();
        chat.children().eq(2).show();

    } else if ('alessandro b'.includes(sName)){

        chat.children().hide();
        chat.children().eq(3).show();
        
    } else if ('alessandro l'.includes(sName)){

        chat.children().hide();
        chat.children().eq(4).show();
        
    } else if ('claudia'.includes(sName)){

        chat.children().hide();
        chat.children().eq(5).show();
        
    } else if ('davide'.includes(sName)){

        chat.children().hide();
        chat.children().eq(6).show();
        
    }else if ('federico'.includes(sName)){

        chat.children().hide();
        chat.children().eq(7).show();
        
    } else if (sName == ''){
        chat.children().show();
    }


    
    
}
