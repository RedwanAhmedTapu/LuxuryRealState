import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

const Salesrevenue = () => {
  const salesPieChartRef = useRef(null);
  const salesBarChartRef = useRef(null);

  useEffect(() => {
    if (salesPieChartRef.current && salesBarChartRef.current) {
      destroyCharts();
      drawSalesPieChart();
      drawSalesBarChart();
    }
  }, []);

  const destroyCharts = () => {
    if (salesPieChartRef.current.chart) {
      salesPieChartRef.current.chart.destroy();
    }
    if (salesBarChartRef.current.chart) {
      salesBarChartRef.current.chart.destroy();
    }
  };

  const drawSalesPieChart = () => {
    const ctx = salesPieChartRef.current;
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales",
            data: [1000, 1500, 1200, 1800, 900, 2000],
            backgroundColor: ["#1a237e", "#283593", "#3949ab", "#5c6bc0", "#7986cb", "#9fa8da"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => ` $${tooltipItem.raw.toLocaleString()}`,
            },
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
            },
          },
        },
      },
    });

    salesPieChartRef.current.chart = chart;
  };

  const drawSalesBarChart = () => {
    const ctx = salesBarChartRef.current;
    const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#328aba");
    gradient.addColorStop(1, "#1e818a");

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales",
            data: [1000, 1500, 1200, 1800, 900, 2000],
            backgroundColor: gradient,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `$${value.toLocaleString()}`,
            },
          },
        },
      },
    });

    salesBarChartRef.current.chart = chart;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Pie Chart</h3>
          <canvas ref={salesPieChartRef} height="300"></canvas>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Bar Chart</h3>
          <canvas ref={salesBarChartRef} height="300"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Salesrevenue;
