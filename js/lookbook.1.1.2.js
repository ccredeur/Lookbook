(function($) {
 
    var methods = {
        init : function(options) {
            opts = $.extend({
                status: 'new'
            }, options)
            
            var lbThis = $(this),
                jsonPath = '/lookbook/json/',
                jsonName = opts.jsonName,
                lbName = opts.lbName,
                btnPrev = opts.btnPrev,
                btnNext = opts.btnNext,
                pageIdx = opts.pageIdx;
                
            $.getJSON(jsonPath+jsonName, function(data){
                $.each(data.pages, function(i,items){
                    var pagePath = '/lookbook/'+lbName+'/'+items.page_fname+'.html';
                    $(lbThis).find('ul').append('<li lb-page="'+(i+1)+'"></li>');
                    $(lbThis).find('ul li').eq(i).load(pagePath);
                    
                });
                
                $(lbThis).jcarousel({
                    
                }).touchwipe({
                    wipeLeft    :   function(){
                        $(lbThis).jcarousel('scroll', '+=1');
                    },
                    wipeRight   :   function(){
                        $(lbThis).jcarousel('scroll', '-=1');
                    }
                });
                
                if (pageIdx == 0) {
                    $('.lb-jcarousel-prev').hide();
                    $('.lb-jcarousel-next').show();
                } else if (pageIdx == ( $('#lb-jcarousel > ul > li').length - 1) ) {
                    $('.lb-jcarousel-prev').show();
                    $('.lb-jcarousel-next').hide();
                } else {
                    $('.lb-jcarousel-prev').show();
                    $('.lb-jcarousel-next').show();
                }
                
                $(lbThis).jcarousel('scroll', $(lbThis).find('ul li:eq(' + pageIdx + ')') );
                
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