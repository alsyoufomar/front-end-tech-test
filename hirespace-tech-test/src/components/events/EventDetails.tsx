import './eventDetails.css';
import { useState } from 'react';

type FormState = {
  eventType: string;
  area: string;
  numberOfPeople: number;
  estimatedSpend: string;
  venueLayout: string;
  venueStyle: string;
  onlineEleIsAdded: boolean;
  requirements: string;
};

const EventDetails = () => {
  const [formData, setFormData] = useState<FormState>({
    eventType: '',
    area: '',
    numberOfPeople: 0,
    estimatedSpend: '',
    venueLayout: '',
    venueStyle: '',
    onlineEleIsAdded: false,
    requirements: '',
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value, type, checked } =
      event.target as typeof event.target & {
        name: { value: string };
        value: { value: string | number };
        type: { value: string };
        checked: { value: boolean };
      };
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
  };

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
        <h2>
          <span>Your event details</span>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className='event-details__form-container'>
        <div className='input-container'>
          <select
            required
            name='eventType'
            value={formData.eventType}
            onChange={handleChange}>
            <option disabled value=''>
              Event Type
            </option>
            <option value='Type 1'>Type 1</option>
            <option value='Type 2'>Type 2</option>
          </select>
          <select
            required
            name='area'
            value={formData.area}
            onChange={handleChange}>
            <option disabled value=''>
              Area
            </option>
            <option value='Area 1'>Area 1</option>
            <option value='Area 2'>Area 2</option>
          </select>
        </div>
        <div className='input-container'>
          <input
            placeholder='Number of people'
            type='number'
            onChange={handleChange}
            name='numberOfPeople'
            value={formData.numberOfPeople}
          />
          <input
            placeholder='Estimated total event spend'
            type='text'
            onChange={handleChange}
            name='estimatedSpend'
            value={formData.estimatedSpend}
          />
        </div>
        <div className='input-container'>
          <select
            required
            name='venueLayout'
            value={formData.venueLayout}
            onChange={handleChange}>
            <option disabled value=''>
              Venue layout
            </option>
            <option value='layout 1'>layout 1</option>
            <option value='layout 2'>layout 2</option>
          </select>
          <select
            required
            name='venueStyle'
            value={formData.venueStyle}
            onChange={handleChange}>
            <option disabled value=''>
              Venue style
            </option>
            <option value='style 1'>style 1</option>
            <option value='style 2'>style 2</option>
          </select>
        </div>
        <div className='checkbox-container'>
          <input
            type='checkbox'
            checked={formData.onlineEleIsAdded}
            onChange={handleChange}
            name='onlineEleIsAdded'
          />
          <p>Add online elements to event</p>
        </div>
        <textarea
          value={formData.requirements}
          placeholder='Specific requirements'
          onChange={handleChange}
          name='requirements'
          rows={10}></textarea>
        <div className='btn-container'>
          <button className='btn'>Next</button>
        </div>
      </form>
    </div>
  );
};

export default EventDetails;
