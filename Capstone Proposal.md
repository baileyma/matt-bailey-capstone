# Project Title

## Overview

What is your app? Give a brief description in a couple of sentences.

A personal finance app which helps you with:

-ISA
-General account
-SIPP

Shows you:

-How each account is performing year-on-year
-How much you are paying in fees
-How much you will pay in tax each tax year in the general account

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

To work out tax, we need to work out dividends (can this be gotten from the API)?

XIRR calculation?

Does the user need to enter fund fees? I could have an explainer on OCF and other charges.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

All investors, those looking to have a better understanding of how their pension etc is performing and how much they are paying in tax and fees (this is not currently on the mmain investment platforms)

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Main page: three components, one for each account. Within them, a list of current investments...their value, price etc...

Fees page: user inputs the fees they are charged (with help from an explainer on the page) for each investment....the page then calculates how much they pay in fees...could add the curve to show the negative impact

Tax page for General Account: first ask the user about other income in order to calculate dividend and CGT rate bands

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

React, Express, SCSS, Axios.

### APIs

List any external sources of data that will be used in your app.

Financial Modeling Prep API (this is preferred option)

YahooFinanceAPI

AlphaVantage

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Main page

Fees page

Tax page

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

Endpoint:

https://financialmodelingprep.com/api/v3/profile/

path param: company symbol (string)



## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

---

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.
