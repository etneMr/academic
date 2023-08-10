import React from 'react'
import './Dashboard.css'
import StatusBar from '@/components/StatusBar/StatusBar'
import { PageNavigation } from '@/components/common/PageNavigation/PageNavigation'
import SearchBar from '@/components/common/SearchBar/SearchBar'

const data = [
    {
        title: "Students",
        color: "#4D44B5",
        total: 932,
        icon: <>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ display: "block", margin: "auto" }}>
                <g clipPath="url(#clip0_3_7)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9288 38.75H8.75C6.67875 38.75 5 37.0713 5 35V24.5863C5 22.7738 6.29625 21.2213 8.07875 20.8975C10.7212 20.4163 15.2775 19.5875 17.855 19.12C19.2737 18.8612 20.7263 18.8612 22.145 19.12C24.7225 19.5875 29.2788 20.4163 31.9213 20.8975C33.7038 21.2213 35 22.7738 35 24.5863C35 27.3125 35 32.0825 35 35C35 37.0713 33.3212 38.75 31.25 38.75H17.9288ZM29.785 23.05L29.79 23.0563C30.0088 23.3838 30.06 23.795 29.9287 24.1662L29.0462 26.6662C28.9312 26.9925 28.685 27.2575 28.3675 27.3963L26.7075 28.12L27.3675 29.4412C27.5525 29.81 27.5425 30.2462 27.3425 30.6075L24.2075 36.25H31.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L29.785 23.05ZM26.3663 22.4275L21.6975 21.5788C20.575 21.375 19.425 21.375 18.3025 21.5788L13.6337 22.4275L12.6363 23.9238L13.13 25.3213L15.5 26.3537C15.8138 26.4912 16.0575 26.7512 16.175 27.0737C16.2925 27.3962 16.2712 27.7525 16.1175 28.0588L15.1625 29.9688L18.6525 36.25H21.3475L24.8375 29.9688L23.8825 28.0588C23.7288 27.7525 23.7075 27.3962 23.825 27.0737C23.9425 26.7512 24.1862 26.4912 24.5 26.3537L26.87 25.3213L27.3638 23.9238L26.3663 22.4275ZM10.215 23.05L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25H15.7925L12.6575 30.6075C12.4575 30.2462 12.4475 29.81 12.6325 29.4412L13.2925 28.12L11.6325 27.3963C11.315 27.2575 11.0688 26.9925 10.9538 26.6662L10.0712 24.1662C9.94 23.795 9.99125 23.3838 10.21 23.0563L10.215 23.05ZM28.75 30V32.5C28.75 33.19 29.31 33.75 30 33.75C30.69 33.75 31.25 33.19 31.25 32.5V30C31.25 29.31 30.69 28.75 30 28.75C29.31 28.75 28.75 29.31 28.75 30ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_3_7">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg></>
    },
    {
        title: "Teachers",
        color: "#FB7D5B",
        total: 754,
        icon: <>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clipPath="url(#clip0_3_21)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 35C5 37.0713 6.67875 38.75 8.75 38.75H31.25C33.3212 38.75 35 37.0713 35 35C35 32.0825 35 27.3125 35 24.5863C35 22.7738 33.7038 21.2213 31.9213 20.8975C29.2788 20.4163 24.7225 19.5875 22.145 19.12C20.7263 18.8612 19.2737 18.8612 17.855 19.12C15.2775 19.5875 10.7212 20.4163 8.07875 20.8975C6.29625 21.2213 5 22.7738 5 24.5863V35ZM22.885 21.795L24.7612 28.9288C25.0075 29.865 24.6775 30.8588 23.92 31.4638C23.28 31.9738 22.2713 32.7788 21.5713 33.3388C20.6525 34.0713 19.3475 34.0713 18.4287 33.3388C17.7287 32.7788 16.72 31.9738 16.08 31.4638C15.3225 30.8588 14.9925 29.865 15.2388 28.9288L17.115 21.795L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25C13.98 36.25 26.02 36.25 31.25 36.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L22.885 21.795ZM20.2038 21.4288C20.0675 21.425 19.9325 21.425 19.7962 21.4288L17.6663 29.5312L19.9887 31.3837C19.995 31.39 20.005 31.39 20.0113 31.3837L22.3337 29.5312L20.2038 21.4288ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_3_21">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg></>
    },
    {
        title: "Events",
        color: "#FCC43E",
        total: 40,
        icon: <>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M30 8.75H27.5V7.5C27.5 7.16848 27.3683 6.85054 27.1339 6.61612C26.8995 6.3817 26.5815 6.25 26.25 6.25C25.9185 6.25 25.6005 6.3817 25.3661 6.61612C25.1317 6.85054 25 7.16848 25 7.5V8.75H21.25V7.5C21.25 7.16848 21.1183 6.85054 20.8839 6.61612C20.6495 6.3817 20.3315 6.25 20 6.25C19.6685 6.25 19.3505 6.3817 19.1161 6.61612C18.8817 6.85054 18.75 7.16848 18.75 7.5V8.75H15V7.5C15 7.16848 14.8683 6.85054 14.6339 6.61612C14.3995 6.3817 14.0815 6.25 13.75 6.25C13.4185 6.25 13.1005 6.3817 12.8661 6.61612C12.6317 6.85054 12.5 7.16848 12.5 7.5V8.75H10C9.00544 8.75 8.05161 9.14509 7.34835 9.84835C6.64509 10.5516 6.25 11.5054 6.25 12.5V30C6.25 30.9946 6.64509 31.9484 7.34835 32.6517C8.05161 33.3549 9.00544 33.75 10 33.75H30C30.9946 33.75 31.9484 33.3549 32.6517 32.6517C33.3549 31.9484 33.75 30.9946 33.75 30V12.5C33.75 11.5054 33.3549 10.5516 32.6517 9.84835C31.9484 9.14509 30.9946 8.75 30 8.75ZM8.75 12.5C8.75 12.1685 8.8817 11.8505 9.11612 11.6161C9.35054 11.3817 9.66848 11.25 10 11.25H12.5V12.5C12.5 12.8315 12.6317 13.1495 12.8661 13.3839C13.1005 13.6183 13.4185 13.75 13.75 13.75C14.0815 13.75 14.3995 13.6183 14.6339 13.3839C14.8683 13.1495 15 12.8315 15 12.5V11.25H18.75V12.5C18.75 12.8315 18.8817 13.1495 19.1161 13.3839C19.3505 13.6183 19.6685 13.75 20 13.75C20.3315 13.75 20.6495 13.6183 20.8839 13.3839C21.1183 13.1495 21.25 12.8315 21.25 12.5V11.25H25V12.5C25 12.8315 25.1317 13.1495 25.3661 13.3839C25.6005 13.6183 25.9185 13.75 26.25 13.75C26.5815 13.75 26.8995 13.6183 27.1339 13.3839C27.3683 13.1495 27.5 12.8315 27.5 12.5V11.25H30C30.3315 11.25 30.6495 11.3817 30.8839 11.6161C31.1183 11.8505 31.25 12.1685 31.25 12.5V16.25H8.75V12.5ZM31.25 30C31.25 30.3315 31.1183 30.6495 30.8839 30.8839C30.6495 31.1183 30.3315 31.25 30 31.25H10C9.66848 31.25 9.35054 31.1183 9.11612 30.8839C8.8817 30.6495 8.75 30.3315 8.75 30V18.75H31.25V30Z" fill="white" />
            </svg></>
    },
    {
        title: "Foods",
        color: "#303972",
        total: "32k",
        icon: <>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M14.2545 3.50917C11.9688 4.64226 10.0464 6.39315 8.70524 8.56327C7.36408 10.7334 6.65785 13.2359 6.66665 15.787V21.7167C6.6677 22.5871 7.01397 23.4216 7.62948 24.0372C8.245 24.6527 9.07951 24.9989 9.94998 25H13.3333V35C13.3333 35.442 13.5089 35.866 13.8215 36.1785C14.134 36.4911 14.558 36.6667 15 36.6667C15.442 36.6667 15.8659 36.4911 16.1785 36.1785C16.4911 35.866 16.6666 35.442 16.6666 35V5C16.6664 4.71598 16.5936 4.43673 16.4552 4.18872C16.3168 3.9407 16.1173 3.73215 15.8757 3.58283C15.6341 3.43351 15.3584 3.34837 15.0747 3.33548C14.7909 3.32259 14.5086 3.38237 14.2545 3.50917ZM13.3333 21.6833L9.99998 21.7167V15.787C9.99498 14.3525 10.2888 12.9327 10.8627 11.618C11.4366 10.3034 12.278 9.12261 13.3333 8.151V21.6833ZM30 5V11.6667C29.9994 12.1085 29.8236 12.5321 29.5112 12.8445C29.1988 13.157 28.7752 13.3328 28.3333 13.3333V5C28.3333 4.55797 28.1577 4.13405 27.8452 3.82149C27.5326 3.50893 27.1087 3.33333 26.6666 3.33333C26.2246 3.33333 25.8007 3.50893 25.4881 3.82149C25.1756 4.13405 25 4.55797 25 5V13.3333C24.5581 13.3328 24.1345 13.157 23.8221 12.8445C23.5097 12.5321 23.3339 12.1085 23.3333 11.6667V5C23.3333 4.55797 23.1577 4.13405 22.8452 3.82149C22.5326 3.50893 22.1087 3.33333 21.6666 3.33333C21.2246 3.33333 20.8007 3.50893 20.4881 3.82149C20.1756 4.13405 20 4.55797 20 5V11.6667C20.0014 12.9923 20.5287 14.2632 21.4661 15.2006C22.4034 16.138 23.6743 16.6652 25 16.6667V35C25 35.442 25.1756 35.866 25.4881 36.1785C25.8007 36.4911 26.2246 36.6667 26.6666 36.6667C27.1087 36.6667 27.5326 36.4911 27.8452 36.1785C28.1577 35.866 28.3333 35.442 28.3333 35V16.6667C29.6589 16.6652 30.9299 16.138 31.8672 15.2006C32.8046 14.2632 33.3319 12.9923 33.3333 11.6667V5C33.3333 4.55797 33.1577 4.13405 32.8452 3.82149C32.5326 3.50893 32.1087 3.33333 31.6666 3.33333C31.2246 3.33333 30.8007 3.50893 30.4881 3.82149C30.1756 4.13405 30 4.55797 30 5Z" fill="white" />
            </svg></>
    }
]

