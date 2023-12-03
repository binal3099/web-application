import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { update } from '../../Services/Action/Adddata';

function Editdata() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const n_data = useSelector(state => state.ReducerData.employee);
    const update_index = useSelector(state => state.ReducerData.isIndex);

    console.log("ndata", n_data);

    const [inputList, setinputList] = useState(n_data);


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setinputList({ ...inputList, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(update(inputList, update_index));
        navigate('/View');

    }


    return (
        <>
            <div className='bg'>
                <Container>
                    <h3 style={{ margin: "20px 0px", color: "#030344" }}>Edit Employees Details</h3>
                    <hr />
                    <div className="d-flex mt-4">
                        <div className="col-6">
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group className='col-6 mb-3'>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="enter first Name" name='fname' value={inputList.fname} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='col-6 mb-3'>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="enter last Name" name='lname' value={inputList.lname} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='col-6 mb-3'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="enter email" name='email' value={inputList.email} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='col-6 mb-3'>
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control type="number" placeholder="enter number" name='contact' value={inputList.contact} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='col-12 mb-3'>
                                        <Form.Label>What do you use ? Platforms, OS, Programming language, etc..</Form.Label>
                                        {
                                            ['React', 'Html', 'jQuery', 'Java', 'IOS', 'Linux', 'Windows'].map((label) => {
                                                return (
                                                    <Form.Check type="checkbox" label={label} name="language" value={label} onChange={handleChange} checked={label == inputList.language} />
                                                )
                                            })

                                        }
                                    </Form.Group>
                                    <Form.Group className="col-6 mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="enter address" name='address' value={inputList.address} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='col-6 mb-3'>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="enter city" name='city' value={inputList.city} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='col-6 mb-3'>
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control type="text" placeholder="enter course" name='course' value={inputList.course} onChange={handleChange} />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    {
                                        ['Male', 'Female'].map((label) => {
                                            return (
                                                <Form.Check type="radio" label={label} name="gender" value={label} onChange={handleChange} checked={label == inputList.gender} />
                                            )
                                        })

                                    }

                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>


                    </div>
                </Container>
            </div>
        </>
    )
}

export default Editdata;