import moduleCss from "./Sort.module.css";
import { useState } from "react";
import { SortArrow } from "../../../common/Svg";

const Sort = ({ sortItems, activeSortType, onSortPizzas }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeLabel = sortItems.find(
    (item) => item.type === activeSortType
  ).name;
  // const [activeItem, setActiveItem] = useState(sortItems[0]);
  const onVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const onSelectItem = (index) => {
    if (onSortPizzas) {
      onSortPizzas(index);
    }
    // setActiveItem(index);
    setVisiblePopup(false);
  };
  return (
    <div className={moduleCss.sort}>
      <SortArrow visiblePopup={visiblePopup}/>
      <b>Сортировка по:</b>
      <span onClick={onVisiblePopup}> {activeLabel}</span>
      {visiblePopup && (
        <div className={moduleCss.sort_popup}>
          <ul>
            {sortItems.map((item, index) => (
              <li
                className={activeSortType === index ? moduleCss.active : ""}
                onClick={() => onSelectItem(item)}
                // value={item.value}
                key={`${item}_${index}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
