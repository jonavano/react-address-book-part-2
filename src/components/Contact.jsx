import { Link } from "react-router-dom";

function Contact({contact, id}) {

    return <>
    <p>{contact.firstName + " " + contact.lastName}</p>
    <Link to={`/profile/${id}`}><p>View</p></Link>
    </>
}

export default Contact;