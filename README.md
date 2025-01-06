# 2-Work Flow app

![Screenshot](/public/clientsLogs.png)

## App Name: Tr Work Flow

### Description

Clients Logs is designed to support preventive maintenance field technicians by providing a reliable way to store essential client details. It ensures technicians have quick access to gate codes, client phone numbers, and addresses of machinery locations. The loged in tech will be able to see only the entries created by him. This is especially helpful for technicians who work at night and need secure, fast access to gated job sites.

Key features include:

1- Full CRUD Functionality: Add, view, update, and delete client information.

2- Store and manage client gate codes for quick access.

3- Save phone numbers and addresses to streamline communications and navigation.

4- Easy-to-use interface for technicians working under time-sensitive conditions.

## Users Histories
- As a user I can create work clients logs.
- As a user I can see only clients logs created by me.
- As a user I want to be abble to edit and delete only the clients I have created.

### Deployed App

You can try the app [here](https://clientslogs.onrender.com).

### Instructions

1. Visit the link provided above.
2. You can Sign Up in the web app and start using it by creating records of your clients.
3. Click Details for view the record; once on the show page click edit to be able to update and delete.

## Technologies Used

# Backend:
- Python and Django for server-side logic and API development.
- Data stored in a PostgreSQL database hosted on Neon.com.

# Frontend:
- React (with Vite) for a responsive and dynamic user interface.
- JavaScript for functionality and interactivity.

## Next Steps

Planned future enhancements include:

- Adding more table and foreing key to the clients so that machines with start code can be stored as well.
- Include capacity refill per model.
- Add a filter to search for machine codes base on serial number

## To run this project locally, follow these steps:

# Backend:
- Clone the Repository:
- Create a virtual-enviroment running: python3 -m venv venv
- Activate your virtual enviroment runing: source venv/bin/activate
- Innstall dependencies runing: pip install -r requirements.txt
- Create your .env file and name the variable DATABASE_URL=(your connection string).
- Run migrations.
- Run the server: python manage.py runserver

# Frontend:
- After cloning run: npm install
- create your .env with the variable named VITE_BASE_URL=(your connection string)
- Run: npm run dev
---

Enjoy Trying the app!
