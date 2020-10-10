

Libremente inspiré du <a
href="http://www.pronouns.failedslacker.com/">Pronoun Dressing
Room</a>, adapté puisque le français genre beaucoup plus les mots que
l'anglais.

# Contribution

Vous pouvez contribuez d'au moins trois façons.

## Proposez des nouvelles façon de genrer un texte

Disons que vous voulez contribuez à l'exemple "Les misérables". Dans ce cas, ouvrez le fichiez `miserable.json`, copiez une entrée, telle que
```JSON
"masculin": {
  "un_petit_garçon":"un petit garçon",
  "du_gamin":"du gamin",
  "ébauché":"ébauché",
  "Cet_enfant":"Cet enfant",
  "un_garçon":"un garçon",
  "bruyant":"bruyant",
  "éveillé":"éveillé",
  "goguenard":"goguenard",
  "Il":"Il",
  "il":"il"},
```

Remplacez "masculin" par le nom que vous souhaitez donner à ces accords. Ensuite, remplacez chaque morceau de texte après les deux points ":". Par exemple, "un petit garçon" par "une petite fille".

## Proposez un nouveau texte

Proposez un nouveau texte est légèrement plus complexe. La bonne nouvelle c'est que vous pouvez vous inspirez des textes qui existent déjà. Disons que vous voulez proposez une trabduction nommée "Mon excellente nouvelle". Dans `texts.json`, rajoutez une ligne
```json
"nom_court" : "Titre",
```,
par exexmple
```json
"miserable" : "Les misérables",
```.

Créez un fichier `nom_court.html`, mettez votre texte dedans. Choisissez les mots et expressions qui doivent être adaptés, tels que les pronoms, les adjectifs, les prénoms, surnoms... Pour chacun de ces morceaux de texte, encadré le dans une balise span, par exemple:
```html
<span id="du_gamin">du gamin</span>
```

Ensuite, chez un fichier `mon_excellente_nouvelle.json`, et créer un json selon le schema suivant:
```json
{
  "default": DEFAULT_VALUE,
  "genders": {
    "GENRE_N" : OBJET_DU_GENRE_1,
    ...,
    "GENRE_N" : OBJET_DU_GENRE_N

  }
}
```
où :
* `GENRE_I` est un nome d'un accord (i.e. "masculin", "féminin", "point médian", "neutre", "alternant"...)
* `DEFAULT_VALUE` est soit le nom d'un des genres listés dessous, sois un objet
* les objets sont de la forme suivante:
```json
{
  TEXTE_ORIGINAL_1: REMPLACEMENT_1,
  ...,
  TEXTE_ORIGINAL_M: REMPLACEMENT_M
  
}
```
Par example, `"du_gamin": "de la gamine"` pour indiquer qu'au féminin, le texte que vous avez encadré dans "du_gamin" sera remplacé par "de la gamine".

## Nouvelles fonctionnalités et bug.

Quand ce projet sera sur github, vous pourrez soumettre des propositions de fonctionnalitées, signaler des bugs, et même les corriger si vous savez coder.