// props === items
import style from './Categories.module.css'
import { useState } from 'react';
import moduleCss from './Categories.module.css'
// ! props= onSelectCategory={onSelectCategory} category={category} setCategory={setCategory} items={items}
const Categories = (props) => {
  const [active,setActive]=useState('')

  const onSelectItem =(index)=>{
    setActive(index)
    props.onSelectCategory(index)
  }

  return (
    <div className={style.categories}>
      <button className={active === ''? moduleCss.active : null} onClick={()=>onSelectItem(null)}>Все</button>
        {
            props.items.map((item,index)=>(
                <button 
                key={`${item}_${index}`}
                className={active === index? moduleCss.active:''}
                onClick={()=>onSelectItem(index)}
                >{item}</button>
            ))
        }
    </div>
  );
};

export default Categories;
