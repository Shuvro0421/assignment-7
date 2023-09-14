import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [courseNames , setCourseNames] = useState([]);

    useEffect(() => {
        fetch('course.json').then(response => response.json()).then(data => setCards(data));
    }, [])

    const handleCourseName = (course_name) =>{
        const newCourseNames = [...courseNames , course_name];
        setCourseNames(newCourseNames);
    }

    return (
        <div className="flex lg:flex-row lg:items-start  space-y-5 mb-7 flex-col md:mx-5 ">

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-5">
                {
                    cards.map((card, idx) => <Card handleCourseName={handleCourseName} key={idx} card={card}></Card>)
                }
            </div>
            <div>
                <Cart courseNames={courseNames}></Cart>
            </div>
        </div>
    );
};

export default Cards;