const listStudents = [
    {
        image: "",
        name: "Samantha William",
        id: "ID 123456789",
        class: "VII A",
        unpaid: "$ 50,036",

    },
    {
        image: "",
        name: "Tony Soap",
        id: "ID 123456785",
        class: "VII A",
        unpaid: "$ 50,036",

    },
    {
        image: "",
        name: "Jordan Nico",
        id: "ID 123456786",
        class: "VII A",
        unpaid: "$ 50,036",

    },
    {
        image: "",
        name: "Karen Hope",
        id: "ID 123456787",
        class: "VII A",
        unpaid: "$ 50,036",

    },
    {
        image: "",
        name: "Nadila Adja",
        id: "ID 123456788",
        class: "VII A",
        unpaid: "$ 50,036",

    }
]

const listMessages = [
    {
        sendFrom: "Samantha William",
        message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores expedita est harum laborum nemo, vel debitis suscipit aperiam quibusdam mollitia at itaque cumque quaerat id rerum molestias. Et, praesentium fuga.",
        time: "12:45 PM"
    },
    {
        sendFrom: "Tony Soap",
        message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores expedita est harum laborum nemo, vel debitis suscipit aperiam quibusdam mollitia at itaque cumque quaerat id rerum molestias. Et, praesentium fuga.",
        time: "12:45 PM"
    },
    {
        sendFrom: "Jordan Nico",
        message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores expedita est harum laborum nemo, vel debitis suscipit aperiam quibusdam mollitia at itaque cumque quaerat id rerum molestias. Et, praesentium fuga.",
        time: "12:45 PM"
    },
    {
        sendFrom: "Nadila Adja",
        message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores expedita est harum laborum nemo, vel debitis suscipit aperiam quibusdam mollitia at itaque cumque quaerat id rerum molestias. Et, praesentium fuga.",
        time: "12:45 PM"
    }
]

