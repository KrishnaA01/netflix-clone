import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviesData from "../../api/movies"
import { Modal } from 'react-bootstrap'
import './Movie.css'

export default function Movie() {

    const { pageId } = useParams();
    // const [movieObject,setMovieObject] = useState({})
    const [movieObject,setMovieObject] = useState(null)
    
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        const targetMovie = moviesData.find((currentValue)=> pageId === currentValue.id);
        setMovieObject(targetMovie);
    }, [pageId])


    if  (movieObject) {
        return (
        <div className="Movie" 
        style={{backgroundImage:`url(${movieObject.image})`}}>
            <h2> {movieObject.title} </h2>
            <p> {movieObject.description} </p>
            <span onClick={()=>setIsOpen(true)} className="Play">PLAY</span>


            <Modal
            onHide={() => setIsOpen(false)}
            show={isOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <iframe 
           
            height="400" 
            src={movieObject.video}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            </Modal>
        </div>
        );
    } else {
        return <div>Loading....</div>;
      }
    }
 