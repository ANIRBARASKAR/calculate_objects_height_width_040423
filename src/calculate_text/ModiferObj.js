import React,{useState, useEffect} from 'react'
import { fabric } from 'fabric'
export default function ModiferObj() {
// 🌟🌟🌟🌟🌟🌟🌟  1// 
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
  left:  100 ,    
  top :100 ,  
  // left: textLeft ? textLeft : 100 ,    
  // top: textTop ? textTop : 100 ,  
  width: objWidth ? objWidth : 200,    
  height: objHeight ? objHeight : 200,
  
  fill: 'red'  
});   
  
var circle = new fabric.Rect({
  // radius: 50, // set the radius of the circle
  fill: 'green', // set the fill color of the circle
  left: 500, // set the horizontal position of the circle
  top: 100,
  width: objWidth ? objWidth : 200,  
  height: objHeight ? objHeight : 200, // set the vertical position of the circle
});
    
canvas.add(text,rect,circle);

// 🌟🌟🌟🌟🌟🌟🌟🌟 object:modified

    
canvas.on('object:modified', function (event) {
            
  console.log('object:modified eveevent.targetnt',event.target);
  console.log('object:modified event.target.canvas',event.target.canvas);
  console.log('object:modified event.target.canvas._activeObject',event.target.canvas._activeObject);
    
    // console.log("canvas after modified ",canvas._activeObject);
  // setobjWidth(rect.getScaledWidth())  
  setobjWidth(event.target.canvas._activeObject.getScaledWidth())  
  setobjHeight(event.target.canvas._activeObject.getScaledHeight())       
      
  settextLeft( Math.floor(event.target.left*100)/100)    
   settextTop(Math.floor(event.target.top*100)/100)

  //  console.log("textLeft",textLeft);    
  
  // console.log("event",event.target);
  // console.log("hello 'object:modified  text getScaledHeight ",objHeight);
  // console.log("hello 'object:modified  text getScaledWidth",objWidth);
    
}); 
  
// 🌟🌟🌟🌟🌟🌟🌟🌟 Moving  

var activeObjects = canvas.getActiveObject();

console.log("global Active Obj",activeObjects);
          
canvas.on('object:moving', function (event) {  
  console.log("moving Active Obj",activeObjects);

  //  console.log('object:moving event',event);
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


// 🤘🤘🤘🤘🤘🤘  2

// // Create a new canvas
// var canvas = new fabric.Canvas('canvas');

// // Add two objects to the canvas
// var rect = new fabric.Rect({
//   left: 100,
//   top: 100,
//   width: 50,
//   height: 50,
//   fill: 'red'
// });
// var circle = new fabric.Circle({
//   left: 200,
//   top: 200,
//   radius: 25,
//   fill: 'green'
// });
// canvas.add(rect, circle);

// // Get the active object
// var activeObject = canvas.getActiveObject();

// // Check if an object is active
// if (activeObject) {
//   console.log('Active object:', activeObject);
// } else {
//   console.log('No active object');
// }

  return (            
    <>ModiferObj   
    <div className="container">  

       
    <br />   
    <hr />    
  
    {/* <input type="textarea"  /> */}
    {/* <textarea name="" id=""  onChange={e => setinputValue(e.target.value)}></textarea>

<br />
<hr />
<strong>Text Width in px :- </strong>   {    Math.floor(objWidth*100)/100} ,  <strong>Text Height in px :-</strong> {   Math.floor(objHeight*100)/100} ,
<strong>Text Width in Inch :- </strong>   {Math.floor((objWidth/96)*100)/100} ,  <strong>Text Height in Inch :-</strong> {Math.floor((objHeight/96)*100)/100} , */}

<br />
<hr />

    {/* <input type="text"  value={inputValue} onChange={e => setinputValue(e.target.value)}/>   */}
    
    <canvas id='canvas' height={400} width={822} style={{  border:'2px solid red'}}></canvas>
    </div>
    </>
  )
}
