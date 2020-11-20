      var mins;
      var secs; 
      
      var Finish_M1=0; T1=0; TT1=0; RMT1_1=0; RR1=0; R1=0; C1="Unconfirm remainder";
      var Finish_M2=0; T2=0; TT2=0; RMT2_2=0; RR2=0; R2=0; C2="Unconfirm remainder";
      var Finish_M3=0; T3=0; TT3=0; RMT3_3=0; RR3=0; R3=0; C3="Unconfirm remainder";
      var Finish_M4=0; T4=0; TT4=0; RMT4_4=0; RR4=0; R4=0; C4="Unconfirm remainder";
      var Finish_M5=0; T5=0; TT5=0; RMT5_5=0; RR5=0; R5=0; C5="Unconfirm remainder";
      var Finish_M6=0; T6=0; TT6=0; RMT6_6=0; RR6=0; R6=0; C6="Unconfirm remainder";

      var sum1=0;sum2=0;sum3=0;sum4=0;sum5=0;sum6=0;
      var totalresult1=0;totalresult2=0;totalresult3=0;totalresult4=0;totalresult5=0;totalresult6=0;
      
      var t_meter1 = document.getElementById("totalmeter").value;
      var TM1=parseFloat(t_meter1); 
     
      var t_meter2 = document.getElementById("totalmeter").value;
      var TM2=parseFloat(t_meter2); 
      
      var t_meter3 = document.getElementById("totalmeter").value;
      var TM3=parseFloat(t_meter3); 
      
      var t_meter4 = document.getElementById("totalmeter").value;
      var TM4=parseFloat(t_meter4); 
      
      var t_meter5 = document.getElementById("totalmeter").value;
      var TM5=parseFloat(t_meter5); 
      
      var t_meter6 = document.getElementById("totalmeter").value;
      var TM6=parseFloat(t_meter6); 
      
      var opt1=document.getElementById("radio_opt_1").value;
      var opt2=document.getElementById("radio_opt_2").value;
      var opt3=document.getElementById("radio_opt_3").value;
      var opt4=document.getElementById("radio_opt_4").value;
      var opt5=document.getElementById("radio_opt_5").value;
      var opt6=document.getElementById("radio_opt_6").value;
      
      var opt_f1=parseFloat(opt1);  
      var opt_f2=parseFloat(opt2);
      var opt_f3=parseFloat(opt3);
      var opt_f4=parseFloat(opt4);
      var opt_f5=parseFloat(opt5);
      var opt_f6=parseFloat(opt6);

      
// Hidden the send mail button and email address textbox

      document.getElementById('sendMail').style.visibility = 'hidden';
      document.getElementById('email').style.visibility = 'hidden';


// Countdown timer function

function countdown() {
  mins = document.getElementById("timex").value;   
  secs = mins*60;  
  document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('USERID_1').style.color="BLACK";
    document.getElementById('USERID_2').style.color="BLACK";
    document.getElementById('USERID_3').style.color="BLACK";
    document.getElementById('USERID_4').style.color="BLACK";
    document.getElementById('USERID_5').style.color="BLACK";
    document.getElementById('USERID_6').style.color="BLACK";
    document.getElementById('totalmeter').style.color="BLACK";
    document.getElementById('timex').style.color="BLACK";
    document.getElementById('USERID_1').disabled = true;
    document.getElementById('USERID_2').disabled = true;
    document.getElementById('USERID_3').disabled = true;
    document.getElementById('USERID_4').disabled = true;
    document.getElementById('USERID_5').disabled = true;
    document.getElementById('USERID_6').disabled = true;
    document.getElementById('btn1_1').disabled = true;
    document.getElementById('btn1_2').disabled = true;
    document.getElementById('btn1_3').disabled = true;
    document.getElementById('btn1_4').disabled = true;
    document.getElementById('btn1_5').disabled = true;
    document.getElementById('btn1_6').disabled = true;
    document.getElementById('totalmeter').disabled = true;
    document.getElementById('timex').disabled = true;
  
  var btn1m = document.getElementById("USERID_1").value;
  document.getElementById("btn_1").innerHTML =  btn1m;
  var btn2m = document.getElementById("USERID_2").value;
  document.getElementById("btn_2").innerHTML =  btn2m;
  var btn3m = document.getElementById("USERID_3").value;
  document.getElementById("btn_3").innerHTML =  btn3m;
  var btn4m = document.getElementById("USERID_4").value;
  document.getElementById("btn_4").innerHTML =  btn4m;
  var btn5m = document.getElementById("USERID_5").value;
  document.getElementById("btn_5").innerHTML =  btn5m;
  var btn6m = document.getElementById("USERID_6").value;
  document.getElementById("btn_6").innerHTML =  btn6m;
    
    setTimeout('Decrement()',1000);
}

