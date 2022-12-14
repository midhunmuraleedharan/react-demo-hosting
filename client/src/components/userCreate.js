import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin'
const userCreate = (props) => {
    return (
        <Create title='create a user' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    )
}

export default userCreate;