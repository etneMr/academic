import React from 'react'
import './user.css'
import StatusBar from '@/components/StatusBar/StatusBar'
import SearchBar from '@/components/common/SearchBar/SearchBar'

const activities = [
    {
        name: "",
    },
    {
        name: "",

    },
    {
        name: "",

    },
    {
        name: "",

    }
]

const User = () => {
    return (
        <>
            <div id="user">
                <div className="user-header">
                    <h1>
                        User Dashboard
                    </h1>
                    <SearchBar />
                </div>
            </div>
            <UserSideBar />
        </>

    )
}

function UserSideBar() {
    return (
        <div className="side-status">
            <StatusBar />
            <PlanComponent />
            <LastActivityComponent listActivities={activities} />
        </div>
    )
}

function PlanComponent() {
    return (
        <div className="plan-component">
            <div className="action">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0012 9.36011C11.6543 9.36011 11.3109 9.42842 10.9904 9.56116C10.67 9.69389 10.3788 9.88844 10.1335 10.1337C9.88829 10.379 9.69374 10.6701 9.56101 10.9906C9.42828 11.311 9.35996 11.6545 9.35996 12.0013C9.35996 12.3482 9.42828 12.6916 9.56101 13.0121C9.69374 13.3325 9.88829 13.6237 10.1335 13.8689C10.3788 14.1142 10.67 14.3087 10.9904 14.4415C11.3109 14.5742 11.6543 14.6425 12.0012 14.6425C12.7017 14.6423 13.3734 14.3639 13.8686 13.8685C14.3638 13.3731 14.6419 12.7012 14.6418 12.0007C14.6416 11.3002 14.3632 10.6285 13.8677 10.1333C13.3723 9.63806 12.7004 9.35995 12 9.36011H12.0012ZM3.60116 9.36011C3.25431 9.36011 2.91086 9.42842 2.59042 9.56116C2.26997 9.69389 1.97881 9.88844 1.73355 10.1337C1.48829 10.379 1.29374 10.6701 1.16101 10.9906C1.02828 11.311 0.959961 11.6545 0.959961 12.0013C0.959961 12.3482 1.02828 12.6916 1.16101 13.0121C1.29374 13.3325 1.48829 13.6237 1.73355 13.8689C1.97881 14.1142 2.26997 14.3087 2.59042 14.4415C2.91086 14.5742 3.25431 14.6425 3.60116 14.6425C4.30165 14.6423 4.97339 14.3639 5.4686 13.8685C5.9638 13.3731 6.24192 12.7012 6.24176 12.0007C6.2416 11.3002 5.96318 10.6285 5.46775 10.1333C4.97231 9.63806 4.30045 9.35995 3.59996 9.36011H3.60116ZM20.4012 9.36011C20.0543 9.36011 19.7109 9.42842 19.3904 9.56116C19.07 9.69389 18.7788 9.88844 18.5336 10.1337C18.2883 10.379 18.0937 10.6701 17.961 10.9906C17.8283 11.311 17.76 11.6545 17.76 12.0013C17.76 12.3482 17.8283 12.6916 17.961 13.0121C18.0937 13.3325 18.2883 13.6237 18.5336 13.8689C18.7788 14.1142 19.07 14.3087 19.3904 14.4415C19.7109 14.5742 20.0543 14.6425 20.4012 14.6425C21.1017 14.6423 21.7734 14.3639 22.2686 13.8685C22.7638 13.3731 23.0419 12.7012 23.0418 12.0007C23.0416 11.3002 22.7632 10.6285 22.2677 10.1333C21.7723 9.63806 21.1005 9.35995 20.4 9.36011H20.4012Z" fill="white" />
                </svg>
            </div>
            <p>Your Plan</p>
            <h2>Free</h2>
            <ul>
                <li>50 GB Storage</li>
                <li>Limited Features</li>
            </ul>
            <div style={{ width: "275px", zIndex: "10", position: "relative" }}>Upgrade to Premium Plan to get more Features & Storage memory </div>
            <button>
                Upgrade Plan
            </button>
            <div className="second-rectangle"></div>
            <div className="first-rectangle"></div>
        </div>
    )
}

function LastActivityComponent({ listActivities }) {
    const rows = [];
    listActivities.map((activities) => {
        rows.push(
            <div className="activity-item">
                <div className="avatar">

                </div>
                <div className="details">
                    <div className="content">
                        Karen Hope moved task “User Research“ from On Progress to Done
                    </div>
                    <div className="date">
                        2 March 2021, 13:45 PM
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="last-activity-component">
            <h3>Lastest Activity</h3>
            <div className="list-activities">
                <div className="process-activity"></div>
                {rows}
            </div>
        </div>
    )
}

export default User