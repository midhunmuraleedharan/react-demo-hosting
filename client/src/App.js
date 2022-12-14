import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import postList from './components/postList'
import postCreate from './components/postCreate'
import postEdit from './components/postEdit'
import userList from './components/userList'
import userCreate from './components/userCreate'
import userEdit from './components/userEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={postList}
        create={postCreate}
        edit={postEdit}
      />

      <Resource
        name='users'
        list={userList}
        create={userCreate}
        edit={userEdit}
      />
    </Admin>
  );
}

export default App;
