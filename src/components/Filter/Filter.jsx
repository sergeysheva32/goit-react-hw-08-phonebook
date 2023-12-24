import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/slice';
import Form from 'react-bootstrap/Form';

import { Section } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Section>
      <Form.Control
      name="filterInput"
              type="text"
              placeholder="Find contacts by name"
        className=" mr-sm-2"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
      </Section>
  );
};