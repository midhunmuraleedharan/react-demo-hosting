import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton
} from 'react-admin'
const userList = (props) => {
    return (
        <List{...props}>
            <Datagrid>
                <TextField source='name' />
                <EmailField source='email' />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
    )
}

export default userList;