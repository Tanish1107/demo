var j=1;
function prp(){
    var boxd=document.getElementById("td1");
    var box=document.createElement("div");
    box.className="box";
   
    var TITLE= String(prompt("ENTER THE TITLE"));
    var items=Number(prompt("ENTER NUMBER OF ITEMS"))
    var arr=new Array();
   
    for(var i=1;i<items+1;i++){
        arr[i]=prompt("ENTER "+(i)+" ELEMENT");
    }
    
    box.innerHTML+=`<h2>${TITLE}</h2>`;
    for(var i=1;i<items+1;i++){
            box.innerHTML+=`<h4>
                <input type="checkbox" onclick="stride()" id="id${j}">
                <label for="id${j}" id="label${j}">${arr[i]}</label>    
                </h4>`;
                j++;
    }
        boxd.appendChild(box);
}
function stride() {
    for (var i = 1; i <= j; i++) {
        var checkb = document.getElementById("id" + i);
        if (checkb.checked == true) {
            document.getElementById("label" + i).style.textDecorationLine = "line-through";
            document.getElementById("label" + i).style.color = "#C2C2C2";
        } else {
            document.getElementById("label" + i).style.textDecorationLine = "none";
            document.getElementById("label" + i).style.color = "#424242";
        }
    };
}
