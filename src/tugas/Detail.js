import React ,{ useEffect,useState }from 'react'
import {useParams} from "react-router-dom"

const Detail = () => {
    const {idMeal} = useParams();
    const [detailMeal,setDetailMeal]=useState(null)
    const fetchData=async (category)=>{
    const data =await fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const result = await data.json();
    setDetailMeal(result.meals)
  }
  useEffect(() =>{
    fetchData(idMeal);
  },[idMeal])
  
  console.log('detail ',detailMeal)
  return (
    <div>
        {/* <p>{idMeal}</p> */}
        <h2>Detail Meal</h2>
        {
            detailMeal && detailMeal.length > 0 ? (
                <div className='div-detail' style={{ }}>
                    {
                        detailMeal.map(meal => (
                            <div to={`/detail/${meal.idMeal}`} style={{margin: '16px'}} key={meal.idMeal}>
                                <h3>{meal.strMeal}</h3>
                                

                                <img style={{width: '100px', height: '100px'}} src={meal.strMealThumb} alt={meal.strMeal} />
                                <p>{meal.strInstructions}</p>

                            </div>
                        ))
                    }
                </div>
            ) : (
                <p>Loading ...</p>
            )
        }
    </div>
  )
}

export default Detail