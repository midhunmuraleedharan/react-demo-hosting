import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput
} from 'react-admin'
const postCreate = (props) => {
    return (
        <Create title='create a post' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='published' source='publishedAt' />
            </SimpleForm>
        </Create>
    )
}

export default postCreate;