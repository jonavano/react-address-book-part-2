import { useContext } from "react";
import { ContactContext } from "../App";
import { useParams } from 'react-router-dom'


function Profile() {
    const { contacts } = useContext(ContactContext)
    const { id } = useParams();

    const contact = contacts[id];

    return <>
        <h2>{contact.firstName + " " + contact.lastName} </h2>
        <p>{contact.street + " " + contact.city}</p>
    </>
}

export default Profile;