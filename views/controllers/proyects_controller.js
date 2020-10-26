const Proyect = require('../../DB/models/proyects')
const ProyectCtrl = {}

ProyectCtrl.getProyects = async() => {
    const filter = {};
    const proyects = await Proyect.find(filter)
    return proyects;
}


ProyectCtrl.insertProyect = async(name, description, url) => {

    newProyect = await new Proyect({ "Name": name, "description": description, 'url': url });
    newProyect.save(function(err, proyect) {
        if (err) return console.error(err);
        console.log(proyect.Name + " saved to collection.");
    });
}

module.exports = ProyectCtrl;