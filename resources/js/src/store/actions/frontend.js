import * as actionTypes from './actionTypes';

const prefix = '/api';

export const resetStaff = () => ({ type: actionTypes.STAFF_RESET });
const staffStart = () => ({ type: actionTypes.STAFF_START });
const staffSuccess = data => ({ type: actionTypes.STAFF_SUCCESS, ...data });
const staffFail = error => ({ type: actionTypes.STAFF_FAIL, error });
export const getStaff = () => async dispatch => {
    dispatch(staffStart());

    try {
        const res = await fetch(`${prefix}/staff`);
        const resData = await res.json();
        dispatch(staffSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(staffFail(error));
    }
};

export const getStaffMember = matricule => async dispatch => {
    dispatch(staffStart());

    try {
        const res = await fetch(`${prefix}/staff/${matricule}`);
        const resData = await res.json();
        dispatch(staffSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(staffFail(error));
    }
};