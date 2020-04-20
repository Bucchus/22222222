if(document.getElementById('msg')){
    var msg = document.getElementById('msg');
    if(msg.parentNode){
        msg.parentNode.removeChild(msg);
    }
}
document.writeln("<style type=\"text\/css\">");
document.writeln("");
document.writeln(".window {");
document.writeln("	width:80%;");
document.writeln("	position:fixed;");
document.writeln("	display:none;");
document.writeln("	bottom:45%;");
document.writeln("	left:10%;");
document.writeln("	 z-index:9999;");
document.writeln("	padding:2px;");
document.writeln("	border-radius:0.6em;");
document.writeln("	-webkit-border-radius:0.6em;");
document.writeln("	-moz-border-radius:0.6em;");
document.writeln("	background-color: #ccc;");
document.writeln("	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);");
document.writeln("	-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);");
document.writeln("	-o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);");
document.writeln("	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);");
document.writeln("	font:14px\/1.5 Microsoft YaHei,Helvitica,Verdana,Arial,san-serif;");
document.writeln("}");
document.writeln(".window .title {");
document.writeln("	");
document.writeln("	background-color: #A3A2A1;");
document.writeln("	line-height: 26px;");
document.writeln("    padding: 5px 5px 5px 10px;");
document.writeln("	color:#ffffff;");
document.writeln("	font-size:16px;");
document.writeln("	border-radius:0.5em 0.5em 0 0;");
document.writeln("	-webkit-border-radius:0.5em 0.5em 0 0;");
document.writeln("	-moz-border-radius:0.5em 0.5em 0 0;");
document.writeln("	background-image: -webkit-gradient(linear, left top, left bottom, from( #585858 ), to( #565656 )); \/* Saf4+, Chrome *\/");
document.writeln("	background-image: -webkit-linear-gradient(#585858, #565656); \/* Chrome 10+, Saf5.1+ *\/");
document.writeln("	background-image:    -moz-linear-gradient(#585858, #565656); \/* FF3.6 *\/");
document.writeln("	background-image:     -ms-linear-gradient(#585858, #565656); \/* IE10 *\/");
document.writeln("	background-image:      -o-linear-gradient(#585858, #565656); \/* Opera 11.10+ *\/");
document.writeln("	background-image:         linear-gradient(#585858, #565656);");
document.writeln("	");
document.writeln("}");
document.writeln(".window .content {");
document.writeln("	\/*min-height:100px;*\/");
document.writeln("	overflow:auto;");
document.writeln("	padding:10px;");
document.writeln("	background: #3f3f3f;");
document.writeln("    color: #FFFFFF;");
//document.writeln("    text-shadow: 0 1px 0 #AAAAAA;");
document.writeln("	border-radius: 0.4em 0.4em 0.4em 0.4em;");
document.writeln("	-webkit-border-radius: 0.4em 0.4em 0.4em 0.4em;");
document.writeln("	-moz-border-radius: 0.4em 0.4em 0.4em 0.4em;");
document.writeln("}");
document.writeln(".window #txt {");
document.writeln("	min-height:30px;text-align:center;font-size:16px;");
document.writeln("}");
document.writeln(".window .txtbtn {");
document.writeln("	");
document.writeln("	background: #f1f1f1;");
document.writeln("	background-image: -webkit-gradient(linear, left top, left bottom, from( #DCDCDC ), to( #f1f1f1 )); \/* Saf4+, Chrome *\/");
document.writeln("	background-image: -webkit-linear-gradient( #ffffff , #DCDCDC ); \/* Chrome 10+, Saf5.1+ *\/");
document.writeln("	background-image:    -moz-linear-gradient( #ffffff , #DCDCDC ); \/* FF3.6 *\/");
document.writeln("	background-image:     -ms-linear-gradient( #ffffff , #DCDCDC ); \/* IE10 *\/");
document.writeln("	background-image:      -o-linear-gradient( #ffffff , #DCDCDC ); \/* Opera 11.10+ *\/");
document.writeln("	background-image:         linear-gradient( #ffffff , #DCDCDC );");
document.writeln("	border: 1px solid #CCCCCC;");
document.writeln("	border-bottom: 1px solid #B4B4B4;");
document.writeln("	color: #555555;");
document.writeln("	font-weight: bold;");
document.writeln("	text-shadow: 0 1px 0 #FFFFFF;");
document.writeln("	border-radius: 0.6em 0.6em 0.6em 0.6em;");
document.writeln("	display: block;");
document.writeln("	width: 100%;");
document.writeln("	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);");
document.writeln("	text-overflow: ellipsis;");
document.writeln("	white-space: nowrap;");
document.writeln("	cursor: pointer;");
document.writeln("	text-align: msg;");
document.writeln("	font-weight: bold;");
document.writeln("	font-size: 18px;");
document.writeln("	padding:6px;");
document.writeln("	margin:10px 0 0 0;");
document.writeln("}");
document.writeln(".window .txtbtn:visited {");
document.writeln("	background-image: -webkit-gradient(linear, left top, left bottom, from( #ffffff ), to( #cccccc )); \/* Saf4+, Chrome *\/");
document.writeln("	background-image: -webkit-linear-gradient( #ffffff , #cccccc ); \/* Chrome 10+, Saf5.1+ *\/");
document.writeln("	background-image:    -moz-linear-gradient( #ffffff , #cccccc ); \/* FF3.6 *\/");
document.writeln("	background-image:     -ms-linear-gradient( #ffffff , #cccccc ); \/* IE10 *\/");
document.writeln("	background-image:      -o-linear-gradient( #ffffff , #cccccc ); \/* Opera 11.10+ *\/");
document.writeln("	background-image:         linear-gradient( #ffffff , #cccccc );");
document.writeln("}");
document.writeln(".window .txtbtn:hover {");
document.writeln("	background-image: -webkit-gradient(linear, left top, left bottom, from( #ffffff ), to( #cccccc )); \/* Saf4+, Chrome *\/");
document.writeln("	background-image: -webkit-linear-gradient( #ffffff , #cccccc ); \/* Chrome 10+, Saf5.1+ *\/");
document.writeln("	background-image:    -moz-linear-gradient( #ffffff , #cccccc ); \/* FF3.6 *\/");
document.writeln("	background-image:     -ms-linear-gradient( #ffffff , #cccccc ); \/* IE10 *\/");
document.writeln("	background-image:      -o-linear-gradient( #ffffff , #cccccc ); \/* Opera 11.10+ *\/");
document.writeln("	background-image:         linear-gradient( #ffffff , #cccccc );");
document.writeln("}");
document.writeln(".window .txtbtn:active {");
document.writeln("	background-image: -webkit-gradient(linear, left top, left bottom, from( #cccccc ), to( #ffffff )); \/* Saf4+, Chrome *\/");
document.writeln("	background-image: -webkit-linear-gradient( #cccccc , #ffffff ); \/* Chrome 10+, Saf5.1+ *\/");
document.writeln("	background-image:    -moz-linear-gradient( #cccccc , #ffffff ); \/* FF3.6 *\/");
document.writeln("	background-image:     -ms-linear-gradient( #cccccc , #ffffff ); \/* IE10 *\/");
document.writeln("	background-image:      -o-linear-gradient( #cccccc , #ffffff ); \/* Opera 11.10+ *\/");
document.writeln("	background-image:         linear-gradient( #cccccc , #ffffff );");
document.writeln("	border: 1px solid #C9C9C9;");
document.writeln("	border-top: 1px solid #B4B4B4;");
document.writeln("	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) inset;");
document.writeln("}");
document.writeln("");
document.writeln(".window .title .close {");
document.writeln("	float:right;");
document.writeln("	width:26px;");
document.writeln("	height:26px;");
document.writeln("	display:block;	");
document.writeln("}");
document.writeln("<\/style>");
document.writeln("<div class=\"window\" id=\"msg\">");
document.writeln(" <div class=\"content\">");
document.writeln("    <div id=\"txt\"><\/div>");
document.writeln(" <\/div>");
document.writeln(" <div id=\"SeedMsgTxt\"><\/div>");
document.writeln("<\/div>");


