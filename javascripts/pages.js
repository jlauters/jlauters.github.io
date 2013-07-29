jQuery(document).ready(function($) {

    // get public repos
    var public_url = 'https://api.github.com/users/jlauters/repos?type=public';
    var parsePublicJSON = function(data, textStatus, jqXHR) {

        $(data).each(function(idx, repo) {
            $('#projects-container').append('<p><strong>' + 
                repo.name + '</strong> - ' + repo.description + 
                ' :: <span class="language">(' + repo.language + ')</span></p>');
        });

    };

    try {
        $.ajax({url: public_url, success: parsePublicJSON, dataType: 'json'});
    } catch (err) {
        alert(err);
    }

    // Meny Config
    var meny = Meny.create({
        menuElement: document.querySelector('.meny'),
        contentsElement: document.querySelector('.contents'),
        position: 'left',
        height: 200,
        width: 260,
        mouse: true,
        touch: true,
        threshold: 40
    });

    meny.open();
});
