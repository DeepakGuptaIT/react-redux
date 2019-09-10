import React from "react";
import { connect } from "react-redux";
import  StudentList  from "./StudentList";

class Home extends React.Component {
    constructor(props) {
        super(props);//V . Imp
        this.state = {};
    }
    

    componentDidMount = () => {
        //get this.props.cookies
        const { cookies } = this.props;
        //setting a cookie
        cookies.set('city', 'Ranchi', { path: '/home' });
        //getting a cookie
        let city =  cookies.get('city');
        let name =  cookies.get('name');
        this.setState({ name, city });
    }

    render() {
        return (
            <div>
                <h1> ---------------Home -----------------</h1>
                <StudentList />
               name :  {this.state.name} <br></br>
               city :  {this.state.city} <br></br>
            </div>
        );
    }

}
const mapStateToProps = (state, ownProps) => {
    return ({
        state: state,
        cookies: ownProps.cookies,
    });
};
export const HomeContainer = connect(
    mapStateToProps,
    null
)(Home);
export default HomeContainer;