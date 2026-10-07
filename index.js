let products = [
    "iPhone 1",
    "iPhone 4",
    "iPhone 4S",
    "iPhone 5",
    "iPhone 5C",
    "iPhone 5S",
    "iPhone 6",
    "iPhone 6 Plus",
    "iPhone 6S",
    "iPhone 7",
    "iPhone 7 Plus",
    "iPhone 8",
    "iPhone 8 Plus",
    "iPhone X",
    "iPhone XR",
    "iPhone XS",
    "iPhone XS Max",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "iPhone 12",
    "iPhone 12 mini",
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",
    "iPhone 13",
    "iPhone 13 mini",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 14",
    "iPhone 14 Plus",
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",
    "iPhone 15",
    "iPhone 15 Plus",
    "iPhone 15 Pro",
    "iPhone 15 Pro Max",
    "iPhone 16",
    "iPhone 16 Plus",
    "iPhone 16 Pro",
    "iPhone 16 Pro Max",
    "iPhone 17",
    "iPhone 17 Pro",
    "iPhone 17 Pro Max",
    "iPhone 18",
    "iPhone 18 Pro",
    "iPhone 18 Pro Max"
];

function searchProducts() {
    let input = document.getElementById("searchInput");
    let resultsDiv = document.getElementById("results");

    let query = input.value.trim();

    if (query === "") {
        resultsDiv.innerHTML = "";
        return;
    }

    let filteredResults = products.filter(function(product) {
        return product.toLowerCase().includes(query.toLowerCase());
    });

    if (filteredResults.length === 0) {
        resultsDiv.innerHTML = "";
        return;
    }

    let listItems = filteredResults.map(function(product) {
        return `<li onclick="selectProduct(this)">${product}</li>`;
    });

    let content = `<ul>${listItems.join("")}</ul>`;
    resultsDiv.innerHTML = content;
}

function selectProduct(li) {
    let input = document.getElementById("searchInput");
    let resultsDiv = document.getElementById("results");

    input.value = li.textContent;
    resultsDiv.innerHTML = "";
}