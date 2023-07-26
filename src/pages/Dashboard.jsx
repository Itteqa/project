import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Dashboard from '../css/Dashboard.css'
import groupImg from '../images/group.jpeg'
import girlImg from '../images/girl.webp'
import axios from 'axios';

function Home() {
  // array that holds the list of goals
  const [Goal, setGoal] = useState([]);
  // stores the value entered by the user
  const [goalInput, setgoalInput] = useState("");
  const goalID = 1;

  const fetchGoals = async () => {
    try {
      const response = axios.get('/goals');
      setGoal(response.data);
    } catch (error) {
      console.error('error fetching goals: ', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newGoal = {goalID, description: goalInput};
    try {
      await axios.post('/goals', newGoal);
      setgoalInput("") // reset goal box
    } catch(error) {
      console.error("error creating goal: ", error);
    }
    };

    useEffect(() => {
      fetchGoals();
    }, []);


  const navigate = useNavigate();

  const navigateToCalorieCalculator = () => {
    navigate("/caloriecalculator");
  };

  const navigateToWeightTracker = () => {
    navigate("/weighttracker");
  };

  const navigateToMealPlanner = () => {
    navigate("/mealplanner");
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (

    <>


    <div className='DashboardContainer'>
      <div className='goal-box'>
        <form className='form' onSubmit={handleSubmit}>
        <input className='txtContainer'
        type='text'
        id='goal-input'
        placeholder='Add a goal...'
        value={goalInput}
        onChange={event => setgoalInput(event.target.value)}
        />
        <button className='txtButton'>Add</button>
        </form>
      <img className='girlImg' src= {girlImg} alt=''/>
      {/* <h2>Welcome to Unitrition, click the button below to check your account profile</h2> */}
      <div className='box-1'>
      <img className='groupImg' src= {groupImg} alt=''/>
      <button onClick={navigateToWeightTracker} className='weightbutton'>
            Track your weight 
          </button>
          <button onClick={navigateToMealPlanner} className='mealplannerbutton'>
            Choose your next meal
          </button>
          <button onClick={navigateToCalorieCalculator} className='caloriebutton'>
            Calculate your calories
          </button>
      </div>
        <div className='box-2'>
          <div className='water-intake-card'>
          <button onClick={navigateToProfile} className='accountButton'>
             Your account profile
          </button>
          <div className='sleep-card'>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default Home


