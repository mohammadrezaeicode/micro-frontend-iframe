powershell -command "Remove-Item -Path dist -Force"
mkdir dist
powershell -command "Copy-Item -Path "nuxt-app/dist/*" -Destination "dist/" -Recurse -Force"

powershell -command "Copy-Item -Path "astro-app/dist/" -Destination "dist/astrojs" -Recurse -Force"

powershell -command "Copy-Item -Path "angular-app/dist/angular-app/" -Destination "dist/angularjs" -Recurse -Force"

powershell -command "Copy-Item -Path "react-app/build/" -Destination "dist/reactjs" -Recurse -Force"
powershell -command "Copy-Item -Path "svelte-app/build/" -Destination "dist/sveltejs" -Recurse -Force"

powershell -command "Copy-Item -Path "next-app/dist/" -Destination "dist/nextjs" -Recurse -Force"