function getminutes() {
	mins = Math.floor(secs / 60);
  if (mins<0){
    //alert("Time is up.");
    document.getElementById('f4').style.visibility = 'hidden';
    document.getElementById('f5').style.visibility = 'hidden';

    document.getElementById('btn_1').style.visibility = 'hidden';
    document.getElementById('btnsub_1').style.visibility = 'hidden';
    document.getElementById('btn_2').style.visibility = 'hidden';
    document.getElementById('btnsub_2').style.visibility = 'hidden';
    document.getElementById('btn_3').style.visibility = 'hidden';
    document.getElementById('btnsub_3').style.visibility = 'hidden';
    document.getElementById('btn_4').style.visibility = 'hidden';
    document.getElementById('btnsub_4').style.visibility = 'hidden';
    document.getElementById('btn_5').style.visibility = 'hidden';
    document.getElementById('btnsub_5').style.visibility = 'hidden';
    document.getElementById('btn_6').style.visibility = 'hidden';
    document.getElementById('btnsub_6').style.visibility = 'hidden';
    
    document.getElementById('btn1_1').disabled = false;
    document.getElementById('btn1_2').disabled = false;
    document.getElementById('btn1_3').disabled = false;
    document.getElementById('btn1_4').disabled = false;
    document.getElementById('btn1_5').disabled = false;
    document.getElementById('btn1_6').disabled = false;
    
    document.getElementById('sendMail').style.visibility = 'visible';
    document.getElementById('email').style.visibility = 'visible';
    
    clearTimeout(tid);
  }
	return mins;
}

function getseconds() {
	return secs-Math.round(mins *60);
}

function Decrement() {
	if (document.getElementById) {
		minutes = document.getElementById("minutes");
		seconds = document.getElementById("seconds");

		if (seconds < 59) {
			seconds.value = secs;
		} else {
			minutes.value = getminutes();
			seconds.value = getseconds();
		}
		secs--;
		var tid=setTimeout('Decrement()',1000); 
	}
}

