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
OR
call the below command in the root directory. <br><span style="color:red;">if there is a problem in installation in the blow commands, please install project one by one in the root of them.</span>

```diff

npm run install-multi
npm run install-single

---OR

npm run nuxt:install 
npm run astro:install 
npm run angular:install 
npm run react:install 
npm run svelte:install 
npm run next:install
```

<br><br>
### **Run Applications `(dev mode)`**
call the below command in the root directory (`nuxt port: 3000`)
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
<br>
<br>
### **`Problem Solution`**
#### **Scroll & Dialog(pop up)**
for those problems see `scroll` & `dialog` 
<br>
#### **Errors**
if the run has the below error
```diff
node:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
```
add below option. [stackoverflow](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)
```diff
---On Unix-like (Linux, macOS, Git bash, etc.):
export NODE_OPTIONS=--openssl-legacy-provider

---On Windows command prompt:
set NODE_OPTIONS=--openssl-legacy-provider

---On PowerShell:
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
