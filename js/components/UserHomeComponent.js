export default {
    props: ['currentuser'],

    template: `
    <div class="container">
        <pre>{{ this.currentuser }}</pre>
        <h1>Hello, {{ this.currentuser.uname }}</h1>
    </div>
    `
}