'use client'

import React from 'react'
import './event.css';
import StatusBar from '@/components/StatusBar/StatusBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const Event = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div id="event">
      <div className="event-header">
        <div className="header-text">
          Events
        </div>
        <StatusBar />
      </div>
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={true}
      />
    </div>
  )
}

export default Event