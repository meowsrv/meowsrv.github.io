/**
 * Vitepress configuration
 * @author Prk
 * 
 * https://vitepress.dev/reference/site-config
 */

import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Meow server',
    description: 'The server operation and maintenance tool with a panel interface.',

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' }
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'x', link: 'https://x.com/meowsrv' },
            { icon: 'github', link: 'https://github.com/meowsrv' }
        ]
    }
})
