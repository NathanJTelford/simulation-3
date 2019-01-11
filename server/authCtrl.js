const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { username, password, profile_pic } = req.body;
        const db = req.app.get('db');
        const accArr = await db.find_username({ username: username });

        if (accArr >= 1) {
            return res.status(200).send({ message: 'Username Taken' })
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            let newArr = await db.create_user({ username: username, password: hash, profile_pic: profile_pic })
            req.session.user = { id: newArr[0].user_id, username: newArr[0].username };
        }

        res.status(201).send({ massage: 'Account Created', userData: req.session.user, loggedIn: true })

    },

    login: async (req, res) => {
        const {username,password} = req.body;
        const db = req.app.get('db');
        let userArr = await db.find_username({username:username});
        if(!userArr[0]){
            res.status(200).send({message:'Email Not Found'})
        }else {
            const result = bcrypt.compareSync(password, userArr[0].password)
            if(!result){
                res.status(401).send({message:'Incorrect Password'})
            }
            req.session.user={
                id:userArr[0].user_id, email:userArr[0].username
            }
        }


    },

    post: (req, res) => {

    },

    delete: (req, res) => {

    },

    edit: (req, res) => {

    },

    userData: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send({ message: 'please log in' })
        }
    }

}