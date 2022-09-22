import './eventDetails.css';

const EventDetails = () => {
  return (
    <div className='event-details'>
      <div className='event-details__title'>
        <h1>Tell us about your event</h1>
        <p>
          Our concierge venue finding service is always free and we have a team
          of experts ready to help. The team is available for larger business
          events, weddings, and clients with Hire Space 360 accounts. Otherwise
          the quickest way to find and contact venues remains via{' '}
          <a href='#'>
            our search tool{' '}
            <span>
              {' '}
              here <img src='./arrow.svg' alt='' />
            </span>
          </a>
        </p>
      </div>
      <div className='application-progress'>
        <div className='application-progress__sub-container'>
          <img src='./1.svg' alt='complete' />
          <p>
            <span>Event details</span>
          </p>
        </div>
        <div className='application-progress__sub-container'>
          <div className='application-progress__index'>2</div>
          <p className='incomplete'>
            <span>Event date / time</span>
          </p>
        </div>
        <div className='application-progress__sub-container'>
          <div className='application-progress__index'>3</div>
          <p className='incomplete'>
            <span>Contact details</span>
          </p>
        </div>
      </div>
      <div className='event-details__form-title'>
        <h2>Your event details</h2>
      </div>
      <form className='event-details__form-container'>
        <div className='input-container'>
          <select name='' id=''></select>
          <select name='' id=''></select>
        </div>
        <div className='input-container'>
          <input type='number' />
          <input type='text' />
        </div>
        <div className='input-container'>
          <select name='' id=''></select>
          <select name='' id=''></select>
        </div>
        <div className='checkbox-container'>
          <input type='checkbox' />
          <p>Add online elements to event</p>
        </div>
        <textarea name='' id='' rows={10}></textarea>
        <div className='btn-container'>
          <button className='btn'>Next</button>
        </div>
      </form>
    </div>
  );
};

export default EventDetails;
