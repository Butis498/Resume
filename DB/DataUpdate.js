const mongoose = require('mongoose');
const ProyectsCtrl = require('../views/controllers/proyects_controller')
const SkillsCtrl = require('../views/controllers/skills_controller')
const ExperienceCtrl = require('../views/controllers/experience_controller')
const SocialCtrl = require('../views/controllers/social_controller')

insertFirst = async() => {

    ExperienceCtrl.insert_experience('Alfonso Villalba',
        'A cyber security company where I was a full time software engineer developing big company projects for the AI department, developing and improving projects efficiency by 30% implementing  multiprocessing  and multi threading, in addition I improved NLP document processing by more than 400 % implementing boyer moore horspool algorithm and data structures in C++',
        'Jun, 2020', 'Aug, 2020', 'Quito', 'Kriptos'
    );

    SkillsCtrl.insertSkill('Linux', 'Advance')
    SkillsCtrl.insertSkill('C++', 'Advance')
    SkillsCtrl.insertSkill('C', 'Experienced')
    SkillsCtrl.insertSkill('Python', 'Advance')
    SkillsCtrl.insertSkill('Git', 'Experienced')
    SkillsCtrl.insertSkill('MachineLearning', 'Beginer')
    SkillsCtrl.insertSkill('JavaScript', 'Beginer')

    ProyectsCtrl.insertProyect('Tec Nutrición',
        'Android app implemented for a nutritionist design for keeping a control over your diet, it was build in java along with an SQLite database, the front end was developed with XML, you can  currently find it on the Google Play store.',
        'https://github.com/Butis498/TecNutricion')

    ProyectsCtrl.insertProyect('Backup live service',
        'This is a C program which was developed with the purpose of getting a live backup of certain folder in a Linux computer, it uses daemons and parallel computing for monitoring a live folder sending the data to a local server, the project is open source and it is located on my GitHub account.',
        'https://github.com/Butis498/Client-Server_BackUp')

    ProyectsCtrl.insertProyect('Space Invaders',
        'A small web application in TypeScript simulating the old classic game space invaders , implemented with animation sounds and a lot of interface interaction, the goal of this project was mainly to learn how does game engines works and how to implement it on javascript and nodejs. ',
        'https://github.com/Butis498/SpaceInvaders')
}

updateData = async() => {


}
module.exports = updateData