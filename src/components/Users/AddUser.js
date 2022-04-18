import React, {useState} from 'react'

import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

 const AddUser = ({onAddUser}) => {

    const [enteredUserName, setEnteredUserName] = useState('')
    // usestate for age 
    const [enteredUserAge, setEnteredUserAge] = useState('')
    // usestate for error
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        // check if entertedUsername is empty stop doing everything
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return
        }
        if(enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age > 0'
            })
            return 
        }

        onAddUser(enteredUserName, enteredUserAge)
        // resetting on submit
        setEnteredUserName('')
        setEnteredUserAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    
    }

    const ageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    
    }

    const errorHandler = () => {
        setError(null)
    }


return (
    <Wrapper>
        {
            error && 
            <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler} />
        }
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input id="username" 
                type="text" 
                value={enteredUserName} 
                onChange={usernameChangeHandler} />

            <label htmlFor='age'>Age(Years)</label>
            <input id="age"
                type="number"
                value={enteredUserAge}
                onChange={ageChangeHandler} />

        <Button type="submit">Add User</Button>  
        </form>

        </Card>
    </Wrapper>
   
    )
}

export default AddUser