// Add round function

  function Cal_1() {
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      var my_gradient=ctx.createLinearGradient(0,0,50,0);
      //my_gradient.addColorStop(0,"GRAY");
      my_gradient.addColorStop(0.5,"GRAY");
      my_gradient.addColorStop(1,"WHITE");
      ctx.fillStyle=my_gradient;
      //ctx.fillStyle="C0C0C0";
      ctx.fillRect(sum1*10,50,8,8);
     
         var t_meter1 = document.getElementById("totalmeter").value;
         var TM1=parseFloat(t_meter1); 
         var output1 = document.getElementById("output_1").value;
         sum1+=1;
         document.getElementById("output_1").innerHTML =  sum1;  
         totalresult1 = (TM1*sum1);
         document.getElementById("List1_1").innerHTML = totalresult1;
         document.getElementById('USERID_1').style.color="BLACK";     
         var btn1m = document.getElementById("USERID_1").value;
         document.getElementById('totalmeter').style.color="BLACK";
         document.getElementById('timex').style.color="BLACK";
         document.getElementById('totalmeter').disabled = true;
         document.getElementById('timex').disabled = true;
         document.getElementById('USERID_1').disabled = true;
         document.getElementById("btn_1").innerHTML =  btn1m;
         //document.getElementById("audio_w").play();
       }
  
      function Cal_2() {
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      //var my_gradient=ctx.createLinearGradient(0,0,50,0);
      //my_gradient.addColorStop(0.5,"GRAY");
      //my_gradient.addColorStop(1,"WHITE");
      //ctx.fillStyle=my_gradient;
      ctx.fillStyle="C0C0C0";
      ctx.fillRect(sum2*10,60,8,8);
     
        
        var t_meter2 = document.getElementById("totalmeter").value;
         var TM2=parseFloat(t_meter2); 
         var output2 = document.getElementById("output_2").value;
         sum2+=1;
         document.getElementById("output_2").innerHTML =  sum2;  
         totalresult2 = (TM2*sum2);
         document.getElementById("List1_2").innerHTML = totalresult2;
         document.getElementById('USERID_2').style.color="BLACK";
         var btn2m = document.getElementById("USERID_2").value;
         document.getElementById('totalmeter').style.color="BLACK";
         document.getElementById('timex').style.color="BLACK";
         document.getElementById('USERID_2').disabled = true;
         document.getElementById('totalmeter').disabled = true;
         document.getElementById('timex').disabled = true;
         document.getElementById("btn_2").innerHTML =  btn2m;
         //document.getElementById("audio_w").play();
         
       }
      
      function Cal_3() {
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      var my_gradient=ctx.createLinearGradient(0,0,50,0);
      //my_gradient.addColorStop(0,"GRAY");
      my_gradient.addColorStop(0.5,"GRAY");
      my_gradient.addColorStop(1,"WHITE");
      ctx.fillStyle=my_gradient;
      //ctx.fillStyle="C0C0C0";
      ctx.fillRect(sum3*10,70,8,8);
     
        
        var t_meter3 = document.getElementById("totalmeter").value;
         var TM3=parseFloat(t_meter3); 
         var output3 = document.getElementById("output_3").value;
         sum3+=1;
         document.getElementById("output_3").innerHTML =  sum3;  
         totalresult3 = (TM3*sum3);
         document.getElementById("List1_3").innerHTML = totalresult3;
         document.getElementById('USERID_3').style.color="BLACK";
         var btn3m = document.getElementById("USERID_3").value;
         document.getElementById('totalmeter').style.color="BLACK";
         document.getElementById('timex').style.color="BLACK";
         document.getElementById('USERID_3').disabled = true;
         document.getElementById('totalmeter').disabled = true;
         document.getElementById('timex').disabled = true;
         document.getElementById("btn_3").innerHTML =  btn3m; 
        // document.getElementById("audio_w").play();
       }
      
      function Cal_4() {
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      //var my_gradient=ctx.createLinearGradient(0,0,50,0);
      //my_gradient.addColorStop(0.5,"GRAY");
      //my_gradient.addColorStop(1,"WHITE");
      //ctx.fillStyle=my_gradient;
      ctx.fillStyle="C0C0C0";
      ctx.fillRect(sum4*10,80,8,8);
      
        var t_meter4 = document.getElementById("totalmeter").value;
         var TM4=parseFloat(t_meter4); 
         var output4 = document.getElementById("output_4").value;
         sum4+=1;
         document.getElementById("output_4").innerHTML =  sum4;  
         totalresult4 = (TM4*sum4);
         document.getElementById("List1_4").innerHTML = totalresult4;
         document.getElementById('USERID_4').style.color="BLACK";
         var btn4m = document.getElementById("USERID_4").value;
         document.getElementById('totalmeter').style.color="BLACK";
         document.getElementById('timex').style.color="BLACK";
         document.getElementById('USERID_4').disabled = true;
         document.getElementById('totalmeter').disabled = true;
         document.getElementById('timex').disabled = true;
         document.getElementById("btn_4").innerHTML =  btn4m;
         //document.getElementById("audio_w").play();
       }
      
      function Cal_5() {
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      var my_gradient=ctx.createLinearGradient(0,0,50,0);
      //my_gradient.addColorStop(0,"GRAY");
      my_gradient.addColorStop(0.5,"GRAY");
      my_gradient.addColorStop(1,"WHITE");
      ctx.fillStyle=my_gradient;
      //ctx.fillStyle="C0C0C0";
      ctx.fillRect(sum5*10,90,8,8);
     
         var t_meter5 = document.getElementById("totalmeter").value;
         var TM5=parseFloat(t_meter5); 
         var output5 = document.getElementById("output_5").value;
         sum5+=1;
         document.getElementById("output_5").innerHTML =  sum5;  
         totalresult5 = (TM5*sum5);
         document.getElementById("List1_5").innerHTML = totalresult5;
         var btn5m = document.getElementById("USERID_5").value;
         document.getElementById('totalmeter').style.color="BLACK";
         document.getElementById('timex').style.color="BLACK";
         document.getElementById('USERID_5').style.color="BLACK";
         document.getElementById('USERID_5').disabled = true;
         document.getElementById('totalmeter').disabled = true;
         document.getElementById('timex').disabled = true;
         document.getElementById("btn_5").innerHTML =  btn5m;
         //document.getElementById("audio_w").play();
       }
      
      function Cal_6() {
        var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      //var my_gradient=ctx.createLinearGradient(0,0,50,0);
      //my_gradient.addColorStop(0.5,"GRAY");
      //my_gradient.addColorStop(1,"WHITE");
      //ctx.fillStyle=my_gradient;
      ctx.fillStyle="C0C0C0";
      ctx.fillRect(sum6*10,100,8,8);
      
        var t_meter6 = document.getElementById("totalmeter").value;
         var TM6=parseFloat(t_meter6); 
         var output6 = document.getElementById("output_6").value;
         sum6+=1;
         document.getElementById("output_6").innerHTML =  sum6;  
         totalresult6 = (TM6*sum6);
         document.getElementById("List1_6").innerHTML = totalresult6;
         document.getElementById('USERID_6').style.color="BLACK";
         var btn6m = document.getElementById("USERID_6").value;
         document.getElementById('totalmeter').style.color="BLACK";
         document.getElementById('timex').style.color="BLACK";
         document.getElementById('USERID_6').disabled = true;
         document.getElementById('totalmeter').disabled = true;
         document.getElementById('timex').disabled = true;
         document.getElementById("btn_6").innerHTML =  btn6m;
         //document.getElementById("audio_w").play();
       }
      

