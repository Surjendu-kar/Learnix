import SortActivities from "../filter/SortActivities";

const FilterActivities = () => {
  return (
    <>
      <aside className="courses__sidebar">
        <div className="shop-widget">
          <h4 className="widget-title">Sort Activities</h4>
          <div className="shop-cat-list">
            <SortActivities />
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterActivities;
