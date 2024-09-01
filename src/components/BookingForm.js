
import React, {useState} from 'react';


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>
                        {/*for time selection*/}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select A Time</option>
                                {
                                    props.availableTime.availableTime.map(availableTime => { return <option hey={availableTime}>{availableTime}</option> })
                                }
                            </select>
                        </div>

                        {/*for guest selection*/}
                        <div>
                            <label htmlFor='book-guests'>Number Of Guests:</label>
                            <input id='book-guests' min='1' value={guest} onChange={(e) => setGuest(e.target.value)} />
                        </div>

                        {/*for occasion*/}
                        <div>
                            <label htmlFor='book-occasion'>Choose Occasion:</label>
                            <select id='book-occasion' key={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>New House</option>
                                <option>New Car</option>
                                <option>Passed</option>
                            </select>
                        </div>

                        {/*submit button*/}
                        <div>
                            <input aria-label='On Click' type='submit' value={"Make Your Reservation"} />
                        </div>
                    </fieldset>


                </form>
            </section>
        </header>

    );
};

export default BookingForm;