// Sub round function

      function Calsub_1() {
         var t_meter1 = document.getElementById("totalmeter").value;
         var TM1=parseFloat(t_meter1); 
         var output1 = document.getElementById("output_1").value;
         
         if (sum1>0){
           sum1-=1;
         }
        
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(sum1*10,50,10,10);
        
        
         document.getElementById("output_1").innerHTML =  sum1;  
         totalresult1 = (TM1*sum1);
         document.getElementById("List1_1").innerHTML = totalresult1;
         document.getElementById("audio_c").play();
       }
  
      function Calsub_2() {
         var t_meter2 = document.getElementById("totalmeter").value;
         var TM2=parseFloat(t_meter2); 
         var output2 = document.getElementById("output_2").value;
         
         if (sum2>0){
           sum2-=1;
         }
        
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(sum2*10,60,10,10);
        
        
         document.getElementById("output_2").innerHTML =  sum2;  
         totalresult2 = (TM2*sum2);
         document.getElementById("List1_2").innerHTML = totalresult2;
         //document.getElementById("audio_c").play();
       }
      
      function Calsub_3() {
         var t_meter3 = document.getElementById("totalmeter").value;
         var TM3=parseFloat(t_meter3); 
         var output3 = document.getElementById("output_3").value;
         
         if (sum3>0){
           sum3-=1;
         }
        
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(sum3*10,70,10,10);
        
        
         document.getElementById("output_3").innerHTML =  sum3;  
         totalresult3 = (TM3*sum3);
         document.getElementById("List1_3").innerHTML = totalresult3;
         //document.getElementById("audio_c").play();
       }
      
      function Calsub_4() {
         var t_meter4 = document.getElementById("totalmeter").value;
         var TM4=parseFloat(t_meter4); 
         var output4 = document.getElementById("output_4").value;
         
         if (sum4>0){
           sum4-=1;
         }
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(sum4*10,80,10,10);
        
        
         document.getElementById("output_4").innerHTML =  sum4;  
         totalresult4 = (TM4*sum4);
         document.getElementById("List1_4").innerHTML = totalresult4;
         //document.getElementById("audio_c").play();
       }
      
      function Calsub_5() {
         var t_meter5 = document.getElementById("totalmeter").value;
         var TM5=parseFloat(t_meter5); 
         var output5 = document.getElementById("output_5").value;
         
         if (sum5>0){
           sum5-=1;
         }
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(sum5*10,90,10,10);
        
        
         document.getElementById("output_5").innerHTML =  sum5;  
         totalresult5 = (TM5*sum5);
         document.getElementById("List1_5").innerHTML = totalresult5;
         //document.getElementById("audio_c").play();
       }
      
      function Calsub_6() {
         var t_meter6 = document.getElementById("totalmeter").value;
         var TM6=parseFloat(t_meter6); 
         var output6 = document.getElementById("output_6").value;
         
         if (sum6>0){
           sum6-=1;
         }
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(sum6*10,100,10,10);
        
        
         document.getElementById("output_6").innerHTML =  sum6;  
         totalresult6 = (TM6*sum6);
         document.getElementById("List1_6").innerHTML = totalresult6;
         //document.getElementById("audio_c").play();
       }
      
