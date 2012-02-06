    $( ".targetRight" ).droppable({
        drop: function( event, ui ){
            $( "#section-9" )
                .addClass( "onRight" )
                .removeClass ( "onLeft" ),

// need to figure out how to bind updating function to dropping event
            update: function foo ( e , ui ) {
                $( "#goldenRectangle" )
                    .empty()
                    .append(
                         $('#justSomeHTML')
                            .clone()
                            .children('a')
                            .end()
                        );
            }
        }
    });