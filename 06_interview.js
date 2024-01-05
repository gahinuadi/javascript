function interviewEligibility (gradeScore,hscScore,sscScore,candidateName){
    if (gradeScore>=70||hscScore>=80||sscScore>90) {
        console.log(`->congrates ${candidateName} you are eligible for TCS interview.`);
        
    } else {
        console.log(`->sorry ${candidateName} unfortunately you are not eligible for TCS interview.`);
        
    }
        
    
}
interviewEligibility(80,86,90,"Gahininath");
interviewEligibility(70,65,55,"Kiran");
interviewEligibility(60,79,88,"Anurag");