// Confirm remainder function 

   function Cal1_1(){
    var radios_HA = document.getElementsByName('remainder_1');
       for (var i = 0, length = radios_HA.length; i < length; i++) {
       if (radios_HA[i].checked) {
         HA_x=radios_HA[i].value;
       var HA = parseFloat(HA_x);
        break;
        }
       }      
     var RM1=document.getElementById("RM_1").value;
     var RMT1=parseFloat(RM1); 
     var t_meter1 = document.getElementById("totalmeter").value;
     var TM1=parseFloat(t_meter1);  
     var total1= (TM1*HA)+totalresult1+RMT1;
     document.getElementById("List1_1").innerHTML = total1; 
     RR1=HA;
     Finish_M1=TM1*HA;
     T1=totalresult1;
     TT1=Finish_M1+RMT1;
     RMT1_1=RMT1;
     R1=total1;
     C1="Confirmed";
     document.getElementById('USERID_1').style.color="BLACK";
     document.getElementById('USERID_1').disabled = true;
     document.getElementById("List1_1").style.color = "YELLOW";
     document.getElementById("totaltxt_1").style.color = "YELLOW";
     document.getElementById('btn_1').style.visibility = 'hidden';
     document.getElementById('btnsub_1').style.visibility = 'hidden';
     document.getElementById('btn1_1').style.visibility = 'hidden';
     document.getElementById("RM_1").style.color = "BLACK";
     document.getElementById('RM_1').disabled = true;
     document.getElementById('sendMail').style.visibility = 'visible';
     document.getElementById('email').style.visibility = 'visible';
     document.getElementById('totalmeter').style.color="BLACK";
     document.getElementById('timex').style.color="BLACK";
     document.getElementById('totalmeter').disabled = true;
     document.getElementById('timex').disabled = true;
  }    
  
   function Cal1_2(){
    var radios_HA = document.getElementsByName('remainder_2');
       for (var i = 0, length = radios_HA.length; i < length; i++) {
       if (radios_HA[i].checked) {
         HA_x=radios_HA[i].value;
         var HA = parseFloat(HA_x);
          break;
        }
       }      
     
       var RM2=document.getElementById("RM_2").value;
       var RMT2=parseFloat(RM2); 
       var t_meter2 = document.getElementById("totalmeter").value;
       var TM2=parseFloat(t_meter2); 
       var total2= (TM2*HA)+totalresult2+RMT2;
       document.getElementById("List1_2").innerHTML = total2; 
       RR2=HA;
       Finish_M2=TM2*HA;
       T2=totalresult2;
       TT2=Finish_M2+RMT2;
       RMT2_2=RMT2;
       R2=total2;  
       C2="Confirmed";
       document.getElementById('USERID_2').style.color="BLACK";
       document.getElementById('USERID_2').disabled = true;
       document.getElementById("List1_2").style.color = "YELLOW";
       document.getElementById("totaltxt_2").style.color = "YELLOW";
       document.getElementById('btn_2').style.visibility = 'hidden';
       document.getElementById('btnsub_2').style.visibility = 'hidden';
       document.getElementById('btn1_2').style.visibility = 'hidden';
       document.getElementById("RM_2").style.color = "BLACK";
       document.getElementById('RM_2').disabled = true;
       document.getElementById('sendMail').style.visibility = 'visible';
       document.getElementById('email').style.visibility = 'visible';
       document.getElementById('totalmeter').style.color="BLACK";
       document.getElementById('timex').style.color="BLACK";
       document.getElementById('totalmeter').disabled = true;
       document.getElementById('timex').disabled = true;
  } 
    function Cal1_3(){  
    var radios_HA = document.getElementsByName('remainder_3');
       for (var i = 0, length = radios_HA.length; i < length; i++) {
       if (radios_HA[i].checked) {
         HA_x=radios_HA[i].value;
       var HA = parseFloat(HA_x);
        break;
        }
       }      
    
     var RM3=document.getElementById("RM_3").value;
     var RMT3=parseFloat(RM3); 
     var t_meter3 = document.getElementById("totalmeter").value;
     var TM3=parseFloat(t_meter3);  
     var total3= (TM3*HA)+totalresult3+RMT3;
     document.getElementById("List1_3").innerHTML = total3; 
     RR3=HA;
     Finish_M3=TM3*HA;
     T3=totalresult3;
     TT3=Finish_M3+RMT3;
     RMT3_3=RMT3;
     R3=total3;
     C3="Confirmed";
     document.getElementById('USERID_3').style.color="BLACK";
     document.getElementById('USERID_3').disabled = true;
     document.getElementById("List1_3").style.color = "YELLOW";
     document.getElementById("totaltxt_3").style.color = "YELLOW";
     document.getElementById('btn_3').style.visibility = 'hidden';
     document.getElementById('btnsub_3').style.visibility = 'hidden';
     document.getElementById('btn1_3').style.visibility = 'hidden';
     document.getElementById("RM_3").style.color = "BLACK";
     document.getElementById('RM_3').disabled = true;
     document.getElementById('sendMail').style.visibility = 'visible';
     document.getElementById('email').style.visibility = 'visible';
     document.getElementById('totalmeter').style.color="BLACK";
     document.getElementById('timex').style.color="BLACK";
     document.getElementById('totalmeter').disabled = true;
     document.getElementById('timex').disabled = true;
  }
 
    function Cal1_4(){
    var radios_HA = document.getElementsByName('remainder_4');
       for (var i = 0, length = radios_HA.length; i < length; i++) {
       if (radios_HA[i].checked) {
         HA_x=radios_HA[i].value;
       var HA = parseFloat(HA_x);
        break;
        }
       }      
     var RM4=document.getElementById("RM_4").value;
     var RMT4=parseFloat(RM4); 
     var t_meter4 = document.getElementById("totalmeter").value;
     var TM4=parseFloat(t_meter4); 
     var total4= (TM4*HA)+totalresult4+RMT4;
     document.getElementById("List1_4").innerHTML = total4; 
     RR4=HA;
     Finish_M4=TM4*HA;
     T4=totalresult4;
     TT4=Finish_M4+RMT4;
     RMT4_4=RMT4;
     R4=total4;
     C4="Confirmed";
     document.getElementById('USERID_4').style.color="BLACK";
     document.getElementById('USERID_4').disabled = true;
     document.getElementById("List1_4").style.color = "YELLOW";
     document.getElementById("totaltxt_4").style.color = "YELLOW";
     document.getElementById('btn_4').style.visibility = 'hidden';
     document.getElementById('btnsub_4').style.visibility = 'hidden';
     document.getElementById('btn1_4').style.visibility = 'hidden';
     document.getElementById("RM_4").style.color = "BLACK";
     document.getElementById('RM_4').disabled = true;
     document.getElementById('sendMail').style.visibility = 'visible';
     document.getElementById('email').style.visibility = 'visible';
     document.getElementById('totalmeter').style.color="BLACK";
     document.getElementById('timex').style.color="BLACK";
     document.getElementById('totalmeter').disabled = true;
     document.getElementById('timex').disabled = true;
  }
      
    function Cal1_5(){
    var radios_HA = document.getElementsByName('remainder_5');
       for (var i = 0, length = radios_HA.length; i < length; i++) {
       if (radios_HA[i].checked) {
         HA_x=radios_HA[i].value;
       var HA = parseFloat(HA_x);
        break;
        }
       }      
    
     var RM5=document.getElementById("RM_5").value;
     var RMT5=parseFloat(RM5); 
     var t_meter5 = document.getElementById("totalmeter").value;
     var TM5=parseFloat(t_meter5); 
     var total5= (TM5*HA)+totalresult5+RMT5;
     document.getElementById("List1_5").innerHTML = total5; 
     RR5=HA;
     Finish_M5=TM5*HA;
     T5=totalresult5;
     TT5=Finish_M5+RMT5;
     RMT5_5=RMT5;
     R5=total5;
     C5="Confirmed";
     document.getElementById('USERID_5').style.color="BLACK";
     document.getElementById('USERID_5').disabled = true;
     document.getElementById("List1_5").style.color = "YELLOW";
     document.getElementById("totaltxt_5").style.color = "YELLOW";
     document.getElementById('btn_5').style.visibility = 'hidden';
     document.getElementById('btnsub_5').style.visibility = 'hidden';
     document.getElementById('btn1_5').style.visibility = 'hidden';
     document.getElementById("RM_5").style.color = "BLACK";
     document.getElementById('RM_5').disabled = true;
     document.getElementById('sendMail').style.visibility = 'visible';
     document.getElementById('email').style.visibility = 'visible';
     document.getElementById('totalmeter').style.color="BLACK";
     document.getElementById('timex').style.color="BLACK";
     document.getElementById('totalmeter').disabled = true;
     document.getElementById('timex').disabled = true;
  }
      
    function Cal1_6(){
    var radios_HA = document.getElementsByName('remainder_6');
       for (var i = 0, length = radios_HA.length; i < length; i++) {
       if (radios_HA[i].checked) {
         HA_x=radios_HA[i].value;
       var HA = parseFloat(HA_x);
        break;
        }
       }      
     var RM6=document.getElementById("RM_6").value;
     var RMT6=parseFloat(RM6); 
     var t_meter6 = document.getElementById("totalmeter").value;
     var TM6=parseFloat(t_meter6); 
     var total6= (TM6*HA)+totalresult6+RMT6;
     document.getElementById("List1_6").innerHTML = total6; 
     RR6=HA;
     Finish_M6=TM6*HA;
     T6=totalresult6;
     TT6=Finish_M6+RMT6;
     RMT6_6=RMT6;
     R6=total6;
     C6="Confirmed";
     document.getElementById('USERID_6').style.color="BLACK";
     document.getElementById('USERID_6').disabled = true;
     document.getElementById("List1_6").style.color = "YELLOW";
     document.getElementById("totaltxt_6").style.color = "YELLOW";
     document.getElementById('btn_6').style.visibility = 'hidden';
     document.getElementById('btnsub_6').style.visibility = 'hidden';
     document.getElementById('btn1_6').style.visibility = 'hidden';
     document.getElementById("RM_6").style.color = "BLACK";
     document.getElementById('RM_6').disabled = true;
     document.getElementById('sendMail').style.visibility = 'visible';
     document.getElementById('email').style.visibility = 'visible';
     document.getElementById('totalmeter').style.color="BLACK";
     document.getElementById('timex').style.color="BLACK";
     document.getElementById('totalmeter').disabled = true;
     document.getElementById('timex').disabled = true;
  }

