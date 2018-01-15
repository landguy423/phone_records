/* eslint react/jsx-key: off */
import 'babel-polyfill';
import React from 'react';

import { Admin, Resource, Delete } from 'admin-on-rest'; // eslint-disable-line import/no-unresolved
import jsonRestClient from 'aor-json-rest-client';

import { RecordList, RecordCreate, RecordEdit } from './components/records';

import data from './utils/data';

const restClient = jsonRestClient(data, true);

const App = () => (
    <Admin
        restClient={restClient}
        title="Phone Number List"
    >
        <Resource
            name="phone"
            list={RecordList}
            create={RecordCreate}
            edit={RecordEdit}
            remove={Delete}
        />
    </Admin>
);

export default App