# React Js 
# parcel 
- https://parceljs.org/
- It created dev build for us(npx parcel source.html)
- It creates local server 
- Automatically refreshing the page. It does HMR(Hot Module Replacement)
- It uses File Watching Algorithm - written in C++ which keeps track of any file file changes and reflects it directly on our development server
- It uses caching for Faster builds
- It also does image optimization for our project
- It compresses and bundles all the files into one file
- It does code splitting for us
- It does Consistent Hashing
- It does Differential bundling to support older browsers
- It gives better Error Handling suggestions
- It uses Tree shaking Algorithm to remove unused code for us
- It creates different builds for dev and production(npx parcel build source.html)

# App design 
Project Planning(Food Ordering App)

 * Header
 *  - Logo
 *  - NavItems
 * Body
 *  - SearchBar
 *  - Restaurant Container
 *    - Restaurant Card component
 *      - Name
 *      - Image, star rating, cuisines, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 *  - Address
 
# React Hooks
- It's a normal JS utility function
  useState() - It gives super powerful state variables
  useEffect() - 