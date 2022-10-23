function add(){
            getAndUpdate();
            update();
    document.getElementById('title').value="";
}

function getAndUpdate(){
                tit = document.getElementById('title').value;
                if (localStorage.getItem('itemsJson')==null){
                    itemJsonArray = [];
                    itemJsonArray.push([tit]);
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                }
                else{
                    itemJsonArrayStr = localStorage.getItem('itemsJson')
                    itemJsonArray = JSON.parse(itemJsonArrayStr);
                    itemJsonArray.push([tit]);
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                }
                update();
}

function update(){
                if (localStorage.getItem('itemsJson')==null){
                    itemJsonArray = []; 
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                } 
                else{
                    itemJsonArrayStr = localStorage.getItem('itemsJson')
                    itemJsonArray = JSON.parse(itemJsonArrayStr); 
                }
                let tableBody = document.getElementById("tableBody");
                let str = "";
                itemJsonArray.forEach((element, index) => {
                str += `
                <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="done(${index})">complete</button></td> 
                </tr>`; 
                });
                tableBody.innerHTML = str;
            }
function done(itemIndex){
            tit=itemJsonArray[itemIndex];
            if (localStorage.getItem('item')==null){
                itemJsonArray2 = [];
                itemJsonArray2.push([tit]);
                localStorage.setItem('item', JSON.stringify(itemJsonArray2))
            }
            else{
                itemJsonArrayStr2 = localStorage.getItem('item')
                itemJsonArray2 = JSON.parse(itemJsonArrayStr2);
                itemJsonArray2.push([tit]);
                localStorage.setItem('item', JSON.stringify(itemJsonArray2))
                }
                update2();
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.splice(itemIndex, 1);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            update();
    
}
function update2(){
                if (localStorage.getItem('item')==null){
                    itemJsonArray2 = []; 
                    localStorage.setItem('item', JSON.stringify(itemJsonArray2))
                } 
                else{
                    itemJsonArrayStr2 = localStorage.getItem('item')
                    itemJsonArray2= JSON.parse(itemJsonArrayStr2); 
                }
                let tableBody = document.getElementById("tableBody2");
                let str = "";
                itemJsonArray2.forEach((element, index) => {
                    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`; 
                });
                tableBody2.innerHTML = str;
            }


function deleted(itemIndex){
                itemJsonArrayStr2= localStorage.getItem('item')
                itemJsonArray2 = JSON.parse(itemJsonArrayStr2);
                itemJsonArray2.splice(itemIndex, 1);
                localStorage.setItem('item', JSON.stringify(itemJsonArray2));
                update2();

            }
           