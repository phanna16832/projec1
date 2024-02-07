document.getElementById('addressForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the values of name, phone, and address inputs
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;

  // Concatenate the name, phone, and address into a single string
  var fullAddress = "ឈ្មោះ: " + name + ", លេខទូរស័ព្ទ: " + phone + ", អាស័យដ្ឋាន: " + address;

  // Update the content of the 'show' element with the full address
  var show = document.getElementById('show');
  show.textContent = fullAddress;

  // Apply the text color style to the 'show' element
  show.style.color = '#8a42f5';
  // You can do more here like sending the data to a server using AJAX
});
