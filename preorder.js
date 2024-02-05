function search() {
    // Get the search input value
    var searchTerm = document.getElementById('search').value;

    // Simulate search results (you can replace this with your actual search logic)
    var results = [
        { title: 'ស្បែកជើង', imgSrc: 'pr1.jpg', file:"", text:"ស្បែកជើងស្រោះស្អាតតម្លៃត្រឹម8$"},
        { title: 'Product 2', text: 'Description for Product 2', imgSrc: 'product2.jpg' },
        { title: 'Product 3', text: 'Description for Product 3', imgSrc: 'product3.jpg' },
    ];

    // Display search results
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    var matchingResults = results.filter(function(result) {
        return result.title.includes(searchTerm);
    });

    if (matchingResults.length === 0) {
        resultsContainer.innerHTML = 'មិនមានលទ្ធផលស្វែងរកដែលត្រូវនោះ';
    } else {
        matchingResults.forEach(function (result) {
            // Create elements for each result
            var resultDiv = document.createElement('div');
            var titleElement = document.createElement('h3');
            var textElement = document.createElement('p');
            var imgElement = document.createElement('img');
            imgElement.style.width = "160px";
            textElement.style.color = "#0c7b96";
            textElement.style.textAlign = "center";
            // Set content and attributes
            titleElement.textContent = result.title;

            if (result.text) {
                textElement.textContent = result.text;
                resultDiv.appendChild(textElement);
            }

            imgElement.src = result.imgSrc;
            imgElement.alt = result.title;

            // Append elements to the result container
            resultDiv.appendChild(titleElement);
            resultDiv.appendChild(imgElement);

            // Append result container to the overall results container
            resultsContainer.appendChild(resultDiv);
        });
    }
}


information = () => {
    var info = document.getElementById("info");
    var result = document.getElementById("result");
    var selectedOption = info.options[info.selectedIndex].text;
    text.style.color = "#ff00ff";

    text = "ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន \n ចំពោះសេវាជួយទិញគឺមិនមានការបង្រួមកញ្ចប់ទំនិញទេបង"
    result.innerHTML = text;
}