<h2 align="center">Basic ng commands</h2>
<ol>
    <li><strong>ng new app-name</strong> is used to create new angular project</li>
    <li><strong>ng lint</strong> is used to check the violation from standards in the project</li>
    <li><strong>ng build</strong> is used to build this project for production purpose</li>
    <li><strong>ng test</strong> is used to test this application using karma framework</li>
    <li><strong>ng e2e</strong> is used to test this application using jasmine framework (selenium automation)</li>
</ol>

<h2 align="center">Interpolation</h2>
<ol>
    <li><strong>"{{var}}"</strong> which is declared in the .ts file</li>
</ol>

<h2 align="center">Event Binding</h2>
<ol>
    <li><strong>(event)="methodName(*)"</strong> methodName(*) must be defined in .ts file</li>
</ol>

<h2 align="center">Two way Data binding</h2>
<ol>
    <li><strong>[(ngModule)]="var"</strong> where var is the value in the .ts file</li>
</ol>

<h2 align="center">*ngIf</h2>
<ol>
    <li><strong>*ngIf="boolean var"</strong> where var is the value in the .ts file</li>
</ol>


<h2 align="center">Routing</h2>
<ol>
    <li>create <strong>Routes</strong> array in the module.ts and in imports register it using <strong>RouterModule.forRoot(Routes)</strong></li>
    <li>The objects in the Routes contain path: and component: </li>
</ol>

<h2 align="center">Dependency Injection in Angular8</h2>
<ol>
    <li>Dependency Injection <strong>is built in feature</strong> of Angular</li>
    <li>Simply put the dependent type in the constructor and use in the class</li>
</ol>

<h2 align="center">Redirection</h2>
<ol>
    <li>So we can redirect from one page to another</li>
    <li>Simply inject Router in the required .ts file and then call its navigate method to go desired page</li>
</ol>

<h2 align="center">Path Variable</h2>
<ol>
    <li>In app-routing.module.ts change the router path to path:var where var is our variable in the url path</li>
    <li>Now get path variable using ActivatedRouter [inject it first] and then get the parameter using: -></li>
    <li>this.ActivatedRouter(instance).snapshot.params['pathvariable name']</li>
</ol>

<h2 align="center">*ngFor</h2>
<ol>
    <li>This used for iteration</li>
    <li>Expression: *ngFor="let var of vars"</li>
    <li>var will be object in the array, we can use var</li>
</ol>

<h2 align="center">routerLink</h2>
<ol>
    <li>Alternate for href</li>
    <li>It is not refreshed the page while href load whole page</li>
    <li>ud in anchor tag</li>
    <li>simply place name of the path</li>
</ol>

<h2 align="center">Classes in TypeScript</h2>
<ol>
    <li>When we write variables in the constructor it becomes field variables in type script class</li>
</ol>

<h2 align="center">Pipe</h2>
<ol>
    <li>is used to format items</li>
    <li>expression: object | format</li>
    <li>Here, I used datePip {{date | date:'medium"}} etc</li>
</ol>

<h2 align="center">Service</h2>
<ol>
    <li>Service is class which is injectable in root</li>
    <li>so we can get at any level this class</li>
    <li>ng generate service from/path/to</li>
</ol>

<h2 align="center">Session Storage</h2>
<ol>
    <li>We can store any info in key value pair in our session</li>
    <li>is dependant on browser</li>
    <li>as soon as browser closed, session will destory</li>
</ol>

<h2 align="center">CanActivate Interface</h2>
<ol>
    <li>We create a routeGaurd service and implement this service with CanActivate</li>
    <li>We implement the method and return true if user is logged in</li>
    <li>otherwise false</li>
    <li>we can redirect our page to login page if user is not logged in</li>
    <li>Then we add canActivate field in our path in app-routing-module.ts</li>
</ol>

<h2 align="center">HttpClient</h2>
<ol>
    <li>To get data from the web services, we use HttpCleint</li>
    <li>Import HttpClientModule in app.module.ts</li>
    <li>Inject HttpClient newly made class in data folder</li>
    <li>and then using get method of httpClient return the Observable</li>
    <li>In the component class, use this observales, as success reponse, error respose etc</li>
</ol>

<h2 align="center">Tick Trick</h2>
<ol>
    <li>use `expression`</li>
    <li>e.g. `path/to/${name}`</li>
</ol>
