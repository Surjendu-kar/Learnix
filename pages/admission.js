import { FormInput, FormSelect } from "@/components/common/FormFields";
import Layout from "@/components/layout/Layout";
import { db } from "@/firebase/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  admissionNo: Yup.string().required("Admission No is required"),
  studentName: Yup.string().required("Student's Name is required"),
  class: Yup.string().required("Class is required"),
  section: Yup.string(),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date()
    .typeError("Date of Birth must be valid")
    .required("Date of Birth is required"),
  area: Yup.string().required("Area is required"),
  address: Yup.string().required("Address is required"),
  religion: Yup.string().required("Religion is required"),
  category: Yup.string().required("Category is required"),
  familyIncome: Yup.string().required("Family Income is required"),
  motherName: Yup.string().required("Mother's Name is required"),
  fatherName: Yup.string().required("Father's Name is required"),
  motherMobileNo: Yup.string()
    .required("Mother's Mobile is required")
    .matches(/^\d+$/, "Mother's Mobile must be a valid number")
    .length(10, "Mother's Mobile must be exactly 10 digits"),
  fatherMobileNo: Yup.string()
    .required("Father's Mobile is required")
    .matches(/^\d+$/, "Father's Mobile must be a valid number")
    .length(10, "Father's Mobile must be exactly 10 digits"),
  motherOccupation: Yup.string().required("Mother's Occupation is required"),
  fatherOccupation: Yup.string().required("Father's Occupation is required"),
  admissionDate: Yup.date()
    .typeError("Admission Date must be a valid date")
    .required("Admission Date is required"),
});

export default function Admission() {
  const [genderOptions, setGenderOptions] = useState([]);
  const [religionOptions, setReligionOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    admissionNo: "",
    studentName: "",
    class: "",
    gender: "",
    dob: "",
    religion: "",
    area: "",
    category: "",
    familyIncome: "",
    motherName: "",
    fatherName: "",
    motherMobileNo: "",
    fatherMobileNo: "",
    motherOccupation: "",
    fatherOccupation: "",
    admissionDate: "",
    address: "",
  });

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const configRef = doc(db, "configuration", "dropDowns");
        const configDoc = await getDoc(configRef);

        if (configDoc.exists()) {
          const {
            gender = [],
            religion = [],
            category = [],
            classes = [],
          } = configDoc.data();

          setGenderOptions(gender.map((g) => ({ value: g, label: g })));
          setReligionOptions(religion.map((r) => ({ value: r, label: r })));
          setCategoryOptions(category.map((c) => ({ value: c, label: c })));
          setClassOptions(classes.map((c) => ({ value: c, label: c })));
        } else {
          console.error("No dropdown data found!");
        }
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDropdownOptions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data
      await validationSchema.validate(formData, { abortEarly: false });

      setIsSubmitting(true);
      // Format dates
      const formatDOB = (date) => {
        const dobDate = new Date(date);
        const month = dobDate.getMonth() + 1;
        const day = dobDate.getDate();
        const year = dobDate.getFullYear();
        return `${day}/${month}/${year}`;
      };

      const formattedDob = formData.dob ? formatDOB(formData.dob) : null;
      const formattedAdmissionDate = formData.admissionDate
        ? formatDOB(formData.admissionDate)
        : null;

      const admissionData = {
        ...formData,
        dob: formattedDob,
        admissionDate: formattedAdmissionDate,
        isConfirmed: false,
        created_by: "unknown",
        created_time: new Date(),
      };

      // Add document to "admissions" collection
      const admissionDocRef = await addDoc(
        collection(db, "admissions"),
        admissionData
      );
      const docId = admissionDocRef.id;

      // Update lookup/admission
      const admissionLookupData = {
        admissionNo: formData.admissionNo,
        studentName: formData.studentName,
        class: formData.class,
        gender: formData.gender,
        dob: formattedDob,
        motherMobileNo: formData.motherMobileNo,
        fatherMobileNo: formData.fatherMobileNo,
      };

      await setDoc(
        doc(db, "lookup", "admission"),
        { [docId]: admissionLookupData },
        { merge: true }
      );

      toast.success("Admission created successfully.");

      // Reset form
      setFormData({
        admissionNo: "",
        studentName: "",
        class: "",
        gender: "",
        dob: "",
        religion: "",
        area: "",
        category: "",
        familyIncome: "",
        motherName: "",
        fatherName: "",
        motherMobileNo: "",
        fatherMobileNo: "",
        motherOccupation: "",
        fatherOccupation: "",
        admissionDate: "",
        address: "",
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        console.error("Error adding admission: ", error);
        toast.error("Failed to create admission.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Admission">
      <div className="container section-py-80">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-form-wrap">
              <form id="contact-form">
                <div className="row">
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="admissionNo"
                      placeholder="Admission No *"
                      required
                      value={formData.admissionNo}
                      onChange={handleInputChange}
                      inputProps={{
                        onKeyPress: (e) => {
                          if (!/[a-zA-Z0-9-]/.test(e.key)) {
                            e.preventDefault();
                          }
                        },
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="studentName"
                      placeholder="Student's Name *"
                      required
                      value={formData.studentName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="class"
                      placeholder="Class *"
                      options={classOptions}
                      required
                      value={formData.class}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="gender"
                      placeholder="Gender *"
                      options={genderOptions}
                      required
                      value={formData.gender}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="date"
                      name="dob"
                      placeholder="DOB"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="area"
                      placeholder="Area *"
                      required
                      value={formData.area}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="address"
                      placeholder="Address *"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="religion"
                      placeholder="Religion *"
                      options={religionOptions}
                      required
                      value={formData.religion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="category"
                      placeholder="Category *"
                      options={categoryOptions}
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="familyIncome"
                      placeholder="Family Income *"
                      required
                      value={formData.familyIncome}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="motherName"
                      placeholder="Mother's Name *"
                      required
                      value={formData.motherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="fatherName"
                      placeholder="Father's Name *"
                      required
                      value={formData.fatherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="tel"
                      name="motherMobileNo"
                      placeholder="Mother's Mobile *"
                      required
                      value={formData.motherMobileNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="tel"
                      name="fatherMobileNo"
                      placeholder="Father's Mobile *"
                      required
                      value={formData.fatherMobileNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="motherOccupation"
                      placeholder="Mother's Occupation *"
                      required
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="fatherOccupation"
                      placeholder="Father's Occupation *"
                      required
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="date"
                      name="admissionDate"
                      placeholder="Admission Date"
                      value={formData.admissionDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-submit text-center mt-4">
                  <button
                    type="submit"
                    className="btn"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.form-grp select) {
          width: 100%;
          border: 1px solid #dae0e7;
          border-radius: 3px;
          display: block;
          background: var(--tg-common-color-white);
          font-weight: 400;
          font-size: 15px;
          color: var(--tg-body-color);
          padding: 11px 20px;
          height: 50px;
          transition: 0.3s;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.763L10.825 4z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 15px center;
          background-size: 12px;
        }

        :global(.form-grp select:focus) {
          border-color: var(--tg-theme-primary);
          outline: none;
        }

        :global(.form-grp select option) {
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
}
