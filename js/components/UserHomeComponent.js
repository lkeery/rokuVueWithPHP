export default {
    props: ['currentuser'],

    template: `
    <div class="container">
        <pre>{{ currentuser }}</pre>
        <h1>Hello, {{ currentuser.username }}</h1>
    </div>
    `
}