import {
  FormInput,
  FormSelect,
  FormTextArea,
  RadioGroup,
  CheckboxInput,
} from "@/components/common/FormFields";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function Admission() {
  const [selectedSection, setSelectedSection] = useState("");
  const [showAadhaar, setShowAadhaar] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    currentAddress: "",
    permanentAddress: "",
    contactNo: "",
    email: "",
    dob: "",
    aadhaarNo: "",
    fatherOccupation: "",
    motherOccupation: "",
    nationality: "",
    religion: "",
    caste: "",
    section: "",
    admissionClass: "",
    motherTongue: "",
    previousSchool: "",
    secondLanguage: "",
    hasDisease: "",
    diseaseDetails: "",
    isExStudent: "",
    hasRelative: "",
    relativeName: "",
    relativeClass: "",
    agreed: false,
  });

  const schoolSections = [
    { value: "pre-primary", label: "Pre-Primary (Nursery to KG)" },
    { value: "primary", label: "Primary (Class 1 to 5)" },
    { value: "middle", label: "Middle School (Class 6 to 8)" },
    { value: "secondary", label: "Secondary (Class 9 & 10)" },
    { value: "senior-secondary", label: "Senior Secondary (Class 11 & 12)" },
  ];

  const getClassOptions = (section) => {
    switch (section) {
      case "pre-primary":
        return [
          { value: "nursery", label: "Nursery" },
          { value: "kg1", label: "KG-I" },
          { value: "kg2", label: "KG-II" },
        ];
      case "primary":
        return [
          { value: "1", label: "Class 1" },
          { value: "2", label: "Class 2" },
          { value: "3", label: "Class 3" },
          { value: "4", label: "Class 4" },
          { value: "5", label: "Class 5" },
        ];
      case "middle":
        return [
          { value: "6", label: "Class 6" },
          { value: "7", label: "Class 7" },
          { value: "8", label: "Class 8" },
        ];
      case "secondary":
        return [
          { value: "9", label: "Class 9" },
          { value: "10", label: "Class 10" },
        ];
      case "senior-secondary":
        return [
          { value: "11-science", label: "Class 11 - Science (PCM/PCB)" },
          { value: "11-commerce", label: "Class 11 - Commerce" },
          { value: "11-arts", label: "Class 11 - Humanities" },
          { value: "12-science", label: "Class 12 - Science (PCM/PCB)" },
          { value: "12-commerce", label: "Class 12 - Commerce" },
          { value: "12-arts", label: "Class 12 - Humanities" },
        ];
      default:
        return [];
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "section") {
      setSelectedSection(value);
      setFormData((prev) => ({
        ...prev,
        admissionClass: "",
        section: value,
      }));
    }

    if (name === "admissionClass") {
      const classValue = value.split("-")[0];
      const classNum = parseInt(classValue);
      setShowAadhaar(!isNaN(classNum) && classNum >= 1);
    }
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const casteOptions = [
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
    { value: "OBC", label: "OBC" },
    { value: "General", label: "General" },
  ];

  const languageOptions = [
    { value: "Bengali", label: "Bengali" },
    { value: "Hindi", label: "Hindi" },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Admission">
      <div className="container section-py-80" style={{ margin: "80px auto" }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-form-wrap">
              <form id="contact-form" action="assets/mail.php" method="POST">
                <div className="row">
                  {/* Basic Details */}
                  <h5 className="sub-title mb-3">Basic Details</h5>

                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="studentName"
                      placeholder="Name of the Student *"
                      required
                      value={formData.studentName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="date"
                      name="dob"
                      placeholder="Date of Birth *"
                      required
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="fatherName"
                      placeholder="Father's Name *"
                      required
                      value={formData.fatherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="motherName"
                      placeholder="Mother's Name *"
                      required
                      value={formData.motherName}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Address Details */}
                  <div className="col-md-12 mt-4">
                    <h5 className="sub-title mb-3">Address Details</h5>
                    <FormTextArea
                      name="currentAddress"
                      placeholder="Current Address *"
                      required
                      value={formData.currentAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormTextArea
                      name="permanentAddress"
                      placeholder="Permanent Address *"
                      required
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Contact Details */}
                  <div className="col-md-12 mt-4">
                    <h5 className="sub-title mb-3">Contact Details</h5>
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="tel"
                      name="contactNo"
                      placeholder="Contact No. *"
                      required
                      value={formData.contactNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Parents' Information */}
                  <div className="col-md-12 mt-4">
                    <h5 className="sub-title mb-3">Parents' Information</h5>
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="fatherOccupation"
                      placeholder="Father's Occupation (in details)"
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="motherOccupation"
                      placeholder="Mother's Occupation"
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Additional Details */}
                  <div className="col-md-12 mt-4">
                    <h5 className="sub-title mb-3">Additional Details</h5>
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="nationality"
                      placeholder="Nationality *"
                      required
                      value={formData.nationality}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="religion"
                      placeholder="Religion"
                      value={formData.religion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="caste"
                      placeholder="Select Caste *"
                      options={casteOptions}
                      required
                      value={formData.caste}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Academic Details */}
                  <div className="col-md-12 mt-4">
                    <h5 className="sub-title mb-3">Academic Details</h5>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <FormSelect
                          name="section"
                          placeholder="Select Section *"
                          options={schoolSections}
                          required
                          value={formData.section}
                          onChange={handleInputChange}
                        />
                      </div>
                      {selectedSection && (
                        <div className="col-md-6">
                          <FormSelect
                            name="admissionClass"
                            placeholder="Select Class *"
                            options={getClassOptions(selectedSection)}
                            required
                            value={formData.admissionClass}
                            onChange={handleInputChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {showAadhaar && (
                    <div className="col-md-12 mt-3">
                      <FormInput
                        type="text"
                        name="aadhaarNo"
                        placeholder="Aadhaar Card Number *"
                        required
                        value={formData.aadhaarNo}
                        onChange={handleInputChange}
                      />
                      <small className="text-muted">
                        Required for Class 1 and above
                      </small>
                    </div>
                  )}

                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="motherTongue"
                      placeholder="Mother Tongue"
                      value={formData.motherTongue}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormInput
                      type="text"
                      name="previousSchool"
                      placeholder="Details of Previous School attended (if any)"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormSelect
                      name="secondLanguage"
                      placeholder="Choice of Second Language *"
                      options={languageOptions}
                      required
                      value={formData.secondLanguage}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Additional Questions */}
                  <div className="col-md-12 mt-4">
                    <h5 className="sub-title mb-3">Additional Information</h5>
                  </div>
                  <div className="col-md-12">
                    <RadioGroup
                      question="Whether the student has any disease:"
                      name="hasDisease"
                      value={formData.hasDisease}
                      onChange={(value) =>
                        handleRadioChange("hasDisease", value)
                      }
                    />
                  </div>
                  {formData.hasDisease === "yes" && (
                    <div className="col-md-12">
                      <FormTextArea
                        name="diseaseDetails"
                        placeholder="If Yes, give details"
                        value={formData.diseaseDetails}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  <div className="col-md-12">
                    <RadioGroup
                      question="Whether the student was the ex-student of this school:"
                      name="isExStudent"
                      value={formData.isExStudent}
                      onChange={(value) =>
                        handleRadioChange("isExStudent", value)
                      }
                    />
                  </div>

                  <div className="col-md-12">
                    <RadioGroup
                      question="Whether any relative/brother/sister of the student studies in this school:"
                      name="hasRelative"
                      value={formData.hasRelative}
                      onChange={(value) =>
                        handleRadioChange("hasRelative", value)
                      }
                    />
                  </div>

                  {formData.hasRelative === "yes" && (
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-6">
                          <FormInput
                            type="text"
                            name="relativeName"
                            placeholder="Name"
                            value={formData.relativeName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            type="text"
                            name="relativeClass"
                            placeholder="Class"
                            value={formData.relativeClass}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Declaration */}
                  <div className="col-md-12 mt-4">
                    <div className="form-grp">
                      <p
                        className="declaration-text"
                        style={{ fontStyle: "italic", marginBottom: "20px" }}
                      >
                        I declare that the above informations are true to the
                        best of my knowledge. I understand that fees once paid
                        at the time of admission will neither be adjusted nor
                        refunded.
                      </p>
                      <CheckboxInput
                        name="agreed"
                        label="I agree to the above declaration and terms"
                        checked={formData.agreed}
                        onChange={handleInputChange}
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn mt-4"
                  disabled={!formData.agreed}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
