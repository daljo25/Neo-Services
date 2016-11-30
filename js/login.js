$('#form_lr').submit(function(){ var frm = $('#form_lr');
if($('#user_lr').val() != "" && $('#password_lr').val() != "" && $('#server_lr').val() != ""){
    $.ajax({ type: frm.attr('method'),url:'http://'+$('#server_lr').val()+'/sistema/mods/rlogin/login_procesar.php?user_lr='+$('#user_lr').val()+'&password_lr='+$('#password_lr').val()+'&token_lr='+$('#token_lr').val()+'&server_lr='+$('#server_lr').val()+'&jsoncallback=?',data:frm.serialize(),dataType:'json',
    success: function (html) { switch(html.check) {
                    case 0:
                        $('#emsg_lr').html('<strong>Error!</strong>&nbsp;Host no autorizado');
                        $('.alert').show();
                        break;
                    case 1:
                        document.location='http://'+$('#server_lr').val()+'/sistema/inicio.php';
                        break;
                    case 2:
                        $('#emsg_lr').html('<strong>Error!</strong>&nbsp;Credenciales incorrectas. ');
                        $('.alert').show();
                        break;
                    default:
                        $('#emsg_lr').html('<strong>Error!</strong>&nbsp;Ha ocurrido un problema de acceso.');
                        $('.alert').show();
                        break;
    }}});
}
return false;});