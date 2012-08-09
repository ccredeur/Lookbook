$(function(){

    // Bind the event.
    $(window).hashchange( function(){
        // Alerts every time the hash changes!
        // console.log( location.hash );
        var hash = location.hash.substring(1),
        getPage = 'home.php';
        
        $('.nav li').removeClass('active');
        
        switch(hash) {
            case 'home':
                getPage = 'home.php';
                $('#home').addClass('active');
            break;
            case 'video':
                getPage = 'video.php';
                $('#forms').addClass('active');
            break;
            case 'CodeStandards':
                getPage = 'code_standards.php';
                $('#code').addClass('active');
            break;
            case 'CodeToolKit':
                getPage = 'code_tool_kit.php';
                $('#code').addClass('active');
            break;
            case 'DesignStandards':
                getPage = 'design_standards.php';
                $('#design').addClass('active');
            break;
            case 'DesignToolKit':
                getPage = 'design_tool_kit.php';
                $('#design').addClass('active');
            break;
            case 'ImageMapping':
                getPage = 'labs_image_mapping.php';
                $('#labs').addClass('active');
            break;
            case 'Coordinates':
                getPage = 'labs_coordinates.php';
                $('#labs').addClass('active');
            break;
        }
        
        $('#main').load(getPage);
        
    });

    // Trigger the event (useful on page load).
    $(window).hashchange();

});