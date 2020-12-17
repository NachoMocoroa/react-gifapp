import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div className="app">
            <header>
                <h1>GifApp</h1>
                <AddCategory setCategories={ setCategories } />
            </header>
            <main>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    ))
                }
            </main>
            <footer>
                <p>All images from &copy;GIPHY, Inc.</p>
            </footer>
        </div>
    );
        
}

export default GifApp;