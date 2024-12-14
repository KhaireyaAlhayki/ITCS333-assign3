
//The url to retrieve data from 
const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100"

// Function to retrieve data from the API
async function retrieveData () {
  try {
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok || response.status !==200){
      console.error("Response not fetched successfully, status:", response.status);
    }
    
    const data = await response.json();
    console.log('data', data);

    display(data.results)

  } catch (error) {
    // Handle errors during data fetching or processing
    console.error('Error: ', error);
  }
}

// Function to display the results in the table
function display(results){
  const tableBody = document.getElementById('table-body');

  // Loop through each result and create a new table row for it.
  results.forEach(result => {
    const row= document.createElement('tr')
    row.innerHTML = `
         <td>${result.year} </td>
         <td>${result.semester} </td>
         <td>${result.the_programs} </td>
         <td>${result.nationality} </td>
         <td>${result.colleges} </td>
         <td>${result.number_of_students} </td>
     ` 
    tableBody.appendChild(row)
  });

  console.log("Data successfully displayed in table.");

}

// Event listener to fetch data when the page is loaded
document.addEventListener('DOMContentLoaded', retrieveData);
