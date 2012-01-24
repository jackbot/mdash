
( function( mdash )
{
    
    var EditCtrl = mdash.EditCtrl = function( $btn, $bookmarks )
    {
        this.$btn       = $btn;
        this.$bookmarks = $bookmarks;
        this.api        = chrome.bookmarks;
    };
    
    EditCtrl.prototype.init = function()
    {
        this.$btn.bind( 'click', this.toggleEdit.bind( this ) );
        
        this.removeContextMenus();
    };
    
    
    EditCtrl.prototype.createContextMenus = function()
    {
        chrome.contextMenus.create(
            {
                type                : 'normal',
                title               : 'Remove bookmark',
                contexts            : [ 'link' ],
                onclick             : this.remove.bind( this ),
                // documentUrlPatterns : [ 'chrome://*' ]
            }
        );
        
        chrome.contextMenus.create(
            {
                type                : 'normal',
                title               : 'Rename bookmark',
                contexts            : [ 'link' ],
                onclick             : this.rename.bind( this ),
                // documentUrlPatterns : [ 'chrome://*' ]
            }
        );
    };
    
    EditCtrl.prototype.removeContextMenus = function()
    {
        chrome.contextMenus.removeAll( this.createContextMenus.bind( this ) );
    };
    
    EditCtrl.prototype.remove = function( info, tab )
    {
        var $link = mdash.links[ info.linkUrl ];
    };
    
    EditCtrl.prototype.rename = function( info, tab )
    {
        console.debug( info );
    }
    
    EditCtrl.prototype.toggleEdit = function( e )
    {
        e.preventDefault();
        
        this.$bookmarks.toggleClass( 'edit' );
        this.$btn.html( this.$bookmarks.hasClass( 'edit' ) ? 'done' : 'edit' );
    };
    
} )( window.mdash );