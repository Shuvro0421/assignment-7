import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2';



const Cards = () => {

    const [cards, setCards] = useState([]);
    const [courseNames, setCourseNames] = useState([]);
    const [credit, setCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(20);
    const [selectedCardIds, setSelectedCardIds] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(response => response.json())
            .then(data => setCards(data));
    }, []);

    const handleCourseName = (course_name, course_credit, id) => {

        const newCourseNames = [...courseNames, course_name];
        const newTotalCredit = credit + course_credit;
        const newRemainingCredit = remainingCredit - course_credit;
        const newSetSelectedCardIds = [...selectedCardIds, id];

        const isExist = selectedCardIds.includes(id);
        if (isExist) {
            return Swal.fire('You cannot add more than one card');
            
        }


        if (newTotalCredit > 20) {
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Total credit exceeds 20. You cannot add more credits'

                  })
            );
        }
        else if (newRemainingCredit < 0) {

            return Swal.fire('Credit cannot be negative. Cannot add this course');
            
        }
        else {
            setCredit(newTotalCredit);
            setRemainingCredit(newRemainingCredit);
            setCourseNames(newCourseNames);
            setSelectedCardIds(newSetSelectedCardIds);
        }
    };

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