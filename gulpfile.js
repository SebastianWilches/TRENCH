//para poder comunicar gulp con sass, necesitamos la libreria de desarrollo gulp-sass
//Terminal: npm install gulp-sass

//Importo la funcionalidades variables (Notación node)

//Variables src = source, dest = destination, watch
const { src, dest, watch } = require("gulp");        //Se pone en llaves porque esta retorna multiples funcionalidades
const sass = require("gulp-sass")(require("sass"));  //Solo retorna una funcionalidad, entonces se pone en 1 var.
//notese que gulp-sass es el conector, pero sass es el que tiene el conocimiento
const plumber = require("gulp-plumber"); //Para que no detenga el workflow en errores


function css(done){
    console.log("Compilando hoja de estilos CSS");
     
    src("src/scss/**/*.scss")//Identificar el archivo .SCSS
        .pipe(plumber())
        .pipe( sass() )          //Compilar
        .pipe(dest("build/css"))                 //Almacenar
    done(); //Callback
}


function dev(done) {
    //Archivo que va a observar por cambios, y funcion que va a llamar
    watch("src/scss/**/*.scss", css);
    done();
}


exports.css = css; //Para llamar funcionalidad gulp
exports.dev = dev;