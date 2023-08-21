import React from 'react';
import './user.scss';

export default function DashboardLayout({ children }) {
    return (
        <div className="dashboard-layout">
            {children}
        </div>
    )
}