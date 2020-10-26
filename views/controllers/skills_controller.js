const Skill = require('../../DB/models/skills')
const skills_controller = {}

skills_controller.insertSkill = async(skill,level) => {

    const newSkill = await new Skill({
        'skill':skill,
        'level':level
    })

    newSkill.save(function(err,skill){
        if (err) return console.error(err)
        console.log(skill.skill + " saved to collection.")
    })
}


skills_controller.getSkills = async() =>{
    const skills = await Skill.find({});
    var skills_string = ""
    skills.forEach(element => {
        skills_string = skills_string.concat(element.skill)
        skills_string = skills_string.concat(', ')
    });
    skills_string =  skills_string.substring(0, skills_string.length - 2);
    return skills_string
}

module.exports = skills_controller;

