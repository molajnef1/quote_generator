let apiQuotes = [];



// Get quotes from API

async function  getQuotes()
{
    const api_url = 'https://type.fit/api/quotes';
    try
    {
        const response = await fetch(api_url);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        

    }catch(error){
        console.log("error:" + error);
    }
}

// On Load

getQuotes();