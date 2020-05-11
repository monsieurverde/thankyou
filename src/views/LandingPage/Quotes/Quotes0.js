let state = {
    apiResult: null,
    author: 'b',
    text: q,
    isLoaded: false,
    bgColor: '#000000',
    clickCount: 0,
  };
    let setState = {}
    let chosenQuote = []
    let randomNumber = Math.floor((Math.random() * responseData.quotes.length) + 1)
    let q = fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then((responseData) => {
        let quotes = responseData.quotes;
    
        quotes.forEach(function(element, index) {
          if(index === randomNumber) {
            chosenQuote.push(element)
          }
        })
        let setState = ({
          text:chosenQuote[0].quote,
          author:chosenQuote[0].author
        })
      }
   

      <div id="quote-box">
          <p id="text">{state.text}</p>
          <p id="author">{state.author}</p>
        </div>
         
//  return("newer");
//   //console.log("set state = " + JSON.stringify(quotes));
//  quotes.forEach(function(element, index) {
//    if(index === randomNumber) {
//      chosenQuote.push(element)
//    }
//  })
//  state.text = 'new'
//  const setState=({
//    text:chosenQuote[0].quote,
//    author:chosenQuote[0].author,
//  })
//   })
//   .catch(error => this.setState({ error })
//   
//   );
    
  

// const generateQuote = () => {
//   const chosenQuote = [];
//   const quotes = setState;
//   //let randomNumber = Math.floor((Math.random() * state.apiResult.length) + 1);
//   let randomNumber = 1;
//  console.log("set state = " + JSON.stringify(setState));
//   quotes.forEach(function(element, index) {
//     if(index === randomNumber) {
//       chosenQuote.push(element)
//     }
//   })
//   state.text = 'new'
//   const setState=({
//     text:chosenQuote[0].quote,
//     author:chosenQuote[0].author,})
