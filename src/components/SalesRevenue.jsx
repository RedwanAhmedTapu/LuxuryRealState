import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

const Salesrevenue = () => {
  const salesChartRef = useRef(null);
  const worldwideSalesChartRef = useRef(null);

  useEffect(() => {
    if (salesChartRef.current && worldwideSalesChartRef.current) {
      destroyCharts();
      drawSalesChart();
      drawWorldwideSalesChart();
    }
  }, []);

  const destroyCharts = () => {
    if (salesChartRef.current.chart) {
      salesChartRef.current.chart.destroy();
    }
    if (worldwideSalesChartRef.current.chart) {
      worldwideSalesChartRef.current.chart.destroy();
    }
  };

  const drawSalesChart = () => {
    const ctx = salesChartRef.current;
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
          {
            label: "Revenue",
            data: [800, 1200, 1000, 1500, 700, 1800],
            backgroundColor: "#1696eb",
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

    salesChartRef.current.chart = chart;
  };

  const drawWorldwideSalesChart = () => {
    const ctx = worldwideSalesChartRef.current;
    const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#10B981");
    gradient.addColorStop(1, "#047857");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales Worldwide",
            data: [500, 700, 600, 900, 400, 800],
            borderColor: "#10B981",
            backgroundColor: gradient,
            pointBackgroundColor: "#10B981",
            pointRadius: 5,
            borderWidth: 2,
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

    worldwideSalesChartRef.current.chart = chart;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sales & Revenue</h3>
          <canvas ref={salesChartRef} height="200"></canvas>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Worldwide</h3>
          <canvas ref={worldwideSalesChartRef} height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Salesrevenue;
