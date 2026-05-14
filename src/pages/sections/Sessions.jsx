import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../style/sections/Sessions.css";

const Sessions = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    const title = prompt("Enter session title:");
    if (!title) return;

    setEvents((prev) => [
      ...prev,
      {
        date: date.toDateString(),
        title,
      },
    ]);
  };

  const selectedDayEvents = events.filter(
    (event) => event.date === date.toDateString()
  );

  const activeDaysCount = new Set(events.map((event) => event.date)).size;

  return (
    <div className="sessions-page">
      <div className="sessions-header">
        <h1>Sessions</h1>
        <p>Plan meetings, track your schedule, and keep all upcoming sessions in one place.</p>
      </div>

      <div className="sessions-layout">
        <div className="calendar-block">
          <div className="block-header">
            <h2>Calendar</h2>
            <button onClick={addEvent} className="add-btn">
              + Add Session
            </button>
          </div>

          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={({ date: tileDate, view }) => {
              if (view !== "month") return null;

              const hasEvent = events.some(
                (event) => event.date === tileDate.toDateString()
              );

              return hasEvent ? "has-event" : null;
            }}
          />

          <div className="today-events">
            <div className="sub-block-header">
              <h3>Selected Day</h3>
              <span>{date.toDateString()}</span>
            </div>

            {selectedDayEvents.length === 0 ? (
              <p className="empty">No events for this day</p>
            ) : (
              selectedDayEvents.map((event, index) => (
                <div key={index} className="event-mini">
                  <div className="event-mini-dot"></div>
                  <span>{event.title}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="events-block">
          <div className="block-header">
            <h2>All Events</h2>
            <span className="events-count">{events.length} total</span>
          </div>

          <div className="events-list">
            {events.length === 0 ? (
              <p className="empty">No events yet</p>
            ) : (
              events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-card-top">
                    <div className="event-title-wrap">
                      <div className="event-dot"></div>
                      <div>
                        <div className="event-title">{event.title}</div>
                        <div className="event-date">{event.date}</div>
                      </div>
                    </div>

                    <span className="event-tag">Session</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="sessions-footer">
        <div className="stat-box">
          <span className="stat-label">Total Sessions</span>
          <h3>{events.length}</h3>
          <p>All created events in your schedule</p>
        </div>

        <div className="stat-box">
          <span className="stat-label">Active Days</span>
          <h3>{activeDaysCount}</h3>
          <p>Days that already contain sessions</p>
        </div>

        <div className="stat-box">
          <span className="stat-label">Reminder</span>
          <h3>Stay Consistent</h3>
          <p>Regular sessions and tracking can improve long-term progress.</p>
        </div>
      </div>
    </div>
  );
};

export default Sessions;