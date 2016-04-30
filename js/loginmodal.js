/**
 * Created by geddingsbarrineau on 4/30/16.
 */

//$('#login-modal').on('hide.bs.modal', function (e) {
//    //setIpAddress();
//    if (!checkConnection($("#ipaddress").val(), $("#restport").val())) {
//        if (!confirm(""))
//        e.preventDefault();
//        e.stopImmediatePropagation();
//        return false;
//    }
//    else setIpAddress();
//});

$('#login-modal button').on('click', function (e) {
    var $target = $(e.target);
    console.log($target);
    //$(this).closest('.modal').on('hidden.bs.modal', function (e) {
    //    alert('The buttons id that closed the modal is: #' + $target[0].id);
    //});
    if ($target[0].id == "start-button") {
        $('#login-modal').on('hide.bs.modal', function (e) {
            //setIpAddress();
            if (!checkConnection($("#ipaddress").val(), $("#restport").val())) {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
            else setIpAddress();
        });
    }
});

function checkConnection(ip, port) {
    var returnMessage = $.ajax({
        url    : "http://" + ip + ":" + port + "/wm/core/health/json",
        async  : false,
        success: function (data) {
            console.log("Connection made!");
            return data;
        },
        error  : function (jqXHR, textStatus, errorThrown) {
            console.log("Connection cannot be made! :(");
        }
    });

    if (returnMessage.statusText == "OK") return true;
    else return false;
}

function setIpAddress() {

    var ip = $("#ipaddress").val();
    var port = $("#restport").val();

    $.cookie('cip', ip, {expires: 7});
    $.cookie('cport', port, {expires: 7});

    var readed = $.cookie('cip');

    if (readed != null && readed != "") {
        console.log("correct!");
        ipaddress = ip;
        restport = port;
    }
    else {
        console.log("Can not set the ip address!");
    }
}