        window.onclick = function
      selectedIsland() {
      var list = document.getElementById("island_selection").value;
      console.log(list)
       };

      const islandlist = document.getElementById("island_selection");

      islandlist.addEventListener("change", event => {
        window.location.hash = event.target.value;
      })
      