import React,{useState, useEffect} from 'react'
import { fabric } from 'fabric'
export default function WithImg() {

  const [inputValue, setinputValue] = useState('Hello')
  const [objWidth, setobjWidth] = useState(null)
  const [objHeight, setobjHeight] = useState(null)
  const [textTop, settextTop] = useState(null)
  const [textLeft, settextLeft] = useState(null)

  // var objWidth = null;
  // var objHeight;  

const canvas = new fabric.Canvas('canvas')
var text = new fabric.Text(`W = ${Math.floor(objWidth*100)/100} & H = ${Math.floor(objHeight*100)/100}` ,{
  left: textLeft ,  
  top: textTop-30,          
  fontSize: 20,         
  fill: 'black',    
  
    
  selectable:false
});        
        
  
  
var rect = new fabric.Rect({
  left: textLeft ? textLeft : 100 ,    
  top: textTop ? textTop : 100 ,  
  width: objWidth ? objWidth : 200,    
  height: objHeight ? objHeight : 200,
  
  fill: 'red'
});   
var rect2 = new fabric.Rect({
  left: textLeft ? textLeft : 100 ,    
  top: textTop ? textTop : 100 ,  
  width: objWidth ? objWidth : 200,    
  height: objHeight ? objHeight : 200,
  
  fill: 'green'
});   
  
canvas.add(text,rect);

// 🌟🌟🌟🌟🌟🌟🌟🌟 object:modified

    
canvas.on('object:modified', function (event) {

  console.log('object:modified event',event.target.getScaledWidth());

    console.log("canvas after modified ",canvas._activeObject);
  // setobjWidth(rect.getScaledWidth())  
  setobjWidth(event.target.getScaledWidth())  
  setobjHeight(event.target.getScaledHeight())   
      
  settextLeft( Math.floor(event.target.left*100)/100)    
   settextTop(Math.floor(event.target.top*100)/100)


  // console.log("event",event.target);
  // console.log("hello 'object:modified  text getScaledHeight ",objHeight);
  // console.log("hello 'object:modified  text getScaledWidth",objWidth);
    
}); 

// 🌟🌟🌟🌟🌟🌟🌟🌟 Moving
          
canvas.on('object:moving', function (event) {  
     
   console.log('object:moving event',event);
   settextLeft(  event.target.left)

   settextTop(event.target.top)  
   setobjWidth( event.target.getScaledWidth() )  
   setobjHeight(event.target.getScaledHeight())   
       
        
  // setobjWidth(rect.getScaledWidth())  
  // setobjHeight(rect.getScaledHeight())    

  // console.log("event",event.target);
  // console.log("hello 'object:modified  text getScaledHeight ",objHeight);
  // console.log("hello 'object:moving  text getScaledWidth",objWidth);
    
});            
    

// useEffect(() => {
  
  
    


//   // setobjWidth(text.getScaledWidth())  
//   // setobjHeight(text.getScaledHeight())    

     
// }, [objWidth , objHeight , inputValue, textTop,textLeft])

  return (            
    <>Controls   
    <div className="container">  

    
    <br />  
    <hr />  
  
    {/* <input type="textarea"  /> */}
    <textarea name="" id=""  onChange={e => setinputValue(e.target.value)}></textarea>
  
<br />
<hr />
<strong>Text Width in px :- </strong>   {    Math.floor(objWidth*100)/100} ,  <strong>Text Height in px :-</strong> {   Math.floor(objHeight*100)/100} ,
<strong>Text Width in Inch :- </strong>   {Math.floor((objWidth/96)*100)/100} ,  <strong>Text Height in Inch :-</strong> {Math.floor((objHeight/96)*100)/100} ,

<br />
<hr />

    {/* <input type="text"  value={inputValue} onChange={e => setinputValue(e.target.value)}/>   */}
    
    <canvas id='canvas' height={400} width={822} style={{  border:'2px solid red'}}></canvas>
    </div>
    </>
  )
}