function setOpacity(obj, value) {
   // if ($.browser.msie) {
    //    if (value == 100) {
    //        obj.style.filter = "";
    //    } else {
    //        obj.style.filter = "alpha(opacity="+value+")";
   //     }
  //  } else if($.browser.msie) {
  //      obj.style.MozOpacity = value/100;
   // } else{
        obj.style.opacity = value/100;
   // }
}

function changeOpacity(obj, startValue, endValue, step, speed) {
    if (step>0 && startValue<endValue || step<0 && startValue>endValue) {
        setOpacity(obj,endValue);
        return;
    }
    setOpacity(obj,startValue);
    setTimeout(function () {
        changeOpacity(obj,startValue-step,endValue,step,speed);
    },speed);
}

var seedTimeWait,settimeIntervalId = 0;
function seed_settime(u){
    seedTimeWait = seedTimeWait-1;
    if(seedTimeWait<=0){
        clearInterval(settimeIntervalId);
        window.location.href = u;
    }
}

function closeMsg(a){
    var step = 30, speed = 60;
    var msg = document.getElementById(a);
    changeOpacity(msg,100,0,step,speed);
    window.setTimeout(function(){document.getElementById(a).style.display = 'none';document.getElementById('txt').innerHTML = '';},(100/step)*speed);
}

