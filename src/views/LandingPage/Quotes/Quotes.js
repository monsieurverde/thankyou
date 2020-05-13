import React, { Component } from 'react';


class Quotes extends Component {
    constructor(props) {
      super(props);
      this.state = {
        apiResult: null,
        author: '',
        text: '',
        isLoaded: false,
        bgColor: '#000000',
        clickCount: 0,
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.generateQuote();
    }
  
    componentDidMount() {
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
        headers: {
          Accept: "application/json",
        }
      })
      .then(response => response.json())
      .then((responseData) => {
        let randomNumber = Math.floor((Math.random() * responseData.quotes.length));
        
        this.setState({
          apiResult: responseData.quotes,
          isLoaded: true,
          author: responseData.quotes[randomNumber].author,
          text: responseData.quotes[randomNumber].quote,
          quotesArrayLength: responseData.quotes.length,
        });
      })
      .catch(error => this.setState({ error }));
    }
  
    generateQuote = () => {
      let randomNumber = Math.floor((Math.random() * this.state.apiResult.length) + 1);
      console.log("randomNumber"+this.state.apiResult.length);
      const chosenQuote = [];
      const quotes = this.state.apiResult;
      
  
      quotes.forEach(function(element, index) {
        if(index === randomNumber) {
          chosenQuote.push(element)
        }
      })
      this.setState({
        text:chosenQuote[0].quote,
        author:chosenQuote[0].author,
      })
    }
  
    render() {
      return (

        
        <div id="main">
        <style>
            {`
            :root {
              --main-txt-color: ${this.state.bgColor};
              }
            `}
          </style>
          <div id="quote-box">
            <h4 id="text">{this.state.text}</h4>
            <h4 id="author"> - {this.state.author}</h4>
          </div>
        </div>
      );
    }
  }
  
export default Quotes;