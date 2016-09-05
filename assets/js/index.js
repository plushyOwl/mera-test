$(function () {

    new $.Tab({
        el: '#tabsection .nav a'
    });

    $('#popup-button').click(function () {
        var popup = new PopupView();
        $('body').append(popup.render($('#data').serializeArray()).el);
    });

});