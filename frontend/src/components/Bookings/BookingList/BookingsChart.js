import React from 'react';
import { Bar as BarChart } from 'react-chartjs';

const BOOKINGS_BUCKETS = {
  Cheap: {
    min: 0,
    max: 10
  },
  Normal: {
    min: 10,
    max: 100
  },
  Expensive: {
    min: 100,
    max: 10000000
  }
};

const bookingsChart = props => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price > BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    values.push(filteredBookingsCount);
    console.log(filteredBookingsCount)

  return (
    <div style={{ textAlign: 'center' }}>
      <BarChart />
    </div>
  );
};
}
export default bookingsChart;