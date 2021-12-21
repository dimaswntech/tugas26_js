function tugas(){
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    for(var i=0;i<data.length;i++){
        data1 = isFinite(data[i]);
        if(data1 == false){
            console.log("Angka ",data[i],"Infinity");
        }else{
            console.log("Angka ",data[i],"Not Infinity");
        }
        
    }
}
tugas();