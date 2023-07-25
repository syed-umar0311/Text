
import React, {useState} from 'react'




export default function TextForm(props) {
  let mystyle = {
   
    textAlign : "center",
    
  }
  let mystyle_2 = {
    textAlign : "center",

    fontSize : ' 20px'
  }
    const handleupclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        
        props.showAlert(" upper case enable ","success");
    }
    const handleloclick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
  }
  
  const reset = ()=>{
    let newText = text.replace(text , " ");
    setText(newText)
}
const handlecopy=()=>{
  let text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);

}
const handletextspacing=()=>{
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "))
}
    const handleonchange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    

    const [text, setText] = useState('');
    
 return (
    <>
 <div>
    <h1 className='abc' style={mystyle} >{ props.heading}
    </h1>
 </div>

<div className="mb-3">
 
  <textarea className="form-control"  value={text} onChange={handleonchange} id="mybox" rows="8" cols="100" ></textarea>
</div>
<div>
    <button className='btn btn-success'  onClick={handleupclick}> convert to uppercase</button>
    <button className='btn btn-success mx-2 my-2' onClick={handleloclick}> convert to lowercase</button>
    <button className='btn btn-danger mx-1 my-2' onClick={reset}> Reset</button>
    <button className='btn btn-primary mx-1 my-2' onClick={handlecopy}> copy</button>
    <button className='btn btn-primary mx-1 my-2' onClick={handletextspacing}> remove extra spacing</button>
    
</div>
<div className="container my-3" style={mystyle_2}  >
  <p >  Text Character : {text.length} Text Word {text.split(" ").length} {text.replace("the","on")} </p>
</div>
    </>
  )
}
