"use client"
import React from 'react'
import './add.css'
import StatusBar from '@/components/StatusBar/StatusBar'
import FormContainer, { FormFooter } from '@/components/common/FormContainer/FormContainer'
import { TextField, TextareaField, SelectImageField } from '@/components/common/TextField/TextField'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { doAddStudent } from '@/redux/asyncActions/students'
import { useRouter } from 'next/navigation'

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

    const { studentId } = useSelector((state) => state.student)
    const { push } = useRouter();
    if (studentId) {
        push(`/teachers/${studentId}`);
    }
    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            photo: '',
            date: '',
            place: '',

            parentFirstName: '',
            parentLastName: '',
            parentEmail: '',
            parentPhone: '',
            parentAddress: '',
        }
    })
    const dispatch = useDispatch()

    const submitForm = (data) => {
        const submission = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            photo: data.phone,
            date: data.date,
            place: data.place,

            parentFirstName: data.parentFirstName,
            parentLastName: data.parentLastName,
            parentEmail: data.parentEmail,
            parentPhone: data.parentPhone,
            parentAddress: data.parentAddress,
        }
        dispatch(doAddStudent(submission))
    }

    const studentField = <>
        <TextField name="firstName" label={"First Name"} isRequired={true} placeholder="Maria" register={register} />
        <TextField name="lastName" label="Last Name" isRequired={true} placeholder="Hitoria" register={register} />
        <TextField name="email" label="Email" isRequired={true} placeholder="Historia@mail.com" register={register} />
        <TextField name="phone" label="Phone" isRequired={true} placeholder="+1234567890" register={register} />
        <TextareaField name="address" label="Address" isRequired={true} register={register} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <SelectImageField name="photo" label="Photo" isRequired={true} register={register} />
        <TextField name="date" label="Date of Birth" isRequired={true} placeholder="24 Februari 1997" register={register} />
        <TextField name="place" label="Place of Birth" isRequired={true} placeholder="Jakarta, Indonesia" register={register} />
    </>

    const parentField = <>
        <TextField name="parentFirstName" label={"First Name"} isRequired={true} placeholder="Maria" register={register} />
        <TextField name="parentLastName" label="Last Name" isRequired={true} placeholder="Hitoria" register={register} />
        <TextField name="parentEmail" label="Email" isRequired={true} placeholder="Historia@mail.com" register={register} />
        <TextField name="parentPhone" label="Phone" isRequired={true} placeholder="+1234567890" register={register} />
        <TextareaField name="parentAddress" label="Address" isRequired={true} register={register} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    </>


    return (
        <>
            <form id="student-form" onSubmit={handleSubmit(submitForm)}>
                <FormContainer label="Student Details" children={studentField} />
                <FormContainer label="Parent Details" children={parentField} />
                <FormFooter formName="student-form" />
            </form>
        </>
    )
}

export default AddStudent