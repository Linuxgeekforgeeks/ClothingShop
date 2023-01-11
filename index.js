let shop=document.getElementById("card")

const ShopObject=[{
    id:"klasdfsdfsd",
    imgname:"person_1.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
    name:"Women Fashion",
    price:183
},{
    id:"klasdfsdfsd",
    imgname:"person_5.jpg",
    desc:"Lorem ipsum dolor, sit ametds gread dafdf.",
    name:"Miami Fashion",
    price:154
},{
    id:"kldfsfsdfsd",
    imgname:"person_2.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
    name:"Mens Fashion",
    price:100
}
]

console.log(shop)

let generateCard=()=>{

    let {id,imgname,desc,name,price}=ShopObject
    return (shop.innerHTML= `
    <div id="${id}" class="item1">
    <img width=230 src="images/${imgname}" alt="">
    <div class="detail">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$${price}</h2>
            <div class="button">
                <i><img src="Icons/dash.svg"></i>
                <div class="quantity">0</div>
                <i><img src="Icons/plus.svg"> </i>
            </div>
        </div>
    </div>
</div>`)
}
generateCard()
