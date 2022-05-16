                
  

document.addEventListener("click", function(event) {

    if (!event.target.matches("#button"))
    return;
     
    let userInput = document.getElementById("user-search").value.trim();

  
    
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${userInput}&per_page=10`)
    .then((response) => response.json())
    .then((data) => breweryList(data));
    
    });
    
    
    function breweryList(data) {
    
    const breweryInfo = document.getElementById("breweries")

 

    for(i = 0; i < data.length; i++){

    
    
    breweryInfo.innerHTML += `<div class = "brewery-info">
                    <h3>${data[i].name}</h3>
                    <p>${data[i].street}</p>
                    <p>${data[i].city}</p>
                    <p>${data[i].state}</p>
                    <p>${data[i].website_url}</p>`
    
    
    } 
} 

