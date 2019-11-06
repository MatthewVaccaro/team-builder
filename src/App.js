import React, {useState} from 'react';
import './App.css';

import MemberForm from "./MemberForm"
import Member from "./Member"

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = (member) =>{
    setMembers([...members, member])
  }

  return (
    <div>
      <MemberForm addNewMember={addNewMember}/>
      <Member memberList={members}/>
    </div>
  );
}

export default App;
