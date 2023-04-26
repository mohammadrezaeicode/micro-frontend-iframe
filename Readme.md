## Micro frontend with iframe 
"Microfrontend is a front-end web development pattern in which a single application may be built from disparate builds.[1] It is analogous to a microservices approach but for client-side single-page applications written in JavaScript.[2] It is a solution to de-composition and routing for multiple front-end applications"<sub>[wikipedia](https://en.wikipedia.org/wiki/Microfrontend)</sub>
<br>

### **Intrduction**
We can create a micro frontend approach with `iframe`. This repository has six frontend frameworks (`angular, svelte, next, nuxt, react, astro`) and one simple `HTML` page. `nuxt-app` is the base layout that other framework use as a page. This is the easiest way to create a micro frontend architect.

<br>

### **Communication**
We can use `postMessage`, `CustomEvent` for communication between frameworks. Also is possible to use `localStorage`, `sessionStorage` and etc.

<br>

### **Installation**
in window run `install.bat` and for Linux and Mac use `install.bash`
<br><br>

### **Run Applications `(dev mode)`**
call the below command in the root directory
```bash
npm run dev
```
<br>

### **Build Application**
call the below command in the root directory
```bash
npm run build
```
<br>

### **Run Applications `(prod mode)`**
call the below commands in the root directory
```bash
npm run build
npm start
```
<br>

### **Other Approch**
`Module federation` in `Webpack` is one of the best ways to create a micro frontend app. but `iframe` can be used for most situations.
### **Versions**
Project version:1.0.0
Node version:18.14.2
npm version:9.5.0