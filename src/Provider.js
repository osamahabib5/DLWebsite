import React, { useReducer } from 'react'
const initialState = {
    results: [],
    loading: true,
    fetched_grades: [],
    subjects_list: [],
    parent_country: "",
    parent_city: "",
    lead_id: 0,
    opted_package: 0,
    filtered_teachers_list: [],
    isMobile: false
}

const actions = {
    STOPPINGLOADER: 'STOPPINGLOADER',
    FETCHING_RESULTS: 'FETCHING_RESULTS',
    STARTINGLOADER: 'STARTINGLOADER',
    FETCHGRADES: 'FETCHGRADES',
    FETCHSUBJECTS: 'FETCHSUBJECTS',
    GETLOCATION: 'GETLOCATION',
    GETCITY: 'GETCITY',
    GETLEAD: 'GETLEAD',
    GETPRICINGPACKAGE: 'GETPRICINGPACKAGE',
    GETFILTEREDTEACHERS: 'GETFILTEREDTEACHERS',
    ISMOBILE: 'ISMOBILE'
}

function reducer(state, action) {
    switch (action.type) {
        case actions.STOPPINGLOADER:  //fetch the data
            return {
                ...state,
                loading: false
            }
        case actions.FILTERS_RESULTS:
            return {
                loading: false,
                ...state,
                results: action.value
            }
        case actions.STARTINGLOADER:
            return {
                ...state,
                loading: true
            }
        case actions.FETCHGRADES:
            return {
                ...state,
                fetched_grades: action.value
            }
        case actions.FETCHSUBJECTS:
            return {
                ...state,
                subjects_list: action.value
            }
        case actions.GETLOCATION:
            return {
                ...state,
                parent_country: action.value
            }
        case actions.GETLEAD:
            return {
                ...state,
                lead_id: parseInt(action.value)
            }
        case actions.GETCITY:
            return {
                ...state,
                parent_city: action.value
            }
        case actions.GETPRICINGPACKAGE:
            return {
                ...state,
                opted_package: action.value
            }
        case actions.GETFILTEREDTEACHERS:
            return {
                ...state,
                filtered_teachers_list: action.value
            }
        case actions.ISMOBILE:
            return {
                ...state,
                isMobile: action.value
            }
        default:
            return state;
    }
}
export const TutorsContext = React.createContext();
function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {
        results: state.results,
        loading: state.loading,
        subjects_list: state.subjects_list,
        parent_country: state.parent_country,
        parent_city: state.parent_city,
        lead_id: state.lead_id,
        opted_package: state.opted_package,
        filtered_teachers_list: state.filtered_teachers_list,
        setresults: (value) => { dispatch({ type: actions.FILTERS_RESULTS, value }) },
        stopLoading: () => { dispatch({ type: actions.STOPPINGLOADER }) },
        startLoading: () => { dispatch({ type: actions.STARTINGLOADER }) },
        fetched_grades: state.fetched_grades,
        fetchGrades: (value) => { dispatch({ type: actions.FETCHGRADES, value }) },
        fetchSubjects: (value) => { dispatch({ type: actions.FETCHSUBJECTS, value }) },
        setParentLocation: (value) => { dispatch({ type: actions.GETLOCATION, value }) },
        setLeadId: (value) => { dispatch({ type: actions.GETLEAD, value }) },
        setParentCity: (value) => { dispatch({ type: actions.GETCITY, value }) },
        setOptedPackage: (value) => { dispatch({ type: actions.GETPRICINGPACKAGE, value }) },
        getFilteredTeachersList: (value) => { dispatch({ type: actions.GETFILTEREDTEACHERS, value }) },
        setisMobile: (value)=> { dispatch({ type: actions.ISMOBILE , value}) }
    }
    return (
        <TutorsContext.Provider value={value}>
            {children}
        </TutorsContext.Provider>
    )
}

export default Provider
