
var bt = [];
var wt = [];
var at = [];
var tt = [];
var pn = [];
var pr = [];
var comp = [];
var new_bt = [];
var value = "none";
var time_q = 0;
var ct = 0;
function update() {
    var select = document.getElementById('algo');
    value = select.options[select.selectedIndex].value;
    console.log(value);

    if(value !== "none"){
        if( value === "FCFS"){
            document.getElementById("algorithm").classList.add("hide");
            document.getElementById("entry").classList.remove("hide");
            document.getElementById("entry").classList.add("entryClass");
            document.getElementById("PName").focus();
            document.getElementById("PName").select();   
        }else if(value === "SJF"){
            document.getElementById("algorithm").classList.add("hide");
            document.getElementById("entry2").classList.remove("hide");
            document.getElementById("entry2").classList.add("entryClass");
            document.getElementById("PName2").focus();
            document.getElementById("PName2").select();
        }else if(value === "PR"){
            document.getElementById("algorithm").classList.add("hide");
            document.getElementById("entry3").classList.remove("hide");
            document.getElementById("entry3").classList.add("entryClass");
            document.getElementById("PName3").focus();
            document.getElementById("PName3").select();
        }else if(value === "RR"){
            document.getElementById("algorithm").classList.add("hide");
            document.getElementById("time_q").classList.remove("hide");
            document.getElementById("time_q").classList.add("entryClass");
        }
    }
}
var i=0;
function RoundRobin(){
    time_q = parseInt(document.getElementById("tq").value);
    document.getElementById("time_q").classList.add("hide");
    document.getElementById("entry4").classList.remove("hide");
    document.getElementById("entry4").classList.add("entryClass");
    document.getElementById("PName4").focus();
    document.getElementById("PName4").select();
}
function algoSelect() {
    if(value === "FCFS"){
        rows();
    }else if(value === "SJF"){
        rows2();
    }else if(value === "PR"){
        rows3();
    }else if(value === "RR"){
        rows4();
    }
}
function rows(){
    document.getElementById("tableRow").classList.remove("hide");
    document.getElementById("PName").focus();
    document.getElementById("PName").select();

    var table = document.getElementById("insertRow");
    var row = table.insertRow(i);
    i++;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = document.getElementById("PName").value;
    cell2.innerHTML = document.getElementById("ATime").value;
    cell3.innerHTML = document.getElementById("BTime").value;
    
    

    pn.push(document.getElementById("PName").value);
    at.push(parseInt(document.getElementById("ATime").value));
    bt.push(parseInt(document.getElementById("BTime").value));
    comp.push(0);

    console.log(typeof parseInt(document.getElementById("BTime").value));

    document.getElementById('PName').value = "";
    document.getElementById('ATime').value = "";
    document.getElementById('BTime').value = "";
}
function rows2(){
    document.getElementById("tableRow2").classList.remove("hide");
    document.getElementById("PName2").focus();
    document.getElementById("PName2").select();

    var table = document.getElementById("insertRow2");
    var row = table.insertRow(i);
    i++;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = document.getElementById("PName2").value;
    cell2.innerHTML = document.getElementById("ATime2").value;
    cell3.innerHTML = document.getElementById("BTime2").value;
    
    

    pn.push(document.getElementById("PName2").value);
    at.push(parseInt(document.getElementById("ATime2").value));
    bt.push(parseInt(document.getElementById("BTime2").value));
    comp.push(0);

    console.log(typeof parseInt(document.getElementById("BTime2").value));

    document.getElementById('PName2').value = "";
    document.getElementById('ATime2').value = "";
    document.getElementById('BTime2').value = "";
}
function rows3(){
    document.getElementById("tableRow3").classList.remove("hide");
    document.getElementById("PName3").focus();
    document.getElementById("PName3").select();

    var table = document.getElementById("insertRow3");
    var row = table.insertRow(i);
    i++;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = document.getElementById("PName3").value;
    cell2.innerHTML = document.getElementById("ATime3").value;
    cell3.innerHTML = document.getElementById("BTime3").value;
    cell4.innerHTML = document.getElementById("Pr").value;
    
    

    pn.push(document.getElementById("PName3").value);
    at.push(parseInt(document.getElementById("ATime3").value));
    bt.push(parseInt(document.getElementById("BTime3").value));
    pr.push(parseInt(document.getElementById("Pr").value));
    comp.push(0);

    console.log(typeof parseInt(document.getElementById("BTime3").value));

    document.getElementById('PName3').value = "";
    document.getElementById('ATime3').value = "";
    document.getElementById('BTime3').value = "";
    document.getElementById('Pr').value = "";
}
function rows4(){
    document.getElementById("tableRow4").classList.remove("hide");
    document.getElementById("PName4").focus();
    document.getElementById("PName4").select();

    var table = document.getElementById("insertRow4");
    var row = table.insertRow(i);
    i++;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = document.getElementById("PName4").value;
    cell2.innerHTML = document.getElementById("ATime4").value;
    cell3.innerHTML = document.getElementById("BTime4").value;
    
    

    pn.push(document.getElementById("PName4").value);
    at.push(parseInt(document.getElementById("ATime4").value));
    bt.push(parseInt(document.getElementById("BTime4").value));
    new_bt.push(parseInt(document.getElementById("BTime4").value));
    comp.push(0);

    console.log(typeof parseInt(document.getElementById("BTime4").value));

    document.getElementById('PName4').value = "";
    document.getElementById('ATime4').value = "";
    document.getElementById('BTime4').value = "";
}


