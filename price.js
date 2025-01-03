const data = [
  {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    amt: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
  },
  {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    amt: 1300,
    seller: "Noise Store",
    catagory: "Watch",
  },
  {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    amt: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
  },
  {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    amt: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
  },
  {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    amt: 12999,
    seller: "Honor india",
    catagory: "Tablets",
  },
  {
    id: 6,
    name: "IKALL N9 ",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    amt: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
  },
  {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    amt: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
  },
  {
    id: 8,
    name: "Acer EK220Q",
    img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    amt: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
  },
  {
    id: 9,
    name: "Samsung 24",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    amt: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
  },
  {
    id: 10,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
  },
  {
    id: 11,
    name: "Sony WH-1000XM4",
    img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
    amt: 24999,
    seller: "Sony Store",
    catagory: "Headphones",
  },
  {
    id: 12,
    name: "JBL Flip 6",
    img: "https://i.rtings.com/assets/products/kZx0LRvy/jbl-flip-6/design-medium.jpg?format=auto",
    amt: 8999,
    seller: "JBL Store",
    catagory: "Speakers",
  },
  {
    id: 13,
    name: "Apple MacBook Pro 14",
    img: "https://i.pinimg.com/736x/4d/ac/d9/4dacd94a2a84af94b8741b2962286286.jpg",
    amt: 199900,
    seller: "Apple Store",
    catagory: "Laptops",
  },
  {
    id: 14,
    name: "Dell XPS 13",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/white/notebook-g16-7630-nt-white-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000",
    amt: 144999,
    seller: "Dell Store",
    catagory: "Laptops",
  },
  {
    id: 15,
    name: "HP Envy 13",
    img: "https://www.livemint.com/lm-img/img/2024/03/28/1600x900/B0C3D8BZVQ_991468120202959807_1711600561125.jpg",
    amt: 94999,
    seller: "HP Store",
    catagory: "Laptops",
  }
];




const products = document.querySelector(".products");
const inputsearch = document.querySelector("#search-input");
const ul = document.querySelector(".list");
const range = document.querySelector("#price-range");
const span_amt = document.querySelector("#range-amt");
const product_name = document.getElementsByClassName("title");
const dynamic_product = document.getElementsByClassName("product");
let allprice = data.map(num => num.amt);
let vmin = Math.min(...allprice);
let vmax = Math.max(...allprice);


range.addEventListener("input",rangeprice);


function rangeprice() {
  this.min = vmin;
  this.max = vmax;
  displayProducts(data.filter(item => this.value >= item.amt));
  span_amt.textContent = this.value;
}


function displayProducts(data) {
  span_amt.textContent = parseInt(vmax/2);
  products.innerHTML = "";
    data.forEach(item => {
        products.innerHTML += `<div class="product appear">
                    <div class="pic">
                        <img src="${item.img}" alt="img">
                    </div>
                    <div class="product-details">
                        <div class="title">${item.name} </div>
                        <div class="amount">Rs.${item.amt}</div>
                        <div class="store">${item.seller}</div>
                    </div>
                </div>`
    });

}

function displaycategary() {
    let licatagory = data.map(item =>{
        return item.catagory
    });
    const Allcatagory = ["All",...[... new Set(licatagory)]];
    Allcatagory.forEach(li =>{
      ul.innerHTML += `<li onclick="categarytype(this)">${li}</li>`;
    });
}

inputsearch.addEventListener("keyup",(e)=>{
  displaysearch(e);
});

function displaysearch(e) {
  console.log("hello");
  const search = e.target.value.toLowerCase().trim();
  [...product_name].forEach(ele =>{
    let text = ele.textContent.toLowerCase().trim();
    if(text.includes(search)){
      displayProducts(data.filter(item => item.name.toLowerCase().includes(search)));
    }
  });
}

function categarytype(li){
  let cat = li.textContent;
  cat === "All" ? displayProducts(data) : displayProducts(data.filter(item => item.catagory === cat));
}

displayProducts(data);
displaycategary();