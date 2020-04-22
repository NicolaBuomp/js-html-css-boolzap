$(document).ready(function () {

    var newMessage = $('.message');
    var sent = $('.icon-message-mic i');
    var cercaNome = $('#search-input');
    var lastAccess = $('.top-bar-user-chat').find('.user-chat-name .sub-name-chat');


    // invio messaggio con il tasto invio
    newMessage.keyup(function(event){

        if(event.which == 13){
            sentMessage(newMessage);

            // Online
            setTimeout(function(){
                lastAccess.text('Online');
            },1000);

            // risposta automatica
            setTimeout(function(){
                sentAutoMessage('Va bene'); 
            }, 3000);

            // Offline
            setTimeout(function(){
                lastAccess.text('Ultimo accesso alle ' + timeMessage());
            },5000);

        };
    });
    
    // Invia messaggio con il click
    sent.on("click", function(){
        sentMessage(newMessage);

        // Online
        setTimeout(function(){
            lastAccess.text('Online');
        },1000);

        // risposta automatica
        setTimeout(function(){
            sentAutoMessage('Va bene'); 
        }, 3000);

        // Offline
        setTimeout(function(){
            lastAccess.text('Ultimo accesso alle ' + timeMessage());
        },5000);
    });


    // cambio l'icona con il focus sull'input
    newMessage.focusin(function(){
        sent.toggleClass('fa-microphone fa-paper-plane');
    });

    newMessage.focusout(function(){
        sent.toggleClass('fa-microphone fa-paper-plane');
    });
    // ---



    // Cerca nomi delle chat
    cercaNome.keyup(function(){

        var serach = $(this).val().toLowerCase().trim();

        $('.box-chat').each(function() {

            // Prendo i nomi delle chat
            var nameContact = $(this).find('.user-chat-name .name-chat').text().toLowerCase();

            // 
            if(nameContact.includes(serach)){
                $(this).show();
            } else {
                $(this).hide();
            }
            
        });
        
    });

    $('.box-chat').click(function() {

        var chat = $(this).attr('data-conversazione');
        
        // reset
        $('.messages-chat').removeClass('active');
        $('.box-chat').removeClass('selected');

        
        // Show active
        $('.messages-chat[data-conversazione="' + chat + '"]').addClass('active');
        $('.box-chat[data-conversazione="' + chat + '"]').addClass('selected');

        // Recupero nome chat
        var nameContact = $(this).find('.name-chat');
        var nameChat = $('.top-bar-user-chat').find('.name-chat');

        // Cambio nome chat
        nameChat.text(nameContact.text());
        
        // Recupero image chat
        var imgContact = $(this).find('.user-chat img').attr('src');
        var imgChat = $('.top-bar-user-chat').find('.img-user img');

        // cambio image chat
        imgChat.attr('src', imgContact);
         

    });
    
    // $('.drop-delete').click(function(){
        
    //     $('.dropdown').toggleClass('active');

    // });

});


/**
 * FUNCTION
 */

// Function mio messaggio
function sentMessage(input){

    var chatContainer = $(".body-chat");

    var testo = input.val().trim();

    if (testo.length > 0){

        var newTextMessage = $('.template .my-message').clone();

        newTextMessage.prepend(testo);

        $('.messages-chat.active .my-chat').append(newTextMessage);
           
        // Time
        var orario = timeMessage();
        newTextMessage.children('.time-message').text(orario);

         // pulire l'input dopo l'invio
        input.val('');

        // Mostra sempre unltimo messaggio 
        chatContainer.scrollTop(chatContainer.prop('scrollHeight'));

        // imposto orario ultimo messaggio in chat
        var timeChat = $('.box-chat.selected').find('.time-chat');
        timeChat.text(orario);

        // imposto ultimo messaggio in chat
        var lastMessage = $('.box-chat.selected').find('.sub-name-chat');
        lastMessage.text(testo);
        

    };

};


// Function Auto Risposta
function sentAutoMessage(mess){

    var chatContainer = $(".body-chat");

    var newTextMessage = $('.template .your-message').clone();


    newTextMessage.prepend(mess);

    $('.messages-chat.active .my-chat').append(newTextMessage);

    // Time
    var orario = timeMessage();
    newTextMessage.children('.time-message').text(orario);

    // Mostra sempre unltimo messaggio 
    chatContainer.scrollTop(chatContainer.prop('scrollHeight'));

    // imposto orario ultimo messaggio in chat
    var timeChat = $('.box-chat.selected').find('.time-chat');
    timeChat.text(orario);

    // imposto ultimo messaggio in chat
    var lastMessage = $('.box-chat.selected').find('.sub-name-chat');
    lastMessage.text(mess);
         

};

// TimeMesage
function timeMessage(){

    var data = new Date();
    var ora = addZero( data.getHours() );
    var minuti = addZero( data.getMinutes() );
    var orario = ora + ':' + minuti;

    return orario;

};

function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
};