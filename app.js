const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const hbs = require('hbs')
const { mongoose } = require('./DB/DB_Manager');
const updateData = require('./DB/DataUpdate')
const ProyectsCtrl = require('./views/controllers/proyects_controller')
const SkillsCtrl = require('./views/controllers/skills_controller')
const ExperienceCtrl = require('./views/controllers/experience_controller')
const SocialCtrl = require('./views/controllers/social_controller')
require('./hbs/helpers.js');

app.use(express.static(__dirname + '/public')); //conecta al directorio publico
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.get('/', async(req, res) => {
    const proyects = await ProyectsCtrl.getProyects();
    const experiences = await ExperienceCtrl.getExperiences();
    const skills = await SkillsCtrl.getSkills();

    res.render('resume', {
        proyects_objects: proyects,
        skillsStr: skills,
        experiences_objects: experiences
    });
});

app.get('/social_accounts', async(req, res) => {
    const social_accounts = await SocialCtrl.getAccounts()
    res.render('social_accounts', {
        socials: social_accounts
    })
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en puerto ${port}`)
});