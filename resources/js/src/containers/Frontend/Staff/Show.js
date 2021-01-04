import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

class Show extends Component {
    componentDidMount() {
        this.props.get(this.props.match.params.matricule);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const { frontend: { staff: { loading, error, message, member } } } = this.props;

        return <div>
            {JSON.stringify(member)}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: matricule => dispatch(actions.getStaffMember(matricule)),
    reset: () => dispatch(actions.resetStaff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);