var fs = require("fs");
var path = require("path");
if (!fs.existsSync(path.join(__dirname, "dist"))) {
  fs.mkdirSync(path.join(__dirname, "dist"));
}
fs.rmSync(path.join(__dirname, "dist"), {
  recursive: true,
});
fs.cpSync(
  path.join(__dirname, "nuxt-app", "dist"),
  path.join(__dirname, "dist"),
  {
    recursive: true,
  }
);
let file = fs.readFileSync(
  path.join(__dirname, "astro-app", "dist", "index.html"),
  function (e, d) {
    console.log(e, d);
  }
);
// console.log((file.toString().replaceAll('/_astro','_astro')))
fs.writeFileSync(
  path.join(__dirname, "astro-app", "dist", "index.html"),
  file.toString().replaceAll("/_astro", "_astro")
);
fs.cpSync(
  path.join(__dirname, "astro-app", "dist"),
  path.join(__dirname, "dist", "astrojs"),
  {
    recursive: true,
  }
);
fs.cpSync(
  path.join(__dirname, "angular-app", "dist", "angular-app"),
  path.join(__dirname, "dist", "angularjs"),
  {
    recursive: true,
  }
);
fs.cpSync(
  path.join(__dirname, "react-app", "build"),
  path.join(__dirname, "dist", "reactjs"),
  {
    recursive: true,
  }
);
fs.cpSync(
  path.join(__dirname, "svelte-app", "build"),
  path.join(__dirname, "dist", "sveltejs"),
  {
    recursive: true,
  }
);
fs.cpSync(
  path.join(__dirname, "next-app", "dist"),
  path.join(__dirname, "dist", "nextjs"),
  {
    recursive: true,
  }
);
// powershell -command "Copy-Item -Path "next-app/dist/" -Destination "dist/nextjs" -Recurse -Force"
// fs.cpSync(m, path.join(destinationpath, element), {
//   recursive: true,
// });
