import { useDispatch, useSelector } from 'react-redux';
import { Section } from './ContactForm.styled';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Filter } from '../Filter/Filter';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    const newContact = { id, name, number };
    const form = e.target;
    form.reset();
    if (
      contacts.find(contact => contact.name.toLowerCase() ===
        name.toLowerCase())
    ) {
      alert(`${newContact.name} already exists!`);
    } else {
      dispatch(addContact(newContact));
      }
  };

  return (
    <><Section>
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={contacts.name}
            onChange={e => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={contacts.number}
          onChange={e => setNumber(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add contact
      </Button>
      <Filter/>
      </Form>
    </Section>
</>
  );
};
