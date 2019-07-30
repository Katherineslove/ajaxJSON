$(document).ready(function(){


  $('#ageRangeSlider').slider({
    range: true,
    min: 0,
    max: 100,
    values: [0,100],
    slide: function(event, ui){

    },
    stop: function(event, ui){
      // console.log(ui.values);
      $('#currentRange').text(`${ui.values[0]} - ${ui.values[1]}`);
      minAge = ui.values[0];
      maxAge = ui.values[1];
      console.log(minAge);
      console.log(maxAge);
    }
  });

  const btn = $('#getPeople');

    btn.click(function() {
      // console.log('button had been clicked');
      $.ajax({
        type: 'GET',
        url: 'https://my.api.mockaroo.com/peopledata.json?key=47b0ce70',
        dataType: 'json',
        success: function(data){
          console.log(data);
          console.log('success');
          data.map(function(person) {
            let card = '<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-1">';
            card += '<div class="card text-center h-100">';
            card += '<div class="card-body">';
            card += `<h5 class ="card title">${person['title']} ${person['first_name']} ${person['last_name']}</h5>`;
            card +=  `<p class="card-text">${person['email']}</p>`;
            card += '</div>';
            card += '</div>';
            card += '</div>';
            $('#peopleContainer').append(card);
          })
        },
        error: function(error) {
          console.log(error);
          console.log('error');
        }
      })
    });






});
