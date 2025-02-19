document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-container");

    //return true or false based on a regex

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9]+$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}}`
    }
    
    
    searchButton.addEventListener("click", function(){
        const username = usernameInput.ariaValueMax;
        console.log("Login username: ", username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })

})