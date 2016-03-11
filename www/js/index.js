var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function clearLocalStorage(){
localStorage.clear();
}

$(document).on("pageshow", "#page1", function(){
function testpertama(){
    var fl = window.localStorage.getItem("firstlaunch");
    if (fl && parseInt(fl) == 0){
       return 1;
    } else {
        window.localStorage.setItem("firstlaunch", "0");
$.ajax({
    url: 'http://panduanwisatadieng.com/?json=get_recent_posts&post_type=wisata&count=30',
    dataType: 'JSONP',
    success: function(data, status) {
        var localData = JSON.stringify(data);
        window.localStorage.setItem('obyekwisata', localData);
        okedeh=1;
    },error: function() {  }
});

$.ajax({
    url: 'http://panduanwisatadieng.com/?json=get_recent_posts&post_type=hotel&count=30',
    dataType: 'JSONP',
    success: function(hdata, status) {
        var datahotel = JSON.stringify(hdata);
        window.localStorage.setItem('hotel', datahotel);
        okedeh=1;
    },error: function() { }
});
return 1; }}
if(testpertama()==1){
var menutama="";
menutama += "<ul><li><a href='wisata.htm'><span class='font200 lnr lnr-map-marker'><\/span><br><span class='font80 fbold'>Obyek Wisata<\/span><\/a><\/li>";
menutama += "<li><a onclick='clearLocalStorage()' class='curpon'><span class='font200 lnr lnr-briefcase'><\/span><br><span class='font80 fbold'>Paket Tour<\/span><\/a><\/li>";
menutama += "<li><a href='hotel.htm'><span class='font200 lnr lnr-apartment'><\/span><br><span class='font80 fbold'>Penginapan<\/span><\/a><\/li><\/ul>";
 $('#menutama').html(menutama);
 $('.listening').hide(); $('.received').show();
}
});

$(document).one('pagebeforecreate', function () {
var panel ="";
panel +="<div data-role='panel' id='mypanel' data-position='right' data-display='overlay' class='bwhite  pad0'><div class='bgyellow pad20 text-right fwhite'><a class='dinblock font120 lnr lnr-cross fwhite'  data-rel='close'><\/a></div>";
panel +="<div class='nolist fontn fyellow'><ul><li><a href='wisata.htm'><span class='font100 lnr lnr-map-marker'><\/span><span class='font80'>Obyek Wisata<\/span><\/a><\/li>";
panel +="   <li><a href=''><span class='font100 lnr lnr-briefcase'><\/span><span class='font80'>Tour Package<\/span><\/a><\/li>";
panel +="   <li><a href='hotel.htm'><span class='font100 lnr lnr-apartment'><\/span><span class='font80'>Hotel \/ Penginapan<\/span><\/a><\/li>";
panel +="   <li><a href=''><span class='font100 lnr lnr-question-circle'><\/span><span class='font80'>FAQ<\/span><\/a><\/li>";
panel +="   <li><a href=''><span class='font100 lnr lnr-users'><\/span><span class='font80'>Tentang Kami<\/span><\/a><\/li>";
panel +="   <li><a onclick='Javascript:clearStorage()' class='curpon'><span class='font100 lnr lnr-warning'><\/span><span class='font80'>Syarat dan Ketentuan<\/span><\/a><\/li><\/ul>";

panel +="<\/div><\/div>";
  $.mobile.pageContainer.prepend(panel);
  $("#mypanel").panel();
});

$(document).bind("mobileinit", function()
{
   if (navigator.userAgent.indexOf("Android") != -1)
   {
     $.mobile.defaultPageTransition = 'none';
     $.mobile.defaultDialogTransition = 'none';
   }
});

