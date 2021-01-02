const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
   // inserir dados na tabela
   await saveOrphanage(db, {
      lat: "-27.222633",
      lng: "-49.6555874",
      name: "Lar dos meninos",
      about: "Assistência a crianças vulneráveis.",
      whatsapp: "76572852",
      images: [
         "https://images.unsplash.com/photo-1605291481517-504965735f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
         
         "https://images.unsplash.com/photo-1603138461420-e24168721842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
      ].toString(),
      instructions: "Traga muito amor e paciência para dar.",
      opening_hours: "Horário de visitas Das 18h até 8h",
      open_on_weekends: "0"
   })

   // consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

   // consultar somente 1 orfanato, pelo ID
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
   console.log(orphanage)

   // apagar um dado da tabela
   //await db.run('DELETE FROM orphanages WHERE id = "4"')
})
