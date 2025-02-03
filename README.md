# Random Dog Image Application

This is a simple React application that displays a random dog image fetched from the [Dog CEO API](https://dog.ceo/api/breeds/image/random). The application has the following pages:

1. **Home Page** - Displays a random dog image and a button to fetch a new image.
![Screenshot 2025-02-04 023314](https://github.com/user-attachments/assets/07dd39ca-fa94-470a-8004-a7dee48d650b)

  
2. **History Page** - Stores and displays all previously fetched dog images.
   ![Screenshot 2025-02-04 023338](https://github.com/user-attachments/assets/fa475236-41be-477e-b79e-e96e506b4b33)

3. **Add to Cart** - Allows users to add a dog image to their cart and specify a price.
   ![Screenshot 2025-02-04 023353](https://github.com/user-attachments/assets/2f6f7049-b96e-49b1-b899-4be293d518d4)


## Features

- **Home Page**:
  - Fetches and displays a random dog image when the page loads.
  - Allows users to fetch a new random dog image by clicking the "Fetch" button.
  - Displays the "Add to Cart" button, enabling users to add the current dog image to the cart.

- **History Page**:
  - Stores the dog images fetched on the Home Page.
  - Displays all previously fetched dog images along with the time they were added.

- **Add to Cart**:
  - Users can add any dog image to their cart by specifying a price.
  - Displays the dog image along with its price.
  - Shows the total price of all items in the cart.

## Technologies Used

- **Frontend**: React.js with Vite
- **API**: [Dog CEO API](https://dog.ceo/api/breeds/image/random)
- **Routing**: React Router
- **Local Storage**: For saving fetched images in History
- **Deployment**: Vercel

## How to Run the Application

1. Clone the repository:
   ```bash
   git clone
     cd dog-image-app
     npm install
   npm run dev

Deployment
You can view the live app on Vercel at :-
random-dog-image-application-9r8dsyjpc.vercel.app

