$('#app').ready(function(){
    introduce_page();
});

document.oncontextmenu = function () {
    return false;
} //禁止右鍵
document.onselectstart = function () {
    return false;
} //禁止拖拉選取(反白)

// 禁止開啟F12及頁面存檔
document.onkeydown = function (e) {
    let keyCode = e.keyCode || e.which || e.charCode;
    let ctrlKey = e.ctrlKey || e.metaKey;
    if (ctrlKey && (keyCode === 83 || keyCode === 85 || keyCode === 79)) {
        e.preventDefault();
        return false;
    } else if (keyCode && keyCode === 123) {
        return false;
    }
}

function init_nav_item() {
    $('#introduce').removeClass('active');
    $('#log').removeClass('active');
    $('#project').removeClass('active');
    $('#publish').removeClass('active');
}

function main_page() {
    var data = $.get("main.html", function (data) {
        $('#app').html(data);
    });
    init_nav_item();
}

function introduce_page() {
    var data = $.get("introduce.html", function (data) {
        $('#app').html(data);
    });
    init_nav_item();
    $('#introduce').addClass('active');
}

function log_page() {
    var data = $.get("log.html", function (data) {
        $('#app').html(data);
    });
    init_nav_item();
    $('#log').addClass('active');
}

function project_page() {
    var data = $.get("project.html", function (data) {
        $('#app').html(data);
    });
    init_nav_item();
    $('#project').addClass('active');
}

function publish_page() {
    var data = $.get("publish.html", function (data) {
        $('#app').html(data);
    });
    init_nav_item();
    $('#publish').addClass('active');
}