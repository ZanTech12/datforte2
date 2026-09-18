"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { jsPDF } from "jspdf";

export default function Admissions() {
  // --- Admission Form State ---
  const WHATSAPP_PHONE_NUMBER = "2347038832077"; // Replace with your actual WhatsApp number (country code + number, no +)
  
  const [formData, setFormData] = useState({
    academicSession: "",
    registrationNo: "",
    formNo: "974",
    surname: "",
    otherNames: "",
    sex: "",
    age: "",
    dob: "",
    bloodGroup: "",
    placeOfBirth: "",
    nationality: "",
    homeTown: "",
    stateOfOrigin: "",
    homeAddress: "",
    prevSchoolA: "", prevYearA: "", prevReasonA: "",
    prevSchoolB: "", prevYearB: "", prevReasonB: "",
    prevSchoolC: "", prevYearC: "", prevReasonC: "",
    fatherName: "", fatherHomeAddress: "", fatherPhone: "", fatherOfficeAddress: "", fatherOfficePhone: "", religion: "",
    motherName: "", motherHomeAddress: "", motherPhone: "", motherOfficeAddress: "", motherOfficePhone: "",
    guardianName: "", guardianOfficeAddress: "", guardianPhone: "",
    healthPeculiarity: "",
    preferredHospital: "",
    hearAboutUs: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Generate PDF
    const doc = new jsPDF();
    let y = 15;
    doc.setFontSize(16);
    doc.text("ADMISSION/REGISTRATION FORM", 105, y, { align: "center" });
    y += 10;
    doc.setFontSize(10);
    
    doc.text(`Academic Session: ${formData.academicSession}`, 15, y);
    doc.text(`Registration No: ${formData.registrationNo}`, 120, y);
    y += 7;
    doc.text(`Form No: $${formData.formNo}$`, 15, y);
    y += 10;

    doc.setFontSize(12);
    doc.text("PERSONAL DETAILS", 15, y);
    y += 7;
    doc.setFontSize(10);
    doc.text(`Name (Surname First): ${formData.surname} ${formData.otherNames}`, 15, y);
    y += 7;
    doc.text(`Sex: ${formData.sex}  | Age: ${formData.age}  | DOB: ${formData.dob}`, 15, y);
    y += 7;
    doc.text(`Blood Group: ${formData.bloodGroup}  | Place of Birth: ${formData.placeOfBirth}`, 15, y);
    y += 7;
    doc.text(`Nationality: ${formData.nationality}  | Home Town: ${formData.homeTown}  | State: ${formData.stateOfOrigin}`, 15, y);
    y += 7;
    doc.text(`Home Address: ${formData.homeAddress}`, 15, y);
    y += 10;

    doc.setFontSize(12);
    doc.text("PREVIOUS INSTITUTIONS", 15, y);
    y += 7;
    doc.setFontSize(10);
    doc.text(`(a) School: ${formData.prevSchoolA} | Year: ${formData.prevYearA} | Reason: ${formData.prevReasonA}`, 15, y);
    y += 7;
    doc.text(`(b) School: ${formData.prevSchoolB} | Year: ${formData.prevYearB} | Reason: ${formData.prevReasonB}`, 15, y);
    y += 10;

    doc.setFontSize(12);
    doc.text("PARENTAL/GUARDIAN DATA", 15, y);
    y += 7;
    doc.setFontSize(10);
    doc.text(`Father's Name: ${formData.fatherName}`, 15, y);
    y += 7;
    doc.text(`Father Home Address: ${formData.fatherHomeAddress} | Phone: ${formData.fatherPhone}`, 15, y);
    y += 7;
    doc.text(`Father Office Address: ${formData.fatherOfficeAddress} | Phone: ${formData.fatherOfficePhone}`, 15, y);
    y += 7;
    doc.text(`Mother's Name: ${formData.motherName}`, 15, y);
    y += 7;
    doc.text(`Mother Home Address: ${formData.motherHomeAddress} | Phone: ${formData.motherPhone}`, 15, y);
    y += 7;
    doc.text(`Mother Office Address: ${formData.motherOfficeAddress} | Phone: ${formData.motherOfficePhone}`, 15, y);
    y += 7;
    doc.text(`Guardian's Name: ${formData.guardianName} | Office: ${formData.guardianOfficeAddress} | Phone: ${formData.guardianPhone}`, 15, y);
    y += 7;
    doc.text(`Religion/Denomination: ${formData.religion}`, 15, y);
    y += 10;

    doc.setFontSize(12);
    doc.text("HEALTH & ADMIN", 15, y);
    y += 7;
    doc.setFontSize(10);
    const splitHealth = doc.splitTextToSize(`Health Peculiarity: ${formData.healthPeculiarity}`, 180);
    doc.text(splitHealth, 15, y);
    y += splitHealth.length * 5;
    doc.text(`Preferred Hospital: ${formData.preferredHospital}`, 15, y);
    y += 7;
    doc.text(`How did you hear about Datforte? ${formData.hearAboutUs}`, 15, y);
    
    doc.save(`Datforte_Admission_${formData.surname}.pdf`);

    // 2. Open WhatsApp with pre-filled message
    const waMessage = `Hello Datforte Int'l Schools, I have submitted my child's admission form. I have downloaded the PDF and will attach it here.`;
    const waLink = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className="bg-gray-50 pt-24 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 tracking-tight">Admission / Registration Form</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600">Fill out the form, download the PDF, and send it to our WhatsApp.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl space-y-8 border border-gray-100">
            
            {/* Top Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Academic Session</label>
                <input type="text" name="academicSession" value={formData.academicSession} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration No.</label>
                <input type="text" name="registrationNo" value={formData.registrationNo} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Form No</label>
                <input type="text" name="formNo" value={formData.formNo} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50" readOnly />
              </div>
            </div>

            {/* Personal Details */}
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name (Surname First) & Other Names</label>
                  <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Surname" />
                </div>
                <div className="md:col-span-2">
                  <input type="text" name="otherNames" value={formData.otherNames} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Other Names" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <input type="text" name="sex" value={formData.sex} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Sex" />
                  <input type="text" name="age" value={formData.age} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Age" />
                  <input type="text" name="dob" value={formData.dob} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Date of Birth" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Blood Group" />
                  <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Place of Birth" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Nationality" />
                  <input type="text" name="homeTown" value={formData.homeTown} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Home Town" />
                  <input type="text" name="stateOfOrigin" value={formData.stateOfOrigin} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="State of Origin" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                  <input type="text" name="homeAddress" value={formData.homeAddress} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" />
                </div>
              </div>
            </div>

            {/* Previous Institutions */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Previous Institutions</h3>
              <p className="text-xs text-gray-500 mb-2">(a) School / Year / Reason for leaving</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input type="text" name="prevSchoolA" value={formData.prevSchoolA} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="School (a)" />
                <input type="text" name="prevYearA" value={formData.prevYearA} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Year" />
                <input type="text" name="prevReasonA" value={formData.prevReasonA} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Reason" />
              </div>
              <p className="text-xs text-gray-500 mb-2">(b) School / Year / Reason for leaving</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input type="text" name="prevSchoolB" value={formData.prevSchoolB} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="School (b)" />
                <input type="text" name="prevYearB" value={formData.prevYearB} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Year" />
                <input type="text" name="prevReasonB" value={formData.prevReasonB} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Reason" />
              </div>
              <p className="text-xs text-gray-500 mb-2">(c) School / Year / Reason for leaving</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" name="prevSchoolC" value={formData.prevSchoolC} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="School (c)" />
                <input type="text" name="prevYearC" value={formData.prevYearC} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Year" />
                <input type="text" name="prevReasonC" value={formData.prevReasonC} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Reason" />
              </div>
            </div>

            {/* Parental/Guardian Data */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Parental / Guardian Data</h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 text-sm">Father's Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Father's Name" />
                  <input type="text" name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Phone No" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="fatherHomeAddress" value={formData.fatherHomeAddress} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Home Address" />
                  <input type="text" name="fatherOfficeAddress" value={formData.fatherOfficeAddress} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Office/Business Address" />
                </div>

                <h4 className="font-semibold text-gray-700 text-sm pt-4">Mother's Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Mother's Name" />
                  <input type="text" name="motherPhone" value={formData.motherPhone} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Phone No" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="motherHomeAddress" value={formData.motherHomeAddress} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Home Address" />
                  <input type="text" name="motherOfficeAddress" value={formData.motherOfficeAddress} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Office/Business Address" />
                </div>

                <h4 className="font-semibold text-gray-700 text-sm pt-4">Guardian's Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Guardian's Name" />
                  <input type="text" name="guardianOfficeAddress" value={formData.guardianOfficeAddress} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Office/Business Address" />
                  <input type="text" name="guardianPhone" value={formData.guardianPhone} onChange={handleChange} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" placeholder="Phone No" />
                </div>

                <div className="pt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Religion/Denomination</label>
                  <input type="text" name="religion" value={formData.religion} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" />
                </div>
              </div>
            </div>

            {/* Health & Admin */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Health & Miscellaneous</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Any peculiar situation about your child's /ward's health?</label>
                  <textarea name="healthPeculiarity" value={formData.healthPeculiarity} onChange={handleChange} rows={2} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Hospital/Clinic in case of sickness</label>
                  <input type="text" name="preferredHospital" value={formData.preferredHospital} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about Datforte?</label>
                  <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 bg-white">
                    <option value="">Select...</option>
                    <option value="Prospectus">Prospectus</option>
                    <option value="Friends">Friends</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center text-sm text-gray-500 border border-gray-200">
              <p><strong>For Office Use Only:</strong> Date application received ___________ Class admitted into ___________ Admission No ___________ Date of entrance ___________ Officer's name ___________ Sign & Date ___________</p>
            </div>

            <button type="submit" className="w-full bg-amber-500 text-blue-900 py-4 rounded-xl font-bold hover:bg-blue-900 hover:text-white transition-all shadow-lg flex items-center justify-center">
              Submit & Download PDF
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-center text-xs text-gray-500">After clicking, your PDF will download and WhatsApp will open. Please attach the downloaded PDF to the WhatsApp message.</p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}