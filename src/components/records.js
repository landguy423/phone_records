import React from 'react';
import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    DisabledInput,
    Edit,
    EditButton,
    DeleteButton,
    Filter,
    List,
    SimpleForm,
    TextField,
    TextInput,
    required,
} from 'admin-on-rest'; // eslint-disable-line import/no-unresolved

const RecordFilter = ({ ...props }) => (
    <Filter {...props}>
        <TextInput label="First Name" source="first_name" />
        <TextInput label="Last Name" source="last_name" />
        <DateInput label="Birthday" source="date" />
        <TextInput label="Phone Number" source="phone_number" />
    </Filter>
);

const titleFieldStyle = {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};

export const RecordList = ({ ...props }) => (
    <List
        {...props}
        filters={<RecordFilter />}
    >
        <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" style={titleFieldStyle} />
            <TextField source="last_name" style={titleFieldStyle} />
            <DateField source="birthday" />
            <TextField source="phone_number" style={titleFieldStyle} />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RecordCreate = ({ ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="first_name" style={titleFieldStyle} validate={required} />
            <TextInput source="last_name" style={titleFieldStyle} validate={required} />
            <DateInput source="birthday" defaultValue={() => new Date()} />
            <TextInput source="phone_number" style={titleFieldStyle} validate={required} />
        </SimpleForm>
    </Create>
);

const RecordTitle = ({record}) => {
    return <span>Edit {record ? `"${record.first_name}"` : ''}</span>;
};

export const RecordEdit = ({ ...props }) => (
    <Edit title={<RecordTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="first_name" style={titleFieldStyle} validate={required} />
            <TextInput source="last_name" style={titleFieldStyle} validate={required} />
            <DateInput source="birthday" />
            <TextInput source="phone_number" style={titleFieldStyle} validate={required} />
        </SimpleForm>
    </Edit>
);
