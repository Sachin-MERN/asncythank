import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userSlice from './features/userDetailSlice'


const USerForms = () => {
 const dispatch = useDispatch

    const [user, setUser] = useState({});

    const submitHudler = (e) => {
        e.preventDefault();
      console.log(user)
        dispatch(userSlice(user))
     dispatch
   


    };
// const [name, setname] = useState({});
// const [age, setage] = useState({});
// const [email, setemail] = useState({});
// this is the shortcut to hundle the state if we have number input field like above that number of time we have to create the state intead of this just simply we can create the one object and just pass the function to each input field
    const getValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }




    return (
        <div>
            <form className='w-50 mx-auto mt-20px' onSubmit={submitHudler}>
                <div className="mb-3 mt-5">
                    <label className="form-label">Enter Name</label>
                    <input type="text" name="name" onChange={getValue} className="form-control" />

                </div>
                <div className="mb-3">
                    <label className="form-label"> Enter Age</label>
                    <input type="text" name="age" onChange={getValue} className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Enter Email</label>
                    <input type="email" name="email" onChange={getValue} className="form-control"
                    />
                </div>
                <div className=" form-check">
                    <input type="radio" name="gander" value="Female" className="form-check-input "  onChange={getValue}  />Female

                    {/* <label className="form-check-label"></label> */}
                </div>
                <div className=" form-check ">
                    <input type="radio" name="gander" value="Male" className="form-check-input "  onChange={getValue}  />Male

                    {/* <label className="form-check-label"></label> */}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default USerForms;