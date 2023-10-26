class itemModel{
    itemName;
    price;
    quantity;
    finalPrice;
}

let counter=0;
let items = [];

const getFinalPrice = (price,quantity)=>{
    return price*quantity;
}

function SubmittedNewEntry(){
    const obj = new itemModel();
    obj.itemName= document.getElementById("itemName").value;
    obj.price= document.getElementById("price").value;
    obj.quantity= document.getElementById("quantity").value;
    obj.finalPrice= String(getFinalPrice(obj.price,obj.quantity));
    items.push(obj);


    // Clear the existing content of the table
    const tbody = document.querySelector('tbody');
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }



    items.forEach((item, index) => {
        // Create a new row for each item
        const row = document.createElement('tr');
        const itemNameCell = document.createElement('td');
        itemNameCell.textContent = item.itemName;
        const itemPriceCell = document.createElement('td');
        itemPriceCell.textContent = item.price;
        const itemQuantityCell = document.createElement('td');
        itemQuantityCell.textContent = item.quantity;
        const itemFinalPriceCell = document.createElement('td');
        itemFinalPriceCell.textContent = item.finalPrice;
    
        // Append cells to the row
        row.appendChild(itemNameCell);
        row.appendChild(itemPriceCell);
        row.appendChild(itemQuantityCell);
        row.appendChild(itemFinalPriceCell);
    
        // Append the row to the table
        document.querySelector('tbody').appendChild(row);
    });
    console.log(items)

    document.getElementById("itemName").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";


}