// Reset button function

 function reset(){
    location.reload();
    }  
 
// Send mail button and get the email address function

function sendMail() {
  var U1 = document.getElementById('USERID_1').value;
  var U2 = document.getElementById('USERID_2').value;
  var U3 = document.getElementById('USERID_3').value;
  var U4 = document.getElementById('USERID_4').value;
  var U5 = document.getElementById('USERID_5').value;
  var U6 = document.getElementById('USERID_6').value;
  var mins1=document.getElementById('timex').value;
  
  var E = document.getElementById('email').value;
  
   if (C1=="Unconfirm remainder"){
      R1= totalresult1;
      T1= totalresult1;
    }
    
   if (C2=="Unconfirm remainder"){
      R2= totalresult2;
      T2= totalresult2;
    }
   
  if (C3=="Unconfirm remainder"){
      R3= totalresult3;
      T3= totalresult3;
    }
  
   if (C4=="Unconfirm remainder"){
      R4= totalresult4;
      T4= totalresult4;
    }
   if (C5=="Unconfirm remainder"){
      R5= totalresult5;
      T5= totalresult5;
    }
   if (C6=="Unconfirm remainder"){
      R6= totalresult6;
      T6= totalresult6;
    }
  
    var link = 'mailto:' + E + '?subject=Message from Meter Count'
    
    +'&body=' + 'The total length of the runway '+TM1+' m'+'%0D'
    +'Time is '+ mins1 +' mins' + '%0D'+'%0D'
    
    +'Number : '+ U1 +'%0D'
    +'Finished : '+ sum1+' R ' + ' ('+ T1 +' m)'+'%0D'
    +'Remainder : '+Finish_M1 +' plus '+ RMT1_1+ ' ('+ TT1 +' m)'+'%0D'
    +'Total : '+ R1 +' m '+ ' ('+ C1 +')'+'%0D'+'%0D'
    
    +'Number : '+ U2 +'%0D'
    +'Finished : '+ sum2+' R ' + ' ('+ T2 +' m)'+'%0D'
    +'Remainder : '+Finish_M2 +' plus '+ RMT2_2+ ' ('+ TT2 +' m)'+'%0D'
    +'Total : '+ R2 +' m '+ ' ('+ C2 +')'+'%0D'+'%0D'
    
    +'Number : '+ U3 +'%0D'
    +'Finished : '+ sum3+' R ' + ' ('+ T3 +' m)'+'%0D'
    +'Remainder : '+Finish_M3 +' plus '+ RMT3_3+ ' ('+ TT3 +' m)'+'%0D'
    +'Total : '+ R3 +' m '+ ' ('+ C3 +')'+'%0D'+'%0D'
    
    +'Number : '+ U4 +'%0D'
    +'Finished : '+ sum4+' R ' + ' ('+ T4 +' m)'+'%0D'
    +'Remainder : '+Finish_M4 +' plus '+ RMT4_4+ ' ('+ TT4 +' m)'+'%0D'
    +'Total : '+ R4 +' m '+ ' ('+ C4 +')'+'%0D'+'%0D'
    
    +'Number : '+ U5 +'%0D'
    +'Finished : '+ sum5+' R ' + ' ('+ T5 +' m)'+'%0D'
    +'Remainder : '+Finish_M5 +' plus '+ RMT5_5+ ' ('+ TT5 +' m)'+'%0D'
    +'Total : '+ R5 +' m '+ ' ('+ C5 +')'+'%0D'+'%0D'
    
    +'Number : '+ U6 +'%0D'
    +'Finished : '+ sum6+' R ' + ' ('+ T6 +' m)'+'%0D'
    +'Remainder : '+Finish_M6 +' plus '+ RMT6_6+ ' ('+ TT6 +' m)'+'%0D'
    +'Total : '+ R6 +' m '+ ' ('+ C6 +')'+'%0D'+'%0D';
  
   window.location.href = link;
}