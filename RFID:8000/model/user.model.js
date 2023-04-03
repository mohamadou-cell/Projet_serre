const mongoose = require ('mongoose');

const userSchema = mongoose.Schema(

{

prenom: { type:String},
nom: { type:String},
email: { type:String},
matricule1: { type:String},
matricule2: { type:String},
password: { type:String},




},
{timestamps: true},
{
    collection: 'users'
}
 );




module.exports = mongoose.model('users', userSchema);
