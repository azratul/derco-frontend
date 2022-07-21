import React, { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import getData from './utils/getData';
import './App.css';

export const ProfileContext = createContext({});

const URL_POSTS = process.env.REACT_APP_URL_POSTS;

function App() {
    const [posts, setPosts] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData(URL_POSTS)
            .then(res => {
                setPosts(res)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <>
                <div>Loading...</div>
            </>
        );
    }
    return (
        <>
            <ProfileContext.Provider value={posts}>
                <Header />
                <Posts />
                <Footer />
            </ProfileContext.Provider>
        </>
    )
}

export default App;
