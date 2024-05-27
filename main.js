function amazonAnalysis(amazon) {
    // Step 1: Print the names and ratings of all products
    console.log("Names and Ratings of all Products:");
    amazon.forEach(product => console.log(`Name: ${product.name}, Rating: ${product.rating}`));

    // Step 2: Calculate and print the average rating
    const totalRatings = amazon.reduce((acc, product) => acc + product.rating, 0);
    const averageRating = totalRatings / amazon.length;
    console.log(`Average Rating: ${averageRating.toFixed(2)}`);

    // Step 3: Identify and print the name of the product with the minimum price
    const minPriceProduct = amazon.reduce((min, product) => product.price < min.price ? product : min, amazon[0]);
    console.log(`Product with Minimum Price: ${minPriceProduct.name}`);
}

// Example input
var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"Headphones", price:3000, rating:3},
    {name:"PlayStation",price:20000, rating:5}
];

// Call the function with the amazon array
amazonAnalysis(amazon);
