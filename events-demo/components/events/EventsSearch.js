import React from 'react';

export default function EventsSearch(props) {
  return (
    <form>
      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select name="" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </form>
  );
}
