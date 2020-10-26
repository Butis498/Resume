const Experience = require('../../DB/models/experience')
const experience_controller = {}

experience_controller.insert_experience = async(employer, description, startDate,endDate,place,company) =>{
    newExperience = await new Experience({
        "employer": employer,
        'description': description,
        'startDate': startDate,
        'endDate': endDate,
        'place': place,
        'company':company
    })

    newExperience.save(function (err, experience) {
        if (err) return console.error(err);
        console.log(experience.company + " saved to collection.");
    });
}

experience_controller.getExperiences = async() => {
    const experiences = await Experience.find({});
    return experiences;
}


module.exports = experience_controller
