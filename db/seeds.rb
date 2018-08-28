puts 'cleaning database...'
Event.destroy_all


event_one = Event.new(title: "Edmond", description: "La nouvelle création d'Alexis Michalik Après Le Porteur d’Histoire et Le Cercle des Illusionnistes , l’auteur – metteur en scène aux trois Molières, revient pour raconter la triomphale et mythique première de Cyrano de Bergerac. Edmond , avec ses douze comédiens sur scène, sera « un vrai théâtre de troupe » rappelant les grandes épopées théâtrales du XIXe siècle.", category: "Théâtre", address: "38 rue de Montpensier 75001 Paris", date:"07/09/2018", time: "20:00", price: 55, venue: "Théâtre du Palais-Royal")
event_one.remote_photo_url = "https://www.fnacspectacles.com/static/0/visuel/600/365/EDMOND_3655212551287293891.jpg?1499343704000"
event_one.save

event_two = Event.new(title: "Fabrice Luchini", description: "Là aussi, encore une fois, la puissance hallucinante de la langue française, sa richesse éblouissante. La joie de dire du Charles Péguy, de poursuivre avec Sacha Guitry, Emile Zola, Marcel Pagnol, Jean Cau, etc. Tout cela dans un exercice précis, la lecture rigoureuse, sans obligation de spectaculaire, sur un sujet très investi, qui résonne en chacun de nous, et que les écrivains éclairent avec leur intuition stylistique.", category: "Théâtre", address: "18 Boulevard Saint Martin 75010 Paris", date:"07/09/2018", time: "20:00", price: 70, venue: "Théâtre de la Porte Saint Martin")
event_two.remote_photo_url = "https://www.fnacspectacles.com/static/0/visuel/600/385/LUCHINI---ECRIVAINS-ARGENT_3857179694716863996.jpg?1522933983000"
event_two.save

event_three = Event.new(title: "J'aime ce que vous dites", description: "Comment une fausse manoeuvre avec un téléphone portable vous fait découvrir ce que vos meilleurs amis pensent de vous en réalité... Et ceci, juste avant leur arrivée pour un week-end, finalement pas comme les autres, dans votre maison de campagne.", category: "Théâtre", address: "41 rue du Temple 75004 Paris", date: '2018-09-07', time: "20:00", price: 28, venue: "Café de la Gare")
event_three.remote_photo_url = "https://www.fnacspectacles.com/static/0/visuel/600/358/J-AIME-BEAUCOUP-CE-QUE-VOUS-FA_3585950955276872510.jpg?1491202391000"
event_three.save

event_four = Event.new(title: "POLO & PAN", description: "Polo & Pan voit le jour en 2012 suite à la rencontre astrale entre Polocorp et Peter Pan. Le premier puise son inspiration dans ses voyages initiatiques (EP roudani 434 ) ainsi que dans la transformation d’un espace industriel en lieu de création éclectique (Mad Agency). Le second s’inspire des perles musicales qu’il découvre au détour de ses recherches quotidiennes, naviguant entre musiques traditionnelles du début de siècle, électronique de l’an 2015 et rock psychédéliques népalais des 70’s. Une demie décennie après leur rencontre derrière les platines du Baron, Polo & Pan, dans la vie Alexandre Grynszpan et Paul Armand-Delille, parachutent enfin leur premier long format Caravelle prévu pour le 19 mai 2017. Aboutissement de leurs échappées à travers le monde, Caravelle dessine aujourd’hui le parcours de deux passionnés de musique qui, comme bien d’autres auparavant, ont souhaité concilier l’hédonisme des musiques de danse à la saveur d’une variété de qualité, solaire et intemporelle. En y apposant leur française touche mélodique, une singularité douce et juvénile dans l’écriture de leurs textes, et  d’audacieux motifs de percussions, Polo & Pan ont réussi à embarquer une véritable peuplade à bord de leur vaisseau. Jeunesse hexagonale avide de sensations nocturnes, citoyens éclairés du monde moderne, amis mexicains ou turques, artistes proches comme Jacques ou les Papooz combinés à leurs doubles féminins Marguerite et Victoria, ainés nostalgiques des ondes curieuses, tous ont un jour ou l’autre adopté Canopée, Plage Isolée ou Dorothy", category: "Concert", address: "L'OLYMPIA , 28, BD DES CAPUCINES 75009 PARIS 09", date:"07/09/2018", time: "20:00", price: 28, venue: "OLYMPIA")
event_four.remote_photo_url = "https://www.fnacspectacles.com/static/0/visuel/600/393/FEDER_3935399244041550362.jpg?1532078219000"
event_four.save

event_five = Event.new(title: "PATRICK BRUEL TOURNEE 2019", description: "", category: "Concert", address: "PALAIS DES SPORTS, PORTE DE VERSAILLES, 75015 PARIS 15", date:"28/08/2018", time: "20:30", price: 55, venue: "PALAIS DES SPORTS")
event_five.remote_photo_url = "https://www.fnacspectacles.com/static/0/visuel/310/353/PATRICK-BRUEL_3532646447168821480.jpg?1529483988000"
event_five.save

puts "events created"
