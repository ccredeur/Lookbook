(function($) {
 
    var methods = {
        init : function(options) {
            opts = $.extend({
                status: 'new'
            }, options)
            
            var lbThis = $(this),
                jsonPath = 'lookbook/json/',
                jsonName = opts.jsonName,
                lbName = opts.lbName,
                btnPrev = opts.btnPrev,
                btnNext = opts.btnNext,
                pageIdx = opts.pageIdx;
                
            $.getJSON(jsonPath+jsonName, function(data){
                
                $(lbThis).jcarousel({
                    wrap    :   'circular'
                }).touchwipe({
                    wipeLeft    :   function(){
                        $(lbThis).jcarousel('scroll', '-=1');
                    },
                    wipeRight   :   function(){
                        $(lbThis).jcarousel('scroll', '+=1');
                    }
                });
                
                $.each(data.pages, function(i,items){
                    var pagePath = 'lookbook/'+lbName+'/'+items.page_fname+'.html';
                    $(lbThis).find('ul').append('<li lb-page="'+(i+1)+'"></li>');
                    $(lbThis).find('ul li').eq(i).load(pagePath);
                    
                });
                
                $(btnPrev).jcarouselControl({target: '-=1'});
                $(btnNext).jcarouselControl({target: '+=1'});
                $(lbThis).jcarousel('scroll', $(lbThis).find('ul li:eq(' + pageIdx + ')') );
                $(lbThis).jcarousel('reload');
                
                $(lbThis).find('ul li').bind('jcarouselitemvisiblein', function(event, carousel) {
                    window.location.hash = '#'+lbName+'/'+$(this).attr('lb-page')
                });
            })
        }
    }

$.fn.lookbook = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  }
  
})(jQuery);