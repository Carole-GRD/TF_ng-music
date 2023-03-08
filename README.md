## Créer le projet
- ng new nom-du-projet (choisir avc routing et scss)

## Lancerle serveur
- ng serve  (localhost:4200)
- ng serve --open (pour que le projet se lance direct dans notre navigateur favoris)
- ng s --o (la version flemmard)

## Pour créer un composant 
- ng generate component eventuel-chemin/nom-du-component
- ng g c eventuel-chemin/nom-du-component (la version flemme)

## Pour créer un module
- ng generate module nom-du-module
- ng g m nom-du-module
- ng g m nom-du-module --routing (ajoute un routing au module)
- ng g c nom-du-composant -m nom-du-module (ajoute un composant en plus du module, attention pas de routing)

## Pour créer un service
- ng g s nom-du-service/nom-du service   
- ng g s shared/services/nom-du-service/nom-du service  (si dons dossier 'shared' et sous-dossier 'services')
- ng g s nom-du-service   (on n'aura pas de dossier avec le nom du service) 

## Pour créer une interface
- ng generate interface genre
- ng g i genre

## Pour créer un interceptor
-ng g interceptor