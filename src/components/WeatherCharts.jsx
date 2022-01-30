import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line} from 'recharts';

export default function WeatherCharts(props) {
  console.log(props.hours)
    return(<div>
        <ResponsiveContainer width="100%" aspect={3} className="mb-5">
        <BarChart
          width={500}
          height={300}
          data={props.hours}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey={props.hours.time} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Rýchlosť vetra v km/h" dataKey="wind_kph" fill="#2E9ACB" />
          <Bar name="Nárazový vietor v km/h" dataKey="gust_kph" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={3} className="mb-5">
        <LineChart
          width={500}
          height={300}
          data={props.hours}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey={props.hours.time} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name="Teplota v °C" type="monotene" dataKey="temp_c" stroke="#D16D6A" strokeWidth={3} />
          <Line name="Pocitová teplota °C" type="monotone" dataKey="windchill_c" stroke="#2E9ACB" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={3} className="mb-5">
        <LineChart
          width={500}
          height={300}
          data={props.hours}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey={props.hours.time} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name="oblačnosť v %" type="monotene" dataKey="cloud" stroke="#2E9ACB" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={3} className="mb-5">
        <LineChart
          width={500}
          height={300}
          data={props.hours}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey={props.hours.time} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name="Vlhkosť v %" type="monotene" dataKey="humidity" stroke="#2E9ACB" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      
      <ResponsiveContainer width="100%" aspect={3} className="mb-5">
        <LineChart
          width={500}
          height={300}
          data={props.hours}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey={props.hours.time} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name="Rosný bod v °C" type="monotene" dataKey="dewpoint_c" stroke="#2E9ACB" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={3} className="mb-5 text-white">
        <BarChart
          width={500}
          height={300}
          data={props.hours}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis className="text-white" dataKey={props.hours.time} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Zrážky v mm" dataKey="precip_mm" fill="#2E9ACB" />
        </BarChart>
      </ResponsiveContainer>
    </div>);
}