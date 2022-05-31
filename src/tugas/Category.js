import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
  const [meals, setMeals]=useState(null);
  const [selectedCat,setSelectedCat]=useState('seafood')
  console.log('meals  ',meals)

  const selectHandle=(category) =>{
    setSelectedCat(category);
  }
  const fetchData=async (category)=>{
    const data =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const result = await data.json();
    setMeals(result.meals)
  }
  useEffect(() =>{
    fetchData(selectedCat);
  },[selectedCat])
  console.log(selectedCat)
  return (
    <div>
    <h1>List of {selectedCat}</h1>
    
    <button onClick={() => selectHandle('Beef')}>Beef</button>
        <button onClick={() => selectHandle('Seafood')}>Seafood</button>
        <div className='cat'>

            {
                meals && meals.length > 0 ? (
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            meals.map(meal => (
                                <div className='div-meal'>
                                <Link to={`/detail/${meal.idMeal}`} style={{margin: '16px'}} key={meal.idMeal}>
                

                                    {/* <p>ID:{meal.idMeal}</p> */}
                                    <img style={{width: '100px', height: '100px'}} src={meal.strMealThumb} alt={meal.strMeal} />
                                    <p>{meal.strMeal}</p>

                                </Link>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>Loading ...</p>
                )
            }
        </div>
    </div>
)
}

export default Category