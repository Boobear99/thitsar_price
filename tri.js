function cal() {
    let li= document.getElementById("li").value;
    let qt= document.getElementById("qty").value;
    if (li==550) {
        document.getElementById("error").innerHTML="";
        let     li=435000;
        qt = Number(qt);
        tli= li*qt;
        document.getElementById("nprice").innerHTML="Normal price = " + li.toLocaleString() + "  Kyat";
        document.getElementById("t1pcs").innerHTML="<u>Price for 1 pcs</u>";
        document.getElementById("t2pcs").innerHTML="<u>Price for total "+ qt.toLocaleString() + " pcs</u>";
        document.getElementById('tnprice').innerHTML="Total normal price = "+ tli.toLocaleString() + " Kyat";
                
        if (qt<=4){
            lid=li*0.15;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (15%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (15%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        
        
        }else if (qt<=10) {
            lid=li*0.17;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (17%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (17%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=24) {
            lid=li*0.20;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (20%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (20%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=25) {
            lid=li*0.25;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (25%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (25%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=50) {
            lid=li*0.30;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (30%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (30%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=75) {
            lid=li*0.32;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (32%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (32%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=100) {
            lid=li*0.35;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (35%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (35%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=150) {
            lid=li*0.37;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (37%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (37%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=199) {
            lid=li*0.39;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (39%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (39%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt>=200) {
            lid=li*0.40;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (40%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (40%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }
        else{
            document.getElementById('dprice').innerHTML="" ;
            document.getElementById('pprice').innerHTML= "" ;           
            document.getElementById('tdprice').innerHTML="";
            document.getElementById('tpprice').innerHTML="";
        }

    } else if (li==1000) {
        document.getElementById("error").innerHTML="";
        let li=670000;
        qt = Number(qt);
        tli= li*qt;
        document.getElementById("nprice").innerHTML="Normal price = " + li.toLocaleString() + "  Kyat";
        document.getElementById("t1pcs").innerHTML="<u>Price for 1 pcs</u>";
        document.getElementById("t2pcs").innerHTML="<u>Price for total "+ qt.toLocaleString() + " pcs</u>";
        document.getElementById('tnprice').innerHTML="Total normal price = "+ tli.toLocaleString() + " Kyat";
                
        if (qt<=4){
            lid=li*0.15;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (15%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (15%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        
        
        }else if (qt<=10) {
            lid=li*0.17;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (17%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (17%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=24) {
            lid=li*0.20;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (20%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (20%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=25) {
            lid=li*0.25;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (25%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (25%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=50) {
            lid=li*0.30;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (30%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (30%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=75) {
            lid=li*0.32;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (32%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (32%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=100) {
            lid=li*0.35;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (35%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (35%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=150) {
            lid=li*0.37;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (37%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (37%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=199) {
            lid=li*0.39;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (39%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (39%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt>=200) {
            lid=li*0.40;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (40%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (40%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }
        
        else{
            document.getElementById('dprice').innerHTML="" ;
            document.getElementById('pprice').innerHTML= "" ;           
            document.getElementById('tdprice').innerHTML="";
            document.getElementById('tpprice').innerHTML="";
        }

    } else if (li ==1500){
        document.getElementById("error").innerHTML="";
        let li=933000;
        qt = Number(qt);
        tli= li*qt;
        document.getElementById("nprice").innerHTML="Normal price = " + li.toLocaleString() + "  Kyat";
        document.getElementById("t1pcs").innerHTML="<u>Price for 1 pcs</u>";
        document.getElementById("t2pcs").innerHTML="<u>Price for total "+ qt.toLocaleString() + " pcs</u>";
        document.getElementById('tnprice').innerHTML="Total normal price = "+ tli.toLocaleString() + " Kyat";
                
        if (qt<=4){
            lid=li*0.15;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (15%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (15%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        
        
        }else if (qt<=10) {
            lid=li*0.17;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (17%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (17%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=24) {
            lid=li*0.20;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (20%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (20%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=25) {
            lid=li*0.25;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (25%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (25%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=50) {
            lid=li*0.30;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (30%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (30%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=75) {
            lid=li*0.32;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (32%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (32%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=100) {
            lid=li*0.35;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (35%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (35%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=150) {
            lid=li*0.37;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (37%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (37%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=199) {
            lid=li*0.39;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (39%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (39%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt>=200) {
            lid=li*0.40;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (40%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (40%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }
        
        else{
            document.getElementById('dprice').innerHTML="" ;
            document.getElementById('pprice').innerHTML= "" ;           
            document.getElementById('tdprice').innerHTML="";
            document.getElementById('tpprice').innerHTML="";
        }

    } else if (li ==2000) {
        document.getElementById("error").innerHTML="";
        let li=1165000;
        qt = Number(qt);
        tli= li*qt;
        document.getElementById("nprice").innerHTML="Normal price = " + li.toLocaleString() + "  Kyat";
        document.getElementById("t1pcs").innerHTML="<u>Price for 1 pcs</u>";
        document.getElementById("t2pcs").innerHTML="<u>Price for total "+ qt.toLocaleString() + " pcs</u>";
        document.getElementById('tnprice').innerHTML="Total normal price = "+ tli.toLocaleString() + " Kyat";
                
        if (qt<=4){
            lid=li*0.15;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (15%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (15%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        
        
        }else if (qt<=10) {
            lid=li*0.17;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (17%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (17%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=24) {
            lid=li*0.20;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (20%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (20%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=25) {
            lid=li*0.25;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (25%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (25%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=50) {
            lid=li*0.30;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (30%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (30%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=75) {
            lid=li*0.32;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (32%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (32%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=100) {
            lid=li*0.35;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (35%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (35%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=150) {
            lid=li*0.37;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (37%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (37%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt<=199) {
            lid=li*0.39;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (39%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (39%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }else if (qt>=200) {
            lid=li*0.40;
            td = lid*qt ;
            document.getElementById('dprice').innerHTML="Discount price (40%) = " + lid.toLocaleString()  + "  Kyat" ;
            document.getElementById('pprice').innerHTML= "Promotion price = " + (li - lid).toLocaleString() + "  Kyat" ;           
            document.getElementById('tdprice').innerHTML="Total discount price (40%) = " + td.toLocaleString() + " Kyat";
            document.getElementById('tpprice').innerHTML="Total promotion price = " + (tli-td).toLocaleString() + " Kyat";
        }
        
        else{
            document.getElementById('dprice').innerHTML="" ;
            document.getElementById('pprice').innerHTML= "" ;           
            document.getElementById('tdprice').innerHTML="";
            document.getElementById('tpprice').innerHTML="";
        }


    } else{
        document.getElementById("nprice").innerHTML="";
        document.getElementById("error").innerHTML="Abailable calculation for 550 , 1000 , 1500 and 2000 liter";
        document.getElementById('dprice').innerHTML="";
        document.getElementById('pprice').innerHTML="";
        document.getElementById("t1pcs").innerHTML="";
        document.getElementById("t2pcs").innerHTML="";
        document.getElementById('tdprice').innerHTML="";
        document.getElementById('tpprice').innerHTML="";
        document.getElementById('tnprice').innerHTML="";
    }
    
   
}