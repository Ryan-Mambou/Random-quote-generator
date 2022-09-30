import  {useEffect, useState} from 'react';

const QuoteBox = ({quote, author}) => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <p>{quote}</p>
            <span>{author}</span>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
        </div>
    )
}

export default QuoteBox;