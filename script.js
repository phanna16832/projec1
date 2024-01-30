 // Add an event listener for the Enter key in the search input
 document.getElementById('search').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        performSearch(event);
    }
});

document.getElementById('searchButton').addEventListener('click', performSearch);

function performSearch(event) {
    event.preventDefault();

    var searchInputValue = document.getElementById('search').value.toLowerCase();

    if (searchInputValue.trim() !== '') {
        var data = [
            { title: "ah smos", text: "kal ban jes sava", file:"#" },
            { title: "", file: "" },
            { title: "", file: "", img: "" },
            { title: "", text: "", file: "#" }
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

    if (results.length > 0) {
        results.forEach(result => {
            var resultItem = document.createElement('div');
            resultItem.innerHTML = `<h3>${result.title}</h3>`;

            if (result.img) {
                var imgElement = document.createElement('img');
                imgElement.src = result.img;
                resultItem.appendChild(imgElement);
            }

            if (result.text) {
                var textElement = document.createElement('p');
                textElement.textContent = result.text;
                resultItem.appendChild(textElement);
            }

            var detailsLink = document.createElement('a');
            detailsLink.href = result.file;
            detailsLink.textContent = 'View Details';
            detailsLink.classList.add('details-link');
            resultItem.appendChild(detailsLink);

            searchResultsContainer.appendChild(resultItem);
        });
    } else {
        // Display a message when no results are found
        searchResultsContainer.innerHTML = '<p>គ្មានទិន្នន័យដែលស្វែងរក<p>';
    }
}

function clearResults() {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
}

test1 = () =>{
var result = document.getElementById("result");
const text = "I love u ❤️❤️❤️";

result.textContent = text;
}