
function openTab(evt, id) {
    $('.content').hide();
    $('#' + id).show();
    $('.btn').removeClass('active');
    $(evt.currentTarget).addClass('active');
    }    




    $('.btn').on('click', e => {
    e.preventDefault(); 
    openTab(e, $(e.target).data('id'));
    });

    $('.btn.active').click(); // Open default tab