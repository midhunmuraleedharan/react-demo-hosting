import React from 'react'
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput
} from 'react-admin'
const postEdit = (props) => {
    return (
        <Edit title='edit post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='published' source='publishedAt' />
            </SimpleForm>
        </Edit>
    )
}

export default postEdit;