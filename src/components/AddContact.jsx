import { useState } from "react";
import { useContext } from "react";
import { ContactContext } from "../App";

function AddContact() {
    const emptyContact = { firstName: '', lastName: '',street:'', city:'' }

    const [contact, setContact] = useState(emptyContact);
    const { setContacts, url } = useContext(ContactContext)
    

    const addContact = (c) => {
        c.preventDefault()
        
        const updateData = async () => {
            await fetch(url,
                {
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body:JSON.stringify(contact)
                }
            );
        };
        updateData();
        setContacts(prev => [...prev, contact])
        setContact(emptyContact)
    }

    return <>
        <h1>Add contact</h1>
        <form onSubmit={addContact}>
            <h3>first name</h3>
            <div>
                <textarea
                    className="firstName"
                    type="text"
                    value={contact.firstName}
                    onChange={(e) => setContact({ ...contact, firstName: e.target.value })}>

                </textarea>
            </div>

            <h3>last name</h3>
            <div>
                <textarea
                    className="lastName"
                    type="text"
                    value={contact.lastName}
                    onChange={(e) => setContact({ ...contact, lastName: e.target.value })}>
                </textarea>
            </div>

            <h3>street</h3>
            <div>
                <textarea
                    className="street"
                    type="text"
                    value={contact.street}
                    onChange={(e) => setContact({ ...contact, street: e.target.value })}>

                </textarea>
            </div>

            <h3>city</h3>
            <div>
                <textarea
                    className="city"
                    type="text"
                    value={contact.city}
                    onChange={(e) => setContact({ ...contact, city: e.target.value })}>

                </textarea>
            </div>


            <div>
                <button type="submit">add contact</button>
            </div>

        </form>
    </>
}

export default AddContact;