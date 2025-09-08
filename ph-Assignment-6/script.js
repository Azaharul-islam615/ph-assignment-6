
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
        Div.innerHTML=` <h3 class=" descrip hover:rounded-sm hover:pl-[2px] hover:bg-[#15803D] hover:text-white hover:pb-1 hover:pt-1 font-[400] text-[16px] text-[#1F2937] mb-[8px]">${item. category_name}</h3>`
        container.appendChild(Div)
          
    }
}
categories()



// card section
const allplants=()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res=>res.json())
    .then(data=>{
        getplants(data.plants)
    })
}
const getplants=(plants)=>{
    const container=document.getElementById("card-container")
    plants.forEach(plant => {
        console.log(plant)
       const div=document.createElement('div')
       div.innerHTML=`
                        <div class=" card w-[250px]  pt-3 pl-3 pr-3  bg-white h-[350px] rounded-lg">
                            <div><img class="h-[160px] w-[224px] rounded-lg mb-2" src="${plant.image}" alt=""></div>
                            <h1 class="font-semibold text-[14px] text-[#1F2937]">${plant.name}</h1>
                            <p class="font-[400] text-[9px] text-[#1F2937] mb-2">${plant.description}</p>
                            <div class="flex justify-between mb-3">
                                <h3 class="pt-[4px] pb-[4px] pl-3 pr-3 bg-[#DCFCE7] rounded-[400px] font-medium text-[14px] text-[#15803D]">${plant.category}</h3>
                                <h1 class="font-semibold text-[14px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</h1>
                            </div>
                            <button class="w-[100%] bg-[#15803D] rounded-[999px] text-white pt-2 pb-2 font-medium text-[16px] ">Add
                                to Cart</button>

                           
                        </div>`

                        container.appendChild(div)
    });
}
allplants()