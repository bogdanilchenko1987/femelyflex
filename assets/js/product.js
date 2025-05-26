const products = [
  {
    id: "1",
    title: "Skyline Gold",
    oldPrice: "$149",
    price: "$124",
    description: "Classic gold frame with warm sunset tint",
    image: "/assets/images/a2.jpg",
    text: "Skyline Gold captures the golden hour in every detail, offering a timeless aviator silhouette with a polished gold frame. The warm sunset-tinted lenses reduce glare and provide maximum comfort in bright conditions. Lightweight yet durable, these shades are perfect for city strolls or beach escapes. The adjustable nose pads and flexible temples ensure a comfortable, secure fit all day long. A favorite among classic enthusiasts, this model blends sophistication with laid-back charm. Whether you're on a rooftop bar or behind the wheel, Skyline Gold elevates your style effortlessly.",
  },
  {
    id: "2",
    title: "Midnight Glide",
    price: "$154",
    description: "Deep black with blue gradient lenses",
    image: "/assets/images/a1.jpg",
    text: "Midnight Glide is designed for bold personalities who enjoy sleek aesthetics with functional comfort. Featuring a deep matte black frame and stunning blue gradient lenses, this model stands out both day and night. The lenses offer 100% UV protection while enhancing color contrast for optimal clarity. With lightweight alloy construction, it's ideal for long-term wear without discomfort. Whether you're cruising the city or enjoying a sunset drive, these aviators provide style and protection in equal measure. Midnight Glide defines modern edge in motion.",
  },
  {
    id: "3",
    title: "Desert Chrome",
    price: "$224",
    description: "Polished silver with UV-reflective shine",
    image: "/assets/images/a3.jpg",
    text: "Desert Chrome speaks to those who dare to shine. This high-polish silver aviator is equipped with UV-reflective lenses that mirror the desert sun, reducing glare and maximizing visual clarity. Crafted with precision-engineered stainless steel, it's as strong as it is stylish. The ultra-slim arms and minimalistic design give it a futuristic vibe. Ideal for open-road adventures or rooftop parties, Desert Chrome combines function and fashion. It's a bold statement for anyone who refuses to blend in.",
  },
  {
    id: "4",
    title: "Urban Mirage",
    price: "$174",
    description: "Matte black with mirrored rose tint",
    image: "/assets/images/a4.webp",
    text: "Urban Mirage brings an unexpected twist to the traditional aviator with a matte black frame and striking mirrored rose-tinted lenses. Designed to reflect both light and personality, these sunglasses add a sophisticated yet edgy look to your outfit. They offer full UV protection and feature scratch-resistant coating for added durability. Ideal for city dwellers and modern trendsetters, this pair blends perfectly into both casual and formal settings. Lightweight and balanced, it ensures maximum comfort throughout the day. Urban Mirage — because sometimes, illusions look better than reality.",
  },
  {
    id: "5",
    title: "Tropic Breeze",
    price: "$184",
    description: "Bronze-tone frame with green lenses",
    image: "/assets/images/a5.webp",
    text: "Tropic Breeze transports you to sun-soaked shores with its bronze-tone frame and vibrant green lenses. The earthy hues evoke tropical vibes, making it a summer essential. The lenses are polarized for reduced glare and enhanced visual depth, perfect for outdoor lovers. A gentle curvature and adjustable components ensure a custom fit. Whether you're by the pool or exploring nature, these aviators deliver style and clarity. Tropic Breeze is more than eyewear — it’s a vacation for your eyes.",
  },
  {
    id: "6",
    title: "Jetstream Blue",
    price: "$324",
    description: "Steel frame with ice-blue cool finish",
    image: "/assets/images/a6.webp",
    text: "Jetstream Blue is the epitome of precision and cool sophistication. With a sleek steel frame and icy blue reflective lenses, this model exudes power and control. Ideal for high-intensity environments or statement-making entrances, it's engineered for performance and luxury. Anti-fog and anti-glare coatings make it practical for all conditions. The fit is ergonomically balanced to provide security even in active situations. Jetstream Blue is the choice of aviators, racers, and urban explorers who never slow down.",
  },
];

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function loadProduct() {
  const productId = getProductIdFromURL();
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  document.getElementById("product-title").textContent = product.title;

  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById("product-text").textContent = product.text;
  document.getElementById("product-image").src = product.image;
}

document.addEventListener("DOMContentLoaded", loadProduct);
