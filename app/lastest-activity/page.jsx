import React from 'react'
import './lastest-activity.css'
import StatusBar from '@/components/StatusBar/StatusBar'

const LastestActivy = () => {
  return (
    <div id="lastest-activity">
      <div className="lastest-activity-header">
        <h1 >
          Notification & Lastest Activity
        </h1>
        <StatusBar />
      </div>
      <LastestActivityComponnt />
    </div>
  )
}

function LastestActivityComponnt() {
  return (
    <div className="lastest-activity-component">
      <DateActivity date="Today" />
      <DateActivity date="Yesterday" />
    </div>
  )
}

function DateActivity({ date, listActivities }) {
  return (
    <div className="date-activity">
      <div className="date">
        <h4>
          {date}
        </h4>
      </div>
      <div className="timeline">
        <div className="container">
          <div className="content">
            <div>Monday, June 31 2020</div>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div>Monday, June 31 2020</div>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastestActivy 