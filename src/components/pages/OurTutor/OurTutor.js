import React, { useEffect, useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './OurTutor.css'
import TutorIntro from './TutorIntro/TutorIntro';
import TutorName from './TutorName/TutorName';
import TeachingMethods from './TeachingMethods/TeachingMethods';
import TeacherDescription from './TeacherDescription/TeacherDescription';
import TeacherCredential from './TeacherCredential/TeacherCredential';
import PersonalReviews from './PersonalReviews/PersonalReviews';
import TeacherOptions from './TutorIntro/TeacherOptions/TeacherOptions';
import axios from 'axios';
import baseUrl from '../../../../src/baseUrl/baseUrl';
import avatar from './TutorIntro/Images/avatar.jpg';
import { useParams} from 'react-router-dom';
import { TutorsContext } from '../../../Provider';
function OurTutor() {
    const {fee_amount, setResultType} = useContext(TutorsContext)
    let { id } = useParams();
    const [form, setform] = useState({ name: '', bio: '', location: '', active_students: '', lifetime_hours: '', programs: [], reviews: [], image: '', average_rating: 0, super_tutor: 0, teaching_methods: [], course_packages: []})
    const [apiurl, setUrl] = useState(baseUrl + '/api/teacher/profile/')
    async function getUser() {
        await axios.get(apiurl + id)
            .then(function (response) {
                console.log("Response: " + JSON.stringify(response.data.data.course_packages))
                setform({
                    name: response.data.data.name,
                    bio: response.data.data.bio,
                    location: response.data.data.location,
                    active_students: response.data.data.active_students,
                    lifetime_hours: response.data.data.lifetime_hours,
                    programs: response.data.data.programs,
                    reviews: response.data.data.reviews,
                    image: response.data.data.image,
                    average_rating: parseInt(response.data.data.average_rating),
                    super_tutor: response.data.data.super_tutor,
                    teaching_methods: response.data.data.teaching_methods,
                    course_packages: response.data.data.course_packages,
                })
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        getUser();
        if (fee_amount > 0){
            setResultType("teachers")
        } else{
            setResultType("pricing")
        }
    }, []);
    return (
        <div className="tutor-info">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <div className="tutor-intro">
                                    <TutorIntro image={form.image == null ? avatar : form.image} />
                                </div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="name">
                                    <TutorName name={form.name} bio={form.bio} location={form.location} average_rating={form.average_rating} super_tutor={form.super_tutor} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="Tutor-Name">
                            <TutorName super_tutor={form.super_tutor} name={form.name} bio={form.bio} location={form.location} average_rating={form.average_rating} />
                        </div>
                        <div className="teaching-methods">
                            {form.teaching_methods.length != 0 ? <TeachingMethods teaching_methods={form.teaching_methods} active_students={form.active_students} lifetime_hours={form.lifetime_hours} /> : ''}
                        </div>
                        <div className="teacher-description">
                            <TeacherDescription bio={form.bio} />
                        </div>
                        <div className="teacher-credentials">
                            {form.programs.length != 0 && form.course_packages.length != 0 ?
                                <TeacherCredential programs={form.programs}
                                    course_packages={form.course_packages}
                                /> : form.programs.length != 0 ? <TeacherCredential programs={form.programs} /> : form.course_packages.length != 0 ? <TeacherCredential course_packages={form.course_packages} /> : ''}
                        </div>
                    </div>
                    <div className="col" style={{ alignSelf: "center" }}>
                        <div className="personal-reviews">
                            {form.reviews.length != 0 ? <PersonalReviews reviews={form.reviews} /> : ''}
                        </div>
                        <div className="teacher-option">
                            <TeacherOptions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTutor
