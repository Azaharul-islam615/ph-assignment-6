// categories part
const categories=()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then((data)=>{
       categoriesItem(data.categories)
       
      
    })
}


const categoriesItem=(items)=>{
    const container=document.getElementById("Categoriesitem")
  
    for(let item of items){
        
        let Div=document.createElement("div")
        Div.innerHTML=` <h3 id="${item.id}"  class=" descrip hover:rounded-md hover:pl-[2px] hover:bg-[#15803D] hover:text-white hover:pb-1 hover:pt-1 font-[400] text-[16px] text-[#1F2937] mb-[8px]">${item. category_name}</h3>`
        container.appendChild(Div)
   
    }
      container.addEventListener("click",(e)=>{
            const allh3=document.querySelectorAll('h3')
            allh3.forEach(h3=>{
                h3.classList.remove('bg-green-700')
                h3.classList.remove('text-white')
                h3.classList.remove('p-1')
                h3.classList.remove('rounded-md')
            })
            if(e.target.localName==='h3'){
                
                e.target.classList.add('bg-green-700')
                e.target.classList.add('text-white')
                e.target.classList.add('p-1')
                e.target.classList.add('rounded-md')
                loadtreebycategory(e.target.id)
                
               
            }
        })
  
}
categories()

const loadtreebycategory=(treeid)=>{
    fetch(`https://openapi.programming-hero.com/api/category/${treeid}`)
    .then(res=>res.json())
    .then(data=>{
        getplants(data.plants)
      
    })
}



// card section
const allplants = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => getplants(data.plants));
}


const getplants = (plants) => {
    const container = document.getElementById("card-container");

    container.innerHTML=""
    
    plants.forEach(plant => {
        // Main plant card
        
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
            <div class="card w-[250px] pt-3 pl-3 pr-3 bg-white h-[350px] rounded-lg">
                <div><img class="h-[160px] w-[224px] rounded-lg mb-2" src="${plant.image}" alt=""></div>
                <h1 onclick="loadtreeDetail(${plant.id})" class="font-semibold text-[14px] text-[#1F2937]">${plant.name}</h1>
                <p class="font-[400] text-[9px] text-[#1F2937] mb-2">${plant.description}</p>
                <div class="flex justify-between mb-3">
                    <h3 class="pt-[4px] pb-[4px] pl-3 pr-3 bg-[#DCFCE7] rounded-[400px] font-medium text-[14px] text-[#15803D]">${plant.category}</h3>
                    <h1 class="font-semibold text-[14px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</h1>
                </div>
                <button class="btn1 w-[100%] bg-[#15803D] rounded-[999px] text-white pt-2 pb-2 font-medium text-[16px]">Add to Cart</button>
            </div>
        `;
        container.appendChild(cardDiv);

        const button = cardDiv.querySelector(".btn1");
        button.addEventListener("click", () => {
            alert(`${plant.name} ${plant.price}`)
            const addtoclick = document.getElementById("cartvar");

            // Cart item div
            const cartItemDiv = document.createElement("div");
            cartItemDiv.innerHTML = `
                <div class="bg-[#F0FDF4] flex justify-between items-center pl-2 pr-2 pt-3 pb-3 m-2 rounded-lg">
                    <div>
                        <h1 class="font-semibold text-[14px]">${plant.name}</h1>
                        <p class="text-[#8C8C8C] font-[400] text-[16px]">৳<span class="item-price">${plant.price}</span> x 1</p>
                    </div>
                    <div><i class="cancle text-[#8C8C8C] fa-solid fa-xmark"></i></div>
                </div>
            `;
            addtoclick.appendChild(cartItemDiv);

            
            Totalprice(plant.price);

          
            const deleteBtn = cartItemDiv.querySelector(".cancle");
            deleteBtn.addEventListener("click", () => {
                const total = document.getElementById("totalprice");
                const previoustotal = Number(total.innerText);

                
                const price = Number(cartItemDiv.querySelector('.item-price').innerText);

                total.innerText = previoustotal - price;

                
                cartItemDiv.remove();
            });

        });
    });
};

// Total price function
const Totalprice = (value) => {
    const total = document.getElementById("totalprice");
    const previousTotal = Number(total.innerText);
    total.innerText = previousTotal + Number(value);
};


allplants();
const loadtreeDetail=(id)=>{
   fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
   .then(res=>res.json())
   .then(data=>{
    
    dispalytreedetails(data.plants)
   })
}
const dispalytreedetails=(plantsdets)=>{
    console.log(plantsdets)
const body = document.querySelector("body");

const dialog = document.createElement("dialog");
dialog.id = "my_modal_5";
dialog.className = "modal modal-bottom sm:modal-middle";

dialog.innerHTML = `
<div>
    <div class="modal-box flex justify-center items-center">
        <div class=" card w-[250px] pt-3 pl-3 pr-3 bg-gray-400 h-[350px] rounded-lg">
                <div><img class="h-[160px] w-[224px] rounded-lg mb-2" src="${plantsdets.image}" alt=""></div>
                <h1  class="font-semibold text-[14px] text-white">Category:${plantsdets.category}</h1>
                <h1 class="font-semibold text-[14px] text-white"><i class="fa-solid fa-bangladeshi-taka-sign"></i>Price:${plantsdets.price}</h1>
                <p class="font-[400] text-[9px] text-white mb-2"><span class='font-semibold text-[16px]'>description:</span>${plantsdets.description}</p>

                
            </div>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn block">Close</button>
            </form>
        </div>
    </div>
    </div>
`;

body.appendChild(dialog);

// Modal দেখানোর জন্য
dialog.showModal();

}
