//When the button#quote_btn is clicked, go to api.kanye.rest to get the quote
//Use the response from the api to populate the p#kanye_quote

document.getElementById("myKayneBtn").addEventListener("click", () => {
    const apiUrl = "https://api.kanye.rest/"
  

  
    // const response = await fetch(apiUrl);  // put async in the ("click", async () => {}
    // const data = await response.json();
  
    fetch(apiUrl).then(function(response){
      return response.json();
    })
    .then(function (data){
      document.getElementById("kanye_quote").innerText = data.quote;
    });
  
    // console.log("Carl");
    // if (kanyeQuote){
    //   document.getElementById("kanye_quote").innerText = quote;
    // }
  });