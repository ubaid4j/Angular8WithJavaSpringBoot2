<h1>Spring Boot Web Service</h1>

<h2 align="center">@CrossOrigin(origins)</h2>
<ol>
    <li>We use @CrossOrigin(origins) to allow access from different server</li>
</ol>

<h2 align="center">Populating using static {}</h2>
<ol>
    <li>You can declare a static field, and you can populate it using static { //here your code go }</li>
</ol>
<h2 align="center">Response Entity</h2>
<ol>
    <li>On update or delete request, we may enter ReponseEntity</li>
    <li>We can return ResponseEntity.ok().build() on success or</li>
    <li>ResponseEntity.notFound().build() when item is not present etc</li>
</ol>
