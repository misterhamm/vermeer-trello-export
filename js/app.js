var token = '9e15f54c810d4fa4abfdde2afe0d5e2a6aebe3010905bbe353319ce535473b15';
var boardId = '5ca4e02852a1803328e8a563';

$('.export-submit').on('click', e => {
  let key = $('.key').val();
  getCards(key);
});

function getCards(key) {fetch(`https://api.trello.com/1/boards/${boardId}/cards?key=${key}&token=${token}`).then(function (response) {
  return response.json();
})
  .then(function (results) {
    console.log(results);
    results.forEach(e => {
      let name = e.name;
      let desc = e.desc;
      let link = e.shortUrl;


      $('.list tbody').append(
        `<tr>
          <td>${name}</td>
          <td>${desc}</td>
          <td><a href="${link}" target="_blank">Link to card</a></td>
        </tr>
        `
      )

    });

  });
}