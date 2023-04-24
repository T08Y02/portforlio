function header(){
    $.ajax({
        url: "header.html",
        cache: false,
        success: function(html){
            $('#header').load('./header.html');
        }
    });
}