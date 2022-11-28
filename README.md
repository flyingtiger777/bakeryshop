# Development

### Link to Deployed Website
The page'slink: https://flyingtiger777.github.io/bakeryshop/

### Goal and Value of the Application
- This application allows users to view the products of a bakery shop. Users can filter the products by their types and sort the products by prices or calories. Additionally, users can add selected products to their favorites and the total price will be displayed.

### Usability Principles Considered
- I used borders and hover effects to indicate the buttons which users can interact with. I have implemented an "All" button to revert from filtering. Also, I have implemented a "Reset" button to reset the sorting settings. The users can not add duplicated items to the favorite list. By clicking the items in the favorite list, users can remove the item in the list.

### Organization of Components
- I have implemented 5 components including BakeryItem, Card, CardList, Favorites, and filterList. BakeryItem includes a navigation bar for filtering and sorting as well as a display section for the products. Card and CardList components are for displaying the products in a list of cards style. The favorites component is for the favorites list. And finally, filterList is for updating the list after applying filtering conditions.

### How Data is Passed Down Through Components
- I first implemented each part having its own component. Later, I realized that I can merge them into one BakeryItem component. I passed the products and types to the BakeryItem component for displaying, sorting, and filtering. I passed favor and total to the Favorites component for displaying and removing from the favorites list. I applied a structure similar to the previous lab using Card and CardList to display the 12 products. The Card component will display the bakery data, which I collected from the sample webpage and made into a JSON file. Then the Card component is passed to the CardList component to display individual cards in a list view and finally passed to the BakeryItem component for sorting and filtering.
### How the User Triggers State Changes
- Users can interact with the interface using the buttons. If users click the filtering buttons, the state of types and products will be updated with the filterList component. Similarly, if users click the sorting buttons, the state of types and products will also be updated. I have the "types" parameters to represent different methods, so users can click on different sorting settings and the products will be sorted with different properties such as prices or calories. Moreover, if the users click on the "add" or "remove" buttons from the product cards or the favorites list, the state of total and favor will be updated as products are added to or removed from the favorites list. The total price inside the Favorites will be automatically calculated and shown in the favorites list.

