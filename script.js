// faq -----------------------------------------------------------------------------------------
$(".faqcard").click(function () {
    $(this).find(".answer").toggle();
  });
  

  
  // hamburger menu ------------------------------------------------------------------------------
  $(".nav-link-ham").click(function () {
    if ($(".mobile-nav-links").css("display") == "none") {
      $(".nav-link-ham svg").attr("fill", "white");
      $(".nav-link-ham svg").removeClass("bi-list");
      $(".nav-link-ham svg").addClass("bi-x-lg");
      $(".nav-link-ham path").attr(
        "d",
        "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
      );
      $(".mobile-nav-links").css("display", "block");
      $(".mobile-nav-links").css("visibility", "visible");
      $("nav").css("margin-bottom", "10rem");
      $("nav").css("background-color", "#304a8b");
      $(".mlh-img").hide();
    } else {
      $(".nav-link-ham svg").attr("fill", "#304a8b");
      $(".nav-link-ham svg").removeClass("bi-x-lg");
      $(".nav-link-ham svg").addClass("bi-list");
      $(".nav-link-ham path").attr(
        "d",
        "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      );
      $(".mobile-nav-links").css("display", "none");
      $(".mobile-nav-links").css("visibility", "hidden");
      $("nav").css("margin-bottom", "0");
      $("nav").css("background-color", "transparent");
      $(".mlh-img").show();
    }
  });
  
  $(".mobile-nav-links").click(function () {
    $(".nav-link-ham svg").attr("fill", "#304a8b");
    $(".nav-link-ham svg").removeClass("bi-x-lg");
    $(".nav-link-ham svg").addClass("bi-list");
    $(".nav-link-ham path").attr(
      "d",
      "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    );
    $(".mobile-nav-links").css("display", "none");
    $(".mobile-nav-links").css("visibility", "hidden");
    $("nav").css("margin-bottom", "0");
    $("nav").css("background-color", "transparent");
    $(".mlh-img").show();
  });
  
  // meet the team -------------------------------------------------------------------------------------
  class teamMember {
    constructor(team, name, year, position, photo) {
      this.team = team;
      this.name = name;
      this.year = year;
      this.position = position;
      this.photo = photo;
    }
  
    addToDom() {
      this.$div = $("<div>");
      this.$div.addClass("member");
  
      var imgdiv = $("<img>");
      imgdiv.addClass("memberimg");
      imgdiv.attr("src", this.photo);
      imgdiv.attr("alt", "Photo of " + this.name);
      this.$div.append(imgdiv);
  
      var newdiv = $("<div>");
      newdiv.addClass("hoverinfo");
      newdiv.text(this.name + "\n" + this.year + "\n" + this.position);
      this.$div.append(newdiv);
  
      $(".teammembers").append(this.$div);
    }
  }
  
  const phimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Silver_-_replace_this_image_male.svg/640px-Silver_-_replace_this_image_male.svg.png"
  
  const all = [
    {
      team: "director",
      name: "Emily Zhang",
      year: "2024",
      position: "Co-Director",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/EmilyZhang.jpg?v=1697746265570",
    },
    {
      team: "director",
      name: "Kelly Cao",
      year: "2024",
      position: "Co-Director",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/KellyCao.JPG?v=1693227573020",
    },
    {
      team: "director",
      name: "Elizabeth Huang",
      year: "2026",
      position: "Co-Director",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/ElizabethHuang.jpg?v=1693885984134",
    },
    {
      team: "webdev",
      name: "Anna Zhou",
      year: "2025",
      position: "Web Dev Lead",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/AnnaZhou.png?v=1693143794423",
    },
    {
      team: "webdev",
      name: "Ashi Kamra",
      year: "2026",
      position: "Web Dev",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/AshiKamra.png?v=1693228038277",
    },
    {
      team: "dm",
      name: "Sumin Heo",
      year: "2025",
      position: "Design/Marketing Lead",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/SuminHeo.JPG?v=1693227585032",
    },
    {
      team: "dm",
      name: "Jennifer Long",
      year: "2025",
      position: "Design/Marketing",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/JenniferLong.jpg?v=1693143799907",
    },
    {
      team: "dm",
      name: "Emma Lim",
      year: "2024",
      position: "Design/Marketing",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/EmmaLim.jpg?v=1693885988028",
    },
    {
      team: "log",
      name: "Kimberly Hsueh",
      year: "2025",
      position: "Logistics Lead",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/KimHsueh.jpeg?v=1693227577066",
    },
    {
      team: "log",
      name: "Tina Zhong",
      year: "2026",
      position: "Logistics",
      photo: phimg,
    },
    {
      team: "log",
      name: "Mako Irisumi",
      year: "2026",
      position: "Logistics",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/MakoIrisumi.jpg?v=1693143803446",
    },
    {
      team: "log",
      name: "Sabrina Lu",
      year: "2026",
      position: "Logistics",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/SabrinaLu.JPG?v=1693143811370",
    },
    {
      team: "log",
      name: "Diya Khanna",
      year: "2025",
      position: "Logistics",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/DiyaKhanna.jpg?v=1694457406074",
    },
    {
      team: "sponsor",
      name: "Mia Chao",
      year: "2025",
      position: "Sponsorships Lead",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/MiaChao.png?v=1693143808234",
    },
    {
      team: "sponsor",
      name: "Dora Li",
      year: "2026",
      position: "Sponsorships",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/DoraLi.png?v=1694457008823",
    },
    {
      team: "sponsor",
      name: "Leyou Gessessew",
      year: "2027",
      position: "Sponsorships",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/LeyouGessessew.jpg?v=1697762293448",
    },
    {
      team: "sponsor",
      name: "Katelyn Zhou",
      year: "2027",
      position: "Sponsorships",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/KatelynZhou.jpg?v=1698079972019",
    },
    {
      team: "sponsor",
      name: "Linh Dinh",
      year: "2026",
      position: "Sponsorships",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/LinhDinh.png?v=1698167714090",
    },
    {
      team: "sponsor",
      name: "Elizabeth Yan",
      year: "2026",
      position: "Sponsorships",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/elizabethyan.jpg?v=1698080101478",
    },
    {
      team: "sponsor",
      name: "Hannah Chiou",
      year: "2025",
      position: "Sponsorships",
      photo: phimg,
    },
    {
      team: "treasury",
      name: "Caitlin-Rose Ibe",
      year: "2025",
      position: "Treasury Lead",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/CaitlinIbe.jpg?v=1693143796742",
    },
    {
      team: "treasury",
      name: "Jaci Cotaquispe",
      year: "2025",
      position: "Treasury",
      photo: "https://cdn.glitch.global/539b6955-9ff6-4ea6-9668-df589374b34e/JaciCotaquispe.jpg?v=1697746392614",
    },
  ];
  
  function teamClickHandler(team) {
    $(".teammembers").empty();
    for (let i = 0; i < all.length; i++) {
      var a = all[i];
      if (a["team"] === team.data.param1) {
        var newmember = new teamMember(
          a["team"],
          a["name"],
          a["year"],
          a["position"],
          a["photo"]
        );
        newmember.addToDom();
      }
    }
    $(".teamtitle").css("background-color", "rgba(255, 255, 255, 0.6)");
    $(".teamtitle").css("color", "black");
    $(this).css("background-color", "#0C3149");
    $(this).css("color", "#ffdbb3");
  }
  
  function allClickHandler() {
    $(".teammembers").empty();
    for (let i = 0; i < all.length; i++) {
      var a = all[i];
        var newmember = new teamMember(
          a["team"],
          a["name"],
          a["year"],
          a["position"],
          a["photo"]
        );
        newmember.addToDom();
    }
    $(".teamtitle").css("background-color", "rgba(255, 255, 255, 0.6)");
    $(".teamtitle").css("color", "black");
    $(".allmembers").css("background-color", "#0C3149");
    $(".allmembers").css("color", "#ffdbb3");
  }
  
  $(document).ready(allClickHandler)
  $(".allmembers").click(allClickHandler);
  $(".webdevs").click({param1: "webdev"}, teamClickHandler);
  $(".directors").click({param1: "director"}, teamClickHandler);
  $(".dms").click({param1: "dm"}, teamClickHandler);
  $(".logistics").click({param1: "log"}, teamClickHandler);
  $(".sponsorships").click({param1: "sponsor"}, teamClickHandler);
  $(".treasuries").click({param1: "treasury"}, teamClickHandler);
  
  $(document).on("mouseenter", ".member", function () {
    $(this).find(".hoverinfo").css("display", "flex");
  });
  
  $(document).on("mouseleave", ".member", function () {
    $(this).find(".hoverinfo").hide();
  });