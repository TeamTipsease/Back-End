const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./authModel.js');
const requireAuth = require('./authMiddleware.js');
const secret = require('../config/secret')

router.get('/', requireAuth, (req, res) => {
    Users.find()
      .then(banana => {
        res.json(banana);
      })
      .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    let id = req.params.id;

    Users.findById(id)
    .then(user => {
        const username = user.username;
        const worker = user.isServiceWorker;
        res.status(200).json({ username: username, isServiceWorker: worker  });
    })
    .catch(err => res.status(500).json({ message: 'User with specified ID does not exist.', error: error }));
})

router.post('/register', (req, res) => {
  const user = req.body;

    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash;

    Users.insert(user)
        .then(userN => {
            const token = generateToken(userN)
            for( let i = 0; i < userN.length; i++){
                if(userN[i].completed == 0){
                    userN[i].completed = false
                }
                else{
                    userN[i].completed = true
            }}
            res.status(200).json({userN,token})
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
          });
});


router.post('/login', (req, res) => {
  let { username, password } = req.body;

    Users.filtering({username})
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}! Here's a token...`,
                    user,
                    token
                  });
            }
            else{
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: `error logging user in!`})
        })
});

router.delete('/:id', (req, res) => {
    Users.deleteUser(req.params.id)
    .then(event => {
        if (!event) {
            res.status(404).json({message: " No event exists by that ID!"})
        } else {
            res.status(200).json({message: "deleted"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

function generateToken(user){
    const payload = {
        username: user.username,
        password: user.password
    };
    const options ={
        expiresIn: '1d'
    };
    return jwt.sign(payload, secret.jwtSecret, options);
}
module.exports = router;