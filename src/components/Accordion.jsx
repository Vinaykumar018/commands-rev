import React from 'react';
import data from '../data/data.json';

// Simple Component jo hamesha sara content dikhayega
const StaticItem = ({ item }) => {
  const arr=[2,4,[3,2,5,2]]
  console.log(arr.flat(1))
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div style={{ marginLeft: '20px', borderLeft: '1px solid #ccc', padding: '10px' }}>
      {/* Title section - ab click functionality hata di gayi hai */}
      <div style={{ fontWeight: 'bold', color: '#333' }}>
        {hasChildren ? '▼ ' : '• '} {item.title}
      </div>

      {/* Content section - hamesha visible rahega */}
      <div style={{ marginTop: '5px' }}>
        <div style={{ color: '#666', marginBottom: '10px' }}>{item.content}</div>
        
        {/* Agar children hain toh unhe automatically render karo */}
        {hasChildren && item.children.map((child) => (
          <StaticItem key={child.id} item={child} />
        ))}
      </div>
    </div>
  );
};

const SimpleList = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Data List (No Accordion)</h2>
      {data.accordion.map((item) => (
        <StaticItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SimpleList;