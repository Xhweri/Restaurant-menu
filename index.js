'use strict'
let info=document.querySelector("#info");
let k3=document.querySelector("#k3");
let k2=document.querySelector("#k2");
let k1=document.querySelector("#k1");
let susy=document.querySelector("#sus");
let cocaina=document.querySelector("#dryck");
let ordern=document.querySelector("#Order")
let si=document.querySelector(".yes");
let niet=document.querySelector('.nei');
let nyEl=document.createElement("li");
let totalbelopp=[];
let totalbeloppBord=[];
let namnRatt=[];
let totalsumma;
let sumerad=false;
let confiremd=false;
let receipt = document.querySelector("#receipt");

fetch('./labb3.js')
  .then(response => response.text())
  .then(data => {
    eval(data);
    const removePrefix = (content) => {
      return content.replace('a:', '');
    };

    
    const pizzorKlass3Items3 = menu["Pizzor klass 3"];
    const pizzorKlass3Items2 = menu["Pizzor klass 2"];
    const pizzorKlass3Items1 = menu["Pizzor klass 1"];
    const sus = menu["Såser"];
    const dryck= menu["Dryck"];


    pizzorKlass3Items3.forEach(item => {
      nyEl = document.createElement("li");
      let PizzaName = document.createTextNode(`${item.name + " " + item.contents+" " + item.price + "Kr"}`);
      if (window.innerWidth <= 768) {
        nyEl.classList.add("mb-4"); // Add margin-bottom for mobile screens
    }
      nyEl.appendChild(PizzaName);
      k3.appendChild(nyEl);
    });
k3.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedItem = event.target.closest("li");
  if (clickedItem) {
    let itemIndex = Array.from(k3.children).indexOf(clickedItem);
    let selectedItem = pizzorKlass3Items3[itemIndex];
    let price = selectedItem.price; 
    
    totalbelopp.push(price);
    namnRatt.push(selectedItem.name);
    console.log(totalbelopp);

    nyEl = document.createElement("li");
    let nytxt = document.createTextNode(selectedItem.name + " : ");

    // Create span element for contents and apply CSS class
    let contentSpan = document.createElement("span");
    
    contentSpan.textContent = selectedItem.contents.map(removePrefix).join(', ');
    
    if(selectedItem.contents.includes("a:Räkor")||selectedItem.contents.includes("a:Nötter")||selectedItem.contents.includes("a:Crabfish")||selectedItem.contents.includes("a:Ägg"))
    {
      contentSpan.classList.add("red-text");
    }

    // Append span to list item
    nyEl.appendChild(nytxt);
    nyEl.appendChild(contentSpan);
    ordern.appendChild(nyEl);


    // nyEl=document.createElement("li");
    // let nytxt=document.createTextNode(selectedItem.name+" : "+selectedItem.contents.map(removePrefix).join(', '));
    
    
    // nyEl.appendChild(nytxt);
    // ordern.appendChild(nyEl);
  }
});







//pizza2
k2.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedItem = event.target.closest("li");
  if (clickedItem) {
    let itemIndex = Array.from(k2.children).indexOf(clickedItem);
    let selectedItem = pizzorKlass3Items2[itemIndex];
    let price = selectedItem.price; 
    totalbelopp.push(price);
    namnRatt.push(selectedItem.name);
    console.log(totalbelopp);
    nyEl = document.createElement("li");
    let nytxt = document.createTextNode(selectedItem.name + " : ");

    // Create span element for contents and apply CSS class
    let contentSpan = document.createElement("span");
    
    contentSpan.textContent = selectedItem.contents.map(removePrefix).join(', ');
    if(selectedItem.contents.includes("a:Räkor")||selectedItem.contents.includes("a:Nötter")||selectedItem.contents.includes("a:Crabfish")||selectedItem.contents.includes("a:Ägg"))
    {
      contentSpan.classList.add("red-text");
    }
    // Append span to list item
    nyEl.appendChild(nytxt);
    nyEl.appendChild(contentSpan);
    ordern.appendChild(nyEl);




    // let nyLiEl=document.createElement("li");
    // let nytxt=document.createTextNode(selectedItem.name+" : "+selectedItem.contents);
    // if(selectedItem.contents.includes("a:Räkor")||selectedItem.contents.includes("a:Nötter"||selectedItem.contents.includes("a:Crabfish")))
    // {
      
      
      
    // }
    // nyLiEl.appendChild(nytxt) 
    // ordern.appendChild(nyLiEl);
  }
});


