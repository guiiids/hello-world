 function showUI1(){
            document.getElementById("ui1").style.display="block";
            document.getElementById("ui2").style.display="none";
            document.getElementById("ui3").style.display="none";
	  document.getElementById("ui4").style.display="none";
            document.getElementById("ui5").style.display="none";
             document.getElementById("ui6").style.display="none";
        }
        function showUI2(){
            document.getElementById("ui1").style.display="none";
            document.getElementById("ui2").style.display="block";
            document.getElementById("ui3").style.display="none";
            document.getElementById("ui4").style.display="none";
            document.getElementById("ui5").style.display="none";
             document.getElementById("ui6").style.display="none";
        }
        function showUI3(){
            document.getElementById("ui1").style.display="none";
            document.getElementById("ui2").style.display="none";
            document.getElementById("ui3").style.display="block";
            document.getElementById("ui4").style.display="none";
            document.getElementById("ui5").style.display="none";
             document.getElementById("ui6").style.display="none";
        }
        function showUI4(){
            document.getElementById("ui1").style.display="none";
            document.getElementById("ui2").style.display="none";
            document.getElementById("ui3").style.display="none";
            document.getElementById("ui4").style.display="block";
            document.getElementById("ui5").style.display="none";
             document.getElementById("ui6").style.display="none";
        }
        function showUI5(){
            document.getElementById("ui1").style.display="none";
            document.getElementById("ui2").style.display="none";
            document.getElementById("ui3").style.display="none";
            document.getElementById("ui4").style.display="none";
            document.getElementById("ui5").style.display="block";
             document.getElementById("ui6").style.display="none";
        }
        function showUI6(){
            document.getElementById("ui1").style.display="none";
            document.getElementById("ui2").style.display="none";
            document.getElementById("ui3").style.display="none";
            document.getElementById("ui4").style.display="none";
            document.getElementById("ui5").style.display="none";
             document.getElementById("ui6").style.display="block";
        }
		function showForm2(){
	document.getElementById("mySelect2").style.display="none";
            document.getElementById("EXT").style.display="block";
			
      var demovalue = $(this).val();
      $(".EXTCoreF").hide();
      $("#EXT" + demovalue).show();
			
			   $(".EXTCoreF").on("change", function() {
      var demovalue2 = $(this).val();
      var x = $("#mySelect").val();
      var demovalue2 = $(this).val();
       window.open(x + demovalue2, '_blank');
		
      
    });
    }
             

 

		function showForm3(){
			
			document.getElementById("mySelect2").style.display="none";
            document.getElementById(".EXTCoreF").style.display="block";
           
}

