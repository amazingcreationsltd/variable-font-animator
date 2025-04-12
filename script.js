        // Wait for DOM to be fully loaded
        $(document).ready(function() {
            var theText = "Variable fonts are awesome!";
            $(".text-animation-container").each(function() {
                for (let i = 0; i < theText.length; i++) {
                    let delay = (i * 1.5) / theText.length;
                    let e = $("<span>" + theText[i] + "</span>");
                    $(this).append(e);
                    e.css("animation-delay", delay + "s");
                }
            });
        }); 