import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import './App.css';
import PostList from './components/Post/PostList';
import PostCreate from './components/Post/PostCreate';
import PostEdit from './components/Post/PostEdit';

import UserList from './components/User/UserList';
import UserCreate from './components/User/UserCreate';
import UserEdit from './components/User/UserEdit';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      ></Resource>
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      ></Resource>
    </Admin>
  );
}

export default App;
