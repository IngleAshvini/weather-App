 const product=[
    {
    id:1,
    Image:'image/img-1.jpg',
    information:'Headphones',
    price:'$20',
    },
    {
        id:2,
        image:'image/img-2.png',
        information:'Rode NT1 Microphone',
        price:'$45',
    },
    {
        id:3,
        image:'image/img-3.jpg',
        information:'Smart Watch',
        price:'$20',
    },
    {
        id:4,
        image:'image/img-4.jpg',
        information:'Washing Machines',
        price:'$35',
    },
    {
        id:5,
        image:'image/img-5.jpg',
        information:'HP Laptop Next Generation',
        price:'$70',
    },
    {
        id:6,
        image:'image/img-6.jpg',
        information:'250D DSLR Camera',
        price:'$60',
    },
    {
        id:7,
        image:'image/img-7.jpg',
        information:'meta dask lamp',
        price:'$30',
    },
    {
        id:8,
        image:'image/img-8.jpg',
        information:'Air Pods Pro',
        price:'$20',
    },
 ]
 const categories=[...new Set(product.map((item)=>
    {return item}))]
    let cart= document.getElementById('root')
    cart.innerHTML=categories.map((item)=>
    { 
        var { image,information,price}=item;
    return( 
        `<div class="box">
            <div class="img-box">
                <img src=${image}></img>
            </div>
            <div class="left">
                <p>${information}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>`
    )
    })
    .join('')
