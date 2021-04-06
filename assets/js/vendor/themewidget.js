$(document).ready(function () {
    // Layout switcher
    if ($("body").hasClass("vertical")) {
        $("#SwitchCheckDefaultLayout").prop("checked", true);
    }

    $("#SwitchCheckDefaultLayout").click(function () {
        if ($(this).prop("checked")) {
            $("body").removeClass();
            $("body").addClass("vertical sidebar-open");
            if ($("body").hasClass("vertical")) {
                $("#SwitchCheckDefaultLayout").prop("checked", true);
                $("#SwitchCheckBoxedLayout").prop("checked", false);
                $("#SwitchCheckHorizontalLayout").prop("checked", false);
                $("#SwitchCheckMinimalLayout").prop("checked", false);
            }
        } else {
            $("body").removeClass();
            $("body").addClass("vertical sidebar-open");
            if ($("body").hasClass("vertical")) {
                $("#SwitchCheckDefaultLayout").prop("checked", true);
            }
        }
    });

    $("#SwitchCheckBoxedLayout").click(function () {
        if ($(this).prop("checked")) {
            $("body").removeClass();
            $("body").addClass("boxed sidebar-open");
            $(".sidebar").addClass("position-absolute");
            if ($("body").hasClass("boxed")) {
                $("#SwitchCheckDefaultLayout").prop("checked", false);
                $("#SwitchCheckBoxedLayout").prop("checked", true);
                $("#SwitchCheckHorizontalLayout").prop("checked", false);
                $("#SwitchCheckMinimalLayout").prop("checked", false);
            }
        } else {
            $("body").removeClass();
            $("body").addClass("vertical sidebar-open");
            if ($("body").hasClass("vertical")) {
                $("#SwitchCheckDefaultLayout").prop("checked", true);
            }
        }
    });
    $("#SwitchCheckHorizontalLayout").click(function () {
        if ($(this).prop("checked")) {
            $("body").removeClass();
            $("body").addClass("horizontal sidebar-open");
            if ($("body").hasClass("horizontal")) {
                $("#SwitchCheckDefaultLayout").prop("checked", false);
                $("#SwitchCheckBoxedLayout").prop("checked", false);
                $("#SwitchCheckHorizontalLayout").prop("checked", true);
                $("#SwitchCheckMinimalLayout").prop("checked", false);
            }
        } else {
            $("body").removeClass();
            $("body").addClass("vertical sidebar-open");
            if ($("body").hasClass("vertical")) {
                $("#SwitchCheckDefaultLayout").prop("checked", true);
            }
        }
    });
    $("#SwitchCheckMinimalLayout").click(function () {
        if ($(this).prop("checked")) {
            $("body").removeClass();
            $("body").addClass("minimal sidebar-closed");
            if ($("body").hasClass("minimal")) {
                $("#SwitchCheckDefaultLayout").prop("checked", false);
                $("#SwitchCheckBoxedLayout").prop("checked", false);
                $("#SwitchCheckHorizontalLayout").prop("checked", false);
                $("#SwitchCheckMinimalLayout").prop("checked", true);
            }
        } else {
            $("body").removeClass();
            $("body").addClass("vertical sidebar-open");
            if ($("body").hasClass("vertical")) {
                $("#SwitchCheckDefaultLayout").prop("checked", true);
            }
        }
    });
    // Color Theme Primary
    $("#SwitchCheckThemeDefault").click(function () {
        if ($(this).prop("checked")) {
            $("#topbar").removeClass();
            $("#topbar").addClass("topbar shadow");
            $("#SwitchCheckThemePrimary").prop("checked", false);
            $("#SwitchCheckThemeSuccess").prop("checked", false);
            $("#SwitchCheckThemeWarning").prop("checked", false);
            $("#SwitchCheckThemeDanger").prop("checked", false);
        }
    });

    // Color Theme Primary
    $("#SwitchCheckThemePrimary").click(function () {
        if ($(this).prop("checked")) {
            $("#topbar").removeClass();
            $("#topbar").addClass("topbar shadow bg-primary-dark");
            $("#topbar ul li .btn").addClass("bg-transparent");
            if ($("#topbar").hasClass("bg-primary-dark")) {
                $("#SwitchCheckThemePrimary").prop("checked", true);
                $("#SwitchCheckThemeSuccess").prop("checked", false);
                $("#SwitchCheckThemeWarning").prop("checked", false);
                $("#SwitchCheckThemeDanger").prop("checked", false);
                $("#SwitchCheckThemeDefault").prop("checked", false);
            }
        } else {
            $("#topbar").removeClass();
            $("#topbar").addClass("topbar shadow");
            $("#SwitchCheckThemeDefault").prop("checked", true);
        }
    });
    // Color Theme Secondary
    $("#SwitchCheckThemeSuccess").click(function () {
        if ($(this).prop("checked")) {
            $("#topbar").addClass("topbar shadow bg-success-dark");
            $("#topbar ul li .btn").addClass("bg-transparent");
            if ($("#topbar").hasClass("bg-success-dark")) {
                $("#SwitchCheckThemePrimary").prop("checked", false);
                $("#SwitchCheckThemeSuccess").prop("checked", true);
                $("#SwitchCheckThemeWarning").prop("checked", false);
                $("#SwitchCheckThemeDanger").prop("checked", false);
                $("#SwitchCheckThemeDefault").prop("checked", false);
            }
        } else {
            $("#topbar").removeClass();
            $("#topbar").addClass("topbar shadow");
            $("#SwitchCheckThemeDefault").prop("checked", true);
        }
    });
    // Color Theme Warning
    $("#SwitchCheckThemeWarning").click(function () {
        if ($(this).prop("checked")) {
            $("#topbar").addClass("topbar shadow bg-warning-dark");
            $("#topbar ul li .btn").addClass("bg-transparent");
            if ($("#topbar").hasClass("bg-warning-dark")) {
                $("#SwitchCheckThemePrimary").prop("checked", false);
                $("#SwitchCheckThemeSuccess").prop("checked", false);
                $("#SwitchCheckThemeWarning").prop("checked", true);
                $("#SwitchCheckThemeDanger").prop("checked", false);
                $("#SwitchCheckThemeDefault").prop("checked", false);
            }
        } else {
            $("#topbar").removeClass();
            $("#topbar").addClass("topbar shadow");
            $("#SwitchCheckThemeDefault").prop("checked", true);
        }
    });
    // Color Theme Danger
    $("#SwitchCheckThemeDanger").click(function () {
        if ($(this).prop("checked")) {
            $("#topbar").addClass("topbar shadow bg-danger-dark");
            $("#topbar ul li .btn").addClass("bg-transparent");
            if ($("#topbar").hasClass("bg-danger-dark")) {
                $("#SwitchCheckThemePrimary").prop("checked", false);
                $("#SwitchCheckThemeSuccess").prop("checked", false);
                $("#SwitchCheckThemeWarning").prop("checked", false);
                $("#SwitchCheckThemeDanger").prop("checked", true);
                $("#SwitchCheckThemeDefault").prop("checked", false);
            }
        } else {
            $("#topbar").removeClass();
            $("#topbar").addClass("topbar shadow");
            $("#SwitchCheckThemeDefault").prop("checked", true);
        }
    });

    if($("#lightTheme").is(":disabled")){
        console.log("light");
    } 
    if($("#darkTheme").is(":disabled")){
        console.log("dark");
    }
});