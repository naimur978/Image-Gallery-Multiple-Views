import React from 'react';

export default function Modalbox({open, setState, images, 
  selected, openImage, handlePrev, handleNext}) {
    
    return (
      <div className={!open ? "hide": "overlay"}>
      <div className="content">
       <button className="cross" onClick={()=> setState(false)}>X</button>
       <div className="modal-window">
         <span className="left" onClick={handlePrev}/>
         <div className="review">
          <img src={selected.image} alt="window-theme" />
         </div>
         <div className="indexes">
           {images.map((image, index)=>(
            <img key={index} src={image} alt={image} 
            className={index===selected.index ? 'active-img': ''}
            onClick={()=>openImage({image,index})}/>
           ))}
         </div>
         <span className="right" onClick={handleNext}/>
        </div>
      </div>
    </div>
    );
  }
  