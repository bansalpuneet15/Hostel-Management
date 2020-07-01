import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Alert, CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';


class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <div className="row">
                <div className="col-12 container-fluid">
                    <h4 className="feature-heading ">Dashboard</h4>
                    <hr className="feature-line" /> 
                </div>  
            </div>
            <div className="row">
                <div className="dashCards col-md-3 mt-3">
                    <Card>
                        <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-users fa-4x"></span>
                            <h3>{this.props.employees.rows.length}</h3>
                            </div> 
                            <div className="mt-3">
                                <div>
                                    <p>Total Employees</p>
                                </div>
                            </div>        
                                           
                        </CardHeader>
                        <CardFooter><Link to="/admin/EmployeeManage/view">Details</Link></CardFooter>
                    </Card>
                </div>
                <div className="col-md-3 mt-3">
                    <Card>
                        <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-users fa-4x"></span>
                            <h3>{this.props.students.rows.length}</h3>
                            </div> 
                            <div className="mt-3">
                                <div>
                                    <p>Total Students</p>
                                </div>
                            </div>        
                                           
                        </CardHeader>
                        <CardFooter><Link to="/admin/StudentManage/view">Details</Link></CardFooter>
                    </Card>
                </div>
                <div className="col-md-3 mt-3">
                    <Card>
                        <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-building fa-4x"></span>
                            <h3>{this.props.architectures.rows[0].rooms}</h3>
                            </div> 
                            <div className="mt-3">
                                <div>
                                    <p>Total Rooms</p>
                                </div>
                            </div>        
                                           
                        </CardHeader>
                        <CardFooter><Link to="/admin/Architecture">Details</Link></CardFooter>
                    </Card>
                </div>
                <div className="col-md-3 mt-3">
                    <Card>
                        <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-utensils fa-4x"></span>
                            
                            </div>
                            <div className="mt-3">
                                <div>
                                    <p>Today's Meals</p>
                                </div>
                            </div>        
                                            
                        </CardHeader>
                        <CardFooter><Link to="/admin/MealManage/view">Details</Link></CardFooter>
                    </Card>
                </div>
            </div>
            <div className="row mt-2 mt-3">
                <div className="col-md-6">
                    <Card>
                        <CardHeader mb="0" mt="0"><span><h4>Notices</h4></span></CardHeader>
                        <CardBody>
                        <Alert color="primary" className="mb-1 mt-1">
                            Kive aa
                        </Alert>
                        <Alert color="primary" className="mb-1 mt-1">
                            Hor v
                        </Alert>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
        </div>
        )
    }
}
export default DashBoard;