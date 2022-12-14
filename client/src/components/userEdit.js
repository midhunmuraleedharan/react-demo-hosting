import React from 'react'
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin'
const userEdit = (props) => {
    return (
        <Edit title='edit user' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Edit>
    )
}

export default userEdit;