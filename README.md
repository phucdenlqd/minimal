------------DESCRIPRION PROJET MINIMAL E-COMMERCE--------------

### I.INTROCDUCTION

Ce projet s’agit une partie de la page e-commerce de design MINIMAL ECOMMERCE
https://www.behance.net/gallery/52461471/Minim-E-commerce-Website?tracking_source=search%257Clanding%2Bpage

3 éléments réalisés sont :

	- 2.0 homepage ( URL:/ )
	
	- 2.1 Popin ( dans footer )
	
	- 3.0 Liste des produits ( URL:/products)

### II.CODE ET ACHITECTURE

Le projet est réalisé en utilisant les techniques principales : ReactJS, SCSS, Bootstrap

Packages utilisés: 
	"node-sass": "^4.13.0",
    	"react": "^16.12.0",
    	"react-dom": "^16.12.0",
    	"react-router-dom": "^5.1.2",
    	"react-scripts": "3.2.0",
    	"react-slideshow-image": "^1.3.1"  

Il y a 2 pages principales :

	- Homepage se constitue par :
	
        + Menu de catégories
	
        + Shopping par type des produits
	
        + Listes des produits populaires
	
        + Listes des collections
	
        + Newsletter
	
	- Listes des produits (avec le triage)
	

Architecture :
    
Les fichiers de source sont organisés comme le schéma suivant :

    src 
    ├───Components
    │   ├───Collections
    │   ├───Footer
    │   ├───Header
    │   ├───Menu
    │   ├───Newsletter
    │   ├───Popin
    │   ├───Popular
    │   ├───Product
    │   └───ShopType
    ├───data
    ├───img
    │   ├───collections
    │   ├───contact
    │   ├───icon
    │   ├───menu
    │   ├───product
    │   └───shoptype
    └───Pages
        ├───Homepage
        └───ProductsList

data : La fichier qui définit les données pour les components ( produits, collections ). Les données sont définies de façon d’adapter les spécifications du projet
img : comprend les images (JPG et SVG) pour les components

Pages :  comprend les pages du projet

	- Homepage (page d'accueil)
	
	- Liste des products ( quand on clique sur bouton « Shop Now » dans homepage ). Il y a la fonctionnalité triage et affichage par multiples pages 

Components comprend les components utilisés. Chaque components est défini par fichiers .JS et .SCSS. Il y a 9 Components : 

	- Menu : Un slideshow présentant la liste de catégories, l'image de chaque catégorie, et sa description. Il y a bouton «Shop Now» pour aller à la page liste des produits
	
	- ShopType : Section shopping par type
	
	- Popular: Listes des produits populaires (les plus vendus) 
	
	- Collections : Listes des collections
	
	- Newsletter : Formulaire de newsletter
	
	- Header : Barre de navigation du site
	
	- Footer : Footer de la page
	
	- Popin : Modal need-help qui apparaît si nous cliquons sur ‘ Help ’ dans footer
	
	- Product :  Produit du site

### III. INSTALLATION

Pour exécuter l'application localement:

    - Cloner le projet: git clone https://github.com/phucdenlqd/minimal.git
    
    - cd minimal
    
    - npm install
    
    - npm start
    
    -> aller à localhost - http://localhost:3000/

Construit l'application pour la production dans le dossier `build`:
    -npm run build

--------Pour savoir plus (Documentation de Reactjs)---------

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
