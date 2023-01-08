import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

function Home() {
    const [data, setData] = useState({});
    const [isClick, setIsClick] = useState(0);

    // const dice_button = `./images/dice-art.jpg`;

    async function getAdvice() {
        const url = `https://api.adviceslip.com/advice`;
        axios.get(url).then(response => {
            setData(response.data.slip)
        })
    }

    const divRef1 = useRef(null);
    const divRef2 = useRef(null);

    function setRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = 'rgb(' + r + ',' + g + ',' + b + ')';
        divRef1.current.style.backgroundColor = color;

        const r2 = Math.floor(Math.random() * 256);
        const g2 = Math.floor(Math.random() * 256);
        const b2 = Math.floor(Math.random() * 256);
        const color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
        divRef2.current.style.backgroundColor = color2;

      }

    useEffect(() => {
        getAdvice();
        console.log(isClick);
        setRandomColor();
        // console.log(data);
    }, [isClick]);
    
    return ( 
        <div className="main-wrapper" ref={divRef1}> 
            <div className="advice-box" ref={divRef2}>
                <h4 className="main-title">Advice # {data.id }</h4>
                <p className="advice"> "{data.advice}"</p>
                <div className="horizontal-line"></div>
                <button className="button" onClick={() => setIsClick( click => click +1 )} >
                </button>
            </div>
        </div>
    );
}

export default Home;