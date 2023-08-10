import React from 'react'
import './add.css'
import StatusBar from '@/components/StatusBar/StatusBar'
import { TextField, TextareaField, SelectImageField } from '@/components/common/TextField/TextField'

const AddTeacher = () => {
  return (
    <div id="add-teacher">
      <div className="add-teacher-header">
        <h1>
          Add Teacher
        </h1>
        <StatusBar />
      </div>
      <TeacherForm />
    </div>)
}

function TeacherForm() {

  const personalField = <>
    <TextField name="first-name" label={"First Name"} isRequired={true} placeholder="Maria" />
    <TextField name="last-name" label="Last Name" isRequired={true} placeholder="Hitoria" />
    <TextField name="email" label="Email" isRequired={true} placeholder="Historia@mail.com" />
    <TextField name="phone" label="Phone" isRequired={true} placeholder="+1234567890" />
    <TextareaField name="address" label="Address" isRequired={true} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    <SelectImageField label="Photo" isRequired={true} />
    <TextField name="date" label="Date of Birth" isRequired={true} placeholder="24 Februari 1997" />
    <TextField name="place" label="Place of Birth" isRequired={true} placeholder="Jakarta, Indonesia" />
  </>

  const educationField = <>
    <TextField name="university" label={"University"} isRequired={true} placeholder="University Akademi Historia" />
    <TextField name="degree" label={"Degree"} isRequired={true} placeholder="History Major" />
    <TextField name="start-date" label={"Start Date"} isRequired={true} placeholder="September 2013" />
    <TextField name="end-date" label={"End Date"} isRequired={true} placeholder="September 2017" />
    <TextField name="city" label={"City"} isRequired={true} placeholder="Yogyakarta, Indonesia" />

  </>

  return (
    <>
      <form id="teacher-form">
        <FormContainer label="Personal Details" children={personalField} />
        <FormContainer label="Education" children={educationField} />
        <div className="form-footer">
          <button className="save">Save as Draft</button>
          <button className="submit" type="submit" form="teacher-form" value="Submit">Submit</button>
        </div>
      </form>
    </>

  )
}

function FormContainer({ label, children }) {
  return (
    <div className="form">
      <div className="header">
        <h3 style={{ padding: "0px" }}>
          {label}
        </h3>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default AddTeacher