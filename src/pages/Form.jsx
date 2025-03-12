/* This is the scripts controls the MyDelivery screen form */
/* The corresponding CSS is RequestDetails CSS and makes calls to the backend*/

import '../styles/form.css';

function Form() {
    return (
        <div className="form-container">
            <h2 className="form-heading">Submit Your Request</h2>
            <form className="form">
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" />
                <label>Message:</label>
                <textarea placeholder="Write something..."></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;