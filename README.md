# Country Crammer

#### Video Demo:  <https://youtu.be/nB58868_dOU>
#### Description:

The website provides an interactive interface for users to explore different countries and learn more about their geography, economy, and culture. An API enhanced Javascript app, it provides information on the countries of the world in the following areas:

* the flag of the country
* the capital of the country
* the current time in the country's capital
* the current weather in the country's capital
* the currency of the country, and a currency comparison with the US dollar
* 3 recent news articles connected to the country
* an interactive map, with a tag showing the position of the country's capital

The APIs used are:

* REST Countries API for basic information about countries such as name, capital, population, flag, and currency.
* open-meteo - API for current weather data of the capital city of each country.
* jsdelivr - API for currency comparison
* guardianapis - API for news articles associated with the relevant country (only top 3 shown based on date)
* leaflet - API used to produce a map section on the site, and show a tag at the position of the country's capital. This can be manually manipulated by the user.

###Features
The website provides the following features for users:

* Browse through a list of all countries.
* View basic information about each country. Each country has its own page with detailed information about its geography, economy, and culture. Users can view information such as the country's capital city, its flag, and its currency.
* View the current weather data of each country's capital city. Users can view the current weather conditions for each country's capital city. This information is updated in real-time, so users can stay up-to-date with the latest weather conditions.
* View news articles related to each country. Users can view news articles related to each country to stay informed about current events.
* View images of each country's flag.
* View country's capital position on a map section. The website includes interactive maps that allow users to explore each country's geography and learn more about its location.

###Usage
To use the website, simply visit the URL where it is deployed. Users can then browse through the list of all countries.

Installation
To run the website locally, follow these steps:

* Clone the repository to your local machine.
* Navigate to the repository folder and run npm install to install the necessary dependencies.
* Run npm start to start the server.
* Visit http://localhost:3000 in your web browser to view the website.

###Technologies used
* React & JavaScript. These are used to create the frontend and logic for the app, including state and other logic used in the app. 
* HTML & CSS. These languages are used to create the website's front-end, including the user interface and interactive features.
* Fetch. This library is used to make API requests to collect data about each country.
* Git.

###Contributing
Contributions to the website are welcome. If you find a bug or have a feature request, please open an issue in the repository. Pull requests are also welcome.

###Authors
* stustr

###Licence
This project is licensed under the MIT License.