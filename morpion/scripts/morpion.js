
/*  JS Morpion */


var positions = new Array();     

var etat_xo  = "O";
var resultat = "";


    document.addEventListener("DOMContentLoaded",function()
	{
		installEventHandlers("td","click", positionner);
	});


	    function positionner(){

	 	   this.removeEventListener("click", positionner);

		   	var elem = $(this);
		    if (etat_xo == "X")
		    {
		    	elem.append(etat_xo);
		    	etat_xo = "O"
		    }
		    else 
		    {
		      elem.append("O");  
		      etat_xo = "X"; 	
		    }

		    getTable();

		    resultat=verifEtat();

		    if ( resultat != "" ) {
		    	alert(resultat + "  a gagné ");
		    }


		 }


	    function getTable(){

	    		for (var i = 0; i < 9; i++) {
	    			positions[i]=$("#td"+i).html();
	    		};
	    	
	    }

	    function verifEtat(){

    			var etat="";
	    		
	    		etat=verifGain(0,1,2);
	    		if (etat=="") 
	    			etat=verifGain(3,4,5);
	    		if (etat=="") 
	    			etat=verifGain(6,7,8);
	    		if (etat=="") 
	    			etat=verifGain(0,3,6);
	    		if (etat=="") 
	    			etat=verifGain(1,4,7);
	    		if (etat=="") 
	    			etat=verifGain(2,5,8);
	    		if (etat=="") 
	    			etat=verifGain(0,4,8);
	    		if (etat=="") 
	    			etat=verifGain(2,4,6);
	    		return etat;


	    }

	    function verifGain(x,y,z){
	    	if( positions[x] == positions[y] && positions[y] == positions[z] && positions[x] != "")
	    		{
	    			return positions[0];
	    		}
	    	return "";
	    }