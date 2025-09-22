# ReactJSBegin
react js beginning 


# Tailwind Installation in vite projects 
1. npm install tailwindcss @tailwindcss/vite
   
2. Update vite.config

    /*
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'
    import react from '@vitejs/plugin-react'
    export default defineConfig({
    plugins: [
            react(),
        tailwindcss(),
    ],
    })
    */

3. Update the index.css with this 
    import @import "tailwindcss";

4. check tailwind 

  <h1 className='text-3xl bg-orange-500'>Currency Converter</h1>

