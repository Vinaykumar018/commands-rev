import React from 'react';
import data2 from '../data/data2.json'
import { useState } from 'react';
const Accordion2 = () => {

  return (
    <div>
      {data2.accordion.map((item, index) =>
        <div key={index}>

          <StyledComponent item={item}>hello</StyledComponent>
        </div>

      )}

    </div>
  );
}

function StyledComponent({ item }) {
  console.log(item.id)

  const [open, setOpen] = useState(false)

  const hasChildren = item?.children?.length > 0;


  return (
    <div style={{ border: "2px red solid", background: "white", color: "black", margin: "4px" }}
       onClick={(e) => {
          e.stopPropagation(); // 🔥 MOST IMPORTANT LINE
          hasChildren && setOpen(!open);
        }}>


      <div >
        <span>{hasChildren ? (open ? "▼" : "▶") : "*"}</span>
        <span>{item.id}</span>
        <span>{item.title}</span>
        <span>{item.content}</span>
      </div>


      {
        open &&
        




        item?.children?.map(item =>
          <>
            <StyledComponent item={item}></StyledComponent>
          </>


        )}

    </div>


  )

}

export default Accordion2;


