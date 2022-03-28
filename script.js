function myFunction() {

    var element = document.body;
    element.classList.toggle("dark_mode");

    var boxCvt = document.getElementById("switchClassContent");
    var currentClassBox = boxCvt.className;
    boxCvt.className = currentClassBox == "box-dark-mode" ? "content" : "box-dark-mode";

    var headerCvt = document.getElementById("switchClassHeader");
    var currentClassHeader = headerCvt.className;
    headerCvt.className = currentClassHeader == "header-dark-mode" ? "header" : "header-dark-mode";

    var boxContentCvt = document.getElementById("switchClassBoxContent");
    var currentClassBoxContent = boxContentCvt.className;
    boxContentCvt.className = currentClassBoxContent == "box_content-dark-mode" ? "box_content" : "box_content-dark-mode";

    var footerCvt = document.getElementById("switchClassFooter");
    var currentClassfooter = footerCvt.className;
    footerCvt.className = currentClassfooter == "footer-dark-mode" ? "footer" : "footer-dark-mode";
}