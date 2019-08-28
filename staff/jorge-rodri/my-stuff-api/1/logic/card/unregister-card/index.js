const { User } = require('../../../data')

module.exports = function (id, idc) {
    // TODO validate fields
    return ( async ()=>{

        const user = await User.findById(id)
        
        if (user==null) throw new Error(`wrong credentials`)
    
        const i = user.card.findIndex(_card => _card._id==idc) 
        
        if(i==-1) throw new Error(`wrong id of card`)
        
        user.card.splice(i,1)
        
        await user.save()

        return user
    })()
}