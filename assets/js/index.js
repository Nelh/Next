// ------------------------------------------------------
// @Sidebar
// ------------------------------------------------------
  
$(function () {
    // Sidebar links
    $('.sidebar .sidebar-menu li a').on('click', function () {
      const $this = $(this);
  
      if ($this.parent().hasClass('open')) {
        $this
          .parent()
          .children('.dropdown-menu')
          .slideUp(200, () => {
            $this.parent().removeClass('open');
          });
      } else {
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('.dropdown-menu')
          .slideUp(200);
  
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('a')
          .removeClass('open');
  
        $this
          .parent()
          .parent()
          .children('li.open')
          .removeClass('open');
  
        $this
          .parent()
          .children('.dropdown-menu')
          .slideDown(200, () => {
            $this.parent().addClass('open');
          });
      }
    });

    $('.offcanvas-toggle').click(function(e) {
        e.preventDefault();
        $('.offcanvas-menu').toggleClass('open');
    });

    // Sidebar Activity Class
    const sidebarLinks = $('.sidebar').find('.sidebar-link');
  
    sidebarLinks
      .each((index, el) => {
        $(el).removeClass('active');
      })
      .filter(function () {
        const href = $(this).attr('href');
        const pattern = href[0] === '/' ? href.substr(1) : href;
        return pattern === (window.location.pathname).substr(1);
      })
      .addClass('active');
  
    // ٍSidebar Toggle
    $('.sidebar-toggle').on('click', e => {
      $('.app').toggleClass('is-collapsed');
      e.preventDefault();
    });
  
    /**
     * Wait untill sidebar fully toggled (animated in/out)
     * then trigger window resize event in order to recalculate
     * masonry layout widths and gutters.
     */
    // $('#sidebar-toggle').click(e => {
    //   e.preventDefault();
    //   setTimeout(() => {
    //     window.dispatchEvent(window.e);
    //   }, 300);
    // });
}());

// ------------------------------------------------------
// @Scrollbar
// ------------------------------------------------------

$(function () {
  const scrollables = $('.scrollable');
  if (scrollables.length > 0) {
    scrollables.each((index, el) => {
      new PerfectScrollbar(el);
    });
  }
}());

// ------------------------------------------------------
// @Navbar search
// ------------------------------------------------------
  
$(function () {
  $('.search-toggle').on('click', e => {
    $('.search-box, .search-input').toggleClass('active');
    $('.search-input input').focus();
    e.preventDefault();
  });
}());


// ------------------------------------------------------
// @Popover & Tooltips
// ------------------------------------------------------
// Popover
$(function() {
  $('[data-bs-toggle="popover"]').popover()
});
// Tooltips
$(function() {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

$(function () {
  // Wow.js
  new WOW().init();

  // Waves.js
  Waves.attach('.wave-effect', ['waves-block']);
  Waves.init();
});
