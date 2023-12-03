import React from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { delete_emp, singleEmp } from '../../Services/Action/Adddata';

function Viewdata() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const emdata = useSelector(state => state.ReducerData.employees);

    const handleEdit = (id, d, index) => {

        navigate(`/edit/:${id}`);

      dispatch(singleEmp(d, index));

    }

    const handleDelete = (id) => {


        dispatch(delete_emp(id));
    }


    return (
        <>
            <Container>
                <Row>
                    <Table responsive="sm" style={{marginTop : "20px"}}>
                        {
                            <>
                                <thead>
                                    <tr>
                                        <th>Sr-no</th>
                                        <th>First name</th>
                                        <th>Last name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>language</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>Course</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        emdata.map((d, index) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        {d.id}
                                                    </td>
                                                    <td>{d.fname}</td>
                                                    <td>{d.lname}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.contact}</td>
                                                    <td>{d.language}</td>
                                                    <td>{d.address}</td>
                                                    <td>{d.city}</td>
                                                    <td>{d.course}</td>
                                                    <td>{d.gender}</td>
                                                    <td>
                                                        <Button className='me-2' onClick={() => { handleEdit(d.id, d, index) }}>Edit</Button>
                                                        <Button className='btn-danger' onClick={() => { handleDelete(d.id) }}>Delete</Button>
                                                    </td>
                                                </tr>

                                            )
                                        })
                                    }
                                </tbody>
                            </>
                        }
                    </Table>
                </Row>
            </Container>

        </>
    )
}

export default Viewdata;