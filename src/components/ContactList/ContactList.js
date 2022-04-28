import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../redux/contacts-selectors';
import Contact from "../contact/Contact"
import { useFetchContactQuery } from 'redux/contactApi';
import {List} from "./ContactList.styled"


  export default function ContactList () {
    const {data:contacts,isFetching}=useFetchContactQuery();
    const filter=useSelector(filterSelector);
 
    

  const getFiltredContacts=()=>{
     return filter
     ?contacts.filter(({name})=>
     name.toLowerCase().includes(filter.toLowerCase())
     )
     :contacts;
    }

  const filtredContacts=getFiltredContacts()

return(
    
   <List>
   {!isFetching && filtredContacts.map(({id,name,phone }) => (
   <Contact key={id} name={name} number={phone} id={id}/>
     ))}
    </List>
    
);};



  
  ContactList.propTypes={
      list:PropTypes.arrayOf(
          PropTypes.shape({
              id:PropTypes.string.isRequired,
              name:PropTypes.string.isRequired,
              number:PropTypes.string.isRequired
          })
      ),
     
  }
  