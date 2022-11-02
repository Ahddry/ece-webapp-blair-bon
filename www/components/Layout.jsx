import Navbar from "../components/Navbar";
import Head from "next/head";
import React, { useState, useEffect } from 'react';

// Layout d'une page

function Layout({ children }) {

    //In the Header component, implement inside a useEffect React hook a call to fetch the profile
    //If the user is logged in, the API returns an object with the user's username and email. In real life, if the user is not logged in, an HTTP error 401 is returned. On success, display an account icon associated with the user's username.
    //If the user is not logged in, display a login icon.
    //If the user clicks on the login icon, redirect to the login page.
    //If the user clicks on the account icon, redirect to the account page.



    return (
        <div className="bg-background dark:bg-dark_background text-on_background dark:text-dark_on_background min-h-screen flex flex-col">
            <Head>
                <title>Nos Portfolios</title>
                <meta name="description" content="Portfolios d'Adrien BLAIR et Aurélien BON" />
                <link rel="icon" href="/bonjourapp.ico" />
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="">{children}</main>
        </div>
    );
}
export default Layout;
