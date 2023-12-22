import { Helmet } from 'react-helmet';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactEditor } from '../components/ContactEditor/ContactEditor';

export default function Tasks() {


  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactEditor />
      <div>'Request in progress...'</div>
      <ContactList />
    </>
  );
}
