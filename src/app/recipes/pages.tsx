"use client"

import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import Loading from '../loading';
import { ninjaRecipes } from '../../../data';



  

async function getRecipes() {
  const result = await fetch('http://localhost:4000/recipes');
  return result.json();
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipesData = await getRecipes();
        setRecipes(recipesData);
      } catch (error) {
        // setError('Error fetching recipes');
        console.log('Error fetching recipes, fetch locally instaed');
        const recipesData = ninjaRecipes;
        setRecipes(recipesData);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  if (loading) {
    return (
    <div>
        
        <Loading/>
    </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='grid grid-cols-3 gap-8'>
      {recipes.map((data, i) => (
       
        <RecipeList key={i} data={data} />
   
        
      ))}
    </div>
  );
}
