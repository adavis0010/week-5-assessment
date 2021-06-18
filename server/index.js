const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const secretForm = document.querySelector('#secret')
const gstbkForm = document.querySelector('#guestbook')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

// fortune cookie
// keep getting a 404 error. will troubleshoot in another commit to ration time.
app.get("/api/fortune", (req, res) => {
  const fortune = ['Your family is young, gifted and attractive.',
                    'There’s no such thing as an ordinary cat.',
                    'The smart thing to do is to begin trusting your intuitions.',
                    'No one can walk backwards into the future.',
                    'Feeding a cow with roses does not get extra appreciation.',

  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

// secret
// The idea here is to let the client submit some text and save it to the secret object. There isn't supposed to be any way to get the secret back bc I'm not going to tell anyone your secret.
function secretSubmitHandler(e) {
 e.preventDefault()

 let secret = document.querySelector('#secretInput')
 let secretObj = {
   secret: secret.value
 }

 submit(secretObj)

  secret.value = ''
  return
  console.log(secret.value)
}


// smile
app.get('/api/users', (req,res) =>{
  const reasons = ['1. Thousands of trees grow every year because squirrels forget where they hide their nuts','2. Somewhere in the world, a baby just discovered bubbles','3. Cows have best friends and can recognize them among other cows','4. So do sperm whales', 'Vikings gave kittens as wedding gifts']
  res.status(200).send(reasons)
})

// guestbook

function guestbookSubmitHandler(e) {
  e.preventDefault()

  let name = document.querySelector('#name')
  let email = document.querySelector('#email')

  let gstbkObj = {
    name: name.value,
    email: email.value,
  }

  submit(gstbkObj)

  name.value = ''
  email.value = ''

}


secretForm.addEventListener('submit', secretSubmitHandler)
gstbkForm.addEventListener('#gstbkSubmit',guestbookSubmitHandler)

app.listen(4000, () => console.log("Server running on 4000"));
