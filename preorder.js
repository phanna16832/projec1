information = () => {
    var info = document.getElementById("info");
    var result = document.getElementById("result");
    var selectedOption = info.options[info.selectedIndex].text;

    // Create a new <span> element for styling the text
    var styledText = document.createElement("span");
    styledText.style.color = "#ff00ff";

    var text = "ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន \n ចំពោះសេវាជួយទិញគឺមិនមានការបង្រួមកញ្ចប់ទំនិញទេបង";

    // Append the styled text to the result element
    styledText.innerHTML = text;
    result.innerHTML = "";  // Clear previous content
    result.appendChild(styledText);
}
