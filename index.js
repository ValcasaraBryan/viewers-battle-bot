// const tmi = require('tmi.js');
// const fs = require('fs');
// const CONF = require('..\\VAR');
import { ID_TWITCH, SECRET_TWITCH } from "./VAR_2.js"

console.log("CONF", ID_TWITCH, SECRET_TWITCH)

// const opts = {
//     options: { debug: true },
//     connection: {
//         reconnect: true,
//         secure: true
//     },
//     identity: {
//         username: 'KaizehBot',
//         password: "ton token oauth"
//     },
//     channels: [
//         'kaiizeh'
//     ]
// };
// const client = new tmi.client(opts);

// //Constante de commande
// const DISCORD = "!discord"
// const PLAYLIST_US = "!playlist us"
// const SPOTIFY = "!spotify"
// const HELP = "!help"
// const SERVEUR = "!serveur"
// const MODPACK = "!modpack"


// client.on('message', onMessageHandler);
// client.on('connected', onConnectedHandler);

// // Connect to Twitch:
// client.connect();


// function onMessageHandler (channel, tags, msg, self) {
//     if (self) { return; } // Ignore messages from the bot
//     const commandName = msg.trim();
//     switch (commandName){
//         case HELP:{
//             client.say(channel, `Voici les commandes du bot -> !discord : Pour obtenir le discord / !modpack : Pour avoir accès au modpack / !spotify : pour avoir accès a mes playlists ;)`);
//             break;
//         }

//         case DISCORD:{
//             client.say(channel, `Rejoins nous sur le discord : https://discord.gg/RhzPaqWWaA`);
//             break;
//         }

//         case PLAYLIST_US:{
//             client.say(channel, `Voici ma playlist de Rap US : https://open.spotify.com/playlist/5KXlSqaNcd8v2NWblFQ2n5?si=efd2070fc3f949ed`);
//             break;
//         }

//         case SPOTIFY:{
//             client.say(channel, `Retrouve tout mes styles musicaux sur mon profil spotify : https://open.spotify.com/user/316iskchfvh3nvpwbmjxy5gawb4y?si=1b8ca12f70ea4231`);
//             break;
//         }

//         // case SERVEUR:{
//         //     client.say(channel, `Rejoins nous sur le serveur non cracké en 1.12.2 : 146.59.136.186:25573`);
//         //     break;
//         // }
//         case MODPACK:{
//             client.say(channel, `Pour télécharger les mods ce le lien suivant : https://drive.google.com/file/d/1Nit33iKYSl3Rq-BuKH7Z1I8p0D_M1vKg/view?usp=sharing`);
//             break;
//         }

//         // default:{
//         //     console.log(isIncoming(tags.username))
//         //     if(isIncoming(tags.username) === true){
//         //         client.say(target, 'Bienvenue à toi ' + tags.username + ' ! Hésite pas à follow si ce n\'est pas déjà fait ;)')
//         //         addIncomingViewer(tags.username)
//         //     }
//         //     break;
//         // }
//     }
// }


//     // Called every time the bot connects to Twitch chat
// function onConnectedHandler (addr, port) {
//     console.log(`* Connected to ${addr}:${port}`);
// }
// //
// // function isIncoming(username){
// //     var incoming = true
// //     fs.readFile('viewers.txt', 'utf8', function(err, data) {
// //         const viewers = data.split(';')
// //         console.log(viewers)
// //         viewers.forEach(function(viewer){
// //             if(viewer === username){
// //                 incoming = false;
// //                 console.log('dans la boucle : ' +incoming)
// //                 return false
// //             }
// //         })
// //     });
// //     console.log('resultat fonction : ' + incoming)
// //     return incoming
// // }
// //
// // function addIncomingViewer(username){
// //     fs.appendFile('viewers.txt', username + ';', function (err) {
// //         if (err) throw err;
// //         console.log('Et hop un nouveau viewer :)');
// //     });
// // }