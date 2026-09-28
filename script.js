const products = [
  {name:"Royal Butterfly Pearl", price:"₹499", image:"images/butterfly-pearl.jpg", cat:"gold"},
  {name:"Amethyst Flower Hoops", price:"₹399", image:"images/purple-flower.webp", cat:"purple"},
  {name:"Black & Gold Petal", price:"₹549", image:"images/black-gold-flower.png", cat:"gold"},
  {name:"Purple Butterfly Pearl", price:"₹449", image:"images/purple-butterfly.jpg", cat:"purple"},
];

function renderProducts(list=products){
  const box=document.getElementById("products");
  if(!list.length){box.innerHTML='<p style="grid-column:1/-1;text-align:center;padding:30px">No earrings found.</p>';return;}
  box.innerHTML=list.map(p=>{
    const msg=`Hi AURELIA JEWELS, I want to order ${p.name} - ${p.price}.`;
    return `<article class="card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="price">${p.price}</div>
        <a class="order" href="https://wa.me/919769664319?text=${encodeURIComponent(msg)}" target="_blank">ORDER ON WHATSAPP</a>
      </div>
    </article>`;
  }).join("");
}
function filterProducts(){
  const q=document.getElementById("search").value.toLowerCase();
  const c=document.getElementById("category").value;
  renderProducts(products.filter(p=>(p.name.toLowerCase().includes(q)||p.cat.includes(q))&&(c==="all"||p.cat===c)));
}
function toggleMenu(){
  const nav=document.getElementById("nav");
  nav.style.display=nav.style.display==="flex"?"none":"flex";
}
renderProducts();
