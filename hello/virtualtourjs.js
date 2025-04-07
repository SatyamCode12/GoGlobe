const tabButtons = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.button-container');

    function showTab(tabId) {
      tabButtons.forEach(tab => tab.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      document.querySelector(tab[onclick="showTab('${tabId}')"]).classList.add('active');
      document.getElementById(tabId).classList.add('active');

      document.getElementById('mapViewer').style.display = 'none';
    }

    function loadMap(place) {
      const map = document.getElementById('mapViewer');
      const frame = document.getElementById('mapFrame');

      const sources = {
        tajMahal: "https://www.google.com/maps/embed?pb=!4v1744033032640!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHA5SzJaQlE.!2m2!1d27.1751447920762!2d78.04214216036003!3f59.887429999999995!4f10.112570000000005!5f0.7820865974627469",
        eiffelTower:"https://www.google.com/maps/embed?pb=!4v1744033273881!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0c0TG14aWdF!2m2!1d48.8583700925299!2d2.29448130096829!3f267.6548!4f27.448400000000007!5f0.7820865974627469",
        statueOfUnity: "https://www.google.com/maps/embed?pb=!4v1744033414863!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDR1ZkxrUkE.!2m2!1d21.83795737130296!2d73.7197113173511!3f297.83108472503807!4f3.703149378465554!5f0.7820865974627469",
        modiStadium: "https://www.google.com/maps/embed?pb=!4v1744033543563!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGVpTUh6emdF!2m2!1d23.09171007792925!2d72.59751117828006!3f351.56983279402954!4f-13.913741653210238!5f0.7820865974627469",
        melbourne: "https://www.google.com/maps/embed?pb=!4v1744033629310!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHl0LW5XSmc.!2m2!1d-37.81996168216558!2d144.9834567015241!3f181.95205479452056!4f1.8082191780821972!5f0.4000000000000002",
        rajivGandhi: "https://www.google.com/maps/embed?pb=!4v1744033732095!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VqOW5TZnc.!2m2!1d17.40631857245007!2d78.55042886868021!3f260!4f20!5f0.7820865974627469",
        centralPark: "https://www.google.com/maps/embed?pb=!4v1744033823091!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3EwSjZKRlE.!2m2!1d40.78121993229734!2d-73.96651379585668!3f352.47512753980345!4f18.789529496527834!5f0.40033893441910756",
        khusroBagh:"https://www.google.com/maps/embed?pb=!4v1744033900703!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzFqYkNnWmc.!2m2!1d25.44227130959598!2d81.82103883191607!3f336.88745!4f0.11253999999999564!5f0.7820865974627469",
        botanical:"https://www.google.com/maps/embed?pb=!4v1744034026569!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ05vWW5CclFF!2m2!1d28.56318862410293!2d77.33601828264972!3f299.88745!4f0.11253999999999564!5f0.7820865974627469"
      };

      frame.src = sources[place];
      map.style.display = 'block';
    }