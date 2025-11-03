/***** BRAND INFO *****/
const BRAND = {
  name: "QIAN",
  whatsapp: "+3381635272",
  email: "test@gmail.com",
  tracking: "http://217.145.72.164/"
};

/***** CATEGORIES (menu order) *****/
const CATEGORIES = [
  "t-shirts",
  "shoes",
  "sweaters",
  "pants",
  "shorts",
  "jackets",
  "sports(tracksuit)",
  "cashs",
  "vapes",
  "electronics",
  "accessories"
];

// CATALOGUE 
const CATALOG = {
  "t-shirts": {
    "Acne Studios": [
      "t-shirt/acne/0d53782a.webp",
      "t-shirt/acne/53c739f3.webp",
      "t-shirt/acne/a0a8500b.webp",
      "t-shirt/acne/a3acb4e5.webp",
      "t-shirt/acne/df28a2c0.webp",
      "t-shirt/acne/f05d0a03.webp",
    ],
    "Ami": [
      "t-shirt/ami/2fecb7dc.webp"
    ],
    "Chrome Hearts": [
        "t-shirt/chromeH/6f230c0d.webp",
    ],
    "CP Company": [
        "t-shirt/cp/e512f753.webp",
        "t-shirt/cp/image_64.webp",

    ],
    "Nike": [
        "t-shirt/nike/2b4927e6.webp",
        "t-shirt/nike/573f2b9c.webp",

        

    ],
    "Nocta": [
        "t-shirt/nocta/8a881d2a.webp",

    ],
    "Parajumpers": [
        "t-shirt/pjs/05200086.webp",
    ],
    "Ralph Lauren": [
        "t-shirt/Ralph/2cbe69e9.webp",
        "t-shirt/Ralph/3d12fa85.webp",
        "t-shirt/Ralph/6d71cd7c.webp",
        "t-shirt/Ralph/16a92350.webp",
        "t-shirt/Ralph/19cde006.webp",
        "t-shirt/Ralph/33a4e0c9.webp",
        "t-shirt/Ralph/41bd3cd0.webp",
        "t-shirt/Ralph/60e9c16c.webp",
        "t-shirt/Ralph/549e03c0.webp",
        "t-shirt/Ralph/793eafd9.webp",
        "t-shirt/Ralph/6343b02e.webp",
    ],
    "Stone Island": [
        "t-shirt/stone island/image_63.webp",
    ],
    "Stussy": [
        "t-shirt/stussy/03f4a70a.webp", 
        "t-shirt/stussy/6dd1157d.webp", 
        "t-shirt/stussy/9c5d675d.webp", 
        "t-shirt/stussy/63b0585a.webp",
         "t-shirt/stussy/40863599.webp", 
         "t-shirt/stussy/73d20fd1.webp",
         "t-shirt/stussy/ad708c0a.webp", 
         "t-shirt/stussy/d26053c5.webp ",
         "t-shirt/stussy/e642e792.webp",

    ]
  },











  "shoes": {

    "Adidas": [
    "shoes/adidas/99887136.webp",
    "shoes/adidas/image_24.webp",
    "shoes/adidas/image_25.webp"
  ],
  "Alexander McQueen": [
    "shoes/alexander-mcq/image.webp"
  ],
  "Asics": [
    "shoes/asics/image2_34.webp",
    "shoes/asics/image_28.webp",
    "shoes/asics/image_29.webp",
    "shoes/asics/image_30.webp",
    "shoes/asics/image_31.webp",
    "shoes/asics/image_32.webp",
    "shoes/asics/image_33.webp",
    "shoes/asics/image_34.webp",
    "shoes/asics/image_35.webp",
    "shoes/asics/image_36.webp",
    "shoes/asics/image_37.webp",
    "shoes/asics/image_38.webp",
    "shoes/asics/image_39.webp",
    "shoes/asics/image_50.webp",
    "shoes/asics/image_57.webp",
    "shoes/asics/image_58.webp"
  ],
  "Balenciaga": [
    "shoes/balenciaga/image_7.webp"
  ],
  "Bape": [
    "shoes/bapes/image_54.webp"
  ],
  "Birkenstock": [
    "shoes/birkenstock/80506315.webp",
    "shoes/birkenstock/a164febf.webp"
  ],
  "Dior": [
    "shoes/dior/djdjd.png",
    "shoes/dior/imagde.png",
    "shoes/dior/image.png",
    "shoes/dior/jddjd.png",
    "shoes/dior/jlxùx.png",
    "shoes/dior/jzla.png",
    "shoes/dior/ldknx.png",
    "shoes/dior/lksw.png",
    "shoes/dior/lqha.png",
    "shoes/dior/lqjq.png",
    "shoes/dior/lslss.png",
    "shoes/dior/mljx.png",
    "shoes/dior/mlsjw.png",
    "shoes/dior/mlssw.png",
    "shoes/dior/mlsw.png",
    "shoes/dior/mmmq.png",
    "shoes/dior/nlkdx.png",
    "shoes/dior/nslknx.png"
  ],
  "Fendi": [
"shoes/fendi/cb41727c.webp", 
"shoes/fendi/1842859d.webp", 
"shoes/fendi/91165efe.webp",
"shoes/fendi/7c41c1f5.webp",
  ],
  "Golden Goose": [
    "shoes/golden_goose/9327ed0b.webp",
    "shoes/golden_goose/e5b0651b.webp",
    "shoes/golden_goose/image_3.webp",
    "shoes/golden_goose/ss.webp"
  ],
  "Hermès": [
    "shoes/hermes/image_5.webp"
  ],
  "Jordan": [

    "shoes/jordan/image_55.webp", 
    "shoes/jordan/image_40.webp",
  ],


  "Lanvin": [
    "shoes/lanvin/image_9.webp",
  ],



  "Loro Piana": [
   "shoes/lora_piano/aee5d8d6.webp",
    "shoes/lora_piano/image_1.webp",
  ],



  "Louis Vuitton": [
"shoes/louisvuitton/image_8.webp", 
"shoes/louisvuitton/e62b3dc4.webp", 
"shoes/louisvuitton/ca582fda.webp", 
"shoes/louisvuitton/354a26f1.webp ",
  ],
  "Maison Mihara": [
"shoes/maison_myara/image_59.webp", 
 ],


 "Nike": [
    "shoes/nike/0a39fd6a.webp",
    "shoes/nike/0d84f4c5.webp",
    "shoes/nike/1dfd000f.webp",
    "shoes/nike/2dbfb473.webp",
    "shoes/nike/4c6a01aa.webp",
    "shoes/nike/7b48c8d9.webp",
    "shoes/nike/7db501cf.webp",
    "shoes/nike/16f1a1e1.webp",
    "shoes/nike/35a540e7.webp",
    "shoes/nike/77c89289.webp",
    "shoes/nike/589dda0b.webp",
    "shoes/nike/1291b69c.webp",
    "shoes/nike/589088bd.webp",
    "shoes/nike/44293713.webp",
    "shoes/nike/b550224b.webp",
    "shoes/nike/baf96c51.webp",
    "shoes/nike/d579c849.webp",
    "shoes/nike/e4ca81e2.webp",
    "shoes/nike/f6cc3b14.webp",
    "shoes/nike/image_10.webp",
    "shoes/nike/image_11.webp",
    "shoes/nike/image_12.webp",
    "shoes/nike/image_13.webp",
    "shoes/nike/image_41.webp",
    "shoes/nike/image_42.webp",
    "shoes/nike/image_43.webp",
    "shoes/nike/image_44.webp",
    "shoes/nike/image_45.webp",
    "shoes/nike/image_46.webp",
    "shoes/nike/image_47.webp",
    "shoes/nike/image_48.webp",
    "shoes/nike/image_49.webp",
    "shoes/nike/image_53.webp",
    "shoes/nike/image_60.webp",
    "shoes/nike/image_61.webp",
    "shoes/nike/image_62.webp",
  ],
  "prada" : [
    "shoes/prada/image_2.webp",
  ],
  "off_white" : [
    "shoes/off_white/image_6.webp",

  ],

  "margiela" : [
    "shoes/margiela/image.png", 
    "shoes/margiela/kjx.png",
     "shoes/margiela/lskjx.png",


  ],
  "the_north_face" : [
    "shoes/the_north_face/image_56.webp",
  ],
  "valentino" : [
    "shoes/valentino/6a26150a.webp",

  ],
  "New Balance": [
  "shoes/new_balance/f25cfd94.webp",
  "shoes/new_balance/image_14.webp",
  "shoes/new_balance/image_15.webp",
  "shoes/new_balance/image_16.webp",
  "shoes/new_balance/image_17.webp",
  "shoes/new_balance/image_18.webp",
  "shoes/new_balance/image_19.webp",
  "shoes/new_balance/image_20.webp",
  "shoes/new_balance/image_21.webp",
  "shoes/new_balance/image_22.webp",
  "shoes/new_balance/image_23.webp"
],


  },










"sweaters": {
  "Ami Paris": [
    "pull/ami/wvxc.png", 
    "pull/ami/wvcw.png",
    "pull/ami/kdkdk.png",
     "pull/ami/f51b08d2.png", 
     "pull/ami/cefaccfe.png",
      "pull/ami/41acc476.png",
      "pull/ami/22ff85ab.png",
       "pull/ami/7cf2fa8d.png",
  ],
  "Comme des Garçons": [
    "pull/cdg/image.png",
    "pull/cdg/kj.png",
    "pull/cdg/kjh.png"
  ],
  "CP Company": [
    "pull/cp/image.png", 
    "pull/cp/kkddk.png", 
    "pull/cp/ldld.png", 
    "pull/cp/mdls.png",
     "pull/cp/mkjdq.png",
  ],
  "Lacoste": [
    "pull/lacoste/127ffb44.png",
    "pull/lacoste/cd60e635.png",
    "pull/lacoste/fb927b32.png",
    "pull/lacoste/mldwxw.png",
    "pull/lacoste/sss.png",
  ],
  "Moncler": [
    "pull/moncler/08c81c0b.png",
    "pull/moncler/b3cd1c70.png",
    "pull/moncler/cf4f8bd2.png",
  ],
  "Nike": [
    "pull/nike/ss.png",
     "pull/nike/szfsfd.png", 
     "pull/nike/wxvwvx.png", 
     "pull/nike/wxvwx.png",
  ],
  "Parajumpers": [
    "pull/pjs/image.png"
  ],
  "Ralph Lauren": [
    "pull/ralph/1.png",
    "pull/ralph/3.png",
    "pull/ralph/4.png",
    "pull/ralph/image.png",
    "pull/ralph/image2.png",
    "pull/ralph/image3.png",

  ],
  "Stone Island": [
    "pull/stone/dldld.png",
    "pull/stone/image.png",
    "pull/stone/kjdq.png",
    "pull/stone/ldldl.png",
    "pull/stone/leleldl.png",
    "pull/stone/lkd.png",
    "pull/stone/lsdkf.png",
    "pull/stone/sf.png"
  ],
  "Stüssy": [
    "pull/stussy/image.png",
    "pull/stussy/lddj.png"
  ]
},

"pants": {
    "CP Company": [
      "pants/cp/image.png"
    ],
    "Nike": [
      "pants/nike/bxbs.png",
      "pants/nike/bxxbs.png",
      "pants/nike/hshs.png",
      "pants/nike/hxhx.png",
      "pants/nike/image.png"
    ],
    "Ralph Lauren": [
      "pants/ralph/ii.png",
      "pants/ralph/image.png"
    ],
    "Stone Island": [
      "pants/stone/imadge.png",
      "pants/stone/image.png",
      "pants/stone/jjj.png",
      "pants/stone/vvs.png"
    ]

  },



  "shorts": {
    "Ami Paris": [
    "short/ami/cde24cf7.webp",
    "short/ami/e9c19502.webp"
  ],
  "Fendi": [
    "short/fendi/5fba300d.webp",
    "short/fendi/6efb9065.webp",
    "short/fendi/37f8ab81.webp",
    "short/fendi/3653d835.webp"
  ],
  "Nike": [
    "short/nike/7d9644cd.webp"
  ],
  "Ralph Lauren": [
    "short/ralph/801c3919.webp",
    "short/ralph/bcf7ba3e.webp",
    "short/ralph/c447f63f.webp",
    "short/ralph/cafd14f4.webp"
  ],
  "Stone Island": [
    "short/stone/image_65.webp"
  ]
  },
  "jackets": {
     "Arcteryx": [
    "jacket/arterix/1.png",
    "jacket/arterix/image.png",
    "jacket/arterix/jj.png",
    "jacket/arterix/mlcd.png",
    "jacket/arterix/msq.png"
  ],
  "Canada Goose": [
    "jacket/canada_goose/image.png"
  ],
  "CP Company": [
    "jacket/cp/d.png",
    "jacket/cp/dcdwc.png",
    "jacket/cp/ds.png",
    "jacket/cp/dw.png",
    "jacket/cp/fd.png",
    "jacket/cp/imagde.png",
    "jacket/cp/image.png",
    "jacket/cp/ls.png",
    "jacket/cp/mlxw.png",
    "jacket/cp/mm.png",
    "jacket/cp/qqs.png",
    "jacket/cp/s.png",
    "jacket/cp/ssq.png",
    "jacket/cp/sss.png",
    "jacket/cp/sxc.png"
  ],
  "Moncler": [
    "jacket/monclere/image.png"
  ],
  "Nike": [
    "jacket/nike/image.png",
    "jacket/nike/s.png"
  ],
  "Parajumpers": [
    "jacket/pjs/cmlkx.png",
    "jacket/pjs/dw.png",
    "jacket/pjs/image.png",
    "jacket/pjs/jdmsw.png",
    "jacket/pjs/jds.png",
    "jacket/pjs/jsm.png",
    "jacket/pjs/kdx.png",
    "jacket/pjs/kx.png",
    "jacket/pjs/lkdx.png",
    "jacket/pjs/lkx.png",
    "jacket/pjs/lsmq.png"
  ],


  "Ralph Lauren": [
    "jacket/ralph/image.png"
  ],
  "Stone Island": [
    "jacket/stoneisland/d.png",
    "jacket/stoneisland/image.png"
  ],
  "The North Face": [
    "jacket/the_north_face/image.png",
    "jacket/the_north_face/imdage.png"
  ]
  },
  "sports(tracksuit)": {
    "sport" : [
    "sport(tracksuit)/8.png",
    "sport(tracksuit)/fhf.png",
    "sport(tracksuit)/fjsks.png",
    "sport(tracksuit)/fkkd.png",
    "sport(tracksuit)/image.png",
    "sport(tracksuit)/jdk.png",
    "sport(tracksuit)/kdkd.png",
    "sport(tracksuit)/kdl.png",
    "sport(tracksuit)/kdls.png",
    "sport(tracksuit)/kk.png",
    "sport(tracksuit)/kkdd.png",
    "sport(tracksuit)/kx.png",
    "sport(tracksuit)/ld.png",
    "sport(tracksuit)/lkf.png",
    "sport(tracksuit)/lkkkk.png",
    "sport(tracksuit)/lsk.png",
    "sport(tracksuit)/ss.png",
    "sport(tracksuit)/xd.png"
  ]
  },
  "electronics": {
    "electronics" : [
    "electronics/4ca8401b.png",
    "electronics/6ae81260.png",
    "electronics/9e850037.webp",
    "electronics/23eaafb2.webp",
    "electronics/45e0e678.png",
    "electronics/73b70748.png",
    "electronics/88ab0066.webp",
    "electronics/313f0e1c.webp",
    "electronics/719ea04c.png",
    "electronics/5058da60.png",
    "electronics/7684d608.png",
    "electronics/29068b18.png",
    "electronics/45009e42.png",
    "electronics/0837796d.webp",
"electronics/111111111111111.webp",
    "electronics/a4e621af.png",
    "electronics/bb2f2f2f.png",
    "electronics/fdf3a42b.webp"
  ]
  },


  "cashs": {
    "cash" : [
        "cash/imajjge.png", 
        "cash/image.png", 
        "cash/hhh.png",


    ]
  },


  "vapes": {
    "vape" : [
    "vapes/0cf02cf6.png",
    "vapes/4fe27d07.png",
    "vapes/6d0605a6.png",
    "vapes/8afb8642.png",
    "vapes/43e50144.png",
    "vapes/14352e96.png",
    "vapes/495496a8.png",
    "vapes/b2fd4d47.png",
    "vapes/be310073.png",
    "vapes/e5bf226d.png",
    "vapes/image.png",
    "vapes/imagxxe.png",
    "vapes/imxage.png",
    "vapes/kdj.png",
    "vapes/pslkwc.png",
    "vapes/xx.png"
  ]
    

  },
  "accessories": {



    "bag": [
"accessory/bag/1cb0aa8d.webp",
"accessory/bag/2fffc959.webp",
    "accessory/bag/3d0dba51.webp",
"accessory/bag/9edef30e.webp",
    "accessory/bag/284fe28f.webp",
    "accessory/bag/9118fe60.webp",
    "accessory/bag/94121b17.webp"
  ],
  "bracelet": [
"accessory/bracelet/57fa3c8b.webp",
    "accessory/bracelet/826a02b4.webp",
    "accessory/bracelet/923df288_1.webp",
"accessory/bracelet/74997d0d.webp",
    "accessory/bracelet/b45acaa4.webp",
    "accessory/bracelet/b2568692.webp"
  ],
  "cap": [
"accessory/cap/9aa54afa.webp",
    "accessory/cap/555555.webp",
    "accessory/cap/cd0547e7.webp"
  ],
  "coin_purse": [
    "accessory/coin_purse/4a17f9e2.webp",
    "accessory/coin_purse/3473ce22.webp"
  ],
  "perfum": [
    "accessory/perfum/0f7c448c.webp",
    "accessory/perfum/34e5e1a3.webp",
    "accessory/perfum/26820392.webp"
  ],
  "underwear": [
"accessory/underwear/5ff18ea0.png", 
 ],
  "watch": [
    "accessory/watch/3ab2a22f.webp",
"accessory/watch/76a330d2.webp",
    "accessory/watch/159e152b.webp",
    "accessory/watch/3002a8bd.webp",
    "accessory/watch/d5a5bd4f.webp",
    "accessory/watch/image.png"
  ]
  },
};












