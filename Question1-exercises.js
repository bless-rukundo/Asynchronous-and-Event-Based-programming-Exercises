const data = {
  products: [
    { id: 1, name: "Laptop", categoryId: 10 },
    { id: 2, name: "Mouse", categoryId: 10 },
    { id: 3, name: "Phone", categoryId: 20 },
    { id: 4, name: "Headphones", categoryId: 20 },
    { id: 5, name: "Keyboard", categoryId: 10 }
  ],
  categories: [
    { id: 10, name: "Computers" },
    { id: 20, name: "Mobile" }
  ]
};

function getProduct(id) {
  const product = data.products.find(p => p.id === id);
  if (!product) throw new Error("Product not found");
  return Promise.resolve(product);
}

function getCategory(categoryId) {
  const category = data.categories.find(c => c.id === categoryId);
  if (!category) throw new Error("Category not found");
  return Promise.resolve(category);
}

function getProductsByCategory(categoryId) {
  const products = data.products.filter(p => p.categoryId === categoryId);
  if (products.length === 0) throw new Error("No products found");
  return Promise.resolve(products);
}

async function main(){
    try{
        const products = await getProduct(1);
        console.log("User Id: ", products.id)
        const categories  = await getCategory(products.categoryId)
        console.log(categories)
        const allproducts = await getProductsByCategory(products.categoryId)
        console.log(allproducts)
    }catch(error){
        console.log(error)
    }
}

main()