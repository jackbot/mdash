
( function( $, d, undefined )
{
    d._ = window.console.debug.bind( window.console );
    
    var m = new d.Manager();
    
    m.initialize( function()
    {
        var v = new d.View( $( '#container' ), m );
        
        v.display();
        
        $( '.plus' ).bind( 'click', function( e )
        {
            var $target = $( e.target ),
                $col    = $( '#container' ).find( $target.data( 'el' ) );
                
            
        } );
        
    } );
    
} )( Zepto, this.Dashboard );