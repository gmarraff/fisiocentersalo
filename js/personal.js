$(document).ready(function(){
    blueimp.Gallery(
        document.getElementById('structure_slides').getElementsByTagName('a'),
        {
            container: '#structure_gallery',
            carousel: true,
            startSlideshow: false,

        }
    );
    $('#structure_gallery').css(
        {
            background: 'none',
            backgroundColor: 'none',
            boxShadow: 'none',
            //padding: 0,
            margin: 0
        });
});
