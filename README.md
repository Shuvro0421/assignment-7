# Course Registration Project

This project offers an extensive collection of high-quality courses available at affordable prices, providing valuable educational opportunities for all

## Features

  * Use select button to add courses in the cart
  * Cannot select more than one course
  * After selecting certain course the cart is designed to show total credit hours also remaining credit hour
## Managing the states 


  * **cards State:** This state serves as the data source for fetching card information from the API and managing the card objects' display on the website.

  * **courseNames State:** This state is responsible for presenting the courses added to the cart on the website.

  * **credit State:** It manages and displays the total credit hours, with an upper limit of 20 to maintain balance.

  * **remainingCredit State:** This state keeps track of the remaining credit hours, subtracting the credit hours used for selected courses and ensuring it doesn't exceed 20.

  * **selectedCardIds State:** This state prevents duplicate course names in the cart by filtering out cards with the same course name.




