'use client';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const [sortBy, setSortBy] = useState('month');

  const dataByMonth = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [50, 200, 150, 300, 250, 400, 350],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const dataByYear = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Yearly Sales',
        data: [500, 1000, 1500, 2000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartData = sortBy === 'month' ? dataByMonth : dataByYear;

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      {/* Header with "Dashboard" and "Sort By" */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div>
          <label htmlFor="sortBy" className="mr-2 text-gray-600">
            Sort By:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex space-x-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <h2 className="text-gray-600 text-sm">TOTAL ORDERS</h2>
          <h3 className="text-2xl font-bold">687.3k</h3>
          <span className="text-red-500 text-sm">▼ 9.19% Since last month</span>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <h2 className="text-gray-600 text-sm">TOTAL RETURNS</h2>
          <h3 className="text-2xl font-bold">9.62k</h3>
          <span className="text-green-500 text-sm">▲ 26.87% Since last month</span>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <h2 className="text-gray-600 text-sm">AVG. SALES EARNINGS</h2>
          <h3 className="text-2xl font-bold">$98.24</h3>
          <span className="text-green-500 text-sm">▲ 3.51% Since last month</span>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <h2 className="text-gray-600 text-sm">NUMBER OF VISITS</h2>
          <h3 className="text-2xl font-bold">87.94M</h3>
          <span className="text-red-500 text-sm">▼ 1.05% Since last month</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-600 mb-4">Sales Overview</h2>
        <div className="w-full h-[300px]">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