const listPosts = [
    {
        thumbnail: "",
        title: "Beef Steak with Fried Potato",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        thumbnail: "",
        title: "Japanese Beef Ramen",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        thumbnail: "",
        title: "Pancake with Honey",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    }
]

const Dashboard = () => {
    return (
        <>
            <div id="dashboard">
                <div className="dashboard-header">
                    <h1>
                        Dashboard
                    </h1>
                    <SearchBar />
                </div>
                <div className="overview">
                    {data.map((item) => <OverviewItem data={item} key={item.title} />)}
                </div>
                <UnpaidStudent listStudents={listStudents} />
            </div>
            <SideStatus />
        </>
    )
}

function OverviewItem({ data }) {
    return (
        <div className="overview-item">
            <div className="overview-icon" style={{ backgroundColor: data.color }}>
                {data.icon}
            </div>
            <div className="overview-content">
                <div className="overview-title">
                    {data.title}
                </div>
                <div className="overview-numb">
                    {data.total}
                </div>
            </div>
        </div>
    )
}

function UnpaidStudent({ listStudents }) {
    const rows = [];
    listStudents.map((student) => rows.push(
        <tr className="student-item" key={student.id}>
            <td className="student-img">

            </td>
            <td className="student-name">
                {student.name}
            </td>
            <td className="student-id">
                {student.id}
            </td>
            <td className="student-class">
                <student className="student-teacher">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.7055 6.52503C15.7055 6.73128 15.6914 6.93753 15.6656 7.14144C15.6773 7.05941 15.689 6.97503 15.6984 6.893C15.6422 7.30081 15.5344 7.69691 15.3773 8.07659C15.4078 8.00159 15.4406 7.92659 15.4711 7.85159C15.314 8.22191 15.1125 8.56878 14.8664 8.88753C14.9156 8.82425 14.9648 8.76097 15.014 8.69769C14.7703 9.01175 14.4867 9.29534 14.1726 9.53909C14.2359 9.48987 14.2992 9.44066 14.3625 9.39144C14.0437 9.63519 13.6969 9.83909 13.3265 9.99612C13.4015 9.96566 13.4765 9.93284 13.5515 9.90237C13.1719 10.0594 12.7758 10.1672 12.368 10.2235C12.45 10.2118 12.5344 10.2 12.6164 10.1907C12.2062 10.2446 11.7937 10.2446 11.3836 10.1907C11.4656 10.2024 11.55 10.2141 11.632 10.2235C11.2242 10.1672 10.8281 10.0594 10.4484 9.90237C10.5234 9.93284 10.5984 9.96566 10.6734 9.99612C10.3031 9.83909 9.95623 9.63753 9.63748 9.39144C9.70076 9.44066 9.76404 9.48987 9.82732 9.53909C9.51326 9.29534 9.22967 9.01175 8.98592 8.69769C9.03514 8.76097 9.08436 8.82425 9.13357 8.88753C8.88982 8.56878 8.68592 8.22191 8.52889 7.85159C8.55936 7.92659 8.59217 8.00159 8.62264 8.07659C8.4656 7.69691 8.35779 7.30081 8.30154 6.893C8.31326 6.97503 8.32498 7.05941 8.33436 7.14144C8.28045 6.73128 8.28045 6.31878 8.33436 5.90863C8.32264 5.99066 8.31092 6.07503 8.30154 6.15706C8.35779 5.74925 8.4656 5.35316 8.62264 4.97347C8.59217 5.04847 8.55936 5.12347 8.52889 5.19847C8.68592 4.82816 8.88748 4.48128 9.13357 4.16253C9.08436 4.22581 9.03514 4.28909 8.98592 4.35238C9.22967 4.03831 9.51326 3.75472 9.82732 3.51097C9.76404 3.56019 9.70076 3.60941 9.63748 3.65863C9.95623 3.41488 10.3031 3.21097 10.6734 3.05394C10.5984 3.08441 10.5234 3.11722 10.4484 3.14769C10.8281 2.99066 11.2242 2.88284 11.632 2.82659C11.55 2.83831 11.4656 2.85003 11.3836 2.85941C11.7937 2.8055 12.2062 2.8055 12.6164 2.85941C12.5344 2.84769 12.45 2.83597 12.368 2.82659C12.7758 2.88284 13.1719 2.99066 13.5515 3.14769C13.4765 3.11722 13.4015 3.08441 13.3265 3.05394C13.6969 3.21097 14.0437 3.41253 14.3625 3.65863C14.2992 3.60941 14.2359 3.56019 14.1726 3.51097C14.4867 3.75472 14.7703 4.03831 15.014 4.35238C14.9648 4.28909 14.9156 4.22581 14.8664 4.16253C15.1101 4.48128 15.314 4.82816 15.4711 5.19847C15.4406 5.12347 15.4078 5.04847 15.3773 4.97347C15.5344 5.35316 15.6422 5.74925 15.6984 6.15706C15.6867 6.07503 15.675 5.99066 15.6656 5.90863C15.6914 6.11253 15.7031 6.31878 15.7055 6.52503C15.7078 7.01487 16.1344 7.48597 16.643 7.46253C17.1492 7.43909 17.5828 7.05003 17.5805 6.52503C17.5758 5.40238 17.2383 4.25394 16.5773 3.33988C16.3992 3.09378 16.2094 2.85238 15.9984 2.63441C15.7851 2.41409 15.5508 2.22425 15.307 2.03909C14.864 1.70159 14.3695 1.45316 13.8445 1.26097C11.7281 0.485188 9.17576 1.17659 7.74373 2.92034C7.54685 3.15941 7.35935 3.40784 7.19998 3.67503C7.0406 3.93988 6.91639 4.22113 6.80154 4.50706C6.58592 5.03675 6.47576 5.59925 6.43123 6.16878C6.34451 7.28441 6.63513 8.44925 7.21639 9.4055C7.77654 10.3289 8.62264 11.1211 9.6117 11.5688C9.90233 11.7 10.2 11.8219 10.5094 11.9086C10.8164 11.993 11.1281 12.0399 11.4445 12.0774C12.0211 12.1453 12.6094 12.0985 13.1789 11.9836C15.3422 11.543 17.1539 9.67972 17.489 7.493C17.5383 7.17425 17.5758 6.8555 17.5758 6.53206C17.5781 6.04222 17.1422 5.57113 16.6383 5.59456C16.132 5.61097 15.7055 6.00003 15.7055 6.52503ZM18.8156 21.1805C18.3562 21.1805 17.8969 21.1805 17.4375 21.1805C16.343 21.1805 15.2508 21.1805 14.1562 21.1805C12.839 21.1805 11.5219 21.1805 10.2023 21.1805C9.06561 21.1805 7.92889 21.1805 6.78982 21.1805C6.25779 21.1805 5.72576 21.1852 5.19373 21.1805C5.13513 21.1805 5.07654 21.1758 5.02029 21.1688C5.10232 21.1805 5.1867 21.1922 5.26873 21.2016C5.17498 21.1875 5.08591 21.1617 4.9992 21.1266C5.0742 21.1571 5.1492 21.1899 5.2242 21.2203C5.13045 21.1805 5.04373 21.1289 4.9617 21.0657C5.02498 21.1149 5.08826 21.1641 5.15154 21.2133C5.08123 21.1547 5.0156 21.0914 4.95935 21.0211C5.00857 21.0844 5.05779 21.1477 5.10701 21.211C5.04373 21.1289 4.99451 21.0422 4.95232 20.9485C4.98279 21.0235 5.0156 21.0985 5.04607 21.1735C5.01091 21.0868 4.98748 20.9953 4.97107 20.9039C4.98279 20.986 4.99451 21.0703 5.00388 21.1524C4.96638 20.8688 4.99216 20.5688 4.99216 20.2828C4.99216 19.9477 4.99216 19.6149 4.99216 19.2797C4.99216 19.0289 5.00623 18.7805 5.03904 18.5321C5.02732 18.6141 5.0156 18.6985 5.00623 18.7805C5.07185 18.3 5.19841 17.8289 5.38826 17.3813C5.35779 17.4563 5.32498 17.5313 5.29451 17.6063C5.47732 17.1797 5.7117 16.7789 5.99529 16.411C5.94607 16.4742 5.89685 16.5375 5.84763 16.6008C6.13123 16.2375 6.45701 15.9094 6.82264 15.6258C6.75935 15.675 6.69607 15.7242 6.63279 15.7735C7.00076 15.4899 7.40154 15.2555 7.8281 15.0727C7.7531 15.1032 7.6781 15.136 7.6031 15.1664C8.05076 14.9789 8.51951 14.85 9.00232 14.7844C8.92029 14.7961 8.83592 14.8078 8.75389 14.8172C9.10076 14.7727 9.44529 14.7703 9.79451 14.7703C10.2234 14.7703 10.6523 14.7703 11.0812 14.7703C12.082 14.7703 13.0828 14.7703 14.0836 14.7703C14.4703 14.7703 14.8547 14.768 15.2414 14.8172C15.1594 14.8055 15.075 14.7938 14.993 14.7844C15.4734 14.85 15.9445 14.9766 16.3922 15.1664C16.3172 15.136 16.2422 15.1032 16.1672 15.0727C16.5937 15.2555 16.9945 15.4899 17.3625 15.7735C17.2992 15.7242 17.2359 15.675 17.1726 15.6258C17.5359 15.9094 17.864 16.2352 18.1476 16.6008C18.0984 16.5375 18.0492 16.4742 18 16.411C18.2836 16.7789 18.518 17.1797 18.7008 17.6063C18.6703 17.5313 18.6375 17.4563 18.607 17.3813C18.7945 17.8289 18.9234 18.2977 18.9891 18.7805C18.9773 18.6985 18.9656 18.6141 18.9562 18.5321C19.0008 18.886 19.0031 19.2375 19.0031 19.5938C19.0031 19.9805 19.0031 20.3672 19.0031 20.7539C19.0031 20.8875 19.0078 21.0211 18.9914 21.1524C19.0031 21.0703 19.0148 20.986 19.0242 20.9039C19.0101 20.9977 18.9844 21.0868 18.9492 21.1735C18.9797 21.0985 19.0125 21.0235 19.043 20.9485C19.0031 21.0422 18.9516 21.1289 18.8883 21.211C18.9375 21.1477 18.9867 21.0844 19.0359 21.0211C18.9773 21.0914 18.9141 21.1571 18.8437 21.2133C18.907 21.1641 18.9703 21.1149 19.0336 21.0657C18.9516 21.1289 18.8648 21.1782 18.7711 21.2203C18.8461 21.1899 18.9211 21.1571 18.9961 21.1266C18.9094 21.1617 18.818 21.1852 18.7266 21.2016C18.8086 21.1899 18.893 21.1782 18.975 21.1688C18.9234 21.1758 18.8695 21.1782 18.8156 21.1805C18.5742 21.1828 18.3258 21.2836 18.1523 21.4547C17.9906 21.6164 17.8664 21.8836 17.8781 22.118C17.9016 22.6196 18.2906 23.0625 18.8156 23.0555C19.7273 23.0414 20.5289 22.4461 20.7961 21.5719C20.9016 21.225 20.8781 20.8524 20.8781 20.4961C20.8781 19.6805 20.9039 18.8719 20.7633 18.0633C20.557 16.8797 19.9617 15.7664 19.1461 14.8922C18.3305 14.018 17.2336 13.3758 16.0734 13.0899C15.4078 12.9258 14.7375 12.9 14.0578 12.9C13.3594 12.9 12.6633 12.9 11.9648 12.9C11.2758 12.9 10.589 12.9 9.89998 12.9C9.20389 12.9 8.51248 12.9328 7.83514 13.1133C6.68435 13.418 5.60154 14.0672 4.80232 14.9485C3.99607 15.8367 3.41248 16.9524 3.22263 18.143C3.09607 18.9422 3.12185 19.7438 3.12185 20.55C3.12185 20.9203 3.10076 21.3071 3.23435 21.661C3.40779 22.1157 3.68435 22.4742 4.08982 22.7438C4.40623 22.9524 4.80701 23.0532 5.18201 23.0578C5.36482 23.0602 5.54763 23.0578 5.73045 23.0578C6.1992 23.0578 6.6656 23.0578 7.13435 23.0578C7.79998 23.0578 8.46326 23.0578 9.12889 23.0578C9.90233 23.0578 10.6758 23.0578 11.4492 23.0578C12.2437 23.0578 13.0359 23.0578 13.8305 23.0578C14.557 23.0578 15.2812 23.0578 16.0078 23.0578C16.5773 23.0578 17.1469 23.0578 17.714 23.0578C18.0398 23.0578 18.3656 23.0578 18.6914 23.0578C18.7336 23.0578 18.7758 23.0578 18.818 23.0578C19.3078 23.0578 19.7789 22.6266 19.7555 22.1203C19.732 21.6094 19.343 21.1805 18.8156 21.1805Z" fill="white" />
                    </svg>
                </student>
                <div className="student-class-info">
                    <div className="student-class-text">
                        Class
                    </div>
                    <div className="student-class-content">
                        {student.class}
                    </div>
                </div>
            </td>
            <td className="unpaid-money">
                {student.unpaid}
            </td>
            <td>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_6_684)">
                        <path d="M23 19H18.93C18.6648 19 18.4104 18.8946 18.2229 18.7071C18.0354 18.5196 17.93 18.2652 17.93 18V15H6V18C6 18.2652 5.89464 18.5196 5.70711 18.7071C5.51957 18.8946 5.26522 19 5 19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5196 0 18.2652 0 18V8C0 7.20435 0.31607 6.44129 0.87868 5.87868C1.44129 5.31607 2.20435 5 3 5H21C21.7956 5 22.5587 5.31607 23.1213 5.87868C23.6839 6.44129 24 7.20435 24 8V18C24 18.2652 23.8946 18.5196 23.7071 18.7071C23.5196 18.8946 23.2652 19 23 19ZM19.93 17H22V8C22.0015 7.86827 21.9766 7.73757 21.9269 7.61558C21.8771 7.49359 21.8035 7.38276 21.7104 7.28961C21.6172 7.19646 21.5064 7.12285 21.3844 7.07312C21.2624 7.02339 21.1317 6.99853 21 7H3C2.86827 6.99853 2.73757 7.02339 2.61558 7.07312C2.49359 7.12285 2.38276 7.19646 2.28961 7.28961C2.19646 7.38276 2.12285 7.49359 2.07312 7.61558C2.02339 7.73757 1.99853 7.86827 2 8V17H4V14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H18.93C19.1952 13 19.4496 13.1054 19.6371 13.2929C19.8246 13.4804 19.93 13.7348 19.93 14V17Z" fill="#A098AE" />
                        <path d="M18.9331 7H5.00012C4.73491 7 4.48055 6.89464 4.29302 6.70711C4.10548 6.51957 4.00012 6.26522 4.00012 6V1C4.00012 0.734784 4.10548 0.48043 4.29302 0.292893C4.48055 0.105357 4.73491 0 5.00012 0L18.9331 0C19.1983 0 19.4527 0.105357 19.6402 0.292893C19.8278 0.48043 19.9331 0.734784 19.9331 1V6C19.9331 6.26522 19.8278 6.51957 19.6402 6.70711C19.4527 6.89464 19.1983 7 18.9331 7ZM6.00012 5H17.9331V2H6.00012V5ZM17.0331 24H6.90012C6.13099 24 5.39337 23.6945 4.84951 23.1506C4.30566 22.6068 4.00012 21.8691 4.00012 21.1V14C4.00012 13.7348 4.10548 13.4804 4.29302 13.2929C4.48055 13.1054 4.73491 13 5.00012 13H18.9301C19.1953 13 19.4497 13.1054 19.6372 13.2929C19.8248 13.4804 19.9301 13.7348 19.9301 14V21.1C19.9301 21.8686 19.625 22.6058 19.0818 23.1495C18.5386 23.6933 17.8017 23.9992 17.0331 24ZM6.00012 15V21.1C6.00012 21.3387 6.09494 21.5676 6.26373 21.7364C6.43251 21.9052 6.66143 22 6.90012 22H17.0331C17.2718 22 17.5007 21.9052 17.6695 21.7364C17.8383 21.5676 17.9331 21.3387 17.9331 21.1V15H6.00012ZM20.0001 10H19.0001C18.7349 10 18.4806 9.89464 18.293 9.70711C18.1055 9.51957 18.0001 9.26522 18.0001 9C18.0001 8.73478 18.1055 8.48043 18.293 8.29289C18.4806 8.10536 18.7349 8 19.0001 8H20.0001C20.2653 8 20.5197 8.10536 20.7072 8.29289C20.8948 8.48043 21.0001 8.73478 21.0001 9C21.0001 9.26522 20.8948 9.51957 20.7072 9.70711C20.5197 9.89464 20.2653 10 20.0001 10Z" fill="#A098AE" />
                        <path d="M14.9999 18H8.99988C8.73466 18 8.48031 17.8946 8.29277 17.7071C8.10523 17.5196 7.99988 17.2652 7.99988 17C7.99988 16.7348 8.10523 16.4804 8.29277 16.2929C8.48031 16.1054 8.73466 16 8.99988 16H14.9999C15.2651 16 15.5194 16.1054 15.707 16.2929C15.8945 16.4804 15.9999 16.7348 15.9999 17C15.9999 17.2652 15.8945 17.5196 15.707 17.7071C15.5194 17.8946 15.2651 18 14.9999 18ZM11.9999 21H8.99988C8.73466 21 8.48031 20.8946 8.29277 20.7071C8.10523 20.5196 7.99988 20.2652 7.99988 20C7.99988 19.7348 8.10523 19.4804 8.29277 19.2929C8.48031 19.1054 8.73466 19 8.99988 19H11.9999C12.2651 19 12.5194 19.1054 12.707 19.2929C12.8945 19.4804 12.9999 19.7348 12.9999 20C12.9999 20.2652 12.8945 20.5196 12.707 20.7071C12.5194 20.8946 12.2651 21 11.9999 21Z" fill="#A098AE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6_684">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0012 9.35999C11.6543 9.35999 11.3109 9.4283 10.9904 9.56103C10.67 9.69377 10.3788 9.88832 10.1335 10.1336C9.88829 10.3788 9.69374 10.67 9.56101 10.9904C9.42828 11.3109 9.35996 11.6543 9.35996 12.0012C9.35996 12.348 9.42828 12.6915 9.56101 13.0119C9.69374 13.3324 9.88829 13.6235 10.1335 13.8688C10.3788 14.1141 10.67 14.3086 10.9904 14.4413C11.3109 14.5741 11.6543 14.6424 12.0012 14.6424C12.7017 14.6422 13.3734 14.3638 13.8686 13.8684C14.3638 13.3729 14.6419 12.7011 14.6418 12.0006C14.6416 11.3001 14.3632 10.6284 13.8677 10.1332C13.3723 9.63794 12.7004 9.35983 12 9.35999H12.0012ZM3.60116 9.35999C3.25431 9.35999 2.91086 9.4283 2.59042 9.56103C2.26997 9.69377 1.97881 9.88832 1.73355 10.1336C1.48829 10.3788 1.29374 10.67 1.16101 10.9904C1.02828 11.3109 0.959961 11.6543 0.959961 12.0012C0.959961 12.348 1.02828 12.6915 1.16101 13.0119C1.29374 13.3324 1.48829 13.6235 1.73355 13.8688C1.97881 14.1141 2.26997 14.3086 2.59042 14.4413C2.91086 14.5741 3.25431 14.6424 3.60116 14.6424C4.30165 14.6422 4.97339 14.3638 5.4686 13.8684C5.9638 13.3729 6.24192 12.7011 6.24176 12.0006C6.2416 11.3001 5.96318 10.6284 5.46775 10.1332C4.97231 9.63794 4.30045 9.35983 3.59996 9.35999H3.60116ZM20.4012 9.35999C20.0543 9.35999 19.7109 9.4283 19.3904 9.56103C19.07 9.69377 18.7788 9.88832 18.5336 10.1336C18.2883 10.3788 18.0937 10.67 17.961 10.9904C17.8283 11.3109 17.76 11.6543 17.76 12.0012C17.76 12.348 17.8283 12.6915 17.961 13.0119C18.0937 13.3324 18.2883 13.6235 18.5336 13.8688C18.7788 14.1141 19.07 14.3086 19.3904 14.4413C19.7109 14.5741 20.0543 14.6424 20.4012 14.6424C21.1017 14.6422 21.7734 14.3638 22.2686 13.8684C22.7638 13.3729 23.0419 12.7011 23.0418 12.0006C23.0416 11.3001 22.7632 10.6284 22.2677 10.1332C21.7723 9.63794 21.1005 9.35983 20.4 9.35999H20.4012Z" fill="#A098AE" />
                </svg>
            </td>
        </tr>
    ))
    return (
        <div className="unpaid-student">
            <div className="unpaid-student-header">
                Unpaid Student Intuition
            </div>
            <table className="list-unpaid-students">
                <tbody>
                    {rows}
                </tbody>
            </table>
            <PageNavigation length={5} selected={0} />
        </div >)
}

