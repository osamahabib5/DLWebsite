import React, { useReducer } from 'react'
const initialState = {
    results: [],
    loading: true,
    fetched_grades: [],
    subjects_list: [],
    parent_country: null,
    parent_city: "",
    lead_id: 0,
    opted_package: 0,
    filtered_teachers_list: [],
    isMobile: false,
    fee_amount: 0,
    timeslots: [],
    days: [],
    teacher_id: 0,
    teacher_info: null,
    result_type: "",
    subscription_type: "",
    confirmpricing: false,
    demo_date: "",
    demo_time: "",
    demo_day: "",
    tutortype: "",
    skippedpricing: false,
    courseid: 0,
    Days: "",
    time: "",
    paymentForm: false,
    teacher_name: "",
    showTeachers: false,
    BookingDetails: null,
    scrollToForm: false,
    USDtoPKR: 0,
    changeCountry: false,
    studentid: null
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
    ISMOBILE: 'ISMOBILE',
    SETFEES: 'SETFEES',
    GETTIMESLOTS: 'GETTIMESLOTS',
    GETDAYS: 'GETDAYS',
    GETTEACHERID: 'GETTEACHERID',
    GETTEACHERINFO: 'GETTEACHERINFO',
    SETRESULTTYPE: 'SETRESULTTYPE',
    SETSUBSCRIPTION: 'SETSUBSCRIPTION',
    CONFIRMPRICING: 'CONFIRMPRICING',
    SETDEMODATE: 'SETDEMODATE',
    SETDEMOTIME: 'SETDEMOTIME',
    SETDEMODAY: 'SETDEMODAY',
    SETTUTORTYPE: 'SETTUTORTYPE',
    SKIPPRICING: 'SKIPPRICING',
    SETISMOBILE: 'SETISMOBILE',
    SAVECOURSEID: 'SAVECOURSEID',
    SETDAYS: 'SETDAYS',
    SETTIME: 'SETTIME',
    SHOWPAYMENTFORM: 'SHOWPAYMENTFORM',
    SETTEACHERNAME: 'SETTEACHERNAME',
    SHOWTEACHERS: 'SHOWTEACHERS',
    SETBOOKINGDETAILS: 'SETBOOKINGDETAILS',
    SETSCROLLTOFORM: 'SETSCROLLTOFORM',
    SETDOLLARVALUE: 'SETDOLLARVALUE',
    CHANGECOUNTRY: 'CHANGECOUNTRY',
    DONTCHANGECOUNTRY: 'DONTCHANGECOUNTRY',
    SETSTUDENTID: 'SETSTUDENTID',
    REVERSESCROLLTOFORM: 'REVERSESCROLLTOFORM'
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
        case actions.SETFEES:
            return {
                ...state,
                fee_amount: action.value
            }
        case actions.GETTIMESLOTS:
            return {
                ...state,
                timeslots: action.value
            }
        case actions.GETDAYS:
            return {
                ...state,
                days: action.value
            }
        case actions.GETTEACHERID:
            return {
                ...state,
                teacher_id: parseInt(action.value)
            }
        case actions.GETTEACHERINFO:
            return {
                ...state,
                teacher_info: action.value
            }
        case actions.SETRESULTTYPE:
            return {
                ...state,
                result_type: action.value
            }
        case actions.SETSUBSCRIPTION:
            return {
                ...state,
                subscription_type: action.value
            }
        case actions.CONFIRMPRICING:
            return {
                ...state,
                confirmpricing: action.value
            }
        case actions.SETDEMODATE:
            return {
                ...state,
                demo_date: action.value
            }
        case actions.SETDEMOTIME:
            return {
                ...state,
                demo_time: action.value
            }
        case actions.SETDEMODAY:
            return {
                ...state,
                demo_day: action.value
            }
        case actions.SETTUTORTYPE:
            return {
                ...state,
                tutortype: action.value
            }
        case actions.SKIPPRICING:
            return {
                ...state,
                skippedpricing: action.value
            }
        case actions.SETISMOBILE:
            return {
                ...state,
                isMobile: action.value
            }
        case actions.SAVECOURSEID:
            return {
                ...state,
                courseid: parseInt(action.value)
            }
        case actions.SETDAYS:
            return {
                ...state,
                Days: action.value
            }
        case actions.SETTIME:
            return {
                ...state,
                time: action.value
            }
        case actions.SHOWPAYMENTFORM:
            return {
                ...state,
                paymentForm: true
            }
        case actions.SETTEACHERNAME:
            return {
                ...state,
                teacher_name: action.value
            }
        case actions.SHOWTEACHERS:
            return {
                ...state,
                showTeachers: true
            }
        case actions.SETBOOKINGDETAILS:
            return {
                ...state,
                BookingDetails: action.value
            }
        case actions.SETSCROLLTOFORM:
            return {
                ...state,
                scrollToForm: true
            }
            case actions.REVERSESCROLLTOFORM:
            return {
                ...state,
                scrollToForm: false
            }
        case actions.SETDOLLARVALUE:
            return {
                ...state,
                USDtoPKR: action.value
            }
        case actions.CHANGECOUNTRY:
            return {
                ...state,
                changeCountry: true
            }
        case actions.DONTCHANGECOUNTRY:
            return {
                ...state,
                changeCountry: false
            }
        case actions.SETSTUDENTID:
            return {
                ...state,
                studentid: action.value
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
        changeCountry: state.changeCountry,
        loading: state.loading,
        subjects_list: state.subjects_list,
        parent_country: state.parent_country,
        parent_city: state.parent_city,
        lead_id: state.lead_id,
        fee_amount: state.fee_amount,
        opted_package: state.opted_package,
        timeslots: state.timeslots,
        filtered_teachers_list: state.filtered_teachers_list,
        days: state.days,
        teacher_id: state.teacher_id,
        teacher_info: state.teacher_info,
        result_type: state.result_type,
        subscription_type: state.subscription_type,
        confirmpricing: state.confirmpricing,
        demo_time: state.demo_time,
        demo_date: state.demo_date,
        demo_day: state.demo_day,
        tutortype: state.tutortype,
        skippedpricing: state.skippedpricing,
        isMobile: state.isMobile,
        courseid: state.courseid,
        Days: state.Days,
        time: state.time,
        USDtoPKR: state.USDtoPKR,
        teacher_name: state.teacher_name,
        paymentForm: state.paymentForm,
        BookingDetails: state.BookingDetails,
        showTeachers: state.showTeachers,
        scrollToForm: state.scrollToForm,
        studentid: state.studentid,
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
        setisMobile: (value) => { dispatch({ type: actions.ISMOBILE, value }) },
        calculateFees: (value) => { dispatch({ type: actions.SETFEES, value }) },
        getTimeSlots: (value) => { dispatch({ type: actions.GETTIMESLOTS, value }) },
        getTeacherDays: (value) => { dispatch({ type: actions.GETDAYS, value }) },
        getTeacherId: (value) => { dispatch({ type: actions.GETTEACHERID, value }) },
        getTeacherInfo: (value) => { dispatch({ type: actions.GETTEACHERINFO, value }) },
        setResultType: (value) => { dispatch({ type: actions.SETRESULTTYPE, value }) },
        setSubscription: (value) => { dispatch({ type: actions.SETSUBSCRIPTION, value }) },
        setConfirmPricing: (value) => { dispatch({ type: actions.CONFIRMPRICING, value }) },
        setDemoDate: (value) => { dispatch({ type: actions.SETDEMODATE, value }) },
        setDemoTime: (value) => { dispatch({ type: actions.SETDEMOTIME, value }) },
        setDemoDay: (value) => { dispatch({ type: actions.SETDEMODAY, value }) },
        setTutorType: (value) => { dispatch({ type: actions.SETTUTORTYPE, value }) },
        skipPricing: (value) => { dispatch({ type: actions.SKIPPRICING, value }) },
        saveCourseId: (value) => { dispatch({ type: actions.SAVECOURSEID, value }) },
        setTimes: (value) => { dispatch({ type: actions.SETTIME, value }) },
        setDays: (value) => { dispatch({ type: actions.SETDAYS, value }) },
        showPaymentForm: () => { dispatch({ type: actions.SHOWPAYMENTFORM }) },
        setTeacherName: (value) => { dispatch({ type: actions.SETTEACHERNAME, value }) },
        showTutors: () => { dispatch({ type: actions.SHOWTEACHERS }) },
        setBookingDetails: (value) => { dispatch({ type: actions.SETBOOKINGDETAILS, value }) },
        scrollTotheForm: () => { dispatch({ type: actions.SETSCROLLTOFORM }) },
        reverseScrollPayment: () => { dispatch({ type: actions.REVERSESCROLLTOFORM }) },
        setDollarToPKR: (value) => { dispatch({ type: actions.SETDOLLARVALUE, value }) },
        ChangeCountry: () => { dispatch({ type: actions.CHANGECOUNTRY }) },
        dontChangeCountry: () => { dispatch({ type: actions.DONTCHANGECOUNTRY }) },
        setStudentId : (value) => { dispatch({ type: actions.SETSTUDENTID, value }) },
    }
    return (
        <TutorsContext.Provider value={value}>
            {children}
        </TutorsContext.Provider>
    )
}

export default Provider
