import React from 'react'
import UsersList from '../components/UsersList';

const User = () => {
  const USERS = [
    {
    id:"u1", 
    name: "Jonathan Musa",
    image:"https://media.licdn.com/dms/image/v2/C4E22AQEzzJOsELGEwg/feedshare-shrink_800/feedshare-shrink_800/0/1666862807910?e=2147483647&v=beta&t=sGLQjMfXhQVVnyS5L463iXUP0etkHH1qLz-Cj8tkAXo",
    places:3
  }
  ]

  return <UsersList items={USERS} />
}

export default User;
