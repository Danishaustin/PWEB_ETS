
function fetchData(successCallback, errorCallback) {
    $.ajax({
        url: 'api.txt',
        method: 'GET',
        dataType: 'json',
        success: successCallback,
        error: errorCallback,
    });
}
