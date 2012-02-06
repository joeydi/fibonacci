//Read about cloning elements that aren't attached to the DOM (like the items we sorted). http://api.jquery.com/clone/
//Example: When using .clone() to clone a collection of elements that are not attached to the DOM, their order when inserted into the DOM is not guaranteed. However, it may be possible to preserve
//sort order with a workaround, as demonstrated:

    $( ".string1" ).click(function () {
        $( ".rollup1" ).toggle("fold", {}, 1000)
    });
    $( ".string2" ).click(function () {
        $( ".rollup2" ).toggle("fold", {}, 1000)
    });
    $( ".string3" ).click(function () {
        $( ".rollup3" ).toggle("fold", {}, 1000)
    });

//sortable, alert after sorting
$(document).ready(function() {
    $( "#justSomeHTML" )
        .sortable({
            placeholder: 'tmpPlaceholder',
            forcePlaceholderSize: true,

            helper: function(e, element) {
                return $(element).clone().addClass('tmpHelper');
                },

            update : function(e, ui) {
                $( "#goldenRectangle" )
                    .empty()
                    .append(
                         $('#justSomeHTML')
                            .clone()
                            .children('a')
                            .end()
                        );

                },
            })
        .disableSelection();
});

//cloning with workaround for elements not attached to DOM
// correct way to approach where order is maintained
    $( "#////////goldenRectangle" )
          .append(
              $('#justSomeHTML')
                    .clone()
                    .children('a')
                    .prepend('bar - ')
                    .end()
                );

//backup

//sortable, placeholder

$(document).ready(function() {
    $( "#///////////justSomeHTML" )
        .sortable({
            placeholder: 'tmpPlaceholder',
        });
});






<!-- side-to-side slider script -->
<script type="text/javascript">
$(function(){
    $( ".knob" ).draggable({ containment: "parent" });

    $( ".targetLeft" ).droppable({
        drop: function( event, ui ){
            $( "#section-9" )
                .addClass( "onLeft" )
                .removeClass ( "onRight" )
        }
    });

    $( ".targetRight" ).droppable({
        drop: function( event, ui ){
            $( "#section-9" )
                .addClass( "onRight" )
                .removeClass ( "onLeft" )
        }
    });
});
</script>