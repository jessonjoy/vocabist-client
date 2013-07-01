/**
 * Created with IntelliJ IDEA.
 * User: jn
 * Date: 6/15/13
 * Time: 11:11 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    
    var pathname = window.location.pathname;
//    alert(pathname);
//    if(pathname.contains()  )

    /**
     * When the 'Flag' button is clicked, we change color to yellow and set the value to 'Flagged'
     */
    $('#flagbtn').click(function(){
        //change color
        $(this).toggleClass('yellow-background');

        //change text
        toggleText('#flagbtn > .ui-button-text', 'Flag', 'Flagged');
    });
    
    /**
     * When a Navigation menu item is clicked, we add an active class and remove the class from other items.
     */
    $('.nav > li a').click(function(e) {
        $('.nav > li .active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $( this ).addClass( "active");
        }

        e.preventDefault();
    });

});

/**
 * Toggle text. 'nuf said
 * @param selector
 * @param val1
 * @param val2
 */
function toggleText(selector,val1, val2){
    var text = $(selector).text();
    text == val1 ? $(selector).text(val2) : $(selector).text(val1);
}