function opacityshowMsg(a){
    document.getElementById(a).style.display = 'block';
    var step = -30, speed = 60;
    var msg = document.getElementById(a);
    changeOpacity(msg,0,100,step,speed);
}


function showMsg(a,o,t,u){
    document.getElementById('txt').innerHTML = a;
    opacityshowMsg(o);
    var step =10, speed = 60;
    if(typeof t === 'undefined')t = 2000;
    setTimeout("closeMsg('"+o+"')",t);
    if((typeof(u) !== 'undefined')){
        seedTimeWait=t/1000;
        settimeIntervalId =setInterval('seed_settime("'+u+'")', 1000);
    }
}


function handleMsg(d,o){

}

function waitMsg(a,o){
    document.getElementById('txt').innerHTML = a;
    opacityshowMsg(o);
}

//tips.js

if(document.getElementById('tips_bg')){
    var msg = document.getElementById('tips_bg');
    if(msg.parentNode){
        msg.parentNode.removeChild(msg);
    }
}
document.writeln("<style type=\"text\/css\">");
document.writeln(".tips_bg,.tips_bg *{padding:0;margin:0;word-wrap:break-word;}");
document.writeln(".tips_bg{display:none;z-index:999;width:100%;height:100%;position:fixed;top:0;left:0;text-align:center; font-family:\"Microsoft YaHei\";background:rgba(10,10,10,0.1);}");
document.writeln(".tips_bg .pop_tips1,.tips_bg .pop_tips2{width:auto;background:rgba(50,50,50,0.6);padding:15px;color:#fff;display:inline-block;border-radius:8px;margin-top:20%;}");
document.writeln(".tips_bg .pop_tips1 img,.tips_bg .pop_tips2 img{width:20px;height:20px;vertical-align:middle;padding-right:5px;}");
document.writeln(".tips_bg .pop_tips2{padding:0 10px;}");
document.writeln(".tips_bg .pop_tips2 p{padding:10px 0;font:16px/30px \"Microsoft YaHei\";}");
document.writeln(".tips_bg .pop_tips2 p a{height:35px;padding:0 20px;background:#3c3c3c;color:#fff; display:inline-block;border-radius:8px; box-shadow:0 1px 2px #666 inset;margin:0 8px;border:1px solid #181818;white-space:nowrap;}");
document.writeln("<\/style>");
document.writeln("<div id=\"tips_bg\" class=\"tips_bg\">");
document.writeln("<\/div>");
var yes_img = '<img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MDQzOTBCQkE0NzExRTNBREQ0Qjc3RDEyQjYyQzBFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0MDQzOTBDQkE0NzExRTNBREQ0Qjc3RDEyQjYyQzBFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzQwNDM5MDlCQTQ3MTFFM0FERDRCNzdEMTJCNjJDMEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzQwNDM5MEFCQTQ3MTFFM0FERDRCNzdEMTJCNjJDMEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DE7tcAAAGGElEQVR42ryZ20uUaRzH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"/>';
var no_img = '<img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEMjI0RjNEQkE0NzExRTM4QzNBREMwNDNGNTgxMTM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEMjI0RjNFQkE0NzExRTM4QzNBREMwNDNGNTgxMTM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkQyMjRGM0JCQTQ3MTFFMzhDM0FEQzA0M0Y1ODExMzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkQyMjRGM0NCQTQ3MTFFMzhDM0FEQzA0M0Y1ODExMzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5b+AkWAAAGRklEQVR42ryZTUxTSxTH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"/>';

