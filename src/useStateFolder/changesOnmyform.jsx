import React, { useState } from 'react';

// Define the Form2 component
const Form2 = () => {
    // Define state to manage user input fields
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Define state to manage the list of users and the edit index
    const [array, setArray] = useState([]);
    const [EditIndex, setEditIndex] = useState(null);

    // Handle change event for form inputs
    const handleChange = (event) => {
        setUser({
            ...user, // Spread the current user state
            [event.target.name]: event.target.value // Update the specific field being changed
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (EditIndex === null) { // Check if we are adding a new user or updating an existing one
            // Add the new user to the array by spreading the existing array elements and adding the new user at the end
            setArray([...array, user]);
        } else {
            debugger
            const UpdateArray = [...array];  // Create a copy of the existing array
            debugger
            UpdateArray[EditIndex] = user;   // Update the user at the specified EditIndex with the new user data
            debugger
            setArray(UpdateArray);  // Set the state to the updated array
            debugger
            setEditIndex(null);  // Reset EditIndex to null to switch back to adding mode
        }
        // Reset the form fields to empty values after submission
        debugger
        setUser({ name: '', email: '', password: '' });
    };

    // Handle edit action for a user
    const handleEdit = (index) => {
        setUser(array[index]); // Set the form fields with the data of the item being edited
        setEditIndex(index); // Set the index of the item being edited
    };

    // Handle remove action for a user
    const handleRemove = (index) => {
        const newArray = [...array]; // Create a copy of the existing array
        newArray.splice(index, 1); // Remove the user at the specified index
        setArray(newArray); // Update the state with the new array
    };
     

    const nameValid = () => {
        if (user.name.length < 4) {
          alert("name are not valid")
          setUser({
            ...user,
            name: ''
          });
        }
    
      }
    
      const isValidEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const res = emailPattern.test(user.email);
        if (res) {
          
        }
        else {
    
          alert('email  not vaild ')
          setUser({
            ...user,
            email: '' 
          });
        }
      };
    
      const isValidPassword = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,16}$/;
        const re = passwordRegex.test(user.password);
        if (re) {
          // Password is valid
        } else {
          alert('Password must contain one digit, one lowercase letter, one uppercase letter, one special character (@#$%^&+=), no space, and it must be 8-16 characters long');
          setUser({
            ...user,
            password: '' // Set password to empty string
          });
        }
      };
      
    
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter name" value={user.name} onBlur={nameValid} onChange={handleChange} />
                <input type="text" name="email" placeholder="enter email" value={user.email} onBlur={isValidEmail} onChange={handleChange} />
                <input type="text" name="password" placeholder="enter password" value={user.password} onBlur={isValidPassword} onChange={handleChange} />
                <button type="submit">{EditIndex===null?'submit':'update'}</button>
            </form>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                                   <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                            <td><button onClick={()=> handleRemove(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Form2;