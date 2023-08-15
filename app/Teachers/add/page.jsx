"use client"
import React from 'react'
import './add.css'
import StatusBar from '@/components/StatusBar/StatusBar'
import FormContainer, { FormFooter } from '@/components/common/FormContainer/FormContainer'
import { TextField, TextareaField, SelectImageField } from '@/components/common/TextField/TextField'
import { useForm } from "react-hook-form"
import { doAddTeacher } from '@/redux/asyncActions/teachers'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

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
  const { teacherId } = useSelector((state) => state.teacher)
  
  const { push } = useRouter();
  if (teacherId) {
    push(`/teachers/${teacherId}`);
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

      university: '',
      degree: '',
      startDate: '',
      endDate: '',
      city: '',
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

      university: data.university,
      degree: data.degree,
      startDate: data.startDate,
      endDate: data.endDate,
      city: data.city,
    }
    dispatch(doAddTeacher(submission))
  }

  const personalField = <>
    <TextField name="firstName" label={"First Name"} isRequired={true} placeholder="Maria" register={register} />
    <TextField name="lastName" label="Last Name" isRequired={true} placeholder="Hitoria" register={register} />
    <TextField name="email" label="Email" isRequired={true} placeholder="Historia@mail.com" register={register} />
    <TextField name="phone" label="Phone" isRequired={true} placeholder="+1234567890" register={register} />
    <TextareaField name="address" label="Address" isRequired={true} register={register} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    <SelectImageField name="photo" label="Photo" isRequired={true} register={register} />
    <TextField name="date" label="Date of Birth" isRequired={true} placeholder="24 Februari 1997" register={register} />
    <TextField name="place" label="Place of Birth" isRequired={true} placeholder="Jakarta, Indonesia" register={register} />
  </>

  const educationField = <>
    <TextField name="university" label={"University"} isRequired={true} placeholder="University Akademi Historia" register={register} />
    <TextField name="degree" label={"Degree"} isRequired={true} placeholder="History Major" register={register} />
    <TextField name="startDate" label={"Start Date"} isRequired={true} placeholder="September 2013" register={register} />
    <TextField name="endDate" label={"End Date"} isRequired={true} placeholder="September 2017" register={register} />
    <TextField name="city" label={"City"} isRequired={true} placeholder="Yogyakarta, Indonesia" register={register} />

  </>

  return (
    <>
      <form id="teacher-form" onSubmit={handleSubmit(submitForm)}>
        <FormContainer label="Personal Details" children={personalField} />
        <FormContainer label="Education" children={educationField} />
        <FormFooter formName="teacher-form"/>
      </form>
    </>

  )
}



export default AddTeacher