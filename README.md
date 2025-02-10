# Tasteology

This project is a technical challenge in which a design was implemented using VueJS. It is fully responsive and includes animations in its interactions.

Check it: [Tasteology](https://tasteology.netlify.app/)

## Tech stack

[Vue.js](https://vuejs.org/) as development framework   
[Bootstrap](https://getbootstrap.com/) as css framework   
[Pinia](https://pinia.vuejs.org/) for global state management  
[eslint](https://eslint.org/) as the project's code linter

## Reasoning
### Pinia usage
The copy had to be implemented as if it was populated from a CMS, that is why I used this approach, defining the copies in a global store as if they were being obtained from a remote source.

### Bootstrap usage
I used bootstrap for its simplicity on the grid system and also because it is easier to layout responsive designs with it. Also, its built-in components as the Modal, make development a lot faster.

### Design system
I grouped all the defined meassures in the Figma design and made a minimal design system with it in order to have global styles that could be used in all components


## Mobile first approach
Mobile first is a design and development approach that prioritizes mobile interfaces before larger screens, it ensures essential features and functionalities to be optimized for mobile devices which are used very often by users.  
Bootstrap is designed to implement apps with this approach.

## App structure
```
└── 📁src
    └── 📁assets
        └── 📁img
            └── Green Spoon.png
            └── Left.png
            └── Red Spoon.png
            └── Right Bottom.png
            └── Right Top.png
            └── White Spoon.png
    └── 📁components
        └── Card.vue
        └── ImgModal.vue
        └── Title.vue
    └── 📁stores
        └── data.js
    └── App.vue
    └── main.css
    └── main.js
    └── utils.js
```