function SideStatus() {
    return (
        <div className="side-status">
            <StatusBar />
            <RecentStudents listStudents={listStudents} />
            <Messages listMessages={listMessages} />
            <Posts listPosts={listPosts} />
        </div>
    );
}

function RecentStudents({ listStudents }) {
    const rows = [];
    listStudents.map((student) => rows.push(
        <div className="recent-student-item">
            <div className="recent-student-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect y="0.00012207" width="48" height="48" rx="24" fill="#C1BBEB" />
                </svg>
            </div>
            <div className="recent-student-info">
                <div className="name">
                    {student.name}
                </div>
                <div className="class">
                    class {student.class}
                </div>
            </div>
            <button className="open-message-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z" fill="#A098AE" />
                </svg>
            </button>
        </div>
    ))
    return (
        <div className="recent-students">
            <div className="recent-students-header">
                <div className="dashboard-aritcle">
                    <div className="dashboard-article-title">
                        Recent Students
                    </div>
                    <div className="dashboard-article-subs">
                        You have <span className="total">456</span> students
                    </div>
                </div>
                <button className="add-message-student">
                    <div className="plus-text">
                        +
                    </div>
                </button>
            </div>
            {rows}
            <button className="recent-students-viewmore">
                View More
            </button>
        </div>
    )
}

