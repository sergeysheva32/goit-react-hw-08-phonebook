import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactEditor } from '../components/ContactEditor/ContactEditor';

export default function Tasks() {


  return (
    <HelmetProvider>
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactEditor />
      <div>'Request in progress...'</div>
      <ContactList />
    </>
    </HelmetProvider>
  );
}
