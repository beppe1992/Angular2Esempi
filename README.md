# AngularEsempi
Questo progetto racchiude alcuni esempi di applicazioni sviluppate con Angular.

## HelloWorldExample
Questo progetto contiene un semplice Hello World fatto con Angular2<br>

### Framework
Questo progetto utilizza Angular e TypeScript. Non è presente alcun servizio REST.

### Applicazione
I file principali dell'applicazione sono:<br>
myfirstcomponent.ts --> Contiene il componente angular <br>
Index.html --> Contiene la pagina html

### Configurazioni
File package.json --> Dipendenze del progetto <br>
File tsconfig.json --> Configura typescript <br>
File typings.json --> Librerie aggiuntive typescript <br>
File systemjs.config.js --> Carica i moduli e inizializza l'applicazione<br>

Per provare il progetto e' necessario aver installato nmp.
Una volta scaricato il progetto è necessario lanciare il comando "npm install"  per inizializzare le dipendenze Javascript utilizzate dal progetto.<br>

### Test
Per provare il progetto è necessario eseguire il comando npm start
Esempio HelloWorld: http://localhost:3000/ <br>

## ProgettoWebSempliceGuidato 
Questo progetto contiene le istruzioni per creare un progetto completo fatto con Angular2.<br>
Le istruzioni sono nel documento "STEP_BY_STEP_INDICATION.docx"<br>

## ExtensionLibraries  
Questo progetto contiene alcuni esempi di utilizzo di componenti di terze parti:<br>
1. Esempio utilizzo di alcuni componenti di Primefaces<br>

## AngularAndSpringApplication
Questo progetto contiene un esempio di implementazione di un progetto utilizzando un Angular lato client e Spring Boot lato server.<br>

### Framework
Questo progetto utilizza Angular lato client e Spring Boot lato Server.

### Configurazioni
Una volta scaricato il progetto è necessario lanciare il comando "npm install"<br>
Per provare il progetto e' necessario lanciare il comando "ng build --base-href /dist/" ed eseguire il main di Spring Boot (App.java).

### Link
Link Esempio: http://localhost:8080/dist/index.html <br>