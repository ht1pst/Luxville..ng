$(function(){
    $('.header').hide().delay(1500).slideDown().delay(1000);
    $(".section2").hide().fadeIn(8000)
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
