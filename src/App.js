import { useEffect, useState } from 'react';
import './App.css';
import QuoteBox from './QuoteBox.js';
import style from './quotebox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare  } from '@fortawesome/free-brands-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const App = () => {

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  
  const [color, setColor] = useState('#16a085')
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  let tweet = "https://twitter.com/intent/tweet?text=" + quote;
  console.log(tweet);

    useEffect((e) => {
    getQuote();
  },[]) 

  
 
const getQuote = () => {
  
  setColor(colors[Math.floor(Math.random() * 10)]);

  fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "6aa839a99bmsha3e0b904671f325p140a6cjsnee24c95e0b35"
	}
})
.then(response => {
  console.log(response);
  return response.json();
})
.then(data => {
  console.log(data);
  setQuote(data.content);
  setAuthor(data.originator.name)
})
.catch(err => {
	console.error(err);
});
}

  return (
    <body className='whole' style={{backgroundColor: color}}>
    <div className={style.quotebox}>
      <div className={style.top}>
           <FontAwesomeIcon className='quoteIcon' style={{color: color, fontSize: '45px'}} icon={faQuoteLeft}></FontAwesomeIcon>
            <p style={{color: color}}>{quote}</p>
            <p style={{color: color, fontSize: '14px'}} className='author'>{author}</p>
            </div>
            <div className={style.bottom}>
              <div className={style.icons}>
            <Tippy content="Post this on Facebook">
              <div>
            <FontAwesomeIcon style={{color: color, marginRight: '5px', cursor: 'pointer'}} icon={faFacebookSquare}></FontAwesomeIcon>
            </div>
            </Tippy>
            <Tippy content="Post this quote on Twitter">
              <div>
              <a class="twitter-share-button" href={tweet}>
            <FontAwesomeIcon style={{color: color, cursor: 'pointer'}} icon={faTwitterSquare}></FontAwesomeIcon>
            </a>
            </div>
            </Tippy>
            </div>
            <button style={{backgroundColor: color}} type='submit' onClick={getQuote}>New quote</button>
            </div>
    </div>
    </body>
  );
};

export default App;
