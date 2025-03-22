function cal() {
    let li= document.getElementById("li").value;
    let qt= document.getElementById("qty").value;
    if (li==550) {
        document.getElementById("error").innerHTML="";
        let     li=435000;
        document.getElementById("nprice").innerHTML="Normal Price :  " + li.toLocaleString() + "  Kyat"; 
        
        if (qt<=4){
            lid=li*0.15;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;           
        }else if (qt<=10) {
            lid=li*0.17;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=24) {
            lid=li*0.20;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=25) {
            lid=li*0.25;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=50) {
            lid=li*0.30;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=75) {
            lid=li*0.32;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=100) {
            lid=li*0.35;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=150) {
            lid=li*0.37;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<200) {
            lid=li*0.39;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }
        
        else{
            document.getElementById('dprice').innerHTML="";  
        }
    } else if (li==1000) {
        document.getElementById("error").innerHTML="";
        let li=670000;
        document.getElementById("nprice").innerHTML="Normal Price :  " + li.toLocaleString() + "  Kyat";

        if (qt<=4){
            lid=li*0.15;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;           
        }else if (qt<=10) {
            lid=li*0.17;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=24) {
            lid=li*0.20;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=25) {
            lid=li*0.25;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=50) {
            lid=li*0.30;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=75) {
            lid=li*0.32;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=100) {
            lid=li*0.35;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=150) {
            lid=li*0.37;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<200) {
            lid=li*0.39;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }
        
        else{
            document.getElementById('dprice').innerHTML="";  
        }

    } else if (li ==1500){
        document.getElementById("error").innerHTML="";
        let li=933000;
        document.getElementById("nprice").innerHTML="Normal Price :  " + li.toLocaleString() + "  Kyat";

        if (qt<=4){
            lid=li*0.15;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;           
        }else if (qt<=10) {
            lid=li*0.17;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=24) {
            lid=li*0.20;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=25) {
            lid=li*0.25;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=50) {
            lid=li*0.30;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=75) {
            lid=li*0.32;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=100) {
            lid=li*0.35;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=150) {
            lid=li*0.37;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<200) {
            lid=li*0.39;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }
        
        else{
            document.getElementById('dprice').innerHTML="";  
        }

    } else if (li ==2000) {
        document.getElementById("error").innerHTML="";
        let li=1165000;
        document.getElementById("nprice").innerHTML="Normal Price :  " + li.toLocaleString() + "  Kyat";

        if (qt<=4){
            lid=li*0.15;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;           
        }else if (qt<=10) {
            lid=li*0.17;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=24) {
            lid=li*0.20;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=25) {
            lid=li*0.25;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=50) {
            lid=li*0.30;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=75) {
            lid=li*0.32;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=100) {
            lid=li*0.35;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=150) {
            lid=li*0.37;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }else if (qt<=200) {
            lid=li*0.39;
            document.getElementById('dprice').innerHTML="Discount Amount :  " + lid.toLocaleString() + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion Amount :  " + (li - lid).toLocaleString() + "  Kyat" ;
        }
        
        else{
            document.getElementById('dprice').innerHTML="";  
        }

    } else{
        document.getElementById("nprice").innerHTML="";
        document.getElementById("error").innerHTML="Check fill liter amount 550, 1000, 1500, 2000 ";
    }
    
   
}
