
exports.getUsers = (req,res)=>{
    const users = [
        {name: 'John',mail: 'john@mail.com'}
    ]

    res.status(200).json(users);
}


exports.setUsers = (req,res)=>{
    return res.status(201).json(req.body)
}