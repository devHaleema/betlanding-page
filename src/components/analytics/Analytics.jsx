import React from 'react'
import "./analytics.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Analytics() {

    const data = [
        {
          name: 'Jan',
          "Active Users": 4000,
          
        },
        {
          name: 'Feb',
          "Active Users": 3000,
         
        },
        {
          name: 'Mar',
          "Active Users": 5000,
          
        },
        {
          name: 'Apr',
          "Active Users": 2080,
          
        },
        {
          name: 'May',
          "Active Users": 1990,
          
        },
        {
          name: 'Jun',
          "Active Users": 3000,
          
        },
        {
          name: 'Jul',
          "Active Users": 5000,
          
        },
        {
            name: 'Aug',
            "Active Users": 3000,
            
          },
          {
            name: 'Sep',
            "Active Users": 2500,
            
          },
          {
            name: 'Oct',
            "Active Users": 3100,
            
          },
          {
            name: 'Nov',
            "Active Users": 4200,
            
          },
          {
            name: 'Dec',
            "Active Users": 5000,
            
          },
      ];
      

    return (
        <div className="analytic">
            <div className="chart">
                <h3 className="chatTitle">User Analytics</h3>
                <ResponsiveContainer width="100%" aspect={1.5}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd"/>
                        <Line type="monotone" dataKey="Active Users" stroke="#5550bd"/>
                        <Tooltip />
                        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                        <Legend />
                    </LineChart>
                      
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Analytics