function buildProductsByCategory(cat) {
  const byBrand = CATALOG[cat] || {};
  const list = [];
  Object.entries(byBrand).forEach(([brand, files]) => {
    files.forEach((path, i) => {
      list.push({
        id: `${cat}-${brand}-${i}`,
        title: `${brand} ${labelFromCategory(cat)} #${i + 1}`,
        brand,
        category: cat,
        img: path
      });
    });
  });
  return list;
}

function labelFromCategory(cat) {
  switch (cat) {
    case "t-shirts": return "T-Shirt";
    case "shoes": return "Shoes";
    case "sweaters": return "Sweater";
    case "pants": return "Pants";
    case "shorts": return "Shorts";
    case "jackets": return "Jacket";
    case "sports(tracksuit)": return "sport(tracksuit)";
    case "cashs" : return "cash";
    case "vapes" : return "vape";
    case "electronics": return "Item";
    case "accessories": return "Accessory";
    default: return "Item";
  }
}

function waOrderLink(text) {
  const phone = BRAND.whatsapp.replace(/[^\\d]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

let activeCategory = "t-shirts";
let searchQuery = "";
let selectedBrand = "all";
let sortMode = "featured";

const grid = document.getElementById("grid");
const emptyState = document.getElementById("emptyState");
const brandFilter = document.getElementById("brandFilter");
const sortBy = document.getElementById("sortBy");
const searchInput = document.getElementById("search");
const menu = document.getElementById("mainMenu");

menu.addEventListener("click", (e) => {
  const btn = e.target.closest(".menu-link");
  if (!btn) return;
  document.querySelectorAll(".menu-link").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  setCategory(btn.dataset.cat);
});

function setCategory(cat) {
  activeCategory = cat;
  renderBrandOptions();
  applyFilters();
}

function renderBrandOptions() {
  const brands = CATALOG[activeCategory] ? Object.keys(CATALOG[activeCategory]) : [];
  const hasBrands = brands.length > 0;
  brandFilter.innerHTML = hasBrands
    ? `<option value="all">All brands</option>` + brands.map(b => `<option value="${b}">${b}</option>`).join("")
    : `<option value="all">All brands</option>`;
  selectedBrand = "all";

}

function getVisibleProducts() {
  const all = buildProductsByCategory(activeCategory);
  let filtered = all;

  if (selectedBrand !== "all") {
    filtered = filtered.filter(p => p.brand === selectedBrand);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    );
  }

  if (sortMode === "az") filtered.sort((a,b)=>a.title.localeCompare(b.title));
  if (sortMode === "za") filtered.sort((a,b)=>b.title.localeCompare(a.title));
  return filtered;
}

function renderGrid(items) {
  if (items.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  grid.innerHTML = items.map(p => `
    <article class="card">
      <div class="card-img" style="background-image:url('${p.img}')"></div>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-meta">${p.brand} · ${labelFromCategory(p.category)}</div>
        <span class="badge">Premium</span>
      </div>
      <div class="card-actions">
        <a class="btn btn-primary" target="_blank"
           href="${waOrderLink(`Hello, I want ${p.title}`)}">Order via WhatsApp</a>
      </div>
    </article>
  `).join("");
}

/***** APPLY *****/
function applyFilters() {
  const items = getVisibleProducts();
  renderGrid(items);
}

/***** EVENTS *****/
brandFilter.addEventListener("input", () => { selectedBrand = brandFilter.value; applyFilters(); });
sortBy.addEventListener("input", () => { sortMode = sortBy.value; applyFilters(); });
searchInput.addEventListener("input", () => { searchQuery = searchInput.value; applyFilters(); });

/***** INIT *****/
renderBrandOptions();
applyFilters();