function showMessageBtn(m,btn_n,o,b1txt,b2txt){
    btn_n = btn_n == 1 ? 1 : 2;
    if(!o)o = 'tips_bg';
    if(typeof b1txt == 'undefined')b1txt = yes_img+'确定';
    if(typeof b2txt == 'undefined')b2txt = no_img+'取消';
    document.getElementById(o).innerHTML = "<div class=\"pop_tips2\"><p>"+m+"<\/p><p>" +
    "<a id=\"yes_btn\">"+b1txt+"</a>"+(btn_n == 2 ? "<a id=\"no_btn\">"+b2txt+"</a>" : "")+
    "<\/p><\/div>";
    document.getElementById(o).style.display = 'block';
    document.getElementById(o).style.opacity = '1';
}
function showMessage(m,o,t,u){
   switch(typeof o){
       case 'number':
           u = t;t = o;o = 'tips_bg';
           break;
       case 'undefined':
           o = 'tips_bg';
           break;
       default:break;
   }
   document.getElementById(o).innerHTML = "<div class=\"pop_tips1\"><p>"+m+"<\/p><\/div>";
   opacityshowMessage(o);
   var step =10, speed = 60;
   if(typeof t === 'undefined')t = 2000;
   if((typeof(u) !== 'undefined')){
        seedTimeWait=t/1000;
        settimeIntervalId =setInterval('seed_settime("'+u+'")', 1000);
   }else{
        setTimeout("closeMessage('"+o+"')",t);
   }
}
function opacityshowMessage(o){
    document.getElementById(o).style.display = 'block';
    var step = -30, speed = 60;
    var msg = document.getElementById(o);
    changeOpacity(msg,0,100,step,speed);
}
function closeMessage(o){
    var step = 30, speed = 60;
    var msg = document.getElementById(o);
    changeOpacity(msg,100,0,step,speed);
    window.setTimeout(function(){document.getElementById(o).style.display = 'none';document.getElementById(o).innerHTML = '';},(100/step)*speed);
}
function closeMessageBtn(o){
    if(!o)o = 'tips_bg';
    document.getElementById(o).style.display = 'none';
    document.getElementById(o).style.opacity = '0';
}
function changeOpacity(obj, startValue, endValue, step, speed) {
    if (step>0 && startValue<endValue || step<0 && startValue>endValue) {
        setOpacity(obj,endValue);
        return;
    }
    setOpacity(obj,startValue);
    setTimeout(function () {
        changeOpacity(obj,startValue-step,endValue,step,speed);
    },speed);
}
function setOpacity(obj, value) {
    obj.style.opacity = value/100;
}
var seedTimeWait,settimeIntervalId = 0;
function seed_settime(u){
    seedTimeWait = seedTimeWait-1;
    if(seedTimeWait<=0){
        clearInterval(settimeIntervalId);
        window.location.href = u;
    }
}

function waitMessage(m,o,t,u){
   switch(typeof o){
       case 'number':
           u = t;t = o;o = 'tips_bg';
           break;
       case 'undefined':
           o = 'tips_bg';
           break;
       default:break;
   }
   document.getElementById(o).innerHTML = "<div class=\"pop_tips1\"><p>"+m+"<\/p><\/div>";
   opacityshowMessage(o);
}


