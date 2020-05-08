# About Hubstack-AdminPro 
https://hubstack.netlify.app/

Hubstack AdminPro is a WebApp template for admin dashboards and control panels. It is fully responsive HTML template, which is based on the CSS framework Bootstrap 4. It utilizes all of the Bootstrap components in its design and re-styles many commonly used plugins to create a consistent design that can be used as a user interface for backend applications.

## Development Environment Tools

<p><img src="https://hubstack.netlify.com/assets/images/powered_by.png"></p>


#### Bootstrap

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery. https://getbootstrap.com/

#### Gulp

Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. https://gulpjs.com/

#### Jekyll

Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more. https://jekyllrb.com/



## Folder Structure

After purchasing our template extract the zip file and you will see this structure.

```javascript
├── Hubstack-AdminPro 
    ├── includes/
    ├── layouts/
    ├── assets/
    │   └── css/
    │   └── images/
    │   └── js/
    │   ├── scss/
    │   │   └── components/
    │   │   └── config/
    │   │   └── customs/
    │   │   └── layouts/
    │   │   └── style.scss
    │   │   └── style-dark.scss
    ├── demo/
    ├── html/
    │   └── html pages
    ├── .gitignore
    ├── config.dev.yml
    ├── config.yml
    ├── gulpfile.js
    ├── index.html
    └── package.json
```

## Get Started

### How to Get Started

You can start by installing Node Package Manager. Npm is a default package manager for the JavaScript runtime environment Node.js

```javascript
npm install --global npm@latest
```

To check whether is node succesfully install or not.

```javascript
npm --version
```

You can procced then by installing Gulp. Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. To install gulp globally run


```javascript
npm install --global gulp-cli
```

If you have previously installed gulp then remove it.

```javascript
npm rm --global gulp
```

To check whether is gulp succesfully install or not.

```javascript
gulp --version
```

You can procced then by installing Jekyll. Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more. To install Jekyll globally follow the instruction to the jekyll website
https://jekyllrb.com/docs/installation/


To check whether is Jekyll succesfully install or not.

```javascript
jekyll -v
```

Then You set.

In the root of your project folder, run npm install to install all package.json dependency

```javascript
npm install
```

What next, you can launch your App with this command


```javascript
npm run dev
```

This command will execute all the assets(js,scss and html) to the _site folder separately.

If everything was installed correctly, you should see the compile version running on http://localhost:3000/

Note: If your http://localhost:3000/ is not available or set to a existing server please change the base url on your _config.dev.yml

There is two Yaml configuration files: `_config.yml` and `_config.dev.yml` that when running in development mode the _dev_ configuration file overrides `baseurl` and `jekyll-minifier` default values.

## Features

This is the list of what is included in this template

- Well Crafted Design
-2 Modes (Light & Dark Mode)
- 4 Dashboards
- 60+ ready to use graph and Charts
- 10+ vector maps for countries
- 5 Layouts
- 50+ Pages
- Authentication Pages
- Calendar
- Mailbox
- Booking layout
- Kanban Board
- Timeline
- Profile Page
- Billing Page
- Files layout
- UI Kits
- Creative Widgets
- Vertical Layout
- Horizontal Layout
- Boxed Layout
- Minimal Layout
- Easy Customization
- Clean Design
- SASS Supported
- Well Commented & Quality Code
- W3C Validated
- All Browser Support

## Credit & Ressources

We have used some third party plugins, you can check the list
- [Bootstrap 4](https://getbootstrap.com/)
- [Jquery 3.4.1](https://jquery.com/)
- [Popper](https://popper.js.org/)
- [Font Awesome 5](https://fontawesome.com/changelog/latest)
- [Feathericons](https://feathericons.com/)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Waves](http://fian.my.id/Waves)
- [Bootstrap colorpicker](https://github.com/itsjavi/bootstrap-colorpicker.git)
- [Bootstrap datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/)
- [ANIMSITION](https://git.blivesta.com/animsition/")
- [Charts Js](https://www.chartjs.org/)
- [Morris Js](https://morrisjs.github.io/morris.js/index.html)
- [Apexcharts](https://apexcharts.com/)
- [Sparkline](https://omnipotent.net/jquery.sparkline/#s-about)
- [Circle js](https://github.com/lugolabs/circles)
- [JVector Map](https://jvectormap.com/)
- [Full Calendar](https://fullcalendar.io/)
- [Moment Js](https://momentjs.com/)
- [Raphael Js](http://raphaeljs.com/)
- [Wow Js](https://wowjs.uk/docs)