$(document).on("pagecreate","#obyekwisata",function(){
var data = JSON.parse(window.localStorage.getItem('obyekwisata'));
          $.each(data.posts, function(i,posts){
	    var id=posts.id;
		var title=posts.title_plain;
		var content=posts.content;
		var excerpt=posts.excerpt;
		var thumb=posts.thumbnail_images.mobile.url;

var poswrap="";
poswrap += "<a href='#page1"+i+"' class='dblock'><div class='wrapper'>";
poswrap += "<div class='img_wrapper'>";
poswrap += "<div class='diengload'><img src='"+thumb+"'\/><\/div>";
poswrap += "<div class='title_wrapper text-center width100'  >";
poswrap += "<h3 class='dinblock fontn pad10 text-center font90 caps bd-bdtopbot-bdwhite'>"+title+"<\/h3>";
poswrap += "<\/div>";
poswrap += "<\/div>";
poswrap += "<\/div><\/a>";

var pagewrap="";
pagewrap += "<div data-role='page' id='page1"+i+"'>";
pagewrap += "<div id='header' class='fwhite text-center'>";
pagewrap += "<a  data-rel='back' class='fwhite curpon mfloleft lnr lnr-arrow-left font200 mrg5'><\/a>";
pagewrap += "<a href='#mypanel' class='fwhite curpon mfloright lnr lnr-menu font200 mrg5'><\/a><\/div>";
pagewrap += "<div data-role='main' class='pad0'>";
pagewrap += "<div class='img_wrapper'>";
pagewrap += "<img src='"+thumb+"'\/>";
pagewrap += "<\/div>";
pagewrap += "<div class='pad10 font80 fgrey'><h1 class='judul dinblock font120 fontn'>"+title+"<\/h1><p>"+content+"</p><\/div>";
pagewrap += "<br\/><br\/><br\/><\/div>";
pagewrap += "<\/div>";

$('#data').append(poswrap);
$('#obyekwisata').after(pagewrap);
                })
  });



$(document).on("pagecreate","#hotel",function(){
var hdata = JSON.parse(window.localStorage.getItem('hotel'));
$.each(hdata.posts, function(i,hposts){
	    var hid=hposts.id;
		var htitle=hposts.title_plain;
		var hcontent=hposts.content;
		var hexcerpt=hposts.excerpt;
		var imghotel=hposts.thumbnail_images.mobile.url;

var hotelwrap="";
hotelwrap += "<a href='#page1"+hid+"' class='dblock'><div class='wrapper'>";
hotelwrap += "<div class='img_wrapper bblack'><div class='diengload'>";
hotelwrap += "<img src='"+imghotel+"'\/>";
hotelwrap += "<\/div><div class='title_wrapper text-center width100'  >";
hotelwrap += "<h3 class='dinblock fontn pad10 text-center font100 caps bd-bdtopbot-bdwhite'>"+htitle+"<\/h3>";
hotelwrap += "<\/div>";
hotelwrap += "<\/div>";
hotelwrap += "<\/div><\/a>";

var hpagewrap="";
hpagewrap += "<div data-role='page' id='page1"+hid+"'>";
hpagewrap += "<div id='header' class='fwhite text-center'>";
hpagewrap += "<a  data-rel='back' class='fwhite curpon mfloleft lnr lnr-arrow-left font200 mrg5'><\/a>";
hpagewrap += "<a href='#mypanel' class='fwhite curpon mfloright lnr lnr-menu font200 mrg5'><\/a><\/div>";
hpagewrap += "<div data-role='main' class='pad0'>";
hpagewrap += "<div class='img_wrapper'>";
hpagewrap += "<img src='"+imghotel+"'\/>";
hpagewrap += "<\/div>";
hpagewrap += "<div class='pad10 font80 fgrey'><h1 class='judul dinblock font120 fontn'>"+htitle+"<\/h1><p>"+hcontent+"</p><\/div>";
hpagewrap += "<br\/><br\/><br\/><\/div>";
hpagewrap += "<\/div>";

$('#datahotel').append(hotelwrap);
$('#hotel').after(hpagewrap);
 });
  });




