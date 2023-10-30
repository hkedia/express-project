const path = require('path')

function getMessages(req, res) {
  // res.send('<ul><li>Hello Albert</li></ul>');
  res.render('messages', {
    title: 'Messages to my friends',
    friend: 'Elon Musk'
  })
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skiing.jpg'))
}

function postMessage(req, res) {
  console.log('Updating messages...')
}

module.exports = {
  getMessages,
  postMessage
}