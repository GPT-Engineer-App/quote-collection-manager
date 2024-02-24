# quote-collection-manager

Develop a web application that enables users to efficiently manage a collection of quotes, including adding, viewing, editing, deleting, and categorizing them. The application will provide an intuitive interface for users to interact with their quotes collection seamlessly.

## **User Stories and Layout**

### **1. Homepage/Dashboard**

- **User Story: View All Quotes**
    - As a user, I want to see a list of all my saved quotes on the homepage so that I can quickly browse through my collection.
    - **Layout**: The homepage features a minimalist design displaying quotes in a list or grid format. Each quote card shows a preview of the quote, its author, and associated categories. Navigation buttons or links to other app sections are prominently placed.

### **2. Add Quote Page**

- **User Story: Add a New Quote**
    - As a user, I want to add new quotes to my collection by specifying the text, author, and category, so that I can expand my collection.
    - **Layout**: This page includes a form with fields for the quote text, author (optional), and a dropdown or tag system for selecting or adding new categories. A submit button saves the quote to the collection.

### **3. Quote Details Page**

- **User Story: View Quote Details**
    - As a user, I want to click on a quote to view its full details, so that I can read the entire quote and see its metadata.
    - **Layout**: Displays the full quote, author, and categories. Options to edit or delete the quote are available, along with a back button to return to the homepage/dashboard.

### **4. Edit Quote Page**

- **User Story: Edit a Quote**
    - As a user, I want to edit the details of a quote (text, author, category) after it has been added, so that I can correct errors or update its information.
    - **Layout**: Similar to the Add Quote Page but pre-filled with the quote's current details. Save changes with a "Update" button.

### **5. Categorize Quotes**

- **User Story: Organize Quotes by Category**
    - As a user, I want to categorize my quotes so that I can organize them based on themes or subjects.
    - **Layout**: Within the Add/Edit Quote pages, include a category selection feature. On the homepage/dashboard, provide a filter or dropdown menu to view quotes by selected categories.

### **6. Search Functionality**

- **User Story: Search for Quotes**
    - As a user, I want to search for quotes within my collection by text or author so that I can find specific quotes easily.
    - **Layout**: Include a search bar at the top of the homepage/dashboard. Display search results in the same format as the main list of quotes.

### **7. Delete Quote**

- **User Story: Delete a Quote**
    - As a user, I want to delete a quote from my collection if it's no longer needed or was added by mistake, so that I can keep my collection relevant.
    - **Layout**: On the Quote Details Page, include a "Delete" button with a confirmation prompt to prevent accidental deletions.

*Important*

This is a prototype but please sure you implement ALL the user stories, mocking and using dummy data if necesary. We will validate the prototype by running through EVERY SINGLE user story, so we need to be able to complete every single task.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/quote-collection-manager.git
cd quote-collection-manager
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
