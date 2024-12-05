use ecommerceDB

/*ques1 */


db.createCollection('clients')
db.createCollection('clients')
db.createCollection('commandes')

/*ques2 */

/*a*/

db.produits.insertMany([
    {Nom : "Smartphone XYZ", Catégorie : "Électronique", Prix : 599.99, Stock : 10 },
    {Nom : "Chaussures de sport", Catégorie : "Mode", Prix : 75.00, Stock : 30},
    {Nom : "Laptop ABC", Catégorie : "Électronique", Prix : 899.99, Stock : 5 },
    {Nom : "Livre de recettes", Catégorie : "Livres", Prix : 20.00, Stock : 50 },
    {Nom : "Casque audio", Catégorie : "Électronique", Prix : 49.99, Stock : 25 }])


/*b*/

db.clients.insertMany([
    {Nom: "Ahmed Ben Saïd", Email: "ahmed.ben.said@mail.com", Adresse: "10 Rue Al Madina, Casablanca, Maroc", Téléphone: "+212600123456"},
    {Nom: "Fatima El Khalil", Email: "fatima.el.khalil@mail.com", Adresse: "25 Avenue des Palmiers, Rabat, Maroc", Téléphone: "+212600987654"},
    {Nom: "Noura Bakkar", Email: "noura.bakkar@mail.com", Adresse: "22 Rue des Palmiers, Tunis, Tunisie", Téléphone: "+216983456789"},
    {Nom: "Aisha Darwish", Email: "aisha.darwish@mail.com", Adresse: "35 Rue Al Kindi, Damas, Syrie", Téléphone: "+963991234567"},
    {Nom: "Hassan Al-Haddad", Email: "hassan.haddad@mail.com", Adresse: "12 Rue Al Mutanabi, Bagdad, Irak", Téléphone: "+964781223344"}
])

/*c*/

db.commandes.insertMany([
    {
        Client: "Fatima El Khalil",
        Produits: [
            {Nom: "Smartphone XYZ", Quantité: 1, Prix: 599.99},
            {Nom: "Livre de recettes", Quantité: 2, Prix: 20.00}
        ],
        Date_commande: "2024-11-01",
        Statut: "livrée",
        Montant_total: 639.99
    },
    {
        Client: "Hassan Al-Haddad",
        Produits: [
            {Nom: "Laptop ABC", Quantité: 1, Prix: 899.99},
            {Nom: "Casque audio", Quantité: 1, Prix: 49.99}
        ],
        Date_commande: "2024-11-03",
        Statut: "en cours",
        Montant_total: 949.98
    }
])


/*3*/

db.produits.find({})

/*4*/

db.clients.find({ Adresse: { $regex: "Paris", $options: "i" } })


/*5*/

db.commandes.find({ Client: "Alice Dupont" })
db.commandes.find({ Client: "Fatima El Khalil" })

/*6*/

db.commandes.find({Statut :"livrée"})

/*7*/

db.produits.updateOne(
    { Nom: "Smartphone XYZ" }, 
    { $inc: { Stock: 10 } }     
)


/*8*/

db.clients.insertOne({
    Nom: "Jean Martin",
    Email: "jean.martin@mail.com",
    Adresse: "15 Rue de Paris, Paris, France",
    Téléphone: "+33612345678"
})

db.commandes.insertOne({
    Client: "Jean Martin",
    Produits: [
        { Nom: "Chaussures de sport", Quantité: 1, Prix: 75.00 }
    ],
    Date_commande: "2024-11-13",
    Statut: "en cours",
    Montant_total: 75.00
})

db.commandes.updateOne(
    { Client: "Jean Martin", Statut: "en cours" },
    { $set: { Statut: "expédiée" } }
)


/*9*/

db.Produits.deleteOne({ Stock: 0 })

/*10*/
db.commandes.deleteOne({ Statut: "annulée" })

/*11*/

db.produits.find({
    Catégorie: "Électronique",
    Prix: { $lt: 100 }
})

/*12*/

db.commandes.aggregate([
    { $group: { _id: "$Client", total_commandes: { $sum: 1 } } }
])

/*13*/

db.produits.find().sort({ Prix: -1 }).limit(5)


/*ex2*/

/*ques1*/

db.createUser({
  user: "admin",
  pwd: "Admin123",
  roles: [{ role: "dbAdmin", db: "ecommerceDB" }]
})

db.createUser({
  user: "utilisateur",
  pwd: "Utilisateur123",
  roles: [{ role: "userAdmin", db: "ecommerceDB" }]
})

db.createUser({
  user: "visiteur",
  pwd: "Visiteur123",
  roles: [{ role: "read", db: "ecommerceDB" }]
})


/*ques2*/

db.auth("visiteur", "Visiteur123")



/*ques3*/

db.dropUser("admin")
db.dropUser("utilisateur")
db.dropUser("visiteur")





db.empl.updateMany( 
    { ville: 'tanger' }, 
    { $rename: { 'offinfo': 'service_details', 'emale': 'email' } } );
