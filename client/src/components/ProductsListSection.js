function ProductsListSection(id) {
  const productsArray = [
    {
        id: "prod_Qbl5Ay66bO8NuW",
        image: "https://as1.ftcdn.net/v2/jpg/04/83/25/50/1000_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg",
        title: "Ethically Sourced Jeans",
        description: "This is a description of the jeans.",
        price: 49.99
    },
    {
        id: "prod_Qbl8Bn9tzdQAPg",
        image: 'https://as2.ftcdn.net/v2/jpg/07/35/03/77/1000_F_735037764_GiwFFxqulLwR9DNhlyiL8P15Y8ZQTVml.webp',
        title: "Ethically Sourced Shirt",
        description: "This is a description of the shirt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ex sed tortor lacinia bibendum. Proin eros velit, auctor ut eros quis, pretium malesuada urna. Ut eu metus non est hendrerit accumsan.",
        price: 39.99
    },
    {
        id: "prod_Qbl8FqeZQ6WI5c",
        image: 'https://as1.ftcdn.net/v2/jpg/02/68/00/30/1000_F_268003032_PYDU5gcLWsTAFSN2mnYO2CN8fw1dUBBj.jpg',
        title: "Ethically Sourced Sunglasses",
        description: "This is a description of the sunglasses. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ex sed tortor lacinia bibendum. Proin eros velit, auctor ut eros quis, pretium malesuada urna. Ut eu metus non est hendrerit accumsan.",
        price: 9.99
    }
  ]

    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Data does not exist.");
    }
    return productData;
}

export default ProductsListSection;