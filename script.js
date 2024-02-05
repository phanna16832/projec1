document.addEventListener("DOMContentLoaded", function () {
    var searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', performSearch);
});

function performSearch(event) {
    event.preventDefault();

    var searchInputValue = document.getElementById('searchInput').value.toLowerCase();

    if (searchInputValue.trim() !== '') {
        var data = [
            { title: "address , អាស័យដ្ឋាន , 收货地址", file: "address.html" },
            { title: "ស្បែកជើង  , shoe , 鞋子", img: "pr1.jpg", text: "lorem" },
            { title: "", img: "tb.jpg" },
            { title: "", text: " ", file: "" }
            // Add more results as needed
        ];

        var filteredResults = data.filter(result => result.title.toLowerCase().includes(searchInputValue));
        displayResults(filteredResults);
    } else {
        clearResults();
    }
}

function displayResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    results.forEach(result => {
        var resultItem = document.createElement('div');
        resultItem.innerHTML = `<h3>${result.title}</h3>`;

        if (result.img) {
            var imgElement = document.createElement('img');
            imgElement.src = result.img;
            imgElement.style.width = "170px";
            imgElement.style.marginBottom = "2%";
            imgElement.style.margin = "0 auto"; // Center horizontally
            resultItem.appendChild(imgElement);
        }

        if (result.text) {
            var textElement = document.createElement('p');
            textElement.style.color = "pink";
            textElement.textContent = result.text;
            resultItem.appendChild(textElement);
        }

        if (result.file) {
            var detailsLink = document.createElement('a');
            detailsLink.href = result.file;
            detailsLink.textContent = 'View Details';
            detailsLink.classList.add('details-link');
            resultItem.appendChild(detailsLink);
        }

        // Applying global styles to the entire resultItem
        resultItem.style.color = "blue";
        searchResultsContainer.appendChild(resultItem);
    });
}

function clearResults() {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
}
