declare var PFUser,NSString;
export class ParseUser {
    become(sessionToken: string){
        PFUser.become(NSString.initWithString(sessionToken));
    }
    currentUser(){
        return PFUser.currentUser();
    }
    logOut(){
        PFUser.logOut();
    }
    requestPasswordReset(email:string){
        PFUser.requestPasswordResetForEmail(NSString.initWithString(email))
    }
    
}