import React from 'react';
import './Plans.css';

function Plans() {
  return (

    <div className="Plans">
      <div className="column">
        <div className="daily">my daily plan</div>
        <div className="button">Add Daily Plan</div>
      </div>
      <div className="column">
        <div className="weekly">my weekly plan</div>
        <div className="button">Add Weekly Plan</div>
      </div>
      <div className="column">
        <div className="monthly">my monthly plan</div>
        <div className="button">Add Monthly Plan</div>
      </div>
      <div className="column">
        <div className="yearly">my yearly plan</div>
        <div className="button">Add Yearly Plan</div>
      </div>
    </div>
  
  );
}
export default Plans;