import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EmpActionAsync } from '../../Services/Action/Adddata';
import img1 from '../../../public/img-1.webp'
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';


function Adddata() {

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const [inputList, setinputList] = useState({
        fname: '',
        lname: '',
        email: '',
        contact: '',
        language: '',
        address: '',
        city: '',
        course: '',
        gender: ''
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setinputList({ ...inputList, [name]: value })
        // console.log("name",name);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uuid().slice(0, 4);
        // console.log("uuid>>", id);


        let ndata = ({ ...inputList, id: id });

        dispatch(EmpActionAsync(ndata))

        setinputList({
            fname: '',
            lname: '',
            email: '',
            contact: '',
            language: '',
            address: '',
            city: '',
            course: '',
            gender: ''
        })

        navigate('/View')
    }


    return (

        <div className='bg'>
            <Container>
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
                                                <Form.Check type="checkbox" label={label} name="language" value={label} onChange={handleChange} />
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
                                            <Form.Check type="radio" label={label} name="gender" value={label} onChange={handleChange} />
                                        )
                                    })

                                }

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-6">
                        <img src={img1} alt="img-1" style={{ width: "90%", height: "90%", marginLeft:"40px"}} />
                    </div>

                </div>
            </Container>
        </div>


    );
}

export default Adddata;