import React from 'react';
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';
import './form.scss';

const HoursSelector = props => {
  const { hoursOfOpp, updateCloseHours, updateOpenHours } = props;
  return (
    <div className="hours-container">
      <p>Hours of Operation</p>
      <div className="day-container">
        <div>Open</div>
        <div>Close</div>
      </div>
      <p>Sunday</p>
      <div className="day-container">
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.sunday.open}
            onChange={value => updateOpenHours('sunday', value.format('LT'))}
          />
        </div>
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.sunday.close}
            onChange={value => updateCloseHours('sunday', value.format('LT'))}
          />
        </div>
      </div>
      <p>Monday</p>
      <div className="day-container">
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.monday.open}
            onChange={value => updateOpenHours('monday', value.format('LT'))}
          />
        </div>
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.monday.close}
            onChange={value => updateCloseHours('monday', value.format('LT'))}
          />
        </div>
      </div>
      <p>Tuesday</p>
      <div className="day-container">
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.tuesday.open}
            onChange={value => updateOpenHours('tuesday', value.format('LT'))}
          />
        </div>
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.tuesday.close}
            onChange={value => updateCloseHours('tuesday', value.format('LT'))}
          />
        </div>
      </div>
      <p>Wednesday</p>
      <div className="day-container">
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.wednesday.open}
            onChange={value => updateOpenHours('wednesday', value.format('LT'))}
          />
        </div>
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.wednesday.close}
            onChange={value =>
              updateCloseHours('wednesday', value.format('LT'))
            }
          />
        </div>
      </div>
      <p>Thursday</p>
      <div className="day-container">
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.thursday.open}
            onChange={value => updateOpenHours('thursday', value.format('LT'))}
          />
        </div>
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.thursday.close}
            onChange={value => updateCloseHours('thursday', value.format('LT'))}
          />
        </div>
      </div>
      <p>Friday</p>
      <div className="day-container">
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.friday.open}
            onChange={value => updateOpenHours('friday', value.format('LT'))}
          />
        </div>
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.friday.close}
            onChange={value => updateCloseHours('friday', value.format('LT'))}
          />
        </div>
      </div>
      <p>Saturday</p>
      <div className="day-container">
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.saturday.open}
            onChange={value => updateOpenHours('saturday', value.format('LT'))}
          />
        </div>
        <div>
          <TimePicker
            format="h:mm a"
            placeholder={hoursOfOpp.saturday.close}
            onChange={value => updateCloseHours('saturday', value.format('LT'))}
          />
        </div>
      </div>
      <p>*If closed: set open time and closed time to same value</p>
    </div>
  );
};

export default HoursSelector;
