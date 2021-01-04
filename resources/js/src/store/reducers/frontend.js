import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    staff: {
        loading: false,
        error: null
    },
};

const staffReset = (state, action) => updateObject(state, { staff: initialState.staff });
const staffStart = (state, action) => updateObject(state, { staff: updateObject(state.staff, { loading: true, message: null }) });
const staffSuccess = (state, action) => updateObject(state, { staff: updateObject(state.staff, { loading: false, error: null, ...action }) });
const staffFail = (state, action) => updateObject(state, { staff: updateObject(state.staff, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STAFF_RESET: return staffReset(state, action);
        case actionTypes.STAFF_START: return staffStart(state, action);
        case actionTypes.STAFF_SUCCESS: return staffSuccess(state, action);
        case actionTypes.STAFF_FAIL: return staffFail(state, action);

        default: return state;
    }
};