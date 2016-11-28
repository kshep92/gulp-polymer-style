# gulp-polymer-style

A gulp plugin (in early development) that turns *.less files into
Polymer style modules.

## Usage (Intended)

```javascript
var gulp = require('gulp');
var less = require('gulp-less');
var polymerStyle = require('./gulp-polymer-style');

gulp.task('default', function() {
    gulp.src('*.less')
        .pipe(less())
        .pipe(polymerStyle())
        .pipe(gulp.dest('./build'));
});
```

Running the `gulp` command takes `style.less` and outputs this in the `build` directory:

```html
<dom-module id="style"> <!-- <- Module name determined from the file name -->
    <template>
       <style>
           body {
  font-family: Arial;
  color: #fff;
}

       </style>
     </template>
</dom-module>
```

# TADAAA!

Theoretically this can work for SASS files as well, but I haven't tested it.