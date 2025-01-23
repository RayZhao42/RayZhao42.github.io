const app = Vue.createApp({
    data() {
        return {
            Home: true,
            showProjects: false,
            showIFOTD: false,
            showBlog: false,
        }
    },
    methods: {
        goHome() {
            this.Home = true
            this.showProjects = false
            this.showIFOTD = false
            this.showBlog = false
        },
        Projects() {
            this.Home = false
            this.showProjects = true
            this.showIFOTD = false
            this.showBlog = false
        },
        IFOTD() {
            this.Home = false
            this.showProjects = false
            this.showIFOTD = true
            this.showBlog = false
        },
        Blog() {
            this.Home = false
            this.showProjects = false
            this.showIFOTD = false
            this.showBlog = true
        }
    }
})

app.mount('#app')