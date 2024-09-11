for(i=0; i<5; i++){
    for(j=0; j<10; j++){
        if (i%2==0){
            document.write("<div class='box_do'></div>");
        }
        else{
            document.write("<div class='box_xam'></div>");
        }
        
    }
    document.write("<div style='clear:both'></div>");
}