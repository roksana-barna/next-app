import React from 'react';

export const metadata = {
    title: "Dashboard|Next APP",
    description: "next app",
  };
const DashboardLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default DashboardLayout;