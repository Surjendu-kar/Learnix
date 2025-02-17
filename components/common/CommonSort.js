import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addSort } from "@/features/courseFilterSlice";

export const CommonSort = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { courseSort } = useSelector((state) => state.courseFilter);
  const { sort } = courseSort;
  const currentPath = router.pathname;

  const isCoCurricular = currentPath === "/co-curricular-activities";
  const isCBSEResult = currentPath === "/cbse-result";

  const basicSortOptions = [
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
  ];

  const coCurricularOptions = [
    {
      id: 6,
      name: "Duration (Shortest First)",
      value: "duration_asc",
      isChecked: sort === "duration_asc",
    },
    {
      id: 7,
      name: "Duration (Longest First)",
      value: "duration_desc",
      isChecked: sort === "duration_desc",
    },
    {
      id: 8,
      name: "Capacity (Lowest First)",
      value: "participants_asc",
      isChecked: sort === "participants_asc",
    },
    {
      id: 9,
      name: "Capacity (Highest First)",
      value: "participants_desc",
      isChecked: sort === "participants_desc",
    },
  ];

  const cbseResultOptions = [
    {
      id: 12,
      name: "Percentage (Lowest First)",
      value: "percentage_asc",
      isChecked: sort === "percentage_asc",
    },
    {
      id: 13,
      name: "Percentage (Highest First)",
      value: "percentage_desc",
      isChecked: sort === "percentage_desc",
    },
  ];

  const getSortOptions = () => {
    if (isCoCurricular) {
      return [...basicSortOptions, ...coCurricularOptions];
    }
    if (isCBSEResult) {
      return [...basicSortOptions, ...cbseResultOptions];
    }
    return basicSortOptions;
  };

  const sortHandler = (e, id) => {
    if (getSortOptions().find((option) => option.id === id)?.isChecked) {
      dispatch(addSort(""));
    } else {
      dispatch(addSort(e.target.value));
    }
  };

  return (
    <ul className="list-wrap">
      {getSortOptions().map((item) => (
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
