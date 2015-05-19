function initPushwoosh()
{

    var pushNotification = window.plugins.pushNotification;

    //alert(pushNotification);

    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var message = event.notification.title;
        var userData = event.notification.userdata;

        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }

        alert(message);
    });

    // Inicializa os dados do plugin
    pushNotification.onDeviceReady({ projectid: "159181485102", pw_appid : "2090C-63BFC" });

    if(!window.localStorage['Pushwoosh']){ 
        //Registra para os Pushs
        pushNotification.registerDevice(
                function(status) {
                        var pushToken = status;
                        console.warn('push token: ' + pushToken);
                        alert('push token: ' + pushToken);
                        window.localStorage['Pushwoosh'] = true;
                        window.localStorage['token'] = pushToken;
                },
                function(status) {
                        console.warn(JSON.stringify(['failed to register ', status]));
                        alert(JSON.stringify(['failed to register ', status]));
                }
        );
    }

}