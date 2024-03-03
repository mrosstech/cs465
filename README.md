**Architecture**

* Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
    - There were many types of languages and frameworks used in the development of the frontend. The majority of the customer-facing frontend uses Express with handlebars as a templating language to generate the HTML for the View part of the site.
    - The admin site uses Angular to generate a single page application for use in administering the site's data. This type of site allows more interactivity because the entire site is running on the client side.  
* Why did the backend use a NoSQL MongoDB database?
    - The site used a MongoDB database for storing information for several reasons.  First, the site needs to store data permanently.  The database provides a place to permanently store data on trips and other information needed. NoSQL provides a flexible schema and fast data retrieval needed for this application.  

**Functionality**

* How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
    - JSON or JavaScript Object Notation is a data format for transferring or storing information. By using the JSON standard, the information contained in the JSON file can be utilized anyhwere that understands JSON.
    - JavaScript is a scripting language that can be used to add functionality to an otherwise static website. The JavaScript is run on the client side and adds interactivity to the website.
* Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
    - There are several examples of refactoring from the original code. The first was taking the original static HTML and creating handlebars templates for the pages. This process involved copying the original page HTML source into an HBS file and then converting the header and footers into re-usable templates.  This one change ensured that code would not have to be copied from one page to another and kept the code DRY.
    - Another example of refactoring was adding loops to the HBS code to create multiple copies of items on pages. An example of this was to get the data on trips from the database and render all trips on the page one by one until all of the trips from the DB had been represented.


**Testing**

* Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
    - Testing the APIs was accomplished by sending and receiving data from the various endpoints using the Postman client software. Using this software allowed sending data in different formats to the API endpoint and verifying the return data.
    - Adding security to the endpoints made testing harder by the need to include a JWT token to the headers in order to prove the person requesting the data is properly authenticated.

**Reflection**

* How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
    - While a lot of the classes taken to this point had us practicing concepts in a limited way, most of them were incredibly focused on a single idea or methodology. This class had us taking an existing, working, website and making it more dynamic. This very much felt like something that would need to be done in the field.
    - I can use the skills and content generated to create portfolio content and prove the skills I have in making websites more interactive and secure.