'use client'

import React from 'react'
import './event.scss';
import StatusBar from '@/components/StatusBar/StatusBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Event = () => {
  const [date, setDate] = useState<Value>(new Date());

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