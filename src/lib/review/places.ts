export interface PlaceData {
  name: string;
  link: string;
  slug: string;
}

const Places: Record<string, PlaceData> = {
  "guest-cafe-bar": {
    name: "Guest Cafe Bar",
    link: "https://www.google.com/maps/search/?api=1&query=Guest+Cafe+Bar+Limassol+Cyprus&entry=ml&utm_campaign=ml-ardl&coh=230964",
    slug: "guest-cafe-bar"
  },
  "piedra-all-day-cafe-lounge-bar": {
    name: "Piedra All Day Cafe Lounge Bar",
    link: "https://www.google.com/maps/search/?api=1&query=Piedra+All+Day+Cafe+Lounge+Bar+Cyprus&entry=ml&utm_campaign=ml-ardl&coh=230964",
    slug: "piedra-all-day-cafe-lounge-bar"
  },
  "grafico-cafe": {
    name: "Grafico Cafe",
    link: "https://www.google.com/maps/search/?api=1&query=Grafico+Cafe+Cyprus&entry=ml&utm_campaign=ml-ardl&coh=230964",
    slug: "grafico-cafe"
  },
  "abrazo-sliema": {
    name: "Abrazo Sliema",
    link: "https://maps.google.com/?cid=8422765737464647141&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "abrazo-sliema"
  },
  "la-crema": {
    name: "La Crema Sliema",
    link: "https://maps.google.com/?cid=13111180600072303337&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "la-crema"
  },
  "skyline-cafe": {
    name: "Skyline Cafe Malta",
    link: "https://maps.google.com/?cid=8530836233211028512&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "skyline-cafe"
  },
  "chez-vous-3-0": {
    name: "Chez Vous 3.0",
    link: "https://maps.google.com/?cid=3622792889499587833&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "chez-vous-3-0"
  },
  "brillace-cafe": {
    name: "Brillace Cafe",
    link: "https://maps.google.com/?cid=7960769061037443967&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "brillace-cafe"
  },
  "il-forno-di-san-giuliano": {
    name: "Il Forno Di San Giuliano",
    link: "https://maps.google.com/?cid=5967370760874125677&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "il-forno-di-san-giuliano"
  },
  "mumenti-espresso-bar": {
    name: "Mumenti Espresso Bar",
    link: "https://maps.google.com/?cid=8408328661487138935&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "mumenti-espresso-bar"
  },
  "buonbon-cafe": {
    name: "Buonbon Café",
    link: "https://maps.google.com/?cid=7138049041363513764&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "buonbon-cafe"
  },
  "cafe-italiano": {
    name: "Cafe Italiano",
    link: "https://maps.google.com/?cid=227101658906191180&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "cafe-italiano"
  },
  "kikkas-table": {
    name: "Kikka's Table",
    link: "https://maps.google.com/?cid=3082269760696921906&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    slug: "kikkas-table"
  },
 "lot-61-coffee-roasters":{
name: "Lot 61 Coffee Roasters",
slug: "lot-61-coffee-roasters",
link:"https://maps.google.com/?cid=8970909318211684791&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"},
"noww-croissants-and-coffee":{
name: "NOWW Croissants and Coffee",
slug: "noww-croissants-and-coffee",
link:"https://maps.google.com/?cid=8634705874416350058&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"},
"langolo-cafe":{
name: "L'Angolo Cafè",
slug: "langolo-cafe",
link:"https://maps.google.com/?cid=13057713483490133346&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"},
"koko-experience":{
name: "Kokō experience",
slug: "koko-experience",
link:"https://maps.google.com/?cid=10101179960547715409&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"},
"dolce-sicilia-sliema":{
name: "Dolce Sicilia Sliema",
slug: "dolce-sicilia-sliema",
link:"https://maps.google.com/?cid=12304859664483749774&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",},
"sunday-in-scotland":{
name: "Sunday in Scotland",
slug: "sunday-in-scotland",
link:"https://maps.google.com/?cid=17342813583279143618&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",},
"5-beans":{
name:"5 Beans Valletta",
link:"https://maps.google.com/?cid=1306609776175281449&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"5-beans",
},
"emilia":{
name:"emilia",
link:"https://maps.google.com/?cid=16675482138450446212&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"emilia",
},
"afro-deli-and-coffee":{
name:"Afro Deli & Coffee",
link:"https://maps.google.com/?cid=1621808325336668935&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"afro-deli-and-coffee",
},
"cuore-di-caffe":{
name:"Cuore di caffe",
link:"https://maps.google.com/?cid=14192835793292340024&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"cuore-di-caffe",
},
"isabella-cafe":{
name:"Isabella Café",
link:"https://maps.google.com/?cid=9590551353811378608&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"isabella-cafe",
},
"my-kafe":{
name:"My Kafe",
link:"https://maps.google.com/?cid=12195027195353091806&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"my-kafe",
},
"nativos-coffee":{
name:"NATIVOS Coffee",
link:"https://maps.google.com/?cid=4869224531412362219&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"nativos-coffee",
},
"big-shot-cafe":{
name:"Big Shot Café",
link:"https://maps.google.com/?cid=6808759200938854404&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
slug:"big-shot-cafe",
},
"snug-cafe":{
name:"Snug Cafe Valletta",
link:"https://www.google.com/maps/place//data=!4m2!3m1!19sChIJJ1QTdABFDhMR-GiIEPBF7hE",
slug:"snug-cafe",
},
"spinola-cafe":{
name:"Spinola Café & Lounge",
link:"https://www.google.com/maps/place/Spinola+Caf%C3%A9+%26+Lounge/data=!4m2!3m1!1s0x130e45e30ccbb6ed:0xb60dac858a72acaf?sa=X&ved=1t:242&ictx=111",
slug:"spinola-cafe",
}
};

export function getPlace(slug: string): PlaceData | null {
  return Places[slug] || null;
}

export default Places;
