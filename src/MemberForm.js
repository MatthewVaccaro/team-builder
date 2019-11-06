import React, { useState } from "react";

function MemberForm(props) {
    const emptyObject = {
        name:'',
        email:''
    }

  const [formValue, setFormValue] = useState(emptyObject);
  const changeHandler = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    props.addNewMember(formValue);
    setFormValue(emptyObject);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={formValue.name}
        />
 <label htmlFor="email">eMail</label>
<input
          onChange={changeHandler}
          type="text"
          placeholder="eMail"
          name="email"
          id="email"
          value={formValue.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default MemberForm;
