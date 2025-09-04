import React, { useState } from 'react';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';
import BpkCalendar from 'bpk-component-calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <BpkText tagName="h1">Flight Schedule</BpkText>

      {/* Calendar */}
      <BpkCalendar
        id="calendar"
        date={selectedDate}
        onDateSelect={(date) => setSelectedDate(date)}
      />

      {/* Button */}
      <div style={{ marginTop: '20px' }}>
        <BpkButton onClick={() => alert(`Selected date: ${selectedDate}`)}>
          Continue
        </BpkButton>
      </div>
    </div>
  );
}

export default App;
