# TODO

## Login
1. perform LOGIN request ✓
2. on success return token & user_profile ✓
3. store token & email on localStorage ✓
4. set token to be used by axois ✓

## Logout
1. add token to blacklist if not expired
2. remove token and email from localStorage

### Note
1. add JOB to delete all expired tokens in blacklist every (time needed for JWT to expired)

## Launch app
1. try to load user_profile  
2.  on success load user_profile into redux and redirect to home page
3.  on failure redirect to login