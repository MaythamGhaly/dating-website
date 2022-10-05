
import {PageLocations} from "./page-location.js";
import {LoginValidation} from "./login.js";
import {GetUsers} from "./getusers.js";
import {getFavorite} from "./getfavorite.js"
import {getBlock} from "./get-block.js"
import {getProfile} from "./get-profile.js"
import {register} from "./register.js"


PageLocations();
register();
LoginValidation();
GetUsers();
getFavorite();
getBlock();
getProfile();
