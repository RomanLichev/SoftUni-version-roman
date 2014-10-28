function httpGet(documentName) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', /*'content/' + */documentName + '.html', false);
    xmlHttp.send(null);
    document.getElementById('wrapper').innerHTML = xmlHttp.responseText;
    //return xmlHttp.responseText;
}

function getPageName() {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    if (!vars[0]) {
        return 'main';
    }

    var page = vars[vars.length - 1].split('page=')[1];
    return /*vars[vars.length - 1]*/ page || 'error';
}


var pageName = getPageName();

httpGet(pageName);