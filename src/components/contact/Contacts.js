import {React,useEffect} from 'react';
import Avatar from 'react-avatar';
import {useSelector,useDispatch} from 'react-redux';
import { getContacts, deleteContact } from '../../actions/contactActions';

const Contacts = () => {
   
    const contacts = useSelector(state => state.contact);

    const dispatch = useDispatch();

     const deleteContact1 = (id,e) => {
        dispatch(deleteContact(id));
    }

    useEffect(()=>{
        dispatch(getContacts);
    },[])

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       contacts.map(function(contact){
                            return (
                                <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td><Avatar name={contact.name} size="50" round={true}/></td>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.email}</td>
                                    <td><button className="btn btn-danger" onClick={deleteContact1.bind(this,contact.id)}>Delete</button></td>
                                </tr>
                            )
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