function result(){
    document.getElementById("resultTable").classList.remove("hide");
    document.getElementById("entry").classList.add("hide");
    document.getElementById("tableRow").classList.add("hide");
    document.getElementById("resultTable").classList.add("entryClass");
    var myobj1 = document.getElementById("entry");
    myobj1.remove();
    var myobj2 = document.getElementById("tableRow");
    myobj2.remove();
    var temp = i;
    var j=0;
    const par = document.createElement("span");
    const nod = document.createTextNode("(0)");
    par.appendChild(nod);
    const ele = document.getElementById("gantt");
    ele.appendChild(par);
    while(temp > 0){
    	var check=0;
        var min = 100000,index=0
    	for(j=0;j<i;j++){
    		if(ct >= at[j] && comp[j] === 0){
    			check=1;
                if(at[j] < min){
    				min = at[j];
    				index = j;
                }
			}
		}
        if(check == 1){
            ct = ct + bt[index];
	        tt[index] = ct - at[index];
	        wt[index] = tt[index] - bt[index];
            comp[index] = 1;

            const para = document.createElement("span");
            const node = document.createTextNode("    " + pn[index] + "    (" + ct + ")");
            para.appendChild(node);
            const element = document.getElementById("gantt");
            element.appendChild(para);
          }
	    if(check === 0){
            ct++;
            const para = document.createElement("span");
            const node = document.createTextNode("    " + "idle" +"    (" + ct + ")");
            para.appendChild(node);
            const element = document.getElementById("gantt");
            element.appendChild(para);
		    
        }
            
		if(check === 1)
    	temp--;
	}
    var e=0;
    var s1=0;
    var s2=0;
    while(e<i){
        var table = document.getElementById("newTable");
        var row = table.insertRow(e);
        
    
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
    
        cell1.innerHTML = pn[e];
        cell2.innerHTML = wt[e];
        cell3.innerHTML = tt[e];
        s1 = s1 + wt[e];
        s2 = s2 + tt[e];
        e++;
    }
    var avg_wait = s1/i;
    var avg_tt = s2/i;

    document.getElementById("wait").textContent = avg_wait;
    document.getElementById("turn").textContent = avg_tt;
   
}
function result2(){
    document.getElementById("resultTable").classList.remove("hide");
    document.getElementById("entry2").classList.add("hide");
    document.getElementById("tableRow2").classList.add("hide");
    document.getElementById("resultTable").classList.add("entryClass");
    var myobj1 = document.getElementById("entry2");
    myobj1.remove();
    var myobj2 = document.getElementById("tableRow2");
    myobj2.remove();
    var temp = i;
    var j=0;
    const par = document.createElement("span");
    const nod = document.createTextNode("(0)");
    par.appendChild(nod);
    const ele = document.getElementById("gantt");
    ele.appendChild(par);
    while(temp > 0){
    	var check=0;
        var min = 100000,index=0
    	for(j=0;j<i;j++){
    		if(ct >= at[j] && comp[j] === 0){
    			check=1;
                if(bt[j] < min){
    				min = bt[j];
    				index = j;
                }
			}
		}
        if(check == 1){
            ct = ct + bt[index];
	        tt[index] = ct - at[index];
	        wt[index] = tt[index] - bt[index];
            comp[index] = 1;

            const para = document.createElement("span");
            const node = document.createTextNode("    " + pn[index] + "    (" + ct + ")");
            para.appendChild(node);
            const element = document.getElementById("gantt");
            element.appendChild(para);
          }
	    if(check === 0){
            ct++;
            const para = document.createElement("span");
            const node = document.createTextNode("    " + "idle" +"    (" + ct + ")");
            para.appendChild(node);
            const element = document.getElementById("gantt");
            element.appendChild(para);
		    
        }
            
		if(check === 1)
    	temp--;
	}
    var e=0;
    var s1=0;
    var s2=0;
    while(e<i){
        var table = document.getElementById("newTable");
        var row = table.insertRow(e);
        
    
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
    
        cell1.innerHTML = pn[e];
        cell2.innerHTML = wt[e];
        cell3.innerHTML = tt[e];
        s1 = s1 + wt[e];
        s2 = s2 + tt[e];
        e++;
    }
    var avg_wait = s1/i;
    var avg_tt = s2/i;

    document.getElementById("wait").textContent = avg_wait;
    document.getElementById("turn").textContent = avg_tt;
}
function result3(){
    document.getElementById("resultTable").classList.remove("hide");
    document.getElementById("entry3").classList.add("hide");
    document.getElementById("tableRow3").classList.add("hide");
    document.getElementById("resultTable").classList.add("entryClass");
    var myobj1 = document.getElementById("entry3");
    myobj1.remove();
    var myobj2 = document.getElementById("tableRow3");
    myobj2.remove();
    var temp = i;
    var j=0;
    const par = document.createElement("span");
    const nod = document.createTextNode("(0)");
    par.appendChild(nod);
    const ele = document.getElementById("gantt");
    ele.appendChild(par);
    while(temp > 0){
    	var check=0;
        var min = -1,index=0
    	for(j=0;j<i;j++){
    		if(ct >= at[j] && comp[j] === 0){
    			check=1;
                if(pr[j] > min){
    				min = pr[j];
    				index = j;
                }
			}
		}
        if(check == 1){
            ct = ct + bt[index];
	        tt[index] = ct - at[index];
	        wt[index] = tt[index] - bt[index];
            comp[index] = 1;

            const para = document.createElement("span");
            const node = document.createTextNode("    " + pn[index] + "    (" + ct + ")");
            para.appendChild(node);
            const element = document.getElementById("gantt");
            element.appendChild(para);
          }
	    if(check === 0){
            ct++;
            const para = document.createElement("span");
            const node = document.createTextNode("    " + "idle" +"    (" + ct + ")");
            para.appendChild(node);
            const element = document.getElementById("gantt");
            element.appendChild(para);
		    
        }
            
		if(check === 1)
    	temp--;
	}
    var e=0;
    var s1=0;
    var s2=0;
    while(e<i){
        var table = document.getElementById("newTable");
        var row = table.insertRow(e);
        
    
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
    
        cell1.innerHTML = pn[e];
        cell2.innerHTML = wt[e];
        cell3.innerHTML = tt[e];
        s1 = s1 + wt[e];
        s2 = s2 + tt[e];
        e++;
    }
    var avg_wait = s1/i;
    var avg_tt = s2/i;

    document.getElementById("wait").textContent = avg_wait;
    document.getElementById("turn").textContent = avg_tt;
}
function result4(){
    document.getElementById("resultTable").classList.remove("hide");
    document.getElementById("entry4").classList.add("hide");
    document.getElementById("tableRow4").classList.add("hide");
    document.getElementById("resultTable").classList.add("entryClass");
    var myobj1 = document.getElementById("entry4");
    myobj1.remove();
    var myobj2 = document.getElementById("tableRow4");
    myobj2.remove();
    var temp = i;
    var j=0;
    const par = document.createElement("span");
    const nod = document.createTextNode("(0)");
    par.appendChild(nod);
    const ele = document.getElementById("gantt");
    ele.appendChild(par);
    
    while(1){
        var check=1;
    	for(j=0;j<i;j++){
    		if(new_bt[j] > 0)
            {  
               check = 0;
               if(new_bt[j] > time_q){
                   ct = ct + time_q;
                   new_bt[j] = new_bt[j] - time_q;
                   const para = document.createElement("span");
                    const node = document.createTextNode("    " + pn[j] + "    (" + ct + ")");
                    para.appendChild(node);
                    const element = document.getElementById("gantt");
                    element.appendChild(para);
               }else{
                   ct = ct + new_bt[j];
                   wt[j] = ct - bt[j];
                   new_bt[j] = 0;

                   const para = document.createElement("span");
                    const node = document.createTextNode("    " + pn[j] + "    (" + ct + ")");
                    para.appendChild(node);
                    const element = document.getElementById("gantt");
                    element.appendChild(para);
               }
           }
	}
    if(check === 1){
        break;
    }
}
for(j=0;j<i;j++){
    tt[j] = bt[j] + wt[j];
}
    var e=0;
    var s1=0;
    var s2=0;
    while(e<i){
        var table = document.getElementById("newTable");
        var row = table.insertRow(e);
        
    
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
    
        cell1.innerHTML = pn[e];
        cell2.innerHTML = wt[e];
        cell3.innerHTML = tt[e];
        s1 = s1 + wt[e];
        s2 = s2 + tt[e];
        e++;
    }
    var avg_wait = s1/i;
    var avg_tt = s2/i;

    document.getElementById("wait").textContent = avg_wait;
    document.getElementById("turn").textContent = avg_tt;
}