import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [courseNames, setCourseNames] = useState([]);
    const [credit, setCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(20);

    useEffect(() => {
        fetch('course.json').then(response => response.json()).then(data => setCards(data));
    }, [])

    const handleCourseName = (course_name, course_credit) => {
        const newCourseNames = [...courseNames, course_name];

        const newTotalCredit = credit + course_credit;
        const newRemainingCredit = remainingCredit - course_credit;

        newTotalCredit > 20 ? alert('Total credit exceeds 20. Cannot add this course') : 
        newRemainingCredit < 0 ? alert('Credit cannot be negative. Cannot add this course') :
        (
            setCredit(newTotalCredit) ,
            setRemainingCredit(newRemainingCredit) ,
            setCourseNames(newCourseNames)
        );


    }

    return (
        <div className="flex lg:flex-row lg:items-start  space-y-5 mb-7 flex-col md:mx-5 ">

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-5">
                {
                    cards.map((card, idx) => <Card handleCourseName={handleCourseName} key={idx} card={card}></Card>)
                }
            </div>
            <div>
                <Cart credit={credit} remainingCredit={remainingCredit} courseNames={courseNames}></Cart>
            </div>
        </div>
    );
};

export default Cards;