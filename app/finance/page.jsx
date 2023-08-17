import React from 'react'
import './finance.scss'
import StatusBar from '@/components/StatusBar/StatusBar'
import ChartComponent, { HorizontalChart, StackedBarChart, GroundedBarChart, AreaChart, LineChart, MultiaxisLineChart, PieChart } from '@/components/ChartComponent/ChartComponent'

const Finance = () => {
  return (
    <div id="finance">
      <div className="finance-header">
        <h1>
          Finance
        </h1>
        <StatusBar />
      </div>
      <ChartComponent />
      <HorizontalChart />
      <StackedBarChart />
      <GroundedBarChart />
      <AreaChart />
      <LineChart />
      <MultiaxisLineChart />
      <PieChart />
    </div>
  )
}

export default Finance