import React from 'react'
import './add.css'
import StatusBar from '@/components/StatusBar/StatusBar'
import FormContainer, { FormFooter } from '@/components/common/FormContainer/FormContainer'
import { TextField, TextareaField, SelectImageField } from '@/components/common/TextField/TextField'


const AddStudent = () => {
    return (
        <div id="add-student">
            <div className="add-student-header">
                <h1>
                    Add student
                </h1>
                <StatusBar />
            </div>
            <StudentForm />
        </div>
    )
}

function StudentForm() {

    const studentField = <>
        <TextField name="first-name" label={"First Name"} isRequired={true} placeholder="Maria" />
        <TextField name="last-name" label="Last Name" isRequired={true} placeholder="Hitoria" />
        <TextField name="email" label="Email" isRequired={true} placeholder="Historia@mail.com" />
        <TextField name="phone" label="Phone" isRequired={true} placeholder="+1234567890" />
        <TextareaField name="address" label="Address" isRequired={true} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <SelectImageField label="Photo" isRequired={true} />
        <TextField name="date" label="Date of Birth" isRequired={true} placeholder="24 Februari 1997" />
        <TextField name="place" label="Place of Birth" isRequired={true} placeholder="Jakarta, Indonesia" />
    </>

    const parentField = <>
        <TextField name="first-name" label={"First Name"} isRequired={true} placeholder="Maria" />
        <TextField name="last-name" label="Last Name" isRequired={true} placeholder="Hitoria" />
        <TextField name="email" label="Email" isRequired={true} placeholder="Historia@mail.com" />
        <TextField name="phone" label="Phone" isRequired={true} placeholder="+1234567890" />
        <TextareaField name="address" label="Address" isRequired={true} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    </>


    return (
        <>
            <form id="student-form">
                <FormContainer label="Student Details" children={studentField} />
                <FormContainer label="Parent Details" children={parentField} />
                <FormFooter />
            </form>
        </>
    )
}

export default AddStudent