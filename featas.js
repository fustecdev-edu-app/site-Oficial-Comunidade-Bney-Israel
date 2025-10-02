


var dat =new Date();
var d = dat.getDate();
var m = dat.getMonth();

var hor = dat.getHours();

const festa = [
  "",//
"Yon Kippur ou expiação",//1 Yom Kippur
"Yon Kippur ou expiação",//2
"",//3
"SHABBAT",//4
"",//5
"Sucot (Festa dos Tabernáculos)",//6
"Sucot (Festa dos Tabernáculos)",//7
"Sucot (Festa dos Tabernáculos)",//8
"Sucot (Festa dos Tabernáculos)",//9
"Sucot (Festa dos Tabernáculos)",//10
"SHABBAT e (Festa dos Tabernáculos)",//11
"Sucot (Festa dos Tabernáculos)",//12
"Sucot (Festa dos Tabernáculos)",//13
"",//14
"feata da lua nova",//15
"",//16
"",//17
"SHABBAT",//18
"",//19
"",//20
"",//21
"",//22
"",//23
"",//24
"SHABBAT",//25
"",//26
"",//27
"",//28
"",//29
"fetsta da lua nova",//30
"",//31
""

]


var status = "none"

 if (d == 2) {

    if (hor >= 17) {
       status="none";
      alert('none')
        
    }
    
};

if (d == 4) {
     
    if (hor >=17) {
       status="block";
       
        
    }
    
}else if (d == 5) {

    if (hor <= 17) {
       status="block";
        
    }else{
        status="none";
    }
    
};

if (d == 6) {
    if (hor >=17) {
       status="block";
       
        
    }
    
}else if (d == 13) {

    if (hor <= 17) {
       status="block";
        
    }else{
        status="none";
    }
    
};


if (d == 18) {
    if (hor >=17) {
       status="block";
       
        
    }
    
}else if (d == 19) {

    if (hor <= 17) {
       status="block";
        
    }else{
        status="none";
    }
    
};

if (d == 25) {
    if (hor >=17) {
       status="block";
       
        
    }
    
}else if (d == 26) {

    if (hor <= 17) {
       status="block";
        
    }else{
        status="none";
    }
    
};

 


export {status};
export {festa};