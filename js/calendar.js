// Function to display the booking calendar
function displayBookingCalendar() {
  console.count("displayBookingCalendar() called");
  // Get the calendar container element
  var calendarContainer = document.getElementById("calendarContainer");
  console.count("calendarContainer: " + calendarContainer);

  // Create a table element for the calendar
  var calendarTable = document.createElement("table");

  // Set up the table header
  var tableHeader = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (var i = 0; i < daysOfWeek.length; i++) {
    var headerCell = document.createElement("th");
    headerCell.textContent = daysOfWeek[i];
    headerRow.appendChild(headerCell);
  }
  tableHeader.appendChild(headerRow);

  // Set up the table body
  var tableBody = document.createElement("tbody");
  for (var week = 0; week < 5; week++) {
    var bodyRow = document.createElement("tr");
    for (var day = 0; day < 7; day++) {
      var bodyCell = document.createElement("td");
      bodyCell.textContent = (week * 7 + day + 1).toString();
      bodyRow.appendChild(bodyCell);
    }
    tableBody.appendChild(bodyRow);
  }

  // Append the table header and body to the calendar table
  calendarTable.appendChild(tableHeader);
  calendarTable.appendChild(tableBody);

  // Append the calendar table to the calendar container
  calendarContainer.appendChild(calendarTable);
}

// Call the function to display the booking calendar
displayBookingCalendar();