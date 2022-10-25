// props === items
import style from './Categories.module.css'
import { useState } from 'react';
import moduleCss from './Categories.module.css'
// ! props= onSelectCategory={onSelectCategory} category={category} setCategory={setCategory} items={items}
const Categories = ({items,onSelectCategory}) => {
  const [active,setActive]=useState('')

  const onSelectItem =(index)=>{
    setActive(index)
    onSelectCategory(index)
  }

  return (
    <div className={style.categories}>
      <button className={active === ''? moduleCss.active : ''} onClick={()=>onSelectItem('')}>Все</button>
        {
            items.map((item,index)=>(
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