pizzorKlass3Items2.forEach(item => {
  nyEl = document.createElement("li");
  let PizzaName = document.createTextNode(`${item.name + " " + item.contents + " " + item.price + "Kr"}`);
  if (window.innerWidth <= 768) {
    nyEl.classList.add("mb-4"); 
}
  nyEl.appendChild(PizzaName);
  k2.appendChild(nyEl);
});


//pizza1
k1.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedItem = event.target.closest("li");
  if (clickedItem) {
    let itemIndex = Array.from(k1.children).indexOf(clickedItem);
    let selectedItem = pizzorKlass3Items1[itemIndex];
    let price = selectedItem.price; 
    totalbelopp.push(price);
    namnRatt.push(selectedItem.name);
    let nyLiEl=document.createElement("li");
    let nytxt=document.createTextNode(selectedItem.name+" : "+selectedItem.contents);
    if(selectedItem.contents.includes("a:Räkor")||selectedItem.contents.includes("a:Nötter"||selectedItem.contents.includes("a:Crabfish")))
    {
      nytxt.textContent+=``;
      
    }
    nyLiEl.appendChild(nytxt) 
    ordern.appendChild(nyLiEl);
    
  }
});


pizzorKlass3Items1.forEach(item => {
  nyEl = document.createElement("li");
  let PizzaName = document.createTextNode(`${item.name + " "+ item.contents + " " + item.price + "Kr"}`);
  if (window.innerWidth <= 768) {
    nyEl.classList.add("mb-4"); 
}
  nyEl.appendChild(PizzaName);
  k1.appendChild(nyEl);
});




      susy.addEventListener("click", (event) => {
        event.preventDefault();
        const clickedItem = event.target.closest("li");
        if (clickedItem) {
          const itemIndex = Array.from(susy.children).indexOf(clickedItem);
          const selectedItem = sus[itemIndex];
          const price = selectedItem.price; 
          totalbelopp.push(price);
          namnRatt.push(selectedItem.name);
          let nyLiEl=document.createElement("li");
          let nytxt=document.createTextNode(clickedItem.textContent.trim());
          nyLiEl.appendChild(nytxt) 
          ordern.appendChild(nyLiEl);
         
        }
      });

      sus.forEach(item=>{
        nyEl = document.createElement("li");
        let SusName = document.createTextNode(`${item.name+" "+item.price+"Kr"}`);
        if (window.innerWidth <= 768) {
          nyEl.classList.add("mb-4");
      }
        nyEl.appendChild(SusName);
        susy.appendChild(nyEl);
      })




      cocaina.addEventListener("click", (event) => {
        event.preventDefault();
        const clickedItem = event.target.closest("li");
        if (clickedItem) {
          const itemIndex = Array.from(cocaina.children).indexOf(clickedItem);
          const selectedItem = dryck[itemIndex];
          const price = selectedItem.price; 
          totalbelopp.push(price);
          namnRatt.push(selectedItem.name);
          console.log(namnRatt);
          console.log(totalbelopp);
          let nyLiEl=document.createElement("li");
          let nytxt=document.createTextNode(clickedItem.textContent.trim());
          nyLiEl.appendChild(nytxt) 
          ordern.appendChild(nyLiEl);
          
          totalbeloppBord.push(totalsumma);// kanske fucked up
        }
      });
      
      dryck.forEach(item=>{
         nyEl = document.createElement("li");
        let dryckName = document.createTextNode(`${item.name+" "+item.price+"Kr"}`);
        if (window.innerWidth <= 768) {
          nyEl.classList.add("mb-4"); 
      }
        nyEl.appendChild(dryckName);
        cocaina.appendChild(nyEl);
      })
      
  })
  .catch(error => {
    console.log('Error fetching menu data:', error);
  });

  function showReceipt() {
    
    receipt.innerHTML = ""; // Rensa kvittot
  
    totalbelopp.forEach((price, index ) => {
      let item = document.createElement("li");
      let itemName = document.createTextNode(` ${namnRatt[index]}: ${price} Kr`);
      item.appendChild(itemName);
      receipt.appendChild(item);
      item.style.color="white";
      
    });
  
    const total = document.createElement("div");
    const totalPrice = document.createTextNode(`Totalsumma: ${totalsumma} Kr`);
    total.appendChild(totalPrice);
    receipt.appendChild(total);
    
  }
 

  si.addEventListener("click", () => {
    totalsumma = totalbelopp.reduce((sum, amount) => sum + amount, 0);
    console.log(totalsumma);
    ordern.innerHTML="";
    showReceipt();
    console.log(info);
    if(info.value!==""){
      alert(info.value);
    }
    info.value="";
  });
  niet.addEventListener("click",()=>{
   totalbelopp=[];
   receipt.innerHTML="";
  })

