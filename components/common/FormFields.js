export const FormInput = ({
  type = "text",
  name,
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div className="form-grp">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const FormTextArea = ({
  name,
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div className="form-grp">
    <textarea
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const FormSelect = ({
  name,
  options,
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div className="form-grp">
    <select name={name} required={required} value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export const RadioGroup = ({ question, name, onChange, value }) => (
  <div className="form-grp">
    <div className="mb-2">{question}</div>
    <div
      className="radio-group"
      style={{ display: "inline-flex", gap: "20px" }}
    >
      <label
        style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
      >
        <input
          type="radio"
          name={name}
          value="yes"
          checked={value === "yes"}
          onChange={() => onChange("yes")}
          style={{ width: "16px", height: "16px", cursor: "pointer" }}
        />
        Yes
      </label>
      <label
        style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
      >
        <input
          type="radio"
          name={name}
          value="no"
          checked={value === "no"}
          onChange={() => onChange("no")}
          style={{ width: "16px", height: "16px", cursor: "pointer" }}
        />
        No
      </label>
    </div>
  </div>
);

export const CheckboxInput = ({ label, name, checked, onChange, required }) => (
  <div className="form-grp">
    <label
      style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        style={{ width: "16px", height: "16px" }}
      />
      <span>{label}</span>
    </label>
  </div>
);
