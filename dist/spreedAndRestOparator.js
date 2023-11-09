"use strict";
//spreed oparator 
const teamOne = ['shakil', 'rakib', 'montu'];
const teamTwo = ['arif', 'shihab', 'lotif'];
teamOne.push(...teamTwo);
//rest oparator  
const allTeamMember = (...teamMembers) => {
    teamMembers.forEach((member) => console.log(member));
};
allTeamMember('shakil', 'rakib', 'malik');
