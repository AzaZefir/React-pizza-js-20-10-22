import moduleCss from './Sort.module.css'
import arrowUpSort from '../../../assets/arrow-up-sort.svg'
const Sort = (props) => {
  return (
    <div className={moduleCss.sort}>
      <img src={arrowUpSort} alt="" />
      <span>Сортировка по:</span>
      <span>популярности</span>
      <div className={moduleCss.sort_popup}>
        <ul>
            {
                props.sortItems.map((item,index) => (
                    <li  key={`${item}_${index}`}>{item}</li>
                ))
            }
          {/* <li>популярности</li>
          <li>цене</li>
          <li>алфавиту</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
