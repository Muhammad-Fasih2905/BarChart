import React from 'react'
import { useEffect, useState } from "react";
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {

  const data = [
    {
      numStudent: '0',
      pv: 5,
      Subject: "urdu",
      student:'Fasih'
    },
    {
      numStudent: '1',
      Subject: "urdu",
      pv: 3,
      student:'Abdullah'
    },
    {
      numStudent: '2',
      pv: 5,
      Subject: "urdu",
      student:'Rameez',
    },
    {
      numStudent: '3',
      Subject: "urdu",
      student:'Sammer',
      pv: 2,
    },
    {
      numStudent: '4',
      pv: 5,
      Subject: "urdu",
      student:'Khurram',
    },
    {
      numStudent: '5',
      Subject: 'urdu',
      student:'Rafay',
      pv: 6,
    },
    {
      numStudent: '6',
      Subject: "urdu",
      pv: 7,
      student:'Afnan',
    },
    {
      numStudent: '7',
      Subject: 'urdu',
      student:'Ahram',
      pv: 2,
    }, 
    {
      numStudent: '8',
      Subject: 'urdu',
      pv: 7,
      student:'Hunzalaa',
    },
    {
      numStudent: '9',
      pv: 10,
      Subject: "urdu",
      student:'Wahji',
    },
    {
      numStudent: '10',
      pv: 9,
      Subject: "urdu",
      student:'Hairs',
    },
  ];
  const data1 = [
    {
      numStudent: '1',
      pv: 10,
      Subject: "English",
      student:'Fasih'
    },
    {
      numStudent: '2',
      Subject: "English",
      pv: 9.5,
      student:'Abdullah'
    },
    {
      numStudent: '3',
      pv: 8.5,
      Subject: "English",
      student:'Rameez',
    },
    {
      numStudent: '4',
      Subject: "English",
      student:'Sammer',
      pv: 6.6,
    },
    {
      numStudent: '5',
      pv: 7.7,
      Subject: "English",
      student:'Khurram',
    },
    {
      numStudent: '6',
      Subject: 'English',
      student:'Rafay',
      pv: 5,
    },
    {
      numStudent: '7',
      Subject: "English",
      pv: 5,
      student:'Afnan',
    },
    {
      numStudent: '8',
      Subject: 'English',
      student:'Ahram',
      pv: 2,
    }, 
    {
      numStudent: '9',
      Subject: 'English',
      pv: 1,
      student:'Hunzalaa',
    },
    {
      numStudent: '10',
      pv: 4,
      Subject: "English",
      student:'Wahji',
    },
  ];
  const data2 = [
    {
      numStudent: '1',
      pv: 10,
      Subject: "Math",
      student:'Fasih'
    },
    {
      numStudent: '2',
      Subject: "Math",
      pv: 6,
      student:'Abdullah'
    },
    {
      numStudent: '3',
      pv: 5,
      Subject: "Math",
      student:'Rameez',
    },
    {
      numStudent: '4',
      Subject: "Math",
      student:'Sammer',
      pv: 3,
    },
    {
      numStudent: '5',
      pv: 2,
      Subject: "Math",
      student:'Khurram',
    },
    {
      numStudent: '6',
      Subject: 'Math',
      student:'Rafay',
      pv: 4,
    },
    {
      numStudent: '7',
      Subject: "Math",
      pv: 6,
      student:'Afnan',
    },
    {
      numStudent: '8',
      Subject: "Math",
      student:'Ahram',
      pv: 4,
    }, 
    {
      numStudent: '9',
      Subject: 'Math',
      pv: 3,
      student:'Hunzalaa',
    },
    {
      numStudent: '10',
      pv: 7,
      Subject: "Math",
      student:'Wahji',
    },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis/>
    <YAxis dataKey="numStudent"/>
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="Subject" fill="#82ca9d" />
    <Bar dataKey="student" fill="#82ca9d" />
  </BarChart>
  </ResponsiveContainer>
    <div>
    <ResponsiveContainer width="100%" aspect={3}>
    <BarChart
    width={500}
    height={300}
    data={data1}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis/>
    <YAxis dataKey="numStudent"/>
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="Subject" fill="#82ca9d" />
    <Bar dataKey="student" fill="#82ca9d" />
  </BarChart>
  </ResponsiveContainer>
    </div>
    <div>
    <ResponsiveContainer width="100%" aspect={3}>
    <BarChart
    width={500}
    height={300}
    data={data2}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis/>
    <YAxis dataKey="numStudent"/>
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="Subject" fill="#82ca9d" />
    <Bar dataKey="student" fill="#82ca9d" />
  </BarChart>
  </ResponsiveContainer>
    </div>
    </div>
    
  )
}

export default Chart