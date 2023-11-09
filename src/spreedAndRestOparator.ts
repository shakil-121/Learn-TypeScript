//spreed oparator 

const teamOne:string[]=['shakil','rakib','montu'];

const teamTwo:string[]=['arif','shihab','lotif']; 

teamOne.push(...teamTwo) 

//rest oparator  
const allTeamMember=(...teamMembers:string[])=>{
  teamMembers.forEach((member:string)=>console.log(member))
} 
allTeamMember('shakil','rakib','malik')