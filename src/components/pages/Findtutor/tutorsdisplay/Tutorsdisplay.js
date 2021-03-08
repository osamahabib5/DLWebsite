import React, { useState, useEffect, useContext } from 'react'
import { Pagination, Container, Row, Col } from 'react-bootstrap';
import baseUrl from "../../../../../src/baseUrl/baseUrl";
import avatar from "../Image/avatar.jpg";
import './Tutorsdisplay.css'
import Tutors from './Tutors/Tutors';
import { useRouteMatch } from 'react-router-dom';
import { TutorsContext } from "../../../../Provider";

function Tutorsdisplay() {
    const { results, loading, stopLoading, startLoading } = useContext(TutorsContext);
    const [isMobile, setmobile] = useState(false);
    const mobileview = () => {
        if (window.innerWidth < 769) {
            setmobile(true);
        }
        if (window.innerWidth >= 769) {
            setmobile(false);
        }
    }
    const [dataarr, fillarr] = useState(null);
    const [activepage, setactive] = useState(0);
    const [currPage, setCurrPage] = useState(1);
    const [postperpage, setpostperpage] = useState(12);
    const [apiurl, setUrl] = useState(baseUrl + '/api/teachers/list')
    let { url } = useRouteMatch();
    const paginate = (pageNum) => {
        setCurrPage(pageNum)
        setactive(pageNum);
    }

    useEffect(async () => {
        mobileview();
        window.addEventListener("resize", mobileview);
        startLoading();
        const response = await fetch(apiurl);
        const data = await response.json();
        const item = data.data;
        fillarr(Array.isArray(results) && results.length > 0 ? results : item);
        stopLoading();
    }, [results]);
    const indexofLastPost = currPage * postperpage;
    const indexofFirstPost = indexofLastPost - postperpage;
    const currentPosts = !loading && Array.isArray(dataarr) ? dataarr.slice(indexofFirstPost, indexofLastPost) : '';
    const totalpages = Math.ceil((!loading && Array.isArray(dataarr) ? dataarr.length : '') / postperpage);

    const nextpage = () => {
        setCurrPage((currPage + 1) <= totalpages ? (currPage + 1) : totalpages);
        setactive((currPage + 1) <= totalpages ? (currPage + 1) : totalpages)
    }
    const prevpage = () => {
        setCurrPage((currPage - 1 > 0) ? (currPage - 1) : 1);
        setactive((currPage - 1 > 0) ? (currPage - 1) : 1)
    }
    let items = [];
    for (let number = 1; number <= (isMobile ? (totalpages <= 7 ? totalpages : 7) :totalpages ) ; number++) {

        items.push(

            <Pagination.Item key={number} active={number == activepage} onClick={() => paginate(number)}>
                {number}
            </Pagination.Item>
        );
    }
    return (
        <div className="tutors-list">
            <div className="tutorslist">
                <Tutors dataarr={currentPosts} avatar={avatar} loading={loading} url={url} />
            </div>
            <div className="paginationlist">
                <Pagination size="sm">
                    <Pagination.Prev onClick={prevpage} />
                    {items}
                    <Pagination.Next onClick={nextpage} />
                </Pagination>
            </div>
        </div>
    )
}

export default Tutorsdisplay
