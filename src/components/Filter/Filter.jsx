import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/slice';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterInput
        name="filterInput"
        type="text"
        placeholder="Find contacts by name"
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></FilterInput>
      <FilterLabel></FilterLabel>
    </FilterContainer>
  );
};