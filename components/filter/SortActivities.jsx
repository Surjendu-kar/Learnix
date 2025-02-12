import { useDispatch, useSelector } from "react-redux";
import { addSort } from "../../features/courseFilterSlice";

const SortActivities = () => {
  const { courseSort } = useSelector((state) => state.courseFilter);
  const { sort } = courseSort;
  const dispatch = useDispatch();

  const sortOptions = [
    { id: 1, name: "Sort by (default)", value: "", isChecked: sort === "" },
    {
      id: 2,
      name: "Name (A-Z)",
      value: "name_asc",
      isChecked: sort === "name_asc",
    },
    {
      id: 3,
      name: "Name (Z-A)",
      value: "name_desc",
      isChecked: sort === "name_desc",
    },
    {
      id: 4,
      name: "Duration (Shortest First)",
      value: "duration_asc",
      isChecked: sort === "duration_asc",
    },
    {
      id: 5,
      name: "Duration (Longest First)",
      value: "duration_desc",
      isChecked: sort === "duration_desc",
    },
    {
      id: 6,
      name: "Capacity (Lowest First)",
      value: "participants_asc",
      isChecked: sort === "participants_asc",
    },
    {
      id: 7,
      name: "Capacity (Highest First)",
      value: "participants_desc",
      isChecked: sort === "participants_desc",
    },
  ];

  const sortHandler = (e, id) => {
    // If the clicked item was already checked, uncheck it and reset to default sort
    if (sortOptions.find((option) => option.id === id)?.isChecked) {
      dispatch(addSort(""));
    } else {
      dispatch(addSort(e.target.value));
    }
  };

  return (
    <ul className="list-wrap">
      {sortOptions.map((item) => (
        <li key={item.id}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => sortHandler(e, item.id)}
              />
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SortActivities;
