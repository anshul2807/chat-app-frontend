import React,{useEffect} from 'react'
import './Feedback.css'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';

function Feedback() {
    useEffect(() => {
        document.title = "feedback"
      }, [])
    return (
        <div className="feed">
            <h1>Your Feedback</h1>
            <div className="feed__first">
            <label>What is your opinion of this page?*</label>
            <ul>
                <li><EmojiEmotionsOutlinedIcon fontSize="large" /></li>
                <li><SentimentSatisfiedOutlinedIcon fontSize="large"/></li>
                <li><SentimentDissatisfiedOutlinedIcon fontSize="large"/></li>
                <li><SentimentVeryDissatisfiedOutlinedIcon fontSize="large"/></li>
            </ul>
            </div>
            <div className="feed__second">
            <label>Please select a subject:</label>
            <ul>
                <li>Bug</li>
                <li>Suggestion</li>
                <li>Other</li>
            </ul>
            </div>
            <div className="feed__third">
            <label>Would you like to add a comment?</label>
            <textarea ></textarea>
            </div>
            <button>Send</button>
        </div>
    )
}

export default Feedback
