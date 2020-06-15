const { src, dest, parallel, series } = require('gulp')
const del = require('del')

// 载入插件
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const swig = require('gulp-swig')
const imagemin = require('gulp-imagemin')


const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'Features',
      link: 'features.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}
const clean = ()=>{
  return del(['dist'])
}

const style = () => {
  return src('./src/assets/styles/*.scss', { base: 'src'})
    .pipe(sass({ outputStyle: 'expanded'}))
    .pipe(dest('dist'))
}
const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src'})
    .pipe(babel({ presets: ['@babel/preset-env']}))
    .pipe(dest('dist'))
}
const html = () => {
  return src('src/*.html', { base: 'src' })
    .pipe(swig({data}))
    .pipe(dest('dist'))
}
const img = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}
// 处理public
const extra = ()=>{
  return src('public/**', { base: 'public'})
    .pipe(dest('dist'))
}

const compile = parallel(style, script, html, img, font)
const build = series(clean, parallel(compile, extra))
module.exports = {
  build
}

