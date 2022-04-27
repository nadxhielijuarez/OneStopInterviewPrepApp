import React, {useState} from 'react'
import ReviewList from '../components/ReviewList'
import { v4 as uuidv4 } from "uuid";
import VideoComp from '../components/VideoPlayer/VideoComp'
import FeedbackView from '../components/FeedbackView';

var companyName = <text>Amazon</text>;

const AmazonPrep = () => {
    const [reviews, setReviews] = useState([])
  return (
    <div class='company-page'>
        <div class='company-header'>
          <h1>Interview Preparation Resources For {companyName}</h1>
        </div>
        <div class='split'>
          <div class='company-left'>
            <div class='company-section'>
              <h1>Our Coding Problems</h1>
              <body>
                Go to our <a href="/coding">practice coding problems</a> and select the "Sort By {companyName}" option.
              </body>
            </div>
            <div class='company-section'>
              <h1>HackerRank Links</h1>
              <ul>
                
              </ul>
            </div>
          </div>
          <div class='company-right'>
            <div class='company-section'>
              <h1>LeetCode Problems</h1>
              <ul>
                <li><a href="https://leetcode.com/problem-list/top-microsoft-questions/">LeetCode's Overall List</a></li>
                <li><a href="https://leetcode.com/problems/two-sum">Two Sum</a></li>
                <li><a href="https://leetcode.com/problems/add-two-numbers">Add Two Numbers</a></li>
                <li><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters">Longest Substring Without Repeating Characters</a></li>
                <li><a href="https://leetcode.com/problems/regular-expression-matching">Regular Expression Matching</a></li>
              </ul>
            </div>
            <div class='company-section'>
              <h1>More Resources</h1>
              <ul>
                
              </ul>
            </div>
          </div>
        </div>
        <div class='company-section'>
          <h1>Youtube Playlist</h1>
          <VideoComp playListId = "PLi9RQVmJD2fZgRyOunLyt94uVbJL43pZ_"/>  
        </div>
        <div class="company-section">
          <h1>Interview Reviews For {companyName}</h1>
          <FeedbackView></FeedbackView>
        </div>
    </div>
  )
}

export default AmazonPrep