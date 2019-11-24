------------DESCRIPRION PROJET MINIMAL E-COMMERCE--------------
I.INTROCDUCTION
Ce projet s’agit un partie de la page e-commerce de design MINIMAL ECOMMERCE
https://www.behance.net/gallery/52461471/Minim-E-commerce-Website?tracking_source=search%257Clanding%2Bpage

3 éléments réalises sont : 
	2.0 homepage ( http://localhost:3000/ )
	2.1 Popin ( dans footer )
	3.0 Liste des produits ( http://localhost:3000/products)

II.CODE ET ACHITECTURE
Le projet est réalisé en utilisant les techniques principals : ReactJS, SCSS 

Il y a 2 pages principal Hompage et Liste de Produits :
	-Homepage se constitue par :
        +Menu de catégories
        +Type of produits
        +Listes de produits populaires
        +Listes de collections
        +Newsletter
	-Listes de produits. Listes de produits avec le triage

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
img : comprend les images pour les components

Pages :  comprend les pages du projet
	-Homepage ( affiché comme hompage) 
	-Liste de products ( quand on clique sur bouton « Shop Now » dans homepage ). Il y a la fonctionnalité triage et affichage par multiples pages 

Components comprend les components utilisés. Chaque components est défini par fichiers .JS et .SCSS. Il y a 9 Components : 
	-Menu : Un slideshow présentant la liste de catégories, images de chaque catégorie, et 	son description. Il y a bouton «Shop Now» pour aller à la page listes products
	-ShopType : Section shopping par type
	-Popular: Listes de produits populaires (les plus vendus) 
	-Collections : Listes de collections
	-Newsletter : Formulaire de newsletter
	-Header : Navigation bar de la site
	-Footer : Footer de la page
	-Popin : Modal need-help qui apparaît si nous cliquons sur ‘Help ’ dans footer
	-Product :  Un produit

III. DÉPLOIEMENT




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

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
