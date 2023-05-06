import React,{useState, useEffect} from 'react'
import { fabric } from 'fabric'
export default function Text() {

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

var text2 = new fabric.Text(`inputValue` ,{
  left: 100 ,  
  top: 100,           
fontSize: 40,         
fill: 'black',    
    
      
});  
          
  
  
var rect = new fabric.Rect({
  // left: textLeft ? textLeft : 100 ,    
  // top: textTop ? textTop : 100 ,  
  left:  100 ,    
  top: 100 ,  
  // width: objWidth ? objWidth : 200,    
  // height: objHeight ? objHeight : 200,  
  width : 200,        
  height:  200,
  
  fill: 'red'
});     
var rect2 = new fabric.Rect({
  left:  100 + 250 ,          
  top:  100  ,  
  // width: objWidth ? objWidth : 200,      
  // height: objHeight ? objHeight : 200,

  width : 200,      
  height:  200,
  
  fill: 'green'
});     
  
// canvas.add(text,rect,rect2);    
canvas.add(text,text2);   
 

// var activeObj = canvas.getActiveObject();
//   console.log("activeObj" ,activeObj);  
  
// 🌟🌟🌟🌟🌟🌟🌟🌟 object:modified  
  
        
canvas.on('object:modified', function (event) {
  var activeObj = canvas.getActiveObject();
  console.log("activeObj" ,activeObj);  
    
  activeObj.set({ fill: 'blue' });
     
    
  console.log('object:modified event',event);
    
    console.log("canvas._activeObject from modified ",canvas._activeObject);
    console.log("canvas._activeObject.getScaledWidth() from modified ",canvas._activeObject.getScaledWidth());
    // console.log("canvas._activeObject.getFontSize() from modified ",canvas._activeObject.getFontSize()); 
    console.log("canvas from modified ",canvas);  
  // setobjWidth(rect.getScaledWidth())        
  // setobjWidth(event.target.getScaledWidth())    
      
console.log("canvas.getActiveObject fro modified",canvas.getActiveObject());
     
  //  .set("left" , canvas._activeObject.left)
  
   setobjWidth(canvas._activeObject.getScaledWidth())      
     
 
            
   setobjHeight(canvas._activeObject.getScaledHeight())         
         
   settextLeft( Math.floor(canvas._activeObject.left*100)/100)      
    settextTop(Math.floor(canvas._activeObject.top*100)/100)



  

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