function Messages({ listMessages }) {
    const rows = [];

    listMessages.map((message) =>
        rows.push(
            <div className="recent-messages-item">
                <div className="recent-student-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect y="0.00012207" width="48" height="48" rx="24" fill="#C1BBEB" />
                    </svg>
                </div>
                <div className="recent-student-info">
                    <div className="name">
                        {message.sendFrom}
                    </div>
                    <div className="message">
                        {message.message}
                    </div>
                </div>
                <div className="time-sending">
                    {message.time}
                </div>
            </div>
        )
    )
    return (
        <div className="recent-students">
            <div className="dashboard-aritcle">
                <div className="dashboard-article-title">
                    Messages
                </div>
            </div>
            {rows}
            <button className="recent-students-viewmore">
                View More
            </button>
        </div>
    )
}

function Posts({ listPosts }) {
    const rows = [];

    listPosts.map((post) =>
        rows.push(
            <div className="post-item">
                <div className="post-thumbnail">

                </div>
                <div className="title">
                    {post.title}
                </div>
                <div className="des">
                    {post.des}
                </div>
            </div>
        )
    )
    return (
        <div className="recent-students">
            <div className="dashboard-aritcle">
                <div className="dashboard-article-title">
                    Current Foods Menu
                </div>
            </div>
            {rows}
            <button className="recent-students-viewmore">
                View More
            </button>
        </div>
    )
}

export default Dashboard