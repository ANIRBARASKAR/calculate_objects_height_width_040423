import React,{useState,useRef,useEffect} from 'react'

export default function TextWithSvg() {

    const [range, setrange] = useState(40)
    const textRef = useRef(null);


    useEffect(() => {
        const bbox = textRef.current.getBBox();
        console.log('text height:', bbox.height);
        console.log('text width:', bbox.width);
      }, []);

  
  return (
    <div>TextWithSvg
   <input type="range" step={10} max={200} onChange={e => setrange(e.target.value)}  />   
<br />
    Range : {range}
    <svg width="200" height="100">
        {/* <path d="M10 10 H180 V90 H10 Z" fill="#fff" stroke="#000"/> */}
        <path d="M10 10 H180 V90 H10 Z" fill="#fff" stroke="#000"/>
        {/* m => for move */}
        <text x="100" ref={textRef} y="50"  text-anchor="middle" alignment-baseline="middle">Hello, World!
        jdjgjj</text>
      </svg>
      
      </div>

  ) 
}
