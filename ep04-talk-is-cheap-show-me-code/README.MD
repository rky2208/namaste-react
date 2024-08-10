# ----- Time to start the coding - FOOD Ordering APP --------
In this episode, we will start actual coding by starting a new project. Our app is going to a Food Ordering App.

# ------ PLANNING --------
Befor stat jumping into code it's always important to plan it better.
1. Requirement understanding
   - What we want to develop? What are features? How it will behave? Target Audience? and more...
2. Name the APP
   - It's very crucial to give the best market fit name for your app.

3. Tech Stacks
4. UI Structure
    Header
      - Logo
      - Nav Items
    BODY
      - Search
      - Restaurant Container
       - Restaurant Card
         - Image
         - Restaurant Name
         - Rating
         - Cuisines
         - Time to Deliver
    Footer
    - Copyright
    - Links
    - Address
    - Contact 

5. Folder Structure and more!!!

Then start the code!!


# ------ Styling Elements ------
1. Using Inline Style
   - Writing the CSS along with the element in the same file. It is
    not recommended to use inline styling. So you should avoid
    writing it.
    <div
    style={{ backgroundColor: "#f0f0f0" }}
    >
    Talk is Cheap, Show me the Code! (Namaste-React) 5
    <h3> Meghana Foods </h3>
    </div>
    In ‘style={{ backgroundColor: "#f0f0f0" }}’, first bracket is to
    tell that whatever is coming next will be JavaScript and the
    second bracket is for JavaScript object
    or you can store the CSS in a variable and then use it
    const styleCard = { backgroundColor: "#f0f0f0" };
    <div
    className="red-card"
    style={styleCard}
    >
    <h3> Meghana Foods </h3>
    </div>

2. External Styling
   - Better and recommended way of styling.
   - We can use external .css/.scss or other styled file & import it use the classname.
    <div
    classname="food-container"
    >
    Talk is Cheap, Show me the Code! (Namaste-React) 5
    <h3> Meghana Foods </h3>
    </div>


# ---- Props ------
Short form for properties. To dynamically send data to a component we use props. Passing a prop to a function is like passing an argument to a function.

1. Passing Props to a Component
    Example,
    <RestaurantCard
    resName={"Meghana Foods"}
    cuisine={["Biryani, North Indian"]}
    />

    or 
    <RestaurantCard
    resName="Meghana Foods"
    cuisine={["Biryani, North Indian"]}
    />

    ‘resName’ and ‘cuisine’ a props and this is prop passing to a component.

2. Receiving Props in a Component

    Props will be wrapped and send in Javascript object
    Example,
    const RestaurantCard = (props) => {
    return(
    <div>{props.resName}</div>
    )
    }

    Destructuring Props
    Example,
    const RestaurantCard = ({resName, cuisine}) => {
    return(
    <div>{resName}</div>
    )
    }


# -- Unique Key id while using mapEach item in the list must be uniquely identified !! Why? ---
When we have components at same level and if a new component comes on the first without ID, DOM is going to re-render all the components again. As DOM can’t identify where to place it. But if we give each of them a unique ID then react knows where to put that component according to the ID. It is a good optimization and performance thing.

 ---- Note* Never use index as keys in map. It is not recommended ---

    const Body = () => {
    return(
        <div>
        {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} /
        ))}
        </div>
    )
    }


